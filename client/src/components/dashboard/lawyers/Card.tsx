import { FaRegEye } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";

import { CiEdit } from "react-icons/ci";
import React from "react";
import { AppContext } from "../../../context/Context";
import { API_URL } from "../../../constants/data";
import axios from "axios";
import UpdateUserPopup from "./UpdateUserPopup";
import UserInterface from "../../../interface/NewUser";
import Delete from "../../common/Delete";
import { UserClientStatusEnum } from "../../../constants/Status";
import toTitleCase from "../../../functions/toTitle";
import { RolesEnum } from "../../../constants/Roles";

export default function Card(props: {
  data: UserInterface;
  canDelete: boolean;
}) {
  const { user: currentUser } = React.useContext(AppContext);


  const [open, setOpen] = React.useState(false);
  const [updatePopup, setUpdatePopup] = React.useState(false);

  async function deletePhrase() {
    if (!currentUser.uid) {
      return;
    }

    if (!currentUser.role || currentUser.role !== RolesEnum.admin) {
      alert(
        "You are not authorized to delete a lawyer. Please contact system administrator."
      );
      return;
    }

    try {
      const params = new URLSearchParams({
        uid: currentUser.uid,
        session: currentUser.session,
        access_token: currentUser.access_token,
        lawyer_id: props.data.lawyer_id || "",
      });

      const data = await axios
        .delete(API_URL + "/lawyer/delete?" + params)
        .then((res) => res.data)
        .catch((err) => {
          alert(err.response.data.message);
          return;
        });

      if (data.message !== "Lawyer deleted successfully") {
        alert(data.message);
        return;
      }
      alert("Lawyer deleted successfully");
      setOpen(false);
      window.location.reload();
    } catch (err) {}
  }

  const statusColor = () => {
    if (props.data.status === "active" || props.data.status === "connected") {
      return "bg-green-500";
    } else if (
      props.data.status === UserClientStatusEnum.inactive ||
      props.data.status === UserClientStatusEnum.blocked ||
      props.data.status === UserClientStatusEnum.deleted
    ) {
      return "bg-red-500";
    } else {
      return "bg-[#F2F2F2]";
    }
  };

  function openModal() {
    setOpen(true);
  }
  return (
    <>
      <section className="text-gray-600 body-font mt-8 ">
        <div className="border border-gray-200 p-5 rounded-lg shadow-xl">
          <div className="flex items-center justify-end">
            <p
              className={`w-2 h-2 rounded-full mr-2 block ${statusColor()}`}
            ></p>
            <p className="text-[#002F53] text-[12px] font-[600] leading-[20px]">
              {toTitleCase(props.data.status ? props.data.status : "active")}
            </p>
          </div>
          <div className="flex justify-start items-start mb-4 w-11/12">
            <div className="p-1 rounded-full bg-indigo-100 text-indigo-500 ">
              <FaCircleUser className="text-3xl" />
            </div>
            <div className="flex flex-col w-full ml-3">
              <div  className="flex justify-start items-start">
                <p className="text-xl font-bold text-black"> Bar Number : </p>
                <p className="ml-3 break-all">{props.data.username}</p>
              </div>
              <div  className="flex justify-start items-start">
                <p className="text-xl font-bold text-black"> Name : </p>
                <p className="ml-3 break-all">{props.data.name}</p>
              </div>

              <div  className="flex justify-start items-start">
                <p className="text-xl font-bold text-black"> Email : </p>
                <p className="ml-3 break-all">{props.data.email}</p>
              </div>
            </div>
          </div>
          {props.canDelete && (
            <>
              <hr className="w-full h-1 " />
              <div className="flex justify-evenly items-center mt-2">
                <a
                  href={
                    "/dashboard/lawyer/" + props.data.lawyer_id + "/details/"
                  }
                >
                  <FaRegEye className="text-2xl mt-1.5" />
                </a>
                <CiEdit
                  onClick={() => setUpdatePopup(true)}
                  className="text-2xl mt-1.5 cursor-pointer"
                />

                <MdDeleteForever
                  onClick={openModal}
                  className="text-2xl mt-1.5 text-rose-500 cursor-pointer"
                />
              </div>
            </>
          )}
        </div>
      </section>
      <Delete
        isOpen={open}
        onClose={() => setOpen(false)}
        data={props}
        onDelete={deletePhrase}
        type="lawyer"
      />
      <UpdateUserPopup
        isOpen={updatePopup}
        onClose={() => setUpdatePopup(false)}
        data={props.data}
      />
    </>
  );
}
