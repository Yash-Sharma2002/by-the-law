import React from "react";
import FormTopBarInterface from "../../../../../interface/FormTopBar";
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";
import DisplayType from "../../../../../config/enum/DisplayType";
import Roles from "../../../../../config/enum/Roles";
import { IoIosAdd } from "react-icons/io";
import { deleteSecurityUserRole } from "../../../../../functions/SecurityUserRole/delete";
import FormTopBar from "../../../../../components/ui/FormTopBar";
import TableComponent from "../../../../../components/common/table/TableComponent";
import AddNew from "./AddNew";
import ModuleUrls from "../../../../../config/enum/Module";
import DisplayTitle from "../../../../../components/common/Utils/DisplayTitle";
import { AppContext } from "../../../../../context/Context";
import { ExcelContext } from "../../../../../context/ExcelContext";

type Props = {
  data: any;
  refresh?: any;
  setData?: any;
  UserId?: string;
  Role?: string;
  topBar:boolean;
}

export default function RolesList(props:Props ) {
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
      Object() {},
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
        let res = await deleteSecurityUserRole(CurrentUser,custTable.RecId);

        if (res.status === 200) {
          raiseToast("Assigned Role deleted successfully", "success");
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
        <DisplayTitle title="Roles" />
        {
          props.topBar &&
          <FormTopBar options={options} refreh={() => {}} />
        }
        <div className="border-t p-4">
            <TableComponent
              head={["User Id", "Name", "Description", "Created By"]}
              body={
                (props.data.length > 0 &&
                  props.data.map((item: any) => {
                    return [
                      item.RecId,
                      item.UserId,
                      item.Name,
                      item.Description,
                      item.CreatedBy,
                    ];
                  })) ||
                []
              }
              hidden={[0]}
              link={[{ form: ModuleUrls.Users, index: 1, key: 0 }]}
            />
          </div>
      </div>
      <AddNew
        open={newSeries}
        close={() => setNewSeries(false)}
        setSeries={props.setData}
        UserId={props.UserId}
        Role={props.Role}
      />
    </>
  );
}
