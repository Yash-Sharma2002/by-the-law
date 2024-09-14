import React from "react";
import "./divorce.css";
import SUdivorce from "./SUdivorce";

enum Type {
  client = "client",
  spuse = "spouse",
}

export default function Divorce() {
  const [details, setDetails] = React.useState<SUdivorce>({} as SUdivorce);

  function handleChange(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  }

  function onChangePhone(type: Type, e: React.ChangeEvent<HTMLInputElement>) {
    setDetails({
      ...details,
      [type]: {
        ...details[type],
        phone: {
          ...details[type].phone,
          [e.target.name]: e.target.value,
        },
      },
    });
  }

  function handleCorrespondenceAddress(
    type: Type,
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setDetails({
      ...details,
      [type]: {
        ...details[type],
        correspondenceAddress: {
          ...details[type].correspondenceAddress,
          [e.target.name]: {
            contain: e.target.checked,
          },
        },
      },
    });
  }

  function handleClient(type: Type, e: React.ChangeEvent<HTMLInputElement>) {
    setDetails({
      ...details,
      [type]: {
        ...details[type],
        [e.target.name]: e.target.value,
      },
    });
  }

  function handleSalary(type: Type, e: React.ChangeEvent<HTMLInputElement>) {
    setDetails({
      ...details,
      [type]: {
        ...details[type],
        salary: {
          ...details[type].salary,
          [e.target.name]: e.target.value,
        },
      },
    });
  }

  function handleSalaryType(
    type: Type,
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setDetails({
      ...details,
      [type]: {
        ...details[type],
        salary: {
          ...details[type].salary,
          type: {
            ...details[type].salary.type,
            [e.target.name]: e.target.checked,
          },
        },
      },
    });
  }

  function handleHighSchool(
    type: Type,
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setDetails({
      ...details,
      [type]: {
        ...details[type],
        educationOrTraining: {
          ...details[type].educationOrTraining,
          highSchool: {
            ...details[type].educationOrTraining.highSchool,
            [e.target.name]: e.target.value,
          },
        },
      },
    });
  }
    
  function handleCollege(type: Type, e: React.ChangeEvent<HTMLInputElement>) {
    setDetails({
      ...details,
      [type]: {
        ...details[type],
        educationOrTraining: {
          ...details[type].educationOrTraining,
          college: {
            ...details[type].educationOrTraining.college,
            [e.target.name]: e.target.value,
          },
        },
      },
    });
  }

  function handleGraduateSchool(
    type: Type,
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setDetails({
      ...details,
      [type]: {
        ...details[type],
        educationOrTraining: {
          ...details[type].educationOrTraining,
          graduateSchool: {
            ...details[type].educationOrTraining.graduateSchool,
            [e.target.name]: e.target.value,
          },
        },
      },
    });
  }
 
  function handlePreviousMarriage(e: React.ChangeEvent<HTMLInputElement>) {
    setDetails({
      ...details,
      previousMarriage: {
        ...details.previousMarriage,
        [e.target.name]: e.target.value,
      },
    });
  }

  function handleChildrenOfClient(e: React.ChangeEvent<HTMLInputElement>) {
    setDetails({
      ...details,
      childrenOfClient: {
        ...details.childrenOfClient,
        [e.target.name]: e.target.value,
      },
    });
  }

  function handleCurrentMarriage(e: React.ChangeEvent<HTMLInputElement>) {
    setDetails({
      ...details,
      thisMarriage: {
        ...details.thisMarriage,
        [e.target.name]: e.target.value,
      },
    });
  }

  function handleAssets(e: React.ChangeEvent<HTMLInputElement>) {
    setDetails({
      ...details,
      assets: {
        ...details.assets,
        [e.target.name]: e.target.value,
      },
    });
  }

  function handleLiabilities(e: React.ChangeEvent<HTMLInputElement>) {
    setDetails({
      ...details,
      liabilities: {
        ...details.liabilities,
        [e.target.name]: e.target.value,
      },
    });
  }

  function handleIssuesToAddress(e: React.ChangeEvent<HTMLInputElement>) {
    setDetails({
      ...details,
      issuesToAddress: {
        ...details.issuesToAddress,
        [e.target.name]: e.target.value,
      },
    });
  }

  function handleSettlementNotes(e: React.ChangeEvent<HTMLInputElement>) {
    setDetails({
      ...details,
      settlementNotes: {
        ...details.settlementNotes,
        [e.target.name]: e.target.value,
      },
    });
  }

  function sendData() {
    console.log(details);
  }

  // create function which runs in every 5 sec
  function saveData() {
    setInterval(() => {
      sendData();
    }, 5000);
  }
  saveData();
  return (
    <>
      <div
        className="main"
        style={{ backgroundColor: "white", color: "black", fontSize: "18px" }}
      >
        <h2
          className="text-center"
          style={{ paddingTop: "300px", fontSize: "36px", fontWeight: "800" }}
        >
          Divorce Intake Questionnaire
        </h2>
        <p className="font-s text-center mt">Personal & Confidential</p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "25rem",
            scale: "1.5",
          }}
        >
          <img src="/law.png" alt="ByTheLaw" />
        </div>
        <div className="font-s text-center" style={{ marginTop: " 5rem" }}>
          <label>940 Saratoga Ave</label> <br />
          <label>Suite 112</label>
          <br />
          <label>San Jose, CA</label>
        </div>

        <p style={{ pageBreakAfter: "always" }}></p>
        {/* <p style={{ pageBreakAfter: 'always' }}></p> */}

        <div style={{ marginTop: "10rem" }}>
          <p>
            Referred by:{" "}
            <span className="ml">
              <input
                name="referredBy"
                type="text"
                onChange={(e) => handleChange(e)}
              />
            </span>
          </p>
        </div>
        <div className="font-s">
          <p>
            Date:{" "}
            <span style={{ marginLeft: "4.7rem" }}>
              <input
                name="date"
                type="text"
                className="ml-[2px]"
                onChange={(e) => handleChange(e)}
              />
            </span>
          </p>
        </div>

        <hr
          style={{
            border: " 1.5px solid black",
            marginTop: " 4rem",
            marginBottom: "4rem",
          }}
        />
        <br />

        <div className="font-s">
          <p>
            <b>Client’s Name:</b>{" "}
            <span style={{ marginLeft: " 4.7rem" }}>
              <input
                style={{ width: "43rem" }}
                type="text"
                name="name"
                onChange={(e) => handleClient(Type.client, e)}
                defaultValue={details.client?.name}
              />
            </span>
          </p>
          <div
            style={{
              display: " flex",
              justifyContent: " space-between",
              marginLeft: " 18rem",
              width: " 50%",
            }}
          >
            <div>(Last)</div>
            <div>(First)</div>
            <div>(Maiden)</div>
          </div>
        </div>
        <div className="font-s">
          <p>
            Address:
            <span style={{ marginLeft: " 8.4rem" }}>
              <input
                style={{ width: "43rem" }}
                onChange={(e) => handleClient(Type.client, e)}
                defaultValue={details.client?.address}
                className="ml-[14px]"
                type="text"
                name="address"
              />
            </span>
          </p>
        </div>
        <br />

        <div
          className="font-s"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "50rem",
          }}
        >
          <div>Phone:</div>
          <div style={{ marginRight: "70px", marginLeft: "30px" }}>
            <div>
              Home :{" "}
              <input
                name="home"
                type="text"
                style={{ width: "10rem" }}
                onChange={(e) => onChangePhone(Type.client, e)}
                defaultValue={details.client?.phone.home}
              />
            </div>
            <div style={{ marginLeft: "5px" }}>
              Cell :{" "}
              <input
                name="cell"
                type="text"
                style={{ width: "11rem" }}
                onChange={(e) => onChangePhone(Type.client, e)}
                defaultValue={details.client?.phone.cell}
              />
            </div>
          </div>

          <div style={{}}>
            <div>
              Work :{" "}
              <input
                name="work"
                type="text"
                style={{ width: "10rem" }}
                onChange={(e) => onChangePhone(Type.client, e)}
                defaultValue={details.client?.phone.work}
              />
            </div>
            <div>
              fax :{" "}
              <input
                type="text"
                name="fax"
                style={{ width: "11.1rem" }}
                onChange={(e) => onChangePhone(Type.client, e)}
                defaultValue={details.client?.phone.fax}
              />
            </div>
          </div>
        </div>
        <br />

        <div className="font-s mt">
          Email Address:{" "}
          <input
            name="emailAddress"
            style={{ width: "57rem" }}
            type="text"
            onChange={(e) => handleClient(Type.client, e)}
            defaultValue={details.client?.emailAddress}
          />
        </div>
        <br />
        <br />
        <div className="font-s ">
          Address Where Correspondence Should Be Sent:{" "}
          <input
            className="ml"
            type="checkbox"
            name=""
            id=""
            // onChange={(e)=>handleClient(e)} defaultChecked={details.client?'On':'Off'}
            onChange={(e) => handleCorrespondenceAddress(Type.client, e)}
            defaultChecked={details.client?.correspondenceAddress?.home.contain}
          />{" "}
          Home{" "}
          <input
            className="ml"
            type="checkbox"
            name=""
            id=""
            onChange={(e) => handleCorrespondenceAddress(Type.client, e)}
            defaultChecked={details.client?.correspondenceAddress?.work.contain}
          />{" "}
          Work
        </div>
        <br />
        <br />

        <div className="font-s ">
          Emloyer:{" "}
          <input
            style={{ width: "60.5rem" }}
            type="text"
            onChange={(e) => handleClient(Type.client, e)}
            defaultValue={details.client?.employer}
          />
        </div>
        <br />
        <br />

        <div className="font-s">
          Position:{" "}
          <input
            style={{ width: "25rem" }}
            type="text"
            name="position"
            onChange={(e) => handleClient(Type.client, e)}
          />{" "}
          Years Employed:{" "}
          <input
            style={{ width: "25.8rem" }}
            type="text"
            name="yearsEmployed"
            onChange={(e) => handleClient(Type.client, e)}
            defaultValue={details.client?.position}
          />
        </div>
        <br />
        <br />

        <div className="font-s">
          Salary:{" "}
          <span style={{ marginLeft: "4rem" }}>
            Gross:{" "}
            <input
              type="text"
              style={{ width: "16.7rem" }}
              onChange={(e) => handleSalary(Type.client, e)}
              defaultValue={details.client?.salary.gross}
            />
          </span>{" "}
          <span className="ml">
            Net:
            <input
              type="text"
              style={{ width: "18rem" }}
              onChange={(e) => handleSalary(Type.client, e)}
              defaultValue={details.client?.salary.net}
            />
          </span>
          <span>
            <input
              type="checkbox"
              name=""
              id=""
              className="mr-1"
              onChange={(e) => handleSalaryType(Type.client, e)}
              defaultChecked={details.client?.salary.type.annual}
            />
            annual/
            <input
              type="checkbox"
              name=""
              id=""
              className="mr-1"
              onChange={(e) => handleSalaryType(Type.client, e)}
              defaultChecked={details.client?.salary.type.monthly}
            />
            monthly/
            <input
              type="checkbox"
              name=""
              id=""
              className="mr-1"
              onChange={(e) => handleSalaryType(Type.client, e)}
              defaultChecked={details.client?.salary.type.hourly}
            />
            hourly
          </span>
        </div>
        <br />
        <br />

        <div className="font-s">
          Social Security No.
          <input
            type="text "
            style={{ width: "22rem" }}
            className="18rem"
            name="socialSecurityNo"
            onChange={(e) => handleClient(Type.client, e)}
            defaultValue={details.client?.socialSecurityNo}
          />
          Place of Birth:{" "}
          <input
            type="text"
            name="placeOfBirth"
            style={{ width: "25.7rem" }}
            className="18rem"
            onChange={(e) => handleClient(Type.client, e)}
            defaultValue={details.client?.placeOfBirth}
          />
        </div>
        <br />
        <br />

        <div className="font-s">
          DOB:{" "}
          <input
            type="text"
            style={{ width: "24rem" }}
            name="dateOfBirth"
            onChange={(e) => handleClient(Type.client, e)}
            defaultValue={details.client?.dateOfBirth}
          />{" "}
          AGE:{" "}
          <input
            type="text"
            name="age"
            style={{ width: "35.8rem" }}
            onChange={(e) => handleClient(Type.client, e)}
            defaultValue={details.client?.age}
          />
        </div>
        <br />
        <br />

        <div className="font-s" style={{ display: " flex" }}>
          <div>Education or Training:</div>
          <div className="ml">
            <input
              type="checkbox"
              name="contain"
              id=""
              onChange={(e) => handleHighSchool(Type.client, e)}
              defaultChecked={
                details.client?.educationOrTraining.highSchool.contain
              }
            />
            High School
            <input
              type="text"
              name="details"
              style={{ width: "44.8rem" }}
              onChange={(e) => handleHighSchool(Type.client, e)}
              defaultValue={
                details.client?.educationOrTraining.highSchool.details
              }
            />
            <br />
            <input
              type="checkbox"
              name="contain"
              id=""
              onChange={(e) => handleCollege(Type.client, e)}
              defaultChecked={
                details.client?.educationOrTraining.college.contain
              }
            />
            College
            <input
              type="text"
              name="details"
              style={{ width: "47.1rem", marginTop: "20px" }}
              onChange={(e) => handleCollege(Type.client, e)}
              defaultValue={details.client?.educationOrTraining.college.details}
            />
            <br />
            <input
              type="checkbox"
              name="contain"
              id=""
              onChange={(e) => handleGraduateSchool(Type.client, e)}
              defaultChecked={
                details.client?.educationOrTraining.highSchool.contain
              }
            />
            Graduate School
            <input
              type="text"
              name="details"
              style={{ width: "42rem", marginTop: "20px" }}
              onChange={(e) => handleClient(Type.client, e)}
              defaultValue={
                details.client?.educationOrTraining.graduateSchool.details
              }
            />
          </div>
        </div>
        <br />
        <br />

        <div className="font-s">Status of</div>
        <div className="font-s" style={{ marginTop: "0.5rem" }}>
          Health and Treating Physician{" "}
          <input
            type="text"
            style={{ width: "49rem" }}
            onChange={(e) => {
              setDetails({
                ...details,
                client: {
                  ...details.client,
                  healthStatus: e.target.value,
                },
              });
            }}
            defaultValue={details.client?.healthStatus}
          />
        </div>

        <hr style={{ border: "1.5px solid black", marginTop: "4rem" }} />
        <br />

        <p style={{ pageBreakAfter: "always" }}></p>
        <p style={{ pageBreakBefore: "always" }}></p>

        <div style={{ marginTop: "35px" }}>
          <p>
            <b>Spouse’s Name:</b>{" "}
            <span style={{ marginLeft: " 4.7rem" }}>
              <input
                style={{ width: "51.6rem" }}
                type="text"
                onChange={(e) => handleClient(Type.spuse,e)}
                defaultValue={details.spouse?.name}
              />
            </span>
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: " space-between",
              marginLeft: "18rem",
              width: "62%",
            }}
          >
            <div>(Last)</div>
            <div>(First)</div>
            <div>(Maiden)</div>
          </div>

          <div>
            <p>
              {" "}
              Address:
              <span style={{ marginLeft: "8.4rem" }}>
                <input
                  style={{ width: "53rem" }}
                  type="text"
                  onChange={(e) => handleClient(Type.spuse,e)}
                  defaultValue={details.spouse?.address}
                />
              </span>
            </p>
            <div style={{ marginLeft: " 18rem" }}>(if different)</div>
          </div>

          <div
            className="font-s"
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "50.2rem",
            }}
          >
            <div className="4">Phone:</div>
            <div style={{ marginRight: "70px", marginLeft: "30px" }}>
              <div>
                Home :{" "}
                <input
                  type="text"
                  name="home"
                  style={{ width: "10rem" }}
                  onChange={(e) => onChangePhone(Type.spuse,e)}
                  defaultValue={details.spouse?.phone.home}
                />
              </div>
              <div style={{ marginLeft: "5px" }}>
                Cell :{" "}
                <input
                  type="text"
                    name="cell"
                  style={{ width: "11rem" }}
                  onChange={(e) => onChangePhone(Type.spuse,e)}
                  defaultValue={details.spouse?.phone.cell}
                />
              </div>
            </div>

            <div style={{}}>
              <div>
                Work :{" "}
                <input
                  type="text"
                    name="work"
                  style={{ width: "10rem" }}
                  onChange={(e) => onChangePhone(Type.spuse,e)}
                  defaultValue={details.spouse?.phone.work}
                />
              </div>
              <div>
                fax :{" "}
                <input
                  type="text"
                    name="fax"
                  style={{ width: "11.1rem" }}
                  onChange={(e) => onChangePhone(Type.spuse,e)}
                  defaultValue={details.spouse?.phone.fax}
                />
              </div>
            </div>
          </div>

          <div className="mt">
            Email Address:{" "}
            <input
              type="text"
                name="emailAddress"
              style={{ width: "58.2rem" }}
              onChange={(e) => handleClient(Type.spuse,e)}
              defaultValue={details.spouse?.emailAddress}
            />
          </div>

          <div className="mt">
            Address Where Correspondence Should Be Sent:{" "}
            <input
              className="ml relative top-[2px]"
              style={{ width: " 18px", height: "18px" }}
              type="checkbox"
              name="contain"
              id=""
              onChange={(e) => handleCorrespondenceAddress(Type.spuse,e)}
              defaultChecked={
                details.spouse?.correspondenceAddress.home.contain
              }
            />{" "}
            Home{" "}
            <input
              className="ml relative top-[2px]"
              style={{ width: " 18px", height: "18px" }}
              type="checkbox"
              name="contain"
              id=""
                onChange={(e) => handleCorrespondenceAddress(Type.spuse,e)}
              defaultChecked={
                details.spouse?.correspondenceAddress.work.contain
              }
            />{" "}
            Work{" "}
            <input
              className="ml relative top-[2px]"
              style={{ width: " 18px", height: "18px" }}
              type="checkbox"
              name="contain"
              id=""
                onChange={(e) => handleCorrespondenceAddress(Type.spuse,e)}
              defaultChecked={
                details.spouse?.correspondenceAddress.attorney.contain
              }
            />{" "}
            Attorney
          </div>

          <div className="mt">
            <p>
              Spouse's Emloyer:{" "}
              <input
                style={{ width: "55.6rem" }}
                type="text"
                name="employer"
                onChange={(e) => handleClient(Type.spuse,e)}
                defaultValue={details.spouse?.employer}
              />
            </p>
          </div>

          <div className="mt">
            <p>
              Position:{" "}
              <input
                style={{ width: "25rem" }}
                type="text"
                name="position"
                onChange={(e) => handleClient(Type.spuse,e)}
                defaultValue={details.spouse?.position}
              />{" "}
              Years Employed:{" "}
              <input
                style={{ width: "26rem" }}
                name="yearsEmployed"
                type="text"
                onChange={(e) => handleClient(Type.spuse,e)}
                defaultValue={details.spouse?.yearsEmployed}
              />
            </p>
          </div>

          <div className="mt">
            <p>
              Salary:{" "}
              <span style={{ marginLeft: " 6rem" }}>
                Gross:{" "}
                <input
                name="gross"
                  type="text"
                  onChange={(e) => handleSalary(Type.spuse,e)}
                  defaultValue={details.spouse?.salary.gross}
                />
              </span>{" "}
              <span className="ml">
                Net:
                <input
                  type="text"
                  style={{ width: "17rem" }}
                  onChange={(e) => handleClient(Type.spuse,e)}
                  defaultValue={details.spouse?.salary.net}
                />
                annual/monthly/ weekly
              </span>
            </p>
          </div>

          <div className="mt">
            <p>
              Social Security No.
              <input
                type="text "
                style={{ width: "22rem" }}
                className="18rem"
                onChange={(e) => handleClient(Type.spuse,e)}
                defaultValue={details.spouse?.socialSecurityNo}
              />
              Place of Birth:{" "}
              <input
                type="text"
                style={{ width: "25.7rem" }}
                className="18rem"
                onChange={(e) => handleClient(Type.spuse,e)}
                defaultValue={details.spouse?.placeOfBirth}
              />
            </p>
          </div>

          <div className="mt">
            <p>
              DOB:{" "}
              <input
                type="text"
                style={{ width: "30rem" }}
                onChange={(e) => handleClient(Type.spuse,e)}
                defaultValue={details.spouse?.dateOfBirth}
              />{" "}
              AGE:{" "}
              <input
                type="text"
                style={{ width: "30rem" }}
                onChange={(e) => handleClient(Type.spuse,e)}
                defaultValue={details.spouse?.age}
              />
            </p>
          </div>

          <div className="mt flex">
            <p>Education or Training:</p>
            <div className="ml mt-1">
              High School{" "}
              <input
                type="text"
                style={{ width: "46.8rem" }}
                onChange={(e) => handleClient(Type.spuse,e)}
                defaultValue={
                  details.spouse?.educationOrTraining.highSchool.details
                }
              />
              <br />
              College{" "}
              <input
                type="text"
                style={{ width: "49rem", marginTop: "20px" }}
                onChange={(e) => handleClient(Type.spuse,e)}
                defaultValue={
                  details.spouse?.educationOrTraining.college.details
                }
              />
              <br />
              Graduate School{" "}
              <input
                type="text"
                style={{ width: "43.8rem", marginTop: "20px" }}
                onChange={(e) => handleClient(Type.spuse,e)}
                defaultValue={
                  details.spouse?.educationOrTraining.graduateSchool.details
                }
              />
            </div>
          </div>

          <div className="mt">
            <p className="2">Status of</p>
            <p>
              Health and Treating Physician{" "}
              <input
                type="text"
                style={{ width: "49.5rem" }}
                onChange={(e) => handleClient(Type.spuse,e)}
                defaultValue={details.spouse?.healthStatus}
              />
            </p>
          </div>
          <hr style={{ border: " 1.5px solid black", marginTop: "5rem" }} />
          <br />
          <div className="mt">
            <p>
              Previous Marriage: Client:{" "}
              <input
                type="text"
                style={{ width: "21.9rem" }}
                onChange={(e) => handlePreviousMarriage(e)}
                defaultValue={details.previousMarriage?.client}
              />{" "}
              Spouse:{" "}
              <input
                type="text"
                style={{ width: "24.6rem" }}
                onChange={(e) => handlePreviousMarriage(e)}
                defaultValue={details.previousMarriage?.spouse}
              />
            </p>
          </div>

          <div className="mt">
            <p>How and When Ended:</p>
            <p style={{ marginLeft: "10rem" }} className="mt">
              Client:{" "}
              <input
                type="text"
                style={{ width: "52.9rem" }}
                onChange={(e) => handlePreviousMarriage(e)}
                defaultValue={details.previousMarriage?.endedDetails.client}
              />
            </p>
            <p style={{ marginLeft: "10rem" }} className="mt">
              Spouse:{" "}
              <input
                type="text"
                style={{ width: "52rem" }}
                onChange={(e) => handlePreviousMarriage(e)}
                defaultValue={details.previousMarriage?.endedDetails.spouse}
              />
            </p>
          </div>

          <p style={{ pageBreakAfter: "always" }}></p>
          <p style={{ pageBreakBefore: "always" }}></p>

          <div className="mt">
            <b>Children of Client:</b>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ marginLeft: "2rem" }} className="mt">
                Name: <br />{" "}
                <input
                  type="text"
                  style={{ width: "15rem" }}
                  onChange={(e) => handleChildrenOfClient(e)}
                  defaultValue={details.childrenOfClient?.client.name}
                />
                <br />{" "}
                <input
                  type="text"
                  className="mt"
                  style={{ width: "15rem" }}
                  onChange={(e) => handleChildrenOfClient(e)}
                  defaultValue={details.childrenOfClient?.client.name}
                />{" "}
                <br />{" "}
                <input
                  type="text"
                  className="mt"
                  style={{ width: "15rem" }}
                  onChange={(e) => handleChildrenOfClient(e)}
                  defaultValue={details.childrenOfClient?.client.name}
                />
              </p>
              <p style={{ marginLeft: "5rem" }} className="mt">
                DOB: <br />{" "}
                <input
                  type="text"
                  style={{ width: "15rem" }}
                  onChange={(e) => handleChildrenOfClient(e)}
                  defaultValue={details.childrenOfClient?.client.dob}
                />{" "}
                <input
                  type="text"
                  className="mt"
                  style={{ width: "15rem" }}
                  onChange={(e) => handleChildrenOfClient(e)}
                  defaultValue={details.childrenOfClient?.client.dob}
                />{" "}
                <br />{" "}
                <input
                  type="text"
                  className="mt"
                  style={{ width: "15rem" }}
                  onChange={(e) => handleChildrenOfClient(e)}
                  defaultValue={details.childrenOfClient?.client.dob}
                />
              </p>
              <p style={{ marginLeft: "5rem" }} className="mt">
                SSN: <br />{" "}
                <input
                  type="text"
                  style={{ width: "15rem" }}
                  onChange={(e) => handleChildrenOfClient(e)}
                  defaultValue={details.childrenOfClient?.client.ssn}
                />{" "}
                <input
                  type="text"
                  className="mt"
                  style={{ width: "15rem" }}
                  onChange={(e) => handleChildrenOfClient(e)}
                  defaultValue={details.childrenOfClient?.client.ssn}
                />{" "}
                <input
                  type="text"
                  className="mt"
                  style={{ width: "15rem" }}
                  onChange={(e) => handleChildrenOfClient(e)}
                  defaultValue={details.childrenOfClient?.client.ssn}
                />
              </p>
            </div>
          </div>

          <div className="mt">
            <b>Children of Spouse:</b>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ marginLeft: "2rem" }} className="mt">
                Name: <br />{" "}
                <input
                  type="text"
                  style={{ width: "15rem" }}
                  onChange={(e) => handleChildrenOfClient(e)}
                  defaultValue={details.childrenOfClient?.spouse.name}
                />
                <br />{" "}
                <input
                  type="text"
                  className="mt"
                  style={{ width: "15rem" }}
                  onChange={(e) => handleChildrenOfClient(e)}
                  defaultValue={details.childrenOfClient?.spouse.name}
                />{" "}
                <br />{" "}
                <input
                  type="text"
                  className="mt"
                  style={{ width: "15rem" }}
                  onChange={(e) => handleChildrenOfClient(e)}
                  defaultValue={details.childrenOfClient?.spouse.name}
                />
              </p>
              <p style={{ marginLeft: "5rem" }} className="mt">
                DOB: <br />{" "}
                <input
                  type="text"
                  style={{ width: "15rem" }}
                  onChange={(e) => handleChildrenOfClient(e)}
                  defaultValue={details.childrenOfClient?.spouse.dob}
                />{" "}
                <input
                  type="text"
                  className="mt"
                  style={{ width: "15rem" }}
                  onChange={(e) => handleChildrenOfClient(e)}
                  defaultValue={details.childrenOfClient?.spouse.dob}
                />{" "}
                <br />{" "}
                <input
                  type="text"
                  className="mt"
                  style={{ width: "15rem" }}
                  onChange={(e) => handleChildrenOfClient(e)}
                  defaultValue={details.childrenOfClient?.spouse.dob}
                />
              </p>
              <p style={{ marginLeft: "5rem" }} className="mt">
                SSN: <br />{" "}
                <input
                  type="text"
                  style={{ width: "15rem" }}
                  onChange={(e) => handleChildrenOfClient(e)}
                  defaultValue={details.childrenOfClient?.spouse.ssn}
                />{" "}
                <input
                  type="text"
                  className="mt"
                  style={{ width: "15rem" }}
                  onChange={(e) => handleChildrenOfClient(e)}
                  defaultValue={details.childrenOfClient?.spouse.ssn}
                />{" "}
                <input
                  type="text"
                  className="mt"
                  style={{ width: "15rem" }}
                  onChange={(e) => handleChildrenOfClient(e)}
                  defaultValue={details.childrenOfClient?.spouse.ssn}
                />
              </p>
            </div>
          </div>
          <hr style={{ border: "1.5px solid black", marginTop: "4rem" }} />
          <br />

          <div className="mt">
            <p>
              {" "}
              <b>This Marriage:</b>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="flex">
                  <p className="mt-3">Date:</p>
                  <input
                    type="text"
                    style={{ borderBottom: "1px solid black" }}
                    onChange={(e) => handleCurrentMarriage(e)}
                    defaultValue={details.thisMarriage?.date}
                  />
                </div>

                <p>
                  {" "}
                  Place:{" "}
                  <input
                    type="text"
                    style={{ width: "30rem" }}
                    onChange={(e) => handleCurrentMarriage(e)}
                    defaultValue={details.thisMarriage?.place}
                  />
                </p>
              </div>
            </p>
          </div>
          <div className="mt-2" style={{ marginLeft: "8rem" }}>
            Registered:{" "}
            <input
              type="text"
              style={{ width: "46rem" }}
              onChange={(e) => handleCurrentMarriage(e)}
              defaultValue={details.thisMarriage?.registered}
            />
          </div>

          <div className="mt">
            <b>Children:</b>
            <div style={{ display: "flex", justifyContent: " space-between" }}>
              <p style={{ marginLeft: "2rem" }} className="mt">
                Name: <br />{" "}
                <input
                  type="text"
                  style={{ width: "15rem" }}
                  onChange={(e) => handleCurrentMarriage(e)}
                  defaultValue={details.thisMarriage?.children.name}
                />
                <br />{" "}
                <input
                  type="text"
                  className="mt"
                  style={{ width: "15rem" }}
                  onChange={(e) => handleCurrentMarriage(e)}
                  defaultValue={details.thisMarriage?.children.name}
                />{" "}
                <br />{" "}
                <input
                  type="text"
                  className="mt"
                  style={{ width: "15rem" }}
                  onChange={(e) => handleCurrentMarriage(e)}
                  defaultValue={details.thisMarriage?.children.name}
                />
              </p>
              <p style={{ marginLeft: "5rem" }} className="mt">
                DOB: <br />{" "}
                <input
                  type="text"
                  style={{ width: "15rem" }}
                  onChange={(e) => handleCurrentMarriage(e)}
                  defaultValue={details.thisMarriage?.children.dob}
                />{" "}
                <input
                  type="text"
                  className="mt"
                  style={{ width: "15rem" }}
                  onChange={(e) => handleCurrentMarriage(e)}
                  defaultValue={details.thisMarriage?.children.dob}
                />{" "}
                <br />{" "}
                <input
                  type="text"
                  className="mt"
                  style={{ width: "15rem" }}
                  onChange={(e) => handleCurrentMarriage(e)}
                  defaultValue={details.thisMarriage?.children.dob}
                />
              </p>
              <p style={{ marginLeft: "5rem" }} className="mt">
                Lives With: <br />{" "}
                <input
                  type="text"
                  style={{ width: "15rem" }}
                  onChange={(e) => handleCurrentMarriage(e)}
                  defaultValue={details.thisMarriage?.children.livesWith}
                />
                <input
                  type="text"
                  className="mt"
                  style={{ width: "15rem" }}
                  onChange={(e) => handleCurrentMarriage(e)}
                  defaultValue={details.thisMarriage?.children.livesWith}
                />{" "}
                <input
                  type="text"
                  className="mt"
                  style={{ width: "15rem" }}
                  onChange={(e) => handleCurrentMarriage(e)}
                  defaultValue={details.thisMarriage?.children.livesWith}
                />
              </p>
            </div>
          </div>

          <div className="mt" style={{ marginLeft: "10rem" }}>
            <p>Currently pregnant? Y / N</p>
            <p className="mt-3">
              Special Problems With Children?{" "}
              <input
                type="text"
                style={{ width: "32rem" }}
                onChange={(e) => handleCurrentMarriage(e)}
                defaultValue={details.thisMarriage?.specialProblems}
              />
            </p>
          </div>

          <div className="mt">
            <p>
              Spouse’s Attorney:{" "}
              <input
                type="text"
                style={{ width: "50.1rem" }}
                onChange={(e) => handleCurrentMarriage(e)}
                defaultValue={details.thisMarriage?.spouseAttorney}
              />
            </p>
            <p style={{ marginLeft: "11rem" }}>
              <input
                type="text"
                style={{ width: "50.2rem" }}
                onChange={(e) => handleCurrentMarriage(e)}
                defaultValue={details.thisMarriage?.spouseAttorney}
              />
            </p>
            <p style={{ marginLeft: "11rem" }}>
              <input
                type="text"
                style={{ width: "50.2rem" }}
                onChange={(e) => handleCurrentMarriage(e)}
                defaultValue={details.thisMarriage?.spouseAttorney}
              />
            </p>
          </div>

          <p className="mt" style={{ marginLeft: "4rem" }}>
            Previous Divorce Actions Commenced Against Present Spouse
          </p>

          <div className="mt" style={{ marginLeft: "4rem" }}>
            <p>
              When:{" "}
              <input
                type="text"
                style={{ width: "20rem" }}
                onChange={(e) => handleCurrentMarriage(e)}
                defaultValue={details.thisMarriage?.previousDivorceActions.when}
              />{" "}
              Where:{" "}
              <input
                type="text"
                style={{ width: "28.4rem" }}
                onChange={(e) => handleCurrentMarriage(e)}
                defaultValue={
                  details.thisMarriage?.previousDivorceActions.where
                }
              />
            </p>
          </div>

          <hr style={{ border: "1.5px solid black", marginTop: "4rem" }} />

          <div className="mt">
            <p>
              How Terminated:{" "}
              <input
                type="text"
                style={{ width: "51.2rem" }}
                onChange={(e) => handleCurrentMarriage(e)}
                defaultValue={
                  details.thisMarriage?.previousDivorceActions.terminated
                }
              />
            </p>
          </div>

          <div className="mt">
            <p>
              {" "}
              <b>Grounds:</b>
              <div
                className="mt"
                style={{ display: "flex", justifyContent: "" }}
              >
                <p className="ml-20">Mental</p>
                <p className="ml-48">Adultery</p>
                <p className="ml-24">Drunkenness</p>
                <p className="ml-40">Physical</p>
              </div>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <p>Desertion</p>
                <p>
                  Other{" "}
                  <input
                    type="text"
                    onChange={(e) => handleCurrentMarriage(e)}
                    defaultValue={details.thisMarriage?.other}
                  />
                </p>
                <p>irreconcilable Differences</p>
              </div>
            </p>
          </div>

          <div className="mt" style={{ marginLeft: "10rem" }}>
            <p>Comments:</p>
            <p className="mt-3">
              <input
                type="text"
                style={{ width: "51rem" }}
                onChange={(e) => handleCurrentMarriage(e)}
                defaultValue={details.thisMarriage?.comments}
              />
            </p>
            <p className="mt-3">
              <input
                type="text"
                style={{ width: "51rem" }}
                onChange={(e) => handleCurrentMarriage(e)}
                defaultValue={details.thisMarriage?.comments}
              />
            </p>
            <p className="mt-3">
              <input
                type="text"
                style={{ width: "51rem" }}
                onChange={(e) => handleCurrentMarriage(e)}
                defaultValue={details.thisMarriage?.comments}
              />
            </p>
          </div>

          <div
            className="mt"
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "80%",
            }}
          >
            <p>Fee Agreement:</p>
            <p>Retainer</p>
            <p>Hourly Rate</p>
            <p>Minimum</p>
            <p>Other</p>
          </div>

          <div className="mt">
            <b>ASSETS:</b>
            <p className="mt" style={{ textDecoration: "underline" }}>
              Martial Residence
            </p>
            <p className="mt">
              Address:{" "}
              <input
                type="text"
                style={{ width: "55rem" }}
                onChange={(e) => handleAssets(e)}
                defaultValue={details.assets?.martialResidence.address}
              />{" "}
            </p>
            <p className="mt">
              Title in whose name(s)?{" "}
              <input
                type="text"
                style={{ width: "46.5rem" }}
                onChange={(e) => handleAssets(e)}
                defaultValue={details.assets?.martialResidence.titleNames}
              />{" "}
            </p>
            <p className="mt">
              Location of title papers:{" "}
              <input
                type="text"
                style={{ width: "46.5rem" }}
                onChange={(e) => handleAssets(e)}
                defaultValue={details.assets?.martialResidence.titleLocation}
              />{" "}
            </p>
            <p className="mt">
              Who made down payment:{" "}
              <input
                type="text"
                style={{ width: "44.5rem" }}
                onChange={(e) => handleAssets(e)}
                defaultValue={
                  details.assets?.martialResidence.downPaymentMadeBy
                }
              />{" "}
            </p>
            <p className="mt">
              Are payments current?
              <input
                type="text"
                style={{ width: "47.1rem" }}
                onChange={(e) => handleAssets(e)}
                defaultValue={details.assets?.martialResidence.paymentsCurrent}
              />
            </p>
            <p className="mt">
              Who makes payments?
              <input
                type="text"
                style={{ width: "46.9rem" }}
                onChange={(e) => handleAssets(e)}
                defaultValue={details.assets?.martialResidence.whoMakesPayments}
              />
            </p>
            <br />
            <div style={{ display: "flex" }}>
              <p>
                When Purchaged:{" "}
                <input
                  type="text"
                  style={{ width: "20rem" }}
                  onChange={(e) => handleAssets(e)}
                  defaultValue={
                    details.assets?.martialResidence.purchaseDetails.when
                  }
                />
              </p>
              <p>
                Price Paid:{" "}
                <input
                  type="text"
                  style={{ width: "23rem" }}
                  onChange={(e) => handleAssets(e)}
                  defaultValue={
                    details.assets?.martialResidence.purchaseDetails.pricePaid
                  }
                />
              </p>
            </div>
            <div className="mt" style={{ display: "flex" }}>
              <p>
                Mortgage payments:{" "}
                <input
                  type="text"
                  style={{ width: "18rem" }}
                  onChange={(e) => handleAssets(e)}
                  defaultValue={
                    details.assets?.martialResidence.mortgagePayments
                  }
                />
              </p>
              <p>
                Approximate yearly taxes:{" "}
                <input
                  type="text"
                  style={{ width: "14.8rem" }}
                  onChange={(e) => handleAssets(e)}
                  defaultValue={details.assets?.martialResidence.yearlyTaxes}
                />
              </p>
            </div>
            <br />
            <p style={{ marginLeft: "10rem" }}>
              (1) Approximate present value:{" "}
              <input
                type="text"
                style={{ width: "32.5rem" }}
                onChange={(e) => handleAssets(e)}
                defaultValue={details.assets?.martialResidence.presentValue}
              />
            </p>
            <p className="mt-2" style={{ marginLeft: "10rem" }}>
              (2) Mortgage balance as of:{" "}
              <input
                type="text"
                style={{ width: "15rem" }}
                onChange={(e) => handleAssets(e)}
                defaultValue={
                  details.assets?.martialResidence.mortgageBalance.asOf
                }
              />
              :<input type="text" style={{ width: "19rem" }} />
            </p>
            <p className="mt-2" style={{ marginLeft: "15rem" }}>
              Estimated Net Value:${" "}
              <input
                type="text"
                style={{ width: "26rem" }}
                onChange={(e) => handleAssets(e)}
                defaultValue={
                  details.assets?.martialResidence.mortgageBalance.balance
                }
              />
              <b style={{ marginLeft: "4rem", textDecoration: "underline" }}>
                Other
              </b>
            </p>
          </div>

          <div className="mt">
            {" "}
            <b style={{ textDecoration: "underline" }}>Real Estate:</b>
            <p className="mt-2">
              Address:
              <input
                type="text"
                style={{ width: "55.5rem" }}
                onChange={(e) => handleAssets(e)}
                defaultValue={details.assets?.realEstate.address}
              />
            </p>
            <p className="mt-2">
              Location of title papers:
              <input
                type="text"
                style={{ width: "47.2rem" }}
                onChange={(e) => handleAssets(e)}
                defaultValue={details.assets?.realEstate.titleLocation}
              />
            </p>
          </div>

          <p style={{ pageBreakAfter: "always" }}></p>
          <p style={{ pageBreakBefore: "always" }}></p>

          <p className="mt">
            Who made the down payment:
            <input
              type="text"
              style={{ width: "43rem" }}
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.realEstate.downPaymentMadeBy}
            />
          </p>
          <p className="mt">
            Who holds mortgage:
            <input
              type="text"
              style={{ width: "48.4rem" }}
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.realEstate.mortgageholds}
            />
          </p>
          <p className="mt">
            Are payments current?
            <input
              type="text"
              style={{ width: "47.5rem" }}
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.realEstate.paymentsCurrent}
            />
          </p>
          <p className="mt">
            Who makes payments:
            <input
              type="text"
              style={{ width: "47.5rem" }}
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.realEstate.whoMakesPayments}
            />
          </p>
          <div>
            <br />
            <p style={{ display: "flex" }}>
              <div>
                <p>
                  Mortgage payments:
                  <input
                    type="text"
                    style={{ width: "18rem" }}
                    onChange={(e) => handleAssets(e)}
                    defaultValue={details.assets?.realEstate.mortagePayments}
                  />
                </p>
              </div>
              <div>
                <p>
                  Approximate yearly taxes:
                  <input
                    type="text"
                    style={{ width: "16rem" }}
                    onChange={(e) => handleAssets(e)}
                    defaultValue={details.assets?.realEstate.yearlyTaxes}
                  />
                </p>
              </div>
            </p>
            <br />
            <p className="mt-3" style={{ marginLeft: "10rem" }}>
              (1) Approximate present value:
              <input
                type="text"
                style={{ width: "33rem" }}
                onChange={(e) => handleAssets(e)}
                defaultValue={details.assets?.realEstate.presentValue}
              />
            </p>
            <p className="mt-3" style={{ marginLeft: "10rem" }}>
              (2) Mortgage balance as of:
              <input
                type="text"
                style={{ width: "15rem" }}
                onChange={(e) => handleAssets(e)}
                defaultValue={details.assets?.realEstate.mortgageBalance.asOf}
              />
              :
              <input
                type="text"
                style={{ width: "19.5rem" }}
                onChange={(e) => handleAssets(e)}
                defaultValue={
                  details.assets?.realEstate.mortgageBalance.balance
                }
              />
            </p>
          </div>
        </div>
        <br />
        <p>If applicable:</p>
        <div style={{ display: "flex" }}>
          <p className="mt-2">
            Gross monthly income:{" "}
            <input
              type="text"
              style={{ width: "18rem" }}
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.realEstate.grossmonthlyIncome}
            />
          </p>
          <p className="mt-2">
            Net monthly income:{" "}
            <input
              type="text"
              style={{ width: "17rem" }}
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.realEstate.netMonthlyIncome}
            />
          </p>
        </div>
        <p className="mt-2">
          Can you furnish an Income-Expense Statement?
          <input
            type="text"
            style={{ width: "33rem" }}
            onChange={(e) => handleAssets(e)}
            defaultValue={details.assets?.realEstate.incomeExpenseStatement}
          />
        </p>
        <p className="mt-2" style={{ marginLeft: "20rem" }}>
          Estimated Net Value:${" "}
          <input
            type="text"
            style={{ width: "27.8rem" }}
            onChange={(e) => handleAssets(e)}
            defaultValue={details.assets?.realEstate.estimatedNetValue}
          />
        </p>

        {/* yaha hu */}

        <p className="mt" style={{ textDecoration: "underline" }}>
          Automobiles
        </p>

        <div className="mt">
          <p className="mt-1">
            Year and Model:{" "}
            <input
              type="text"
              style={{ width: "47.4rem" }}
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.automobiles[0].yearAndModel}
            />{" "}
            Name
          </p>
          <p className="mt-1">
            on Title:{" "}
            <input
              type="text"
              style={{ width: "51rem" }}
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.automobiles[1].nameOnTitle}
            />
            Who has
          </p>
          <p className="mt-1">
            possession:{" "}
            <input
              type="text"
              style={{ width: "54rem" }}
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.automobiles[2].possession}
            />
          </p>
          <p className="mt-1">
            Who holds lien:{" "}
            <input
              type="text"
              style={{ width: "52rem" }}
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.automobiles[3].whoHoldslien}
            />
          </p>
          <p className="mt-1">
            Payments per month:{" "}
            <input
              type="text"
              style={{ width: "46rem" }}
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.automobiles[4].paymentsPerMonth}
            />{" "}
            Who
          </p>
          <p className="mt-1">
            is making payments:{" "}
            <input
              type="text"
              style={{ width: "49rem" }}
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.automobiles[5].whomakingpayments}
            />
          </p>
          <br />
          <p className="mt-1" style={{ marginLeft: "10rem" }}>
            (1) Approximate present value:{" "}
            <input
              type="text"
              style={{ width: "33rem" }}
              onChange={(e) => handleAssets(e)}
              defaultValue={
                details.assets?.automobiles[6].approximatePresentValue
              }
            />
          </p>
        </div>

        <p style={{ marginLeft: "10rem" }}>
          (1) Balance owing on lien as of:{" "}
          <input
            type="text"
            style={{ width: "18rem" }}
            onChange={(e) => handleAssets(e)}
            defaultValue={details.assets?.automobiles[7].balanceOwingOnLien}
          />
          :$
          <input
            type="text"
            style={{ width: "13.5rem" }}
            onChange={(e) => handleAssets(e)}
            defaultValue={details.assets?.automobiles[7].balanceOwingOnLien}
          />
        </p>
        <p style={{ marginLeft: "20rem" }}>
          Estimated Net Value:${" "}
          <input
            type="text"
            style={{ width: "28rem" }}
            onChange={(e) => handleAssets(e)}
            defaultValue={details.assets?.automobiles[8].estimatedNetValue}
          />
        </p>

        <div className="mt">
          <p className="mt-1">
            Year and Model:{" "}
            <input
              type="text"
              style={{ width: "47.4rem" }}
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.automobiles[0].yearAndModel}
            />{" "}
            Name
          </p>
          <p className="mt-1">
            Name on Title:{" "}
            <input
              type="text"
              style={{ width: "50rem" }}
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.automobiles[1].nameOnTitle}
            />
            Who
          </p>
          <p className="mt-1">
            has possession:{" "}
            <input
              type="text"
              style={{ width: "52rem" }}
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.automobiles[2].possession}
            />
          </p>
          <p className="mt-1">
            Who holds lien:{" "}
            <input
              type="text"
              style={{ width: "52.5rem" }}
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.automobiles[3].whoHoldslien}
            />
          </p>
          <p className="mt-1">
            Payments per month:{" "}
            <input
              type="text"
              style={{ width: "49rem" }}
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.automobiles[4].paymentsPerMonth}
            />
          </p>
          <p className="mt-1">
            Who is making payments:{" "}
            <input
              type="text"
              style={{ width: "46.5rem" }}
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.automobiles[5].whomakingpayments}
            />
          </p>
          <br />
          <p className="mt-1" style={{ marginLeft: "10rem" }}>
            (1) Approximate present value:{" "}
            <input
              type="text"
              style={{ width: "33.5rem" }}
              onChange={(e) => handleAssets(e)}
              defaultValue={
                details.assets?.automobiles[6].approximatePresentValue
              }
            />
          </p>
        </div>
        <p style={{ pageBreakAfter: "always" }}></p>
        <p style={{ pageBreakBefore: "always" }}></p>

        <p style={{ marginLeft: "10rem" }}>
          (1) Balance owing on lien as of:{" "}
          <input
            type="text"
            style={{ width: "18rem" }}
            onChange={(e) => handleAssets(e)}
            defaultValue={details.assets?.automobiles[7].balanceOwingOnLien}
          />
          :$
          <input
            type="text"
            style={{ width: "14.5rem" }}
            onChange={(e) => handleAssets(e)}
            defaultValue={details.assets?.automobiles[7].balanceOwingOnLien}
          />
        </p>
        <p style={{ marginLeft: "20rem" }}>
          Estimated Net Value:${" "}
          <input
            type="text"
            style={{ width: "29rem" }}
            onChange={(e) => handleAssets(e)}
            defaultValue={details.assets?.automobiles[8].estimatedNetValue}
          />
        </p>

        <div className="mt">
          <b
            className="mt-4"
            style={{ borderBottom: "1px solid black", width: "11rem" }}
          >
            Stocks and Bonds
          </b>
          <p>
            Ammount,type,company:{" "}
            <input
              type="text"
              style={{ width: "25rem" }}
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.stocksAndBonds[0].amountTypeCompany}
            />{" "}
            Location:{" "}
            <input
              type="text"
              style={{ width: "16rem" }}
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.stocksAndBonds[1].location}
            />
          </p>
          <p className="mt-3">
            Named Owner:{" "}
            <input
              type="text"
              style={{ width: "20rem" }}
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.stocksAndBonds[3].namedOwner}
            />{" "}
            Value as of <input type="number" style={{ width: "10rem" }} />
            :$
            <input
              type="number"
              style={{ width: "14rem" }}
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.stocksAndBonds[4].valueAsOf}
            />
          </p>

          <p className="mt">
            Amount,type,company:{" "}
            <input
              type="text"
              style={{ width: "20rem" }}
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.stocksAndBonds[0].amountTypeCompany}
            />
            Location:{" "}
            <input
              type="text"
              style={{ width: "22rem" }}
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.stocksAndBonds[1].location}
            />
          </p>
          <p className="mt-3">
            Named Owner:{" "}
            <input
              type="text"
              style={{ width: "16rem" }}
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.stocksAndBonds[3].namedOwner}
            />
            Value as of <input type="number" style={{ width: "14rem" }} />
            :${" "}
            <input
              type="text"
              style={{ width: "14rem" }}
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.stocksAndBonds[4].valueAsOf}
            />
          </p>

          <p className="mt">
            Amount,type,company:{" "}
            <input
              type="text"
              style={{ width: "20rem" }}
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.stocksAndBonds[0].amountTypeCompany}
            />
            Location:{" "}
            <input
              type="text"
              style={{ width: "22rem" }}
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.stocksAndBonds[1].location}
            />
          </p>
          <p className="mt-3">
            Named Owner:{" "}
            <input
              type="text"
              style={{ width: "20rem" }}
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.stocksAndBonds[3].namedOwner}
            />
            Value as of <input type="number" style={{ width: "14rem" }} />
            :${" "}
            <input
              type="text"
              style={{ width: "10rem" }}
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.stocksAndBonds[4].valueAsOf}
            />
          </p>
          <p className="mt">
            Amount,type,company:{" "}
            <input
              type="text"
              style={{ width: "20rem" }}
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.stocksAndBonds[0].amountTypeCompany}
            />
            Location:{" "}
            <input
              type="text"
              style={{ width: "22rem" }}
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.stocksAndBonds[1].location}
            />
          </p>

          <p className="mt-3">
            Named Owner:{" "}
            <input
              type="text"
              style={{ width: "20rem" }}
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.stocksAndBonds[3].namedOwner}
            />
            Value as of <input type="number" style={{ width: "14rem" }} />
            :${" "}
            <input
              type="text"
              style={{ width: "10rem" }}
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.stocksAndBonds[4].valueAsOf}
            />
          </p>

          <div className="mt">
            <b style={{ textDecoration: "underline", width: "11rem" }}>
              Insurance Policies
            </b>
            <p className="mt">
              Company:{" "}
              <input
                type="text"
                style={{ width: "55rem" }}
                onChange={(e) => handleAssets(e)}
                defaultValue={details.assets?.insurancePolicies[0].company}
              />
            </p>
            <div className="mt-3" style={{ display: "flex" }}>
              <p>
                Policy Number:{" "}
                <input
                  type="number"
                  style={{ width: "18rem" }}
                  onChange={(e) => handleAssets(e)}
                  defaultValue={
                    details.assets?.insurancePolicies[1].policyNumber
                  }
                />
              </p>
              <p>
                Face Amount:{" "}
                <input
                  type="number"
                  style={{ width: "25.5rem" }}
                  onChange={(e) => handleAssets(e)}
                  defaultValue={details.assets?.insurancePolicies[2].faceAmount}
                />
              </p>
            </div>
            <div className="mt-3" style={{ display: "flex" }}>
              <p>
                Premiums:{" "}
                <input
                  type="text"
                  style={{ width: "18rem" }}
                  onChange={(e) => handleAssets(e)}
                  defaultValue={details.assets?.insurancePolicies[3].premiums}
                />
              </p>
              <p>
                per:{" "}
                <input
                  type="number"
                  style={{ width: "34rem" }}
                  onChange={(e) => handleAssets(e)}
                  defaultValue={details.assets?.insurancePolicies[4].per}
                />
              </p>
            </div>

            <div className="mt-3" style={{ display: "flex" }}>
              <p>
                Owner-{" "}
                <input
                  type="text"
                  style={{ width: "18rem" }}
                  onChange={(e) => handleAssets(e)}
                  defaultValue={details.assets?.insurancePolicies[5].owner}
                />
              </p>
              <p>
                Beneficiary:{" "}
                <input
                  type="number"
                  style={{ width: "31.5rem" }}
                  onChange={(e) => handleAssets(e)}
                  defaultValue={
                    details.assets?.insurancePolicies[6].beneficiary
                  }
                />
              </p>
            </div>
            <p className="mt-3">
              Cash Value:$ <input type="text" style={{ width: "53.1rem" }} />
            </p>
          </div>
        </div>
        <p className="mt">
          Company:{" "}
          <input
            type="text"
            style={{ width: "55rem" }}
            onChange={(e) => handleAssets(e)}
            defaultValue={details.assets?.insurancePolicies[0].company}
          />
        </p>
        <div className="mt-3" style={{ display: "flex" }}>
          <p>
            Policy Number:{" "}
            <input
              type="number"
              style={{ width: "18rem" }}
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.insurancePolicies[1].policyNumber}
            />
          </p>
          <p>
            Face Amount:{" "}
            <input
              type="number"
              style={{ width: "25.5rem" }}
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.insurancePolicies[2].faceAmount}
            />
          </p>
        </div>
        <div className="mt-3" style={{ display: "flex" }}>
          <p>
            Premiums:{" "}
            <input
              type="text"
              style={{ width: "18rem" }}
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.insurancePolicies[3].premiums}
            />
          </p>
          <p>
            per:{" "}
            <input
              type="number"
              style={{ width: "34rem" }}
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.insurancePolicies[4].per}
            />
          </p>
        </div>

        <div className="mt-3" style={{ display: "flex" }}>
          <p>
            Owner-{" "}
            <input
              type="text"
              style={{ width: "18rem" }}
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.insurancePolicies[5].owner}
            />
          </p>
          <p>
            Beneficiary:{" "}
            <input
              type="number"
              style={{ width: "31.5rem" }}
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.insurancePolicies[6].beneficiary}
            />
          </p>
        </div>
        <p className="mt-3">
          Cash Value:$ <input type="text" style={{ width: "53.1rem" }} />
        </p>

        <div className="mt">
          <b style={{ width: "11rem", borderBottom: "1px solid black" }}>
            Safe Deposit Box:
          </b>
          <p className="mt-3">
            Location:{" "}
            <input
              type="text"
              style={{ width: "55.2rem" }}
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.safeDepositBox.location}
            />
          </p>
          <p className="mt-3">
            Names on box:{" "}
            <input
              type="text"
              style={{ width: "51.9rem" }}
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.safeDepositBox.namesOnBox}
            />
          </p>
          <p className="mt-3">
            Who has the key?{" "}
            <input
              type="text"
              style={{ width: "50.2rem" }}
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.safeDepositBox.whoHasTheKey}
            />
          </p>
          <p className="mt-3">
            Contents:{" "}
            <input
              type="text"
              style={{ width: "55rem" }}
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.safeDepositBox.contents}
            />
          </p>
        </div>

        <p style={{ pageBreakAfter: "always" }}></p>
        <p style={{ pageBreakBefore: "always" }}></p>

        <div className="mt">
          <b style={{ width: "11rem", borderBottom: "2px solid black" }}>
            Bank Accounts
          </b>
          <p className="mt-4">
            Location:{" "}
            <input
              type="text"
              style={{ width: "20rem" }}
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.bankAccounts[0].location}
            />{" "}
            Balance as of <input type="text" style={{ width: "15rem" }} />
            :${" "}
            <input
              type="text"
              style={{ width: "10.5rem" }}
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.bankAccounts[1].balanceAsOf}
            />
          </p>
          <p className="mt-4">
            In Whose Name:{" "}
            <input
              type="text"
              style={{ width: "51rem" }}
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.bankAccounts[2].inWhoseName}
            />
          </p>
          <p className="mt-4">
            Who Has Passbook:{" "}
            <input
              type="text"
              style={{ width: "49rem" }}
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.bankAccounts[3].WhohasPassbook}
            />
          </p>
          <p className="mt-4">
            Type of Account:{" "}
            <input
              type="text"
              style={{ width: "51rem" }}
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.bankAccounts[4].typeOfAccount}
            />
          </p>
          <p className="mt-4">
            How Funds Acquired:{" "}
            <input
              type="text"
              style={{ width: "49rem" }}
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.bankAccounts[5].howFundsAcquired}
            />
          </p>

          <p className="mt">
            Location:{" "}
            <input
              type="text"
              style={{ width: "15.5rem" }}
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.bankAccounts[0].location}
            />{" "}
            Balance as of{" "}
            <input
              type="text"
              style={{ width: "15rem" }}
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.bankAccounts[1].balanceAsOf}
            />
            :$ <input type="text" style={{ width: "15rem" }} />
          </p>
          <p className="mt-4">
            In Whose Name:{" "}
            <input
              type="text"
              style={{ width: "51.2rem" }}
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.bankAccounts[2].inWhoseName}
            />
          </p>
          <p className="mt-4">
            Who Has Passbook:{" "}
            <input
              type="text"
              style={{ width: "40rem" }}
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.bankAccounts[3].WhohasPassbook}
            />
          </p>
          <p className="mt-4">
            Type of Account:{" "}
            <input
              type="text"
              style={{ width: "51.2rem" }}
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.bankAccounts[4].typeOfAccount}
            />
          </p>
          <p className="mt-4">
            How Funds Acquired:{" "}
            <input
              type="text"
              style={{ width: "48.5rem" }}
              onChange={(e) => handleAssets(e)}
              defaultValue={details.assets?.bankAccounts[5].howFundsAcquired}
            />
          </p>
        </div>

        <div className="mt">
          <b style={{ borderBottom: "1px solid black", width: "15rem" }}>
            Other Assets in Possession of Client
          </b>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <p className="mt-4" style={{ textAlign: "center" }}>
                Description
              </p>
              <input
                type="text"
                style={{ width: "25rem" }}
                onChange={(e) => handleAssets(e)}
                defaultValue={
                  details.assets?.otherAssetsInPossession[0].description
                }
              />{" "}
              <br />
              <input
                className="mt"
                type="text"
                style={{ width: "25rem" }}
                onChange={(e) => handleAssets(e)}
                defaultValue={
                  details.assets?.otherAssetsInPossession[0].description
                }
              />
            </div>
            <div style={{ marginLeft: "50px" }}>
              <p style={{ textAlign: "center" }}>Estimated Value</p>
              <input
                type="text"
                style={{ width: "25rem" }}
                onChange={(e) => handleAssets(e)}
                defaultValue={
                  details.assets?.otherAssetsInPossession[1].estimatedValue
                }
              />{" "}
              <br />
              <input
                className="mt"
                type="text"
                style={{ width: "25rem" }}
                onChange={(e) => handleAssets(e)}
                defaultValue={
                  details.assets?.otherAssetsInPossession[1].estimatedValue
                }
              />
            </div>
          </div>
        </div>

        <div className="mt">
          <b style={{ borderBottom: "1px solid black", width: "15rem" }}>
            Client's Non-Marital Property
          </b>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <p className="mt-4" style={{ textAlign: "center" }}>
                Description
              </p>
              <input
                type="text"
                style={{ width: "25rem" }}
                onChange={(e) => handleAssets(e)}
                defaultValue={
                  details.assets?.clientsNonMaritalProperty[0].description
                }
              />{" "}
              <br />
              <input
                className="mt"
                type="text"
                style={{ width: "25rem" }}
                onChange={(e) => handleAssets(e)}
                defaultValue={
                  details.assets?.clientsNonMaritalProperty[0].description
                }
              />
            </div>
            <div style={{ marginLeft: "50px" }}>
              <p className="mt-4" style={{ textAlign: "center" }}>
                Estimated Value
              </p>
              <input
                type="text"
                style={{ width: "25rem" }}
                onChange={(e) => handleAssets(e)}
                defaultValue={
                  details.assets?.clientsNonMaritalProperty[1].estimatedValue
                }
              />{" "}
              <br />
              <input
                className="mt"
                type="text"
                style={{ width: "25rem" }}
                onChange={(e) => handleAssets(e)}
                defaultValue={
                  details.assets?.clientsNonMaritalProperty[1].estimatedValue
                }
              />
            </div>
          </div>
        </div>

        <div className="mt">
          <b style={{ borderBottom: "1px solid black", width: "11rem" }}>
            Pension Plans
          </b>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: " center",
            }}
          >
            <div>
              <input
                type="text"
                className="mt"
                style={{ width: "25rem" }}
                onChange={(e) => handleAssets(e)}
                defaultValue={details.assets?.pensionPlans[0].description}
              />{" "}
              <br />
              <input
                className="mt"
                type="text"
                style={{ width: "25rem" }}
                onChange={(e) => handleAssets(e)}
                defaultValue={details.assets?.pensionPlans[0].description}
              />
            </div>
            <div style={{ marginLeft: "50px" }}>
              <input
                type="text"
                style={{ width: "25rem" }}
                onChange={(e) => handleAssets(e)}
                defaultValue={details.assets?.pensionPlans[0].estimatedValue}
              />{" "}
              <br />
              <input
                className="mt"
                type="text"
                style={{ width: "25rem" }}
                onChange={(e) => handleAssets(e)}
                defaultValue={details.assets?.pensionPlans[0].estimatedValue}
              />
            </div>
          </div>
        </div>

        <hr style={{ border: " 1.5px solid black", marginTop: "4rem" }} />
        <p style={{ pageBreakAfter: "always" }}></p>
        <p style={{ pageBreakBefore: "always" }}></p>

        <div className="mt">
          <b>LIABILITIES</b>
          <p
            className="mt"
            style={{ textDecoration: "underline", width: "14rem" }}
          >
            Credit Card Debt
          </p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <p className="mt-2">To Whom Owed</p>
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={details.liabilities?.creditCardDebt.toWhomOwed}
              />
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={details.liabilities?.creditCardDebt.toWhomOwed}
              />
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={details.liabilities?.creditCardDebt.toWhomOwed}
              />
            </div>

            <div>
              <p className="mt-2">For What?</p>
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={details.liabilities?.creditCardDebt.forWhat}
              />
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={details.liabilities?.creditCardDebt.forWhat}
              />
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={details.liabilities?.creditCardDebt.forWhat}
              />
            </div>

            <div>
              <p className="mt-2">Monthly Payment</p>
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={
                  details.liabilities?.creditCardDebt.monthlyPayment
                }
              />
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={
                  details.liabilities?.creditCardDebt.monthlyPayment
                }
              />
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={
                  details.liabilities?.creditCardDebt.monthlyPayment
                }
              />
            </div>

            <div>
              <p className="mt-2">Balance as of...</p>
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={details.liabilities?.creditCardDebt.balanceAsOf}
              />
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={details.liabilities?.creditCardDebt.balanceAsOf}
              />
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={details.liabilities?.creditCardDebt.balanceAsOf}
              />
            </div>
          </div>

          <p
            className="mt"
            style={{ textDecoration: "underline", width: "11rem" }}
          >
            Personal Loans:
          </p>
          <div style={{ display: "flex", justifyContent: " space-between" }}>
            <div>
              <p className="mt-2">To Whom Owed</p>
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={details.liabilities?.personalLoans.toWhomOwed}
              />
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={details.liabilities?.personalLoans.toWhomOwed}
              />
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={details.liabilities?.personalLoans.toWhomOwed}
              />
            </div>

            <div>
              <p className="mt-2">For What?</p>
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={details.liabilities?.personalLoans.forWhat}
              />
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={details.liabilities?.personalLoans.forWhat}
              />
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={details.liabilities?.personalLoans.forWhat}
              />
            </div>

            <div className="mt-2">
              <p>Monthly Payment</p>
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={details.liabilities?.personalLoans.monthlyPayment}
              />
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={details.liabilities?.personalLoans.monthlyPayment}
              />
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={details.liabilities?.personalLoans.monthlyPayment}
              />
            </div>

            <div>
              <p className="mt-2">Balance as of...</p>
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={details.liabilities?.personalLoans.balanceAsOf}
              />
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={details.liabilities?.personalLoans.balanceAsOf}
              />
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={details.liabilities?.personalLoans.balanceAsOf}
              />
            </div>
          </div>

          <p
            className="mt"
            style={{ textDecoration: "underline", width: "12rem" }}
          >
            Automobile Loans:
          </p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <p className="mt-2">To Whom Owed</p>
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={details.liabilities?.automobileLoans.toWhomOwed}
              />
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={details.liabilities?.automobileLoans.toWhomOwed}
              />
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={details.liabilities?.automobileLoans.toWhomOwed}
              />
            </div>

            <div>
              <p className="mt-2">For What?</p>
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={details.liabilities?.automobileLoans.forWhat}
              />
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={details.liabilities?.automobileLoans.forWhat}
              />
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={details.liabilities?.automobileLoans.forWhat}
              />
            </div>

            <div>
              <p className="mt-2">Monthly Payment</p>
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={
                  details.liabilities?.automobileLoans.monthlyPayment
                }
              />
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={
                  details.liabilities?.automobileLoans.monthlyPayment
                }
              />
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={
                  details.liabilities?.automobileLoans.monthlyPayment
                }
              />
            </div>

            <div>
              <p className="mt-2">Balance as of...</p>
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={details.liabilities?.automobileLoans.balanceAsOf}
              />
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={details.liabilities?.automobileLoans.balanceAsOf}
              />
              <input
                type="text"
                style={{ width: "13rem" }}
                className="mt-[1rem]"
                onChange={(e) => handleLiabilities(e)}
                defaultValue={details.liabilities?.automobileLoans.balanceAsOf}
              />
            </div>
          </div>
        </div>
        <p
          className="mt"
          style={{ textDecoration: "underline", width: "30rem" }}
        >
          Mortgage Loans (Second Mortgage if Applicable)
        </p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <p className="mt-2">To Whom Owed</p>
            <input
              type="text"
              style={{ width: "13rem" }}
              className="mt-[1rem]"
              onChange={(e) => handleLiabilities(e)}
              defaultValue={details.liabilities?.mortgageLoans.toWhomOwed}
            />
            <input
              type="text"
              style={{ width: "13rem" }}
              className="mt-[1rem]"
              onChange={(e) => handleLiabilities(e)}
              defaultValue={details.liabilities?.mortgageLoans.toWhomOwed}
            />
            <input
              type="text"
              style={{ width: "13rem" }}
              className="mt-[1rem]"
              onChange={(e) => handleLiabilities(e)}
              defaultValue={details.liabilities?.mortgageLoans.toWhomOwed}
            />
          </div>

          <div>
            <p className="mt-2">For What?</p>
            <input
              type="text"
              style={{ width: "13rem" }}
              className="mt-[1rem]"
              onChange={(e) => handleLiabilities(e)}
              defaultValue={details.liabilities?.mortgageLoans.forWhat}
            />
            <input
              type="text"
              style={{ width: "13rem" }}
              className="mt-[1rem]"
              onChange={(e) => handleLiabilities(e)}
              defaultValue={details.liabilities?.mortgageLoans.forWhat}
            />
            <input
              type="text"
              style={{ width: "13rem" }}
              className="mt-[1rem]"
              onChange={(e) => handleLiabilities(e)}
              defaultValue={details.liabilities?.mortgageLoans.forWhat}
            />
          </div>

          <div>
            <p className="mt-2">Monthly Payment</p>
            <input
              type="text"
              style={{ width: "13rem" }}
              className="mt-[1rem]"
              onChange={(e) => handleLiabilities(e)}
              defaultValue={details.liabilities?.mortgageLoans.monthlyPayment}
            />
            <input
              type="text"
              style={{ width: "13rem" }}
              className="mt-[1rem]"
              onChange={(e) => handleLiabilities(e)}
              defaultValue={details.liabilities?.mortgageLoans.monthlyPayment}
            />
            <input
              type="text"
              style={{ width: "13rem" }}
              className="mt-[1rem]"
              onChange={(e) => handleLiabilities(e)}
              defaultValue={details.liabilities?.mortgageLoans.monthlyPayment}
            />
          </div>

          <div>
            <p className="mt-2">Balance as of...</p>
            <input
              type="text"
              style={{ width: "13rem" }}
              className="mt-[1rem]"
              onChange={(e) => handleLiabilities(e)}
              defaultValue={details.liabilities?.mortgageLoans.balanceAsOf}
            />
            <input
              type="text"
              style={{ width: "13rem" }}
              className="mt-[1rem]"
              onChange={(e) => handleLiabilities(e)}
              defaultValue={details.liabilities?.mortgageLoans.balanceAsOf}
            />
            <input
              type="text"
              style={{ width: "13rem" }}
              className="mt-[1rem]"
              onChange={(e) => handleLiabilities(e)}
              defaultValue={details.liabilities?.mortgageLoans.balanceAsOf}
            />
          </div>
        </div>

        <p
          className="mt"
          style={{ textDecoration: "underline", width: "10rem" }}
        >
          Other Debt:
        </p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <p className="mt-2">To Whom Owed</p>
            <input
              type="text"
              style={{ width: "13rem" }}
              className="mt-[1rem]"
              onChange={(e) => handleLiabilities(e)}
              defaultValue={details.liabilities?.otherDebt.toWhomOwed}
            />
            <input
              type="text"
              style={{ width: "13rem" }}
              className="mt-[1rem]"
              onChange={(e) => handleLiabilities(e)}
              defaultValue={details.liabilities?.otherDebt.toWhomOwed}
            />
            <input
              type="text"
              style={{ width: "13rem" }}
              className="mt-[1rem]"
              onChange={(e) => handleLiabilities(e)}
              defaultValue={details.liabilities?.otherDebt.toWhomOwed}
            />
          </div>

          <div>
            <p className="mt-2">For What?</p>
            <input
              type="text"
              style={{ width: "13rem" }}
              className="mt-[1rem]"
              onChange={(e) => handleLiabilities(e)}
              defaultValue={details.liabilities?.otherDebt.forWhat}
            />
            <input
              type="text"
              style={{ width: "13rem" }}
              className="mt-[1rem]"
              onChange={(e) => handleLiabilities(e)}
              defaultValue={details.liabilities?.otherDebt.forWhat}
            />
            <input
              type="text"
              style={{ width: "13rem" }}
              className="mt-[1rem]"
              onChange={(e) => handleLiabilities(e)}
              defaultValue={details.liabilities?.otherDebt.forWhat}
            />
          </div>

          <div>
            <p className="mt-2">Monthly Payment</p>
            <input
              type="text"
              style={{ width: "13rem" }}
              className="mt-[1rem]"
              onChange={(e) => handleLiabilities(e)}
              defaultValue={details.liabilities?.otherDebt.monthlyPayment}
            />
            <input
              type="text"
              style={{ width: "13rem" }}
              className="mt-[1rem]"
              onChange={(e) => handleLiabilities(e)}
              defaultValue={details.liabilities?.otherDebt.monthlyPayment}
            />
            <input
              type="text"
              style={{ width: "13rem" }}
              className="mt-[1rem]"
              onChange={(e) => handleLiabilities(e)}
              defaultValue={details.liabilities?.otherDebt.monthlyPayment}
            />
          </div>

          <div>
            <p className="mt-2">Balance as of...</p>
            <input
              type="text"
              style={{ width: "13rem" }}
              className="mt-[1rem]"
              onChange={(e) => handleLiabilities(e)}
              defaultValue={details.liabilities?.otherDebt.balanceAsOf}
            />
            <input
              type="text"
              style={{ width: "13rem" }}
              className="mt-[1rem]"
              onChange={(e) => handleLiabilities(e)}
              defaultValue={details.liabilities?.otherDebt.balanceAsOf}
            />
            <input
              type="text"
              style={{ width: "13rem" }}
              className="mt-[1rem]"
              onChange={(e) => handleLiabilities(e)}
              defaultValue={details.liabilities?.otherDebt.balanceAsOf}
            />
          </div>
        </div>

        <p className="mt-8" style={{ marginLeft: "20rem" }}>
          Total:{" "}
          <input
            type="text"
            style={{ width: "15rem" }}
            defaultValue={details.liabilities?.total.husband}
          />{" "}
          <input
            type="text"
            style={{ width: "15rem", marginLeft: "40px" }}
            onChange={(e) => handleLiabilities(e)}
            defaultValue={details.liabilities?.total.wife}
          />
        </p>

        <p style={{ pageBreakAfter: "always" }}></p>
        <p style={{ pageBreakBefore: "always" }}></p>

        <hr style={{ border: "1.5px solid black", marginTop: " 4rem" }} />

        <b className="mt">ISSUES TO ADDRESS:</b>

        <div
          className="mt"
          style={{
            display: " flex",
            justifyContent: "space-between",
            width: "55rem",
          }}
        >
          <p>Maiden name restored: </p>
          <p> Y/N </p>
          <p>
            {" "}
            Maiden Name:{" "}
            <input
              type="text"
              style={{ width: "20rem" }}
              onChange={(e) => handleIssuesToAddress(e)}
              defaultValue={
                details.issuesToAddress?.maidenNameRestored.maidenName
              }
            />{" "}
          </p>
        </div>
        <br />
        <div
          className="mt"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "25rem",
          }}
        >
          <p>Custody: </p>
          <p>JOINT</p>
          <p>H</p>
          <p>W</p>
        </div>
        <br />
        <div
          className="mt"
          style={{
            display: " flex",
            justifyContent: " space-between",
            width: "25rem",
          }}
        >
          <p>Physical Custody: </p>
          <p>H</p>
          <p>W</p>
        </div>
        <br />
        <div
          className="mt"
          style={{
            display: " flex",
            justifyContent: " space-between",
            width: "55rem",
          }}
        >
          <p>Maintenance: </p>
          <p>Y</p>
          <p>N</p>
          <p>
            how much ${" "}
            <input
              type="text"
              style={{ width: "11rem" }}
              onChange={(e) => handleIssuesToAddress(e)}
              defaultValue={details.issuesToAddress?.maintenance.howMuch}
            />
          </p>
        </div>
        <br />
        <div
          className="mt"
          style={{
            display: " flex",
            justifyContent: " space-between",
            width: "69rem",
          }}
        >
          <p>Child Support: </p>
          <p>Y</p>
          <p>N</p>
          <p>
            how much ${" "}
            <input
              type="text"
              style={{ width: "11rem" }}
              onChange={(e) => handleIssuesToAddress(e)}
              defaultValue={details.issuesToAddress?.childSupport.howMuch}
            />
            deviate from statute:Y/N
          </p>
        </div>
        <br />
        <p>Attorney Fees:</p>
        <div
          className="mt"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "30rem",
            marginLeft: "20rem",
          }}
        >
          <p>Interim/Final: </p>
          <p>H</p>
          <p>W</p>
          <p>Each party pays own</p>
        </div>
        <br />
        <div
          className="mt"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "25rem",
            marginLeft: "20rem",
          }}
        >
          <p>Petition for fees?: </p>
          <p>Y</p>
          <p>N</p>
        </div>
        <br />
        <div
          className="mt"
          style={{
            display: " flex",
            justifyContent: "space-between",
            width: "29rem",
          }}
        >
          <p>Dissipation: </p>
          <p>Y</p>
          <p>N</p>
        </div>
        <br />
        <div
          className="mt"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "65rem",
          }}
        >
          <p>Exclusive possession of marital residence: </p>
          <p>Y</p>
          <p>N</p>
          <p>for</p>
          <p>H</p>
          <p>W</p>
        </div>
        <br />
        <div
          className="mt"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "30rem",
          }}
        >
          <p>File Counter-Petition: </p>
          <p>Y</p>
          <p>N</p>
        </div>

        <hr style={{ border: " 1.5px solid black", marginTop: " 4rem" }} />
        <p style={{ pageBreakAfter: "always" }}></p>
        <p style={{ pageBreakBefore: "always" }}></p>

        <div className="mt" style={{ width: "80%", margin: "auto" }}>
          <b className="mt w-full text-lg block text-center ">
            SETTLEMENT NOTES
          </b>
          <br />
          <input
            type="text"
            style={{ width: "60rem" }}
            className="mt"
            onChange={(e) => handleSettlementNotes(e)}
            defaultValue={details.settlementNotes}
          />

          <br />
          <input
            type="text"
            style={{ width: "60rem" }}
            className="mt"
            onChange={(e) => handleSettlementNotes(e)}
            defaultValue={details.settlementNotes}
          />
          <br />
          <input
            type="text"
            style={{ width: "60rem" }}
            className="mt"
            onChange={(e) => handleSettlementNotes(e)}
            defaultValue={details.settlementNotes}
          />
          <br />
          <input
            type="text"
            style={{ width: "60rem" }}
            className="mt"
            onChange={(e) => handleSettlementNotes(e)}
            defaultValue={details.settlementNotes}
          />
          <br />
          <input
            type="text"
            style={{ width: "60rem" }}
            className="mt"
            onChange={(e) => handleSettlementNotes(e)}
            defaultValue={details.settlementNotes}
          />
          <br />
          <input
            type="text"
            style={{ width: "60rem" }}
            className="mt"
            onChange={(e) => handleSettlementNotes(e)}
            defaultValue={details.settlementNotes}
          />
          <br />
          <input
            type="text"
            style={{ width: "60rem" }}
            className="mt"
            onChange={(e) => handleSettlementNotes(e)}
            defaultValue={details.settlementNotes}
          />
          <br />
          <input
            type="text"
            style={{ width: "60rem" }}
            className="mt"
            onChange={(e) => handleSettlementNotes(e)}
            defaultValue={details.settlementNotes}
          />
          <br />
          <input
            type="text"
            style={{ width: "60rem" }}
            className="mt"
            onChange={(e) => handleSettlementNotes(e)}
            defaultValue={details.settlementNotes}
          />
          <br />
          <input
            type="text"
            style={{ width: "60rem" }}
            className="mt"
            onChange={(e) => handleSettlementNotes(e)}
            defaultValue={details.settlementNotes}
          />
          <br />
          <input
            type="text"
            style={{ width: "60rem" }}
            className="mt"
            onChange={(e) => handleSettlementNotes(e)}
            defaultValue={details.settlementNotes}
          />
          <br />
          <input
            type="text"
            style={{ width: "60rem" }}
            className="mt"
            onChange={(e) => handleSettlementNotes(e)}
            defaultValue={details.settlementNotes}
          />
          <br />
          <input
            type="text"
            style={{ width: "60rem" }}
            className="mt"
            onChange={(e) => handleSettlementNotes(e)}
            defaultValue={details.settlementNotes}
          />
          <br />
          <input
            type="text"
            style={{ width: "60rem" }}
            className="mt"
            onChange={(e) => handleSettlementNotes(e)}
            defaultValue={details.settlementNotes}
          />
          <br />
          <input
            type="text"
            style={{ width: "60rem" }}
            className="mt"
            onChange={(e) => handleSettlementNotes(e)}
            defaultValue={details.settlementNotes}
          />
          <br />
          <input
            type="text"
            style={{ width: "60rem" }}
            className="mt"
            onChange={(e) => handleSettlementNotes(e)}
            defaultValue={details.settlementNotes}
          />
          <br />
          <input
            type="text"
            style={{ width: "60rem" }}
            className="mt"
            onChange={(e) => handleSettlementNotes(e)}
            defaultValue={details.settlementNotes}
          />
          <br />
          <input
            type="text"
            style={{ width: "60rem" }}
            className="mt"
            onChange={(e) => handleSettlementNotes(e)}
            defaultValue={details.settlementNotes}
          />
          <br />
          <input
            type="text"
            style={{ width: "60rem" }}
            className="mt"
            onChange={(e) => handleSettlementNotes(e)}
            defaultValue={details.settlementNotes}
          />
          <br />
          <input
            type="text"
            style={{ width: "60rem" }}
            className="mt"
            onChange={(e) => handleSettlementNotes(e)}
            defaultValue={details.settlementNotes}
          />
        </div>
        <div
          style={{
            width: "9%",
            margin: "auto",
            marginTop: "24px",
            height: "40px",
          }}
        >
          <button
            style={{
              backgroundColor: " rgb(62, 62, 170)",
              color: "white",
              padding: "4px",
              paddingLeft: "30px",
              paddingRight: "30px",
              cursor: "pointer",
              borderRadius: "30%",
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
