import React from "react";
import SUPFL1034 from "./SU1034";

export default function FL1034() {
  const [details, setDetails] = React.useState<SUPFL1034>(
    {} as SUPFL1034
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

  function handleStatusConferenceStatement(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setDetails({
      ...details,
      StatusConferenceStatement: {
        ...details.StatusConferenceStatement,
        [e.target.name]: e.target.value,
      },
    });
  }

  function handleCheckTheIssues(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setDetails({
      ...details,
      CheckTheIssues: {
        ...details.CheckTheIssues,
        [e.target.name]: e.target.value === "on" ? true : false,
      },
    });
  }

  function handleIsTheDepartmentOfChildSupportServices(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setDetails({
      ...details,
      IsTheDepartmentOfChildSupportServices: {
        ...details.IsTheDepartmentOfChildSupportServices,
        IfYes :{
          ...details.IsTheDepartmentOfChildSupportServices?.IfYes,

        [e.target.name]: e.target.value==="on"?true:false
        }

      },
    });
  }

  

  console.log(details);


  
  return (
    <>
      <div style={{ fontFamily: "Arial,sans-serif", fontSize: "16px", color: 'black', backgroundColor: 'white' ,maxWidth: "1100px", margin: "auto"}}>
        <h3 style={{ display: 'flex', justifyContent: 'end', marginTop: '3rem', marginBottom: '0' }}>SUPFL 1034 </h3>
        <table
          style={{ width: "100%", marginBottom: "20px", fontSize: "12px", border: '2px solid black', borderCollapse: 'collapse' }} >
          <tr>
            <td style={{ width: "250px", border: '2px solid black', borderCollapse: 'collapse',paddingLeft:"10px",paddingTop:"5px" }}>
              <div>
                <label>
                  ATTORNEY OR PARTY WITHOUT ATTORNEY (Name, State Bar number,
                  and address):
                </label>
              </div>

              <div >
                <div style={{ display:"flex" }}>
                  <label htmlFor="telephone">Name:</label>
                  <input style={{ backgroundColor: "rgb(225,243,243)", border: 'none', marginTop: '2px',paddingLeft:"10px",marginBottom:"2px" }}
                  name={"Name"}
                  size={133}
                  onChange={(e) => handleChange(e)}
                  type="text" id="fax" />
                </div>
                <div>
                  <label htmlFor="telephone">ADDRESS:</label>
                  <input style={{ backgroundColor: "rgb(225,243,243)", border: 'none', marginTop: '1px',marginBottom:"2px",paddingLeft:"1px" }}
                  name={"Address"}
                  size={132}
                  onChange={(e) => handleChange(e)}
                  type="text" id="fax" />
                </div>
                <div>
                  <label htmlFor="telephone">CITY, STATE , ZIP:</label>
                  <input style={{ backgroundColor: "rgb(225,243,243)", border: 'none', marginTop: '1px',marginBottom:"2px",paddingLeft:"10px" }}
                   name={"City"}
                   size={124}
                   onChange={(e) => handleChange(e)}
                  type="text" id="fax" />
                </div>
                <div>
                  <label htmlFor="telephone">TELEPHONE NO.:</label>
                  <input style={{ backgroundColor: "rgb(225,243,243)", border: 'none', marginTop: '1px',marginBottom:"2px",paddingRight:"38.9rem"}}
                   name={"TelephoneNo"}
                   onChange={(e) => handleChange(e)}
                  type="number" id="telephone" />
                </div>
                <div>
                  <label htmlFor="telephone">FAX NO (optional):</label>
                  <input style={{ backgroundColor: "rgb(225,243,243)", border: 'none', marginTop: '1px',marginBottom:"2px",paddingRight:"38rem" }} 
                   name={"FaxNo"}
                   size={120}
                   onChange={(e) => handleChange(e)}
                  type="number" id="telephone" />
                </div>
                <div>
                  <label htmlFor="fax">E-MAIL ADDRESS(optional):</label>
                  <input style={{ backgroundColor: "rgb(225,243,243)", border: 'none', marginTop: '1px',marginBottom:"2px",paddingLeft: "16px"
}}
                   name={"EmailAddress"}
                   size={112}
                   onChange={(e) => handleChange(e)}
                  type="text" id="fax" />
                </div>
              </div>

              <div>
                <label htmlFor="attorney">ATTORNEY FOR (name):</label>
                <input style={{ backgroundColor: "rgb(225,243,243)", border: 'none', marginTop: '1px',marginBottom:"3px",paddingLeft:"4px" }}
                 name={"AttorneyFor"}
                 size={118}
                 onChange={(e) => handleChange(e)}
                type="email" id="attorney" />
              </div>
            </td>
            <td
              style={{ textAlign: "center", width: "200px", border: '2px solid black', borderCollapse: 'collapse' }}
              rowSpan={3}
            >
              FOR COURT USE ONLY
            </td>
          </tr>
          <tr>
            <td style={{ border: '2px solid black', borderCollapse: 'collapse',paddingLeft:"11px" }}>
              <div style={{ fontWeight: 'bold' }}>
                <label htmlFor="name">
                  SUPERIOR COURT OF CALIFORNIA COUNTY OF SANTA CRUZ
                </label>
            
              </div>
              <div>
                <label htmlFor="street">1 Second Street, Room 300</label>
               
              </div>
              <div>
                <label htmlFor="street">Watsonville, CA 95076</label>
              
              </div>
              <div>
                <label htmlFor="street">Watsonville Branch</label>
                
              </div>
            </td>
          </tr>
          <tr>
            <td style={{ border: '2px solid black', borderCollapse: 'collapse',paddingLeft:"11px" }}>
              <div >
                <label htmlFor="name">PLAINTIFF/PETITIONER:</label>
                <input size={120} style={{ backgroundColor: 'rgb(225,243,243)', border: 'none', marginTop: '3px',paddingLeft:"5px" }}
                name={"PlaintiffPetitioner"}
                onChange={(e) => handleChange(e)}
                type="text" id="name" />
              </div>
              <div>vs.</div>
              <div>
                <label htmlFor="street">RESPONDENT:</label>
                <input size={129} 
                 name={" DefendantRespondent" }
                 onChange={(e) => handleChange(e)}
                  style={{ backgroundColor: 'rgb(225,243,243)', border: 'none', marginTop: '2px' }} type="text" id="street" />
              </div>
            </td>
          </tr>
          <tr>
            <td style={{ border: '2px solid black', borderCollapse: 'collapse', paddingLeft:"10rem" }}>
              <h3 style={{ textAlign: "center" }}>
                STATUS CONFERENCE STATEMENT
              </h3>
              <div style={{ marginLeft: '1.2rem' }}>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <div style={{ flex: " 1" }}>
                    <input type="checkbox" 
                     onChange={(e) => handleStatusConferenceStatement(e)}
                     defaultChecked={details.StatusConferenceStatement?.Dissolution}
                     name="Dissolution"
                    />
                    <b> Dissolution</b>
                  </div>
                  <div style={{ flex: "1" }}>
                    <input type="checkbox" 
                     onChange={(e) => handleStatusConferenceStatement(e)}
                     defaultChecked={details.StatusConferenceStatement?.LegalSeparation}
                    name="legal_separation" />
                    <b> Legal Separation</b>
                  </div>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <div style={{ flex: "1" }}>
                    <input type="checkbox"
                     onChange={(e) => handleStatusConferenceStatement(e)}
                     defaultChecked={details.StatusConferenceStatement?.Nullity}
                    name="nullity" />
                    <b>Nullity</b>
                  </div>
                  <div style={{ flex: "1" }}>
                    <input type="checkbox"
                     onChange={(e) => handleStatusConferenceStatement(e)}
                     defaultChecked={details.StatusConferenceStatement?.Parentage}
                    name="parentage" />
                    <b>Parentage</b>
                  </div>
                </div>
              </div>
              <div>
              <input type="checkbox" name="parentage" style={{marginLeft:"18px"}} />
                <label htmlFor="street">
                  
                  <b>Other Family Law:</b>
                </label>
                <input size={90} style={{ backgroundColor: 'rgb(225,243,243)', border: 'none', margin: '2px'}} type="text" id="street" />
              </div>
            </td>
            <td style={{ width: "100px", border: '2px solid black', borderCollapse: 'collapse',paddingLeft:"4px" }}>
              <div  >
              <label htmlFor="street">CASE NUMBER:</label>
             
             <input
             name={"CaseNumber"}
             onChange={(e) => handleChange(e)}
             size={10} style={{ backgroundColor: "rgb(225,243,243)", border: 'none', marginTop: '2px',paddingLeft: "0.5rem" }} type="text" id="street" />
              </div>
              <div >
              <label htmlFor="street">HEARING DATE:</label>
             
                <input 
                name={"HearingDate"}
                onChange={(e) => handleChange(e)}
                size={10} style={{ backgroundColor: "rgb(225,243,243)", border: 'none', marginTop: '2px',paddingLeft: "0.4rem" }} type="text" id="street" />
              </div>
              <div>
              <label htmlFor="street"> TIME:</label>
             
             <input
             name={"Time"}
             onChange={(e) => handleChange(e)}
             size={20} style={{ backgroundColor: "rgb(225,243,243)", border: 'none', marginTop: '2px' }} type="text" id="street" />
              </div>
              <div >
                <label htmlFor="street"> DEPT:</label>
             
                <input 
                name={"Dept"}
                onChange={(e) => handleChange(e)}
                size={20} style={{ backgroundColor: "rgb(225,243,243)", border: 'none', marginTop: '2px',marginBottom:"2px" }} type="text" id="street" />
              </div>
            </td>
          </tr>
        </table>

        <table
          width="100%"
          style={{ pageBreakInside: "auto" }}
          cellPadding="5"
          cellSpacing="5"
        >
          <tbody>
            <tr>
              <td width="5%" valign="top">
                1
              </td>
              <td width="95%" valign="top">
                <div>
                  Check the issues on which you and the other party disagree or
                  need orders:
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <table
          width="100%"
          style={{ pageBreakInside: "auto" }}
          cellPadding="5"
          cellSpacing="5"
        >
          <tbody>
            <tr>
              <td
                valign="top"
                style={{ display: "flex", justifyContent: "space-between",textWrap: "nowrap" }}
              >
                <div
                  style={{
                    flex: "1",
                    padding: "5px",
                    margin: "2px",
                    marginLeft: "75px",
                  }}
                >
                  <input 
                  onChange={(e) => handleCheckTheIssues(e)}
                  defaultChecked={details.CheckTheIssues?.a}
                  type="checkbox" name="a" />
                  Custody/Visitation
                  <br />
                  <input
                  onChange={(e) => handleCheckTheIssues(e)}
                  defaultChecked={details.CheckTheIssues?.b}
                  type="checkbox"   name="b" /> Arrearages
                  <br />
                  <input 
                  onChange={(e) => handleCheckTheIssues(e)}
                  defaultChecked={details.CheckTheIssues?.c}
                  type="checkbox" name="c" /> Child Support
                  <br />
                  <input 
                  onChange={(e) => handleCheckTheIssues(e)}
                  defaultChecked={details.CheckTheIssues?.d}
                  type="checkbox" name="d" /> Spousal
                  Support
                  <br />
                  <input 
                  onChange={(e) => handleCheckTheIssues(e)}
                  defaultChecked={details.CheckTheIssues?.e}
                  type="checkbox" name="e" /> Separation
                  Date
                  <br />
                  <input
                  onChange={(e) => handleCheckTheIssues(e)}
                  defaultChecked={details.CheckTheIssues?.f}
                  type="checkbox" name="f" /> Other:
                  <input size={45} style={{ backgroundColor: "rgb(225,243,243)", border: 'none', margin: '2px' }} type="text" id="street" />
                </div>
                <div style={{ flex: "1", padding: "5px", margin: "2px" }}>
                  <input
                  onChange={(e) => handleCheckTheIssues(e)}
                  defaultChecked={details.CheckTheIssues?.g}
                  type="checkbox" name="g" /> Property
                  Valuation
                  <br />
                  <input
                  onChange={(e) => handleCheckTheIssues(e)}
                  defaultChecked={details.CheckTheIssues?.h}
                    type="checkbox"
                    name="h"
                  />{" "}
                  Property Characterization
                  <br />
                  <input 
                  onChange={(e) => handleCheckTheIssues(e)}
                  defaultChecked={details.CheckTheIssues?.i}
                  type="checkbox" name="i" /> Property
                  Division
                  <br />
                  <input 
                  onChange={(e) => handleCheckTheIssues(e)}
                  defaultChecked={details.CheckTheIssues?.j}
                  type="checkbox" name="j" /> Reimbursement
                  <br />
                  <input 
                  onChange={(e) => handleCheckTheIssues(e)}
                  defaultChecked={details.CheckTheIssues?.k}
                  type="checkbox" name="k" /> Attorney’s
                  Fees and Costs
                  <br />
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <table
          width="100%"
          style={{ pageBreakInside: "auto", marginBottom: "3px" }}
          cellPadding="5"
          align="center"
          cellSpacing="5"
        >
          <tbody>
            <tr>
              <td width="5%" valign="top">
                2.
              </td>
              <td width="95%" valign="top">
                <div style={{ margin: "5px" }}>
                  Discovery (getting information about/from the other party)
                  that still needs to be completed:
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    alignItems: "center",
                    margin: "5px",
                  }}
                >
                  <span>Has discovery been finished?</span>
                  <input
                    type="checkbox"
                    name="discovery_finished_yes"
                    style={{ marginLeft: "140px" }}
                  />{" "}
                  Yes
                  <input type="checkbox" name="discovery_finished_no" /> No
                  <input type="checkbox" name="discovery_not_required" /> Not
                  required/requested in this case.
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    alignItems: "center",
                    marginBottom: "5px",
                  }}
                >
                  <span>If NO, what discovery still needs to be done?</span>
                  <input
                    type="checkbox"
                    name="interrogatories"
                    style={{ marginLeft: "38px" }}
                  />{" "}
                  Interrogatories
                  <input
                    type="checkbox"
                    name="depositions"
                    style={{ marginLeft: "7px" }}
                  />{" "}
                  Depositions
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    alignItems: " center",
                    marginBottom: " 5px",
                    textWrap: "nowrap"
                  }}
                >
                  <input type="checkbox" name="document_production" /> Document
                  Production
                  <input
                    type="checkbox"
                    name="request_for_admissions"
                    style={{ marginLeft: " 20px" }}
                  />{" "}
                  Request for Admissions
                  <input
                    type="checkbox"
                    name="other"
                    style={{ marginLeft: "82px" }}
                  />{" "}
                  Other:
                  <input size={45} style={{ backgroundColor: "rgb(225,243,243)", border: 'none', margin: '2px' }} type="text" id="street" />
                </div>

                <div>
                  How long do you think it will take both parties to finish
                  discovery?
                  <input size={25} style={{ backgroundColor: "rgb(225,243,243)", border: 'none', margin: '2px' }} type="text" id="street" />
                  days
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <table
          width="100%"
          style={{ pageBreakInside: "auto", marginBottom: "5px" }}
          cellPadding="5"
          align="center"
          cellSpacing="5"
        >
          <tbody>
            <tr>
              <td width="5%" valign="top">
                3.
              </td>
              <td
                width="95%"
                valign="top"
                style={{ display: "flex", gap: "10px", alignItems: "center" }}
              >
                <div>
                  Co-parenting (for cases with children) classes have been
                  completed by
                </div>
                <div>
                  <input type="checkbox" name="completed_by_petitioner" />{" "}
                  Petitioner
                  <input type="checkbox" name="completed_by_respondent" />{" "}
                  Respondent
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <table
          width="100%"
          style={{ pageBreakInside: "auto", marginBottom: "5px" }}
          cellPadding="5"
          align="center"
          cellSpacing="5"
        >
          <tbody>
            <tr>
              <td width="5%" valign="top">
                4.
              </td>
              <td width="95%" valign="top">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    marginBottom: "5px",
                  }}
                >
                  <div>
                    Mandatory Declaration of Disclosure (Dissolution, Legal
                    Separation, and Nullity cases only):
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <div>Petitioner has served Respondent with</div>
                    <span style={{ marginLeft: "23px" }}>
                      <input type="checkbox" name="preliminary_declaration" />{" "}
                      Preliminary
                    </span>
                    <span>
                      <input type="checkbox" name="final_declaration" /> Final
                    </span>
                    <span>Declarations of Disclosure</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                      marginBottom: "5px",
                    }}
                  >
                    <div>Respondent has served Petitioner with</div>
                    <span style={{ marginLeft: "22px" }}>
                      <input
                        type="checkbox"
                        name="respondent_preliminary_declaration"
                      />{" "}
                      Preliminary
                    </span>
                    <span>
                      <input
                        type="checkbox"
                        name="respondent_final_declaration"
                      />{" "}
                      Final
                    </span>
                    <span>Declarations of Disclosure</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                      marginBottom: "5px",
                    }}
                  >
                    <div>If not served yet, do you need a deadline?</div>
                    <span>
                      <input type="checkbox" name="need_deadline_yes" /> Yes
                    </span>
                    <span>
                      <input type="checkbox" name="need_deadline_no" /> No
                    </span>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <table
          width="100%"
          style={{ pageBreakInside: "auto", marginBottom: "3px" }}
          cellPadding="5"
          align="center"
          cellSpacing="5"
        >
          <tbody>
            <tr>
              <td width="5%" valign="top">
                5.
              </td>
              <td width="95%" valign="top">
                <div
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <span>
                    Have you and the other party and/or your attorneys met to
                    discuss settlement?
                  </span>
                  <span>
                    <input type="checkbox" name="settlement_discussion_yes" />{" "}
                    Yes
                  </span>
                  <span>
                    <input type="checkbox" name="settlement_discussion_no" /> No
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <table
          width="100%"
          style={{ pageBreakInside: "auto", marginBottom: "10px" }}
          cellPadding="5"
          align="center"
          cellSpacing="5"
        >
          <tbody>
            <tr>
              <td width="5%" valign="top">
                6.
              </td>
              <td width="95%" valign="top">
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                    margin: "3px",
                  }}
                >
                  <span>Are the parties in Mediation?</span>
                  <span>
                    <input type="checkbox" name="mediation_yes" /> Yes
                  </span>
                  <span>
                    <input type="checkbox" name="mediation_no" /> No
                  </span>
                </div>
                <div style={{ margin: "3px" }}>
                <label htmlFor="name">If Yes, on what issue?</label>
                <input size={100} style={{ backgroundColor: 'rgb(225,243,243)', border: 'none', marginTop: '3px' }}
                name={"what issue"}
                onChange={(e) => handleChange(e)}
                type="text" id="name" />
                
                 </div>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                    marginBottom: "5px",
                  }}
                >
                  <span>
                    Are you satisfied with the progress made in Mediation?
                  </span>
                  <span>
                    <input type="checkbox" name="satisfied_yes" /> Yes
                  </span>
                  <span>
                    <input type="checkbox" name="satisfied_no" /> No
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <table
          width="100%"
          style={{ pageBreakInside: "auto", marginBottom: "3px" }}
          cellPadding="5"
          align="center"
          cellSpacing="5"
        >
          <tbody>
            <tr>
              <td width="5%" valign="top">
                7.
              </td>
              <td width="95%" valign="top">
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                    margin: "3px",
                  }}
                >
                  <span>Are you ready to set for trial?</span>
                  <span>
                    <input type="checkbox" name="ready_for_trial_yes" /> Yes
                  </span>
                  <span>
                    <input type="checkbox" name="ready_for_trial_no" /> No
                  </span>
                </div>
                <div style={{ margin: "3px" }}>
                  If yes, how long will your trial take (estimate)?{" "}
                  <input 
                  name={"Hours"}
                  onChange={(e) => handleChange(e)} 
                  size={20} style={{ backgroundColor: "rgb(225,243,243)", border: 'none', margin: '2px' }} type="text" id="name" />{" "}
                  hours/days. Number of Witnesses{" "}
                  <input
                  name={"NumberOfWitnesses"}
                  onChange={(e) => handleChange(e)} 
                  size={10} style={{ backgroundColor: "rgb(225,243,243)", border: 'none', margin: '2px' }} type="text" id="name" />
                </div>
                <div style={{ margin: "3px" }}>
                  Names of Witnesses:{" "}
                  <input
                  name={"NamesOfWitnesses"}
                  onChange={(e) => handleChange(e)} 
                  size={100} style={{ backgroundColor: "rgb(225,243,243)", border: 'none', margin: '2px' }} type="text" id="name" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <hr style={{ width: "100%" }} />

        <div
          className="footer"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div style={{ listStyle: "none" }}>
            <li>Form Adopted for MANDATORY USE</li>
            <li>Superior Court of Santa Cruz Country</li>
            <li>SUPFL 1034 01/01/20</li>
          </div>
          <div style={{ textAlign: "center" }}>
            <h3>STATUS CONFERENCE STATEMENT</h3>
            <label style={{ textAlign: "center", fontWeight: 'bold' }}>
              (Family Law)
            </label>
          </div>
          <div style={{ listStyle: "none" }}>
            <li>Page 1 of 2</li>
            <li>Local Rule of Court 3.1.06</li>
          </div>
        </div>

        <div style={{pageBreakAfter:"always"}}></div>
        <div style={{ pageBreakBefore: "always" }}></div>


        <table style={{ width: "100%", border: '2px solid black', borderCollapse: 'collapse' , marginTop:'10px'}}>
          <tr>
            <td style={{ border: '2px solid black', borderCollapse: 'collapse' }}>
              <div style={{ marginLeft: '1.2rem' }}>
                <label htmlFor="name">PETITIONER/PLAINTIFF:</label>
                <input
                  onChange={(e) => handleIsTheDepartmentOfChildSupportServices (e)}
                  defaultValue={details.IsTheDepartmentOfChildSupportServices?.IfYes.WhichCounty}
                size={65} style={{ backgroundColor: "rgb(225,243,243)", border: 'none', marginTop: '2px',marginBottom:"2px" }} type="text" id="name" />
              </div>
              <div style={{ marginLeft: '1.2rem' }}>
                <label htmlFor="street">RESPONDENT/DEFENDANT:</label>
                <input 
                onChange={(e) => handleIsTheDepartmentOfChildSupportServices (e)}
                defaultValue={details.IsTheDepartmentOfChildSupportServices?.IfYes.FSBNumber}
                size={60} style={{ backgroundColor: "rgb(225,243,243)", border: 'none', marginTop: '2px' }} type="text" id="street" />
              </div>
            </td>
            <td style={{ width: "30%", border: '2px solid black', borderCollapse: 'collapse' }}>
              <div style={{ marginLeft: '1.2rem' }}>
                <label htmlFor="street">CASE NUMBER:</label>
                <br />
                <input
                 onChange={(e) => handleIsTheDepartmentOfChildSupportServices (e)}
                 defaultValue={details.IsTheDepartmentOfChildSupportServices?.IfYes.CourtCaseNumber}
                size={35} style={{ backgroundColor: "rgb(225,243,243)", border: 'none', margin: '2px' }} type="text" id="street" />
              </div>
            </td>
          </tr>
        </table>

        <table
          width="100%"
          style={{ pageBreakInside: "auto" }}
          cellPadding="5"
          align="center"
          cellSpacing="5"
        >
          <tbody>
            <tr>
              <td width="5%" valign="top">
                8.
              </td>
              <td width="95%" valign="top">
                <div>
                  Is the Department of Child Support Services involved on the
                  issue of child support? <input type="checkbox" name="parentage" style={{marginLeft:"5px"}} />Yes <input type="checkbox" name="parentage" style={{marginLeft:"5px"}} /> No
                </div>
                <div style={{ margin: "5px" }}>
                  If yes: Which County?
                  <input 
                  onChange={(e) => handleIsTheDepartmentOfChildSupportServices (e)}
                  defaultValue={details.IsTheDepartmentOfChildSupportServices?.IfYes.WhichCounty}
                  size={54} style={{ backgroundColor: "rgb(225,243,243)", border: 'none', margin: '2px' }} type="text" id="name" />
                  FSB Number?
                  <input
                  onChange={(e) => handleIsTheDepartmentOfChildSupportServices (e)}
                  defaultValue={details.IsTheDepartmentOfChildSupportServices?.IfYes.FSBNumber}
                  size={74} style={{ backgroundColor: "rgb(225,243,243)", border: 'none', margin: '2px' }} type="text" id="name" />
                </div>
                <div style={{ margin: "5px" }}>
                  {" "}
                  Court Case Number (if different from this case):
                  <input 
                      onChange={(e) => handleIsTheDepartmentOfChildSupportServices (e)}
                      defaultValue={details.IsTheDepartmentOfChildSupportServices?.IfYes.CourtCaseNumber}
                  size={74} style={{ backgroundColor: "rgb(225,243,243)", border: 'none', margin: '2px' }} type="text" id="name" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <table
          width="100%"
          style={{ pageBreakInside: "auto" }}
          cellPadding="5"
          align="center"
          cellSpacing="5"
        >
          <tbody>
            <tr>
              <td width="5%" valign="top">
                9.
              </td>
              <td width="95%" valign="top">
                <div style={{ margin: "5px" }}>
                  As dictated by California Rules of Court 5.83, the Court
                  strives to have family law matters resolved in a timely
                  manner. What factors do you anticipate will make it difficult
                  <br /> to reach a Final Judgment in this case?
                </div>
                {[...Array(10)].map((_, index) => (
                  <div key={index}>
                    <input 
                    name={"WhatFactorsDoYouAnticipateWillMakeItDifficultToReachAFinalJudgementInThisCase"}
                    onChange={(e) => handleChange(e)}
                    size={135} style={{ backgroundColor: "rgb(225,243,243)",borderBottom:"2px solid black", margin: '2px',textDecoration:"underline"}} type="text" id="name" />
                  </div>
                ))}
              </td>
            </tr>
          </tbody>
        </table>

        <table
          width="100%"
          style={{ pageBreakInside: "auto" }}
          cellPadding="5"
          align="center"
          cellSpacing="5"
        >
          <tbody>
            <tr>
              <td width="5%" valign="top">
                10.
              </td>
              <td width="95%" valign="top">
                <div style={{ margin: "5px" }}>
                  If you have had a previous status conference, what has
                  occurred or changed in this case?
                </div>
                {[...Array(20)].map((_, index) => (
                  <div key={index}>
                    <input
                    name={" IfYouHaveHadAPreviousStatusConferenceWhatHasOccuredOrChangedInThisCase"}
                    onChange={(e) => handleChange(e)}
                    size={135} style={{ backgroundColor: "rgb(225,243,243)",borderBottom:"2px solid black", margin: '2px' }} type="text" id="name" />
                  </div>
                ))}
                <div style={{ margin: "10px" }}>Date: 
                <input 
                name={"Date"}
                onChange={(e) => handleChange(e)}
                size={15} style={{ backgroundColor: "rgb(225,243,243)", borderBottom:"2px solid black", margin: '2px' }} type="text" id="name" /></div>

                <div
                  style={{
                    display: "flex",
                    gap: "40%",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <input
                      name={"PrintOrTypeName"}
                      onChange={(e) => handleChange(e)}
                    size={44} style={{ backgroundColor: "rgb(225,243,243)", borderBottom:"2px solid black", margin: '2px' }} type="text" id="name" />
                    Print or type name
                  </div>
                  <div>
                    <input 
                    name={"Signature"}
                    onChange={(e) => handleChange(e)}
                    size={30} style={{ backgroundColor: "rgb(225,243,243)", borderBottom:"2px solid black", margin: '2px' }} type="text" id="name" />
                    Signature
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <br />
        <hr style={{ width: "100%" }} />

        <div
          className="footer"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div style={{ listStyle: "none" }}>
            <li>Form Adopted for MANDATORY USE</li>
            <li>Superior Court of Santa Cruz Country</li>
            <li>SUPFL 1034 01/01/20</li>
          </div>
          <div style={{ textAlign: "center" }}>
            <h3>STATUS CONFERENCE STATEMENT</h3>
            <label style={{ textAlign: "center", fontWeight: 'bold' }}>
              (Family Law)
            </label>
          </div>
          <div style={{ listStyle: "none" }}>
            <li>Page 2 of 2</li>
            <li>Local Rule of Court 3.1.06</li>
          </div>
        </div>
      </div>
    </>
  );

};
