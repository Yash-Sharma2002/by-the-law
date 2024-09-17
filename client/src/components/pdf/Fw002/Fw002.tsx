import React from 'react'
import SUPFw002 from "./SU002";
export default function () {
    const [details, setDetails] = React.useState<SUPFw002>(
        {} as SUPFw002
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


      function handleSUPERIORCOURTOFCALIFORNIA(
        e:
          | React.ChangeEvent<HTMLInputElement>
          | React.ChangeEvent<HTMLTextAreaElement>
      ) {
        setDetails({
          ...details,
          [e.target.name]: e.target.value,
        });
      } 



     return (
        <div style={{ maxWidth: "1100px", margin: "auto" }}>
            
            <h3 style={{ display: 'flex', marginBottom: '0',backgroundColor:'balck' }}> <b>Fw-002</b> </h3>

            <h2 style={{display:'flex',justifyContent:'center',alignItems:'center', fontSize:'18px'}}><b>Request to Waive Additional Court Fees (Superior Court)</b></h2>
            <div className='container' style={{width:'80%', height:'30%',display:'flex',justifyContent:'space-between',gap:'4px',margin:'20px'}}>
                <div style={{flex:1,display:'flex', justifyContent:'center',alignItems:'center',border:'2px solid black'}}> <div ><h1><b>CONFIDENTIAL</b></h1></div> <i>Clerk stamps date here when form is filed.</i>
                                    </div>
                <div style={{flex:1, justifyContent:'center',alignItems:'center',border:'2px solid black'}}> <b>Superior Court of California, County of</b> <textarea
                                        style={{ backgroundColor: "rgb(225, 243, 243)", border: "none",width:"97%" ,resize:"none"}}
                                        name=""
                                        id=""
                                        rows={3}
                                        defaultValue={""}
                                    /></div>
                
            </div>
            <div><i>Fill in case number and name</i></div>
            <table style={{ width: "30%",  border: "2px solid black", borderCollapse: "collapse",marginLeft:'30px' }}>
                <tbody>
                    <td><div style={{ marginLeft: "1.2rem",marginBottom: "8px",width:"100%" }}>
                                    <label htmlFor="street">CASE NUMBER:</label>
                                    <br />
                                    <input 
                                    name={"CaseNumber"}
                                    onChange={(e) => handleChange(e)}
                                    style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"90%" }} type="text" id="street" />
                                    <label htmlFor="street">CASE NAME:</label>
                                    <br />
                                    <input 
                                    name={"CaseNumber"}
                                    onChange={(e) => handleChange(e)}
                                    style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"90%" }} type="text" id="street" />
                                </div>
                    </td>
                </tbody>
            </table>
                <div>
                    <p style={{width:'90%'}}>This form asks the court to waive additional court fees that are not covered in a current order. If you have not already 
                        received an order that waived or reduced your court fees, you must complete and file a Request to Waive Court Fees (Superior Court), form FW-001, along with this form.</p>
                </div>
                
                
                <table
                    width="100%"
                    style={{ pageBreakInside: "auto", marginTop: 5, fontSize: 16, verticalAlign: "top" }}
                    cellPadding={5}
                    cellSpacing={5}
                >
                    <tbody>
                        <tr>
                            <td width="3%" valign="top">
                                1.
                            </td>
                            <td width="95%" valign="top">
                            <b>Your Information</b> <i>(person asking the court to waive the fees):</i>
                            </td>
                        </tr>
                        
                        </tbody>
                    </table>
                    <div style={{ display: "grid",gridTemplateColumns:"1fr 1fr" ,marginLeft:'30px'}}>
                                    <div style={{ marginBottom: 2 }}>
                                        <label htmlFor="name">Name:</label>
                                        <input  onChange={(e) => handleSUPERIORCOURTOFCALIFORNIA(e)} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "50px",width:'65S%' }} type="text" id="Streetaddress" />
                                    </div>
                                    <div style={{ marginBottom: 2 }}>
                                        <label htmlFor="address">STREET ADDRESS:</label>
                                        <input  onChange={(e) => handleSUPERIORCOURTOFCALIFORNIA(e)} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "50px" }} type="text" id="City" />
                                    </div>
                                    <div style={{ marginBottom: 2 }}>
                                        <label htmlFor="city">CITY:</label>
                                        <input  onChange={(e) => handleSUPERIORCOURTOFCALIFORNIA(e)} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "60px" }} type="text" id="City" />
                                    </div>
                                    <div style={{ marginBottom: 2 }}>
                                        <label htmlFor="state">STATE:</label>
                                        <input  onChange={(e) => handleSUPERIORCOURTOFCALIFORNIA(e)} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "132px" }} type="text" id="State" />
                                    </div>
                                    <div style={{ marginBottom: 2 }}>
                                        <label htmlFor="zipcode">ZIP:</label>
                                        <input  onChange={(e) => handleSUPERIORCOURTOFCALIFORNIA(e)} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "68px" }} type="number" id="telephone" />
                                    </div>
                                    <div style={{ marginBottom: 2 }}>
                                        <label htmlFor="telephone">PHONE NO.:</label>
                                        <input  onChange={(e) => handleSUPERIORCOURTOFCALIFORNIA(e)} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "88px" }} type="number" id="telephone" />
                                    </div>
                                </div>
                                <table
                    width="100%"
                    style={{ pageBreakInside: "auto", marginTop: 5, fontSize: 16, verticalAlign: "top" }}
                    cellPadding={5}
                    cellSpacing={5}
                >
                    <tbody>
                        <tr>
                            <td width="3%" valign="top">
                                2.
                            </td>
                            <td width="95%" valign="top">
                            <b>Your lawyer, if you have one </b> <i>(name, firm or affiliation, address, phone number, and State Bar number):</i>
                            </td>
                        </tr>
                        
                        </tbody>
                    </table>
                    <textarea
                                        style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "30px",width:"80%" ,resize:"none"}}
                                        name=""
                                        id=""
                                        rows={3}
                                        defaultValue={""}
                                    />
                    <div
                    style={{ display: "flex", marginBottom: 5, marginLeft: 43, fontSize: 16 }}
                >
                    <div style={{ width: "3%", verticalAlign: "top" }}>
                        a.
                    </div>
                    <div style={{ width: "95%", verticalAlign: "top" }} >
                    The lawyer has agreed to advance all or a portion of your fees or costs
                    </div>
                    
                </div>
                <div style={{marginLeft:'70px'}}> <i>(check one):  </i><input type="checkbox"style={{margin:'6px'}} />No<input type="checkbox"style={{margin:'6px'}} />Yes</div>
                <div
                    style={{ display: "flex", marginBottom: 5, marginLeft: 43, fontSize: 16 }}
                >
                    <div style={{ width: "3%", verticalAlign: "top" }} >
                        {/* Checkbox added here */}
                        b.
                    </div>
                    <div style={{ width: "95%", verticalAlign: "top" }} >
                        <i>(If yes, your lawyer must sign here):</i>
                    </div>
                </div>
                <div style={{marginLeft:'70px'}}>Lawyer’s signature:<textarea
                                        style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "10px",width:"20%" ,resize:"none"}}
                                        name=""
                                        id=""
                                        rows={1}
                                        defaultValue={""}
                                    /></div>
                <div style={{marginLeft:'60px'}}><i>If your lawyer is not providing legal-aid type services based on your low income, you may have to go to a hearing to explain why you are asking the court to waive the fees.</i></div>
                








