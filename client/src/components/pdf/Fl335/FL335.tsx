import React from 'react'
import SUPFL335 from "./SU335";
export default function () {
    const [details, setDetails] = React.useState<SUPFL335>(
        {} as SUPFL335
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
            
            <h3 style={{ display: 'flex', marginBottom: '0',justifyContent:'end' }}>FL-335 </h3>
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
                               <div className=" h-.5 text-center text-red-500">To Keep outher people from seeing what you entered on your from, please press the Clear This Form button at the end of the form when finished</div>
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
                            height: "200px",
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
                            <div style={{borderTop:"2px solid black",}}>
                            <i>(If applicable, provide):</i>
                            <div style={{ margin: "0px", }}>
                                <label htmlFor="street" style={{ fontSize: "10px" }}>HEARING DATE:</label>
                                <input size={35} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", height: "18px", width: "70%" }} type="text" id="street" />
                            </div>
                            <div style={{ margin: "0px", }}>
                                <label htmlFor="street" style={{ fontSize: "10px" }}>HEARING TIME:</label>
                                <input size={35} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", height: "18px", width: "70%" }} type="text" id="street" />
                            </div>
                            <div style={{ margin: "0px", }}>
                                <label htmlFor="street" style={{ fontSize: "10px" }}>DEPT.:</label>
                                <input size={35} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", height: "18px", width: "83%" }} type="text" id="street" />
                            </div>
                            </div>
                        </td>
                    </tr>
                </table>
               <br />
                <div><b>NOTICE: To serve temporary restraining orders you must use personal service (see form FL-330).</b></div>
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
                            I am at least 18 years of age, not a party to this action, and I am a resident of or employed in the county where the mailing took
                            place.
                            </td>
                        </tr>
                        <tr>
                            <td width="3%" valign='top'>
                                2.
                            </td>
                            <label>My residence or business address is:</label><br />
                            <textarea
                                    name={"AttorneyOrPartyWithoutAttorney"}
                                    onChange={(e) => handleChange(e)}
                                        style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",resize:"none" }}
                            
                                        cols={80}
                                        // rows={4}
                                    />
                        </tr>
                        <tr>
                            <td width="3%" valign='top'>
                                3.
                            </td>
                            <td>
                            
                                    <label >
                                    I served a copy of the following documents (specify):
                                    </label><br />
                                    <textarea
                                    name={"AttorneyOrPartyWithoutAttorney"}
                                    onChange={(e) => handleChange(e)}
                                        style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",resize:"none" }}
                            
                                        cols={80}
                                        // rows={4}
                                    />
                                </td>
                        </tr>
                    </tbody>
                </table>
                <table
                    width="100%"
                    style={{ pageBreakInside: "auto", margin: 0, fontSize: 16, verticalAlign: "top" }}
                    cellPadding={5}
                    cellSpacing={5}
                >
                    <tbody>
                        <tr>
                            <td width="3%" valign="top">
                            
                            </td>
                            <td width="95%" valign="top">
                            by enclosing them in an envelope AND
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
                        <b>depositing</b> the sealed envelope with the United States Postal Service with the postage fully prepaid. 
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
                        <b>placing</b> the envelope for collection and mailing on the date and at the place shown in item 4 following our ordinary
                        business practices. I am readily familiar with this business’s practice for collecting and processing correspondence for
                        mailing. On the same day that correspondence is placed for collection and mailing, it is deposited in the ordinary course of
                        business with the United States Postal Service in a sealed envelope with postage fully prepaid.
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
                            4.
                            </td>
                            <td width="95%" valign="top">
                            The envelope was addressed and mailed as follows:
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                <div style={{ display: 'flex', marginBottom: 10, marginLeft: 43, fontSize: 16 }}>
      <div style={{ width: '3%', verticalAlign: 'top' }}>
        a.
      </div>
      <div style={{ marginTop: 2, fontSize: 16, margin:'4px' }}>
      Name of person served: 
        <input
          name="TypeOrPrintName"
          onChange={handleChange}
          style={{ backgroundColor: 'rgb(225, 243, 243)', border: 'none', margin: '0px' }}
          type="text"
          size={60}
          id="fax"
        />
      </div>
    </div>
    <div style={{ display: 'flex', marginBottom: 10, marginLeft: 43, fontSize: 16 }}>
      <div style={{ width: '3%', verticalAlign: 'top' }}>
        b.
      </div>
      <div style={{ marginTop: 2, fontSize: 16, margin:'4px' }}>
      Address: 
        <input
          name="Address"
          onChange={handleChange}
          style={{ backgroundColor: 'rgb(225, 243, 243)', border: 'none', margin: '0px' }}
          type="text"
          size={100}
          id="fax"

        />
      </div>
    </div>
    <div style={{ display: 'flex', marginBottom: 10, marginLeft: 43, fontSize: 16 }}>
      <div style={{ marginTop: 2, fontSize: 16, margin:'4px'  }}>
        c.
      </div>
      <div style={{ marginTop: 2, fontSize: 16, margin:'4px'}}>
            Date mailed: 
        <textarea
          name={"Date"}
          onChange={(e) => handleChange(e)}
          style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",resize:"none" }}
        //   cols={80}
          rows={1}
                                    />
                                </div>
                                </div>
                                <div style={{ display: 'flex', marginBottom: 10, marginLeft: 43, fontSize: 16 }}>
      <div style={{ width: '3%', verticalAlign: 'top' }}>
        d.
      </div>
      <div style={{ marginTop: 2, fontSize: 16, margin:'4px' }}>
      Place of mailing <i>(city and state):</i>
 
        <input
          name="Address"
          onChange={handleChange}
          style={{ backgroundColor: 'rgb(225, 243, 243)', border: 'none', margin: '0px' }}
          type="text"
          size={50}
          id="fax"

        />
      </div>
    </div>
                <table
                    width="100%"
                    style={{ pageBreakInside: "auto", verticalAlign: "top" }}
                    cellPadding={5}
                    cellSpacing={5}
                >
                    <tbody>
                        <tr><td width="3%" valign='top'>5.</td><td>
                        <div style={{ width: "93%", verticalAlign: "top" }}>
                    <input 
                        name={"AggrementsStipulationsAndWaivers"}
                        onChange={(e) => handleChange(e)}
                        type="checkbox" style={{ marginRight: 5, fontSize: 16 }} />
                        I served a request to modify a child custody, visitation, or child support judgment or permanent order which included an
                        address verification declaration. (Declaration Regarding Address Verification—Postjudgment Request to Modify a Child
                        Custody, Visitation, or Child Support Order (form FL-334) may be used for this purpose.)
                    </div></td></tr>
                    <tr>
                            <td width="3%" valign='top'>
                                6.
                            </td>
                            <td>
                            
                                    <label >
                                    I declare under penalty of perjury under the laws of the State of California that the foregoing is true and correct.
                                    </label><br/>
                                </td>
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
                        <div> FL-335 [Rev. January 1, 2012]</div>
                    </div>
                    <div style={{ }}>
                        <div style={{ marginLeft:"5px" , fontWeight: "bold" }}>
                        PROOF OF SERVICE BY MAIL 
                        </div>
                    </div>
                    <div style={{ listStyle: "none", fontSize:'10px' }}>
                        <div>Code of Civil Procedure, §§ 1013, 1013a</div>
                        <div> www.courtinfo.ca.gov</div>
                    </div>
                    <div style={{ listStyle: "none", fontWeight: "bold",fontSize:'12px' }}>
                    <li>Page 1 of 1</li>
                    </div>
                </div>
                
                </div> 
                

        
    )
};
