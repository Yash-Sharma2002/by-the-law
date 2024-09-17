import React from "react";
import LeftPopOverLayout from "../../../components/ui/LeftPopOverLayout";
import { Stack } from "@chakra-ui/react";
import ErrorInterface from "../../../interface/Error";
import validateName from "../../../functions/validateName";
import FormInput from "../../../components/input/FormInput";
import { AppContext } from "../../../context/Context";
import InputSelect from "../../../components/input/InputSelect";
import createNumberSeries from "../../../functions/number-series/create";
import getTables from "../../../functions/number-series/getTables";
import toTitle from "../../../functions/toTitle";
import {SelectArray} from "../../../interface/SelectArray";
import { EmptySequence, SequenceInterface } from "../../../interface/Sequence";

export default function NewNumberSeries(props: {
  open?: boolean;
  close?: () => void;
  setSeries?: (series: any) => void;
}) {
  const [open, setOpen] = React.useState<boolean>(
    props.open !== undefined ? props.open : true
  );
  const {
    raiseToast,
    user: CurrentUser,
    setLoading,
  } = React.useContext(AppContext);

  const [seqFor, setSeqFor] = React.useState<SelectArray[]>([]);
  const getAllSequence = React.useRef(() => {});

  function close() {
    setOpen(false);
    if (props.close) props.close();
  }

  const [user, setUser] = React.useState<SequenceInterface>(EmptySequence);

  const [error, setError] = React.useState<ErrorInterface>({
    input: "",
    message: "",
    error: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    if (error.error) setError({ input: "", message: "", error: false });
  };

  function validate() {
    let error = validateName(user.Name, "Name");
    if (error) {
      setError({ input: "firstName", message: error, error: true });
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
      const res = await createNumberSeries(user, CurrentUser);

      if (res.status === 200) {
        raiseToast("Sequence Created", "success");
        if (props.setSeries) {
          props.setSeries((prev: any) => {
            return [...prev, res.data];
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
      const res = await getTables(CurrentUser);
      if (res.status === 200) {
        let data = res.data.map((item: any) => {
          return { value: item.RecId, name: toTitle(item.Name), id: item.Name };
        });
        setSeqFor(data);
      } else {
        raiseToast("Error", "error", res.message);
      }
    } catch (e: any) {
      raiseToast("Cannot get SeqFor", "error", e.message);
    }
  };

  React.useEffect(() => {
    getAllSequence.current();
  }, []);

  React.useEffect(() => {
    if (props.open || open) {
      getAllSequence.current();
      setUser(EmptySequence);
    }
    setOpen(props.open !== undefined ? props.open : true);
  }, [props.open, open]);

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
            name="Name"
            isRequired={true}
            isInvalid={error.input === "Name"}
            error={error.message}
          />

          <InputSelect
            label="Sequence For"
            selectArray={seqFor}
            name="SeqFor"
            placeholder="Select Sequence For"
            handleChange={(name, value) => {
              setUser({ ...user, [name]: value });
            }}
            isRequired={true}
            isInvalid={error.input === "SeqFor"}
            error={error.message}
          />

          <FormInput
            label="Description"
            handleChange={handleChange}
            name="Description"
            isRequired={true}
            isInvalid={error.input === "Description"}
            error={error.message}
          />

          <Stack direction="row">
            <FormInput
              label="Prefix"
              handleChange={handleChange}
              name="Prefix"
              isInvalid={error.input === "Prefix"}
              error={error.message}
            />

            <FormInput
              label="Suffix"
              handleChange={handleChange}
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
              name="Increment"
              type="number"
              isRequired={true}
              isInvalid={error.input === "Increment"}
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
