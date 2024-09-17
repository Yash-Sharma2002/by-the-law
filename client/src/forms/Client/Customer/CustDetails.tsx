import React from "react";
import { AppContext } from "../../../context/Context";
import { useNavigate, useParams } from "react-router-dom";
import FormTopBarInterface from "../../../interface/FormTopBar";
import Roles from "../../../config/enum/Roles";
import DisplayType from "../../../config/enum/DisplayType";
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";
import { Stack } from "@chakra-ui/react";
import ModuleUrls from "../../../config/enum/Module";
import AllLocation from "../../Location/AllLocation";
import DisplayTitle from "../../../components/common/Utils/DisplayTitle";
import BusUnitDim from "../../SystemAdmin/BusinessUnit/BusUnitDim/BusUnitDim";
import { CiSaveDown2 } from "react-icons/ci";
import { SelectArray } from "../../../interface/SelectArray";
import getOneCustomer from "../../../functions/custTable/getOne";
import getCustAddress from "../../../functions/location/getCustAddress";
import getUnitDim from "../../../functions/BusUnitDim/getUnitDim";
import { getByRole } from "../../../functions/SecurityUserRole/getByRole";
import getAllCustGroup from "../../../functions/CustGroup/getAll";
import deleteCustomer from "../../../functions/custTable/delete";
import updateClient from "../../../functions/custTable/update";
import FormTopBar from "../../../components/ui/FormTopBar";
import FormInput from "../../../components/input/FormInput";
import InputSelect from "../../../components/input/InputSelect";
import PhoneInput from "../../../components/input/PhoneInput";

