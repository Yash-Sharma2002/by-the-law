import React from "react";
import UserInterface from "../../../interface/NewUser";
import ClientInterface from "../../../interface/NewClient";
import { AppContext } from "../../../context/Context";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../../constants/data";
import toTitleCase from "../../../functions/toTitle";

export default function LawyerDetails() {
  const [data, setData] = React.useState<{
    lawyer: UserInterface;
    clients: ClientInterface[];
  } | null>(null);

  const { user: currentUser } = React.useContext(AppContext);
  const { lawyer_id } = useParams();
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
      params.append("lawyer_id", lawyer_id || "");

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

  React.useEffect(() => {
    getLawyerAllDetails.current();
  }, [currentUser]);
  return (
    <>
      <h1 className="text-2xl font-bold">Lawyer Details</h1>
      {!data ? (
        <div className="flex justify-center items-center h-96">
          <p className="text-2xl">No lawyer found</p>
        </div>
      ) : !data.lawyer ? (
        <div className="flex justify-center items-center h-96">
          <p className="text-2xl">No lawyer found</p>
        </div>
      ) : (
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
                {data.clients.map((client, index) => (
                  <a  href={
                    "/dashboard/client/" + client.client_id + "/details"
                  } key={index}>
                    <div className="border border-gray-200 p-5 rounded-lg shadow-xl">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-lg font-bold">{client.name} - {client.username}</p>
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
