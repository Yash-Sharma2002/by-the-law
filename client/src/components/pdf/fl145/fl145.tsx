import React from "react";
import FL145Interface from "./SU145";

export default function FL145() {
  const [details, setDetails] = React.useState<FL145Interface>(
    {} as FL145Interface
  );

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

  function handleFormInterrogatoriesFamilyLaw(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setDetails({
      ...details,
      FormInterrogatoriesFamilyLaw: {
        ...details.FormInterrogatoriesFamilyLaw,
        [e.target.name]: e.target.value,
      },
    });
  }

  function handleInstructionsToTheAskingParty(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setDetails({
      ...details,
      InstructionsToTheAskingParty: {
        ...details.InstructionsToTheAskingParty,
        [e.target.name]: e.target.value === "on" ? true : false,
      },
    });
  }


  console.log(details);
  // console.log(checked)

  return (
    <div style={{ maxWidth: "1100px", margin: "auto", fontSize: 12 }}>
      <div>
        <h3
          style={{
            display: "flex",
            justifyContent: "end",
            marginTop: "1rem",
            marginBottom: "0px",
          }}
        >
          FL-145
        </h3>
        <table
          style={{
            width: "95%",
            border: "2px solid black",
            borderCollapse: "collapse",
          }}
        >
          <tbody>
            <tr>
              <td
                style={{
                  width: "70%",
                  border: "2px solid black",
                  borderCollapse: "collapse",
                }}
                colSpan={2}
              >
                <div>
                  <div style={{ display: "flex" }}>
                    <div>
                      <label>
                        ATTORNEY OR PARTY WITHOUT ATTORNEY (Name, State Bar number,
                        and address):
                      </label> <br />
                      <input
                        name={"AttorneyOrPartyWithoutAttorney"}
                        onChange={(e) => handleChange(e)}
                        size={97}
                        style={{
                          backgroundColor: "rgb(225, 243, 243)",
                          border: "none",
                          margin: "0.25rem 0.3rem",
                        }}
                        type="text" />
                    </div>
                    <div style={{ marginLeft: "0rem" }}>
                      <label htmlFor="telephone">
                        TELEPHONE NO.:
                      </label> <br />
                      <input
                        name={"AttorneyOrPartyWithoutAttorney"}
                        onChange={(e) => handleChange(e)}
                        size={65}
                        style={{
                          backgroundColor: "rgb(225, 243, 243)",
                          border: "none",
                          marginTop: "0.25rem"
                        }}
                        type="text" />
                    </div>
                  </div>

                  <textarea
                    name={"AttorneyOrPartyWithoutAttorney"}
                    onChange={(e) => handleChange(e)}
                    style={{
                      backgroundColor: "rgb(225, 243, 243)",
                      border: "none",
                      width: "99%",
                      resize: "none",
                      marginLeft: "0.3rem"
                    }}
                    id=""
                    rows={3}
                  ></textarea>
                </div>
                <div style={{ marginTop: "0.2rem", padding: "0.3rem" }}>
                  <label htmlFor="attorney">ATTORNEY FOR (name):</label>
                  <input
                    name={"AttorneyFor"}
                    onChange={(e) => handleChange(e)}
                    size={147}

                    style={{
                      backgroundColor: "rgb(225, 243, 243)",
                      border: "none",
                    }}
                    type="text"
                    id="attorney"
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  width: "70%",
                  border: "2px solid black",
                  borderCollapse: "collapse",
                  padding: "0.3rem"
                }}
                colSpan={2}>
                <div>
                    <div className='mt-1 flex justify-end items-center'>
                    <label htmlFor="street" style={{ fontSize: "10px" }}>Answering Party:</label>
                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px 2px", height: "18px", width: "79.7%" }}
                      type="text" id="street" />
                  </div>
                  <div className='mt-1 flex justify-end items-center'>
                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px 2px", height: "18px", width: "100%" }}
                      type="text" id="street" />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td style={{
                width: "70%",
                border: "2px solid black",
                borderCollapse: "collapse",
              }} colSpan={3}>                
              <label htmlFor="">SHORT TITLE:</label>
                <textarea
                  name={"ShortTitle"}
                  onChange={(e) => handleChange(e)}
                  style={{
                    marginLeft: "1rem",
                    backgroundColor: "rgb(225, 243, 243)",
                    border: "none",
                    width:"91%",
                    resize:"none"
                  }}
                  rows={2}
                  defaultValue={""}
                />
              </td>
            </tr>
            <tr>
              <td style={{
                width: "70%",
                border: "2px solid black",
                borderCollapse: "collapse",
              }}>
                <div style={{ textAlign: "center", fontSize: "1.25rem" }}>
                  <label htmlFor="">
                    <b>FORM INTERROGATORIES–FAMILY LAW</b>
                  </label>
                </div>
                <div style={{ fontSize: "1.15rem" }}>
                  <div className='mt-1 flex justify-end items-center'>
                    <label htmlFor="street" style={{ fontSize: "10px" }}>MAILING ADDRESS:</label>
                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px 2px", height: "18px", width: "79.7%" }}
                      type="text" id="street" />
                  </div>

                  <div className='mt-1 flex justify-end items-center'>
                    <label htmlFor="street" style={{ fontSize: "10px" }}>Answering Party:</label>
                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px 2px", height: "18px", width: "79.7%" }}
                      type="text" id="street" />
                  </div>

                  <div className='mt-1 flex justify-end items-center'>
                    <label htmlFor="street" style={{ fontSize: "10px" }}>Set No.:</label>
                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px 2px", height: "18px", width: "79.7%" }}
                      type="text" id="street" />
                  </div>

                </div>
              </td>
              <td>
                <div>
                  <label style={{ marginLeft: "0.3rem", display: "flex", alignItems: "flex-start" }} htmlFor="street">CASE NUMBER:</label>
                  <br />
                  <input
                    name={"CaseNumber"}
                    onChange={(e) => handleChange(e)}
                    size={38}
                    style={{
                      backgroundColor: "rgb(225, 243, 243)",
                      border: "none",
                      margin: "2px 5px"
                    }}
                    type="text"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div style={{ display: "flex", width: "100%", fontSize: 12, marginTop: "0.4rem" }}>
          <div style={{ width: "65%" }}>
            <div>
              <label htmlFor="">
                <b>Sec. 1. Instructions to Both Parties</b>
              </label>

              <div style={{ marginTop: "0.2rem" }}>
                The interrogatories on page 2 of this form are intended to
                <br />
                provide for the exchange of relevant information without <br />
                unreasonable expense to the answering party. They do not <br />
                change existing law relating to interrogatories, nor do they
                <br />
                affect the answering party’s right to assert any privilege or
                <br />
                make any objection. <b>Privileges must be asserted.</b>
              </div>
            </div>

            <div style={{ marginTop: "0.3rem" }}>
              <label htmlFor="">
                <b>Sec. 2. Definitions</b>
              </label>

              <div style={{ marginTop: "0.2rem" }}>
                Words in boldface in these interrogatories are defined as <br />{" "}
                follows:
              </div>
              <div style={{ marginTop: "0.2rem" }}>
                <div style={{ display: "flex", marginTop: "0.2rem" }}>
                  <label htmlFor="">(a)</label>
                  <div style={{ marginLeft: "1rem" }}>
                    <b>Person</b> includes a natural person; a partnership; any
                    kind of <br />
                    business, legal, or public entity; and its agents or
                    employees.
                  </div>
                </div>
                <div style={{ display: "flex", marginTop: "0.2rem" }}>
                  <label htmlFor="">(b)</label>
                  <div style={{ marginLeft: "1rem" }}>
                    <b>Document</b> means all written, recorded,or graphic
                    materials, <br /> however stored, produced, or reproduced.
                  </div>
                </div>
                <div style={{ display: "flex", marginTop: "0.2rem" }}>
                  <label htmlFor="">(c)</label>
                  <div style={{ marginLeft: "1rem" }}>
                    <b>Asset</b> or <b>property</b> includes any interest in
                    real <br /> estate or personal property. It includes any
                    interest in a <br /> pension, profit-sharing, or retirement
                    plan.
                  </div>
                </div>
                <div style={{ display: "flex", marginTop: "0.2rem" }}>
                  <label htmlFor="">(d)</label>
                  <div style={{ marginLeft: "1rem" }}>
                    <b>Debt</b> means any obligation, including debts paid since{" "}
                    <br />
                    the date of separation.
                  </div>
                </div>
                <div style={{ display: "flex", marginTop: "0.2rem" }}>
                  <label htmlFor="">(e)</label>
                  <div style={{ marginLeft: "1rem" }}>
                    <b>Support</b> means any benefit or economic contribution{" "}
                    <br /> to the living expenses of another person, including
                    gifts.
                  </div>
                </div>
                <div style={{ display: "flex", marginTop: "0.2rem" }}>
                  <label htmlFor="">(f)</label>
                  <div style={{ marginLeft: "1rem" }}>
                    If asked to <b>identify a person,</b> give the person’s{" "}
                    <br /> name, last known residence and business addresses,{" "}
                    <br />
                    telephone numbers, and company affiliation at the date of
                    the transaction referred to.
                  </div>
                </div>
                <div style={{ display: "flex", marginTop: "0.2rem" }}>
                  <label htmlFor="">(g)</label>
                  <div style={{ marginLeft: "1rem" }}>
                    If asked to <b>identify a document,</b> attach a copy of the{" "}
                    <br /> document unless you explain why not. If you do not
                    attach the copy, describe the document, including its date
                    and nature, and give the name, address, telephone number,
                    and <br />
                    occupation of the person who has the document.
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: "0.4rem" }}>
              <label htmlFor="">
                <b>Sec. 3. Instructions to the Asking Party</b>
              </label>

              <div style={{ marginTop: "0.2rem" }}>
                Check the box next to each interrogatory you want the <br />
                answering party to answer.
              </div>
            </div>
          </div>
          <div style={{ width: "65%", marginLeft: "3rem" }}>
            <div>
              <label htmlFor="">
                <b>Sec. 4. Instructions to the Answering Party</b>
              </label>

              <div style={{ marginTop: "0.3rem" }}>
                <div>
                  You must answer these interrogatories under oath within 30{" "}
                  <br /> days, in accordance with Code of Civil Procedure
                  section <br />
                  2030.260.
                </div>
                <div style={{ marginTop: "0.2rem" }}>
                  You must furnish all information you have or can reasonably{" "}
                  <br /> find out, including all information (not privileged)
                  from your <br /> attorneys or under your control. If you don’t
                  know, say so.
                </div>
                <div style={{ marginTop: "0.2rem" }}>
                  If an interrogatory is answered by referring to a document,
                  the <br />
                  document must be attached as an exhibit to the response and{" "}
                  <br />
                  referred to in the response. If the document has more than one{" "}
                  <br />
                  page, refer to the page and section where the answer can be{" "}
                  <br />
                  found.
                </div>
                <div style={{ marginTop: "0.2rem" }}>
                  If a document to be attached to the response may also be{" "}
                  <br />
                  attached to the Schedule of Assets and Debts (form FL-142),{" "}
                  <br />
                  the document should be attached only to the response, and{" "}
                  <br />
                  the form should refer to the response.
                </div>
                <div style={{ marginTop: "0.2rem" }}>
                  If an interrogatory cannot be answered completely, answer{" "}
                  <br />
                  as much as you can, state the reason you cannot answer the{" "}
                  <br />
                  rest, and state any information you have about the unanswered{" "}
                  <br />
                  portion.
                </div>
              </div>
            </div>

            <div style={{ marginTop: "0.4rem" }}>
              <label htmlFor="">
                <b>Sec. 5. Oath</b>
              </label>

              <div style={{ marginTop: "0.3rem" }}>
                Your answers to these interrogatories must be under oath, <br />
                dated, and signed. Use the following statement <b>
                  at the end
                </b>{" "}
                <br />
                <b>of your answers:</b>
              </div>
              <div style={{ marginTop: "0.3rem", marginLeft: "1rem" }}>
                <i>
                  I declare under penalty of perjury under the laws of the{" "}
                  <br />
                  State of California that the foregoing answers are true and{" "}
                  <br />
                  correct.
                </i>
              </div>
            </div>
            <table
              style={{
                width: "100%",
                border: "none",
                marginTop: "4rem",
                fontSize: "1.15rem",
              }}
            >
              <tbody>
                <tr>
                  <td
                    style={{
                      width: "50%",
                      border: "none",
                      textAlign: "center",
                    }}
                  >
                    <div>
                      <input
                        name={"Date"}
                        onChange={(e) => handleChange(e)}
                        style={{
                          width: "90%",
                          backgroundColor: "rgb(225, 243, 243)",
                          border: "none",
                        }}
                        type="text"
                      />
                    </div>
                    <div style={{ fontSize: "0.8rem" }}>
                      <label htmlFor="">(DATE)</label>
                    </div>
                  </td>
                  <td style={{ border: "none" }}>
                    <div style={{ textAlign: "center" }}>
                      <span>⯈</span> ______________________
                    </div>
                    <div style={{ textAlign: "center", fontSize: "0.8rem" }}>
                      <label htmlFor="">(SIGNATURE)</label>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <hr style={{ width: "100%", marginTop: "0.9rem" }} />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ listStyle: "none" }}>
            <li>Form Approved for Optional Use</li>
            <li>Judicial Council of California</li>
            <li>FL-145 [Rev. January 1, 2006]</li>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "1.3rem",
            }}
          >
            <label htmlFor="">
              <b>FORM INTERROGATORIES–FAMILY LAW</b>
            </label>
          </div>
          <div style={{ listStyle: "none", textAlign: "end" }}>
            <li>Code of Civil Procedure,</li>
            <li>§§ 2030.010–2030.410, 2033.710</li>
            <li>
              <i>www.courtinfo.ca.gov</i>
            </li>
          </div>
        </div>
        <p style={{ pageBreakAfter: "always" }} />
        <p style={{ pageBreakBefore: "always" }} />
        <h3
          style={{
            display: "flex",
            justifyContent: "end",
            marginTop: "2rem",
            marginBottom: "0px",
          }}
        >
          FL-145
        </h3>
        <br />
        <div style={{ display: "flex", width: "100%" }}>
          <div style={{ width: "68%", fontSize: 12 }}>
            <div style={{ display: "flex" }}>
              <div>
                <input
                  onChange={(e) => handleInstructionsToTheAskingParty(e)}
                  defaultChecked={details.InstructionsToTheAskingParty?.a}
                  type="checkbox" name="a" id="" />
                <label style={{ marginLeft: "1rem" }} htmlFor="">
                  {" "}
                  1.
                </label>
              </div>
              <div style={{ marginLeft: "1rem", fontSize: 12 }}>
                <b>Personal history.</b>State your full name, current <br />
                residence address and work address, social security <br />
                number, any other names you have used, and the <br />
                dates between which you used each name. <br />
              </div>
            </div>

            <div style={{ display: "flex", marginTop: "0.5rem" }}>
              <div>
                <input
                  onChange={(e) => handleInstructionsToTheAskingParty(e)}
                  defaultChecked={details.InstructionsToTheAskingParty?.b}
                  type="checkbox" name="b" id="" />
                <label style={{ marginLeft: "1rem" }} htmlFor="">
                  {" "}
                  2.
                </label>
              </div>
              <div style={{ marginLeft: "1rem", fontSize: 12 }}>
                <b>Agreements.</b> Are there any agreements between you <br />
                and your spouse or domestic partner, made before or <br />
                during your marriage or domestic partnership or after <br />
                your separation, that affect the disposition of <b>
                  assets,
                </b>{" "}
                <br />
                <b>debts,</b> or <b>support</b> in this proceeding? If your
                answer is <br />
                yes, for each agreement state the date made and whether <br />
                it was written or oral, and attach a copy of the agreement{" "}
                <br />
                or describe its contents.
              </div>
            </div>

            <div style={{ display: "flex", marginTop: "0.5rem" }}>
              <div>
                <input
                  onChange={(e) => handleInstructionsToTheAskingParty(e)}
                  defaultChecked={details.InstructionsToTheAskingParty?.c}
                  type="checkbox" name="c" id="" />
                <label style={{ marginLeft: "1rem" }} htmlFor="">
                  {" "}
                  3.
                </label>
              </div>
              <div style={{ marginLeft: "1rem", fontSize: 12 }}>
                <b>Legal actions.</b> Are you a party or do you anticipate{" "}
                <br />
                being a party to any legal or administrative proceeding <br />
                other than this action? If your answer is yes, state your <br />
                role and the name, jurisdiction, case number, and a brief <br />
                description of each proceeding.
              </div>
            </div>

            <div style={{ display: "flex", marginTop: "0.5rem" }}>
              <div>
                <input
                  onChange={(e) => handleInstructionsToTheAskingParty(e)}
                  defaultChecked={details.InstructionsToTheAskingParty?.d}
                  type="checkbox" name="d" id="" />
                <label style={{ marginLeft: "1rem" }} htmlFor="">
                  {" "}
                  4.
                </label>
              </div>
              <div style={{ marginLeft: "1rem", fontSize: 12 }}>
                <b>Persons sharing residence.</b> State the name, age, <br />
                and relationship to you of each <b>person</b> at your present{" "}
                <br />
                address.
              </div>
            </div>

            <div style={{ display: "flex", marginTop: "0.5rem" }}>
              <div>
                <input
                  onChange={(e) => handleInstructionsToTheAskingParty(e)}
                  defaultChecked={details.InstructionsToTheAskingParty?.e}
                  type="checkbox" name="e" id="" />
                <label style={{ marginLeft: "1rem" }} htmlFor="">
                  {" "}
                  5.
                </label>
              </div>
              <div style={{ marginLeft: "1rem", fontSize: 12 }}>
                <b>Support provided others.</b> State the name, age, <br />
                address, and relationship to you of each <b>person</b> for{" "}
                <br />
                whom you have provided <b>support</b> during the past 12 <br />
                months and the amount provided per month for each.
              </div>
            </div>

            <div style={{ display: "flex", marginTop: "0.5rem" }}>
              <div>
                <input
                  onChange={(e) => handleInstructionsToTheAskingParty(e)}
                  defaultChecked={details.InstructionsToTheAskingParty?.f}
                  type="checkbox" name="f" id="" />
                <label style={{ marginLeft: "1rem" }} htmlFor="">
                  {" "}
                  6.
                </label>
              </div>
              <div style={{ marginLeft: "1rem", fontSize: 12 }}>
                <b>Support received for others.</b> State the name, age, <br />
                address, and relationship to you of each <b>person</b> for{" "}
                <br />
                whom you have provided <b>support</b> during the past 12 <br />
                months and the amount provided per month for each.
              </div>
            </div>

            <div style={{ display: "flex", marginTop: "0.5rem" }}>
              <div>
                <input
                  onChange={(e) => handleInstructionsToTheAskingParty(e)}
                  defaultChecked={details.InstructionsToTheAskingParty?.g}
                  type="checkbox" name="g" id="" />
                <label style={{ marginLeft: "1rem" }} htmlFor="">
                  {" "}
                  7.
                </label>
              </div>
              <div style={{ marginLeft: "1rem", fontSize: 12 }}>
                <b>Current income.</b> List all income you received during{" "}
                <br />
                the past 12 months, its source, the basis for its <br />
                computation, and the total amount received from <br />
                each. Attach your last three paycheck stubs.
              </div>
            </div>

            <div style={{ display: "flex", marginTop: "0.5rem" }}>
              <div>
                <input
                  onChange={(e) => handleInstructionsToTheAskingParty(e)}
                  defaultChecked={details.InstructionsToTheAskingParty?.h}
                  type="checkbox" name="h" id="" />
                <label style={{ marginLeft: "1rem" }} htmlFor="">
                  {" "}
                  8.
                </label>
              </div>
              <div style={{ marginLeft: "1rem", fontSize: 12 }}>
                <b>Other income.</b> During the past three years, have you{" "}
                <br />
                received cash or other property from any source not <br />
                identified in item 7? If so, list the source, the date, and{" "}
                <br />
                the nature and value of the property.
              </div>
            </div>

            <div style={{ display: "flex", marginTop: "0.5rem" }}>
              <div>
                <input
                  onChange={(e) => handleInstructionsToTheAskingParty(e)}
                  defaultChecked={details.InstructionsToTheAskingParty?.i}
                  type="checkbox" name="i" id="" />
                <label style={{ marginLeft: "1rem" }} htmlFor="">
                  {" "}
                  9.
                </label>
              </div>
              <div style={{ marginLeft: "1rem", fontSize: 12 }}>
                <b>Tax returns. </b> Attach copies of all tax returns and tax{" "}
                <br />
                schedules filed by or for you in any jurisdiction for the <br />
                past three calendar years.
              </div>
            </div>

            <div style={{ display: "flex", marginTop: "0.5rem", fontSize: 12 }}>
              <div>
                <input
                  onChange={(e) => handleInstructionsToTheAskingParty(e)}
                  defaultChecked={details.InstructionsToTheAskingParty?.j}
                  type="checkbox" name="j" id="" />
                <label style={{ marginLeft: "1rem" }} htmlFor="">
                  {" "}
                  10.
                </label>
              </div>
              <div style={{ marginLeft: "1rem", fontSize: 12 }}>
                <b>Schedule of assets and debts.</b> Complete the <br />
                <i>Schedule of Assets and Debts</i> (form FL-142) served <br />
                with these interrogatories.
              </div>
            </div>

            <div style={{ display: "flex", marginTop: "0.5rem" }}>
              <div>
                <input
                  onChange={(e) => handleInstructionsToTheAskingParty(e)}
                  defaultChecked={details.InstructionsToTheAskingParty?.k}
                  type="checkbox" name="k" id="" />
                <label style={{ marginLeft: "1rem" }} htmlFor="">
                  {" "}
                  11.
                </label>
              </div>
              <div style={{ marginLeft: "1rem", fontSize: "12" }}>
                <b>Separate property contentions.</b> State the facts that{" "}
                <br />
                support your contention that an asset or debt is <br />
                separate property.
              </div>
            </div>
            <br />
          </div>
          <div
            style={{ width: "65%", marginLeft: "3rem", fontSize: 12 }}
          >
            <div style={{ display: "flex" }}>
              <div>
                <input
                  onChange={(e) => handleInstructionsToTheAskingParty(e)}
                  defaultChecked={details.InstructionsToTheAskingParty?.l}
                  type="checkbox" name="l" id="" />
                <label style={{ marginLeft: "1rem" }} htmlFor="">
                  {" "}
                  12.
                </label>
              </div>
              <div style={{ marginLeft: "1rem" }}>
                <b>Property valuations.</b> During the past 12 months,
                <br />
                have you received written offers to purchase or had <br />
                written appraisals of any of the assets listed on your <br />
                completed Schedule of Assets and Debts? If your <br />
                answer is yes, <b>identify the document.</b>
              </div>
            </div>

            <div style={{ display: "flex", marginTop: "0.5rem" }}>
              <div>
                <input
                  onChange={(e) => handleInstructionsToTheAskingParty(e)}
                  defaultChecked={details.InstructionsToTheAskingParty?.m}
                  type="checkbox" name="m" id="" />
                <label style={{ marginLeft: "1rem" }} htmlFor="">
                  {" "}
                  13.
                </label>
              </div>
              <div style={{ marginLeft: "1rem" }}>
                <b>Property held by others.</b> Is there any <b>property</b>{" "}
                <br />
                held by any third party in which you have any interest or <br />
                over which you have any control? If your answer is yes, <br />
                indicate whether the property is shown on the Schedule <br />
                of Assets and Debts completed by you. If it is not, <br />
                describe and identify each such asset, state its present <br />
                value and the basis for your valuation, and <b>
                  identify the
                </b>{" "}
                <br />
                <b>person</b> holding the asset.
              </div>
            </div>

            <div style={{ display: "flex", marginTop: "0.5rem" }}>
              <div>
                <input
                  onChange={(e) => handleInstructionsToTheAskingParty(e)}
                  defaultChecked={details.InstructionsToTheAskingParty?.n}
                  type="checkbox" name="n" id="" />
                <label style={{ marginLeft: "1rem" }} htmlFor="">
                  {" "}
                  14.
                </label>
              </div>
              <div style={{ marginLeft: "1rem" }}>
                <b>Retirement and other benefits.</b> Do you have an <br />
                interest in any disability, retirement, profit-sharing, or{" "}
                <br />
                deferred compensation plan? If your answer is yes, <br />
                <b>identify</b> each plan and provide the name, address, <br />
                and telephone number of the administrator and <br />
                custodian of records.
              </div>
            </div>

            <div style={{ display: "flex", marginTop: "0.5rem" }}>
              <div>
                <input
                  onChange={(e) => handleInstructionsToTheAskingParty(e)}
                  defaultChecked={details.InstructionsToTheAskingParty?.o}
                  type="checkbox" name="o" id="" />
                <label style={{ marginLeft: "1rem" }} htmlFor="">
                  {" "}
                  15.
                </label>
              </div>
              <div style={{ marginLeft: "1rem" }}>
                <b>Claims of reimbursement.</b> Do you claim the legal <br />
                right to be reimbursed for any expenditures of your <br />
                separate or community property? If your answer is <br />
                yes, state all supporting facts.
              </div>
            </div>

            <div style={{ display: "flex", marginTop: "0.5rem" }}>
              <div>
                <input
                  onChange={(e) => handleInstructionsToTheAskingParty(e)}
                  defaultChecked={details.InstructionsToTheAskingParty?.p}
                  type="checkbox" name="p" id="" />
                <label style={{ marginLeft: "1rem" }} htmlFor="">
                  {" "}
                  16.
                </label>
              </div>
              <div style={{ marginLeft: "1rem" }}>
                <b>Credits.</b> Have you claimed reimbursement credits <br />
                for payments of community debts since the date of <br />
                separation? If your answer is yes, <b>identify</b> the <br />
                source of payment, the creditor, the date paid, and <br />
                the amount paid. State whether you have added to <br />
                the debt since the separation.
              </div>
            </div>

            <div style={{ display: "flex", marginTop: "0.5rem" }}>
              <div>
                <input
                  onChange={(e) => handleInstructionsToTheAskingParty(e)}
                  defaultChecked={details.InstructionsToTheAskingParty?.q}
                  type="checkbox" name="q" id="" />
                <label style={{ marginLeft: "1rem" }} htmlFor="">
                  {" "}
                  17.
                </label>
              </div>
              <div style={{ marginLeft: "1rem" }}>
                <b>Insurance. Identify</b> each health, life, automobile,
                <br />
                and disability insurance policy or plan that you now <br />
                own or that covers you, your children, or your <br />
                assets. State the policy type, policy number, and <br />
                name of the company. <b>Identify</b> the agent and give <br />
                the address.
              </div>
            </div>

            <div style={{ display: "flex", marginTop: "0.5rem" }}>
              <div>
                <input
                  onChange={(e) => handleInstructionsToTheAskingParty(e)}
                  defaultChecked={details.InstructionsToTheAskingParty?.r}
                  type="checkbox" name="r" id="" />
                <label style={{ marginLeft: "1rem" }} htmlFor="">
                  {" "}
                  18.
                </label>
              </div>
              <div style={{ marginLeft: "1rem" }}>
                <b>Health.</b> Is there any physical or emotional condition{" "}
                <br />
                that limits your ability to work? If your answer is yes, <br />
                state each fact on which you base your answer.
              </div>
            </div>

            <div style={{ display: "flex", marginTop: "0.5rem" }}>
              <div>
                <input
                  onChange={(e) => handleInstructionsToTheAskingParty(e)}
                  defaultChecked={details.InstructionsToTheAskingParty?.s}
                  type="checkbox" name="s" id="" />
                <label style={{ marginLeft: "1rem" }} htmlFor="">
                  {" "}
                  19.
                </label>
              </div>
              <div style={{ marginLeft: "1rem" }}>
                <b>Children’s needs.</b> Do you contend that any of <br />
                your children have any special needs? If so, identify <br />
                the child with the need, the reason for the need, its <br />
                cost, and its expected duration.
              </div>
            </div>

            <div style={{ display: "flex", marginTop: "0.5rem" }}>
              <div>
                <input
                  onChange={(e) => handleInstructionsToTheAskingParty(e)}
                  defaultChecked={details.InstructionsToTheAskingParty?.t}
                  type="checkbox" name="t" id="" />
                <label style={{ marginLeft: "1rem" }} htmlFor="">
                  {" "}
                  20.
                </label>
              </div>
              <div style={{ marginLeft: "1rem" }}>
                <b>Attorney fees.</b> State the total amount of attorney <br />
                fees and costs incurred by you in this proceeding, <br />
                the amount paid, and the source of the money paid. <br />
                Describe the billing arrangements.
              </div>
            </div>

            <div style={{ display: "flex", marginTop: "0.5rem" }}>
              <div>
                <input
                  onChange={(e) => handleInstructionsToTheAskingParty(e)}
                  defaultChecked={details.InstructionsToTheAskingParty?.u}
                  type="checkbox" name="u" id="" />
                <label style={{ marginLeft: "1rem" }} htmlFor="">
                  {" "}
                  21.
                </label>
              </div>
              <div style={{ marginLeft: "1rem" }}>
                <b>Gifts.</b> List any gifts you have made without the <br />
                consent of your spouse or domestic partner in the <br />
                past 24 months, their values, and the recipients.
              </div>
            </div>
            <br />
          </div>
        </div>
        <br />
        <hr style={{ width: "100%" }} />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ listStyle: "none" }}>
            <li>FL-145 [Rev. January 1, 2006]</li>
          </div>
          <div style={{ marginRight: "6rem", fontSize: "1.3rem" }}>
            <label htmlFor="">
              <b>FORM INTERROGATORIES–FAMILY LAW</b>
            </label>
          </div>
          <div style={{ listStyle: "none", textAlign: "end" }}>
            <li>
              <b>Page 2 of 2</b>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}