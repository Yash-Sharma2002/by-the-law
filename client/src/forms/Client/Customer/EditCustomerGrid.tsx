import React from "react";
import { Stack } from "@chakra-ui/react";
import ErrorInterface from "../../../interface/Error";
import validateName from "../../../functions/validateName";
import { AppContext } from "../../../context/Context";
import validateEmail from "../../../functions/validateEmail";
import Roles from "../../../config/enum/Roles";
import EditProps from "../../../interface/EditProps";
import {SelectArray} from "../../../interface/SelectArray";
import { getByRole } from "../../../functions/SecurityUserRole/getByRole";
import getAllCustGroup from "../../../functions/CustGroup/getAll";
import updateClient from "../../../functions/custTable/update";
import LeftPopOverLayout from "../../../components/ui/LeftPopOverLayout";
import FormInput from "../../../components/input/FormInput";
import InputSelect from "../../../components/input/InputSelect";
import PhoneInput from "../../../components/input/PhoneInput";

export default function EditCustomerGrid(props: EditProps) {

    const [open, setOpen] = React.useState<boolean>(
        props.edit !== undefined ? props.edit : true
    );
    const { user: CurrentUser, raiseToast, setLoading } = React.useContext(AppContext);
    const [RelationshipManager, setRelationshipManager] = React.useState<SelectArray[]>([]);
    const [CustGroup, setCustGroup] = React.useState<SelectArray[]>([]);

    const getRM = React.useRef(() => { });
    const getCustGroup = React.useRef(() => { });

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
                    name: item.UserName,
                    // name: item.UserId,
                };
            });
            setRelationshipManager(data);
        }
        setLoading(false);
    };

    getCustGroup.current = async () => {
        setLoading(true);
        const res = await getAllCustGroup(CurrentUser);
        if (res.status !== 200) {
            raiseToast(res.message, "error");
        } else {
            let data = res.data.map((item: any, index: number) => {
                return {
                    id: index.toString(),
                    value: item.RecId,
                    name: item.Name,
                };
            });
            setCustGroup(data);
        }
        setLoading(false);
    };

    function close() {
        setOpen(false);
        if (props.close) props.close();
    }

    const reducer = (state: any, action: any) => {
        switch (action.type) {
            case "updateUser":
                return { ...state, ...action.payload };
            default:
                return state;
        }
    };

    const [user, dispatch] = React.useReducer(reducer, {
        ...props.data,
        Manager: props.data.ManagerRecId || 0,
    });

    const [error, setError] = React.useState<ErrorInterface>({
        input: "",
        message: "",
        error: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: "updateUser",
            payload: {
                ...user,
                [e.target.name]: e.target.value,
            },
        });
        if (error.error) setError({ input: "", message: "", error: false });
    };

    const handleSelect = (name: string, value: string) => {
        dispatch({
            type: "updateUser",
            payload: {
                ...user,
                [name]: value,
            },
        });
        if (error.error) setError({ input: "", message: "", error: false });
    }

    function validate() {
        let error = validateName(user.Name, "Name");
        if (error) {
            setError({ input: "Name", message: error, error: true });
            return false;
        }

        error = validateEmail(user.Email);
        if (error) {
            setError({ input: "Email", message: error, error: true });
            return false;
        }
        return true;
    }

    async function save() {
        if (validate()) {
            setLoading(true);
            const res = await updateClient(user, CurrentUser);
            if (res.status === 200) {
                raiseToast(res.message, "success");

                if (props.setSeries) {
                    props.setSeries((prev: any) => {
                        let index = prev.findIndex(
                            (item: any) => item.RecId === user.RecId
                        );
                        prev[index] = user;
                        return [...prev];
                    });
                }
                close();
            } else {
                raiseToast("Error", "error", res.message);
            }
            setLoading(false);
        }
    }


    const start = React.useCallback(() => {
        if (props.edit) {
            getRM.current();
            getCustGroup.current();
        }
        setOpen(props.edit !== undefined ? props.edit : true);
    }, [props.edit]);

    React.useEffect(start, [start]);

    const data = React.useCallback(() => {
        if (props.data) {
            dispatch({
                type: "updateUser",
                payload: {
                    ...props.data,
                    Manager: props.data.ManagerRecId || 0,
                },
            });
        }
    }, [props.data]);

    React.useEffect(data, [data]);

    return (
        <>
            <LeftPopOverLayout
                onSave={save}
                path="/New"
                title="Edit Customer"
                isOpen={open}
                close={close}
            >
                <Stack direction="column">
                    <FormInput
                        label="Name"
                        handleChange={handleChange}
                        defaultValue={user.Name}
                        name="Name"
                        isRequired={true}
                        isInvalid={error.input === "Name"}
                        error={error.message}
                        focus="CustGroup"
                    />

                    <InputSelect
                        label="Customer Group"
                        handleChange={handleSelect}
                        name="CustGroup"
                        defaultValue={user.CustGroup}
                        selectArray={CustGroup}
                        isRequired={true}
                        isInvalid={error.input === "CustGroup"}
                        error={error.message}
                        focus="Email"
                    />

                    <FormInput
                        label="Email"
                        handleChange={handleChange}
                        defaultValue={user.Email}
                        name="Email"
                        isRequired={true}
                        isInvalid={error.input === "Email"}
                        error={error.message}
                        focus="Phone"
                    />

                    <PhoneInput
                        label="Phone"
                        handleChange={handleChange}
                        defaultValue={user.Phone}
                        name="Phone"
                        isRequired={true}
                        isInvalid={error.input === "Phone"}
                        error={error.message}
                        focus="Manager"
                    />

                    <InputSelect
                        label="Relationship Manager"
                        handleChange={handleSelect}
                        name="Manager"
                        defaultValue={user.Manager.toString()}
                        isRequired={true}
                        isInvalid={error.input === "Manager"}
                        error={error.message}
                        selectArray={RelationshipManager}
                    />
                </Stack>
            </LeftPopOverLayout>
        </>
    );
}
