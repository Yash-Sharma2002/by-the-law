// import EmailParams 
import NumberSeries from "../../forms/SystemAdmin/NumberSeries/NumberSeries";
import MenuInterface from "../../interface/Menu";
import DisplayType from "../enum/DisplayType";
import Roles from "../enum/Roles";
import List from "../../forms/SystemAdmin/Users/User/List";
import BusinessUnit from "../../forms/SystemAdmin/BusinessUnit/BusinessUnit";

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
        },
        // {
        //   name: "Email Parameters",
        //   roles: [Roles.Admin],
        //   path: "/email-parameters",
        //   type: DisplayType.Form,
        //   Object: <EmailParams />,
        // },
        {
          name: "Business Unit",
          roles: [Roles.Admin],
          type: DisplayType.Form,
          path: "/business-unit",
          Object: <BusinessUnit />,
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
        // {
        //   name: "New User",
        //   roles: [Roles.Admin],
        //   path: "/new-user",
        //   type: DisplayType.Form,
        //   Object: <NewUser />,
        // },
      ],
    },
  ],
};

export default SystemAdmin;
