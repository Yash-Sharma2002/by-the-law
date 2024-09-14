import React from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../../context/Context";
import { API_URL } from "../../../constants/data";
import axios from "axios";
import toTitleCase from "../../../functions/toTitle";
import URLDetailsCard from "./URLDetailsCard";
import FormDetailsCard from "./FormDetails";
import FormInterface from "../../../interface/Form";
import URLInterface from "../../../interface/URL";
import UserInterface from "../../../interface/NewUser";
import ClientInterface from "../../../interface/NewClient";

export default function ClientDetails() {
  const { client_id } = useParams();
  const { user: currentUser } = React.useContext(AppContext);
  const [data, setData] = React.useState<{
    client: ClientInterface;
    lawyer: UserInterface;
    urls: URLInterface[];
    forms: FormInterface[];
  } | null>(null);
  const getClientAllDetails = React.useRef(() => {});

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
    } catch (err) {}
  };

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
          <div className="flex md:flex-row justify-evenly items-start w-11/12 mx-auto flex-col">
            <div className="flex flex-col">
              <div className="flex flex-row">
                <p className="text-lg font-bold">Client ID:</p>
                <p className="text-lg ml-2">{data.client.username}</p>
              </div>
              <div className="flex flex-row">
                <p className="text-lg font-bold">Client Name:</p>
                <p className="text-lg ml-2">{data.client.name}</p>
              </div>
              <div className="flex flex-row">
                <p className="text-lg font-bold">Client Email:</p>
                <p className="text-lg ml-2">{data.client.email}</p>
              </div>
              <div className="flex flex-row">
                <p className="text-lg font-bold">Client Status:</p>
                <p className="text-lg ml-2">
                  {toTitleCase(data.client.status!)}
                </p>
              </div>
              <div className="flex flex-row">
                <p className="text-lg font-bold">Client Created On:</p>
                <p className="text-lg ml-2">
                  {new Date(data.client.created || "").toDateString()}
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row">
                <p className="text-lg font-bold">Lawyer ID:</p>
                <a
                className="text-blue-500 hover:underline"
                  href={
                    "/dashboard/lawyer/" + data.client.lawyer_id + "/details"
                  }
                >
                  <p className="text-lg ml-2">{data.lawyer.username}</p>
                </a>
              </div>
              <div className="flex flex-row">
                <p className="text-lg font-bold">Lawyer Name:</p>
                <p className="text-lg ml-2">{data.lawyer.name}</p>
              </div>
              <div className="flex flex-row">
                <p className="text-lg font-bold">Lawyer Email:</p>
                <p className="text-lg ml-2">{data.lawyer.email}</p>
              </div>
              <div className="flex flex-row">
                <p className="text-lg font-bold">Lawyer Status:</p>
                <p className="text-lg ml-2">
                  {toTitleCase(data.lawyer.status!)}
                </p>
              </div>
            </div>
          </div>
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
                <p>No URL Found</p>
              )}
            </div>
          </div>

          <div className="flex flex-col mt-5">
            <h1 className="text-2xl font-bold">Form Details</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-2 w-[95%] mx-auto">
              {data.forms.length > 0 ? (
                data.forms.map((url: any, index: number) => (
                  <FormDetailsCard
                    key={index}
                    data={url}
                    client_id={data.client.client_id!}
                  />
                ))
              ) : (
                <p>No Form Found</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
