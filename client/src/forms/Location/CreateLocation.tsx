import React from "react";
import LeftPopOverLayout from "../../components/ui/LeftPopOverLayout";
import { Stack } from "@chakra-ui/react";
import ErrorInterface from "../../interface/Error";
import validateName from "../../functions/validateName";
import FormInput from "../../components/input/FormInput";
import { AppContext } from "../../context/Context";
import LocationInterface, { EmptyLocation } from "../../interface/Location";
import createLocation from "../../functions/location/create";
import InputCountry from "../../components/input/InputCountry";
import FormSwitch from "../../components/input/FormSwitch";

export default function CreateLocation(props: {
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

  const [address, setAddress] =
    React.useState<LocationInterface>(EmptyLocation);

  const [error, setError] = React.useState<ErrorInterface>({
    input: "",
    message: "",
    error: false,
  });

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
    if (error.error) setError({ input: "", message: "", error: false });
  };

  function validate() {
    let error = validateName(address.Street, "Street");
    if (error) {
      setError({ input: "Street", message: error, error: true });
      return false;
    }

    error = validateName(address.State, "State");
    if (error) {
      setError({ input: "State", message: error, error: true });
      return false;
    }

    error = validateName(address.ZipCode, "Postal Code");
    if (error) {
      setError({ input: "ZipCode", message: error, error: true });
      return false;
    }

    return true;
  }

  async function save() {
    if (validate()) {
      setLoading(true);
      let ref = {
        TableName: props.refTable,
        RecId: props.refData,
      };
      const res = await createLocation(address, CurrentUser, ref);
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
  }

  React.useEffect(() => {
    if (props.open) {
    }
    setOpen(props.open !== undefined ? props.open : true);
  }, [props.open]);

  return (
    <>
      <LeftPopOverLayout
        onSave={save}
        path="/New"
        title="Create New Address"
        isOpen={open}
        close={close}
      >
        <Stack direction="column">
          <Stack direction="column">
            <FormInput
              label="Street"
              handleChange={handleAddressChange}
              name="Street"
              isRequired={true}
              isInvalid={error.input === "Street"}
              error={error.message}
              focus="District"
            />

            <FormInput
              label="District"
              handleChange={handleAddressChange}
              name="District"
              isRequired={true}
              isInvalid={error.input === "District"}
              error={error.message}
              focus="City"
            />

            <Stack direction={['column', 'row']}>
              <FormInput
                label="City"
                handleChange={handleAddressChange}
                name="City"
                isRequired={true}
                isInvalid={error.input === "City"}
                error={error.message}
                focus="State"
              />

              <FormInput
                label="State"
                handleChange={handleAddressChange}
                name="State"
                isRequired={true}
                isInvalid={error.input === "State"}
                error={error.message}
                focus="Country"
              />
            </Stack>

            <Stack direction={['column', 'row']}>
              <InputCountry
                label="Country"
                handleChange={(name, value) => {
                  setAddress({ ...address, [name]: value });
                }}
                name="Country"
                isRequired={true}
                isInvalid={error.input === "Country"}
                error={error.message}
                focus="ZipCode"
              />

              <FormInput
                label="Postal Code"
                handleChange={handleAddressChange}
                name="ZipCode"
                isRequired={true}
                isInvalid={error.input === "ZipCode"}
                error={error.message}
                focus="IsPrimary"
              />
            </Stack>
            <FormSwitch
              label="Is Primary Address"
              handleChange={(e) =>
                setAddress({
                  ...address,
                  IsPrimary: Number(e.target.checked),
                })
              }
              name="IsPrimary"
            />
          </Stack>
        </Stack>
      </LeftPopOverLayout>
    </>
  );
}
