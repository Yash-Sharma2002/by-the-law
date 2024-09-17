import React from "react";
import DisplayType from "../config/enum/DisplayType";
import { IconType } from "react-icons";
import Roles from "../config/enum/Roles";


export default interface MenuInterface {
    name: string;
    path?: string;
    type: DisplayType;
    Object?:JSX.Element | null | (() => void) | string; 
    Icon? : IconType;
    subMenu?: MenuInterface[];
    roles:Roles[]
}