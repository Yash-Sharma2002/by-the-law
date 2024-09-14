import React from "react";
import { IoMdAdd } from "react-icons/io";
import UserInterface from "../interface/NewUser";
import { AppContext } from "../context/Context";
import { API_URL } from "../constants/data";
import axios from "axios";
import Card from "../components/dashboard/lawyers/Card";
import CreateuserPopup from "../components/dashboard/lawyers/CreateuserPopup";
import InputSearch from "../components/input/InputSearch";
import { RolesEnum } from "../constants/Roles";

export default function Lawyers() {
  const { user: currentUser } = React.useContext(AppContext);
  const [data, setData] = React.useState<UserInterface[]>([]);
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [query, setQuery] = React.useState<string>("");

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const getAllUsers = React.useRef(() => {});

  getAllUsers.current = async () => {
    if (!currentUser.uid) {
      return;
    }
    try {
      const params = new URLSearchParams();
      params.append("uid", currentUser.uid);
      params.append("session", currentUser.session);
      params.append("token", currentUser.access_token);

      let apiCall = true;

      const data = await axios
        .get(API_URL + "/lawyer/all?" + params)
        .then((res) => res.data)
        .catch((err) => {
          alert(err.response.data.message);
          apiCall = false;
          return;
        });
        if(apiCall){
          setData(data);
        }
    } catch (err) {}
  };

  React.useEffect(() => {
    getAllUsers.current();
  }, [currentUser]);

  return (
    <>
      <h1 className=" text-3xl text-start text-black ">Lawyers</h1>
      {currentUser.role === RolesEnum.admin && (
        <div
          className="bg-[#002F53] text-white text-[16px] leading-[20px] rounded-md mt-4 flex justify-center items-center mb-2 w-fit px-4 py-2 cursor-pointer"
          onClick={openPopup}
        >
          <IoMdAdd className="mr-2 text-[20px] " />
          Create
        </div>
      )}
      <InputSearch
        name="search"
        defValue=""
        placeholder="Search"
        inputClassName="md:w-1/2 w-11/12 mx-auto"
        onChangeHandler={(e) => setQuery(e.target.value)}
      />
      {data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-2 w-[95%] mx-auto">
          {data
            .filter((user: UserInterface) =>
              user.username!.toLowerCase().includes(query.toLowerCase())
            )
            .map((user, index) => {
              return <Card key={index} data={user} canDelete={true} />;
            })}
        </div>
      ) : (
        <p>No Lawyers Found</p>
      )}

      <CreateuserPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </>
  );
}
