import React from "react";
import getUsersDetails from "../../../../functions/user/getUserDetails";
import getSecurityUserRoleDetails from "../../../../functions/SecurityUserRole/getSecurityUserRoleDetails";
import FormTopBarInterface from "../../../../interface/FormTopBar";
import Roles from "../../../../config/enum/Roles";
import DisplayType from "../../../../config/enum/DisplayType";
import FormTopBar from "../../../../components/ui/FormTopBar";
import RolesList from "./Roles/RolesList";
import { Stack } from "@chakra-ui/react";
import FormInput from "../../../../components/input/FormInput";
import DisplayTitle from "../../../../components/common/Utils/DisplayTitle";
import getRecid from "../../../../functions/user/getRecId";
import forgetPass from "../../../../functions/user/forgetPass";
import { AppContext } from "../../../../context/Context";
import getOneUserGroup from "../../../../functions/UserGroup/getOne";
import GroupList from "./UserGroup/GroupList";
import { EmptyUserGroup, UserGroupInterface } from "../../../../interface/UserGroup";

const Profile = () => {
  const {
    setLoading,
    raiseToast,
    user: CurrentUser,
  } = React.useContext(AppContext);
  const [userDetails, setUserDetails] = React.useState<any>({});
  const [roleDetails, setRoleDetails] = React.useState<any[]>([]);
  const [group, setGroup] = React.useState<UserGroupInterface>(EmptyUserGroup);

  const getClients = React.useRef(() => { });

  const options: FormTopBarInterface[] = [
    {
      name: "Password",
      roles: [Roles.Admin, Roles.Lawyer],
      type: DisplayType.subMenu,
      subMenu: [
        {
          name: "Reset",
          roles: [Roles.Admin, Roles.Lawyer],
          type: DisplayType.Function,
          Object() {
            handlereset()
          },
        },
      ],
    },
  ];

  const handlereset = async () => {
    setLoading(true);

    try {
      const response = await forgetPass(CurrentUser.Email);

      if (response.status === 200) {
        raiseToast(response.message, "success");
      } else {
        raiseToast("Error", "error", response.message);
      }
    } catch (error: any) {
      raiseToast(
        "Error",
        "error",
        error.response?.message || "Server error"
      );
    } finally {
      setLoading(false);
    }
  };

  getClients.current = async () => {
    setLoading(true);

    const data = await getRecid(CurrentUser.Id, CurrentUser.Session, CurrentUser.Token);
    if (data.status !== 200) {
      raiseToast(data.error, "error");
      setLoading(false);
      return;
    }

    const res = await getUsersDetails(CurrentUser, data.data.RecId);
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

    const dims = await getOneUserGroup(CurrentUser, res.data.UserGroup);
    if (dims.status === 200) {
      setGroup(dims.data);
    } else {
      raiseToast(dims.error, "error")
    }

    setLoading(false);
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
              label="User Id"
              defaultValue={userDetails.Id}
              isDisabled={true}
              name="UserId"
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
              label="User name"
              defaultValue={userDetails.Name}
              isDisabled={true}
              name="Name"
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
          topBar={false}
        />
        <GroupList
          data={group}
          refresh={getClients.current}
          setData={setGroup}
          UserId={userDetails.Id}
          topBar={false}
        />
      </div>
    </>
  );
};

export default Profile;
