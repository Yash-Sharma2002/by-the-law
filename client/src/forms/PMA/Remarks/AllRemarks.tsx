import React from "react";
import { AppContext } from "../../../context/Context";
import { ExcelContext } from "../../../context/ExcelContext";
import FormTopBarInterface from "../../../interface/FormTopBar";
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";
import Roles from "../../../config/enum/Roles";
import DisplayType from "../../../config/enum/DisplayType";
import { IoIosAdd } from "react-icons/io";
import deleteRemarks from "../../../functions/Remarks/deleteRemarks";
import DisplayTitle from "../../../components/common/Utils/DisplayTitle";
import FormTopBar from "../../../components/ui/FormTopBar";
import CreateRemarks from "./CreateRemarks";
import RemarksTable from "../../../components/common/table/RemarksTable";
import ViewRemarks from "./ViewRemarks";
import { EmptyRemarks } from "../../../interface/Remarks";
import { FaEye } from "react-icons/fa";

export default function AllRemarks(props: {
  data: any;
  refData: any;
  refTable: string;
  refresh?: any;
  setData?: any;
}) {
  const {
    setLoading,
    raiseToast,
    user: CurrentUser,
  } = React.useContext(AppContext);
  const { selected } = React.useContext(ExcelContext);
  const [newSeries, setNewSeries] = React.useState(false);
  const [view, setView] = React.useState(false);

  const options: FormTopBarInterface[] = [
    {
      name: "Edit",
      Icon: MdOutlineEdit,
      roles: [
        Roles.Admin,
        Roles.Lawyer,
      ],
      type: DisplayType.Function,
      Object() {},
    },
    {
      name: "New",
      Icon: IoIosAdd,
      roles: [
        Roles.Admin,
        Roles.Lawyer,
      ],
      type: DisplayType.Function,
      Object() {
        setNewSeries(true);
      },
    },
    {
      name: "Delete",
      Icon: MdDeleteOutline,
      roles: [
        Roles.Admin,
        Roles.Lawyer,
      ],
      type: DisplayType.Function,
      Object() {
        Delete();
      },
    },
    {
      name: "View",
      Icon: FaEye,
      roles: [
        Roles.Admin,
        Roles.Lawyer,
      ],
      type: DisplayType.Function,
      Object() {
        setView(true);
      },
    },
  ];

  async function Delete() {
    if (selected.length === 0)
      return raiseToast("Please select a customer to delete", "error");
    setLoading(true);
    try {
      for (let i = 0; i < selected.length; i++) {
        let custTable = props.data[selected[i]];
        let res = await deleteRemarks(custTable.RecId, CurrentUser);

        if (res.status === 200) {
          raiseToast("Remark deleted successfully", "success");
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
        <DisplayTitle title="Remarks" />
        <FormTopBar options={options} refreh={props.refresh} />
        <div className="border-t p-4">
          <RemarksTable
            head={[
              "Title",
              "Description",
              "Attachment",
              "CreatedBy",
              "ModifiedBy",
              "CreatedDateTime",
              "ModifiedDateTime",
            ]}
            body={
              (props.data.length > 0 &&
                props.data.map((item: any) => {
                  return [
                    item.Title,
                    item.Type,
                    item.Description,
                    item.Image,
                    item.Video,
                    item.CreatedBy,
                    item.ModifiedBy,
                    new Date(item.CreatedDateTime).toDateString(),
                    new Date(item.ModifiedDateTime).toDateString(),
                  ];
                })) ||
              []
            }
            hidden={[1]}
          />
        </div>
        <CreateRemarks
          open={newSeries}
          close={() => setNewSeries(false)}
          setSeries={props.setData}
          refTable={props.refTable}
          refData={props.refData.RecId}
        />
      </div>
      <ViewRemarks
        data={props.data[selected[0]] || EmptyRemarks}
        open={view}
        close={() => setView(false)}
      />
    </>
  );
}
