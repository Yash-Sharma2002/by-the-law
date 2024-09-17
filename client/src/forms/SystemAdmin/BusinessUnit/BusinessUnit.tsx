import React from 'react'
import getAllBussUnit from '../../../functions/BussUnit/getAll';
import FormTopBarInterface from '../../../interface/FormTopBar';
import { MdDeleteOutline, MdOutlineEdit } from 'react-icons/md';
import Roles from '../../../config/enum/Roles';
import DisplayType from '../../../config/enum/DisplayType';
import { IoIosAdd } from 'react-icons/io';
import deleteBusUnit from '../../../functions/BussUnit/delete';
import { AppContext } from '../../../context/Context';
import { ExcelContext } from '../../../context/ExcelContext';
import Layout from '../../../components/ui/Layout';
import { BusUnitInterface, EmptyBusUnit } from '../../../interface/BusUnit';
import NewUnit from './NewUnit';
import UnitDetails from './UnitDetails';
import UnitValues from './UnitValues';

export default function BusinessUnit() {
  const { setLoading, raiseToast, user: CurrentUser } = React.useContext(AppContext);
  const { selected } = React.useContext(ExcelContext);
  const [series, setSeries] = React.useState<BusUnitInterface[]>([EmptyBusUnit]);
  const [selectedUnit, setSelectedUnit] = React.useState<BusUnitInterface>(EmptyBusUnit);
  const [edit, setEdit] = React.useState(false);
  const [newSeries, setNewSeries] = React.useState(false);

  const getBusUnit = React.useRef(() => { });

  getBusUnit.current = async () => {
    setLoading(true);
    const res = await getAllBussUnit(CurrentUser);
    if (res.status) {
      setSeries(res.data);
      setSelectedUnit(res.data[0]);
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
          return raiseToast("Please select a unit to update", "error");
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
        let res = await deleteBusUnit(CurrentUser, custTable.RecId?.toString() || "");

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
    getBusUnit.current();
  }

  React.useEffect(() => {
    getBusUnit.current();
  }, []);


  return (
    <>
      <Layout options={options} name="" refreh={getBusUnit.current}>

        <div className='flex justify-start items-start h-full '>
          <div className='w-1/5 border-r min-h-[90vh]'>
          

            {
              series.length > 0 ?
                series.map((item, index) => (
                  <div key={index}
                    onClick={() => setSelectedUnit(item)}
                    className={`cursor-pointer p-2 border-b`}>
                    <span className='font-bold'>{item.Name}</span>
                  </div>
                ))
                :
                <div className='cursor-pointer p-2 border-b'>
                  <span className='font-bold'>No Unit Defined</span>
                </div>
            }

          </div>
          <div className='w-4/5 px-4 overflow-y-scroll h-full scroll-hide'>
            <div className='mt-3'>
              <h1 className='font-bold text-2xl'>Business Unit</h1>
            </div>
            <UnitDetails refUnit={selectedUnit} />
            <UnitValues refUnit={selectedUnit} />
          </div>




        </div>

      </Layout>
      <NewUnit
        open={newSeries}
        close={() => setNewSeries(false)}
        setSeries={setSeries}
      />



    </>
  )
}
