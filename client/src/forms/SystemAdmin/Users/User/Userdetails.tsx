import React from "react";
import { useParams } from "react-router-dom";
import { IoIosAdd } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import NewUser from "./NewUser";
import RolesList from "./Roles/RolesList";
import { Stack } from "@chakra-ui/react";
import { AppContext } from "../../../../context/Context";
import FormTopBarInterface from "../../../../interface/FormTopBar";
import Roles from "../../../../config/enum/Roles";
import DisplayType from "../../../../config/enum/DisplayType";
import getSecurityUserRoleDetails from "../../../../functions/SecurityUserRole/getSecurityUserRoleDetails";
import getUsersDetails from "../../../../functions/user/getUserDetails";
import { EmptyUserGroup, UserGroupInterface } from "../../../../interface/UserGroup";
import deleteUser from "../../../../functions/user/delete";
import FormTopBar from "../../../../components/ui/FormTopBar";
import DisplayTitle from "../../../../components/common/Utils/DisplayTitle";
import FormInput from "../../../../components/input/FormInput";
import GroupList from "./UserGroup/GroupList";
import getByNameUserGroup from "../../../../functions/UserGroup/getByName";

export default function UserDetails() {
  const { data } = useParams();
  const {
    setLoading,
    raiseToast,
    user: CurrentUser,
  } = React.useContext(AppContext);
  const [newUser, setNewUser] = React.useState(false);
  const [userDetails, setUserDetails] = React.useState<any>({});
  const [roleDetails, setRoleDetails] = React.useState<any[]>([]);
  const [group, setGroup] = React.useState<UserGroupInterface>(EmptyUserGroup);

  const getClients = React.useRef(() => { });

  const options: FormTopBarInterface[] = [
    {
      name: "New",
      Icon: IoIosAdd,
      roles: [Roles.Admin],
      type: DisplayType.Function,
      Object() {
        setNewUser(true);
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

  getClients.current = async () => {
    setLoading(true);

    const res = await getUsersDetails(CurrentUser, data);
    if (res.status === 200) {
      setUserDetails(res.data);
    } else {
      raiseToast(res.error, "error");
    }

    const roleRes = await getSecurityUserRoleDetails(CurrentUser, res.data.Id);
    if (roleRes.status === 200) {
      setRoleDetails(roleRes.data);
    } else {
      raiseToast(roleRes.error, "error");
    }

    const dims = await getByNameUserGroup(CurrentUser, res.data.UserGroup);
    if (dims.status === 200) {
      setGroup(dims.data);
    } else {
      raiseToast(dims.error, "error")
    }


    setLoading(false);
  };

  async function DeleteUser() {
    setLoading(true);
    try {
      let res = await deleteUser(userDetails.Id, CurrentUser);

      if (res.status === 200) {
        raiseToast(userDetails.Id + " deleted successfully", "success");
      } else {
        raiseToast(res.error, "error");
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
      <FormTopBar options={options} refreh={getClients.current} />
      <div className="mx-2">
        <div className="mt-3">
          <h1 className="font-bold text-2xl">
            {userDetails.Id} : {userDetails.Name}
          </h1>
        </div>
        <div className="border rounded-md shadow-md mt-4">
          <DisplayTitle title="User Details" />
          <Stack direction="row" spacing={4} className="border-t p-4">
            <FormInput
              label="Id"
              defaultValue={userDetails.Id}
              isDisabled={true}
              name="Id"
            />
              <FormInput
              label="Name"
              defaultValue={userDetails.Name}
              isDisabled={true}
              name="Name"
            />
            <FormInput
              label="Email"
              defaultValue={userDetails.Email}
              isDisabled={true}
              name="Email"
            />
            <FormInput
              label="Language"
              defaultValue={userDetails.Language}
              isDisabled={true}
              name="Language"
            />
       
            <FormInput
              label="Enabled"
              defaultValue={userDetails.Enabled ? "Yes" : "No"}
              isDisabled={true}
              name="Enabled"
            />
          </Stack>
        </div>
        <RolesList
          data={roleDetails}
          refresh={getClients.current}
          setData={setRoleDetails}
          UserId={userDetails.Id}
          topBar={true}
        />
        <GroupList
          data={group}
          refresh={getClients.current}
          setData={setGroup}
          UserId={userDetails.Id}
          topBar={true}      
        />
        <NewUser
          open={newUser}
          close={() => setNewUser(false)}
          setUser={setUserDetails}
        />
      </div>
    </>
  );
};

