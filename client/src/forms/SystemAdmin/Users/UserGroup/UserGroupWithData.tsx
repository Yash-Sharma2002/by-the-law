import React from 'react'
import FormTopBarInterface from '../../../../interface/FormTopBar';
import New from './New';
import DisplayType from '../../../../config/enum/DisplayType';
import { MdDeleteOutline, MdOutlineEdit } from 'react-icons/md';
import Roles from '../../../../config/enum/Roles';
import { IoIosAdd } from 'react-icons/io';
import Edit from './Edit';
import { AppContext } from '../../../../context/Context';
import { ExcelContext } from '../../../../context/ExcelContext';
import deleteUserGroup from '../../../../functions/UserGroup/delete';
import getAllUserGroup from '../../../../functions/UserGroup/getAll';
import GroupDetails from './GroupDetails';
import { useParams } from 'react-router-dom';
import FormTopBar from '../../../../components/ui/FormTopBar';
import { EmptyUserGroup, UserGroupInterface } from '../../../../interface/UserGroup';

export default function UserGroupWithData() {
  const { data } = useParams();
  const { setLoading, raiseToast, user: CurrentUser } = React.useContext(AppContext);
  const { selected, setSelected } = React.useContext(ExcelContext);
  const [series, setSeries] = React.useState<UserGroupInterface[]>([]);
  const [edit, setEdit] = React.useState(false);
  const [newSeries, setNewSeries] = React.useState(false);
  const [selectedUnit, setSelectedUnit] = React.useState<UserGroupInterface>(EmptyUserGroup);

  const getCustGroup = React.useRef(() => { });

  getCustGroup.current = async () => {
    setLoading(true);
    const res = await getAllUserGroup(CurrentUser);
    if (res.status) {
      setSeries(res.data);

      // if data is empty
      if (data === "") {
        setSelectedUnit(res.data[0]);
        setSelected([0])
      }
      else {
        setSelectedUnit(res.data.find((item: UserGroupInterface) => item.Name === data) || EmptyUserGroup);
        setSelected([res.data.findIndex((item: UserGroupInterface) => item.Name === data)])
      }
    } else {
      raiseToast(res.error, "error");
    }
    setLoading(false);
  };

  const options: FormTopBarInterface[] = [
    {
      name: "Edit",
      Icon: MdOutlineEdit,
      roles: [Roles.Admin],
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
        let res = await deleteUserGroup(CurrentUser, custTable.RecId?.toString() || "");

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
        <FormTopBar options={options} refreh={getCustGroup.current} />
        <div className='flex justify-start items-start h-full '>
          <div className='w-1/5 border-r min-h-[90vh]'>

            {
              series.length > 0 ?
                series.map((item, index) => (
                  <div key={index}
                    onClick={() => setSelectedUnit(item)}
                    className={`cursor-pointer p-2 border-b`}>
                    <span className=' font-medium '>{item.Name}</span>
                  </div>
                ))
                :
                <div className='cursor-pointer p-2 border-b'>
                  <span className='font-bold'>No Group Defined</span>
                </div>
            }

          </div>
          <div className='w-4/5 px-4 overflow-y-scroll h-full scroll-hide'>
            <div className='mt-3'>
              <h1 className='font-bold text-xl'>User Group</h1>
            </div>
            <GroupDetails refGroup={selectedUnit} />
          </div>
        </div>
        <New
          open={newSeries}
          close={() => setNewSeries(false)}
          setSeries={setSeries}
        />
        <Edit
          edit={edit}
          close={() => setEdit(false)}
          setSeries={setSeries}
          data={series[selected[0]] || EmptyUserGroup}
        />
      </>
    </>
  );
}
