import AllClients from "../../forms/Client/Customer/AllClients";
import CustGroup from "../../forms/Client/CustGroup/CustGroup";
import MyClients from "../../forms/Client/Customer/MyClient";
import MenuInterface from "../../interface/Menu";
import DisplayType from "../enum/DisplayType";
import Roles from "../enum/Roles";

const ClientMenu: MenuInterface = {
  name: "Customers",
  roles: [
    Roles.Admin,
    Roles.Lawyer,
  ],
  type: DisplayType.subMenu,
  subMenu: [
    {
      name: "Customers",
      roles: [
        Roles.Admin,
        Roles.Lawyer,
      ],
      type: DisplayType.subMenu,
      subMenu: [
        {
          name: "All Customers",
          path: "/AllCustomers",
          roles: [Roles.Admin],
          type: DisplayType.Form,
          Object: <AllClients />,
        },
        {
          name: "My Customers",
          path: "/MyCustomers",
          type: DisplayType.Form,
          roles: [
            Roles.Admin,
            Roles.Lawyer,
          ],
          Object: <MyClients />,
        },
        {
          name:"Customer Group",
          path:"/CustomerGroup",
          type:DisplayType.Form,
          roles:[Roles.Admin],
          Object:<CustGroup />
        }
      ],
    }
  ],
};


export default ClientMenu;

