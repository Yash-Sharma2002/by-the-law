import { UserClientStatusEnum } from "../constants/Status";




export default function statusColor(status: string) {
    if (status === UserClientStatusEnum.active) {
      return "bg-green-500";
    } else if (
      status === UserClientStatusEnum.inactive ||
      status === UserClientStatusEnum.blocked ||
      status === UserClientStatusEnum.deleted
    ) {
      return "bg-red-500";
    } else {
      return "bg-[#F2F2F2]";
    }
  };
