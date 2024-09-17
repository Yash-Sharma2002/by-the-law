import React from "react";
import { AppContext } from "../../../../context/Context";
import { ExcelContext } from "../../../../context/ExcelContext";
import getAllUsers from "../../../../functions/user/getAllUsers";
import FormTopBarInterface from "../../../../interface/FormTopBar";
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";
import Roles from "../../../../config/enum/Roles";
import DisplayType from "../../../../config/enum/DisplayType";
import { IoIosAdd } from "react-icons/io";
import Layout from "../../../../components/ui/Layout";
import TableComponent from "../../../../components/common/table/TableComponent";
import ModuleUrls from "../../../../config/enum/Module";
import NewUser from "./NewUser";
import deleteUser from "../../../../functions/user/delete";
import { deleteSecurityUserRole } from "../../../../functions/SecurityUserRole/delete";

export default function List() {
  const { setLoading, raiseToast, user: CurrentUser } = React.useContext(AppContext);
  const { selected } = React.useContext(ExcelContext);
  const [users, setUsers] = React.useState<any[]>([]);
  const [edit, setEdit] = React.useState(false); // [UserInterface]
  const [newUser, setNewUser] = React.useState(false); // [UserInterface]


  const getClients = React.useRef(() => { });

  getClients.current = async () => {
    setLoading(true);
    const res = await getAllUsers(CurrentUser);
    if (res.status) {
      setUsers(res.data);
    } else {
      raiseToast(res.error, "error");
    }
    setLoading(false);
  };

  const options: FormTopBarInterface[] = [
    {
      name: "Edit",
      Icon: MdOutlineEdit,
      roles: [Roles.Admin],
      type: DisplayType.Function,
      Object() {
        setEdit(!edit);
      },
    },
    {
      name: "New",
      Icon: IoIosAdd,
      roles: [Roles.Admin],
      type: DisplayType.Function,
      Object() {
        setNewUser(!newUser);
      },
    },
    {
      name: "Delete",
      Icon: MdDeleteOutline,
      roles: [Roles.Admin],
      type: DisplayType.Function,
      Object() {
        DeleteUser();
      },
    },
  ];

  async function DeleteUser() {
    if (selected.length === 0)
      return raiseToast("Please select a user to delete", "error");
    setLoading(true);
    try {
      for (let i = 0; i < selected.length; i++) {
        let user = users[selected[i]];
        let res = await deleteUser(user.Id, CurrentUser);
        res = await deleteSecurityUserRole(CurrentUser, user.RecId);

        if (res.status === 200) {
          raiseToast(user.Id + " deleted successfully", "success");
        } else {
          raiseToast(res.error, "error");
        }
      }
    } catch (e: any) {
      raiseToast(e.message, "error");
    }
    setLoading(false);
    getClients.current();
  }

  React.useEffect(() => {
    getClients.current();
  }, []);


  return (
    <>
      <Layout options={options} name="User" refreh={getClients.current}>
        <TableComponent
          head={[
            "User Id",
            "Name",
            "Enabled",
            "Email",
            "Language",
          ]}
          body={
            (users.length > 0 &&
              users.map((data: any) => {
                return [
                  data.RecId,
                  data.Id,
                  data.Name,
                  data.Enabled ? "Yes" : "No",
                  data.Email,
                  data.Language,
                ];
              })) ||
            []
          }
          hidden={[0]}
          link={[{ form: ModuleUrls.Users, index: 1, key: 0 }]}
        />
      </Layout>
      <NewUser
        open={newUser}
        close={() => setNewUser(false)}
        setUser={setUsers}
      />
    </>
  );
}
