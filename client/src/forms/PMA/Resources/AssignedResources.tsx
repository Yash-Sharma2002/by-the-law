import React from "react";
import { AppContext } from "../../../context/Context";
import { useParams } from "react-router-dom";
import getResources from "../../../functions/projects/resource/getResources";
import TableComponent from "../../../components/common/table/TableComponent";
import FormTopBarInterface from "../../../interface/FormTopBar";
import Roles from "../../../config/enum/Roles";
import DisplayType from "../../../config/enum/DisplayType";
import { IoIosAdd } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import FormTopBar from "../../../components/ui/FormTopBar";
import AssignDesignManager from "./AssignResource";
import { EmptyProjTable } from "../../../interface/ProjTable";
import { ExcelContext } from "../../../context/ExcelContext";
import removeResource from "../../../functions/projects/resource/removeResource";

export default function AssignedResources() {
  const {
    setLoading,
    raiseToast,
    user: CurrentUser,
  } = React.useContext(AppContext);
  const { selected } = React.useContext(ExcelContext);
  const { data } = useParams();
  const [project, setProject] = React.useState<any>([]);
  const [designManager, setDesignManager] = React.useState({
    open: false,
    role: Roles.Lawyer,
  });
  const getAllResources = React.useRef(() => {});

  getAllResources.current = async () => {
    setLoading(true);
    const res = await getResources(data || "", CurrentUser);
    if (res.status) {
      setProject(res.data);
    } else {
      raiseToast(res.error, "error");
    }
    setLoading(false);
  };

  const options: FormTopBarInterface[] = [
    {
      name: "New",
      Icon: IoIosAdd,
      roles: [Roles.Admin, Roles.Lawyer],
      type: DisplayType.Function,
      Object() {
        setDesignManager({
          open: true,
          role: Roles.Lawyer,
        });
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
      return raiseToast("Please select a Reosource to remove", "error");
    setLoading(true);
    try {
      for (let i = 0; i < selected.length; i++) {
        let projTable = project[selected[i]];
        let res = await removeResource(projTable.RecId, CurrentUser);

        if (res.status === 200) {
          raiseToast(projTable.ResourceName + " deleted successfully", "success");
        } else {
          raiseToast(res.error, "error");
        }
      }
    } catch (e: any) {
      raiseToast(e.message, "error");
    }
    setLoading(false);
    getAllResources.current();
  }

  React.useEffect(() => {
    getAllResources.current();
  }, []);

  return (
    <>
      <FormTopBar options={options} refreh={getAllResources.current} />
      <h1 className="text-xl text-black ml-3">Assigned Resources</h1>
      {project.length > 0 ? (
        <>
          <h2 className="text-xl text-black ml-3">
            {project[0].ProjId} : {project[0].Name}{" "}
          </h2>
          <br />
          <TableComponent
            head={[
              "Resource Id",
              "Resource Name",
              "Created By",
              "Created Date",
              "Modified By",
              "Modified Date",
            ]}
            body={
              project[0].Id
                ? project.map((item: any) => [
                    item.ResourceRecId,
                    item.Id,
                    item.ResourceName,
                    item.CreatedBy,
                    new Date(item.CreatedDateTime).toDateString(),
                    item.ModifiedBy,
                    new Date(item.ModifiedDateTime).toDateString(),
                  ])
                : []
            }
            hidden={[0]}
            link={[{ form: "users", index: 1, key: 0 }]}
          />
        </>
      ) : (
        <div className="flex justify-center items-center h-64">
          <h1 className="text-2xl text-gray-400">No resources assigned yet</h1>
        </div>
      )}
      <AssignDesignManager
        open={designManager.open}
        close={() => setDesignManager({ open: false, role: Roles.Lawyer })}
        projects={
          project.length > 0
            ? {
                RecId: project[0].Project,
                ProjId: project[0].ProjId,
                Name: project[0].Name,
              }
            : EmptyProjTable
        }
        onSave={getAllResources.current}
        role={designManager.role}
      />
    </>
  );
}
