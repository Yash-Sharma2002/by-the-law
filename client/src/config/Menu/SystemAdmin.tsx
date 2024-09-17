import MenuInterface from "../../interface/Menu";
import DisplayType from "../enum/DisplayType";
import Roles from "../enum/Roles";
import UserGroup from "../../forms/SystemAdmin/Users/UserGroup/UserGroup";
import NumberSeries from "../../forms/SystemAdmin/Sequence/NumberSeries";
import List from "../../forms/SystemAdmin/Users/User/List";

const SystemAdmin: MenuInterface = {
  name: "System Administration",
  roles: [Roles.Admin],
  type: DisplayType.subMenu,
  subMenu: [
    {
      name: "Setup",
      roles: [Roles.Admin],
      type: DisplayType.subMenu,
      subMenu: [
        {
          name: "Number Series",
          roles: [Roles.Admin],
          path: "/number-series",
          type: DisplayType.Form,
          Object: <NumberSeries />,
        }
      ],
    },
    {
      name: "Users",
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
          name: "User Groups",
          path: "/users-groups",
          type: DisplayType.Form,
          roles: [Roles.Admin],

          Object: <UserGroup />,
        },

      ],
    },
  ],
};

export default SystemAdmin;
