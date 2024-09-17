import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  ModalCloseButton,
} from "@chakra-ui/react";
import React from "react";
import InputSelect from "../../input/InputSelect";
import InputPass from "../../input/InputPass";
import InputEmail from "../../input/InputEmail";
import InputName from "../../input/InputName";
import { AppContext } from "../../../context/Context";
import axios from "axios";
import { API_URL } from "../../../constants/data";
import UserErrorInterface from "../../../interface/Error";
import UserInterface from "../../../interface/NewUser";
import ClientInterface from "../../../interface/NewClient";
import validateClient from "../../../functions/validateClient";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  data: UserInterface[];
}

export default function CreateuserPopup(props: Props) {
  const { user: currentUser } = React.useContext(AppContext);

  const [error, setError] = React.useState<UserErrorInterface>(
    {} as UserErrorInterface
  );

  const [panelUser, setPanelUser] = React.useState<ClientInterface>(
    {} as ClientInterface
  );

  async function onCreate() {
    if (!ValidateUser()) {
      return;
    }
    if (!panelUser.lawyer_id) {
      alert("Please select a lawyer to assign");
      return;
    }

    try {
      const params = new URLSearchParams({
        uid: currentUser.uid,
        access_token: currentUser.access_token,
        session: currentUser.session,
      });

      const data = await axios
        .post(API_URL + "/client/create?" + params, panelUser)
        .then((res) => res.data)
        .catch((err) => {
          let data = err.response.data;
          alert(data.message);
          return;
        });
      if (data.message !== "Client created successfully") {
        alert(data.message);
        return;
      }
      if (data.client.client_id) {
        const data2 = await axios
          .post(API_URL + "/url/generate?" + params, {
            client_id: data.client.client_id,
          })
          .then((res) => res.data)
          .catch((err) => {
            let data = err.response.data;
            alert(data.message);
            return;
          });
        if (data2.message !== "Url generated") {
          alert(data2.message);
          return;
        } else {
          alert("Client created successfully");
          props.onClose();
          window.location.reload();
        }
      }
    } catch (err) {}
  }

  function ValidateUser() {
    let error: UserErrorInterface = validateClient(panelUser, true);
    if (error.hasError) {
      setError(error);
      return false;
    }
    return true;
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPanelUser({
      ...panelUser,
      [e.target.name]: e.target.value,
    });
  }

  function onRoleChange(name: string, value: string) {
    setPanelUser({
      ...panelUser,
      [name]: value,
    });
  }

  return (
    <>
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Client</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <InputName
              name="name"
              defValue=""
              placeholder="Name"
              inputClassName="w-full"
              onChangeHandler={onChange}
              error={
                error.hasError && error.field === "name" ? error.message : ""
              }
            />
            <InputName
              name="username"
              defValue=""
              placeholder="Client Id"
              inputClassName="w-full"
              onChangeHandler={onChange}
              error={
                error.hasError && error.field === "username"
                  ? error.message
                  : ""
              }
            />
            <InputEmail
              name="email"
              defValue=""
              placeholder="Email"
              inputClassName="w-full"
              onChangeHandler={onChange}
              error={
                error.hasError && error.field === "email" ? error.message : ""
              }
            />

            <InputPass
              name="password"
              defValue=""
              placeholder="Password"
              inputClassName="w-full"
              onChangeHandler={onChange}
              error={
                error.hasError && error.field === "password"
                  ? error.message
                  : ""
              }
            />
            <InputSelect
              name="lawyer_id"
              selectArray={
                props.data.map((lawyer: UserInterface) => {
                  return {
                    id: lawyer.lawyer_id || "",
                    name: lawyer.name || "",
                    value: lawyer.lawyer_id || "",
                  };
                }) || [
                  {
                    id: "",
                    name: "No Lawyer Found",
                    value: "",
                  },
                ]
              }
              onChange={onRoleChange}
              defValue=""
              placeholder="Assign Lawyer"
              inputClassName="w-full"
              error={
                error.hasError && error.field === "role" ? error.message : ""
              }
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={props.onClose}>
              Close
            </Button>
            <Button
              variant="ghost"
              onClick={onCreate}
              className="bg-[#002F53] text-[white!important] capitalize hover:bg-[#002F53!important] "
            >
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
