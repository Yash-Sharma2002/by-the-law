import React from "react";
import FormTopBarInterface from "../../../../../interface/FormTopBar";
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";
import DisplayType from "../../../../../config/enum/DisplayType";
import Roles from "../../../../../config/enum/Roles";
import { IoIosAdd } from "react-icons/io";
import FormTopBar from "../../../../../components/ui/FormTopBar";
import TableComponent from "../../../../../components/common/table/TableComponent";
import AddNew from "./AddNew";
import ModuleUrls from "../../../../../config/enum/Module";
import DisplayTitle from "../../../../../components/common/Utils/DisplayTitle";
import { AppContext } from "../../../../../context/Context";
import { ExcelContext } from "../../../../../context/ExcelContext";
import removeGroup from "../../../../../functions/user/removeGroup";

type Props = {
  data: any;
  refresh?: any;
  setData?: any;
  UserId?: string;
  topBar: boolean;
}

export default function GroupList(props: Props) {
  const {
    setLoading,
    raiseToast,
    user: CurrentUser,
  } = React.useContext(AppContext);
  const { selected } = React.useContext(ExcelContext);
  const [newSeries, setNewSeries] = React.useState(false);

  const options: FormTopBarInterface[] = [
    {
      name: "Edit",
      Icon: MdOutlineEdit,
      roles: [Roles.Admin],
      type: DisplayType.Function,
      Object() { },
    },
    {
      name: "New",
      Icon: IoIosAdd,
      roles: [Roles.Admin],
      type: DisplayType.Function,
      Object() {
        setNewSeries(true);
      },
    },
    {
      name: "Delete",
      Icon: MdDeleteOutline,
      roles: [Roles.Admin],
      type: DisplayType.Function,
      Object() {
        Delete();
      },
    },
  ];

  async function Delete() {
    if (selected.length === 0)
      return raiseToast("Please select a User Role to delete", "error");
    setLoading(true);
    try {
      for (let i = 0; i < selected.length; i++) {
        let custTable = props.data[selected[i]];
        let res = await removeGroup(CurrentUser, custTable.Id);

        if (res.status === 200) {
          raiseToast("Group removed successfully", "success");
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
        <DisplayTitle title="User Group" />
        {
          props.topBar &&
          <FormTopBar options={options} refreh={props.refresh} />
        }
        <div className="border-t p-4">
          <TableComponent
            head={["Name", "Description", "Created By", "Created Date"]}
            body={
              (props.data &&
                [[
                  props.data.Name,
                  props.data.Description,
                  props.data.CreatedBy,
                  new Date(props.data.CreatedDate).toDateString(),
                ]])
              ||
              []
            }
            link={[{ form: ModuleUrls.UserGroup, index: 0, key: 0 }]}
          />
        </div>
      </div>
      <AddNew
        open={newSeries}
        close={() => setNewSeries(false)}
        setSeries={props.setData}
        UserId={props.UserId}
        UserGroup={props.data ? props.data.Name : ""}
        refresh={props.refresh}
      />
    </>
  );
}
