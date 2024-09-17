import React from "react";
import ModalComponent from "../../../components/ui/Modal";
import FormInput from "../../../components/input/FormInput";

type Props = {
  open?: boolean;
  close?: () => void;
  data: any;
};
export default function ViewRemarks(props: Props) {
  const [open, setOpen] = React.useState<boolean>(
    props.open !== undefined ? props.open : true
  );

  function close() {
    setOpen(false);
    if (props.close) props.close();
  }
  React.useEffect(() => {
    // if (props.open || open) {
    // }
    setOpen(props.open !== undefined ? props.open : true);
  }, [props.open, open,props.data]);
  return (
    <>
      <ModalComponent
        onSave={close}
        path="/mi/ViewRemarks"
        title={"View Remarks"}
        isOpen={open}
        close={close}
      >
        <FormInput
          label="Title"
          defaultValue={props.data.Title}
          isRequired={true}
          isDisabled={true}
          name="Title"
        />
        {props.data.Description && (
          <FormInput
            label="Description"
            defaultValue={props.data.Description}
            isRequired={true}
            isDisabled={true}
            name="Description"
          />
        )}
        <div className="my-3">
          {props.data.Image && <img src={props.data.Image} alt={"image "+props.data.Title} />}
          {props.data.Video && (
            <video controls>
              <source src={props.data.Video} type="video/mp4" />
            </video>
          )}
        </div>
      </ModalComponent>
    </>
  );
}
