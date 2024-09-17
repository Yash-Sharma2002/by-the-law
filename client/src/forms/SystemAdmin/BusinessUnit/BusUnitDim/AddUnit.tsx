import React from "react";
import { Stack } from "@chakra-ui/react";
import { AppContext } from "../../../../context/Context";
import { BusUnitDimInterface, EmptyBusUnitDim } from "../../../../interface/BusUnitDim";
import ErrorInterface from "../../../../interface/Error";
import validateName from "../../../../functions/validateName";
import createBusUnitDim from "../../../../functions/BusUnitDim/create";
import LeftPopOverLayout from "../../../../components/ui/LeftPopOverLayout";
import getAllBussUnit from "../../../../functions/BussUnit/getAll";
import InputSelect from "../../../../components/input/InputSelect";
import getAllByUnitBussUnitValueSet from "../../../../functions/BussUnitValueSet/getAllByUnit";
import SelectArray from "../../../../interface/SelectArray";


export default function AddUnit(props: {
  open?: boolean;
  close?: () => void;
  setSeries?: (series: any) => void;
  refTable: string;
  refData: any;
}) {
  const {
    user: CurrentUser,
    raiseToast,
    setLoading,
  } = React.useContext(AppContext);
  const [open, setOpen] = React.useState<boolean>(
    props.open !== undefined ? props.open : true
  );

  const [allUnits, setAllUnits] = React.useState<SelectArray[]>([]);
  const [unitValues, setUnitValues] = React.useState<SelectArray[]>([]);

  const getAllUnits = React.useRef(() => { });

  getAllUnits.current = async () => {
    const res = await getAllBussUnit(CurrentUser);
    if (res.status === 200) {
      let data: SelectArray[] = res.data.map((item: any) => {
        return {
          value: item.Name,
          name: item.Name,
        }
      }
      );
      setAllUnits(data);
    }
  }

  async function getUnitValues(value = address.UnitName) {
    try {
      const res = await getAllByUnitBussUnitValueSet(CurrentUser, value);
      if (res.status === 200) {
        let data: SelectArray[] = res.data.map((item: any) => {
          return {
            value: item.ValueSet,
            name: item.ValueSet,
          }
        }
        );
        setUnitValues(data);
      }
    }
    catch (e: any) {
      raiseToast(e.message, "error");
    }


  }


  function close() {
    setOpen(false);
    if (props.close) props.close();
  }

  const [address, setAddress] =
    React.useState<BusUnitDimInterface>(EmptyBusUnitDim);

  const [error, setError] = React.useState<ErrorInterface>({
    input: "",
    message: "",
    error: false,
  });

  const handleAddressChange = (type: string, value: string) => {
    setAddress({
      ...address,
      [type]: value
    });
    if(type === "UnitName") getUnitValues(value);
    if (error.error) setError({ input: "", message: "", error: false });
  };

  function validate() {
    let error = validateName(address.UnitName, "UnitName");
    if (error) {
      setError({ input: "UnitName", message: error, error: true });
      return false;
    }

    error = validateName(address.Value, "Value");
    if (error) {
      setError({ input: "Value", message: error, error: true });
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
      const res = await createBusUnitDim(address, CurrentUser, ref);
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
      getAllUnits.current();
    }
    setOpen(props.open !== undefined ? props.open : true);
  }, [props.open]);

  return (
    <>
      <LeftPopOverLayout
        onSave={save}
        path="/New"
        title="Add Unit"
        isOpen={open}
        close={close}
      >
        <Stack direction="column">
          <Stack direction="column">
            <InputSelect
              label="Name"
              handleChange={handleAddressChange}
              name="UnitName"
              isRequired={true}
              isInvalid={error.input === "UnitName"}
              error={error.message}
              selectArray={allUnits}
              focus="Value"
            />

            <InputSelect
              label="Value"
              handleChange={handleAddressChange}
              name="Value"
              isRequired={true}
              isInvalid={error.input === "Value"}
              error={error.message}
              selectArray={unitValues}
            />

          </Stack>
        </Stack>
      </LeftPopOverLayout>
    </>
  );
}
