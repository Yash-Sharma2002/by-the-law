import React from "react";
import statusColor from "../../../functions/statusColor";
import { SiCurl } from "react-icons/si";
import { FaRegEye } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { AppContext } from "../../../context/Context";
import axios from "axios";
import { API_URL } from "../../../constants/data";
import Delete from "../../common/Delete";
import toTitleCase from "../../../functions/toTitle";
import FormInterface from "../../../interface/Form";

export default function FormDetailsCard(props: {
  data: FormInterface;
  client_id: string;
}) {
  const { user: currentUser } = React.useContext(AppContext);
  const [open, setOpen] = React.useState(false);

  function openModal() {
    setOpen(true);
  }

  async function deleteURL() {
    if (!currentUser.uid) {
      return;
    }

    try {
      const params = new URLSearchParams({
        uid: currentUser.uid,
        session: currentUser.session,
        access_token: currentUser.access_token,
        form_id: props.data.form_id || "",
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
      alert("Form Deleted Successfully");
      setOpen(false);
      window.location.reload();
    } catch (err) {}
  }

  return (
    <>
      <section className="text-gray-600 body-font mt-8 ">
        <div className="border border-gray-200 p-5 rounded-lg shadow-xl">
          <div className="flex items-center justify-end">
            <p
              className={`w-2 h-2 rounded-full mr-2 block ${statusColor(
                props.data.status ? props.data.status : "active"
              )}`}
            ></p>
            <p className="text-[#002F53] text-[12px] font-[600] leading-[20px]">
              {props.data.status}
            </p>
          </div>
          <div className="flex justify-start items-start mb-4 w-full">
            <div className="p-1 rounded-full bg-indigo-100 text-indigo-500 ">
              <SiCurl className="text-3xl" />
            </div>
            <div>
              <div className="flex justify-start items-start flex-col ml-3">
                <div className="flex flex-row">
                  <p className="text-lg font-bold">Name:</p>
                  <p className="text-lg ml-2">{props.data.name}</p>
                </div>
                <div className="flex flex-row">
                  <p className="text-lg font-bold">Status:</p>
                  <p className="text-lg ml-2">
                    {toTitleCase(props.data.status ? props.data.status : "active")}
                  </p>
                </div>
                <div className="flex flex-row">
                  <p className="text-lg font-bold">Created:</p>
                  <p className="text-lg ml-2">
                    {new Date(props.data.created || "").toDateString()}
                  </p>
                </div>

                {props.data.submitted && (
                  <div className="flex flex-row">
                    <p className="text-lg font-bold">Submitted Date:</p>
                    <p className="text-lg ml-2">{props.data.submittedDate}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <hr className="w-full h-1 " />
          <div className="flex justify-evenly items-center mt-2">
            <a
              href={
                "/client/" + props.client_id + "/form/" + props.data.form_id
              }
            >
              <FaRegEye className="text-2xl mt-1.5" />
            </a>

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
        onDelete={deleteURL}
        type="url"
      />
    </>
  );
}
