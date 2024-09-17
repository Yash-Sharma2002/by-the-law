// #TODO
import React from "react";
import ModalComponent from "../../../components/ui/Modal";
import { AppContext } from "../../../context/Context";
import InputSelect from "../../../components/input/InputSelect";
import ProjStatus from "../../../config/enum/ProjStatus";
import { NotificationsInterface } from "../../../interface/Notifications";
import {
  NotificationType,
} from "../../../config/enum/Notification";
// import createNotification from "../../../functions/api/Notifications/create";

export default function StatusChange(props: {
  project: any;
  open: boolean;
  close: any;
}) {
  const {
    user: CurrentUser,
    raiseToast,
    setLoading,
  } = React.useContext(AppContext);
  const [open, setOpen] = React.useState(props.open);
  const [status, setStatus] = React.useState("");

  function close() {
    setOpen(false);
    props.close();
  }

  async function save() {
    setLoading(true);
    try {
      let notificationData: NotificationsInterface = {
        Title: "Status Change for Project",
        Description: `Status changed to ${ProjStatus[status as any]}`,
        Type: NotificationType.Approve,
        Show: 0,
        Status: status || props.project.Status,
        GeneratedBy: CurrentUser.Id,
        GeneratedFor: props.project.DesignManagerRecId,
      };
      let ref = {
        RecId: props.project.RecId,
        Table: "ProjTable",
      };
      // const res = await createNotification(CurrentUser, notificationData, ref);
      // if (res.status === 200) {
      //   raiseToast("Request sent successfully", "success");
      //   close();
      // } else {
      //   raiseToast(res.message, "error");
      // }
    } catch (e) {
      raiseToast("Failed to send Request", "error");
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    if (props.open || open) {
    }
    setOpen(props.open);
  }, [props.open, open]);

  return (
    <>
      <ModalComponent onSave={save} title={""} isOpen={open} close={close}>
        <InputSelect
          name="Status"
          label="Status"
          handleChange={(type: string, value: string) => {
            setStatus(value);
          }}
          selectArray={Object.keys(ProjStatus)
            .filter((key) => !isNaN(Number(key)))
            .map((key: any) => {
            return {
              name: ProjStatus[key],
              value: key,
              id: key,
            };
          })}
        />
      </ModalComponent>
    </>
  );
}
