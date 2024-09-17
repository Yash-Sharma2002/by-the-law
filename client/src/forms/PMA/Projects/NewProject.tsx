import React from "react";
import LeftPopOverLayout from "../../../components/ui/LeftPopOverLayout";
import { Stack } from "@chakra-ui/react";
import ErrorInterface from "../../../interface/Error";
import validateName from "../../../functions/validateName";
import FormInput from "../../../components/input/FormInput";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../context/Context";
import InputSelect from "../../../components/input/InputSelect";
import createProject from "../../../functions/projects/create";
import Roles from "../../../config/enum/Roles";
import getAll from "../../../functions/custTable/getAll";
import ProjTableInterface, { EmptyProjTable } from "../../../interface/ProjTable";
import SelectArray from "../../../interface/SelectArray";
import { getByRole } from "../../../functions/SecurityUserRole/getByRole";

export default function NewProject(props: {
  open?: boolean;
  close?: () => void;
  setSeries?: React.Dispatch<React.SetStateAction<ProjTableInterface[]>>;
}) {
  const [open, setOpen] = React.useState<boolean>(
    props.open !== undefined ? props.open : true
  );
  const {
    setLoading,
    user: CurrentUser,
    raiseToast,
  } = React.useContext(AppContext);
  const navigate = useNavigate();

  const [RelationshipManager, setRelationshipManager] = React.useState<
    SelectArray[]
  >([]);
  const [DesignManager, setDesignManager] = React.useState<SelectArray[]>([]);

  const [clients, setClients] = React.useState<SelectArray[]>([]);

  const getClients = React.useRef(() => {});
  const getRM = React.useRef(() => {});
  const getDM = React.useRef(() => {});

  getDM.current = async () => {
    setLoading(true);
    const res = await getByRole(CurrentUser, Roles.Lawyer);
    if (res.status !== 200) {
      raiseToast(res.message, "error");
    } else {
      let data = res.data.map((item: any, index: number) => {
        return {
          id: index.toString(),
          value: item.UserRecId,
          // name: item.UserId,
          name: item.UserName,
        };
      });
      setDesignManager(data);
    }
    setLoading(false);
  };

  getRM.current = async () => {
    setLoading(true);
    const res = await getByRole(CurrentUser, Roles.Lawyer);
    if (res.status !== 200) {
      raiseToast(res.message, "error");
    } else {
      let data = res.data.map((item: any, index: number) => {
        return {
          id: index.toString(),
          value: item.UserRecId,
          // name: item.UserId,
          name: item.UserName,
        };
      });
      setRelationshipManager(data);
    }
    setLoading(false);
  };

  getClients.current = async () => {
    setLoading(true);
    const res = await getAll(CurrentUser);
    if (res.status === 200) {
      let data: SelectArray[] = res.data.map((item: any, index: number) => {
        return {
          id: index.toString(),
          value: item.RecId,
          name: item.Name,
        };
      });
      setClients(data);
    } else {
      raiseToast(res.error, "error");
    }
    setLoading(false);
  };

  function close() {
    setOpen(false);
    if (props.close) props.close();
    else navigate("/mi/AllProjects");
  }

  const [project, setProject] =
    React.useState<ProjTableInterface>(EmptyProjTable);

  const handleProjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
    if (error.error) setError({ input: "", message: "", error: false });
  };

  const [error, setError] = React.useState<ErrorInterface>({
    input: "",
    message: "",
    error: false,
  });

  function validate() {
    let error = validateName(project.Name, "Project Name");
    if (error) {
      setError({ input: "Name", message: error, error: true });
      return false;
    }

    if (project.StartDate > project.EndDate) {
      setError({
        input: "StartDate",
        message: "Start Date should be less than End Date",
        error: true,
      });
      return false;
    }

    if (project.Budget <= 0) {
      setError({
        input: "Budget",
        message: "Budget should be greater than 0",
        error: true,
      });
      return false;
    }
    return true;
  }


  async function save() {
    if (validate()) {
      setLoading(true);
      let res = await createProject(project, CurrentUser);

      if (res.status === 200) {
        raiseToast(res.message, "success");
        if (props.setSeries) props.setSeries((prev) => [...prev, res.data]);
        close();
      } else {
        raiseToast(res.message, "error");
      }
      setLoading(false);
    }
  }

  React.useEffect(() => {
    if (props.open || open) {
      getRM.current();
      getClients.current();
      getDM.current();
    }
    setOpen(props.open !== undefined ? props.open : true);
  }, [props.open,open]);

  return (
    <>
      <LeftPopOverLayout
        onSave={save}
        path="/New"
        title="Create New Project"
        isOpen={open}
        close={close}
      >
        <Stack direction="column">
          <FormInput
            label="Project Name"
            handleChange={handleProjectChange}
            name="Name"
            isRequired={true}
            isInvalid={error.input === "Name"}
            error={error.message}
          />

          <FormInput
            label="Project Description"
            handleChange={handleProjectChange}
            name="Description"
            isRequired={true}
            isInvalid={error.input === "Description"}
            error={error.message}
          />

          <InputSelect
            label="Customer"
            handleChange={(name, value) => {
              setProject({ ...project, [name]: value });
            }}
            name="CustAccount"
            isRequired={true}
            isInvalid={error.input === "CustAccount"}
            error={error.message}
            selectArray={clients}
          />

          <Stack direction={['column', 'row']}>
            <FormInput
              label="Start Date"
              handleChange={(e) => {
                setProject({
                  ...project,
                  StartDate: new Date(e.target.value)
                    .toISOString()
                    .slice(0, 19)
                    .replace("T", " "),
                });
              }}
              name="StartDate"
              type="date"
              isRequired={true}
              isInvalid={error.input === "StartDate"}
              error={error.message}
            />

            <FormInput
              label="End Date"
              handleChange={(e) => {
                setProject({
                  ...project,
                  EndDate: new Date(e.target.value)
                    .toISOString()
                    .slice(0, 19)
                    .replace("T", " "),
                });
              }}
              name="EndDate"
              type="date"
              isRequired={true}
              isInvalid={error.input === "EndDate"}
              error={error.message}
            />
          </Stack>
          <InputSelect
            label="Relationship Manager"
            handleChange={(name, value) => {
              setProject({ ...project, [name]: value });
            }}
            name="ProjManager"
            isRequired={true}
            isInvalid={error.input === "ProjManager"}
            error={error.message}
            selectArray={RelationshipManager}
          />
          
          <FormInput
            label="Budget"
            handleChange={handleProjectChange}
            name="Budget"
            type="number"
            isRequired={true}
            isInvalid={error.input === "Budget"}
            error={error.message}
          />
          <InputSelect
            label="Design Manager"
            handleChange={(name:string, value:string) => {
              setProject({ ...project, [name]: value });
            }}
            name="DesignManager"
            isRequired={true}
            isInvalid={error.input === "DesignManager"}
            error={error.message}
            selectArray={DesignManager}
          />
        </Stack>
      </LeftPopOverLayout>
    </>
  );
}
