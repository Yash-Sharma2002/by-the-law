import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoIosAdd } from "react-icons/io";
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";
import { Stack } from "@chakra-ui/react";
import { AppContext } from "../../../context/Context";
import FormTopBarInterface from "../../../interface/FormTopBar";
import Roles from "../../../config/enum/Roles";
import DisplayType from "../../../config/enum/DisplayType";
import deleteProject from "../../../functions/projects/delete";
import FormTopBar from "../../../components/ui/FormTopBar";
import FormInput from "../../../components/input/FormInput";
import ModuleUrls from "../../../config/enum/Module";
import ProjStatus from "../../../config/enum/ProjStatus";
import NewProject from "./NewProject";
import getOneProject from "../../../functions/projects/getOne";
import DisplayTitle from "../../../components/common/Utils/DisplayTitle";
import AllRemarks from "../Remarks/AllRemarks";
import getAllRemarks from "../../../functions/Remarks/getRemarks";
import BusUnitDim from "../../SystemAdmin/BusinessUnit/BusUnitDim/BusUnitDim";
import getUnitDim from "../../../functions/BusUnitDim/getUnitDim";
import updateProject from "../../../functions/projects/update";
import { CiSaveDown2 } from "react-icons/ci";
import InputSelect from "../../../components/input/InputSelect";
import {SelectArray} from "../../../interface/SelectArray";
import { getByRole } from "../../../functions/SecurityUserRole/getByRole";

