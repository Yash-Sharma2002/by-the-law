import React from 'react'
import SUPFL130a from "./SU130a";
export default function SU130a() {

  const [details, setDetails] = React.useState<SUPFL130a>(
    {} as SUPFL130a
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

  function handleThisWaiverIsConditionedAsFollws(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  }



  console.log(details)
  return (

    <div style={{ maxWidth: "1100px", margin: "auto" }}>
      <div>
        <h2 style={{ display: "flex", justifyContent: "end", marginBottom: "0" }}>FL-130(A)</h2>
        <table style={{ width: "100%", border: "2px solid black", borderCollapse: "collapse" }}>
          <tbody>
            <tr>
              <td style={{ border: "2px solid black", borderCollapse: "collapse" }}>
                <div style={{ marginLeft: "1.2rem" ,marginBottom:"4px",marginTop:"10px",fontSize:"12px"}}>
                  <label htmlFor="name">PETITIONER/PLAINTIFF:</label>
                  <input
                   name={" PetitionerPlaintiff"}
                   onChange={(e) => handleChange(e)}
                 style={{ backgroundColor: "rgb(225, 243, 243)", border: "none",width:"77%" }} type="text" id="name" />
                </div>
                <div style={{ marginLeft: "1.2rem", fontSize:"12px",marginBottom:"4px" }}>
                  <label htmlFor="street">RESPONDENT/DEFENDANT:</label>
                  <input 
                   name={" RespondentDefendant"}
                   onChange={(e) => handleChange(e)}
                   style={{ backgroundColor: "rgb(225, 243, 243)", border: "none",width:"73.3%" }} type="text" id="street" />
                </div>
                <div style={{ marginLeft: "1.2rem" ,fontSize:"12px"}}>
                  <label htmlFor="street">OTHER PARTY:</label>
                  <input 
                  name={"  OtherParent"}
                  onChange={(e) => handleChange(e)}
                    style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "2px", width:"83%"}} type="text" id="street" />
                </div>
              </td>
              <td style={{ width: "30%", border: "2px solid black", borderCollapse: "collapse" }}>
                <div style={{ marginLeft: "1.2rem",fontSize:"12px" }}>
                  <label htmlFor="street">CASE NUMBER:</label>
                  <br />
                  <input
                  name={" CaseNumber"}
                  onChange={(e) => handleChange(e)}
                      style={{ backgroundColor: "rgb(225, 243, 243)", border: "none",width:"98%" }} type="text" id="street" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div style={{ textAlign: "center"}}>
          <b>DECLARATION AND CONDITIONAL WAIVER OF RIGHTS</b>
        </div>
        <div style={{ textAlign: "center",  }}>
          <b>UNDER THE SERVICEMEMBERS CIVIL RELIEF ACT OF 2003</b>
        </div>
        <div style={{ textAlign: "center",  fontSize:"12px" ,}}>
          <i> Attachment to Appearance, Stipulations, and Waivers (form FL-130)</i>
        </div>
        <div style={{ border: "2px solid  #000000", textAlign: "center", verticalAlign: "top" , marginLeft:"35px", width: "90%" }}>
        
          <div>
            <b>Notice to Servicemember</b>
          </div>
          <div>
            The Servicemembers Civil Relief Act of 2003 (50 U.S.C. App. §§ 501-596),
            formerly known as
            <br />
            the Soldiers' and Sailors' Civil Relief Act of 1940, is a federal law
            that provides protections for
            <br />
            military members when they enter active duty. You may obtain a copy of
            the act from the public
            <br />
            law library or from the website of the United States Department of
            Justice at www.justice.gov
          </div>
        </div>
        <table
          width="100%"
          style={{ borderCollapse: "collapse", borderSpacing: 0, fontSize: 14, borderColor: "#EBF4F5" , marginTop:"10px"  }}

          cellPadding={8}
        >
          <thead>
            <tr>
              <td width="10%" valign="top">
                <div>
                  By signing this conditional waiver and attaching it to Appearance,
                  Stipulations, and Waivers (form <br></br>FL-130), I declare that I am
                  entitled to the benefits of the Servicemembers Civil Relief Act,
                  title 50  <br></br>United States Code Appendix, sections 501–596 (SCRA),
                  and:
                </div>
              </td>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
        <table
          width="100%"
          style={{ pageBreakInside: "auto", fontSize: 14, verticalAlign: "top",marginTop:"10px" }}
          cellPadding={5}
          cellSpacing={5}
        >
          <tbody>
            <tr>
              <td width="2%" valign="top">
                1.
              </td>
              <td
                width="98%"
                valign="top"
                style={{ display: "flex", gap: 10, alignItems: "center" }}
              >
                <div>
                  To permit the court to decide this cause as an uncontested matter
                  and enter a judgment that incorporates the terms of the written
                  agreement made between the petitioner and me (a copy of which is
                  attached to this form), I make a knowing, intelligent, and
                  voluntary conditional waiver of the right to seek to set aside a
                  default judgment entered against me in this matter, as provided by
                  section 521 of the SCRA.
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <table
          width="100%"
          style={{ pageBreakInside: "auto", fontSize: 14, verticalAlign: "top" ,marginTop:"10px" }}
          cellPadding={5}
          cellSpacing={5}
        >
          <tbody>
            <tr>
              <td width="2%" valign="top">
                2.
              </td>
              <td
                width="98%"
                valign="top"
                style={{ display: "flex", gap: 10, alignItems: "center" }}
              >
                <div>This waiver is conditioned as follows:</div>
              </td>
            </tr>
          </tbody>
        </table>
        <table
          width="100%"
          style={{ pageBreakInside: "auto", fontSize: 14, verticalAlign: "top" }}
          cellPadding={5}
          cellSpacing={5}
        >
          <tbody>
            <tr>
              <td width="2%">
                <div />
              </td>
              <td width="2%" valign="top">
                a.
              </td>
              <td
                width="100%"
                valign="top"
                style={{ display: "flex", gap: 2, alignItems: "center" }}
              >
                <div>
                  The waiver applies only to a default judgment that incorporates
                  the terms and conditions of <br></br>the written agreement between the
                  petitioner and me that is titled (specify):
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div style={{ display: "flex" }}>
          <div style={{ marginLeft: 40 }}>
            (1).
            <input type="checkbox"
            name={"a"}
            onChange={(e) => handleThisWaiverIsConditionedAsFollws(e)}
            style={{ marginRight: 5, marginLeft:5 }} />
          </div>
          <div style={{ marginLeft: 10 }}>Stipulation for Judgment</div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ marginLeft: 40 }}>
            (2).
            <input 
             name={"a"}
             onChange={(e) => handleThisWaiverIsConditionedAsFollws(e)}
            type="checkbox" style={{ marginRight: 5 , marginLeft:5 }} />
          </div>
          <div style={{ marginLeft: 10 }}>Marital Settlement Agreement</div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ marginLeft: 40 }}>
            (3).
            <input
            name={"a"}
            onChange={(e) => handleThisWaiverIsConditionedAsFollws(e)}
            type="checkbox" style={{ marginRight: 5 , marginLeft:5 }} />
          </div>
          <div style={{ marginLeft: 10 }}>Other (specify):</div>
        </div>
        <table
          width="100%"
          style={{ pageBreakInside: "auto", fontSize: 14, verticalAlign: "top" }}
          cellPadding={5}
          cellSpacing={5}
        >
          <tbody>
            <tr>
              {" "}
              <td width="2%">
                <div />
              </td>
              <td width="2%" valign="top">
                b
              </td>
              <td
                width="95%"
                valign="top"
                style={{ display: "flex", gap: 10, alignItems: "center" }}
              >
                <div>
                  The court must enter a judgment in this case that incorporates
                  only the terms and conditions of the above written agreement
                  without any change; and
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <table
          width="100%"
          style={{ pageBreakInside: "auto", fontSize: 14, verticalAlign: "top" }}
          cellPadding={5}
          cellSpacing={5}
        >
          <tbody>
            <tr>
              {" "}
              <td width="2%">
                <div />
              </td>
              <td width="2%" valign="top">
                c
              </td>
              <td
                width="95%"
                valign="top"
                style={{ display: "flex", gap: 10, alignItems: "center" }}
              >
                <div>
                  Should the court enter a judgment that changes the above written
                  agreement in any way, then I do not waive any of my rights under
                  the SCRA, including my right to seek to set aside the judgment at
                  any time.
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <table
          width="100%"
          style={{ pageBreakInside: "auto", fontSize: 14, verticalAlign: "top", marginTop:"10px" }}
          cellPadding={5}
          cellSpacing={5}
        >
          <tbody>
            <tr>
              <td width="3%" valign="top">
                3 .
              </td>
              <td
                width="95%"
                valign="top"
                style={{ display: "flex", gap: 10, alignItems: "center" }}
              >
                <div>
                  This conditional waiver was executed during or after a period of
                  military service.
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div style={{ marginLeft: 10, fontSize: 15 }}>
          I declare under penalty of perjury under the laws of the State of
          California that the foregoing is true and correct.
        </div>
        <div style={{ margin: 5, fontSize: 16 }}>Date:
        <input
                   name={"Date"}
                   onChange={(e) => handleChange(e)}
                  size={20} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "2px",width:"24%" }} type="text" id="name" />
        </div>
        <div style={{ display: "flex", fontSize: 15 }}>
          <div style={{ marginLeft: 25 }}>
          <input
                   name={"TypeOrPrintName"}
                   onChange={(e) => handleChange(e)}
                  size={20} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "2px",width:"194%" }} type="text" id="name" />
        <h4>(TYPE OR PRINT NAME)</h4>
          </div>
          <div style={{ marginLeft: "40%" }}>
          <input
                   name={"SignatureOfRespondent"}
                   onChange={(e) => handleChange(e)}
                  size={20} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none",width:"164%", margin: "2px" }} type="text" id="name" />
          <h4>(SIGNATURE OF RESPONDENT)</h4>
          </div>
        </div>
        <div style={{ border: "1px solid  #000000", verticalAlign: "top", borderCollapse: "collapse" }} >
          <div style={{ textAlign: "center" }}>
            <b>Attention: Clerk of the Court</b>
          </div>
          <div style={{ textAlign: "center" }}>
            <b>
              By law, a servicemember must not be charged a fee to file Appearance,
              Stipulations, and Waivers <br></br>(form FL-130).
            </b>
          </div>
        </div>
        <hr style={{ width: "100%" }} />
        <div
          className="footer"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div style={{ listStyle: "none", fontSize: 10 }}>
            <div>
              Form Approved for Optional Use
              <br />
              Judicial Council of California
              <br />
              FL-130(A) [New January 1, 2011]
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <b>
              DECLARATION AND CONDITIONAL WAIVER OF RIGHTS
              <br />
              UNDER THE SERVICEMEMBERS CIVIL RELIEF ACT OF 2003
            </b>
          </div>
          <div style={{ listStyle: "none", fontSize: 10 }}>
            <div>50 U.S.C. Appen. § 501 et seq.</div>
            <div> Government Code, § 70673</div>
            <div>www.courts.ca.gov</div>
          </div>
        </div>
      </div>
    </div>

  )
}
