import React from 'react'
import { AppContext } from '../../../context/Context';
import ErrorInterface from '../../../interface/Error';
import validateName from '../../../functions/validateName';
import LeftPopOverLayout from '../../../components/ui/LeftPopOverLayout';
import { Stack } from '@chakra-ui/react';
import FormInput from '../../../components/input/FormInput';
import EditProps from '../../../interface/EditProps';
import updateCustGroup from '../../../functions/CustGroup/update';

export default function Edit(props: EditProps) {
  const [open, setOpen] = React.useState<boolean>(
    props.edit !== undefined ? props.edit : true
  );
  const {
    setLoading,
    raiseToast,
    user: CurrentUser,
  } = React.useContext(AppContext
  );

  function close() {
    setOpen(false);
    if (props.close) props.close();
  }

  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case "updateGroup":
        return { ...state, ...action.payload };
      default:
        return state;
    }
  };

  const [group, dispatch] = React.useReducer(reducer, props.data)


  const [error, setError] = React.useState<ErrorInterface>({
    input: "",
    message: "",
    error: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "updateGroup",
      payload: { [e.target.name]: e.target.value },
    });
    if (error.error) setError({ input: "", message: "", error: false });
  };

  function validate() {
    let error = validateName(group.Name, "Name");
    if (error) {
      setError({ input: "Name", message: error, error: true });
      return false;
    }

    return true;
  }

  async function save() {
    if (validate()) {
      setLoading(true);
      const res = await updateCustGroup(CurrentUser, group);
      if (res.status !== 200) {
        raiseToast(res.message, "error");
      } else {
        raiseToast(res.message, "success");
        if (props.setSeries) {
          props.setSeries((prev: any) => {
            let index = prev.findIndex(
              (item: any) => item.RecId === group.RecId
            );
            prev[index] = group;
            return [...prev];
          });
          close();
        }
      }
      setLoading(false);
    }
  }

  React.useEffect(() => {
    if (props.edit) {
    }
    setOpen(props.edit !== undefined ? props.edit : true);
  }, [props.edit]);

  const data = React.useCallback(() => {
    dispatch({
      type: "updateGroup",
      payload: { ...props.data },
    });
  }, [props.data]);

  React.useEffect(data, [data]);


  return (
    <>
      <LeftPopOverLayout
        onSave={save}
        path="/New"
        title="Create New Group"
        isOpen={open}
        close={close}
      >
        <Stack direction="column">
          <FormInput
            label="Name"
            handleChange={handleChange}
            defaultValue={group.Name}
            name="Name"
            isRequired={true}
            isInvalid={error.input === "Name"}
            error={error.message}
            focus="Description"
          />

          <FormInput
            label="Description"
            handleChange={handleChange}
            name="Description"
            defaultValue={group.Description}
            isRequired={true}
            isInvalid={error.input === "Description"}
            error={error.message}
          />
        </Stack>
      </LeftPopOverLayout>
    </>
  );
}
