import React from 'react'
import { AppContext } from '../../../context/Context';
import { ExcelContext } from '../../../context/ExcelContext';
import FormTopBarInterface from '../../../interface/FormTopBar';
import Layout from '../../../components/ui/Layout';
import TableComponent from '../../../components/common/table/TableComponent';
import New from './New';
import deleteCustGroup from '../../../functions/CustGroup/delete';
import DisplayType from '../../../config/enum/DisplayType';
import { MdDeleteOutline, MdOutlineEdit } from 'react-icons/md';
import Roles from '../../../config/enum/Roles';
import { IoIosAdd } from 'react-icons/io';
import getAllCustGroup from '../../../functions/CustGroup/getAll';
import Edit from './Edit';
import { EmptyCustGroup } from '../../../interface/CustGroup';


export default function CustGroup() {
  const { setLoading, raiseToast, user: CurrentUser } = React.useContext(AppContext);
  const { selected } = React.useContext(ExcelContext);
  const [series, setSeries] = React.useState<any>([]);
  const [edit, setEdit] = React.useState(false);
  const [newSeries, setNewSeries] = React.useState(false);

  const getCustGroup = React.useRef(() => { });

  getCustGroup.current = async () => {
    setLoading(true);
    const res = await getAllCustGroup(CurrentUser);
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
          return raiseToast("Please select a group to update", "error");
        setEdit(!edit);
      },
    },
    {
      name: "New",
      Icon: IoIosAdd,
      roles: [Roles.Admin],
      type: DisplayType.Function,
      Object() {
        setNewSeries(!newSeries);
      },
    },
    {
      name: "Delete",
      Icon: MdDeleteOutline,
      roles: [Roles.Admin],
      type: DisplayType.Function,
      Object() {
        Delete()
      },
    },
  ];

  async function Delete() {
    if (selected.length === 0)
      return raiseToast("Please select a group to delete", "error");
    setLoading(true);
    try {
      for (let i = 0; i < selected.length; i++) {
        let custTable = series[selected[i]];
        let res = await deleteCustGroup(CurrentUser, custTable.RecId);

        if (res.status === 200) {
          raiseToast(custTable.Name + " deleted successfully", "success");
        } else {
          raiseToast(res.error, "error");
        }
      }
    } catch (e: any) {
      raiseToast(e.message, "error");
    }
    setLoading(false);
    getCustGroup.current();
  }

  React.useEffect(() => {
    getCustGroup.current();
  }, []);

  return (
    <>
      <>
        <Layout options={options} name="Customer Groups" refreh={getCustGroup.current}>
          <TableComponent
            head={[
              "Name",
              "Description",
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
                    data.Name,
                    data.Description,
                    data.ModifiedBy,
                    data.CreatedBy,
                    new Date(data.CreatedDateTime).toDateString(),
                    new Date(data.ModifiedDateTime).toDateString(),
                  ];
                })) ||
              []
            }
            hidden={[0]}
          />
        </Layout>
        <New
          open={newSeries}
          close={() => setNewSeries(false)}
          setSeries={setSeries}
        />
        <Edit
          edit={edit}
          close={() => setEdit(false)}
          setSeries={setSeries}
          data={series[selected[0]] || EmptyCustGroup}
        />
      </>
    </>
  );
}
