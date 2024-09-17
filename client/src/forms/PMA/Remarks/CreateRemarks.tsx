import React from "react";
import { AppContext } from "../../../context/Context";
import RemarksInterface, { EmptyRemarks } from "../../../interface/Remarks";
import ErrorInterface from "../../../interface/Error";
import createRemarks from "../../../functions/Remarks/addRemarks";
import LeftPopOverLayout from "../../../components/ui/LeftPopOverLayout";
import { Stack } from "@chakra-ui/react";
import FormInput from "../../../components/input/FormInput";
import FormFile from "../../../components/input/FormFile";
import FormArea from "../../../components/input/FormArea";
import { IoImage } from "react-icons/io5";
import { FaVideo } from "react-icons/fa6";
import InputSelect from "../../../components/input/InputSelect";
import RemarksType from "../../../config/enum/RemarkType";
import {SelectArray} from "../../../interface/SelectArray";

export default function CreateRemarks(props: {
  open?: boolean;
  close?: () => void;
  setSeries?: (series: any) => void;
  refTable: string;
  refData: any;
}) {
  const [open, setOpen] = React.useState<boolean>(
    props.open !== undefined ? props.open : true
  );

  const {
    user: CurrentUser,
    raiseToast,
    setLoading,
  } = React.useContext(AppContext);

  function close() {
    setOpen(false);
    if (props.close) props.close();
  }

  const [address, setAddress] = React.useState<RemarksInterface>(EmptyRemarks);

  const [error, setError] = React.useState<ErrorInterface>({
    input: "",
    message: "",
    error: false,
  });

  const handleAddressChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
    if (error.error) setError({ input: "", message: "", error: false });
  };

  async function save() {
    setLoading(true);
    let ref = {
      TableName: props.refTable,
      RecId: props.refData,
    };
    const res = await createRemarks(address, CurrentUser, ref);
    if (res.status === 200) {
      raiseToast(res.message, "success");
    } else {
      raiseToast("Error", "error", res.message);
    }
    if (props.setSeries) {
      props.setSeries((prev: any) => {
        return [...prev, res.data];
      });
      close();
    }
    setLoading(false);
  }

  React.useEffect(() => {
    if (props.open || open) {
      setAddress(EmptyRemarks);
    }
    setOpen(props.open !== undefined ? props.open : true);
  }, [props.open, open]);

  return (
    <>
      <LeftPopOverLayout
        onSave={save}
        path="/New"
        title="Add Remark"
        isOpen={open}
        close={close}
      >
        <Stack direction="column">
          <Stack direction="column">
            <FormInput
              label="Title"
              handleChange={handleAddressChange}
              name="Title"
              isRequired={true}
              isInvalid={error.input === "Title"}
              error={error.message}
            />


            <FormArea
              label="Description"
              handleChange={handleAddressChange}
              name="Description"
              isRequired={true}
              isInvalid={error.input === "Description"}
              error={error.message}
            />

            
<InputSelect
              label="Type"
              defaultValue={"Text"}
              handleChange={(name, value) => {
                setAddress({
                  ...address,
                  Type: parseInt(value),
                });
              }}
              name="Type"
              isRequired={true}
              isInvalid={error.input === "Type"}
              error={error.message}
              selectArray={
                Object.keys(RemarksType)
                  .filter((key) => !isNaN(Number(key)))
                  .map((key) => {
                    return {
                      id: key.toString(),
                      value: key,
                      name: RemarksType[
                        key as keyof typeof RemarksType
                      ].toString(),
                    };
                  }) as SelectArray[]
              }
            />

            {address.Type === RemarksType.Image ? (
              <FormFile
                label="Image"
                handleChange={(value) => {
                  setAddress({
                    ...address,
                    Image: value,
                  });
                }}
                Icon={IoImage}
                name="Image"
                isRequired={true}
                type="image/*"
              />
            ) : address.Type === RemarksType.Video ? (
              <FormFile
                label="Video"
                handleChange={(value) => {
                  setAddress({
                    ...address,
                    Video: value,
                  });
                }}
                Icon={FaVideo}
                name="Video"
                isRequired={true}
                type="video/*"
              />
            ) : null}
          </Stack>
        </Stack>
      </LeftPopOverLayout>
    </>
  );
}
