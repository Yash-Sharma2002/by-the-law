import React from "react";
import ModalComponent from "../../../../../components/ui/Modal";
import getAll from "../../../../../functions/SecurityRole/GetAll";
import getAllUsers from "../../../../../functions/user/getAllUsers";
import InputSelect from "../../../../../components/input/InputSelect";
import { AppContext } from "../../../../../context/Context";
import { SelectArray } from "../../../../../interface/SelectArray";
import { addSecurityUserRole } from "../../../../../functions/SecurityUserRole/add";
import FormInput from "../../../../../components/input/FormInput";

export default function AddNew(props: {
  open: boolean;
  UserId?: string;
  Role?: string;
  close: () => void;
  setSeries: React.Dispatch<React.SetStateAction<any[]>>;
}) {
  const {
    user: CurrentUser,
    setLoading,
    raiseToast,
  } = React.useContext(AppContext);

  const [open, setOpen] = React.useState(props.open);
  const [role, setRole] = React.useState<SelectArray[]>([]);
  const [users, setUsers] = React.useState<SelectArray[]>([]);
  const [error, setError] = React.useState({
    input: "",
    message: "",
    error: false,
  });
  const [securityUserRole, setSecurityUserRole] = React.useState<any>({
    UserId: props.UserId ? props.UserId : "",
    Role: props.Role ? props.Role : "",
  });

  const getAllRoles = React.useRef(() => { });
  const getUsers = React.useRef(() => { });

  function close() {
    setOpen(false);
    props.close();
  }

  function handleChange(type: string, value: string) {
    setSecurityUserRole({
      ...securityUserRole,
      [type]: value,
    });
    if (error.error) setError({ input: "", message: "", error: false });
  }

  getUsers.current = async () => {
    setLoading(true);
    const res = await getAllUsers(CurrentUser);
    if (res.status) {
      let data: SelectArray[] = res.data.map((user: any) => {
        return { name: user.Name, value: user.Id, id: user.RecId };
      });
      setUsers(data);
    } else {
      raiseToast(res.error, "error");
    }
    setLoading(false);
  };

  getAllRoles.current = async () => {
    setLoading(true);
    try {
      const res = await getAll(CurrentUser);
      if (res.status) {
        let data: SelectArray[] = res.data.map((role: any) => {
          return { name: role.Name, value: role.RecId, id: role.RecId };
        });
        setRole(data);
      } else {
        raiseToast(res.error, "error");
      }
    } catch (e: any) {
      raiseToast(e.message, "error");
    }
    setLoading(false);
  };

  function validate() {
    if (!securityUserRole.Role) {
      setError({
        input: "Role",
        message: "Role is required",
        error: true,
      });
      return false;
    }
    if (!securityUserRole.UserId) {
      setError({
        input: "UserId",
        message: "User is required",
        error: true,
      });
      return false;
    }
    return true;
  }
  async function handleAddRole() {
    if (!validate()) return;
    setLoading(true);
    try {
      const res = await addSecurityUserRole(
        CurrentUser,
        securityUserRole.UserId,
        securityUserRole.Role
      );
      if (res.status === 200) {
        raiseToast("Role added successfully", "success");
        props.setSeries((prev: any) => {
          return [...prev, res.data];
        });
        close();
      } else {
        raiseToast(res.error, "error");
      }
    } catch (e: any) {
      raiseToast(e.message, "error");
    }
    setLoading(false);
  }

  React.useEffect(() => {
    if (props.open || open) {
      if (!props.UserId) getUsers.current();
      if (!props.Role) getAllRoles.current();
      setSecurityUserRole({
        UserId: props.UserId ? props.UserId : "",
        Role: props.Role ? props.Role : "",
      });
      setError({ input: "", message: "", error: false });
    }
    setOpen(props.open !== undefined ? props.open : true);
  }, [props.open, open, props.UserId, props.Role]);

  return (
    <>
      <ModalComponent
        onSave={handleAddRole}
        path="/mi/Role/AddNew"
        title={"Assign role"}
        isOpen={open}
        close={close}
      >

        {
          props.UserId ?
            <FormInput
              label="UserId"
              name="UserId"
              defaultValue={props.UserId ? props.UserId : ""}
              isDisabled={props.UserId ? true : false}
              isRequired={true}
              isInvalid={error.input === "UserId"}
              error={error.message}
            />
            :
            <InputSelect
              label="UserId"
              handleChange={handleChange}
              name="UserId"
              defaultValue={props.UserId ? props.UserId : ""}
              isDisabled={props.UserId ? true : false}
              isRequired={true}
              isInvalid={error.input === "UserId"}
              error={error.message}
              selectArray={users}
            />

        }

        <InputSelect
          label="Role"
          handleChange={handleChange}
          name="Role"
          isRequired={true}
          defaultValue={props.Role ? props.Role : ""}
          isDisabled={props.Role ? true : false}
          isInvalid={error.input === "Role"}
          error={error.message}
          selectArray={role}
        />
      </ModalComponent>
    </>
  );
}