<table
                    width="100%"
                    style={{ pageBreakInside: "auto", marginTop: 5, fontSize: 16, verticalAlign: "top" }}
                    cellPadding={5}
                    cellSpacing={5}
                >
                    <tbody>
                        <tr>
                            <td width="3%" valign="top">
                                3.
                            </td>
                            <td width="95%" valign="top">
                            Date your last court fee waiver order, if any, was granted:<textarea
                                        style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "10px",width:"30%" ,resize:"none"}}
                                        name=""
                                        id=""
                                        rows={1}
                                        defaultValue={""}
                                    />
                            </td>
                        </tr>
                        
                        </tbody>
                    </table>
                <table
                    width="100%"
                    style={{ pageBreakInside: "auto", marginTop: 5, fontSize: 16, verticalAlign: "top" }}
                    cellPadding={5}
                    cellSpacing={5}
                >
                    <tbody>
                        <tr>
                            <td width="3%" valign="top">
                                4.
                            </td>
                            <td width="95%" valign="top">
                            Has your financial situation 
                            improved since your last <i>Request to Waive Court Fees? 
                                </i><input type="checkbox" style={{margin:'8px'}} /> No
                                <input type="checkbox" style={{margin:'8px'}} /> Yes
                            </td>
                        </tr>
                        
                        </tbody>
                    </table>
                    <i style={{marginLeft:'30px'}}>(If yes, you must fill out a new Request to Waive Court Fees, form FW-001, and attach it to this form.)</i>
                <table
                    width="100%"
                    style={{ pageBreakInside: "auto", marginTop: 5, fontSize: 16, verticalAlign: "top" }}
                    cellPadding={5}
                    cellSpacing={5}
                >
                    <tbody>
                        <tr>
                            <td width="3%" valign="top">
                                5.
                            </td>
                            <td width="95%" valign="top">
                            What other fees do you want your court fee waiver order to cover? <i>(Check all that apply):</i>
                            </td>
                        </tr>
                        
                        </tbody>
                    </table>
                    <div
                    style={{ display: "flex", marginBottom: 5, marginLeft: 43, fontSize: 16 }}
                >
                    <div style={{ width: "3%", verticalAlign: "top" }}>
                        a.
                    </div>
                    <div style={{ width: "95%", verticalAlign: "top" }} >
                        <input 
                        name={"AggrementsStipulationsAndWaivers"}
                        onChange={(e) => handleChange(e)}
                        type="checkbox" style={{ marginRight: 5, fontSize: 16 }} />
                       Jury fees and expenses
                    </div>
                </div>
                <div
                    style={{ display: "flex", marginBottom: 5, marginLeft: 43, fontSize: 16 }}
                >
                    <div style={{ width: "3%", verticalAlign: "top" }} >
                        {/* Checkbox added here */}
                        b.
                    </div>
                    <div style={{ width: "95%", verticalAlign: "top" }} >
                        {" "}
                        <input 
                        name={"AggrementsStipulationsAndWaivers"}
                        onChange={(e) => handleChange(e)}
                        type="checkbox" style={{ marginRight: 5, fontSize: 16 }} />
                         Court-appointed interpreter fees for a witness
                    </div>
                </div>
                <div style={{ display: "flex", marginBottom: 5, marginLeft: 43 }}>
                    <div style={{ width: "3%", verticalAlign: "top" }} >
                        {/* Checkbox added here */}
                        c.
                    </div>
                    <div style={{ width: "95%", verticalAlign: "top" }} >
                        {" "}
                        <input 
                        name={"AggrementsStipulationsAndWaivers"}
                        onChange={(e) => handleChange(e)}
                        type="checkbox" style={{ marginRight: 5, fontSize: 16 }} />
                        Fees for a peace officer to testify in court
                    </div>
                </div>
                <div style={{ display: "flex", marginBottom: 5, marginLeft: 43 }}>
                    <div style={{ width: "3%", verticalAlign: "top" }} >
                        {/* Checkbox added here */}
                        d.
                    </div>
                    <div style={{ width: "95%", verticalAlign: "top" }} >
                        {" "}
                        <input 
                        name={"AggrementsStipulationsAndWaivers"}
                        onChange={(e) => handleChange(e)}
                        type="checkbox" style={{ marginRight: 5, fontSize: 16 }} />
                        Fees for court-appointed experts
                    </div>
                </div>
                <div style={{ display: "flex", marginBottom: 5, marginLeft: 43 }}>
                    <div style={{ width: "3%", verticalAlign: "top" }} >
                        {/* Checkbox added here */}
                        e.
                    </div>
                    <div style={{ width: "95%", verticalAlign: "top" }} >
                        {" "}
                        <input 
                        name={"AggrementsStipulationsAndWaivers"}
                        onChange={(e) => handleChange(e)}
                        type="checkbox" style={{ marginRight: 5, fontSize: 16 }} />
                          Other (specify):<textarea
                                        style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "5px",width:"50%" ,resize:"none"}}
                                        name=""
                                        id=""
                                        rows={1}
                                        defaultValue={""}
                                    />
                    </div>
                </div>
                    <table
                    width="100%"
                    style={{ pageBreakInside: "auto", marginTop: 5, fontSize: 16, verticalAlign: "top" }}
                    cellPadding={5}
                    cellSpacing={5}
                >                
                        <tbody>
                        <tr>
                            <td width="3%" valign="top">
                                6.
                            </td>
                            <td width="95%" valign="top">
                            Why do you need these other services?  <i>(Explain):</i>
                            </td>
                        </tr>
                        
                        </tbody>
                    </table>
                    <textarea
                                        style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "30px",width:"99%" ,resize:"none"}}
                                        name=""
                                        id=""
                                        rows={2}
                                        defaultValue={""}
                                    />
                <div><b>Notice:</b><p>The court may order you to answer questions about your finances and later order you to pay back the 
                    waived fees. If this happens and you do not pay, the court can make you pay the fees and also charge you collection fees. 
                    If there is a change in your financial circumstances during this case that increases your ability to pay fees and costs, 
                    you must notify the trial court within five days. (Use form FW-010.) If you win your case, the trial court may order the 
                    other side to pay the fees. If you settle your civil case for $10,000 or more, the trial court will have a lien on the 
                    settlement in the amount of the waived fees. The trial court may not dismiss the case until the lien is paid.</p></div>
                <div style={{marginLeft:'5px'}}> <b>I declare under penalty of perjury under the laws of the State of California that the information above is true and correct.</b></div>
                <div style={{ marginLeft: "5%" }}>
                    <div style={{ marginTop: 2, fontSize: 16 }}>
                        Date: <input
                        name={"Date"}
                        onChange={(e) => handleChange(e)}
                        style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" size={20} id="fax" />
                    </div>
                    <div
                        style={{ display: "flex", justifyContent: "space-between", margin: 3}}
                    >
                        <div>
                            <input
                            name={"TypeOrPrintName"}
                            onChange={(e) => handleChange(e)}
                            style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "4px" }} type="text" id="fax" size={50} />
                            <div>(TYPE OR PRINT NAME)</div>{" "}
                        </div>
                        <div>
                        <input 
                        style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "4px" }}
                        name={"SignatureOfPetitioner"}
                        onChange={(e) => handleChange(e)}
                        type="text" size={40} id="fax" />{" "}
                            <div>  (SIGNATURE OF PERSON COMPLETING THIS FORM)</div>
                        </div>
                    </div>
                </div><br /><br />
              
                <hr style={{ width: "100%" }} />
                <div
                    className="footer"
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div style={{ listStyle: "none" , fontSize:'10px' }}>
                        <div>Form Approved for Optional Use</div>
                        <div>Judicial Council of California</div>
                        <div> [July 1, 2015, Mandatory]</div>
                    </div>
                    <div style={{ }}>
                        <div style={{ marginLeft:"5px" , fontWeight: "bold" }}>
                        Request to Waive Additional Court Fees 
                        </div>
                        <div><b>(Superior Court)</b></div>

                    </div>
                    <div style={{ listStyle: "none", fontSize:'10px' }}>
                        <div>Government Code, § 68511.3
                            California Rules of Court, Rule 3.51</div>
                        <div> www.courtinfo.ca.gov</div>
                    </div>
                    <div style={{ listStyle: "none", fontWeight: "bold",fontSize:'12px' }}>
                    <li>Page 1 of 1</li>
                    </div>
                </div>
                
                </div> 
                

        
    )
};