export default function ProjectDetails() {
  const {
    setLoading,
    raiseToast,
    user: CurrentUser,
  } = React.useContext(AppContext);
  const navigate = useNavigate();
  const { data } = useParams();
  const [newSeries, setNewSeries] = React.useState(false);
  const [toggleEdit, setToggleEdit] = React.useState(false);
  const [project, setProject] = React.useState<any>({});
  const [remarks, setRemarks] = React.useState<any>([]);
  const [dims, setDims] = React.useState<any>([]);
  const getAllResources = React.useRef(() => { });
  const getRemarks = React.useRef(() => { });

  const [RelationshipManager, setRelationshipManager] = React.useState<SelectArray[]>([]);
  const getRM = React.useRef(() => { });

  const [DesignManager, setDesignManager] = React.useState<SelectArray[]>([]);
  const getDM = React.useRef(() => { });

  const [formData, setFormData] = React.useState({
    Name: "",
    Description: "",
    ProjManager: "",
    DesignManager: "",
    Type: 0,
    ProjCategory: 0,
    ExtendedDate: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value.trim() === "" ? null : value,
    }));
  };

  const handleSelect = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  getAllResources.current = async () => {
    setLoading(true);
    const res = await getOneProject(CurrentUser, data || "");
    if (res.status) {

      setProject(res.data);
      setFormData({ ...res.data, DesignManager: res.data.DesignManagerRecId, ProjManager: res.data.ProjManagerRecId, ProjCategory: res.data.Category });
      const res2 = await getAllRemarks(
        CurrentUser,
        res.data.RecId,
        "ProjTable"
      );
      if (res2.status) {
        setRemarks(res2.data);
      } else {
        raiseToast(res2.error, "error");
      }
    } else {
      raiseToast(res.error, "error");
    }

    const res3 = await getUnitDim(CurrentUser, data || "", "ProjTable");
    if (res3.status) {
      setDims(res3.data);
    } else {
      raiseToast(res3.error, "error");
    }

    setLoading(false);
  };

  getRemarks.current = async () => {
    setLoading(true);
    const res2 = await getAllRemarks(
      CurrentUser,
      project.RecId,
      "ProjTable"
    );
    if (res2.status) {
      setRemarks(res2.data);
    } else {
      raiseToast(res2.error, "error");
    }
    setLoading(false);
  };

  getRM.current = async () => {
    const res = await getByRole(CurrentUser, Roles.Lawyer);
    if (res.status !== 200) {
      raiseToast(res.message, "error");
    } else {

      let data = res.data.map((item: any, index: number) => {

        return {
          id: index.toString(),
          value: item.UserRecId,
          name: item.UserName,
        };
      });
      setRelationshipManager(data);
    }
  };

  

  const options: FormTopBarInterface[] = [
    {
      name: toggleEdit ? "Save" : "Edit",
      Icon: toggleEdit ? CiSaveDown2 : MdOutlineEdit,
      roles: [Roles.Admin, Roles.Lawyer],
      type: DisplayType.Function,
      Object() {
        if (toggleEdit) {
          Save();
        } else {
          setToggleEdit(true);
        }
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

  async function Save() {
    setLoading(true);

    const client = {
      Name: formData.Name,
      Description: formData.Description,
      ProjManager: formData.ProjManager,
      DesignManager: formData.DesignManager,
      Category: formData.ProjCategory,
      ExtendedDate: formData.ExtendedDate,
      ProjId: project.ProjId,
      RecId: project.RecId,
      CustAccount: project.CustAccount,
      StartDate: project.StartDate,
    }

    const res = await updateProject(client, CurrentUser);
    if (res.status === 200) {
      raiseToast(res.message, "success");
    } else {
      raiseToast("Error", "error", res.message);
    }
    setLoading(false);
    setToggleEdit(false);
  };

  async function Delete() {
    setLoading(true);
    try {
      let res = await deleteProject(project.RecId, CurrentUser);

      if (res.status === 200) {
        raiseToast(project.AccountNum + " deleted successfully", "success");
        navigate(-1);
      } else {
        raiseToast(res.error, "error");
      }
    } catch (e: any) {
      raiseToast(e.message, "error");
    }
    setLoading(false);
    getAllResources.current();
  }

  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        await Promise.all([getAllResources.current(), getRM.current(), getDM.current()]);
      } catch (error) {
        raiseToast("An error occurred while fetching data", "error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <FormTopBar options={options} refreh={getAllResources.current} />
      {project && (
        <>
          <div className="mx-2">
            <div className="mt-3">
              <h1 className="font-bold text-2xl">
                {project.ProjId} : {project.Name}{" "}
              </h1>
            </div>
            <div className="border rounded-md shadow-md mt-4">
              <DisplayTitle title="Project Details" />
              <Stack direction={['column', 'row']} spacing={4} className="border-t p-4">
                <FormInput
                  label="Project Id"
                  name="ProjId"
                  defaultValue={project.ProjId}
                  isDisabled={true}
                />


                <FormInput
                  label="Name"
                  name="Name"
                  defaultValue={project.Name}
                  handleChange={handleChange}
                  isDisabled={!toggleEdit}
                />

                <FormInput
                  label="Description"
                  name="Description"
                  defaultValue={project.Description}
                  handleChange={handleChange}
                  isDisabled={!toggleEdit}
                />

                <FormInput
                  label="Status"
                  name="Status"
                  defaultValue={ProjStatus[project.Status]}
                  isDisabled={true}
                />

              </Stack>
              <Stack direction={['column', 'row']} spacing={4} className="pb-4 px-4">
                <FormInput
                  label="Customer Account"
                  name="CustAccount"
                  defaultValue={project.AccountNum}
                  isDisabled={true}
                  onClick={() => {
                    navigate(
                      `/mi/${ModuleUrls.Customers}/${project.CustAccount}`
                    );
                  }}
                />

                <FormInput
                  label="Customer Name"
                  name="CustName"
                  defaultValue={project.CustName}
                  isDisabled={true}
                />

                {
                  toggleEdit ?

                    <InputSelect
                      label="Relationship Manager"
                      name="ProjManager"
                      defaultValue={formData.ProjManager}
                      placeholder={project.ProjManager}
                      selectArray={RelationshipManager}
                      handleChange={handleSelect}
                      isDisabled={!toggleEdit}
                    />
                    :
                    <FormInput
                      label="Relationship Manager"
                      name="ProjManager"
                      defaultValue={project.ProjManager}
                      isDisabled={true}
                      onClick={() => {
                        navigate(
                          `/mi/${ModuleUrls.Users}/${project.ProjManagerRecId}`
                        );
                      }}
                    />
                }

                {
                  toggleEdit ?

                    <InputSelect
                      label="Design Manager"
                      name="DesignManager"
                      defaultValue={formData.DesignManager}
                      placeholder={project.DesignManager}
                      selectArray={DesignManager}
                      handleChange={handleSelect}
                      isDisabled={!toggleEdit}
                    />
                    :

                    <FormInput
                      label="Design Manager"
                      name="DesignManager"
                      defaultValue={project.DesignManager}
                      isDisabled={true}
                      onClick={() => {
                        navigate(
                          `/mi/${ModuleUrls.Users}/${project.DesignManagerRecId}`
                        );
                      }}
                    />
                }

              </Stack>
              <Stack direction={['column', 'row']} spacing={4} className="pb-4 px-4">

                <FormInput
                  label="Start Date"
                  name="StartDate"
                  defaultValue={new Date(project.StartDate).toDateString()}
                  isDisabled={true}
                />
                <FormInput
                  label="End Date"
                  name="EndDate"
                  defaultValue={new Date(project.EndDate).toDateString()}
                  isDisabled={true}
                />

                <FormInput
                  label="Extended Date"
                  name="ExtendedDate"
                  type={toggleEdit ? "date" : "text"}
                  placeholder={toggleEdit ? "" : new Date(formData.ExtendedDate).toLocaleDateString('en-US')}
                  defaultValue={toggleEdit ? new Date(formData.ExtendedDate).toISOString().split('T')[0] : new Date(formData.ExtendedDate).toDateString()}
                  handleChange={(e) => {
                    setFormData({
                      ...formData,
                      ExtendedDate: toggleEdit ? new Date(e.target.value).toISOString().slice(0, 19).replace("T", " ") : e.target.value
                    });
                  }}
                  isDisabled={!toggleEdit}
                />

              </Stack>
              <Stack direction={['column', 'row']} spacing={4} className="pb-4 px-4">
                <FormInput
                  label="Modified By"
                  name="ModifiedBy"
                  defaultValue={project.ModifiedBy}
                  isDisabled={true}
                />
                <FormInput
                  label="Created By"
                  name="CreatedBy"
                  defaultValue={project.CreatedBy}
                  isDisabled={true}
                />
                <FormInput
                  label="Created Date"
                  name="CreatedDateTime"
                  defaultValue={new Date(
                    project.CreatedDateTime
                  ).toDateString()}
                  isDisabled={true}
                />
                <FormInput
                  label="Modified Date"
                  name="ModifiedDateTime"
                  defaultValue={new Date(
                    project.ModifiedDateTime
                  ).toDateString()}
                  isDisabled={true}
                />
              </Stack>
            </div>
            <AllRemarks
              data={remarks}
              refData={project}
              setData={setRemarks}
              refTable="ProjTable"
              refresh={getRemarks.current}
            />
          </div>
        </>
      )}
      <BusUnitDim
        data={dims}
        refData={project}
        refTable="ProjTable"
        setData={setDims}
        refresh={getAllResources.current}
        topBar={true}
      />
      <NewProject
        open={newSeries}
        close={() => setNewSeries(false)}
        setSeries={(data: any) => { }}
      />
    </>
  );
}
