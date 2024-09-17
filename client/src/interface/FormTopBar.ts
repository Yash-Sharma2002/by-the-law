

import React from "react";
import { IconType } from "react-icons";
import MenuInterface from "./Menu";
import DisplayType from "../config/enum/DisplayType";
import Roles from "../config/enum/Roles";


export default interface FormTopBarInterface {
    name: string;
    Icon? : IconType;
    Object?:JSX.Element | null | (() => void) | string; 
    type:DisplayType;
    subMenu?: MenuInterface[];
    roles:Roles[]
}