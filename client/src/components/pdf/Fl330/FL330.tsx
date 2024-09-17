import React from 'react'
import SUPFL330 from "./SU330";
export default function () {
    const [details, setDetails] = React.useState<SUPFL330>(
        {} as SUPFL330
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
            
            <h3 style={{ display: 'flex', marginBottom: '0',justifyContent:'end' }}>FL-330 </h3>
            <table style={{ width: "100%", border: "2px solid black", borderCollapse: "collapse", }}>
                    <tr className='flex justify-center items-start w-full h-full'>
                        <td style={{ width: "70%", margin: 0, padding: 1, borderCollapse: "collapse", height: "100%", borderRight: "2px solid black" }}
                        >
                            <div style={{ margin: "0px 2px", marginTop: "-4px" }}>
                                <label style={{ fontSize: "10px" }} >
                                    ATTORNEY OR PARTY WITHOUT ATTORNEY
                                    <span style={{ fontStyle: "italic" }}>(Name, State Bar number, and
                                        address)</span>:
                                </label>
                                <textarea
                                    style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", width: "-webkit-fill-available", resize: 'none' }}
                                    name=""
                                    id=""
                                    cols={90}
                                    rows={3}
                                    defaultValue={""}
                                />
                            </div>
                            <div className='flex justify-end items-center w-full'
                            >
                                <div className='flex justify-end items-center' style={{ width: "inherit", marginRight: "-45px" }}>
                                    <label style={{ fontSize: "10px" }} htmlFor="telephone">TELEPHONE NO.:</label>
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", height: "18px", margin: "0px 2px", }} className='w-[46.7%]' type="number" id="telephone" />
                                </div>
                                <div className='flex justify-end items-center' style={{ width: "inherit" }}>
                                    <label style={{ fontSize: "10px" }} htmlFor="telephone">FAX NO. <span style={{ fontStyle: "italic" }}>(Optional)</span>:</label>
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", height: "18px", margin: "0px 2px", }} className='w-[46.7%]' type="number" id="telephone" />
                                </div>
                            </div>
                            <div className='mt-1 flex justify-end items-center'>
                                <label style={{ fontSize: "10px" }} htmlFor="fax">E-MAIL ADDRESS <span style={{ fontStyle: "italic" }}>(Optional)</span>:</label>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px 2px", height: "18px", width: '71%' }} type="text" id="fax" />
                            </div>
                            <div className='mt-1 flex justify-end items-center'>
                                <label style={{ fontSize: "10px" }} htmlFor="attorney">ATTORNEY FOR <span style={{ fontStyle: "italic" }}>(Name)</span>:</label>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px 2px", height: "18px", width: "71%" }} type="email" id="attorney" />
                            </div>
                        </td>
                        <td style={{ textAlign: "center", border: "4px solid red", borderCollapse: "collapse",width:'329px' }} rowSpan={3}>
                               <div className="bg-green-200 h-.5 text-center text-red-500">To Keep outher people from seeing what you entered on your from, please press the Clear This Form button at the end of the form when finished</div>
                            </td>
                    </tr>
                    <tr className='flex justify-center items-center w-full'>
                        <td style={{ margin: 0, padding: 1,paddingBottom:2, borderCollapse: "collapse", borderTop: "2px solid black", display: "flex", flexDirection: "column", justifyContent: "flex-end", width: "70%", borderRight: "2px solid black" }}>
                            <div className=' flex justify-end items-center'>
                                <label htmlFor="name" style={{ fontSize: "10px", fontWeight: "bold" }}>SUPERIOR COURT OF CALIFORIA, COUNTY OF</label>
                                <input
                                    style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px 2px", height: "18px", width: '56%' }}
                                    type="text"
                                    id="name"
                                />
                            </div>
                            <div className='mt-1 flex justify-end items-center'>
                                <label htmlFor="street" style={{ fontSize: "10px" }}>STREET ADDRESS:</label>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px 2px", height: "18px", width: "79.7%" }}
                                    type="text" id="street" />
                            </div>
                            <div className='mt-1 flex justify-end items-center'>
                                <label htmlFor="street" style={{ fontSize: "10px" }}>MAILING ADDRESS:</label>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px 2px", height: "18px", width: "79.7%" }}
                                    type="text" id="street" />
                            </div>
                            <div className='mt-1 flex justify-end items-center'>
                                <label htmlFor="street" style={{ fontSize: "10px" }}>CITY AND ZIP CODE:</label>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px 2px", height: "18px", width: "79.7%" }}
                                    type="text" id="street" />
                            </div>
                            <div className='mt-1 flex justify-end items-center'>
                                <label htmlFor="street" style={{ fontSize: "10px" }}>BRANCH NAME:</label>
                                <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px 2px", height: "18px", width: "79.7%" }} type="text" id="street" />
                            </div>
                        </td>
                        <td style={{ textAlign: "center", top: 0, marginBottom: 10, borderCollapse: "collapse" }}
                            className=' w-[30%]'
                        >
                        </td>
                    </tr>
                    <tr className='flex justify-center items-center w-full'>
                        <td style={{ borderTop: "2px solid black", borderCollapse: "collapse", padding: 1,paddingBottom:2, width: "70%", borderRight: "2px solid black", borderBottom: "2px solid black" }}>
                            <div className='flex justify-end items-center '>
                                <label htmlFor="name" style={{ fontSize: "10px" }}>PLAINTIFF/PETITIONER:</label>
                                <input size={86} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px 2px", height: "18px", width: "74.4%" }}
                                    type="text" id="name" />
                            </div>
                            <div className='flex justify-end items-center mt-1'>
                                <label htmlFor="street" style={{ fontSize: "10px" }}>DEFENDENT/RESPONDENT:</label>
                                <input size={85} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px 2px", height: "18px", width: "83%" }}
                                    type="text" id="street" />
                            </div>
                            <div className='flex justify-end items-center mt-1'>
                                <label htmlFor="street" style={{ fontSize: "10px" }}>OTHER PARENT:</label>
                                <input size={85} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px 2px", height: "18px", width: "74.4%" }} type="text" id="street" />
                            </div>
                        </td>
                        <td style={{ textAlign: "center", top: 0, marginBottom: 10, borderCollapse: "collapse" }}
                            className=' w-[30%]'
                        >

                        </td>
                    </tr>
                    <tr className='flex justify-center items-center w-full'>
                        <td style={{
                            borderCollapse: "collapse", width: "70%",
                            height: "48px",
                            borderRight: "2px solid black",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <div style={{ textAlign: "center", fontSize: "14px", letterSpacing: "1px" }}>
                                <b>PROOF OF PERSONAL SERVICE</b>
                            </div>
                        </td>
                        <td className='px-2 w-[30%]' style={{borderTop:"2px solid black",}}>
                            <div style={{ margin: "0px", }}>
                                <label htmlFor="street" style={{ fontSize: "10px" }}>CASE NUMBER:</label>
                                <br />
                                <input size={35} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", height: "18px", width: "100%" }} type="text" id="street" />
                            </div>
                        </td>
                    </tr>
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
                                1.
                            </td>
                            <td width="95%" valign="top">
                                I am at least 18 years old, nt a party to this action, and not a protected person listed in any of the orders.
                            </td>
                        </tr>
                        <tr>
                            <td width="3%">
                                2.
                            </td>
                            <td><label htmlFor="street">Person served(name):</label>
                                    <input 
                                    name={"BranchName"}
                                    onChange={(e) => handleSUPERIORCOURTOFCALIFORNIA(e)}
                                     style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"81.7%" }} type="text" id="street" /></td>
                            
                        </tr>
                        <tr>
                            <td width="3%" valign='top'>
                                3.
                            </td>
                            <td>
                            
                                    <label >
                                        I served copies of the following documents (specify):
                                    </label><br/>
                                    <textarea
                                    name={"AttorneyOrPartyWithoutAttorney"}
                                    onChange={(e) => handleChange(e)}
                                        style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",resize:"none" }}
                            
                                        cols={80}
                                        // rows={4}
                                    />
                                </td>
                        </tr>
                        <tr>
                            <td width="3%" valign="top">
                                4.
                            </td>
                            <td width="95%" valign="top">
                            By personally delivering copies to the person served, as follows:
                            </td>
                    
            
                        </tr>
                    </tbody>
                </table>
                <div style={{ display: 'flex', marginBottom: 10, marginLeft: 43, fontSize: 16 }}>
      <div style={{ width: '3%', verticalAlign: 'top' }}>
        a.
      </div>
      <div style={{ marginTop: 2, fontSize: 16 }}>
        Date: 
        <input
          name="Date"
          onChange={handleChange}
          style={{ backgroundColor: 'rgb(225, 243, 243)', border: 'none', margin: '0px' }}
          type="text"
          size={20}
          id="fax"
        />
      </div>
    </div>
                <div style={{ display: 'flex', marginBottom: 10, marginLeft: 43, fontSize: 16 }}>
      <div style={{ width: '3%', verticalAlign: 'top' }}>
        b.
      </div>
      <div style={{ marginTop: 2, fontSize: 16 }}>
        Time: 
        <input
          name="Time"
          onChange={handleChange}
          style={{ backgroundColor: 'rgb(225, 243, 243)', border: 'none', margin: '0px' }}
          type="text"
          size={20}
          id="fax"
        />
      </div>
    </div>
                <div style={{ display: 'flex', marginBottom: 10, marginLeft: 43, fontSize: 16 }}>
      <div style={{ width: '3%', verticalAlign: 'top' }}>
        c.
      </div>
                                <div style={{ verticalAlign:'top', fontSize: 16 , width:'3%'}}>
                                    Address: 
                                    <textarea
                                    name={"Address"}
                                    onChange={(e) => handleChange(e)}
                                        style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",resize:"none" }}
                            
                                        cols={80}
                                        // rows={4}
                                    />
                                </div>
                                </div>
                
                <table
                    width="100%"
                    style={{ pageBreakInside: "auto", margin: 0, fontSize: 16, verticalAlign: "top" }}
                    cellPadding={5}
                    cellSpacing={5}
                >
                    <tbody>
                        <tr>
                            <td width="3%" valign="top">
                                5.
                            </td>
                            <td width="95%" valign="top">
                                I am
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div
                    style={{ display: "flex", marginBottom: 5, marginLeft: 43, fontSize: 16 }}
                >
                    <div style={{ width: "3%", verticalAlign: "top" }}>
                        {/* Checkbox added here */}
                        a.
                    </div>
                    <div style={{ width: "95%", verticalAlign: "top" }} >
                        <input 
                        name={"AggrementsStipulationsAndWaivers"}
                        onChange={(e) => handleChange(e)}
                        type="checkbox" style={{ marginRight: 5, fontSize: 16 }} />
                        not a registered California process server.
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
                        a registered California process server.
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
                        an employee or independent contractor of a registered California process server.
                    </div>
                </div>
                <div style={{ display: "flex", marginBottom: 5, marginLeft: 43 }}>
                    <div style={{ width: "3%", verticalAlign: "top" }} >
                        {/* Checkbox added here */}
                        d.
                    </div>
                    <div>
                        {" "}
                        <input 
                        name={"AggrementsStipulationsAndWaivers"}
                        onChange={(e) => handleChange(e)}
                        type="checkbox" style={{ marginRight: 5, fontSize: 16 }} />
                    </div>
                    <div>
                        {" "}
                        exempt from registration under Bus. & Prof.
                        Code section 22350(b).
                    </div>
                </div>
                <div
                    style={{ display: "flex", marginBottom: 5, marginLeft: 43, fontSize: 16 }}
                >
                    <div style={{ width: "3%", verticalAlign: "top" }} >
                        {/* Checkbox added here */}
                        e.
                    </div>
                    <div>
                        <input 
                        name={"AggrementsStipulationsAndWaivers"}
                        onChange={(e) => handleChange(e)}
                        type="checkbox" style={{ marginRight: 5, fontSize: 16 }} />
                    </div>
                    <div>
                        {" "}
                        a California sheriff or marshal.
                    </div>
                </div>
                <table
                    width="100%"
                    style={{ pageBreakInside: "auto", verticalAlign: "top" }}
                    cellPadding={5}
                    cellSpacing={5}
                >
                    <tbody>
                    <tr>
                            <td width="3%" valign='top'>
                                6.
                            </td>
                            <td>
                            
                                    <label >
                                    My name, address, and telephone number, and, if applicable, county of registration and number (specify):
                                    </label><br/>
                                    <textarea
                                    name={"AttorneyOrPartyWithoutAttorney"}
                                    onChange={(e) => handleChange(e)}
                                        style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",resize:"none" }}
                            
                                        cols={80}
                                        // rows={4}
                                    />
                                </td>
                        </tr>
                        <tr>
                        <td width="3%" valign='top'>
                                7.
                            </td>
                            <td><div style={{ width: "95%", verticalAlign: "top" }} >
                        {" "}
                        <input 
                        name={"AggrementsStipulationsAndWaivers"}
                        onChange={(e) => handleChange(e)}
                        type="checkbox" style={{ marginRight: 5, fontSize: 16 }} />
                        I declare under penalty of perjury under the laws of the State of California that the foregoing is true and correct.
                    </div></td>
                        </tr>
                        <tr>
                        <td width="3%" valign='top'>
                                8.
                            </td>
                            <td><div style={{ width: "95%", verticalAlign: "top" }} >
                        {" "}
                        <input 
                        name={"AggrementsStipulationsAndWaivers"}
                        onChange={(e) => handleChange(e)}
                        type="checkbox" style={{ marginRight: 5, fontSize: 16 }} />
                        I am a California sheriff or marshal and I certify that the foregoing is true and correct.
                    </div></td>
                        </tr>
                    </tbody>
                </table>
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
                            <div>(TYPE OR PRINT NAME OF PERSON WHO SERVED THE PAPERS)</div>{" "}
                        </div>
                        <div>
                        <input 
                        style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "4px" }}
                        name={"SignatureOfPetitioner"}
                        onChange={(e) => handleChange(e)}
                        type="text" size={40} id="fax" />{" "}
                            <div>  (SIGNATURE OF PERSON WHO SERVED THE PAPERS)</div>
                        </div>
                    </div>
                </div>
              
                <hr style={{ width: "100%" }} />
                <div
                    className="footer"
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div style={{ listStyle: "none" , fontSize:'10px' }}>
                        <div>Form Approved for Optional Use</div>
                        <div>Judicial Council of California</div>
                        <div> FL-330 [Rev. January 1, 2003]</div>
                    </div>
                    <div style={{ }}>
                        <div style={{ marginLeft:"5px" , fontWeight: "bold" }}>
                        PROOF OF PERSONAL SERVICE
                        </div>
                    </div>
                    <div style={{ listStyle: "none", fontSize:'10px' }}>
                        <div>Code of Civil Procedure, § 1011</div>
                        <div> www.courtinfo.ca.gov</div>
                    </div>
                    <div style={{ listStyle: "none", fontWeight: "bold",fontSize:'15px' }}>
                    <li>Page 1 of 2</li>
                    </div>
                </div>
                <br/>
                <br/>
                <div>
                <div style={{justifyContent:'center', alignItems:'center', display:'flex' }}>
                    <h2><b>INFORMATION SHEET FOR PROOF OF PERSONAL SERVICE</b></h2>
                </div><br/>
                <div>
                Use these instructions to complete the Proof of Personal Service (form FL-330).
                </div><br/>
                <div><p>A person at least 18 years of age or older must serve the documents. There are two ways to serve documents: (1)
                    personal delivery and (2) by mail. See the Proof of Service by Mail (form FL-335) if the documents are being served by
                    mail. The person who serves the documents must complete a proof of service form for the documents being served.<b>You
                    cannot serve documents if you are a party to the action.</b></p></div><br/>
                    <div style={{fontSize:'14px'}}><h4><b>INSTRUCTIONS FOR THE PERSON WHO SERVES THE DOCUMENTS (TYPE OR PRINT IN BLACK INK)</b></h4></div><br />
                <div><p>You must complete a proof of service for each package of documents you serve. For example, if you serve the Respondent and the Other Parent, you must complete two proofs of service, one for the Respondent and one for the Other Parent.</p></div><br/>
                <div><i>Complete the top section of the proof of service forms as follows:</i></div>
                <div><p><u>First box, left side:</u> In this box print the name, address, and phone number of the person for whom you are serving the
                    documents.
                    <div></div><u>Second box, left side:</u> Print the name of the county in which the legal action is filed and the court's address in this box. Use
                    the same address for the court that is on the documents you are serving.
                    <div><u>Third box, left side:</u>Print the names of the Petitioner/Plaintiff, Respondent/Defendant, and Other Parent in this box. Use
                    the same names listed on the documents you are serving.</div>
                    <div><u>First box, top of form, right side:</u> Leave this box blank for the court's use.</div>
                    <div><u>Second box, right side:</u> Print the case number in this box. This number is also stated on the documents you are serving.</div></p></div><br/>
                    <table
                    width="100%"
                    style={{ pageBreakInside: "auto", marginTop: 5, fontSize: 16, verticalAlign: "top" }}
                    cellPadding={5}
                    cellSpacing={5}
                >
                    
                    <tbody>
                        <div style={{fontSize: '14px'}}><tr><td width="3%" valign="top">1.</td><td>You are stating that you are over the age of 18 and that you are neither a party of this action nor a protected person listed in any of the orders.</td></tr>
                        <tr><td width="3%" valign="top">2.</td><td>Print the name of the party to whom you handed the documents.</td></tr>
                        <tr><td width="3%" valign="top">3.</td><td> List the name of each document that you delivered to the party.</td></tr>
                        <tr><td width="3%" valign="top">4.</td><td> List the name of each document that you delivered to the party.</td></tr>
                        <tr><td width="3%" valign="top">5.</td>
                            <div >a.  Write in the date that you delivered the documents to the party.</div>
                            <div >b.  Write in the time of day that you delivered the documents to the party.</div>
                            <div >c.  Print the address where you delivered the documents.</div>
                        </tr>
                        <tr><td width="3%" valign="top">6.</td><td>Print your name, address, and telephone number. If applicable, include the county in which you are registered as a
                        process server and your registration number.</td></tr>
                        <tr><td width="3%" valign="top">7.</td><td>You must check this box if you are not a California sheriff or marshal. You are stating under penalty of perjury that the
                        information you have provided is true and correct.</td></tr>
                        <tr><td width="3%" valign="top">8.</td><td>Do not check this box unless you are a California sheriff or marshal.</td></tr><br /></div>
                        
                    </tbody>
                    </table>
                    <div><b>Print your name, fill in the date, and sign the form.</b></div><br />
                        <div><i>If you need additional assistance with this form, contact the Family Law Facilitator in your county.</i></div>
                    </div><br />
                    <hr style={{ width: "100%" }} />
                <div
                    className="footer"
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div style={{ listStyle: "none" , fontSize:'10px' }}>
                        <div>Form Approved for Optional Use</div>
                        <div>Judicial Council of California</div>
                        <div> FL-330 [Rev. January 1, 2003]</div>
                    </div>
                    <div style={{ }}>
                        <div style={{ marginLeft:"5px" , fontWeight: "bold" }}>
                        PROOF OF PERSONAL SERVICE
                        </div>
                    </div>
                    <div style={{ listStyle: "none", fontSize:'10px' }}>
                        <div>Code of Civil Procedure, § 1011</div>
                        <div> www.courtinfo.ca.gov</div>
                    </div>
                    <div style={{ listStyle: "none", fontWeight: "bold",fontSize:'15px' }}>
                    <li>Page 2 of 2</li>
                    </div>
                </div> 
                </div>
                

        
    )
};
