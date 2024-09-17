import React from "react";
import LeftPopOverLayout from "../../../components/ui/LeftPopOverLayout";
import { Stack } from "@chakra-ui/react";
import ErrorInterface from "../../../interface/Error";
import validateName from "../../../functions/validateName";
import FormInput from "../../../components/input/FormInput";
import { SequenceInterface } from "../../../interface/Sequence";
import { AppContext } from "../../../context/Context";
import InputSelect from "../../../components/input/InputSelect";
import getTables from "../../../functions/number-series/getTables";
import toTitle from "../../../functions/toTitle";
import updateSeries from "../../../functions/number-series/updateSeries";
import { SelectArray } from "../../../interface/SelectArray";

type Props = {
  close?: () => void;
  setSeries?: (series: any) => void;
  edit?: boolean;
  data: SequenceInterface;
};

export default function EditNumberSeries(props: Props) {
  const [open, setOpen] = React.useState<boolean>(
    props.edit !== undefined ? props.edit : true
  );
  const {
    raiseToast,
    user: CurrentUser,
    setLoading,
  } = React.useContext(AppContext);

  const [seqFor, setSeqFor] = React.useState<SelectArray[]>([]);
  const getAllSequence = React.useRef(() => { });

  function close() {
    setOpen(false);
    if (props.close) props.close();
  }

  const reducer = (state: any, action: any) => {
    console.log({ ...state, ...action.payload });
    switch (action.type) {
      case "updateSeries":
        return { ...state, ...action.payload };
      default:
        return state;
    }
  };

  const [user, dispatch] = React.useReducer(reducer, props.data)



  const [error, setError] = React.useState<ErrorInterface>({
    input: "",
    message: "",
    error: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "updateSeries",
      payload: { [e.target.name]: e.target.value },
    });
  };

  const handleSelect = (name: string, value: string) => {
    dispatch({
      type: "updateSeries",
      payload: {
        [name]: value
      },
    });
    if (error.error) setError({ input: "", message: "", error: false });
  }


  function validate() {
    let error = validateName(user.Name, "Name");
    if (error) {
      setError({ input: "Name", message: error, error: true });
      return false;
    }

    if (user.SeqFor === 0) {
      setError({
        input: "SequenceFor",
        message: "SequenceFor is required",
        error: true,
      });
      return false;
    }
    return true;
  }

  async function save() {
    if (validate()) {
      setLoading(true);
      const res = await updateSeries(user, CurrentUser);

      if (res.status === 200) {
        raiseToast("Sequence Updated", "success");
        if (props.setSeries) {
          let data = res.data;
          props.setSeries((prev: any) => {
            let index = prev.findIndex(
              (item: any) => item.RecId === data.RecId
            );
            prev[index] = data;
            return [...prev];
          });
        }
        close();
      } else {
        raiseToast("Error", "error", res.message);
      }
      setLoading(false);
    }
  }

  getAllSequence.current = async () => {
    try {
      setLoading(true);
      const res = await getTables(CurrentUser);
      if (res.status === 200) {
        let data: SelectArray[] = res.data.map((item: any) => {
          return { value: item.RecId, name: toTitle(item.Name), id: item.Name };
        });
        let seqFor = data.find(
          (item: SelectArray) => item.name === user.SeqFor.toString()
        );
        if (seqFor) {
          dispatch({
            type: "updateSeries",
            payload: { SeqFor: seqFor.value },
          });
        }
        setSeqFor(data);
      } else {
        raiseToast("Error", "error", res.message);
      }
    } catch (e: any) {
      raiseToast("Cannot get SeqFor", "error", e.message);
    }
    setLoading(false);
  };


  const start = React.useCallback(() => {
    if (props.edit) {
      getAllSequence.current();
    }
    setOpen(props.edit !== undefined ? props.edit : true);
  }, [props.edit]);

  React.useEffect(start, [start]);

  const data = React.useCallback(() => {
    if (props.data) {
      dispatch({
        type: "updateSeries",
        payload: props.data,
      });
    }
  }, [props.data]);

  React.useEffect(data, [data]);


  return (
    <>
      <LeftPopOverLayout
        onSave={save}
        path="/New"
        title="Create New Number Series"
        isOpen={open}
        close={close}
      >
        <Stack direction="column">
          <FormInput
            label="Name"
            handleChange={handleChange}
            defaultValue={user.Name}
            name="Name"
            isRequired={true}
            isInvalid={error.input === "Name"}
            error={error.message}
          />

          <InputSelect
            label="Sequence For"
            selectArray={seqFor}
            defaultValue={user.SeqFor.toString()}
            name="SeqFor"
            placeholder="Select Sequence For"
            handleChange={handleSelect}
            isRequired={true}
            isInvalid={error.input === "SeqFor"}
            error={error.message}
          />

          <FormInput
            label="Description"
            handleChange={handleChange}
            defaultValue={user.Description}
            name="Description"
            isRequired={true}
            isInvalid={error.input === "Description"}
            error={error.message}
          />

          <Stack direction="row">
            <FormInput
              label="Prefix"
              handleChange={handleChange}
              defaultValue={user.Prefix}
              name="Prefix"
              isInvalid={error.input === "Prefix"}
              error={error.message}
            />

            <FormInput
              label="Suffix"
              handleChange={handleChange}
              defaultValue={user.Suffix}
              name="Suffix"
              isInvalid={error.input === "Suffix"}
              error={error.message}
            />
          </Stack>

          <Stack direction="row">
            <FormInput
              defaultValue={user.Curr.toString()}
              label="Current"
              handleChange={handleChange}
              name="Curr"
              type="number"
              isRequired={true}
              isInvalid={error.input === "Curr"}
              error={error.message}
            />

            <FormInput
              defaultValue={user.Increment.toString()}
              label="Increment"
              handleChange={handleChange}
              name="Curr"
              type="number"
              isRequired={true}
              isInvalid={error.input === "Curr"}
              error={error.message}
            />
          </Stack>

          <FormInput
            defaultValue={user.MaxDigits.toString()}
            label="Max Digits"
            handleChange={handleChange}
            name="MaxDigits"
            type="number"
            isRequired={true}
            isInvalid={error.input === "MaxDigits"}
            error={error.message}
          />
        </Stack>
      </LeftPopOverLayout>
    </>
  );
}
