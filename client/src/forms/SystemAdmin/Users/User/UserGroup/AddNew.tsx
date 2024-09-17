import React from "react";
import ModalComponent from "../../../../../components/ui/Modal";
import getAllUsers from "../../../../../functions/user/getAllUsers";
import InputSelect from "../../../../../components/input/InputSelect";
import { AppContext } from "../../../../../context/Context";
import getAllUserGroup from "../../../../../functions/UserGroup/getAll";
import addGroup from "../../../../../functions/user/addGroup";
import { SelectArray } from "../../../../../interface/SelectArray";


type Props = {
  open: boolean;
  UserId?: string;
  close: () => void;
  setSeries: React.Dispatch<React.SetStateAction<any[]>>;
  UserGroup: string;
  refresh?: any;
}

export default function AddNew(props: Props) {
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
  const [group, setGroup] = React.useState<any>({
    UserId: props.UserId ? props.UserId : "",
    UserGroup: props.UserGroup ? props.UserGroup : "",
  });

  const getAllRoles = React.useRef(() => { });
  const getUsers = React.useRef(() => { });

  function close() {
    setOpen(false);
    props.close();
  }

  function handleChange(type: string, value: string) {
    setGroup({
      ...group,
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
      const res = await getAllUserGroup(CurrentUser);
      if (res.status) {
        let data: SelectArray[] = res.data.map((role: any) => {
          return { name: role.Name, value: role.Name, id: role.RecId };
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
    if (!group.UserGroup) {
      setError({
        input: "UserGroup",
        message: "Group is required",
        error: true,
      });
      return false;
    }
    if (!group.UserId) {
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
      const res = await addGroup(
        group.UserId,
        CurrentUser,
        group.UserGroup
      );
      if (res.status === 200) {
        raiseToast("Group added successfully", "success");
        props.refresh();
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
      if (!props.UserGroup) getAllRoles.current();
      setGroup({
        UserId: props.UserId ? props.UserId : "",
        Role: props.UserGroup ? props.UserGroup : "",
      });
      setError({ input: "", message: "", error: false });
    }
    setOpen(props.open !== undefined ? props.open : true);
  }, [props.open, open, props.UserId, props.UserGroup]);

  return (
    <>
      <ModalComponent
        onSave={handleAddRole}
        path="/mi/Role/AddNew"
        title={"Assign Group"}
        isOpen={open}
        close={close}
      >
        <InputSelect
          label="User"
          handleChange={handleChange}
          name="UserId"
          isRequired={true}
          isInvalid={error.input === "UserId"}
          error={error.message}
          defaultValue={props.UserId ? props.UserId : ""}
          isDisabled={props.UserId ? true : false}
          selectArray={
            props.UserId ? [{ name: props.UserId, value: props.UserId }] :
              users}
        />
        <InputSelect
          label="User Group"
          handleChange={handleChange}
          name="UserGroup"
          isRequired={true}
          isDisabled={props.UserGroup ? true : false}
          defaultValue={props.UserId ? props.UserId : ""}
          isInvalid={error.input === "UserGroup"}
          error={error.message}
          selectArray={
            props.UserGroup ? [{ name: props.UserGroup, value: props.UserGroup }] :
              role
          }
        />
      </ModalComponent>
    </>
  );
}
