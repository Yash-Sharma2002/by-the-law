import React from 'react'

export default function SU100() {
  return (
    <>
      <div style={{ maxWidth: "1100px", margin: "auto" }}>
        <h3 className="fl">FL-100</h3>
        <table style={{ width: "100%", margin: 5, border: "2px solid black", borderCollapse: "collapse" }}>
          <tbody>
            <tr>
              <td style={{ border: "2px solid black", borderCollapse: "collapse", width: "70%" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                  <label>PARTY WITHOUT ATTORNEY OR ATTORNEY</label>
                  <div style={{ marginBottom: 4 }}><label>STATE BAR NUMBER:</label>
                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="fax" />
                  </div>
                </div>
                <div style={{ marginBottom: 2 }}>
                  <label>NAME:</label>
                  <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "93%" }} type="text" id="fax" />
                </div>
                <div style={{ marginBottom: 2 }}>
                  <label>FIRM NAME:</label>
                  <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "87.9%" }} type="text" id="fax" />
                </div>
                <div style={{ marginBottom: 2 }}>
                  <label>STREET ADDRESS:</label>
                  <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "82.2%" }} type="text" id="fax" />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
                  <div style={{ marginBottom: 2 }}>
                    <label>CITY:</label>
                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" />

                  </div>
                  <div >
                    <label>STATE:</label>
                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "75%" }} type="text" />

                  </div>
                  <div style={{ marginBottom: 2 }}>
                    <label>ZIP CODE</label>
                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "69%" }} type="text" />
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                  <div style={{ marginBottom: 2 }}>
                    <label htmlFor="telephone">TELEPHONE NO.:</label>
                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"68%" }} type="number" id="telephone" />
                  </div>
                  <div style={{ marginBottom: 2 }}>
                    <label htmlFor="fax">fAX NO:</label>
                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"82%" }} type="text" />
                  </div>
                </div>
                <div style={{ marginBottom: 2 }}>
                  <label htmlFor="attorney">ATTORNEY FOR (name):</label>
                  <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "75%" }} type="email" id="attorney" />
                </div>
              </td>
              <td
                style={{ textAlign: "center", top: 0, border: "2px solid black", borderCollapse: "collapse" }}
                rowSpan={3}
              >
                FOR COURT USE ONLY
              </td>
            </tr>
            <tr>
              <td style={{ margin: 0, border: "2px solid black", borderCollapse: "collapse" }}>
                <div className="font  " style={{ margin: 2 }}>
                  <label htmlFor="name">
                    SUPERIOR COURT OF CALIFORIA, COUNTY OF
                  </label>
                  <input
                    style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "55%" }}
                    type="text"
                    id="name"
                  />
                </div>
                <div style={{ marginBottom: 2 }}>
                  <label htmlFor="street">STREET ADDRESS:</label>
                  <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "82%" }} type="text" id="street" />
                </div>
                <div style={{ marginBottom: 2 }}>
                  <label htmlFor="street">MAILING ADDRESS:</label>
                  <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "80.6%" }} type="text" id="street" />
                </div>
                <div style={{ marginBottom: 2 }}>
                  <label htmlFor="street">CITY AND ZIP CODE:</label>
                  <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "79.4%" }} type="text" id="street" />
                </div>
                <div style={{ marginBottom: 2 }}>
                  <label htmlFor="street">BRANCH NAME:</label>
                  <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "84%" }} type="text" id="street" />
                </div>
              </td>
            </tr>
            <tr>
              <td style={{ border: "2px solid black", borderCollapse: "collapse" }}>
                <div style={{ marginBottom: 2 }}>
                  <label htmlFor="name">PETITIONER:</label>
                  <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "87.6%" }} type="text" id="name" />
                </div>
                <div style={{ marginBottom: 2 }}>
                  <label htmlFor="street">RESPONDENT:</label>
                  <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "86%" }} type="text" id="street" />
                </div>
              </td>
            </tr>
            <tr>
              <td style={{ border: "2px solid black", borderCollapse: "collapse" }}>
                <div style={{ display: "flex", justifyContent: "flex-start" }}>
                  <div>
                    <b>PETITION FOR</b>
                  </div>
                  <div style={{ marginLeft: "50.2%" }}>
                    <b>
                      <input type="checkbox" style={{ marginRight: 5 }} />
                      AMENDED
                    </b>
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
                  <div>
                    <b>
                      {" "}
                      <input type="checkbox" style={{ marginRight: 5 }} />
                      Dissolution (Divorce) of:
                    </b>
                  </div>
                  <div style={{ marginLeft: "30.5%" }}>
                    <input type="checkbox" style={{ marginRight: 5 }} />
                    Marriage
                  </div>
                  <div style={{ marginLeft: "20%" }}>
                    <input type="checkbox" style={{ marginRight: 5 }} />
                    Domestic Partnership
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
                  <div>
                    <input type="checkbox" style={{ marginRight: 3 }} />
                    <span><b> Legal Separation of: </b></span>
                  </div>
                  <div style={{ marginLeft: "30.4%" }}>
                    <input type="checkbox" style={{ marginRight: 5 }} />
                    Marriage
                  </div>
                  <div style={{ marginLeft: "20%" }}>
                    <input type="checkbox" style={{ marginRight: 5 }} />
                    Domestic Partnership
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
                  <div>
                    <input type="checkbox" style={{ marginRight: 5 }} />
                    <b>Nullity of:</b>
                  </div>
                  <div style={{ marginLeft: "30.9%" }}>
                    <input type="checkbox" style={{ marginRight: 5 }} />
                    Marriage
                  </div>
                  <div style={{ marginLeft: "20%" }}>
                    <input type="checkbox" style={{ marginRight: 5 }} />
                    Domestic Partnership
                  </div>
                </div>
              </td>
              <td>
                <div className="ml">
                  <label htmlFor="street">CASE NUMBER:</label>
                  <br />
                  <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "95%" }} type="text" id="street" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div style={{ display: "flex", margin: 20 }}>
          <div>1.</div>
          <div style={{ marginLeft: 10 }}>
            <b>LEGAL RELATIONSHIP </b>(check all that apply):
          </div>
        </div>
        <div style={{ display: "flex", margin: 10 }}>
          <div style={{ marginLeft: 35 }}>(a)</div>
          <div style={{ marginLeft: 10 }}>
            <input type="checkbox" style={{ marginRight: 5 }} />
            We are married
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 10 }}>
          <div style={{ marginLeft: 45 }}>(b)</div>
          <div style={{ marginLeft: 10 }}>
            <input type="checkbox" style={{ marginRight: 5 }} />
            We are domestic partners and our domestic partnership was established in
            California.
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 10 }}>
          <div style={{ marginLeft: 45 }}>(c)</div>
          <div style={{ marginLeft: 10 }}>
            <input type="checkbox" style={{ marginRight: 5 }} />
            We are domestic partners and our domestic partnership was NOT
            established in California.
          </div>
        </div>
        <div style={{ display: "flex", margin: 20 }}>
          <div style={{ marginLeft: 5 }}>2.</div>
          <div style={{ marginLeft: 10 }}>
            <b>RESIDENCE REQUIREMENTS </b>(check all that apply):
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 20 }}>
          <div style={{ marginLeft: 45 }}>(a)</div>
          <div style={{ marginLeft: 10 }}>
            <input type="checkbox" style={{ marginRight: 5 }} />
            Petitioner
            <input type="checkbox" style={{ marginRight: 5 }} />
            Respondent has been a resident of this state for at least six months and
            of this county for at least three
            <br style={{ marginLeft: 5 }} />
            months immediately preceding the filing of this Petition. (For a
            divorce, unless you are in the legal relationship described{" "}
            <br style={{ marginLeft: 5 }} /> in 1b., at least one of you must comply
            with this requirement.)
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 20 }}>
          <div style={{ marginLeft: 45 }}>(b)</div>
          <div style={{ marginLeft: 5 }}>
            {" "}
            <input type="checkbox" style={{ marginRight: 5 }} /> Our domestic
            partnership was established in California. Neither of us has to be a
            resident or have a domicile in California
            <br /> to dissolve our partnership here.
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 10, marginLeft: 45 }}>
          (c)
          <div style={{ marginLeft: 5 }}>
            <input type="checkbox" style={{ marginRight: 5 }} /> we are the same
            sex, were married in Cali We fornia, but currently live in a
            jurisdiction that does not recognize, and will not <br /> dissolve,our
            marriage.This Petition is filed in the county where we married.
          </div>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr"}} >
          <div style={{ marginLeft: 7 }}>Petitioner lives in (specify):
            <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "60%" }} type="text" id="fax" />

          </div>
          <div style={{ marginLeft: 5 }}>Respondent lives in (specify):
          <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "56%" }} type="text" id="fax" />

          </div>
        </div>
        <div style={{ display: "flex", margin: 20 }}>
          <div style={{ marginLeft: 5 }}>3.</div>
          <div style={{ marginLeft: 10 }}>
            <b>STATISTICAL FACTS</b>
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 5, marginLeft: 45 }}>
          <div style={{ width: "5%", verticalAlign: "top" }} >
            (a)
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr"}}>
            <div>
              <input type="checkbox" style={{ marginRight: 5 }} />
              (1) Date of marriage (specify):
              <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "42%" }} type="text" id="fax" />

            </div>
            <div style={{ marginLeft: 5 }}>(2) Date of separation (specify):
            <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "40%" }} type="text" id="fax" />

            </div>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ marginLeft:"11%" }}>
            (3)Time from date of marriage to date of separation (specify):
          </div>
          <div style={{ marginLeft: 4 }}>Years
          <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "60%" }} type="text" id="fax" />

          </div>
          <div style={{ marginLeft: 4 }}>Months <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginTop: "4px", width: "73%" }} type="text" id="fax" />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            margin: 10,
            marginLeft: 45
          }}
        >
          (b)
          <div>
            <input type="checkbox" style={{ marginRight: 5 }} />
            (1) Registration date of domestic partnership with the California
            Secretary of State or other state equivalent (specify below):
            <input size={35} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="name" />
          </div>
          <div>(2) Date of separation (specify):      
                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "56%" }} type="text" id="fax" />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginLeft: 40
          }}
        >
          <div>
            (3) Time from date of registration of domestic partnership to date of
            separation (specify):
          </div>
          <div><label> Years</label>
          <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "56%" }} type="text" />

          </div>
          <div><label> Months</label>
          <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "56%" }} type="text"  />

          </div>
        </div>
        <div style={{ display: "flex", margin: 20 }}>
          <div>4.</div>
          <div style={{ marginLeft: 10 }}>
            <b>MINOR CHILDREN</b>
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 2 }}>
          <div style={{ marginLeft: 45 }}>a</div>
          <div style={{ marginLeft: 15 }}>
            <input type="checkbox" style={{ marginRight: 5 }} />
            There are no minor children.
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 2 }}>
          <div style={{ marginLeft: 45 }}>b</div>
          <div style={{ marginLeft: 15 }}>
            <input type="checkbox" style={{ marginRight: 5 }} />
            The minor children are:
          </div>
        </div>
        {/* <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center"
          }}
        >
          <div style={{ marginLeft: 75 }}>Child's name</div>
          <div style={{ marginLeft: 400 }}>Birthdate</div>
          <div style={{ marginLeft: 400 }}>Age</div>
        </div> */}
        <div style={{ display: "grid", gridTemplateColumns: "40% 20% 20%", gap: "10px" }}>

          <div style={{ marginLeft: "30%" }}>
            <label style={{ textDecoration: "underLine", marginLeft: "20%" }}>Child's name</label><br />
            <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "90%", marginBottom: "4px" }} type="text" /><br />
            <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "90%", marginBottom: "4px" }} type="text" /><br />
            <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "90%", marginBottom: "4px" }} type="text" /><br />
            <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "90%", marginBottom: "4px" }} type="text" />


          </div>

          <div>
            <label style={{ textDecoration: "underLine", marginLeft: "25%" }}>Birthdate</label>
            <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", marginBottom: "4px" }} type="text" />
            <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", marginBottom: "4px" }} type="text" />
            <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", marginBottom: "4px" }} type="text" />
            <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", marginBottom: "4px" }} type="text" />

          </div>

          <div>
            <label style={{ textDecoration: "underLine", marginLeft: "34%" }}>Age</label>
            <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", marginBottom: "4px" }} type="text" />
            <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", marginBottom: "4px" }} type="text" />
            <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", marginBottom: "4px" }} type="text" />
            <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", marginBottom: "4px" }} type="text" />

          </div>

        </div>


        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            margin: 10
          }}
        >
          <div>
            <input type="checkbox" style={{ marginLeft: 125 }} />
           <label  style={{marginLeft:"7px"}}>(1) continued on Attachment 4b.</label>
          </div>
          <div>
            <input type="checkbox" style={{ marginLeft: 50 }} />
            <label style={{marginLeft:"7px"}}>(2)a child who is not yet born.</label>
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 10 }}>
          <div style={{ marginLeft: 45 }}>c.</div>
          <div style={{ marginLeft: 15 }}>
            If any children listed above were born before the marriage or domestic
            partnership, the court has the authority to determine those children to
            be children of the marriage or domestic partnership.
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 10 }}>
          <div style={{ marginLeft: 45 }}>d.</div>
          <div style={{ marginLeft: 15 }}>
            {" "}
            If there are minor children of Petitioner and Respondent, a completed
            Declaration Under Uniform Child Custody Jurisdiction and Enforcement Act
            (UCCJEA) (form{" "}
            <a href="FL-105" target="_blank" style={{color:"blue"}}>
              FL-105
            </a>{" "}
            ) must be attached
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 10 }}>
          <div style={{ marginLeft: 45 }}>e.</div>
          <div style={{ marginLeft: 15 }}>
            Petitioner and Respondent signed a voluntary declaration of parentage or
            paternity. (Attach a copy if available.)
          </div>
        </div>
        <hr style={{ width: "100%" }} />
        <div
          className="footer"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div style={{ listStyle: "none" }}>
            <li>Form Adopted for Mandatory Use</li>
            <li>Judicial Council of California</li>
            <li> FL-100 [Rev. January 1, 2020]</li>
          </div>
          <div style={{ textAlign: "center" }}>
            <h3>PETITION—MARRIAGE/DOMESTIC PARTNERSHIP</h3>
            <label className="font" style={{ textAlign: "center" }}>
              (Family Law)
            </label>
          </div>
          <div style={{ listStyle: "none" }}>
            <li>Family Code, §§ 297, 299, 2320, 2330, 3409</li>
            <li>www.courts.ca.gov</li>
          </div>
        </div>
        <table style={{ width: "100%", marginTop: 25, border: "2px solid black", borderCollapse: "collapse" }}>
          <tbody>
            <tr>
              <td style={{ border: "2px solid black", borderCollapse: "collapse" }}>
                <div style={{ marginBottom: 2 }}>
                  <label htmlFor="name">PETITIONER/PLAINTIFF:</label>
                  <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "78%" }} type="text" id="name" />
                </div>
                <div style={{ marginBottom: 3 }}>
                  <label htmlFor="street">RESPONDENT/DEFENDANT:</label>
                  <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "73.4%" }} type="text" id="street" />
                </div>
              </td>
              <td style={{ width: "30%", border: "2px solid black", borderCollapse: "collapse" }}>
                <div className="ml">
                  <label htmlFor="street">CASE NUMBER:</label>
                  <br />
                  <input size={35} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div style={{ display: "flex", margin: 20 }}>
          <div style={{ marginLeft: 5 }}>5.</div>
          <div style={{ marginLeft: 5 }}>
            <b>LEGAL GROUNDS (Family Code sections 2200–2210, 2310–2312)</b>
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 2 }}>
          <div style={{ marginLeft: 45 }}>a.</div>
          <div style={{ marginLeft: 5 }}>
            <input type="checkbox" style={{ marginRight: 5 }} />
           <label style={{marginLeft:"12px"}}> Divorce</label>
            <label style={{marginLeft:"10px",marginRight:"15px"}}>or</label>
          </div>
          <div>
            <input type="checkbox" style={{ marginRight: 5 }} />
            <label style={{marginLeft:"7px"}}>Legal separation of the marriage or domestic partnership based on (check
              one):</label>
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 2, marginLeft: 75 }}>
          <div style={{ marginLeft: 5 }}>(1).</div>
          <div style={{ marginLeft: 5 }}>
            <input type="checkbox" style={{ marginRight: 10 }} />
            irreconcilable differences.
          </div>
          <div style={{ marginLeft: 45 }}>(2)</div>
          <div>
            <input type="checkbox" style={{ marginRight: 10 }} />
            permanent legal incapacity to make decisions
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 2 }}>
          <div style={{ marginLeft: 45 }}>b.</div>
          <div style={{ marginLeft: 5 }}>
            <input type="checkbox" style={{ marginRight: 5 }} />
            Nullity of void marriage or domestic partnership based on
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 2 }}>
          <div style={{ marginLeft: 75 }}>(1).</div>
          <div style={{ marginLeft: 5 }}>
            <input type="checkbox" style={{ marginRight: 5 }} />
            incest
          </div>
          <div style={{ marginLeft: 182 }}>(2)</div>
          <div>
            <input type="checkbox" style={{ marginRight: 5 }} />
            bigamy
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 2 }}>
          <div style={{ marginLeft: 45 }}>c.</div>
          <div style={{ marginLeft: 5 }}>
            <input type="checkbox" style={{ marginRight: 5 }} />
            Nullity of voidable marriage or domestic partnership based on
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 2 }}>
          <div style={{ marginLeft: 75 }}>(1).</div>
          <div style={{ marginLeft: 5 }}>
            <input type="checkbox" style={{ marginRight: 5 }} />
            petitioner’s age at time of registration of domestic partnership or
            marriage.
          </div>
          <div style={{ marginLeft: 45 }}>(4)</div>
          <div>
            <input type="checkbox" style={{ marginRight: 5 }} />
            fraud.
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 2 }}>
          <div style={{ marginLeft: 75 }}>(2)</div>
          <div style={{ marginLeft: 5 }}>
            <input type="checkbox" style={{ marginRight: 5 }} />
            prior existing marriage or domestic partnership
          </div>
          <div style={{ marginLeft: 267 }}>(5)</div>
          <div>
            <input type="checkbox" style={{ marginRight: 5 }} />
            force
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 2 }}>
          <div style={{ marginLeft: 75 }}>(3)</div>
          <div style={{ marginLeft: 5 }}>
            <input type="checkbox" style={{ marginRight: 5 }} />
            unsound mind.
          </div>
          <div style={{ marginLeft: 526 }}>(6)</div>
          <div>
            <input type="checkbox" style={{ marginRight: 5 }} />
            physical incapacity.
          </div>
        </div>
        <div style={{ display: "flex", margin: 20 }}>
          <div style={{ marginLeft: 5 }}>6.</div>
          <div style={{ marginLeft: 5 }}>
            <b>CHILD CUSTODY AND VISITATION (PARENTING TIME)</b>
          </div>
          <div style={{ marginLeft: 45 }}><b>Petitioner</b></div>
          <div style={{ marginLeft: 25 }}><b>Respondent</b></div>
          <div style={{ marginLeft: 25 }}><b>Joint</b></div>
          <div style={{ marginLeft: 25 }}><b>Other</b></div>
        </div>
        <div style={{ display: "flex", marginTop: 2 }}>
          <div style={{ marginLeft: 45 }}>a.</div>
          <div style={{ marginLeft: 5 }}>
            Child visitation (parenting time) be granted to.......
          </div>
          <div style={{ marginLeft: 63 }}>
            <input type="checkbox" style={{ marginRight: 5 }} />
          </div>
          <div style={{ marginLeft: 75 }}>
            <input type="checkbox" style={{ marginRight: 5 }} />
          </div>
          <div style={{ marginLeft: 85 }}>
            <input type="checkbox" style={{ marginRight: 5 }} />
          </div>
          <div style={{ marginLeft: 53 }}>
            <input type="checkbox" style={{ marginRight: 5 }} />
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 2 }}>
          <div style={{ marginLeft: 45 }}>b.</div>
          <div style={{ marginLeft: 5 }}>Physical custody of children to.......</div>
          <div style={{ marginLeft: 191 }}>
            <input type="checkbox" style={{ marginRight: 5 }} />
          </div>
          <div style={{ marginLeft: 75 }}>
            <input type="checkbox" style={{ marginRight: 5 }} />
          </div>
          <div style={{ marginLeft: 85 }}>
            <input type="checkbox" style={{ marginRight: 5 }} />
          </div>
          <div style={{ marginLeft: 53 }}>
            <input type="checkbox" style={{ marginRight: 5 }} />
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 2 }}>
          <div style={{ marginLeft: 45 }}>c.</div>
          <div style={{ marginLeft: 5 }}>irreconcilable differences.
          </div>
          <div style={{ marginLeft: 253 }}>
            <input type="checkbox" style={{ marginRight: 5 }} />
          </div>
          <div style={{ marginLeft: 75 }}>
            <input type="checkbox" style={{ marginRight: 5 }} />
          </div>
          <div style={{ marginLeft: 85 }}>
            <input type="checkbox" style={{ marginRight: 5 }} />
          </div>
          <div style={{ marginLeft: 53 }}>
            <input type="checkbox" style={{ marginRight: 5 }} />
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 2 }}>
          <div style={{ marginLeft: 65 }}>As requested in</div>
          <div style={{ marginLeft: 45 }}>
            <input type="checkbox" style={{ marginRight: 5 }} />
            form FL-311
          </div>
          <div style={{ marginLeft: 45 }}>
            <input type="checkbox" style={{ marginRight: 5 }} />
            form FL-312{" "}
          </div>
          <div style={{ marginLeft: 45 }}>
            <input type="checkbox" style={{ marginRight: 5 }} />
            form FL-341(C)
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 2 }}>
          <div style={{ marginLeft: 234 }}>
            <input type="checkbox" style={{ marginRight: 5 }} />
            form FL-341(D)
          </div>
          <div style={{ marginLeft: 25 }}>
            <input type="checkbox" style={{ marginRight: 5 }} />
            form FL-341(E)
          </div>
          <div>
            <input type="checkbox" style={{ marginLeft: 25 }} />
            Attachment 6c(1)
          </div>
        </div>
        <div style={{ display: "flex", margin: 20 }}>
          <div style={{ marginLeft: 5 }}>7.</div>
          <div style={{ marginLeft: 5 }}>
            <b>CHILD SUPPORT</b>
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 5 }}>
          <div style={{ marginLeft: 45 }}>a.</div>
          <div style={{ marginLeft: 5 }}>
            If there are minor children born to or adopted by Petitioner and
            Respondent before or during this marriage or domestic partnership, the
            court will make orders for the support of the children upon request and
            submission of financial forms by the requesting party.
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 5 }}>
          <div style={{ marginLeft: 45 }}>b.</div>
          <div style={{ marginLeft: 5 }}>
            An earnings assignment may be issued without further notice.
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 5 }}>
          <div style={{ marginLeft: 45 }}>c.</div>
          <div style={{ marginLeft: 5 }}>
            Any party required to pay support must pay interest on overdue amounts
            at the "legal" rate, which is currently 10 percent
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 5 }}>
          <div style={{ display: "flex" }}>
            <div style={{ marginLeft: 45 }}>d</div>
            <div style={{ marginLeft: 5 }}>
                <input type="checkbox" style={{ marginRight: 5 }} />   
            </div>
          </div>
        </div>
        <div style={{ marginLeft: 75 }}>
          <textarea  placeholder="other (specify) " style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", resize: "none", width: "96%" }}
            rows={6} />
        </div>
        <div style={{ display: "flex", margin: 20 }}>
          <div style={{ marginLeft: 5 }}>8.</div>
          <div style={{ marginLeft: 5 }}>
            <b>SPOUSAL OR DOMESTIC PARTNER SUPPORT</b>
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 5 }}>
          <div style={{ marginLeft: 45 }}>a.</div>
          <div style={{ marginLeft: 5 }}>
            <input type="checkbox" style={{ marginRight: 5 }} />
            Spousal or domestic partner support payable to
          </div>
          <div style={{ marginLeft: 25 }}>
            <input type="checkbox" style={{ marginRight: 5 }} />
            Petitioner
          </div>
          <div style={{ marginLeft: 25 }}>
            <input type="checkbox" style={{ marginRight: 5 }} />
            Respondent
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 5 }}>
          <div style={{ marginLeft: 45 }}>b.</div>
          <div style={{ marginLeft: 5 }}>
            <input type="checkbox" style={{ marginRight: 5 }} />
            Terminate (end) the court's ability to award support to
          </div>
          <div style={{ marginLeft: 25 }}>
            <input type="checkbox" style={{ marginRight: 5 }} />
            Petitioner
          </div>
          <div style={{ marginLeft: 25 }}>
            <input type="checkbox" style={{ marginRight: 5 }} />
            Respondent
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 5 }}>
          <div style={{ marginLeft: 45 }}>c.</div>
          <div style={{ marginLeft: 5 }}>
            <input type="checkbox" style={{ marginRight: 5 }} />
            Reserve for future determination the issue of support payable to
          </div>
          <div style={{ marginLeft: 25 }}>
            <input type="checkbox" style={{ marginRight: 5 }} />
            Petitioner
          </div>
          <div style={{ marginLeft: 25 }}>
            <input type="checkbox" style={{ marginRight: 5 }} />
            Respondent
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 5 }}>
          <div style={{ marginLeft: 45 }}>d.</div>
          <div style={{ marginLeft: 5 }}>
            <b>
              <input type="checkbox" style={{ marginRight: 5 }} />
             
            </b>
          </div>
          <textarea placeholder=' Other specify'
           style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", resize: "none", width: "89%" }}
            rows={4} />
        </div>



        <div style={{ display: "flex", margin: 20 }}>
          <div style={{ marginLeft: 5 }}>9.</div>
          <div style={{ marginLeft: 5 }}>
            <b>SEPARATE PROPERTY</b>
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 5 }}>
          <div style={{ marginLeft: 45 }}>a.</div>
          <div style={{ marginLeft: 5 }}>
            <input type="checkbox" style={{ marginRight: 5 }} />
            There are no such assets or debts that I know of to be confirmed by the
            court
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 5 }}>
          <div style={{ marginLeft: 45 }}>b.</div>
          <div style={{ marginLeft: 5 }}>
            <input type="checkbox" style={{ marginRight: 5 }} />
            Confirm as separate property the assets and debts in
          </div>
          <div>
            <input type="checkbox" style={{ marginLeft: 25 }} />
            Property Declaration (form{" "}
            <a href="FL-160" target="_blank" style={{color:"blue"}}>
              FL-160
            </a>
            )
          </div>
          <div>
            <input type="checkbox" style={{ marginLeft: 25 }} />
            <a href="Attachment 9b" target="_blank" style={{color:"blue"}} >
              Attachment 9b
            </a>
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 5 }}>
          <div style={{ marginLeft: 75 }}>
            <input type="checkbox" style={{ marginRight: 5 }} />
            the following list.{" "}
          </div>
          <div style={{ marginLeft: 200 }}>Item </div>
          <div style={{ marginLeft: "44%" }}>Confirm to</div>
        </div>
        <div style={{ display: "flex", marginTop: 5 }}>
          <div style={{ marginLeft: 75 }}>
            <input size={95} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="name" />
          </div>
          <div>
            <input
              size={35}
              style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", marginLeft: 10 }}
              type="text"
              id="name"
            />
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 5 }}>
          <div style={{ marginLeft: 75 }}>
            <input size={95} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="name" />
          </div>
          <div>
            <input
              size={35}
              style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", marginLeft: 10 }}
              type="text"
              id="name"
            />
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 5 }}>
          <div style={{ marginLeft: 75 }}>
            <input size={95} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="name" />
          </div>
          <div>
            <input
              size={35}
              style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", marginLeft: 10 }}
              type="text"
              id="name"
            />
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 5 }}>
          <div style={{ marginLeft: 75 }}>
            <input size={95} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="name" />
          </div>
          <div>
            <input
              size={35}
              style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", marginLeft: 10 }}
              type="text"
              id="name"
            />
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 5 }}>
          <div style={{ marginLeft: 75 }}>
            <input size={95} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="name" />
          </div>
          <div>
            <input
              size={35}
              style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", marginLeft: 10 }}
              type="text"
              id="name"
            />
          </div>
        </div>  
        <hr style={{ width: "100%" }} />
        <div
          className="footer"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div style={{ listStyle: "none" }}>
            <li>FL-100 [Rev. January 1, 2020]</li>
          </div>
          <div style={{ textAlign: "center" }}>
            <h3>PETITION—MARRIAGE/DOMESTIC PARTNERSHIP</h3>
            <label className="font" style={{ textAlign: "center" }}>
              (Family Law)
            </label>
          </div>
          <div style={{ listStyle: "none" }}>
            <li>Page 2 of 3</li>
          </div>
        </div>
        <table
          style={{ width: "100%", marginTop: 20, marginBottom: 20, border: "2px solid black", borderCollapse: "collapse" }}
        >
          <tbody>
            <tr>
              <td style={{ border: "2px solid black", borderCollapse: "collapse" }}>
                <div className="ml">
                  <label htmlFor="name">PETITIONER/PLAINTIFF:</label>
                  <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "4px",width:"77%" }} type="text" id="name" />
                </div>
                <div className="ml">
                  <label htmlFor="street">RESPONDENT/DEFENDANT:</label>
                  <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"72.5%" }} type="text" id="street" />
                </div>
              </td>
              <td style={{ border: "2px solid black", borderCollapse: "collapse", width: "30%" }} >
                <div className="ml">
                  <label htmlFor="street">CASE NUMBER:</label>
                  <br />
                  <input size={35} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div style={{ display: "flex", margin: 20 }}>
          <div style={{ marginLeft: 5 }}>10.</div>
          <div style={{ marginLeft: 5 }}>
            <b>COMMUNITY AND QUASI-COMMUNITY PROPERTY</b>
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 5 }}>
          <div style={{ marginLeft: 45 }}>a.</div>
          <div style={{ marginLeft: 5 }}>
            <input type="checkbox" style={{ marginRight: 5 }} />
            There are no such assets or debts that I know of to be divided by the
            court.
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 5 }}>
          <div style={{ marginLeft: 45 }}>b.</div>
          <div style={{ marginLeft: 5 }}>
            <input type="checkbox" style={{ marginRight: 5 }} />
            Determine rights to community and quasi-community assets and debts. All
            such assets and debts are listed
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 5 }}>
          <div style={{ marginLeft: 80 }}>
            <input type="checkbox" style={{ marginRight: 5 }} />
            in Property Declaration (form{" "}
            <a href="FL-160" target="_blank" style={{color:"blue"}}>
              FL-160
            </a>{" "}
            )
          </div>
          <div style={{ marginLeft: 55 }}>
            <input type="checkbox" style={{ marginRight: 5 }} />
            in
            <a href="attrachement 10b" target="_blank" style={{color:"blue"}}>
              attrachement 10b
            </a>
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 5 }}>
          <div style={{ marginLeft: 80 }}>
            <input type="checkbox" style={{ marginRight: 5 }} />
            
          </div>
          <textarea placeholder='as follows (specify)' 
          style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", resize: "none", width: "93%" }}
            rows={4} />
        </div>

        <div style={{ display: "flex", margin: 20 }}>
          <div style={{ marginLeft: 5 }}>11.</div>
          <div style={{ marginLeft: 5 }}>
            <b>OTHER REQUESTS</b>
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 2 }}>
          <div style={{ marginLeft: 45 }}>a.</div>
          <div style={{ marginLeft: 5 }}>
            <input type="checkbox" style={{ marginRight: 5 }} />
            Attorney's fees and costs payable by
          </div>
          <div>
            <input type="checkbox" style={{ marginLeft: 55 }} />
            Petitioner
          </div>
          <div>
            <input type="checkbox" style={{ marginLeft: 55 }} />
            Respondent
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 2 }}>
          <div style={{ marginLeft: 45 }}>b.</div>
          <div style={{ marginLeft: 5 }}>
            <input type="checkbox" style={{ marginRight: 5 }} />
            Petitioner's former name be restored to (specify):
          </div>
        </div>
        <div style={{ display: "flex", marginTop: "1px" }}>
          <div style={{ marginLeft: 45 }}>c.</div>
          <div style={{ marginLeft: 5 }}>
            <input type="checkbox" style={{ marginRight: 5 }} />
            
          </div>
          <div>
            <textarea  placeholder='Other(specify)'
            style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", resize: "none", width: "64rem" }}
              rows={4} />
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 2 }}>
          <div style={{ marginLeft: 60 }}>
            <input type="checkbox" style={{ marginRight: 5 }} />
            Continued on Attachment 11c.
          </div>
        </div>
        <div style={{ display: "flex", margin: 20 }}>
          <div style={{ marginLeft: 5 }}>12.</div>
          <div style={{ marginLeft: 10 }}>
            <b>
              {" "}
              I HAVE READ THE RESTRAINING ORDERS ON THE BACK OF THE SUMMONS, AND I
              UNDERSTAND THAT THEY APPLY TO ME WHEN THIS PETITION IS FILED
            </b>
          </div>
        </div>
        <p style={{ marginLeft: 25 }}>
          I declare under penalty of perjury under the laws of the State of
          California that the foregoing is true and correct.
        </p>
        <div style={{ marginLeft: 25 }}>
          Date:{" "}
          <input
            size={35}
            style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", marginLeft: 15 }}
            type="text"
            id="name"
          />
        </div>
        <div style={{ display: "flex", margin: 5, marginLeft: 25 }}>
          <div style={{ marginLeft: 50 }}>
            <div>
              {" "}
              <input size={50} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="name" />
            </div>
            <div>(TYPE OR PRINT NAME)</div>
          </div>
          <div style={{ display: "flex", margin: 5, marginLeft: 25 }}>
            <div style={{ marginLeft: 200 }}>
              <div>
                {" "}
                <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"140%" }} type="text" id="name" />
              </div>
              <div>(SIGNATURE OF RESPONDENT)</div>
            </div>
          </div>
        </div>
        <div style={{ marginLeft: 25 }}>
          Date:{" "}
          <input
            size={35}
            style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", marginLeft: 15 }}
            type="text"
            id="name"
          />
        </div>
        <div style={{ display: "flex", margin: 5, marginLeft: 25 }}>
          <div style={{ marginLeft: 50 }}>
            <div>
        
              <input size={50} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="name" />
            </div>
            <div>(TYPE OR PRINT NAME)</div>
          </div>
          <div style={{ display: "flex", margin: 5, marginLeft: 25 }}>
            <div style={{ marginLeft: 200 }}>
              <div>
                {" "}
                <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"100%" }} type="text" id="name" />
              </div>
              <div>(SIGNATURE OF ATTORNEY FOR PETITIONER)</div>
            </div>
          </div>
        </div>
        <div
          style={{
            fontSize:"10px",
            border: "1px solid black",
            padding: 2,
            width: "95%",
            marginLeft: 40
          }}
        >
          <p style={{ marginLeft: 30 }}>
            <b>FOR MORE INFORMATION:</b> Read Legal Steps for a Divorce or
            Legal Separation (
            <a href="Form FL-107-INFO" target="_blank" style={{color:"blue"}}>
              Form FL-107-INFO
            </a>
            ) and visit "Families Change"
            at
            <a href="https://www.familieschange.ca.gov" target="_blank">
              www.familieschange.ca.gov
            </a>
            — an online guide for parents and children going through divorce or
            separation.
          </p>
        </div>
        <div
          style={{
            border: "1px solid black",
            padding: 2,
            width: "95%",
            marginTop:"5px",
            marginLeft: 40
          }}
        >
          <div style={{ margin: 0, display: "flex" }}>
            <div style={{ marginLeft: 30 }}>
              <strong>NOTICE:</strong>
            </div>
            <div>
              You may redact (black out) social security numbers from any written
              material filed with the court in this case other than a form 
              used to collect child, spousal, or partner support.
            </div>
          </div>
        </div>
        <div
          style={{
            border: "1px solid black",
            padding: 2,
            margin: 5,
            width: "95%",
            marginLeft: 40
          }}
        >
          <div style={{ marginLeft: 30 }}>
            <strong>NOTICE—CANCELLATION OF RIGHTS:</strong> Dissolution or legal
            separation may automatically cancel the rights of a domestic partner
             or spouse under the other domestic partner's or spouse's will,
            trust, retirement plan, power of attorney, pay-on-death bank account,
            survivorship rights to any property owned in joint tenancy, and
            any other similar thing. It does not automatically cancel the right of a
            domestic partner or spouse as a beneficiary of the other partner's or
            spouse's life insurance policy. You should review these matters,
             as well as any credit cards, other credit accounts, insurance
            policies, retirement plans, and credit reports, to determine whether
            they should be changed or whether you should take any other
            actions. Some changes may require the agreement of your partner or
             spouse or a court order.
          </div>
        </div>
        <hr style={{ width: "100%" }} />
        <div
          className="footer"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div style={{ listStyle: "none" }}>
            <li>FL-100 [Rev. January 1, 2020]</li>
          </div>
          <div style={{ textAlign: "center" }}>
            <h3>PETITION—MARRIAGE/DOMESTIC PARTNERSHIP</h3>
            <label className="font" style={{ textAlign: "center" }}>
              (Family Law)
            </label>
          </div>
          <div style={{ listStyle: "none" }}>
            <li>Page 3 of 3</li>
          </div>
        </div>

      </div>


    </>
  )
}
