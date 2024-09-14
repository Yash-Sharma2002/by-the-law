import { MdLogout } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineAccountTree } from "react-icons/md";
import { GoLaw } from "react-icons/go";
import { FaWpforms } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import Dashboard from "../pages/Dashboard";
import Logout from "../pages/Logout";
import Lawyers from "../pages/Lawyers";
import Clients from "../pages/Clients";
import Forms from "../pages/Forms";
import MyAccount from "../pages/MyAccount";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    shortPath: "/",
    Icon: IoHomeOutline,
    Element: Dashboard,
  },
  {
    title: "Lawyers",
    path: "/dashboard/lawyers",
    shortPath: "/lawyers",
    Icon: GoLaw,
    Element: Lawyers,
  },
  {
    title: "Clients",
    path: "/dashboard/clients",
    shortPath: "/clients",
    Icon: MdOutlineAccountTree,
    Element: Clients,
  },
  {
    title: "Forms",
    path: "/dashboard/forms",
    shortPath: "/forms",
    Icon: FaWpforms,
    Element: Forms,
  },
  {
    title: "My Account",
    path: "/dashboard/account",
    shortPath: "/account",
    Icon: MdAccountCircle,
    Element: MyAccount,
  },
  
  {
    title: "Logout",
    path: "/dashboard/logout",
    shortPath: "/logout",
    Icon: MdLogout,
    Element: Logout,
  },

];
