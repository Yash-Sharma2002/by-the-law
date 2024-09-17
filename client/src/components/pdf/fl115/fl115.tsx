import React from 'react'

export default function SU115() {
    return (

        <>
            <div style={{ maxWidth: "1100px", margin: "auto" }}>
                <h3 style={{ display: "flex", justifyContent: "end", marginTop: "0", marginBottom: "0" }}>FL-115</h3>
                <table style={{ width: "100%", border: "2px solid black", borderCollapse: "collapse" }}>
                    <tbody>
                        <tr>
                            <td style={{ width: "64%", border: "2px solid black", borderCollapse: "collapse" }}>
                                <div style={{ marginBottom: 10 }}>
                                    <label>
                                        ATTORNEY OR PARTY WITHOUT ATTORNEY (Name, State Bar number, and
                                        address):
                                    </label>
                                    <textarea
                                        style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"99%" ,resize:"none"}}
                                        name=""
                                        id=""
                                        rows={6}
                                        defaultValue={""}
                                    />
                                </div>
                                <div style={{ display: "grid",gridTemplateColumns:"1fr 1fr" }}>
                                    <div style={{ marginBottom: 2 }}>
                                        <label htmlFor="telephone">TELEPHONE NO.:</label>
                                        <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="number" id="telephone" />
                                    </div>
                                    <div style={{ marginBottom: 2 }}>
                                        <label htmlFor="telephone">FAX NO.:</label>
                                        <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"75%" }} type="number" id="telephone" />
                                    </div>
                                </div>
                                <div style={{ marginBottom: 2 }}>
                                    <label htmlFor="fax">E-MAIL ADDRESS(optional):</label>
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"67%" }} type="text" id="fax" />
                                </div>
                                <div style={{ marginBottom: 2 }}>
                                    <label htmlFor="attorney">ATTORNEY FOR (name):</label>
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"71%" }} type="name" id="attorney" />
                                </div>
                            </td>
                            <td style={{ textAlign: "center", top: 0, border: "2px solid black", borderCollapse: "collapse" }} rowSpan={3}>
                                FOR COURT USE ONLY
                            </td>
                        </tr>
                        <tr>
                            <td style={{ margin: 0, border: "2px solid black", borderCollapse: "collapse", paddingLeft: "1.6rem" }}>
                                <div  style={{ marginBottom: 2 }}>
                                    <label>SUPERIOR COURT OF CALIFORIA, COUNTY OF</label>
                                    <input
                                        style={{ width: "46%", backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }}
                                        type="text"
                                        id="name"
                                    />
                                </div>
                                <div style={{ margin: 0, marginBottom: 2 }}>
                                    <label htmlFor="street">STREET ADDRESS:</label>
                                    <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "78.6%" }} type="text" id="street" />
                                </div>
                                <div style={{ margin: 0, marginBottom: 2 }}>
                                    <label htmlFor="street">MAILING ADDRESS:</label>
                                    <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "77.4%" }} type="text" id="street" />
                                </div>
                                <div style={{ margin: 0, marginBottom: 2 }}>
                                    <label htmlFor="street">CITY AND ZIP CODE:</label>
                                    <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "76%" }} type="text" id="street" />
                                </div>
                                <div style={{ margin: 0, marginBottom: 2 }}>
                                    <label htmlFor="street">BRANCH NAME:</label>
                                    <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "80.8%" }} type="text" id="street" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ border: "2px solid black", borderCollapse: "collapse" }}>
                                <div style={{ marginBottom: 3, marginLeft: "1.2rem" }}>
                                    <label htmlFor="name">PETITIONER:</label>
                                    <input  type="text" id="name" style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", width: "85.4%" }} />
                                </div>
                                <div style={{ marginBottom: 3 }}>
                                    <label htmlFor="street">RESPONDENT:</label>
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "83.6%" }} type="text" id="street" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ border: "2px solid black", borderCollapse: "collapse" }}>
                                <h3 style={{ textAlign: "center", padding: 10 }}>
                                    PROOF OF SERVICE OF SUMMONS
                                </h3>
                            </td>
                            <td>
                                <div style={{ marginLeft: "1.2rem" }}>
                                    <label htmlFor="street">CASE NUMBER:</label>
                                    <br />
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "7px",paddingBottom: "5px",width:"97%" }} type="text" id="street" />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div style={{ display: "flex", marginTop: 2 }}>
                    <div style={{ marginLeft: 5 }}>1.</div>
                    <div style={{ marginLeft: 10 }}>
                        At the time of service, I was at least 18 years of age and not a party to
                        this action. I served the respondent with copies of:
                    </div>
                </div>
                <div style={{ display: "flex", marginTop: 2 }}>
                    <div style={{ marginLeft: 25 }}>a.</div>
                    <div style={{ marginLeft: 5 }}>
                    <input type="checkbox" size={10} style={{ marginLeft: "10px" }} />
                     <label> Family Law—Marriage/Domestic Partnership: Petition—Marriage/Domestic
                     Partnership (form)</label>
                        <a href="FL-100" target="_blank" style={{color:"blue"}}>
                            FL-100
                        </a>
                        ), Summons (form{" "}
                        <a href="FL-110" target="_blank" style={{color:"blue"}}>
                            FL-110
                        </a>
                        ), and blank Response—Marriage/Domestic Partnership (form{" "}
                        <a href="FL-120" target="_blank" style={{color:"blue"}}>
                            FL-120
                        </a>
                        )
                    </div>
                </div>
                <div style={{ display: "flex", marginTop: 10 }}>
                    <div style={{ marginLeft: 25 }}>b.</div>
                    <div style={{ marginLeft: 5 }}>
                    <input type="checkbox" size={10} style={{ marginLeft: "10px" }} />
                        <label> Uniform Parentage: Petition to Establish Parental Relationship (form{" "}
                            </label>
                        <a href="FL-200" target="_blank" style={{color:"blue"}}>
                            FL-200
                        </a>
                        ), Summons (form{" "}
                        <a href="FL-210" target="_blank" style={{color:"blue"}}>
                            FL-210
                        </a>
                        ), and blank Response to Petition to Establish Parental Relationship (form{" "}
                        <a href="FL-220" target="_blank" style={{color:"blue"}}>
                            FL-220
                        </a>
                        )
                    </div>
                </div>
                <div style={{ display: "flex", marginTop: 10 }}>
                    <div style={{ marginLeft: 25 }}>c.</div>
                    <div style={{ marginLeft: 5 }}>
                    <input type="checkbox" size={10} style={{ marginLeft: "10px" }} />
                       <label> Custody and Support: Petition for Custody and Support of Minor Children
                       (form{" "}</label>
                        <a href="FL-2600" target="_blank" style={{color:"blue"}}>
                            FL-2600
                        </a>
                        ), Summons (form{" "}
                        <a href="FL-210" target="_blank" style={{color:"blue"}}>
                            FL-210
                        </a>
                        ), and blank Response to Petition for Custody and Support of Minor
                        Children (form{" "}
                        <a href="FL-270" target="_blank" style={{color:"blue"}}>
                            FL-270
                        </a>
                        )
                    </div>
                </div>
                <div><h3 style={{ textAlign: "center", fontWeight: "bold", margin: "5px" }}>and</h3></div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                    <div style={{ padding: "1rem" }}>
                        <span>(1)</span>
                        <input type="checkbox" size={10} style={{ marginLeft: "10px" }} />
                        <span style={{ marginLeft: "10px" }}>Completed and blank Declaration Under Uniform Child Custody Jurisdiction and EnforcementAct
                            <a href="FL-105" target="_blank" style={{color:"blue"}}>(form FL-105)</a>
                        </span>
                    </div>
                    <div style={{ padding: "1rem" }}>
                        <span>(5)</span>
                        <input type="checkbox" size={10} style={{ marginLeft: "10px" }} />
                        <span style={{ marginLeft: "10px" }}>Completed and blank Income and Expense Declaration
                            <a href="fl-150" style={{color:"blue"}}>(form FL-150)</a>
                        </span>
                    </div>
                    <div style={{ padding: "1rem" }}>
                        <span>(2)</span>
                        <input type="checkbox" size={10} style={{ marginLeft: "10px" }} />
                        <span style={{ marginLeft: "10px" }}>Completed and blank Declaration of Disclosure
                            <a href="fl-140" style={{color:"blue"}}>(form FL-140)</a>
                        </span>
                    </div>
                    <div style={{ padding: "1rem" }}>
                        <span>(6)</span>
                        <input type="checkbox" size={10} style={{ marginLeft: "10px" }} />
                        <span style={{ marginLeft: "10px" }}> Completed and blank Property Declaration
                            <a href="fl-160" style={{color:"blue"}}>(form FL-160 )</a>
                        </span>
                    </div>
                    <div style={{ padding: "1rem" }}>
                        <span>(3)</span>
                        <input type="checkbox" size={10} style={{ marginLeft: "10px" }} />
                        <span style={{ marginLeft: "10px" }}>Completed and blank Schedule of Assets and Debts
                            <a href="FL-142" target="_blank" style={{color:"blue"}}>(form FL-142)</a>
                        </span>
                    </div>
                    <div style={{ padding: "1rem" }}>
                        <span>(7)</span>
                        <input type="checkbox" size={10} style={{ marginLeft: "10px" }} />
                        <span style={{ marginLeft: "10px" }}>Request for Order (form FL-300), and blank Responsive Declaration to Request for Order

                            <a href="fl-320" style={{color:"blue"}}>(form FL-320)</a>
                        </span>
                    </div>
                    <div style={{ padding: "1rem" }}>
                        <span>(4)</span>
                        <input type="checkbox" size={10} style={{ marginLeft: "10px" }} />
                        <span style={{ marginLeft: "10px" }}>Completed and blank Income and Expense Declaration

                            <a href="fl150" style={{color:"blue"}}>(form FL-150 )</a>
                        </span>
                    </div>
                    <div style={{ padding: "1rem" }}>
                        <span>Other (specify)</span>
                        <input type="text" style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "10px", width: "22rem" }} />
                    </div>

                </div>



                <div style={{ paddingLeft: "11px" }}>
                    <span>2</span>
                    <textarea style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "64rem", resize: "none" }}
                        placeholder="Address where respondent was served:" />
                </div>
                <div style={{ display: "flex", marginTop: 10 }}>
                    <div style={{ marginLeft: 5 }}>3.</div>
                    <div style={{ marginLeft: 5 }}>
                        I served the respondent by the following means (check proper boxes):{" "}
                    </div>
                </div>
                <div style={{ display: "flex", marginTop: 10 }}>
                    <div style={{ marginLeft: 5 }}>a.</div>
                    <div style={{ marginLeft: 5 }}>
                        {" "}
                        <input type="checkbox" style={{ marginRight: 5 }} />
                        <b>Personal service.</b> I personally delivered the copies to the
                        respondent (Code Civ. Proc., § 415.10) on (date): at (time):
                    </div>
                </div>
                <div style={{ display: "flex", marginTop: 10 }}>
                    <div style={{ marginLeft: 50 }}>
                        at (date): <input size={40} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                    </div>
                    <div style={{ marginLeft: 50 }}>
                        at (time):
                        <input size={40} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                    </div>
                </div>
                <div style={{ marginTop: 10 }}>
                    <div style={{ marginLeft: 5 }}>b</div>
                    <div style={{ marginLeft: 10 }}>
                        <b>Substituted service.</b><span>I left the copies with or in the presence of (name):</span>
                        <input size={40} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom:"4px", width: "28rem" }} type="text" id="street" />


                    </div>
                    <div>
                        who is (specify title or relationship to respondent):
                        <input size={40} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "38.2rem" }} type="text" id="street" />
                    </div>
                </div>
                <div style={{ display: "flex", marginTop: 10, marginLeft: "20px" }}>
                    <div style={{ marginLeft: 50 }}>(1)</div>
                    <div style={{ marginLeft: 5 }}>
                        <input type="checkbox" style={{ marginRight: 5 }} />
                        <b>(Business)</b> a person at least 18 years of age who was apparently in
                        charge at the office or usual place of business of the respondent. I
                        informed him or her of the general nature of the papers.
                    </div>
                </div>
                <div style={{ display: "flex", marginTop: 10, marginLeft: "20px" }}>
                    <div style={{ marginLeft: 50 }}>(2)</div>
                    <div style={{ marginLeft: 5 }}>
                        {" "}
                        <input type="checkbox" style={{ marginRight: 5 }} />
                        <b>(Home)</b> a competent member of the household (at least 18 years of
                        age) at the home of the respondent. I informed him or her of the general
                        nature of the papers.
                    </div>
                </div>
                <div style={{ display: "flex", marginTop: 10 }}>
                    <div style={{ marginLeft: 50 }}>
                        at (date):
                        <input size={40} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "25rem" }} type="text" id="street" />
                    </div>
                    <div style={{ marginLeft: 50 }}>
                        at (time):
                        <input size={40} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "25rem " }} type="text" id="street" />
                    </div>
                </div>
                <div style={{ marginLeft: 50, marginTop: 10 }}>
                    {" "}
                    I thereafter mailed additional copies (by first class, postage prepaid) to
                    the respondent at the place where the copies were left (Code Civ. Proc., §
                    415.20b) on (date): A declaration of diligence is attached, stating the
                    actions taken to first attempt personal service.
                    <input size={40} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                </div>
                <div style={{ marginLeft: 50, marginTop: 10 }}>
                    A <b>declaration of diligence</b> is attached, stating the actions taken to
                    first attempt personal service.
                </div>
                <br />
                <br />
                <hr style={{ width: "100%" }} />
                <div
                    className="footer"
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div style={{ listStyle: "none" }}>
                        <li>Form Approved for Optional Use</li>
                        <li>Judicial Council of California</li>
                        <li>FL-115 [Rev. January 1, 2015]</li>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <h3>PROOF OF SERVICE OF SUMMONS</h3>
                        <label style={{ textAlign: "center", fontWeight: "bold" }}>
                            (Family Law—Uniform Parentage—Custody and Support)
                        </label>
                    </div>
                    <div style={{ listStyle: "none" }}>
                        <li>Code of Civil Procedure, § 417.10</li>
                        <li>www.courts.ca.gov</li>
                    </div>
                </div>
                <table style={{ width: "100%", border: "2px solid black", borderCollapse: "collapse" }}>
                    <tbody>
                        <tr>
                            <td style={{ border: "2px solid black", borderCollapse: "collapse" }}>
                                <div style={{ marginLeft: "1.2rem" }}>
                                    <label htmlFor="name">PETITIONER/PLAINTIFF:</label>
                                    <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginTop: "5px",width:"75%" }} type="text" id="name" />
                                </div>
                                <div style={{ marginLeft: "1.2rem" }}>
                                    <label htmlFor="street">RESPONDENT/DEFENDANT:</label>
                                    <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginTop: "5px",width:"69.5%" }} type="text" id="street" />
                                </div>
                            </td>
                            <td style={{ width: "30%", border: "2px solid black", borderCollapse: "collapse" }}>
                                <div style={{ marginLeft: "1.2rem" }}>
                                    <label htmlFor="street">CASE NUMBER:</label>
                                    <br />
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "5px",width:"97%" }} type="text" id="street" />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>   
                <div style={{ display: "flex", marginTop: 10 }}>
                    <div style={{ marginLeft: 5 }}>3.<label style={{ marginLeft: 5 }}>C</label>  </div>
                    <div style={{ marginLeft: 5 }}>
                    <input type="checkbox" style={{ marginRight: 5 }} />
                      <label>Mail and acknowledgment service. I mailed the copies to the respondent,
                      addressed as shown in item 2, by </label>
                        <br />
                    </div>
                </div>
                <div style={{ display: "flex", marginTop: 2 }}>
                    <div style={{ marginLeft: 35 }}>(1).</div>
                    <div style={{ marginLeft: 5 }}>
                        {" "}
                        <input type="checkbox" style={{ marginRight: 5 }} /> with two copies of
                        the Notice and Acknowledgment of Receipt (form 
                        <a href="fl-117" target="_blank" style={{color:"blue"}}>FL-117)</a> and a postage-paid
                        return envelope addressed to me. Attach completed Notice and
                        Acknowledgment of Receipt  (form
                        <a href="FL-117" target="_blank" style={{color:"blue"}}>
                        FL-117)
                        </a>
                         (Code Civ. Proc., § 415.30.)
                    </div>
                </div>
                <div style={{ display: "flex", marginTop: 10 }}>
                    <div style={{ marginLeft: 35 }}>(2).</div>
                    <div style={{ marginLeft: 5 }}>
                        <input type="checkbox" style={{ marginRight: 5 }} />
                        to an address outside California (by registered or certified mail with
                        return receipt requested). (Attach signed return receipt or other evidence
                        of actual delivery to the respondent.) (Code Civ. Proc., §§ 415.40,
                        417.20.)
                    </div>
                </div>
                <div style={{ display: "flex", marginTop: 10 }}>
                    <div style={{ marginLeft: 5 }}>d.</div>
                    <div style={{ marginLeft: 5 }}>
                        {" "}
                        <input type="checkbox" style={{ marginRight: 5 }} />
                        Other (specify code section):
                    </div>
                </div>
                <div style={{ display: "flex", marginTop: 10 }}>
                    <div style={{ marginLeft: 50 }}>
                        {" "}
                        <input type="checkbox" style={{ marginRight: 5 }} />
                        Continued on Attachment 3d
                    </div>
                </div>
                <div style={{ display: "flex", marginTop: 2 }}>
                    <div style={{ marginLeft: 5 }}>4.</div>
                    <div style={{ marginLeft: 5 }}>
                        <b>Person who served papers </b>{" "}
                    </div>
                </div>
                <div>
                    Name:
                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "5px", width: "94%" }} type="text" id="street" />
                </div>
                
                <div>
                    <label style={{ marginLeft: "2px" }}>Address:</label> 
                    <textarea style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "92%",resize:"none" }} />
                </div>
                <div>
                    Telephone number:
                    <input size={35} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                </div>
                <div>This person is</div>
                <div style={{ display: "flex", marginTop: 10 }}>
                    <div style={{ marginLeft: 5 }}>(a).</div>
                    <div style={{ marginLeft: 5 }}>
                        {" "}
                        <input type="checkbox" style={{ marginRight: 5 }} />
                        exempt from registration under Business and Professions Code section
                        22350(b).
                    </div>
                </div>
                <div style={{ display: "flex", marginTop: 10 }}>
                    <div style={{ marginLeft: 5 }}>(b).</div>
                    <div style={{ marginLeft: 5 }}>
                        {" "}
                        <input type="checkbox" style={{ marginRight: 5 }} />
                        not a registered California process server
                    </div>
                </div>
                <div style={{ display: "flex", marginTop: 10 }}>
                    <div style={{ marginLeft: 5 }}>(c).</div>
                    <div style={{ marginLeft: 5 }}>
                        {" "}
                        <input type="checkbox" style={{ marginRight: 5 }} />a registered
                        California process server:
                    </div>
                    <div>
                        {" "}
                        <input type="checkbox" style={{ marginRight: 10,marginLeft:15 }} />
                        an employee or
                    </div>
                    <div>
                        {" "}
                        <input type="checkbox" style={{ marginRight: 10,marginLeft:15 }} />
                        an independent contractor
                    </div>
                </div>
                <div style={{marginTop: 10 }}>
                    <label style={{ marginLeft: 50 }}>(1)</label>
                       <label> Registration no.:</label>
                        <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none",width:"80%", margin: "0px" }} type="text" id="street" />
                </div>
                <div style={{  marginTop: 10 }}>
                    <label style={{ marginLeft: 50 }}>(2).</label>
                    
                       <label style={{ marginLeft: 5 }}> County:</label>
                        <input size={35} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"85%" }} type="text" id="street" />
                
                </div>
                <div style={{ display: "flex", marginTop: 10 }}>
                    <div style={{ marginLeft: 5 }}>(d).</div>
                    <div style={{ marginLeft: 5 }}>
                        The fee for service was (specify): $
                        <input size={35} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                    </div>
                </div>
                <div style={{ textAlign: "center" }}>-or-</div>
                <div style={{ display: "flex", marginTop: 10 }}>
                    <div style={{ marginLeft: 5 }}>5.</div>
                    <div style={{ marginLeft: 5 }}>
                        {" "}
                        <input type="checkbox" style={{ marginRight: 5 }} />
                        <b>I declare</b> under penalty of perjury under the laws of the State of
                        California that the foregoing is true and correct.
                    </div>
                </div>
                <div style={{ textAlign: "center" }}>-or-</div>
                <div style={{ display: "flex", marginTop: 10 }}>
                    <div style={{ marginLeft: 5 }}>6.</div>
                    <div style={{ marginLeft: 5 }}>
                        {" "}
                        <input type="checkbox" style={{ marginRight: 5 }} />
                        <b>I am a California sheriff, marshal, or constable,</b> and I certify
                        that the foregoing is true and correct.
                    </div>
                </div>
                <div style={{paddingLeft:"2rem"}}>
                    <span>Date: </span>
                    <input size={5} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none",width:"20rem", margin: "0px" }} type="text" id="street" />

                    <div style={{ display: "flex", marginTop: 10 }}>
                        <div style={{paddingLeft:"10px"}}>
                            <input size={35} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none",width:"28rem", margin: "0px" }} type="text" id="street" />
                            <br />

                            <h4>(NAME OF PERSON WHO SERVED PAPERS)</h4>
                        </div>
                        <div style={{paddingLeft:"10rem"}}>
                            <input size={35} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none",width:"19rem", margin: "0px" }} type="text" id="street" />
                            <br />
                            <span> (SIGNATURE OF PERSON WHO SERVED PAPERS) </span>
                        </div>
                    </div>
                </div>
                <hr style={{ width: "100%" }} />
                <div
                    className="footer"
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div style={{ listStyle: "none" }}>
                        <li>FL-115 [Rev. January 1, 2015]</li>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <h3>PROOF OF SERVICE OF SUMMONS</h3>
                        <label style={{ textAlign: "center", fontWeight: "bold" }}>
                            (Family Law—Uniform Parentage—Custody and Support)
                        </label>
                    </div>
                    <div style={{ listStyle: "none" }}>
                        <li>Page 2 of 2</li>
                    </div>
                </div>
            </div>
        </>





    )
}
