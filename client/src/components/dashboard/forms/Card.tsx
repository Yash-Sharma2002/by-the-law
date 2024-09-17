import React from "react";
import { FaRegEye } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { AppContext } from "../../../context/Context";
import { API_URL } from "../../../constants/data";
import axios from "axios";
import Delete from "../../common/Delete";
import { UserClientStatusEnum } from "../../../constants/Status";
import toTitleCase from "../../../functions/toTitle";
import { RolesEnum } from "../../../constants/Roles";
import FormInterface from "../../../interface/Form";
import { Link } from "react-router-dom";

export default function Card(props: FormInterface) {
  const { user: currentUser } = React.useContext(AppContext);

  const [open, setOpen] = React.useState(false);

  async function deletePhrase() {
    if (!currentUser.uid) {
      return;
    }

    if (!currentUser.role || currentUser.role !== RolesEnum.admin) {
      alert(
        "You are not authorized to delete the form. Please contact system administrator."
      );
      return;
    }

    try {
      const params = new URLSearchParams({
        uid: currentUser.uid,
        session: currentUser.session,
        access_token: currentUser.access_token,
        client_id: props.client_id || "",
        form_id: props.form_id || "",
      });

      const data = await axios
        .delete(API_URL + "/form/delete?" + params)
        .then((res) => res.data)
        .catch((err) => {
          alert(err.response.data.message);
          return;
        });

      if (data.message !== "Form deleted") {
        alert(data.message);
        return;
      }
      alert("Form deleted");
      setOpen(false);
      window.location.reload();
    } catch (err) {}
  }

  const statusColor = () => {
    if (props.status === "active" || props.status === "connected") {
      return "bg-green-500";
    } else if (
      props.status === UserClientStatusEnum.inactive ||
      props.status === UserClientStatusEnum.blocked ||
      props.status === UserClientStatusEnum.deleted
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
              {toTitleCase(props.status ? props.status : "active")}
            </p>
          </div>
          <div className="flex justify-start items-start mb-4 w-11/12">
            {/* <div className="p-1 rounded-full bg-indigo-100 text-indigo-500 ">
              <FaCircleUser className="text-3xl" />
            </div> */}
            <div className="flex justify-start items-start flex-col ml-3">
              <div className="flex flex-row">
                <p className="text-lg font-bold">Form:</p>
                <p className="text-lg ml-2">{props.name}</p>
              </div>
              <div className="flex flex-row">
                <p className="text-lg font-bold">Client Id:</p>
                <a href={"/dashboard/client/" + props.client_id + "/details"}>
                  <p className="text-lg ml-2">{props.client_username}</p>
                </a>
              </div>
              <div className="flex flex-row">
                <p className="text-lg font-bold">Client Name:</p>
                <p className="text-lg ml-2">{props.client_name}</p>
              </div>
              <div className="flex flex-row">
                <p className="text-lg font-bold">Status:</p>
                <p className="text-lg ml-2">
                  {toTitleCase(props.status as string)}
                </p>
              </div>
              <div className="flex flex-row">
                <p className="text-lg font-bold">Progress:</p>
                <p className="text-lg ml-2">{props.progress}% completed</p>
              </div>
              <div className="flex flex-row">
                <p className="text-lg font-bold">Created:</p>
                <p className="text-lg ml-2">
                  {new Date(props.created || "").toDateString()}
                </p>
              </div>

              {props.submitted && (
                <div className="flex flex-row">
                  <p className="text-lg font-bold">Submitted Date:</p>
                  <p className="text-lg ml-2">{props.submittedDate}</p>
                </div>
              )}
            </div>
          </div>
          <hr className="w-full h-1 " />
          <div className="flex justify-evenly items-center mt-2">
            <Link
              to={
                "/form/" +
                props.name +
                "/client/" +
                props.client_id +
                "/details/" +
                props.form_id
              }
            >
              <FaRegEye className="text-2xl mt-1.5" />
            </Link>
            <MdDeleteForever
              onClick={openModal}
              className="text-2xl mt-1.5 text-rose-500 cursor-pointer"
            />
          </div>
        </div>
      </section>
      <Delete
        isOpen={open}
        onClose={() => setOpen(false)}
        data={props}
        onDelete={deletePhrase}
        type="form"
      />
    </>
  );
}
