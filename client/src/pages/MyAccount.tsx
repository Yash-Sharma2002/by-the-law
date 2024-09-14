import React from "react";
import toTitleCase from "../functions/toTitle";
import { API_URL } from "../constants/data";
import axios from "axios";
import { AppContext } from "../context/Context";
import UserInterface from "../interface/NewUser";
import ClientInterface from "../interface/NewClient";
import { MdDeleteForever } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";

export default function MyAccount() {
  const [data, setData] = React.useState<{
    lawyer: UserInterface;
    clients: ClientInterface[];
  } | null>(null);

  const { user: currentUser } = React.useContext(AppContext);
  const getLawyerAllDetails = React.useRef(() => {});

  getLawyerAllDetails.current = async () => {
    if (!currentUser.uid) {
      return;
    }

    try {
      const params = new URLSearchParams();
      params.append("uid", currentUser.uid);
      params.append("session", currentUser.session);
      params.append("access_token", currentUser.access_token);
      params.append("lawyer_id", currentUser.uid || "");

      const data = await axios
        .get(API_URL + "/lawyer/details?" + params)
        .then((res) => res.data)
        .catch((err) => {
          alert(err.response.data.message);
          return;
        });

      setData(data);
    } catch (err) {}
  };

  async function deletePhrase() {
    if (!currentUser.uid) {
      return;
    }

    let confirmDelete = window.confirm(
      "Are you sure you want to delete your account?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      const params = new URLSearchParams({
        uid: currentUser.uid,
        session: currentUser.session,
        access_token: currentUser.access_token,
        lawyer_id: currentUser.uid || "",
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
      window.location.reload();
    } catch (err) {}
  }

  React.useEffect(() => {
    getLawyerAllDetails.current();
  }, [currentUser]);

  return (
    <>
      <h1 className="text-2xl font-bold">My Details</h1>
      <div className="flex justify-start items-start">
        <div
          onClick={deletePhrase}
          className="bg-red-500 text-white text-[16px] mx-2 leading-[20px] rounded-md mt-4 flex justify-center items-center mb-2 w-fit px-4 py-2 cursor-pointer"
        >
          <MdDeleteForever className="mr-2 text-[20px] " />
          Delete
        </div>
        <a
          href="/dashboard/admins"
          className="bg-[#002F53] text-white text-[16px] leading-[20px] rounded-md mt-4 flex justify-center items-center mb-2 w-fit px-4 py-2 cursor-pointer"
        >
          <MdAccountCircle className="mr-2 text-[20px] " />
          System Administrators
        </a>
      </div>
      {data && (
        <div className="mt-8">
          <div className="border border-gray-200 p-5 rounded-lg shadow-xl">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <div className="flex flex-row">
                  <p className="text-lg font-bold">ID:</p>

                  <p className="text-lg ml-2">{data.lawyer.username}</p>
                </div>
                <div className="flex flex-row">
                  <p className="text-lg font-bold">Name:</p>
                  <p className="text-lg ml-2">{data.lawyer.name}</p>
                </div>
                <div className="flex flex-row">
                  <p className="text-lg font-bold">Email:</p>
                  <p className="text-lg ml-2">{data.lawyer.email}</p>
                </div>
                <div className="flex flex-row">
                  <p className="text-lg font-bold">Status:</p>
                  <p className="text-lg ml-2">
                    {toTitleCase(data.lawyer.status!)}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-lg font-bold">Clients</p>
              <div className="grid grid-cols-1 gap-4 mt-4">
                {!(data.clients.length > 0) ? (
                  <p className="text-lg font-bold">No clients</p>
                ) : null}
                {data.clients.map((client, index) => (
                  <a
                    href={"/dashboard/client/" + client.client_id + "/details"}
                    key={index}
                  >
                    <div className="border border-gray-200 p-5 rounded-lg shadow-xl">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-lg font-bold">
                            {client.name} - {client.username}
                          </p>
                          <p className="text-sm text-gray-500">
                            {client.email}
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
