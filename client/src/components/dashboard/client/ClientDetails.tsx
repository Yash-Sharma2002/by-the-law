import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../../../context/Context";
import { API_URL } from "../../../constants/data";
import axios from "axios";
import toTitleCase from "../../../functions/toTitle";
import URLDetailsCard from "./URLDetailsCard";
import FormInterface from "../../../interface/Form";
import URLInterface from "../../../interface/URL";
import UserInterface from "../../../interface/NewUser";
import ClientInterface from "../../../interface/NewClient";
import { IoMdAdd } from "react-icons/io";
import CreateuserPopup from "../forms/CreateuserPopup";
import CaseDetails from "./CaseDetails";
import TableComponent from "../../common/TableComponent";
import { MdDeleteOutline } from "react-icons/md";
import FormTopBarInterface from "../../../interface/FormTopBar";
import { FaRegEye } from "react-icons/fa";
import { ExcelContext } from "../../../context/ExcelContext";
import FormTopBar from "../../common/FormTopBar";
import { RolesEnum } from "../../../constants/Roles";
import Delete from "../../common/Delete";
import LawyerDetails from "./LawyerDetails";

export default function ClientDetails() {
  const { client_id } = useParams();
  const navigate = useNavigate();
  const { user: currentUser } = React.useContext(AppContext);
  const { selected } = React.useContext(ExcelContext);
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [data, setData] = React.useState<{
    client: ClientInterface;
    lawyer: UserInterface;
    urls: URLInterface[];
    forms: FormInterface[];
  } | null>(null);

  const [open, setOpen] = React.useState(false);
  const [deleteOpen, setDeleteOpen] = React.useState(false);
  const [viewLawyer, setViewLawyer] = React.useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const getClientAllDetails = React.useRef(() => { });

  getClientAllDetails.current = async () => {
    if (!currentUser.uid) {
      return;
    }
    try {
      const params = new URLSearchParams();
      params.append("uid", currentUser.uid);
      params.append("session", currentUser.session);
      params.append("access_token", currentUser.access_token);
      params.append("client_id", client_id || "");

      const data = await axios
        .get(API_URL + "/client/details?" + params)
        .then((res) => res.data)
        .catch((err) => {
          alert(err.response.data.message);
          return;
        });
      setData(data);
    } catch (err) { }
  };

  async function createUrl() {
    try {
      const res = await axios.post(
        API_URL +
        "/url/generate?" +
        new URLSearchParams({
          uid: currentUser.uid,
          session: currentUser.session,
          access_token: currentUser.access_token,
        }),
        {
          client_id: client_id || "",
        }
      ).then((res) => res.data).catch((err) => {
        alert(err.response.data.message);
        return;
      });
      if (res.message === "Url generated") {
        alert("URL created");
        getClientAllDetails.current();
      }
    } catch (err: any) {
      alert(err.response.data.message);
    }
  }

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

    for (let i = 0; i < selected.length; i++) {
      let form_id: string = "";
      if (data && data.forms[selected[i]]) {
        form_id = data.forms[selected[i]].form_id || "";
        try {
          const params = new URLSearchParams({
            uid: currentUser.uid,
            session: currentUser.session,
            access_token: currentUser.access_token,
            client_id: client_id || "",
            form_id: form_id || "",
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
          setData(
            {
              ...data,
              forms: data.forms.filter((form: FormInterface) => form.form_id !== form_id),
            }
          );
        } catch (err) { }
      }
      else {
        break;
      }

    }
  }

  function route() {
    if (selected.length === 0) {
      return
    }
    navigate("/form/" +
      data?.forms[selected[0]].name +
      "/client/" +
      client_id +
      "/details/" +
      data?.forms[selected[0]].form_id);
  }

  const options: FormTopBarInterface[] = [
    {
      name: "New",
      Icon: IoMdAdd,
      Object() {
        openPopup();
      },
    },
    {
      name: "Delete",
      Icon: MdDeleteOutline,
      Object() {
        if (selected.length === 0) {
          alert("Please select a form to delete");
          return;
        }
        else {
          setDeleteOpen(true);
        }
      },
    },
    {
      name: "View",
      Icon: FaRegEye,
      Object() {
        route();
      },
    }
  ]

  const options2: FormTopBarInterface[] = [
    {
      name: "View Lawyer",
      Object() {
        setViewLawyer(true);
      },
    },
    {
      name:"Case Details",
      Object() {
        setOpen(true);
      }
    }
  ];

  React.useEffect(() => {
    getClientAllDetails.current();
  }, [currentUser]);

  return (
    <>
      <h1 className="text-2xl font-bold">Client Details</h1>
      {!data ? (
        <div className="flex justify-center items-center h-96">
          <p className="text-2xl">No client found</p>
        </div>
      ) : !data.client ? (
        <div className="flex justify-center items-center h-96">
          <p className="text-2xl">No client found</p>
        </div>
      ) : (

        <div className="flex flex-col">
          
        <FormTopBar options={options2} refreh={getClientAllDetails.current} data={data} />
          <TableComponent
            head={[
              "ID",
              "Name",
              "Email",
              "Status",
              "Created On",
            ]}
            body={[
              [
                // data.client.client_id,
                data.client.username,
                data.client.name,
                data.client.email,
                toTitleCase(data.client.status!),
                new Date(data.client.created || "").toDateString(),
              ],
            ]}
          />

          <div className="flex flex-col mt-5">
            <h1 className="text-2xl font-bold">URL Details</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-2 w-[95%] mx-auto">
              {data.urls.length > 0 ? (
                data.urls.map((url: any, index: number) => (
                  <URLDetailsCard
                    key={index}
                    data={url}
                    client_id={data.client.client_id!}
                  />
                ))
              ) : (
                <div
                  className="bg-[#002F53] text-white text-[16px] leading-[20px] rounded-md mt-4 flex justify-center items-center mb-2 w-fit px-4 py-2 cursor-pointer"
                  onClick={createUrl}
                >
                  <IoMdAdd className="mr-2 text-[20px] " />
                  Create
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col mt-5">
            <h1 className="text-2xl font-bold mb-3">Form Details</h1>
            <FormTopBar options={options} refreh={getClientAllDetails.current} data={data} />

            <TableComponent
              head={[
                "Name",
                "Status",
                "Created On",
                "Submitted Date"
              ]}
              body={data.forms.map((form) => [
                // form.form_id,
                form.name,
                toTitleCase(form.status ? form.status : "Active"),
                new Date(form.created || "").toDateString(),
                form.submittedDate,
              ])}
            />


          </div>

        </div>
      )}
      <CreateuserPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        clients={[data?.client || {} as ClientInterface]}
      />
      <CaseDetails
        isOpen={open}
        onClose={() => setOpen(false)}
        client_id={client_id || ""}
      />
      <Delete
        isOpen={deleteOpen}
        onClose={() => setDeleteOpen(false)}
        onDelete={deletePhrase}
        type="form"
      />
      <LawyerDetails
        data={data}
        isOpen={viewLawyer}
        onClose={() => setViewLawyer(false)}
      />
    </>
  );
}
