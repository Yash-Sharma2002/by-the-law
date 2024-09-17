import React from "react";
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";
import { AppContext } from "../../../../context/Context";
import { ExcelContext } from "../../../../context/ExcelContext";
import FormTopBarInterface from "../../../../interface/FormTopBar";
import Roles from "../../../../config/enum/Roles";
import DisplayType from "../../../../config/enum/DisplayType";
import { IoIosAdd } from "react-icons/io";
import deletebusUnitDim from "../../../../functions/BusUnitDim/delete";
import DisplayTitle from "../../../../components/common/Utils/DisplayTitle";
import FormTopBar from "../../../../components/ui/FormTopBar";
import TableComponent from "../../../../components/common/table/TableComponent";
import { BusUnitDimInterface } from "../../../../interface/BusUnitDim";
import AddUnit from "./AddUnit";

type Props = {
  data: BusUnitDimInterface[];
  refData: any;
  refTable: string;
  refresh?: any;
  setData?: any;
  topBar: boolean;
}

export default function BusUnitDim(props: Props) {
  const {
    setLoading,
    raiseToast,
    user: CurrentUser,
  } = React.useContext(AppContext);
  const { selected } = React.useContext(ExcelContext);
  const [newSeries, setNewSeries] = React.useState(false);
  const [edit, setEdit] = React.useState(false);

  

  const options: FormTopBarInterface[] = [
    {
      name: "Edit",
      Icon: MdOutlineEdit,
      roles: [Roles.Admin, Roles.Lawyer],
      type: DisplayType.Function,
      Object() {
        if (selected.length === 0)
          return raiseToast("Please select an Address to update", "error");
        setEdit(!edit);
      },
    },
    {
      name: "New",
      Icon: IoIosAdd,
      roles: [Roles.Admin, Roles.Lawyer],
      type: DisplayType.Function,
      Object() {
        setNewSeries(true);
      },
    },
    {
      name: "Delete",
      Icon: MdDeleteOutline,
      roles: [Roles.Admin, Roles.Lawyer],
      type: DisplayType.Function,
      Object() {
        Delete();
      },
    },
  ];

  async function Delete() {
    if (selected.length === 0)
      return raiseToast("Please select a unit to delete", "error");
    setLoading(true);
    try {
      for (let i = 0; i < selected.length; i++) {
        let custTable = props.data[selected[i]];
        let res = await deletebusUnitDim(custTable.RecId, CurrentUser);

        if (res.status === 200) {
          raiseToast("Unit deleted successfully", "success");
        } else {
          raiseToast(res.error, "error");
        }
      }
    } catch (e: any) {
      raiseToast(e.message, "error");
    }
    setLoading(false);
    if (props.refresh) props.refresh();
  }

  return (
    <>
      <br />
      <div className="border rounded-md shadow-md mt-2">
        <DisplayTitle title="Business Unit Dimensions" />
        {
          props.topBar &&
          <FormTopBar options={options} refreh={props.refresh} />
        }
        <div className="border-t p-4">
          <TableComponent
            head={["Unit", "Value"]}
            body={
              (props.data.length > 0 &&
                props.data.map((item: BusUnitDimInterface) => {
                  return [item.UnitName, item.Value ];
                })) ||
              []
            }
          />
        </div>
        <AddUnit
          open={newSeries}
          close={() => setNewSeries(false)}
          setSeries={props.setData}
          refTable={props.refTable}
          refData={props.refData.RecId}
        />
        {/* 
        <EditLocation
          edit={edit}
          close={() => setEdit(false)}
          data={props.data[selected[0]] || EmptyLocation}
          setSeries={props.setData}
        /> */}
      </div>
    </>
  );
}
