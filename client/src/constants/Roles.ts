import SelectArray from "../interface/SelectArray";

export const Roles: SelectArray[] = [
  {
    id: "2",
    name: "Admin",
    value: "admin",
  },
  // {
  //   id: "3",
  //   name: "Client",
  //   value: "client",
  // },
  {
    id: "4",
    name: "Lawyer",
    value: "lawyer",
  },
];

export enum RolesEnum {
  admin = "admin",
  // client = "client",
  lawyer = "lawyer",
}