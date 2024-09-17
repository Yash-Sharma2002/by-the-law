import React from "react";
import FormTopBarInterface from "../../../interface/FormTopBar";
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";
import DisplayType from "../../../config/enum/DisplayType";
import { IoIosAdd } from "react-icons/io";
import NewNumberSeries from "./NewNumberSeries";
import TableComponent from "../../../components/common/table/TableComponent";
import getNumberSeries from "../../../functions/number-series/get";
import { AppContext } from "../../../context/Context";
import Roles from "../../../config/enum/Roles";
import { ExcelContext } from "../../../context/ExcelContext";
import deleteSeries from "../../../functions/number-series/delete";
import ModuleUrls from "../../../config/enum/Module";
import EditNumberSeries from "./EditNumberSeries";
import { EmptySequence, SequenceInterface } from "../../../interface/Sequence";
import Layout from "../../../components/ui/Layout";

export default function NumberSeries() {
  const {
    user: CurrentUser,
    raiseToast,
    setLoading,
  } = React.useContext(AppContext);
  const { selected } = React.useContext(ExcelContext);
  const [series, setSeries] = React.useState<SequenceInterface[]>([]);
  const [edit, setEdit] = React.useState(false);
  const [newSeries, setNewSeries] = React.useState(false);
  const [search, setSearch] = React.useState("");

  const options: FormTopBarInterface[] = [
    {
      name: "Edit",
      Icon: MdOutlineEdit,
      roles: [Roles.Admin],
      type: DisplayType.Function,
      Object() {
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
        Delete();
      },
    },
  ];

  const getAllNumberSeries = React.useRef(() => {});

  getAllNumberSeries.current = async () => {
    setLoading(true);
    const res = await getNumberSeries(CurrentUser);

    if (res.status !== 200) {
      raiseToast("Error", "error", res.message);
      setLoading(false);
      return;
    }

    setSeries(res.data);
    setLoading(false);
  };

  async function Delete() {
    if (selected.length === 0)
      return raiseToast("Please select a Series to delete", "error");
    setLoading(true);
    try {
      for (let i = 0; i < selected.length; i++) {
        let projTable = series[selected[i]];
        let res = await deleteSeries(projTable.RecId, CurrentUser);

        if (res.status === 200) {
          raiseToast("Sequence deleted successfully", "success");
        } else {
          raiseToast(res.error, "error");
        }
      }
    } catch (e: any) {
      raiseToast(e.message, "error");
    }
    setLoading(false);
    getAllNumberSeries.current();
  }

  React.useEffect(() => {
    getAllNumberSeries.current();
  }, []);

  return (
    <>
      <>
        <Layout
          options={options}
          name="Number Series"
          refreh={getAllNumberSeries.current}
        >
          <TableComponent
            head={[
              "Name",
              "Description",
              "Sequence For",
              "Prefix",
              "Suffix",
              "Current",
              "Increment",
              "Max Digits",
              "Created By",
              "Created Date",
              "Modified By",
              "Modified Date",
            ]}
            body={
              (series.length > 0 &&
                series.map((data) => {
                  return [
                    data.RecId,
                    data.Name,
                    data.Description,
                    data.SeqFor,
                    data.Prefix,
                    data.Suffix,
                    data.Curr,
                    data.Increment,
                    data.MaxDigits,
                    data.CreatedBy,
                    new Date(data.CreatedDateTime || "").toDateString(),
                    data.ModifiedBy,
                    new Date(data.ModifiedDateTime || "").toDateString(),
                  ];
                })) ||
              []
            }
            hidden={[0]}
            link={[{ form: ModuleUrls.NumberSequences, index: 1, key: 0 }]}
          />
        </Layout>
        <NewNumberSeries
          open={newSeries}
          close={() => setNewSeries(false)}
          setSeries={setSeries}
        />
        <EditNumberSeries
          edit={edit}
          close={() => setEdit(false)}
          setSeries={setSeries}
          data={series[selected[0]] || EmptySequence}
        />
      </>
    </>
  );
}
