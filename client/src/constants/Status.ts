import SelectArray from "../interface/SelectArray";

export const UserClientStatus: SelectArray[] = [
  {
    id: "1",
    name: "Active",
    value: "active",
  },
  {
    id: "2",
    name: "Inactive",
    value: "inactive",
  },
  {
    id: "3",
    name: "Blocked",
    value: "blocked",
  },
  {
    id: "4",
    name: "Deleted",
    value: "deleted",
  },
];


export enum UserClientStatusEnum {
  active = "active",
  inactive = "inactive",
  blocked = "blocked",
  deleted = "deleted",
}