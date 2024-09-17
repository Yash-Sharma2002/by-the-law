import { CiHome, CiStar } from "react-icons/ci";
import { HiOutlineReceiptRefund } from "react-icons/hi2";
import { RiSoundModuleLine } from "react-icons/ri";
import Menu from "../../interface/Menu";
// import HR from "./HR";
import ProjectManagementAndAccounting from "./Projects";
import ClientMenu from "./Customer";
import SystemAdmin from "./SystemAdmin";
import DisplayType from "../enum/DisplayType";
import Default from "../../forms/Default/Default";

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
      ClientMenu,
      // HR,
      ProjectManagementAndAccounting,
      SystemAdmin
    ],
  },
];
