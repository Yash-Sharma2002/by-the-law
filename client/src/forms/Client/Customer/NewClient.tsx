import React from "react";
import LeftPopOverLayout from "../../../components/ui/LeftPopOverLayout";
import { Stack } from "@chakra-ui/react";
import ErrorInterface from "../../../interface/Error";
import validateName from "../../../functions/validateName";
import FormInput from "../../../components/input/FormInput";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../context/Context";
import InputSelect from "../../../components/input/InputSelect";
import validateEmail from "../../../functions/validateEmail";
import PhoneInput from "../../../components/input/PhoneInput";
import Roles from "../../../config/enum/Roles";
import FormSwitch from "../../../components/input/FormSwitch";
import create from "../../../functions/custTable/create";
import createLocation from "../../../functions/location/create";
import InputCountry from "../../../components/input/InputCountry";
import getAllCustGroup from "../../../functions/CustGroup/getAll";
import NewProps from "../../../interface/NewProps";
import {SelectArray} from "../../../interface/SelectArray";
import { getByRole } from "../../../functions/SecurityUserRole/getByRole";
import { ClientInterface, EmptyClient } from "../../../interface/Client";
import ProjTableInterface, { EmptyProjTable } from "../../../interface/ProjTable";
import LocationInterface, { EmptyLocation } from "../../../interface/Location";
import createProject from "../../../functions/projects/create";
import InputPassword from "../../../components/input/InputPassword";
import validatePass from "../../../functions/validatePass";

