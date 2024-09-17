import React, { ChangeEvent } from 'react'
import { BusUnitInterface } from '../../../interface/BusUnit'
import DisplayTitle from '../../../components/common/Utils/DisplayTitle'
import { AppContext } from '../../../context/Context'
import { ExcelContext } from '../../../context/ExcelContext'
import { BusUnitValueSetInterface, EmptyBusUnitValueSet } from '../../../interface/BusUnitValueSet'
import FormTopBarInterface from '../../../interface/FormTopBar'
import { MdDeleteOutline, MdFileUpload, MdOutlineEdit } from 'react-icons/md'
import Roles from '../../../config/enum/Roles'
import DisplayType from '../../../config/enum/DisplayType'
import { IoIosAdd } from 'react-icons/io'
import deleteBussUnitValueSet from '../../../functions/BussUnitValueSet/delete'
import FormTopBar from '../../../components/ui/FormTopBar'
import getAllByUnitBussUnitValueSet from '../../../functions/BussUnitValueSet/getAllByUnit'
import TableComponent from '../../../components/common/table/TableComponent'
import NewValue from './NewValues'
import createManyBusUnitValueSet from '../../../functions/BussUnitValueSet/createMany'
import convertExcelCsvToJson from '../../../functions/convertExcelCsvToJson'

type Props = {
    refUnit: BusUnitInterface
}

export default function UnitValues(props: Props) {

    const { setLoading, raiseToast, user: CurrentUser } = React.useContext(AppContext);
    const { selected } = React.useContext(ExcelContext);
    const [series, setSeries] = React.useState<BusUnitValueSetInterface[]>([EmptyBusUnitValueSet]);
    const [edit, setEdit] = React.useState(false);
    const [newSeries, setNewSeries] = React.useState(false);

    const getBusUnitValueSet = React.useRef(() => { });

    getBusUnitValueSet.current = async () => {
        setLoading(true);
        const res = await getAllByUnitBussUnitValueSet(CurrentUser, props.refUnit.Name);
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
                    return raiseToast("Please select a unit to update", "error");
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
        {
            name: "Upload",
            Icon: MdFileUpload,
            roles: [Roles.Admin, Roles.Lawyer],
            type: DisplayType.Function,
            Object() {
                Upload()
            },
        },
    ];

    async function Upload() {
        document.getElementById('fileInput')?.click();
    }

    async function Delete() {
        if (selected.length === 0)
            return raiseToast("Please select a group to delete", "error");
        setLoading(true);
        try {
            for (let i = 0; i < selected.length; i++) {
                let custTable = series[selected[i]];
                let res = await deleteBussUnitValueSet(CurrentUser, custTable.RecId?.toString() || "");

                if (res.status === 200) {
                    raiseToast(custTable.ValueSet + " deleted successfully", "success");
                } else {
                    raiseToast(res.error, "error");
                }
            }
        } catch (e: any) {
            raiseToast(e.message, "error");
        }
        setLoading(false);
        getBusUnitValueSet.current();
    }

    function append(data: BusUnitValueSetInterface) {
        setSeries([...series, data]);
    }

    const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.files)
        if (event.target.files) {
            const file = event.target.files[0];
            const fileExtension = file.name.split('.').pop()?.toLowerCase();

            const validExtensions = ['csv', 'xlsx', 'xls'];

            if (fileExtension && validExtensions.includes(fileExtension)) {
                await handleFileUpload(file);
                // make the fields empty after uploading the file
                event.target.value = '';
            } else {
                raiseToast('Please upload a valid Excel or CSV file.', 'error');
            }
        }
    };


    const handleFileUpload = async (file: File) => {
        try {
            setLoading(true);

            const jsonData = await convertExcelCsvToJson(file);

            const response = await createManyBusUnitValueSet(CurrentUser, jsonData.Sheet1)

            if (response.status !== 200) {
                throw new Error('Upload failed');
            }

            raiseToast('Data Inserted Succesfully!', 'success');
        } catch (error) {
            raiseToast('An error occurred while uploading the file.', 'error');
        } finally {
            setLoading(false);
        }
    };

    React.useEffect(() => {
        if (props.refUnit) getBusUnitValueSet.current();
    }, [props.refUnit]);



    return (
        <>
            <div className="border rounded-md shadow-md mt-4">
                <input type="file" id="fileInput" style={{ display: 'none' }} onChange={handleFileChange} />
                <DisplayTitle title="Unit Values" />
                <FormTopBar options={options} refreh={getBusUnitValueSet.current} />
                <TableComponent
                    head={["ValueSet", "CreatedBy", "CreatedDateTime", "ModifiedBy", "ModifiedDateTime"]}
                    body={
                        series.map((item) => {
                            return [
                                item.ValueSet,
                                item.CreatedBy,
                                new Date(item.CreatedDateTime || "").toDateString(),
                                item.ModifiedBy,
                                new Date(item.ModifiedDateTime || "").toDateString()
                            ]
                        })
                    }
                />
            </div>
            <NewValue
                open={newSeries}
                close={() => setNewSeries(false)}
                refUnit={props.refUnit}
                append={append}
            />
        </>
    )
}
