import React from "react";
import LeftPopOverLayout from "../../../../components/ui/LeftPopOverLayout";
import { Button, Stack } from "@chakra-ui/react";
import ErrorInterface from "../../../../interface/Error";
import validateEmail from "../../../../functions/validateEmail";
import validateName from "../../../../functions/validateName";
import FormInput from "../../../../components/input/FormInput";
import { useNavigate } from "react-router-dom";
import InputPassword from "../../../../components/input/InputPassword";
import InputSelect from "../../../../components/input/InputSelect";
import { EmptyUser } from "../../../../interface/User";
import { AppContext } from "../../../../context/Context";
import addUser from "../../../../functions/user/add";
import getAll from "../../../../functions/SecurityRole/GetAll";
import getAllUserGroup from "../../../../functions/UserGroup/getAll";
import { SelectArray } from "../../../../interface/SelectArray";
import { addSecurityUserRole } from "../../../../functions/SecurityUserRole/add";

export default function NewUser(props: {
  open?: boolean;
  close?: () => void;
  setUser?: React.Dispatch<React.SetStateAction<any[]>>;
}) {
  const [open, setOpen] = React.useState<boolean>(
    props.open !== undefined ? props.open : true
  );
  const navigate = useNavigate();
  const {
    setLoading,
    raiseToast,
    user: CurrentUser,
  } = React.useContext(AppContext);

  const getAllRoles = React.useRef(() => { });
  const getAllGroups = React.useRef(() => { });
  const [roles, setRoles] = React.useState<SelectArray[]>([]);
  const [group, setGroup] = React.useState<SelectArray[]>([]);

  function close() {
    setOpen(false);
    if (props.close) props.close();
    else navigate("/mi/users");
  }

  const [user, setUser] = React.useState({
    ...EmptyUser,
    Role: "",
  });

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

  const handleMultiSelect = (type: string, value: string) => {
    setUser({
      ...user,
      [type]: value,
    });
    if (error.error) setError({ input: "", message: "", error: false });
  };

  function validate() {
    let error = validateName(user.Name, "Name");
    if (error) {
      setError({ input: "Name", message: error, error: true });
      return false;
    }
    error = validateEmail(user.Email);
    if (error) {
      setError({ input: "Email", message: error, error: true });
      return false;
    }

    if (!user.Password) {
      console.log(error);
      setError({
        input: "Password",
        message: "Password is required",
        error: true,
      });
      return false;
    }

    if (!user.Role) {
      setError({
        input: "role",
        message: "Role is required",
        error: true,
      });
      return false;
    }

    return true;
  }

  async function save() {
    if (validate()) {
      setLoading(true);
      const res = await addUser(user, CurrentUser);
      if (res.status !== 200) {
        raiseToast(res.message, "error");
      } else {
        await addSecurityUserRole(CurrentUser, res.data.Id, user.Role);
        raiseToast(res.message, "success");
        if (props.setUser)
          props.setUser((prev: any) => {
            return [...prev, res.data];
          });
        close();
      }
      setLoading(false);
    }
  }

  function autogenPassword() {
    let password = "";
    for (let i = 0; i < 10; i++) {
      password += String.fromCharCode(Math.floor(Math.random() * 94) + 33);
    }
    setUser({ ...user, Password: password });
  }

  getAllRoles.current = async () => {
    setLoading(true);
    try {
      const res = await getAll(CurrentUser);
      if (res.status) {
        let data: SelectArray[] = res.data.map((role: any) => {
          return { name: role.Name, value: role.RecId, id: role.RecId };
        });
        setRoles(data);
      } else {
        raiseToast(res.error, "error");
      }
    } catch (e: any) {
      raiseToast(e.message, "error");
    }
    setLoading(false);
  };

  getAllGroups.current = async () => {
    setLoading(true);
    try {
      const res = await getAllUserGroup(CurrentUser);
      if (res.status) {
        let data: SelectArray[] = res.data.map((role: any) => {
          return { name: role.Name, value: role.Name, id: role.RecId };
        });
        setGroup(data);
      } else {
        raiseToast(res.error, "error");
      }
    } catch (e: any) {
      raiseToast(e.message, "error");
    }
    setLoading(false);
  };


  React.useEffect(() => {
    if (props.open || open) {
      getAllRoles.current();
      getAllGroups.current();
      setUser({
        ...EmptyUser,
        Role: "",
      });
    }
    setOpen(props.open !== undefined ? props.open : true);
  }, [props.open, open]);

  return (
    <>
      <LeftPopOverLayout
        onSave={save}
        path="/New"
        title="Create New User"
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
            focus="Email"
          />

          <FormInput
            label="Email"
            handleChange={handleChange}
            name="Email"
            isRequired={true}
            isInvalid={error.input === "Email"}
            error={error.message}
            focus="Role"
          />

          <InputSelect
            label="Role"
            handleChange={handleMultiSelect}
            name="Role"
            isRequired={true}
            isInvalid={error.input === "Role"}
            error={error.message}
            selectArray={roles}
            focus="UserGroup"
          />

          <InputSelect
            label="UserGroup"
            handleChange={handleMultiSelect}
            name="UserGroup"
            isRequired={true}
            isInvalid={error.input === "UserGroup"}
            error={error.message}
            selectArray={group}
            focus="Password"
          />

          <InputPassword
            label="Password"
            defaultValue={user.Password}
            handleChange={handleChange}
            name="Password"
            isRequired={true}
            isInvalid={error.input === "Password"}
            error={error.message}
          />

          <Button
            colorScheme="blue"
            onClick={autogenPassword}
            width={"fit-content"}
          >
            Auto Generate Password
          </Button>
        </Stack>
      </LeftPopOverLayout>
    </>
  );
}