export default function NewClient(props: NewProps) {
  const [open, setOpen] = React.useState<boolean>(
    props.open !== undefined ? props.open : true
  );

  const [createAddress, setCreateAddress] = React.useState<boolean>(false);
  const [createProjectWithClient, setCreateProjectWithClient] =
    React.useState<boolean>(false);

  const navigate = useNavigate();
  const {
    user: CurrentUser,
    raiseToast,
    setLoading,
  } = React.useContext(AppContext);
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
    else navigate("/mi/MyCustomers");
  }

  const [user, setUser] = React.useState<ClientInterface>(EmptyClient);

  const [project, setProject] =
    React.useState<ProjTableInterface>(EmptyProjTable);

  const [address, setAddress] =
    React.useState<LocationInterface>(EmptyLocation);

  const [error, setError] = React.useState<ErrorInterface>({
    input: "",
    message: "",
    error: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    if (error.error) setError({ input: "", message: "", error: false });
  };

  const handleProjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
    if (error.error) setError({ input: "", message: "", error: false });
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
    if (error.error) setError({ input: "", message: "", error: false });
  };

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

    error = validatePass(user.Password)
    if (error) {
      setError({ input: "Password", message: error, error: true });
      return false;
    }

    if (createAddress) {
      error = validateName(address.Street, "Street");
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
    }

    if (createProjectWithClient) {
      error = validateName(project.Name, "Project Name");
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
    }

    return true;
  }

  async function save() {
    if (validate()) {
      let res: any, res2: any, res3: any;

      if (!createAddress && !createProjectWithClient) {
        let create = window.confirm("Are you sure you want to create a client without address and project?");
        if (!create) return;
      }

      setLoading(true);
      res = await create(user, CurrentUser);
      if (res.status === 200) {
        raiseToast(res.message, "success");

        if (createAddress) {
          let ref = {
            TableName: "CustTable",
            RecId: res.data.RecId,
          };
          res2 = await createLocation(address, CurrentUser, ref);
          if (res2.status === 200) {
            raiseToast(res2.message, "success");
          } else {
            raiseToast("Error", "error", res2.message);
          }
        }

        if (createProjectWithClient) {
          project.CustAccount = res.data.RecId;
          res3 = await createProject(project, CurrentUser);
          if (res3.status === 200) {
            raiseToast(res3.message, "success");
          } else {
            raiseToast("Error", "error", res3.message);
          }
        }

        if (props.setSeries) {
          props.setSeries((prev: any) => {
            return [...prev, res.data];
          });
          close();
        } else {
          navigate("/mi/AllClients");
        }
      } else {
        raiseToast("Error", "error", res.message);
      }
      setLoading(false);
    }
  }


  const start = React.useCallback(() => {
    if (props.open) {
      getRM.current();
      getCustGroup.current();
      setAddress(EmptyLocation);
      setProject(EmptyProjTable);
      setUser(EmptyClient);
      setCreateAddress(false);
      setCreateProjectWithClient(false);
    }
    setOpen(props.open !== undefined ? props.open : true);
  }, [props.open]);

  React.useEffect(start, [start]);



  return (
    <>
      <LeftPopOverLayout
        onSave={save}
        path="/New"
        title="New Customer"
        isOpen={open}
        close={close}
      >
        <Stack direction="column">
          <FormInput
            label="Name"
            handleChange={handleChange}
            name="Name"
            isRequired={true}
            isInvalid={error.input === "Name"}
            error={error.message}
            focus="CustGroup"
          />

          <InputSelect
            label="Customer Group"
            handleChange={(name, value) => {
              setUser({ ...user, [name]: value });
            }}
            name="CustGroup"
            selectArray={CustGroup}
            isRequired={true}
            isInvalid={error.input === "CustGroup"}
            error={error.message}
            focus="Email"
          />

          <FormInput
            label="Email"
            handleChange={handleChange}
            name="Email"
            isRequired={true}
            isInvalid={error.input === "Email"}
            error={error.message}
            focus="Phone"
          />



          <PhoneInput
            label="Phone"
            handleChange={handleChange}
            name="Phone"
            isRequired={true}
            isInvalid={error.input === "Phone"}
            error={error.message}
            focus="Manager"
          />

          <InputSelect
            label="Laywer"
            handleChange={(name, value) => {
              setUser({ ...user, [name]: value });
            }}
            name="Manager"
            isRequired={true}
            isInvalid={error.input === "Manager"}
            error={error.message}
            selectArray={RelationshipManager}
            focus="Password"
          />

          <InputPassword
            label="Password"
            handleChange={handleChange}
            name="Password"
            isRequired={true}
            isInvalid={error.input === "Password"}
            error={error.message}
            focus="createAddress"
          />

          <FormSwitch
            label="Create Address With Client"
            handleChange={(e) => setCreateAddress(e.target.checked)}
            name="createAddress"
            focus="Street"
          />

          {createAddress && (
            <Stack direction="column">
              <FormInput
                label="Street"
                handleChange={handleAddressChange}
                name="Street"
                isRequired={true}
                isInvalid={error.input === "Street"}
                error={error.message}
                focus="District"
              />

              <FormInput
                label="District"
                handleChange={handleAddressChange}
                name="District"
                isRequired={true}
                isInvalid={error.input === "District"}
                error={error.message}
                focus="City"
              />

              <Stack direction="row">
                <FormInput
                  label="City"
                  handleChange={handleAddressChange}
                  name="City"
                  isRequired={true}
                  isInvalid={error.input === "City"}
                  error={error.message}
                  focus="State"
                />

                <FormInput
                  label="State"
                  handleChange={handleAddressChange}
                  name="State"
                  isRequired={true}
                  isInvalid={error.input === "State"}
                  error={error.message}
                  focus="Country"
                />
              </Stack>

              <Stack direction="row">
                <InputCountry
                  label="Country"
                  handleChange={(name, value) => {
                    setAddress({ ...address, [name]: value });
                  }}
                  name="Country"
                  isRequired={true}
                  isInvalid={error.input === "Country"}
                  error={error.message}
                  focus="ZipCode"
                />

                <FormInput
                  label="Postal Code"
                  handleChange={handleAddressChange}
                  name="ZipCode"
                  isRequired={true}
                  isInvalid={error.input === "ZipCode"}
                  error={error.message}
                  focus="createProject"
                />
              </Stack>
            </Stack>
          )}

          <FormSwitch
            label="Create Project With Client"
            handleChange={(e) => setCreateProjectWithClient(e.target.checked)}
            name="createProject"
            focus="Name"
          />

          {createProjectWithClient && (
            <Stack direction="column">
              <FormInput
                label="Project Name"
                handleChange={handleProjectChange}
                name="Name"
                isRequired={true}
                isInvalid={error.input === "Name"}
                error={error.message}
                focus="Description"
              />

              <FormInput
                label="Project Description"
                handleChange={handleProjectChange}
                name="Description"
                isRequired={true}
                isInvalid={error.input === "Description"}
                error={error.message}
                focus="StartDate"
              />

              <Stack direction="row">
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
                  focus="EndDate"
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
                  focus="ProjCategory"
                />
              </Stack>


              <FormInput
                label="Budget"
                handleChange={handleProjectChange}
                name="Budget"
                type="number"
                isRequired={true}
                isInvalid={error.input === "Budget"}
                error={error.message}
              />
            </Stack>
          )}
        </Stack>
      </LeftPopOverLayout>
    </>
  );
}
