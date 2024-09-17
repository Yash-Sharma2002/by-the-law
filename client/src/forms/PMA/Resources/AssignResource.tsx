import React from "react";
import { AppContext } from "../../../context/Context";
import Roles from "../../../config/enum/Roles";
import ModalComponent from "../../../components/ui/Modal";
import InputSelect from "../../../components/input/InputSelect";
import assignLawyers from "../../../functions/projects/resource/assignDesigners";
import SelectArray from "../../../interface/SelectArray";
import { getByRole } from "../../../functions/SecurityUserRole/getByRole";

export default function AssignDesignManager(props: {
  open?: boolean;
  close?: () => void;
  projects: any;
  role: Roles;
  onSave?: () => void;
}) {
  const [open, setOpen] = React.useState<boolean>(
    props.open !== undefined ? props.open : true
  );

  const {
    setLoading,
    user: CurrentUser,
    raiseToast,
  } = React.useContext(AppContext);
  const [designManager, setDesignManager] = React.useState<string>("");
  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case "updateProject":
        return { ...state, ...action.payload };
      default:
        return state;
    }
  };

  const [proj, dispatch] = React.useReducer(reducer, props.projects);

  const [designer, setDesigner] = React.useState<SelectArray[]>([]);


  const getDesignManager = React.useRef(() => { });

  getDesignManager.current = async () => {
    setLoading(true);
    const res = await getByRole(CurrentUser, props.role);
    if (res.status !== 200) {
      raiseToast(res.message, "error");
    } else {
      let data = res.data.map((item: any, index: number) => {
        return {
          id: index.toString(),
          value: item.UserRecId,
          name: item.UserName,
          // name: item.UserId,
        };
      });
      if (props.role === Roles.Lawyer) {
        setDesigner(data);
      }
    }
    setLoading(false);
  };

  function close() {
    setOpen(false);
    if (props.close) props.close();
  }

  async function save() {
    if (designManager === "") {
      raiseToast("Please select a Design Manager", "error");
      return;
    }

    setLoading(true);
    let res;
    if (props.role === Roles.Lawyer) {
      res = await assignLawyers(proj.RecId, designManager, CurrentUser);
    }
    if (res.status !== 200) {
      raiseToast(res.message, "error");
    } else {
      raiseToast(res.message, "success");
      close();
      if (props.onSave) props.onSave();
    }
    setLoading(false);
  }


  const start = React.useCallback(() => {
    if (props.open) {
      getDesignManager.current();
    }
    setOpen(props.open !== undefined ? props.open : true);
  }, [props.open]);

  React.useEffect(start, [start]);

  const data = React.useCallback(() => {
    dispatch({ type: "updateProject", payload: props.projects });
  }, [props.projects]);

  React.useEffect(data, [data]);


  return (
    <>
      <ModalComponent
        onSave={save}
        path="/mi/AllProjects"
        title={
          "Assign " + props.role + " to Project " + proj.ProjId}
        isOpen={open}
        close={close}
      >
        {props.role === Roles.Lawyer ? (
          <InputSelect
            label={props.role}
            selectArray={designer}
            name="designer"
            handleChange={(name: string, value: string) =>
              setDesignManager(value)
            }
          />
        ) : null}
      </ModalComponent>
    </>
  );
}
