import React from "react";
import { IoMdAdd } from "react-icons/io";
import { AppContext } from "../context/Context";
import { API_URL } from "../constants/data";
import axios from "axios";
import InputSearch from "../components/input/InputSearch";
import FormInterface from "../interface/Form";
import ClientInterface from "../interface/NewClient";
import CreateuserPopup from "../components/dashboard/forms/CreateuserPopup";
import Card from "../components/dashboard/forms/Card";

export default function Forms() {
    const { user: currentUser } = React.useContext(AppContext);
    const [data, setData] = React.useState<FormInterface[]>([]);
    const [clients, setClients] = React.useState<ClientInterface[]>([]);
    const [isPopupOpen, setIsPopupOpen] = React.useState(false);
    const [query, setQuery] = React.useState<string>("");
  
    const openPopup = () => {
      setIsPopupOpen(true);
    };
  
    const getAllForms = React.useRef(() => {});
    const getAllClients = React.useRef(() => {});
  
    getAllForms.current = async () => {
      if (!currentUser.uid) {
        return;
      }
      try {
        const params = new URLSearchParams();
        params.append("uid", currentUser.uid);
        params.append("session", currentUser.session);
        params.append("access_token", currentUser.access_token);
  
        const data = await axios
          .get(API_URL + "/form/all?" + params)
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
      getAllForms.current();
      getAllClients.current();
    }, [currentUser]);
  
  return (
    <>
     <h1 className=" text-3xl text-start text-black ">Forms</h1>
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
      {data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 w-[95%] mx-auto">
          { data
            .filter((user: FormInterface) =>
              user.client_username!.toLowerCase().includes(query.toLowerCase())
            ).map((user, index) => {
            return <Card key={index} {...user} />;
          })}
        </div>
      ) : (
        <p>No Forms Found</p>
      )}

      <CreateuserPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        clients={clients}
      />
    </>
  )
}
