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
import InputEmail from "../../input/InputEmail";
import InputName from "../../input/InputName";
import { AppContext } from "../../../context/Context";
import axios from "axios";
import { API_URL } from "../../../constants/data";
import UserErrorInterface from "../../../interface/Error";
import UserInterface from "../../../interface/NewUser";
import ClientInterface from "../../../interface/NewClient";
import { UserClientStatus } from "../../../constants/Status";
import toTitleCase from "../../../functions/toTitle";
import validateClient from "../../../functions/validateClient";
import { RolesEnum } from "../../../constants/Roles";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  data: ClientInterface;
  lawyers: UserInterface[];
}

export default function UpdateUserPopup(props: Props) {
  const { user: currentUser } = React.useContext(AppContext);
  const [panelUser, setPanelUser] = React.useState<ClientInterface>(props.data);

  const [error, setError] = React.useState<UserErrorInterface>(
    {} as UserErrorInterface
  );

  const lawyers =
    props.lawyers.length > 0
      ? props.lawyers.map((lawyer: UserInterface) => {
          return {
            id: lawyer.lawyer_id || "",
            name: lawyer.name || "",
            value: lawyer.lawyer_id || "",
          };
        })
      : [
          {
            id: "",
            name: "No Lawyer Found",
            value: "",
          },
        ];

  async function onCreate() {
    if (!ValidateUser()) {
      return;
    }

    if (
      currentUser.uid !== panelUser.lawyer_id &&
      currentUser.role !== RolesEnum.admin
    ) {
      alert("You are not allowed to update this client");
      return;
    }

    try {
      const params = new URLSearchParams({
        uid: currentUser.uid,
        access_token: currentUser.access_token,
        session: currentUser.session,
      });

      const data = await axios
        .put(API_URL + "/client/update?" + params, panelUser)
        .then((res) => res.data)
        .catch((err) => {
          let data = err.response.data;
          alert(data.message);
          return;
        });
      if (data.message !== "Client updated") {
        alert(data.message);
        return;
      }
      alert("Client updated successfully");
      props.onClose();
      window.location.reload();
    } catch (err) {}
  }

  function ValidateUser() {
    let error: UserErrorInterface = validateClient(panelUser, false);
    if (error.hasError) {
      setError(error);
      return false;
    }
    return true;
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (error.hasError) {
      setError({
        hasError: false,
        field: "",
        message: "",
      });
    }
    setPanelUser({
      ...panelUser,
      [e.target.name]: e.target.value,
    });
  }

  function onRoleChange(name: string, value: string) {
    if (error.hasError) {
      setError({
        hasError: false,
        field: "",
        message: "",
      });
    }
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
          <ModalHeader>Update Client - {props.data.username}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <InputName
              name="name"
              defValue={panelUser.name || ""}
              placeholder="Name"
              inputClassName="w-full"
              onChangeHandler={onChange}
              error={
                error.hasError && error.field === "name" ? error.message : ""
              }
            />
            <InputName
              name="username"
              defValue={panelUser.username || ""}
              disabled={true}
              placeholder="Username"
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
              defValue={panelUser.email || ""}
              placeholder="Email"
              inputClassName="w-full"
              onChangeHandler={onChange}
              error={
                error.hasError && error.field === "email" ? error.message : ""
              }
            />
            <InputSelect
              name="lawyer_id"
              selectArray={lawyers}
              onChange={onRoleChange}
              defValue={toTitleCase(panelUser.lawyer.name)}
              placeholder="Assign Lawyer"
              inputClassName="w-full"
              error={
                error.hasError && error.field === "role" ? error.message : ""
              }
            />
            <InputSelect
              name="status"
              selectArray={UserClientStatus}
              onChange={onRoleChange}
              defValue={toTitleCase(panelUser.status || "")}
              placeholder="Select your status"
              inputClassName="w-full"
              error={
                error.hasError && error.field === "status" ? error.message : ""
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
              Update
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
