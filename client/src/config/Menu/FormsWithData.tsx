
import Profile from "../../forms/SystemAdmin/Users/User/Profile";
import UserDetails from "../../forms/SystemAdmin/Users/User/Userdetails";
import UserGroupWithData from "../../forms/SystemAdmin/Users/UserGroup/UserGroupWithData";
import MenuInterface from "../../interface/Menu";
import DisplayType from "../enum/DisplayType";
import Roles from "../enum/Roles";

const FormsWithData: MenuInterface[] = [
  {
    name: "Profile",
    roles: [Roles.Admin, Roles.Lawyer],
    type: DisplayType.Form,
    path: "/profile" ,
    Object: <Profile />,
  },
  {
    name: "User Details",
    roles: [Roles.Admin],
    type: DisplayType.Form,
    path: "/users",
    Object: <UserDetails />,
  },
  {
    name: "User Details",
    roles: [Roles.Admin],
    type: DisplayType.Form,
    path: "/userGroup",
    Object: <UserGroupWithData />,
  }
];

export default FormsWithData;