export default function CustDetails() {
  const {
    setLoading,
    raiseToast,
    user: CurrentUser,
  } = React.useContext(AppContext);
  const navigate = useNavigate();
  const { data } = useParams();
  const [toggleEdit, setToggleEdit] = React.useState(false);
  const [customer, setCustomer] = React.useState<any>({});
  const [address, setAddress] = React.useState<any>([]);
  const [dims, setDims] = React.useState<any>([]);
  const getAllResources = React.useRef(() => { });

  const [CustGroup, setCustGroup] = React.useState<SelectArray[]>([]);
  const getCustGroup = React.useRef(() => { });
  const [RelationshipManager, setRelationshipManager] = React.useState<SelectArray[]>([]);
  const getRM = React.useRef(() => { });

  const [formData, setFormData] = React.useState({
    Name: "",
    CustGroup: "",
    Currency: "",
    Blocked: 0,
    Phone: "",
    Email: "",
    PCode: "",
    Manager: 0
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
      [name]: name === "Blocked" ? parseInt(value, 10) : value.trim() === "" ? null : value,
    }));
  };

  getAllResources.current = async () => {
    const res = await getOneCustomer(CurrentUser, data || "");
    const res2 = await getCustAddress(CurrentUser, data || "");
    if (res.status) {
      setCustomer(res.data);
      setFormData({ ...res.data, Manager: res.data.ManagerRecId });
    }
    if (res2.status) {
      setAddress(res2.data);
    } else {
      raiseToast(res.error, "error");
    }

    const res3 = await getUnitDim(CurrentUser, data || "", "CustTable");
    if (res3.status) {
      setDims(res3.data);
    } else {
      raiseToast(res3.error, "error");
    }
  };

  getRM.current = async () => {
    const res = await getByRole(CurrentUser, Roles.Lawyer);
    if (res.status !== 200) {
      raiseToast(res.message, "error");
    } else {

      let data = res.data.map((item: any, index: number) => {
        console.log(item);

        return {
          id: index.toString(),
          value: item.UserRecId,
          name: item.UserName,
        };
      });
      setRelationshipManager(data);
    }
  };

  getCustGroup.current = async () => {
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


  async function Delete() {
    setLoading(true);
    try {
      let res = await deleteCustomer(customer.RecId, CurrentUser);

      if (res.status === 200) {
        raiseToast(customer.AccountNum + " deleted successfully", "success");
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

  async function Save() {
    setLoading(true);

    const client = {
      Name: formData.Name,
      CustGroup: formData.CustGroup,
      Currency: formData.Currency,
      Blocked: formData.Blocked,
      Phone: formData.Phone,
      Email: formData.Email,
      PCode: formData.PCode,
      Manager: formData.Manager,
      RecId: customer.RecId
    }

    const res = await updateClient(client, CurrentUser);
    if (res.status === 200) {
      raiseToast(res.message, "success");
    } else {
      raiseToast("Error", "error", res.message);
    }
    setLoading(false);
    setToggleEdit(false);
  };

  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        await Promise.all([getAllResources.current(), getRM.current(), getCustGroup.current()]);
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
      {customer && (
        <>
          <div className="mx-2">
            <div className="mt-3">
              <h1 className="font-bold text-2xl">
                {customer.AccountNum} : {customer.Name}{" "}
              </h1>
            </div>
            <div className="border rounded-md shadow-md mt-4">
              <DisplayTitle title="Customer Details" />
              <Stack direction="row" spacing={4} className="border-t p-4">
                <FormInput
                  label="Account Number"
                  name="AccountNum"
                  defaultValue={customer.AccountNum}
                  isDisabled={true}
                />
                <FormInput
                  label="Name"
                  name="Name"
                  defaultValue={customer.Name}
                  handleChange={handleChange}
                  isDisabled={!toggleEdit}
                />

                {
                  toggleEdit ?
                    <InputSelect
                      label="Customer Group"
                      name="CustGroup"
                      selectArray={CustGroup}
                      defaultValue={customer.CustGroupName}
                      handleChange={handleSelect}
                      isDisabled={!toggleEdit}
                      placeholder={customer.CustGroupName}
                    />
                    :
                    <FormInput
                      label="Customer Group"
                      name="CustGroup"
                      defaultValue={customer.CustGroupName}
                      isDisabled={!toggleEdit}
                      placeholder={customer.CustGroupName}
                      onClick={() => {
                        if (!toggleEdit)
                          navigate(
                            `/mi/${ModuleUrls.CustGroup}/${customer.CustGroup}`
                          );
                      }}
                    />
                }

                {
                  toggleEdit ?
                    <InputSelect
                      label="Manager"
                      name="Manager"
                      defaultValue={customer.ManagerRecId}
                      selectArray={RelationshipManager}
                      handleChange={handleSelect}
                      isDisabled={!toggleEdit}
                      placeholder={customer.Manager}
                    />
                    :
                    <FormInput
                      label="Manager"
                      name="Manager"
                      defaultValue={customer.Manager}
                      isDisabled={!toggleEdit}
                      placeholder={customer.Manager}
                      onClick={() => {
                        if (!toggleEdit)
                          navigate(
                            `/mi/${ModuleUrls.CustGroup}/${customer.ManagerRecId}`
                          );
                      }}
                    />
                }


              </Stack>
              <Stack direction="row" spacing={4} className="pb-4 px-4">
                <FormInput
                  label="Currency"
                  name="Currency"
                  defaultValue={customer.Currency}
                  handleChange={handleChange}
                  isDisabled={!toggleEdit}
                />

                {
                  toggleEdit ?
                    <InputSelect
                      label="Blocked"
                      name="Blocked"
                      defaultValue={customer.Blocked ? "Yes" : "No"}
                      handleChange={handleSelect}
                      isDisabled={!toggleEdit}
                      placeholder={customer.Blocked ? "Yes" : "No"}
                      selectArray={[
                        {
                          id: "0",
                          value: "0",
                          name: "No",
                        },
                        {
                          id: "1",
                          value: "1",
                          name: "Yes",
                        }
                      ]}
                    /> :
                    <FormInput
                      label="Blocked"
                      name="Blocked"
                      defaultValue={customer.Blocked ? "Yes" : "No"}
                      isDisabled={!toggleEdit}
                      placeholder={customer.Blocked ? "Yes" : "No"}
                    />
                }

                <PhoneInput
                  label="Phone"
                  name="Phone"
                  defaultValue={customer.Phone}
                  handleChange={handleChange}
                  isDisabled={!toggleEdit}
                />
                <FormInput
                  label="Email"
                  name="Email"
                  defaultValue={customer.Email}
                  handleChange={handleChange}
                  isDisabled={!toggleEdit}
                />
              </Stack>
              <Stack direction="row" spacing={4} className="pb-4 px-4">
                <FormInput
                  label="ModifiedBy"
                  name="ModifiedBy"
                  defaultValue={customer.ModifiedBy}
                  isDisabled={true}
                />
                <FormInput
                  label="CreatedBy"
                  name="CreatedBy"
                  defaultValue={customer.CreatedBy}
                  isDisabled={true}
                />
                <FormInput
                  label="Created Date"
                  name="CreatedDateTime"
                  defaultValue={new Date(
                    customer.CreatedDateTime
                  ).toDateString()}
                  isDisabled={true}
                />
                <FormInput
                  label="Modified Date"
                  name="ModifiedDateTime"
                  defaultValue={new Date(
                    customer.ModifiedDateTime
                  ).toDateString()}
                  isDisabled={true}
                />
              </Stack>
            </div>
            <AllLocation
              data={address}
              refData={customer}
              setData={setAddress}
              refTable="CustTable"
              refresh={getAllResources.current}
            />
          </div>
        </>
      )}
      <BusUnitDim
        data={dims}
        refData={customer}
        refTable="CustTable"
        setData={setDims}
        refresh={getAllResources.current}
        topBar={true}
      />
    </>
  );
}
