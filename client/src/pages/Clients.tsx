import React from "react";
import { IoMdAdd } from "react-icons/io";
import { AppContext } from "../context/Context";
import UserInterface from "../interface/NewUser";
import { API_URL } from "../constants/data";
import axios from "axios";
import Card from "../components/dashboard/client/Card";
import CreateuserPopup from "../components/dashboard/client/CreateuserPopup";
import InputSearch from "../components/input/InputSearch";
import ClientInterface from "../interface/NewClient";

export default function Clients() {
  const { user: currentUser } = React.useContext(AppContext);
  const [data, setData] = React.useState<UserInterface[]>([]);
  const [clients, setClients] = React.useState<ClientInterface[]>([]);
  const [query, setQuery] = React.useState<string>("");
  const getAllUsers = React.useRef(() => {});
  const getAllClients = React.useRef(() => {});
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  getAllUsers.current = async () => {
    if (!currentUser.uid) {
      return;
    }
    try {
      const params = new URLSearchParams();
      params.append("uid", currentUser.uid);
      params.append("session", currentUser.session);
      params.append("token", currentUser.access_token);

      const data = await axios
        .get(API_URL + "/lawyer/all?" + params)
        .then((res) => res.data)
        .catch((err) => {
          alert(err.response.data.message);
          return;
        });
      setData(data);
    } catch (err) {}
  };

  getAllClients.current = async () => {
    if (!currentUser.uid) {
      return;
    }
    try {
      const params = new URLSearchParams();
      params.append("uid", currentUser.uid);
      params.append("session", currentUser.session);
      params.append("access_token", currentUser.access_token);

      const data = await axios
        .get(API_URL + "/clients/all?" + params)
        .then((res) => res.data)
        .catch((err) => {
          alert(err.response.data.message);
          return;
        });
      setClients(data);
    } catch (err) {}
  };

  React.useEffect(() => {
    getAllClients.current();
    getAllUsers.current();
  }, [currentUser]);

  return (
    <>
      <h1 className=" text-3xl text-start text-black ">Clients</h1>
      <div
        className="bg-[#002F53] text-white text-[16px] leading-[20px] rounded-md mt-4 flex justify-center items-center mb-2 w-fit px-4 py-2 cursor-pointer"
        onClick={openPopup}
      >
        <IoMdAdd className="mr-2 text-[20px] " />
        Create
      </div>
      <InputSearch
        name="search"
        defValue=""
        placeholder="Search"
        inputClassName="md:w-1/2 w-11/12 mx-auto"
        onChangeHandler={(e) => setQuery(e.target.value)}
      />
      {clients.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 w-[95%] mx-auto">
          {clients
            .filter((user: ClientInterface) =>
              user.username.toLowerCase().includes(query.toLowerCase())
            )
            .map((user, index) => {
              return <Card key={index} data={user} lawyers={data} />;
            })}
        </div>
      ) : (
        <p>No Clients Found</p>
      )}

      <CreateuserPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        data={data}
      />
    </>
  );
}
