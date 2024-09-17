import List from "../../forms/SystemAdmin/Users/User/List";
import NewUser from "../../forms/SystemAdmin/Users/User/NewUser";
import Menu from "../../interface/Menu";
import DisplayType from "../enum/DisplayType";
import Roles from "../enum/Roles";

const Users: Menu = {
  name: "Users",
  roles: [Roles.Admin],
  type: DisplayType.subMenu,
  subMenu: [
    {
      name: "User",
      roles: [Roles.Admin],
      type: DisplayType.subMenu,
      subMenu: [
        {
          name: "Users",
          path: "/users",
          type: DisplayType.Form,
          roles: [Roles.Admin],
          Object: <List />,
        },
        {
          name: "New User",
          roles: [Roles.Admin],
          path: "/new-user",
          type: DisplayType.Form,
          Object: <NewUser />,
        },
      ],
    }
  ],
};

export default Users;
