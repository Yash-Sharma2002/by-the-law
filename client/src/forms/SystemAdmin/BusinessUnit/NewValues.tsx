import React from "react";
import ModalComponent from "../../../components/ui/Modal";
import { AppContext } from "../../../context/Context";
import createBussUnitValueSet from "../../../functions/BussUnitValueSet/create";
import FormInput from "../../../components/input/FormInput";
import { BusUnitValueSetInterface } from "../../../interface/BusUnitValueSet";

type Props = {
    refUnit: any;
    open: boolean;
    close: any;
    append: (data: BusUnitValueSetInterface) => void;
}

export default function NewValue(props: Props) {
    const { user: CurrentUser, raiseToast, setLoading } = React.useContext(AppContext);
    const [open, setOpen] = React.useState(props.open);
    const [details, setDetails] = React.useState({
        UnitName: "",
        ValueSet: "",
    });

    function close() {
        setOpen(false);
        props.close();
    }

    async function save() {
        setLoading(true);
        try {
            const res = await createBussUnitValueSet(CurrentUser, { UnitName: details.UnitName, ValueSet: details.ValueSet });
            if (res.status === 200) {
                raiseToast("Value Added", "success");
                props.append(res.data);
                close();
            } else {
                raiseToast(res.message, "error");
            }
        } catch (e: any) {
            raiseToast(e.message, "error");
        } finally {
            setLoading(false);
        }
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setDetails({
            ...details, [e.target.name]: e.target.value
        });
    }

    React.useEffect(() => {
        if (props.open) {
            setDetails({
                UnitName: props.refUnit ? props.refUnit.Name : "",
                ValueSet: "",
            });
        }
        setOpen(props.open);
    }, [props.open, props.refUnit]);

    return (
        <>
            <ModalComponent onSave={save} title={""} isOpen={open} close={close}>

                {
                    !details.UnitName && (
                        <FormInput
                            label="Unit Name"
                            name="UnitName"
                            handleChange={handleChange}
                            focus="ValueSet"
                        />
                    )
                }

                <FormInput
                    label="Value Set"
                    name="ValueSet"
                    handleChange={handleChange}
                />

            </ModalComponent>
        </>
    );
}
