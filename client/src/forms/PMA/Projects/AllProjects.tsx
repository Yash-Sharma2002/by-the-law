import React from "react";
import FormTopBarInterface from "../../../interface/FormTopBar";
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";
import DisplayType from "../../../config/enum/DisplayType";
import { IoIosAdd } from "react-icons/io";
import TableComponent from "../../../components/common/table/TableComponent";
import NewProject from "./NewProject";
import { AppContext } from "../../../context/Context";
import AssignDesignManager from "../Resources/AssignResource";
import Roles from "../../../config/enum/Roles";
import ProjStatus from "../../../config/enum/ProjStatus";
import { ExcelContext } from "../../../context/ExcelContext";
import { useNavigate } from "react-router-dom";
import ModuleUrls from "../../../config/enum/Module";
import StatusChange from "./StatusChange";
import getAllProjects from "../../../functions/projects/get";
import deleteProject from "../../../functions/projects/delete";
import Layout from "../../../components/ui/Layout";

export default function AllProjects() {
  const navigate = useNavigate();
  const {
    setLoading,
    raiseToast,
    user: CurrentUser,
  } = React.useContext(AppContext);
  const { selected } = React.useContext(ExcelContext);
  const [series, setSeries] = React.useState<any[]>([
    {
      ProjId: "",
      RecId: "",
    },
  ]);
  const [edit, setEdit] = React.useState(false);
  const [designManager, setDesignManager] = React.useState({
    open: false,
    role: Roles.Lawyer,
  });
  const [newSeries, setNewSeries] = React.useState(false);
  const [statusChange, setStatusChange] = React.useState(false);
  const getProjects = React.useRef(() => {});

  getProjects.current = async () => {
    setLoading(true);
    const res = await getAllProjects(CurrentUser);
    if (res.status) {
      setSeries(res.data);
    } else {
      raiseToast(res.error, "error");
    }
    setLoading(false);
  };

  function toggleStatusChange() {
    setStatusChange(!statusChange);
  }

  const options: FormTopBarInterface[] = [
    {
      name: "Edit",
      Icon: MdOutlineEdit,
      type: DisplayType.Function,
      Object() {
        setEdit(!edit);
      },
      roles: [
        Roles.Admin,
        // Roles.RelationshipManager,
        // Roles.DesignManager,
      ],
    },
    {
      name: "New",
      Icon: IoIosAdd,
      type: DisplayType.Function,
      Object() {
        setNewSeries(!newSeries);
      },
      roles: [Roles.Admin],
    },
    {
      name: "Delete",
      Icon: MdDeleteOutline,
      type: DisplayType.Function,
      Object() {
        Delete();
      },
      roles: [
        Roles.Admin,
        //  Roles.RelationshipManager
      ],
    },
    {
      name: "Assign Resource",
      roles: [
        Roles.Admin,
        Roles.Lawyer,
      ],
      type: DisplayType.subMenu,
      subMenu: [
        {
          name: "Designers",
          roles: [        Roles.Admin,
            Roles.Lawyer,
    ],
          type: DisplayType.Function,
          Object() {
            if (checkSelected()) return;
            setDesignManager({
              open: true,
              role: Roles.Lawyer,
            });
          },
        }
      ],
    },
    {
      name: "Assigned Resources",
      roles: [
        Roles.Admin,
        Roles.Lawyer,
      ],
      type: DisplayType.Function,
      Object() {
        if (selected.length === 0) {
          raiseToast("Please select a project", "error");
          return;
        }
        navigate(`/mi/assigned-resources/${series[selected[0]].ProjId}`);
      },
    },
    {
      name: "Status Change",
      roles: [
        Roles.Admin,
        Roles.Lawyer,
      ],
      type: DisplayType.Function,
      Object() {
        toggleStatusChange();
      },
    }
  ];

  function checkSelected() {
    if (selected.length === 0) {
      raiseToast("Please select a project", "error");
      return true;
    }
    return false;
  }

  async function Delete() {
    if (selected.length === 0)
      return raiseToast("Please select a project to delete", "error");
    setLoading(true);
    try {
      for (let i = 0; i < selected.length; i++) {
        let projTable = series[selected[i]];
        let res = await deleteProject(projTable.RecId, CurrentUser);

        if (res.status === 200) {
          raiseToast(projTable.ProjId + " deleted successfully", "success");
        } else {
          raiseToast(res.error, "error");
        }
      }
    } catch (e: any) {
      raiseToast(e.message, "error");
    }
    setLoading(false);
    getProjects.current();
  }

  React.useEffect(() => {
    getProjects.current();
  }, []);

  return (
    <>
      <>
        <Layout
          options={options}
          name="All Projects"
          refreh={getProjects.current}
        >
        
          <TableComponent
            head={[
              "Project ID",
              "Name",
              "Description",
              "Customer Account",
              "Customer",
              "Start Date",
              "End Date",
              "Status",
              "Relationship Manager",
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
                    data.ProjId,
                    data.Name,
                    data.Description,
                    data.AccountNum,
                    data.CustAccount,
                    data.CustName,
                    new Date(data.StartDate).toDateString(),
                    new Date(data.EndDate).toDateString(),
                    ProjStatus[data.Status],
                    data.ProjManager,
                    data.ProjManagerRecId,
                    data.CreatedBy,
                    new Date(data.CreatedDateTime).toDateString(),
                    data.ModifiedBy,
                    new Date(data.ModifiedDateTime).toDateString(),
                  ];
                })) ||
              []
            }
            hidden={[0, 5, 11]}
            link={[
              { form: ModuleUrls.Projects, index: 1, key: 0 },
              { form: ModuleUrls.Customers, index: 4, key: 5 },
              { form: ModuleUrls.Users, index: 10, key: 11 }, // project manager
            ]}
          />
        </Layout>
        <NewProject
          open={newSeries}
          close={() => setNewSeries(false)}
          setSeries={setSeries}
        />
        <AssignDesignManager
          open={designManager.open}
          close={() =>
            setDesignManager({ open: false, role: Roles.Lawyer })
          }
          projects={selected.length > 0 ? series[selected[0]] : series[0]}
          role={designManager.role}
        />
         <StatusChange
          open={statusChange}
          close={toggleStatusChange}
          project={selected.length > 0 ? series[selected[0]] : series[0]}
        />
      </>
    </>
  );
}
