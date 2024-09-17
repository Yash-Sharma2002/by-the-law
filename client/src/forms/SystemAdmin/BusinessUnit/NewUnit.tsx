import React from 'react'
import { AppContext } from '../../../context/Context';
import ErrorInterface from '../../../interface/Error';
import validateName from '../../../functions/validateName';
import LeftPopOverLayout from '../../../components/ui/LeftPopOverLayout';
import { Stack } from '@chakra-ui/react';
import FormInput from '../../../components/input/FormInput';
import { EmptyBusUnit } from '../../../interface/BusUnit';
import createBusUnit from '../../../functions/BussUnit/create';

export default function NewUnit(props: {
  open?: boolean;
  close?: () => void;
  setSeries?: React.Dispatch<React.SetStateAction<any[]>>;
}) {
  const [open, setOpen] = React.useState<boolean>(
    props.open !== undefined ? props.open : true
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

  const [user, setUser] = React.useState(EmptyBusUnit);

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
      setError({ input: "Name", message: error, error: true });
      return false;
    }

    return true;
  }

  async function save() {
    if (validate()) {
      setLoading(true);
      const res = await createBusUnit(CurrentUser, user);
      if (res.status !== 200) {
        raiseToast(res.message, "error");
      } else {
        raiseToast(res.message, "success");
        if (props.setSeries)
          props.setSeries((prev: any) => {
            return [...prev, res.data];
          });
        close();
      }
      setLoading(false);
    }
  }

  React.useEffect(() => {
    if (props.open) {
      setUser(EmptyBusUnit);
    }
    setOpen(props.open !== undefined ? props.open : true);
  }, [props.open]);

  return (
    <>
      <LeftPopOverLayout
        onSave={save}
        path="/New"
        title="Add New Unit"
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
            focus="Description"
          />

          <FormInput
            label="Description"
            handleChange={handleChange}
            name="Description"
            isRequired={true}
            isInvalid={error.input === "Description"}
            error={error.message}
          />
        </Stack>
      </LeftPopOverLayout>
    </>
  );
}
