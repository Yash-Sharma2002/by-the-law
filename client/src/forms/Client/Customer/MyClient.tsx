import React from "react";
import Layout from "../../../components/ui/Layout";
import FormTopBarInterface from "../../../interface/FormTopBar";
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";
import DisplayType from "../../../config/enum/DisplayType";
import { IoIosAdd } from "react-icons/io";
import TableComponent from "../../../components/common/table/TableComponent";
import NewClient from "./NewClient";
import { AppContext } from "../../../context/Context";
import Roles from "../../../config/enum/Roles";
import getByManager from "../../../functions/custTable/getByManager";
import { ExcelContext } from "../../../context/ExcelContext";
import deleteCustomer from "../../../functions/custTable/delete";
import ModuleUrls from "../../../config/enum/Module";
import EditCustomerGrid from "./EditCustomerGrid";
import { EmptyClient } from "../../../interface/Client";

export default function MyClients() {
  const {
    setLoading,
    raiseToast,
    user: CurrentUser,
  } = React.useContext(AppContext);
  const { selected } = React.useContext(ExcelContext);
  const [series, setSeries] = React.useState<any>([]);
  const [edit, setEdit] = React.useState(false);
  const [newSeries, setNewSeries] = React.useState(false);
  const [search, setSearch] = React.useState("");

  const getClients = React.useRef(() => { });

  getClients.current = async () => {
    setLoading(true);
    const res = await getByManager(CurrentUser);
    if (res.status) {
      setSeries(res.data);
    } else {
      raiseToast(res.error, "error");
    }
    setLoading(false);
  };

  const options: FormTopBarInterface[] = [
    {
      name: "Edit",
      Icon: MdOutlineEdit,
      roles: [Roles.Admin, Roles.Lawyer],
      type: DisplayType.Function,
      Object() {
        if (selected.length === 0)
          return raiseToast("Please select a customer to delete", "error");
        setEdit(!edit);
      },
    },
    {
      name: "New",
      Icon: IoIosAdd,
      roles: [Roles.Admin, Roles.Lawyer],
      type: DisplayType.Function,
      Object() {
        setNewSeries(!newSeries);
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
      return raiseToast("Please select a customer to delete", "error");
    setLoading(true);
    try {
      for (let i = 0; i < selected.length; i++) {
        let custTable = series[selected[i]];
        let res = await deleteCustomer(custTable.RecId, CurrentUser);

        if (res.status === 200) {
          raiseToast(custTable.AccountNum + " deleted successfully", "success");
        } else {
          raiseToast(res.error, "error");
        }
      }
    } catch (e: any) {
      raiseToast(e.message, "error");
    }
    setLoading(false);
    getClients.current();
  }

  React.useEffect(() => {
    getClients.current();
  }, []);

  return (
    <>
      <>
        <Layout options={options} name="Customers" refreh={getClients.current}>

          <TableComponent
            head={[
              "Account Number",
              "Name",
              "Customer Group",
              "Currency",
              "Blocked",
              "Phone",
              "Email",
              "Manager",
              // "Source By",
              "Modified By",
              "Created By",
              "Created Date",
              "Modified Date",
            ]}
            body={
              (series.length > 0 &&
                series.map((data: any) => {
                  return [
                    data.RecId,
                    data.AccountNum,
                    data.Name,
                    data.CustGroup,
                    data.CustGroupName,
                    data.Currency,
                    data.Blocked ? "Yes" : "No",
                    data.PCode + data.Phone,
                    data.Email,
                    data.Manager,
                    data.ManagerRecId,
                    // data.SourcedBy,
                    data.ModifiedBy,
                    data.CreatedBy,
                    new Date(data.CreatedDateTime).toDateString(),
                    new Date(data.ModifiedDateTime).toDateString(),
                  ];
                })) ||
              []
            }
            hidden={[0, 3, 10]}
            link={[
              { form: ModuleUrls.Customers, index: 1, key: 0 },
              { form: ModuleUrls.Users, index: 9, key: 10 },
              { form: ModuleUrls.CustGroup, index: 4, key: 3 },
            ]}
          />
        </Layout>
        <NewClient
          open={newSeries}
          close={() => setNewSeries(false)}
          setSeries={setSeries}
        />
        <EditCustomerGrid
          edit={edit}
          close={() => setEdit(false)}
          setSeries={setSeries}
          data={series[selected[0]] || EmptyClient}
        />
      </>
    </>
  );
}
