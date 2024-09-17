import React from "react";
import { Stack } from "@chakra-ui/react";
import ErrorInterface from "../../interface/Error";
import validateName from "../../functions/validateName";
import { AppContext } from "../../context/Context";
import EditProps from "../../interface/EditProps";
import updateLocation from "../../functions/location/update";
import getDetailLocation from "../../functions/location/getDetailLocation";
import LeftPopOverLayout from "../../components/ui/LeftPopOverLayout";
import FormInput from "../../components/input/FormInput";
import InputCountry from "../../components/input/InputCountry";
import FormSwitch from "../../components/input/FormSwitch";

export default function EditLocation(props: EditProps) {
    const [open, setOpen] = React.useState<boolean>(
        props.edit !== undefined ? props.edit : true
    );

    const {
        user: CurrentUser,
        raiseToast,
        setLoading,
    } = React.useContext(AppContext);

    function close() {
        setOpen(false);
        if (props.close) props.close();
    }
    const reducer = (state: any, action: any) => {
        switch (action.type) {
            case "updateAddress":
                return { ...state, ...action.payload };
            default:
                return state;
        }
    };

    const [address, dispatch] = React.useReducer(reducer, props.data)


    const [error, setError] = React.useState<ErrorInterface>({
        input: "",
        message: "",
        error: false,
    });

    const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: "updateAddress",
            payload: { [e.target.name]: e.target.value },
        });
        if (error.error) setError({ input: "", message: "", error: false });
    };

    function validate() {
        let error = validateName(address.Street, "Street");
        if (error) {
            setError({ input: "Street", message: error, error: true });
            return false;
        }

        error = validateName(address.State, "State");
        if (error) {
            setError({ input: "State", message: error, error: true });
            return false;
        }

        error = validateName(address.ZipCode, "Postal Code");
        if (error) {
            setError({ input: "ZipCode", message: error, error: true });
            return false;
        }

        return true;
    }

    async function save() {
        if (validate()) {
            setLoading(true);
            const res = await updateLocation(address, CurrentUser);
            if (res.status === 200) {
                raiseToast(res.message, "success");
            } else {
                raiseToast("Error", "error", res.message);
            }
            if (props.setSeries) {
                props.setSeries((prev: any) => {
                    let index = prev.findIndex(
                        (item: any) => item.RecId === address.RecId
                    );
                    prev[index] = address;
                    return [...prev];
                });
                close();
            }
            setLoading(false);
        }
    }

    const getData = React.useRef(() => { })

    getData.current = async () => {
        setLoading(true);
        const res = await getDetailLocation(CurrentUser, props.data.RecId);
        if (res.status === 200) {
            dispatch({ type: "updateAddress", payload: res.data });
        }
        else {
            raiseToast("Error", "error", res.message);
        }
        setLoading(false);
    }


    React.useEffect(() => {
        if (props.edit) {
            getData.current()
        }
        setOpen(props.edit !== undefined ? props.edit : true);
    }, [props.edit]);




    return (
        <>
            <LeftPopOverLayout
                onSave={save}
                path="/New"
                title="Update Location"
                isOpen={open}
                close={close}
            >
                <Stack direction="column">
                    <Stack direction="column">
                        <FormInput
                            label="Street"
                            defaultValue={address.Street}
                            handleChange={handleAddressChange}
                            name="Street"
                            isRequired={true}
                            isInvalid={error.input === "Street"}
                            error={error.message}
                            focus="District"
                        />

                        <FormInput
                            label="District"
                            defaultValue={address.District}
                            handleChange={handleAddressChange}
                            name="District"
                            isRequired={true}
                            isInvalid={error.input === "District"}
                            error={error.message}
                            focus="City"
                        />

                        <Stack direction={['column', 'row']}>
                            <FormInput
                                label="City"
                                defaultValue={address.City}
                                handleChange={handleAddressChange}
                                name="City"
                                isRequired={true}
                                isInvalid={error.input === "City"}
                                error={error.message}
                                focus="State"
                            />

                            <FormInput
                                label="State"
                                defaultValue={address.State}
                                handleChange={handleAddressChange}
                                name="State"
                                isRequired={true}
                                isInvalid={error.input === "State"}
                                error={error.message}
                                focus="Country"
                            />
                        </Stack>

                        <Stack direction={['column', 'row']}>
                            <InputCountry
                                label="Country"
                                defaultValue={address.Country}
                                handleChange={(name, value) => {
                                    dispatch({ type: "updateAddress", payload: { [name]: value } });
                                }}
                                name="Country"
                                isRequired={true}
                                isInvalid={error.input === "Country"}
                                error={error.message}
                                focus="ZipCode"
                            />

                            <FormInput
                                label="Postal Code"
                                defaultValue={address.ZipCode}
                                handleChange={handleAddressChange}
                                name="ZipCode"
                                isRequired={true}
                                isInvalid={error.input === "ZipCode"}
                                error={error.message}
                                focus="IsPrimary"
                            />
                        </Stack>
                        <FormSwitch
                            label="Is Primary Address"
                            handleChange={(e) =>
                                dispatch({
                                    type: "updateAddress",
                                    payload: { IsPrimary: e.target.checked },
                                })
                            }
                            name="IsPrimary"
                            defaultValue={address.IsPrimary}
                        />
                    </Stack>
                </Stack>
            </LeftPopOverLayout>
        </>
    );
}
