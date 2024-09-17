import { CiHome, CiStar } from "react-icons/ci";
import { HiOutlineReceiptRefund } from "react-icons/hi2";
import { RiSoundModuleLine } from "react-icons/ri";
import Menu from "../../interface/Menu";
import SystemAdmin from "./SystemAdmin";
import Default from "../../forms/Default/Default";
import DisplayType from "../enum/DisplayType";
import Searches from "./Searches";

export const MainMenu: Menu[] = [
  {
    name: "Home",
    Icon: CiHome,
    path: "/default",
    Object: <Default />,
    roles: [],
    type: DisplayType.Form,
  },
  {
    name: "Favorites",
    Icon: CiStar,
    type: DisplayType.subMenu,
    roles: [],
    subMenu: [],
  },
  {
    name: "Recents",
    Icon: HiOutlineReceiptRefund,
    type: DisplayType.subMenu,
    roles: [],
    subMenu: [],
  },
  {
    name: "Module",
    type: DisplayType.subMenu,
    Icon: RiSoundModuleLine,
    roles: [],
    subMenu: [
      Searches,
      // ClientMenu,
      // HR,
      // ProjectManagementAndAccounting,
      SystemAdmin,
    ],
  },
];
