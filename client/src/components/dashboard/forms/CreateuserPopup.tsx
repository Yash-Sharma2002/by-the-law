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
import {  RolesEnum } from "../../../constants/Roles";
import { AppContext } from "../../../context/Context";
import axios from "axios";
import { API_URL } from "../../../constants/data";
import UserErrorInterface from "../../../interface/Error";
import ClientInterface from "../../../interface/NewClient";
import FormInterface from "../../../interface/Form";
import SelectArray from "../../../interface/SelectArray";
import { Forms } from "../../../constants/Forms";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  clients: ClientInterface[];
}

export default function CreateuserPopup(props: Props) {
  const { user: currentUser } = React.useContext(AppContext);

  const [error, setError] = React.useState<UserErrorInterface>(
    {} as UserErrorInterface
  );

  const [panelUser, setPanelUser] = React.useState<FormInterface>(
    {} as FormInterface
  );

  const clientsArray: SelectArray[] =
    props.clients.length > 0
      ? props.clients.map((client) => {
          return {
            id: client.client_id || "",
            name: client.name || "",
            value: client.client_id || "",
          };
        })
      : [
          {
            id: "",
            name: "No Client Found",
            value: "",
          },
        ];

  async function onCreate() {
    if (!validateForm()) return;
    try {
      const params = new URLSearchParams({
        uid: currentUser.uid,
        access_token: currentUser.access_token,
        session: currentUser.session,
      });

      const data = await axios
        .post(API_URL + "/form/generate?" + params, panelUser)
        .then((res) => res.data)
        .catch((err) => {
          let data = err.response.data;
          alert(data.message);
          return;
        });
      if (data.message !== "Form created") {
        alert(data.message);
        return;
      }
      alert("Form created");
      props.onClose();
      window.location.reload();
    } catch (err) {}
  }

  function validateForm() {
    if (!panelUser.client_id) {
      setError({
        hasError: true,
        field: "client_id",
        message: "Please select your client",
      });
      return false;
    }

    if (!panelUser.name) {
      setError({
        hasError: true,
        field: "name",
        message: "Please select your form",
      });
      return false;
    }

    let selectedClient = props.clients.find(
      (client) => client.client_id === panelUser.client_id
    );
    if (
      selectedClient?.lawyer_id !== currentUser.uid &&
      currentUser.role !== RolesEnum.admin
    ) {
      alert("You are not allowed to create form for this client");
      return false;
    }

    return true;
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
          <ModalHeader>Create Form</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <InputSelect
              name="client_id"
              selectArray={clientsArray}
              onChange={onRoleChange}
              defValue=""
              placeholder="Select your client"
              inputClassName="w-full"
              error={
                error.hasError && error.field === "client_id"
                  ? error.message
                  : ""
              }
            />

            <InputSelect
              name="name"
              selectArray={Forms}
              onChange={onRoleChange}
              defValue=""
              placeholder="Select your Form"
              inputClassName="w-full"
              error={
                error.hasError && error.field === "name" ? error.message : ""
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
