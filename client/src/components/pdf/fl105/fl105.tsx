import React from 'react'

export default function FL105() {
    return (
        <>
            <div style={{ maxWidth: "1100px", margin: "auto" }}>
                <h3 style={{ display: "flex", marginTop: 0, marginBottom: 0 }}>FL-105/GC-120</h3>
                <table style={{ width: "96%", marginTop: 10, border: "2px solid black", borderCollapse: "collapse" }}>
                    <tbody>
                        <tr>
                            <td style={{ width: "60%", border: "2px solid black", borderCollapse: "collapse" }}>
                                <div>
                                    <label>
                                        ATTORNEY OR PARTY WITHOUT ATTORNEY (Name, State Bar number, and
                                        address):
                                    </label>
                                    <textarea
                                        style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",resize:"none"}}
                                        name=""
                                        id=""
                                        cols={99}
                                        rows={6}
                                    />
                                </div>
                                <div style={{ display: "grid", gridTemplateColumns:"1fr 1fr" }}>
                                    <div>
                                        <label htmlFor="telephone">TELEPHONE NO.:</label>
                                        <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"65%" }} type="number" id="telephone" />
                                    </div>
                                    <div>
                                        <label htmlFor="telephone">FAX NO.:</label>
                                        <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "2px",width:"83%" }} type="number" id="telephone" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="fax">E-MAIL ADDRESS(optional):</label>
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none",marginBottom:"2px" ,width:"72.9%" }} type="text" id="fax" />
                                </div>
                                <div>
                                    <label htmlFor="attorney">ATTORNEY FOR (name):</label>
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"76.3%" }} type="email" id="attorney" />
                                </div>
                            </td>
                            <td style={{ textAlign: "center", top: 0, border: "2px solid black", borderCollapse: "collapse" }} rowSpan={3}>
                                FOR COURT USE ONLY
                            </td>
                        </tr>
                        <tr>
                            <td style={{ margin: 0, border: "2px solid black", borderCollapse: "collapse" }}>
                                <div style={{ margin: 2, fontWeight: "bold" }}>
                                    <label htmlFor="name">SUPERIOR COURT OF CALIFORIA, COUNTY OF</label>
                                    <input
                                        style={{ width: "56.6%", backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }}
                                        type="text"
                                        id="name"
                                    />
                                </div>
                                <div style={{ margin: 0 }}>
                                    <label htmlFor="street">STREET ADDRESS:</label>
                                    <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "2px",width:"82.9%" }} type="text" id="street" />
                                </div>
                                <div style={{ margin: 0 }}>
                                    <label htmlFor="street">MAILING ADDRESS:</label>
                                    <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "2px",width:"81.6%" }} type="text" id="street" />
                                </div>
                                <div style={{ margin: 0 }}>
                                    <label htmlFor="street">CITY AND ZIP CODE:</label>
                                    <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "2px",width:"80.4%" }} type="text" id="street" />
                                </div>
                                <div style={{ margin: 0 }}>
                                    <label htmlFor="street">BRANCH NAME:</label>
                                    <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"84.7%" }} type="text" id="street" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ border: "2px solid black", borderCollapse: "collapse" }}>
                                <div style={{ textAlign: "center" }}>
                                    <i>(This section applies only to family law cases.)</i>
                                </div>
                                <div style={{ marginLeft: "1.2rem" }}>
                                    <label htmlFor="name">PETITIONER:</label>
                                    <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "2px" ,width:"88%"}} type="text" id="name" />
                                </div>
                                <div>
                                    <label htmlFor="street">RESPONDENT:</label>
                                    <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "2px",width:"86.3%" }} type="text" id="street" />
                                </div>
                                <div>
                                    <label htmlFor="street">OTHER PARTY:</label>
                                    <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" ,width:"86%"}} type="text" id="street" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ border: "2px solid black", borderCollapse: "collapse" }}>
                                <div style={{ textAlign: "center" }}>
                                    <i>(This section applies only to family law cases.)</i>
                                </div>
                                <div>
                                    GUARDIANSHIP OF (Name):
                                    <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"66%" }} type="text" id="street" />
                                    minor
                                </div>
                            </td>
                            <td>
                                <div style={{ marginLeft: "1.2rem" }}>
                                    <label htmlFor="street">CASE NUMBER:</label>
                                    <br />
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ border: "2px solid black", borderCollapse: "collapse" }}>
                                <div style={{ textAlign: "center", padding: 10, marginLeft: "1.2rem" }}>
                                    <b>
                                        DECLARATION UNDER UNIFORM CHILD CUSTODY
                                        <br />
                                        JURISDICTION AND ENFORCEMENT ACT (UCCJEA)
                                    </b>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div style={{ display: "flex", marginTop: 10 }}>
                    <div style={{ marginLeft: 5 }}>1.</div>
                    <div style={{ marginLeft: 5 }}>
                        I am a party to this proceeding to determine custody of a child
                    </div>
                </div>
                <div style={{ display: "flex", marginTop: 10 }}>
                    <div style={{ marginLeft: 5 }}>2.</div>
                    <div style={{ marginLeft: 5 }}>
                        <input type="checkbox" style={{ marginRight: 5 }} />
                        My present address and the present address of each child residing with me
                        is confidential under Family Code section 3429 as I have indicated in item
                        3
                    </div>
                </div>
                <div style={{ display: "flex", marginTop: 10 }}>
                    <div style={{ marginLeft: 5 }}>3.</div>
                    <div style={{ marginLeft: 5 }}>
                        There are (specify number):
                        <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"21%" }} type="text" id="street" />
                        minor children who are subject to this proceeding, as follows:
                    </div>
                </div>
                <div style={{ marginLeft: 10 }}>
                    <i>
                        <b>
                            (Insert the information requested below. The residence information must
                            be given for the last FIVE years.)
                        </b>
                    </i>
                </div>
                <table
                    style={{
                        borderCollapse: "collapse",
                        width: "100%",
                        marginTop: 5,
                        fontSize: 12
                    }}
                >
                    <thead>
                        <tr className="tr">
                            <th style={{ border: "1px solid black", width: 900, padding: 5 }}>
                               <label> a. Child’s name</label><br />
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", width: 50, border: "none", margin: "0px" }} type="text" id="name" />{" "}
                            </th>
                            <th style={{ border: "1px solid black", width: 400, padding: 5 }}>
                                <label>Place of birth</label><br/>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", width:"96%", border: "none", margin: "0px" }} type="text" id="name" />{" "}
                            </th>
                            <th style={{ border: "1px solid black", width: 400, padding: 5 }}>
                                <label>Date of birth</label><br/>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", width:"93%", border: "none", margin: "0px" }} type="text" id="name" />
                            </th>
                            <th style={{ border: "1px solid black", width: 50, padding: 5 }}>
                                Sex{" "}
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", width: 50, border: "none", margin: "0px" }} type="text" id="name" />
                            </th>
                        </tr>
                    </thead>
                </table>
                <table style={{ borderCollapse: "collapse", width: "100%", fontSize: 12 }}>
                    {/* <thead>
    <tr class="tr">
        <th style="border: 1px solid black; padding: 15px; width: 1000px; ">a. Child’s name <input style="width: 50;" class="bg" type="text" id="name"> </th>
        <th style="border: 1px solid black; padding: 15px; width:400px; ">Place of birth <input style="width: 50;" class="bg" type="text" id="name"> </th>
        <th style="border: 1px solid black; padding: 15px; width: 400px;">Date of birth <input style="width: 50;" class="bg" type="text" id="name"></th>
        <th style="border: 1px solid black; padding: 15px; width: 50px;">Sex <input style="width: 50;" class="bg" type="text" id="name"></th>
    </tr>
      </thead> */}
                    <tbody>
                        <tr>
                            <td style={{ border: "1px solid black", width: 383 }}>
                                Period of residence{" "}
                                <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                                to present
                            </td>
                            <td style={{ border: "1px solid black" }}>
                                Address <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"98%" }} type="text" id="street" />
                                <div>
                                    <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"98%" }} type="text" id="street" />
                                    <br/>
                                    <input type="checkbox" style={{ marginRight: 5 }} />
                                   <label> Confidential</label>
                                   <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"48%" }} type="text" id="street" />


                                </div>
                            </td>
                            <td style={{ border: "1px solid black" }}>
                                Person child lived with (name and complete current address)
                                <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"99%" }} type="text" id="street" />
                                <br/>
                                <input type="checkbox" style={{ marginRight: 5 }} />
                               <label> Confidential</label>
                                <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"67%" }} type="text"  />

                            </td>
                            <td style={{ border: "1px solid black" }}>
                                Relationship
                                <input size={25} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            </td>
                        </tr>
                        <tr>
                            <td style={{ border: "1px solid black" }}>
                                {" "}
                                <input size={25} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                                to <input size={25} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            </td>
                            <td style={{ border: "1px solid black" }}>
                                Child's residence (City, State)
                                <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"99%" }} type="text" id="street" />
                                <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"99%" }} type="text" id="street" />
                            </td>
                            <td style={{ border: "1px solid black" }}>
                                Person child lived with (name and complete current address)
                                <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"99%" }} type="text" id="street" />
                                <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"99%" }} type="text" id="street" />
                            </td>
                            <td style={{ border: "1px solid black" }}>
                                <input size={25} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            </td>
                        </tr>
                        <tr>
                            <td style={{ border: "1px solid black" }}>
                                {" "}
                                <input size={25} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                                to <input size={25} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            </td>
                            <td style={{ border: "1px solid black" }}>
                                Child's residence (City, State){" "}
                                <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"99%" }} type="text" id="street" />{" "}
                                <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"99%" }} type="text" id="street" />
                            </td>
                            <td style={{ border: "1px solid black" }}>
                                Person child lived with (name and complete current address)
                                <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"99%" }} type="text" id="street" />
                                <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"99%" }} type="text" id="street" />
                            </td>
                            <td style={{ border: "1px solid black" }}>
                                <input size={25} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            </td>
                        </tr>
                        <tr>
                            <td style={{ border: "1px solid black" }}>
                                <input size={25} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                                to <input size={25} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            </td>
                            <td style={{ border: "1px solid black" }}>
                                Child's residence (City, State)
                                <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"99%" }} type="text" id="street" />
                                <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"99%" }} type="text" id="street" />
                            </td>
                            <td style={{ border: "1px solid black" }}>
                                Person child lived with (name and complete current address)
                                <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"99%" }} type="text" id="street" />
                                <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"99%" }} type="text" id="street" />
                            </td>
                            <td style={{ border: "1px solid black" }}>
                                <input size={25} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table style={{ borderCollapse: "collapse", width: "100%", fontSize: 12 }}>
                    <thead>
                        <tr>
                            <td style={{ border: "1px solid black", padding: 5, width: 750 }}>
                                b. Child’s name
                                <br />
                                <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"97%"}} type="text" id="street" />
                                <br/>
                                <i>
                                    <input type="checkbox" style={{ marginRight: 5 }} />
                                    Residence information is the same as given above for child a.
                                    <br />
                                    (If NOT the same, provide the information below.)
                                </i>
                            </td>
                            <td style={{ border: "1px solid black", padding: 5, width: 400 }}>
                                <label>Place of birth</label><br/>
                                <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" ,width:"98%"}} type="text" id="street" />
                            </td>
                            <td style={{ border: "1px solid black", padding: 5, width: 400 }}>
                                <label>Date of birth</label><br/>
                                <input size={25} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            </td>
                            <td style={{ border: "1px solid black", padding: 5, width: 50 }}>
                                <label>Sex</label><br/>
                                <input size={15} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            </td>
                        </tr>
                    </thead>
                </table>
                <table style={{ borderCollapse: "collapse", width: "100%", fontSize: 12 }}>
                    <thead>
                        <tr>
                            <td style={{ border: "1px solid black", padding: 5, width: 382 }}>
                                Period of residence
                                <input size={25} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                                to present
                            </td>
                            <td style={{ border: "1px solid black", padding: 5 }}>
                                Address <input size={25} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                                <input type="checkbox" style={{ marginRight: 5 }} />
                                <label>Confidential</label>
                                <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />

                            </td>
                            <td style={{ border: "1px solid black", padding: 5 }}>
                                Person child lived with (name and complete current address)
                                <input size={25} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                                <input type="checkbox" style={{ marginRight: 5 }} />
                               <label> Confidential</label>
                               <input size={20} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />

                            </td>
                            <td style={{ border: "1px solid black", padding: 5 }}>
                                Relationship
                                <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            </td>
                        </tr>
                        <tr>
                            <td style={{ border: "1px solid black", padding: 5 }}>
                                <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" ,width:"45%"}} type="text" id="street" />
                                to <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"45%" }} type="text" id="street" />
                            </td>
                            <td style={{ border: "1px solid black", padding: 5 }}>
                                Child's residence (City, State)
                                <input size={25} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            </td>
                            <td style={{ border: "1px solid black", padding: 5 }}>
                                Person child lived with (name and complete current address)
                                <input size={25} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            </td>
                            <td style={{ border: "1px solid black", padding: 5 }}>
                                <input size={25} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            </td>
                        </tr>
                        <tr>
                            <td style={{ border: "1px solid black", padding: 5 }}>
                                <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"45%" }} type="text" id="street" />
                                to <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"45%" }} type="text" id="street" />
                            </td>
                            <td style={{ border: "1px solid black", padding: 5 }}>
                                Child's residence (City, State){" "}
                                <input size={25} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                                <input size={25} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            </td>
                            <td style={{ border: "1px solid black", padding: 5 }}>
                                Person child lived with (name and complete current address)
                                <input size={25} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                                <input size={25} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            </td>
                            <td style={{ border: "1px solid black", padding: 5 }}>
                                <input size={25} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            </td>
                        </tr>
                        <tr>
                            <td style={{ border: "1px solid black", padding: 5 }}>
                                <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"45%" }} type="text" id="street" />
                                to <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"45%" }} type="text" id="street" />
                            </td>
                            <td style={{ border: "1px solid black", padding: 5 }}>
                                Child's residence (City, State){" "}
                                <input size={25} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />{" "}
                                <input size={25} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            </td>
                            <td style={{ border: "1px solid black", padding: 5 }}>
                                Person child lived with (name and complete current address)
                                <input size={25} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            </td>
                            <td style={{ border: "1px solid black", padding: 5 }}>
                                <input size={25} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            </td>
                        </tr>
                    </thead>
                </table>
                <div style={{ display: "flex", marginTop: 5 }}>
                    <div style={{ marginLeft: 5 }}>c.</div>
                    <div style={{ marginLeft: 5 }}>
                        <input type="checkbox" style={{ marginRight: 5 }} />
                        Additional residence information for a child listed in item a or b is
                        continued on attachment 3c.
                    </div>
                </div>
                <div style={{ display: "flex", marginTop: 5 }}>
                    <div style={{ marginLeft: 5 }}>d.</div>
                    <div style={{ marginLeft: 5 }}>
                        <input type="checkbox" style={{ marginRight: 5 }} />
                        Additional children are listed on form FL-105(A)/GC-120(A). (Provide all
                        requested information for additional children.)
                    </div>
                </div>
                <br />
                <hr style={{ width: "100%" }} />
                <div
                    className="footer"
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div style={{ listStyle: "none" }}>
                        <li>Form Adopted for Mandatory Use</li>
                        <li> Judicial Council of California</li>
                        <li>FL-105/GC-120 [Rev. January 1, 2009]</li>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <h3>DECLARATION UNDER UNIFORM CHILD CUSTODY</h3>
                        <label style={{ textAlign: "center", fontWeight: "bold" }}>
                            {" "}
                            <b>JURISDICTION AND ENFORCEMENT ACT (UCCJEA) </b>
                        </label>
                    </div>
                    <div style={{ listStyle: "none" }}>
                        <li>Family Code, § 3400 et seq.;</li>
                        <li> Probate Code, §§ 1510(f), 1512</li>
                        <li> www.courtinfo.ca.gov</li>
                    </div>
                </div>
                <div />
                <table style={{ width: "100%", margin: 5, marginTop: 10, border: "2px solid black", borderCollapse: "collapse" }}>
                    <tbody>
                        <tr>
                            <td style={{ border: "2px solid black", borderCollapse: "collapse" }}>
                                <div style={{ marginLeft: "1.2rem" }}>
                                    <label htmlFor="name">SHORT TITLE:</label>
                                    <input size={74} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="name" />
                                </div>
                            </td>
                            <td style={{ width: "30%", border: "2px solid black", borderCollapse: "collapse" }}>
                                <div style={{ marginLeft: "1.2rem" }}>
                                    <label htmlFor="street">CASE NUMBER:</label>
                                    <br />
                                    <input size={35} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div style={{ display: "flex", marginTop: 10, marginBottom: 10 }}>
                    <div style={{ marginLeft: 5 }}>4</div>
                    <div style={{ marginLeft: 5 }}>
                        Do you have information about, or have you participated as a party or as a
                        witness or in some other capacity in, another court case or custody or
                        visitation proceeding, in California or elsewhere, concerning a child
                        subject to this proceeding?
                        <input type="checkbox" style={{ marginRight: 5 }} />
                        Yes
                        <input type="checkbox" style={{ marginRight: 5 }} />
                        No (If yes, attach a copy of the orders (if you have one) and provide the
                        following information):
                    </div>
                </div>
                <table
                    style={{ borderCollapse: "collapse", width: "100%", marginBottom: 10 }}
                >
                    <thead>
                        <tr>
                            <th style={{ border: "1px solid black", padding: 15 }}>Proceeding </th>
                            <th style={{ border: "1px solid black", padding: 15 }}>Case number </th>
                            <th style={{ border: "1px solid black", padding: 15 }}>
                                Court (name, state, location)
                            </th>
                            <th style={{ border: "1px solid black", padding: 15 }}>
                                Court order or judgment (date)
                            </th>
                            <th style={{ border: "1px solid black", padding: 15 }}>
                                Name of each child
                            </th>
                            <th style={{ border: "1px solid black", padding: 15 }}>
                                Your connection to the case
                            </th>
                            <th style={{ border: "1px solid black", padding: 15 }}>Case status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ border: "1px solid black", padding: 5 }}>
                                a.
                                <input type="checkbox" style={{ marginRight: 5 }} />
                                Family
                            </td>
                            <td style={{ border: "1px solid black", padding: 5 }}>
                                <input size={10} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            </td>
                            <td style={{ border: "1px solid black", padding: 5 }}>
                                <input size={10} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            </td>
                            <td style={{ border: "1px solid black", padding: 5 }}>
                                <input size={10} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            </td>
                            <td style={{ border: "1px solid black", padding: 5 }}>
                                <input size={10} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            </td>
                            <td style={{ border: "1px solid black", padding: 5 }}>
                                <input size={10} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            </td>
                            <td style={{ border: "1px solid black", padding: 5 }}>
                                <input size={10} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            </td>
                        </tr>
                        <tr>
                            <td style={{ border: "1px solid black", padding: 5 }}>
                                b.
                                <input type="checkbox" style={{ marginRight: 5 }} />
                                Guardianship
                            </td>
                            <td style={{ border: "1px solid black", padding: 5 }}>
                                <input size={10} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            </td>
                            <td style={{ border: "1px solid black", padding: 5 }}>
                                <input size={10} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            </td>
                            <td style={{ border: "1px solid black", padding: 5 }}>
                                <input size={10} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            </td>
                            <td style={{ border: "1px solid black", padding: 5 }}>
                                <input size={10} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            </td>
                            <td style={{ border: "1px solid black", padding: 5 }}>
                                <input size={10} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            </td>
                            <td style={{ border: "1px solid black", padding: 5 }}>
                                <input size={10} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            </td>
                        </tr>
                        <tr>
                            <td style={{ border: "1px solid black", padding: 5 }}>
                                c.
                                <input type="checkbox" style={{ marginRight: 5 }} />
                                Other
                            </td>
                            <td style={{ border: "1px solid black", padding: 5 }}>
                                <input size={10} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            </td>
                            <td style={{ border: "1px solid black", padding: 5 }}>
                                <input size={10} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            </td>
                            <td style={{ border: "1px solid black", padding: 5 }}>
                                <input size={10} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            </td>
                            <td style={{ border: "1px solid black", padding: 5 }}>
                                <input size={10} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            </td>
                            <td style={{ border: "1px solid black", padding: 5 }}>
                                <input size={10} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            </td>
                            <td style={{ border: "1px solid black", padding: 5 }}>
                                <input size={10} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <table style={{ borderCollapse: "collapse", width: "100%" }}>
                    <thead>
                        <tr>
                            <th style={{ border: "1px solid black", padding: "2%" }}>Proceeding</th>
                            <th style={{ border: "1px solid black", padding: 25 }}>Case Number </th>
                            <th style={{ border: "1px solid black", padding: 25 }}>
                                Court
                                <br /> (name, state, location)
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ border: "1px solid black", padding: 10 }}>
                                d.
                                <input type="checkbox" style={{ marginRight: 5 }} />
                                Juvenile Delinquency/ Juvenile Dependency
                            </td>
                            <td style={{ border: "1px solid black", padding: 10 }}>
                                <input size={20} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            </td>
                            <td style={{ border: "1px solid black", padding: 10 }}>
                                <input size={20} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            </td>
                        </tr>
                        <tr>
                            <td style={{ border: "1px solid black", padding: 10 }}>
                                e.
                                <input type="checkbox" style={{ marginRight: 5 }} />
                                Adoption
                            </td>
                            <td style={{ border: "1px solid black", padding: 10 }}>
                                <input size={20} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            </td>
                            <td style={{ border: "1px solid black", padding: 10 }}>
                                <input size={20} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div style={{ display: "flex", marginTop: 10 }}>
                    <div style={{ marginLeft: 5 }}>5.</div>
                    <div style={{ marginLeft: 5 }}>
                        One or more domestic violence restraining/protective orders are now in
                        effect. (Attach a copy of the orders if you have one and provide the
                        following information):
                    </div>
                </div>
                <table style={{ borderCollapse: "collapse", width: "100%" }}>
                    <thead>
                        <tr>
                            <th style={{ border: "1px solid black", padding: 5 }}>Court </th>
                            <th style={{ border: "1px solid black", padding: 5 }}>County</th>
                            <th style={{ border: "1px solid black", padding: 5 }}>State </th>
                            <th style={{ border: "1px solid black", padding: 5 }}>
                                Case number (if known)
                            </th>
                            <th style={{ border: "1px solid black", padding: 5 }}>
                                Orders expire (date)
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ border: "1px solid black", padding: 5 }}>
                                a.
                                <input type="checkbox" style={{ marginRight: 5 }} />
                                Criminal
                            </td>
                            <td style={{ border: "1px solid black", padding: 5 }}>
                                <input size={20} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            </td>
                            <td style={{ border: "1px solid black", padding: 5 }}>
                                <input size={20} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            </td>
                            <td style={{ border: "1px solid black", padding: 5 }}>
                                <input size={20} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            </td>
                            <td style={{ border: "1px solid black", padding: 5 }}>
                                <input size={20} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            </td>
                        </tr>
                        <tr>
                            <td style={{ border: "1px solid black", padding: 5 }}>
                                b.
                                <input type="checkbox" style={{ marginRight: 5 }} />
                                Family
                            </td>
                            <td style={{ border: "1px solid black", padding: 5 }}>
                                <input size={20} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            </td>
                            <td style={{ border: "1px solid black", padding: 5 }}>
                                <input size={20} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            </td>
                            <td style={{ border: "1px solid black", padding: 5 }}>
                                <input size={20} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            </td>
                            <td style={{ border: "1px solid black", padding: 5 }}>
                                <input size={20} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            </td>
                        </tr>
                        <tr>
                            <td style={{ border: "1px solid black", padding: 5 }}>
                                <div style={{ display: "flex" }}>
                                    <div>c.</div>
                                    <div>
                                        <input type="checkbox" style={{ marginRight: 5 }} />
                                    </div>
                                    <div>
                                        Juvenile Delinquency/
                                        <br />
                                        Juvenile Dependency
                                    </div>
                                </div>
                            </td>
                            <td style={{ border: "1px solid black", padding: 5 }}>
                                <input size={20} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            </td>
                            <td style={{ border: "1px solid black", padding: 5 }}>
                                <input size={20} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            </td>
                            <td style={{ border: "1px solid black", padding: 5 }}>
                                <input size={20} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            </td>
                            <td style={{ border: "1px solid black", padding: 5 }}>
                                <input size={20} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            </td>
                        </tr>
                        <tr>
                            <td style={{ border: "1px solid black", padding: 10 }}>
                                d.
                                <input type="checkbox" style={{ marginRight: 5 }} />
                                Other
                            </td>
                            <td style={{ border: "1px solid black", padding: 5 }}>
                                <input size={20} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            </td>
                            <td style={{ border: "1px solid black", padding: 5 }}>
                                <input size={20} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            </td>
                            <td style={{ border: "1px solid black", padding: 5 }}>
                                <input size={20} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            </td>
                            <td style={{ border: "1px solid black", padding: 5 }}>
                                <input size={20} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div style={{ display: "flex", marginTop: 10 }}>
                    <div style={{ marginLeft: 5 }}>6.</div>
                    <div style={{ marginLeft: 5 }}>
                        Do you know of any person who is not a party to this proceeding who has
                        physical custody or claims to have custody of or visitation rights with
                        any child in this case?
                        <input type="checkbox" style={{ marginRight: 5 }} />
                        Yes <input type="checkbox" style={{ marginRight: 5 }} />
                        No (If yes, provide the following information):
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div
                        style={{
                            width: "30%",
                            border: "1px solid black",
                            padding: 15,
                            marginTop:"10%",
                            boxSizing: "border-box"
                        }}
                    >
                        <div>a. Name and address of person</div>
                        <textarea rows={4} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "100%",resize:"none" }}/>

                           <div>
                            <input type="checkbox" style={{ marginRight: 5 }} />
                            Has physical custody
                        </div>
                        <div>
                            <input type="checkbox" style={{ marginRight: 5 }} />
                            Claims custody rights
                        </div>
                        <div>
                            <input type="checkbox" style={{ marginRight: 5 }} />
                            Claims visitation rights
                        </div>
                    </div>
                    <div
                        style={{
                            width: "30%",
                            border: "1px solid black",
                            padding: 15,
                            marginTop:"10%",
                            boxSizing: "border-box"
                        }}
                    >
                        <div>b. Name and address of person </div>
                        <textarea rows={4} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "100%",resize:"none" }}/>

                        <div>
                            <input type="checkbox" style={{ marginRight: 5 }} />
                            Has physical custody{" "}
                        </div>
                        <div>
                            <input type="checkbox" style={{ marginRight: 5 }} />
                            Claims custody rights
                        </div>
                        <div>
                            <input type="checkbox" style={{ marginRight: 5 }} />
                            Claims visitation rights{" "}
                        </div>
                    </div>
                    <div
                        style={{
                            width: "30%",
                            border: "1px solid black",
                            padding: 15,
                            marginTop:"10%",
                            boxSizing: "border-box"
                        }}
                    >
                        <div>c. Name and address of person</div>
                        <textarea rows={4} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "100%",resize:"none" }}/>
                        <div>
                            <input type="checkbox" style={{ marginRight: 5 }} />
                            Has physical custody
                        </div>
                        <div>
                            <input type="checkbox" style={{ marginRight: 5 }} />
                            Claims custody rights
                        </div>
                        <div>
                            <input type="checkbox" style={{ marginRight: 5 }} />
                            Claims visitation rights
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div
                        style={{
                            width: "30%",
                            border: "1px solid black",
                            padding: 10,
                            boxSizing: "border-box"
                        }}
                    >
                        Name of each child
                        <input size={30} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="name" />
                    </div>
                    <div
                        style={{
                            width: "30%",
                            border: "1px solid black",
                            padding: 10,
                            boxSizing: "border-box"
                        }}
                    >
                        Name of each child{" "}
                        <input size={30} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="name" />
                    </div>
                    <div
                        style={{
                            width: "30%",
                            border: "1px solid black",
                            padding: 10,
                            boxSizing: "border-box"
                        }}
                    >
                        Name of each child{" "}
                        <input size={30} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="name" />
                    </div>
                </div>
                <p>
                    I declare under penalty of perjury under the laws of the State of California
                    that the foregoing is true and correct
                </p>
                <div style={{ margin: 10 }}>
                    Date:
                    <input size={25} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                </div>
                <div style={{ display: "flex", margin: 10 }}>
                    <div style={{ marginLeft: 50 }}>
                        <input size={40} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                        (TYPE OR PRINT NAME)
                    </div>
                    <div style={{ marginLeft: 170 }}>
                        {" "}
                        <input size={40} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                        (SIGNATURE OF DECLARANT)
                    </div>
                </div>
                <div style={{ display: "flex", marginTop: 10 }}>
                    <div style={{ marginLeft: 5 }}>7.</div>
                    <div style={{ marginLeft: 5 }}>
                        <input type="checkbox" style={{ marginRight: 5 }} />
                        Number of pages attached:
                        <input size={25} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                    </div>
                </div>
                <div
                    style={{
                        width: "100%",
                        border: "1px solid black",
                        padding: 10,
                        boxSizing: "border-box",
                        margin: 10
                    }}
                >
                    <b>
                        NOTICE TO DECLARANT: You have a continuing duty to inform this court if
                        you obtain any information about a custody FL-105/GC-120 [Rev. January 1,
                        2009] proceeding in a California court or any other court concerning a
                        child subject to this proceeding.
                    </b>
                </div>
                <hr style={{ width: "98%" }} />
                <div
                    className="footer"
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div style={{ listStyle: "none" }}>
                        <li>Form Adopted for Mandatory Use</li>
                        <li> Judicial Council of California</li>
                        <li>FL-105/GC-120 [Rev. January 1, 2009]</li>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <h3>DECLARATION UNDER UNIFORM CHILD CUSTODY</h3>
                        <label style={{ textAlign: "center", fontWeight: "bold" }}>
                            {" "}
                            <b>JURISDICTION AND ENFORCEMENT ACT (UCCJEA) </b>
                        </label>
                    </div>
                    <div style={{ listStyle: "none" }}>
                        <li>Family Code, § 3400 et seq.;</li>
                        <li> Probate Code, §§ 1510(f), 1512</li>
                        <li> www.courtinfo.ca.gov</li>
                    </div>
                </div>
            </div>
        </>




    )
}
