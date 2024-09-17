import React from 'react'

export default function SU117() {
    return (

        <>
            <div style={{ maxWidth: "1100px", margin: "auto" }}>
                <h3 className="fl">FL-117</h3>
                <table style={{ width: "100%", border: "2px solid black", borderCollapse: "collapse" }}>
                    <tbody>
                        <tr>
                            <td style={{ width: "70%", border: "2px solid black", borderCollapse: "collapse" }}>
                                <div>
                                    <textarea
                                    placeholder=" ATTORNEY OR PARTY WITHOUT ATTORNEY (Name, State Bar number, and
                                        address):"
                                        style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", resize: "none",width:"99%" }}
                                        name=""
                                        id=""
                                        rows={4}
                                    />
                                </div>
                                <div style={{ display: "grid",gridTemplateColumns:"1fr 1fr", marginBottom: 1, paddingLeft: "4rem" }} >
                                    <div>
                                        <label htmlFor="telephone">TELEPHONE NO.:</label>
                                        <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", paddingLeft: "4px" }} type="number" id="telephone" />
                                    </div>
                                    <div>
                                        <label htmlFor="telephone">FAX NO.:</label>
                                        <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", width: "78.9%" }} type="number" id="telephone" />
                                    </div>
                                </div>
                                <div style={{ paddingLeft: "4rem" }}>
                                    <label htmlFor="fax">E-MAIL ADDRESS:</label>
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "79.6%", marginBottom: "1px" }} type="text" id="fax" />
                                </div>
                                <div style={{ paddingLeft: "4rem" }}>
                                    <label htmlFor="attorney">ATTORNEY FOR (name):</label>
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "71.9%" }} type="email" id="attorney" />
                                </div>
                            </td>
                            <td style={{ textAlign: "center", top: 0, border: "2px solid black", borderCollapse: "collapse" }} rowSpan={2}>
                                FOR COURT USE ONLY
                            </td>
                        </tr>
                        <tr>
                            <td style={{ margin: 0, marginBottom: 4, border: "2px solid black", borderCollapse: "collapse" }}>
                                <div className="font  ">
                                    <label htmlFor="name">SUPERIOR COURT OF CALIFORIA, COUNTY OF</label>
                                    <input
                                        style={{ width: "53.8%", backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }}
                                        type="text"
                                        id="name"
                                    />
                                </div>
                                <div style={{ margin: "0px" }}>
                                    <label htmlFor="street">STREET ADDRESS:</label>
                                    <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "81.2%" }} type="text" id="street" />
                                </div>
                                <div style={{ margin: "0px", padding: "0px" }}>
                                    <label htmlFor="street">MAILING ADDRESS:</label>
                                    <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "79.9%" }} type="text" id="street" />
                                </div>
                                <div style={{ margin: "0px" }}>
                                    <label htmlFor="street">CITY AND ZIP CODE:</label>
                                    <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "78.8%" }} type="text" id="street" />
                                </div>
                                <div style={{ margin: "0px" }}>
                                    <label htmlFor="street">BRANCH NAME:</label>
                                    <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "83.1%" }} type="text" id="street" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ border: "2px solid black", borderCollapse: "collapse" }}>
                                <div style={{ marginLeft: "1.2rem" }}>
                                    <label htmlFor="name">PETITIONER:</label>
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "86.7%" }} type="text" id="name" />
                                </div>
                                <div>
                                    <label htmlFor="street">RESPONDENT:</label>
                                    <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "84.9%" }} type="text" id="street" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ border: "2px solid black", borderCollapse: "collapse" }}>
                                <h3 style={{ textAlign: "center", marginBottom: 2 }}>
                                    NOTICE AND ACKNOWLEDGMENT OF RECEIPT
                                </h3>
                            </td>
                            <td>
                                <div style={{ marginLeft: "1.2rem" }}>
                                    <label htmlFor="street">CASE NUMBER:</label>
                                    <br />
                                    <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "1px",width:"96%" }} type="text" id="street" />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div style={{ textAlign: "center", fontSize: 17 }}>
                    <i>
                        (Sender completes items 1 through 4 and signs before mailing. Recipient
                        completes items 5 and 6, signs, then returns)
                    </i>
                </div>
                <table
                    width="100%"
                    style={{ pageBreakInside: "auto", fontSize: 17, verticalAlign: "top" }}
                    cellPadding={5}
                    cellSpacing={5}
                >
                    <tbody>
                        <tr>
                            <td width="5%" valign="top">
                                1
                            </td>
                            <td width="95%" valign="top">
                                <div>
                                    To (name of individual being served):
                                    <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "38rem" }} type="text" id="street" />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div
                    style={{
                        border: "2px solid black",
                        padding: 3,
                        boxSizing: "border-box",
                        fontSize: 17,
                        width: "100%",
                    }} >
                    <div style={{ textAlign: "center" }}>
                        <b>NOTICE</b>
                    </div>
                    <div style={{ marginLeft: 30 }}>
                        The documents identified below are being served on you by mail with this
                        acknowledgment form. You must personally sign, or a
                        person authorized by you must sign, this form to acknowledge receipt of
                        the documents.
                    </div>
                    <div style={{ marginTop: 10, marginLeft: 30 }}>
                        If the documents described below include a summons and you fail to
                        complete and return this acknowledgment form to the sender
                        within 20 days of the date of mailing, you will be liable for the
                        attempting to serve you with these documents by any other methods
                        permitted by law. If you return this form to the sender, service
                        of a summons is deemed complete on the date you sign the acknowledgment of
                        receipt below. This is not an answer to the action.
                        If you do not agree with what is being requested, you must submit a
                        completed Response form to the court within 30 calendar days.
                    </div>
                </div>
                <div style={{ display: "flex", marginTop: 10, fontSize: 17 }}>
                    <div style={{ marginLeft: 5 }}>2.</div>
                    <div style={{ marginLeft: 55 }}>
                        Date of mailing (specify):
                        <input size={35} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                    </div>
                </div>
                <div style={{ display: "flex", marginTop: 10, fontSize: 17 }}>
                    <div style={{ marginLeft: 5 }}>3.</div>
                    <div
                        style={{ display: "flex", justifyContent: "flex-start", fontSize: 12 }}
                    >
                        <div style={{ marginLeft: 45 }}>
                            <div>
                                <input size={35} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", width: "35rem" }} type="text" id="street" />
                            </div>
                            (TYPE OR PRINT SENDER'S NAME)
                        </div>
                        <div style={{ marginLeft: 200 }}>
                            <div>
                                <input size={35} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                            </div>
                            (SIGNATURE OF SENDER—MUST NOT BE A PARTY IN THIS CASE
                            <br /> AND MUST BE 18 YEARS OR OLDER)
                        </div>
                    </div>
                </div>
                <div style={{ textAlign: "center", marginTop: 12, fontSize: 17 }}>
                    <b>ACKNOWLEDGMENT OF RECEIPT</b>
                </div>
                <div style={{ display: "flex", marginTop: 10, fontSize: 17 }}>
                    <div style={{ marginLeft: 5 }}>4 .</div>
                    <div style={{ marginLeft: 45 }}>I agree I received the following:</div>
                </div>
                <div style={{ display: "flex", marginLeft: 70, fontSize: 17, marginTop: 10 }}>
                    <div style={{ width: "5%", verticalAlign: "top" }}>
                        a.
                    </div>
                    <div>
                        <input type="checkbox" style={{ marginLeft: 15, padding: "4px" }} />
                    </div>
                    <div style={{ marginLeft: "14px" }}>
                        Law: Petition—Marriage/Domestic Partnership (form,
                        <a href="FL-100" target="_blank" style={{ color: "blue", borderBottom: "2px solid blue" }}>
                            FL-100
                        </a>
                        ) Summons (form{" "}
                        <a href="FL-100" target="_blank" style={{ color: "blue", borderBottom: "2px solid blue" }}>
                            FL-100
                        </a>
                        ), and blank Response— Marriage/Domestic Partnership (form FL-120)
                    </div>
                </div>
                <div style={{ display: "flex", marginLeft: 70, fontSize: 17, marginTop: 10 }}>
                    <div style={{ width: "5%", verticalAlign: "top" }}>
                        b.
                    </div>
                    <div>
                        <input type="checkbox" style={{ marginLeft: 15 }} />
                    </div>
                    <div style={{ marginLeft: "14px" }}>
                        Uniform Parentage: Petition to Establish Parental Relationship (form{" "}
                        <a href="FL-200" target="_blank" style={{ color: "blue", borderBottom: "2px solid blue" }}>
                            FL-200
                        </a>
                        ), Summons (form{" "}
                        <a href="FL-210" target="_blank" style={{ color: "blue", borderBottom: "2px solid blue" }}>
                            FL-210
                        </a>
                        ), and blank Response to Petition to Establish Parental Relationship (form{" "}
                        <a href="FL-220" target="_blank" style={{ color: "blue", borderBottom: "2px solid blue" }}>
                            FL-220
                        </a>
                        )
                    </div>
                </div>
                <div style={{ display: "flex", marginLeft: 70, fontSize: 17, marginTop: 10 }}>
                    <div style={{ width: "5%", verticalAlign: "top" }}>
                        c.
                    </div>
                    <div>
                        <input type="checkbox" style={{ marginLeft: 15 }} />
                    </div>
                    <div style={{ marginLeft: "14px" }}>
                        Custody and Support: Petition for Custody and Support of Minor Children
                        (form{" "}
                        <a href="FL-260" target="_blank" style={{ color: "blue", borderBottom: "2px solid blue" }}>
                            FL-260
                        </a>
                        ), Summons (form{" "}
                        <a href="FL-210" target="_blank" style={{ color: "blue", borderBottom: "2px solid blue" }}>
                            FL-210
                        </a>
                        ), and blank Response to Petition for Custody and Support of Minor
                        Children (form{" "}
                        <a href="FL-270" target="_blank" style={{ color: "blue", borderBottom: "2px solid blue" }}>
                            FL-270
                        </a>
                        )
                    </div>
                </div>
                <div style={{ display: "flex", marginLeft: 70, fontSize: 17, marginTop: 2 }}>
                    <div>
                        <span>(1)</span>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                            <div style={{ padding: 2 }}>
                                <span>(1)</span>
                                <input type="checkbox" size={10} style={{ marginLeft: "10px" }} />
                                <span style={{ marginLeft: "10px" }}>Completed and blank Declaration Under Uniform Child 
                                    Custody Jurisdiction and EnforcementAct (form 
                                    <a href="" target="_blank" style={{color:"blue"}}>FL-105</a> )
                                </span>
                            </div>
                            <div style={{ padding: 2 }}>
                                <span>(5)</span>
                                <input type="checkbox" size={10} style={{ marginLeft: "10px" }} />
                                <span style={{ marginLeft: "10px" }}>Completed and blank Income and Expense Declaration (form 
                                    <a href="" style={{color:"blue"}}>FL-150</a>)
                                </span>
                            </div>
                            <div style={{ padding: 2 }}>
                                <span>(2)</span>
                                <input type="checkbox" size={10} style={{ marginLeft: "10px" }} />
                                <span style={{ marginLeft: "10px" }}>Completed and blank Declaration of Disclosure (form 
                                    <a href="" style={{color:"blue"}}>FL-140</a>)
                                </span>
                            </div>
                            <div style={{ padding: 2 }}>
                                <span>(6)</span>
                                <input type="checkbox" size={10} style={{ marginLeft: "10px" }} />
                                <span style={{ marginLeft: "10px" }}>
                                    Completed and blank Financial Statement (Simplified)(form 
                                    <a href="" style={{color:"blue"}}>FL-155 </a>)
                                </span>
                            </div>
                            <div style={{ padding: 2 }}>
                                <span>(3)</span>
                                <input type="checkbox" size={10} style={{ marginLeft: "10px" }} />
                                <span style={{ marginLeft: "10px" }}>Completed and blank Schedule of Assets and Debts (form
                                    <a href="" style={{color:"blue"}}> FL-142</a> )
                                </span>
                            </div>
                            <div style={{ padding: 2 }}>
                                <span>(7)</span>
                                <input type="checkbox" size={10} style={{ marginLeft: "10px" }} />
                                <span style={{ marginLeft: "10px" }}>Request for Order (form FL-300), and
                                     blank Responsive Declaration to Request for Order (form 

                                    <a href="" style={{color:"blue"}}>FL-320</a>)
                                </span>
                            </div>
                            <div style={{ padding: 2 }}>
                                <span>(4)</span>
                                <input type="checkbox" size={10} style={{ marginLeft: "10px" }} />
                                <span style={{ marginLeft: "10px" }}> Completed and blank Property Declaration (form

                                    <a href="" style={{color:"blue"}}> FL-160 )</a>
                                </span>
                            </div>
                            <div style={{ padding: 2 }}>
                                <span>Other (specify)</span>
                                <input type="text" style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "10px", width: "22rem" }} />
                            </div>

                        </div>

                    </div>



                </div>



                <div style={{ display: "flex", marginTop: 1 }}>
                    <div style={{ marginLeft: 5 }}>5 .</div>
                    <div style={{ marginLeft: 10, marginBottom: 10 }}>
                        Recipient signed this acknowledgment on (specify date):
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-start", fontSize: 12 }}>
                    <div style={{ marginLeft: 5 }}>6.</div>
                    <div style={{ marginLeft: 0 }}>
                        <input style={{ width: "100%", backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="name" />
                        (TYPE OR PRINT NAME OF PERSON ACKNOWLEDGING RECEIPT)
                    </div>
                    <div style={{ marginLeft: 85 }}>
                        <input style={{ width: "90%", backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="name" />
                        (SIGNATURE OF PERSON ACKNOWLEDGING RECEIPT)
                    </div>
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
                        <li> Judicial Council of California</li>
                        <li> FL-117 [Rev. January 1, 2015]</li>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <h3>NOTICE AND ACKNOWLEDGMENT OF RECEIPT</h3>
                        <label style={{ textAlign: "center", fontWeight: "bold" }}>
                            (Family Law)
                        </label>
                    </div>
                    <div style={{ listStyle: "none" }}>
                        <li>Code of Civil Procedure, § 415.30, 417.10</li>
                        <li> www.courts.ca.gov</li>
                    </div>
                </div>
            </div>
        </>

    )
}
