import React from 'react'
import SUPFL191 from "./SU191";
export default function () {
    const [details, setDetails] = React.useState<SUPFL191>(
        {} as SUPFL191
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
            
            <h3 style={{ display: 'flex', marginBottom: '0',justifyContent:'end' }}>FL-191 </h3>
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
                            height: "100px",
                            borderRight: "2px solid black",
                            
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <div style={{ textAlign: "center", fontSize: "12px", letterSpacing: "1px" }}>
                                <b>CHILD SUPPORT CASE REGISTRY FORM</b>
                            </div><br />
                            <div> <input type="checkbox" style={{marginLeft:'60px'}} /> <b>Father</b> <input type="checkbox" style={{marginLeft:'69px'}} /> <b>First form completed</b> </div>
                            <div> <input type="checkbox" style={{marginLeft:'60px'}} /> <b>Mother</b> <input type="checkbox" style={{marginLeft:'60px'}} /> <b>Change to previous information</b> </div>
                            
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
                
                <div  style={{display:'flex', justifyContent:'center', alignItems:'center', marginLeft:'90px'}}> <h1><b>
                THIS FORM WILL NOT BE PLACED IN THE COURT FILE. IT WILL BE MAINTAINED IN A CONFIDENTIAL FILE WITH THE STATE OF CALIFORNIA.</b></h1> </div>
                <div style={{border:'2px solid black', display:'flex', marginLeft:'10px',fontSize:'14px', padding:'8px'}}>
                Notice: Pages 1 and 2 of this form must be completed and delivered to the court along with the court order for support. Pages 3 
                and 4 are instructional only and do not need to be delivered to the court. If you did not file the court order, you must 
                complete this form and deliver it to the court within 10 days of the date on which you received a copy of the support order. 
                Any later change to the information on this form must be delivered to the court on another form within 10 days of the change. 
                It is important that you keep the court informed in writing of any changes of your address and telephone number.
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
                            Support order information (this information is on the court order you are filing or have received).
                            </td>
                        </tr>
                        </tbody>
                        </table>
                        <div style={{ display: 'flex', marginBottom: 10, marginLeft: 43, fontSize: 16 }}>
                        <div style={{ width: '3%', verticalAlign: 'top' }}>
                            a.
                        </div>
                        <div style={{ marginTop: 2, fontSize: 16 }}>
                        Date order filed: 
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
                        <div
                    style={{ display: "flex", marginBottom: 5, marginLeft: 43, fontSize: 16 }}
                >
                    <div style={{ width: "3%", verticalAlign: "top" }}>
                        b.
                    </div>
                    <div style={{ width: "95%", verticalAlign: "top" }} >
                        <input 
                        name={"AggrementsStipulationsAndWaivers"}
                        onChange={(e) => handleChange(e)}
                        type="checkbox" style={{ marginRight: 5, fontSize: 16 }} />
                        Initial child support or family support order
                        <input 
                        name={"AggrementsStipulationsAndWaivers"}
                        onChange={(e) => handleChange(e)}
                        type="checkbox" style={{ margin: 5, fontSize: 16 }} />
                        Modification
                    </div>
                    </div>
        
                    <table style={{ marginLeft:'35px' }}>
                                <tr>
                                    <th>Child Support:</th>
                                    <th>Family Support:</th>
                                    <th>Spousal Support:</th>
                                </tr>
                                <tr>
                                    <td>
                                   (1).  <input type="checkbox" name="current_base_child_support" /> Current base child support: $
                                    <input type="text" name="current_base_child_support_amount" style={{ backgroundColor: 'rgb(225, 243, 243)'}} />
                                    <br />
                                    <input type="checkbox" name="reserved_order_child_support" /> Reserved order
                                    <br />
                                    <input type="checkbox" name="zero_order_child_support" /> $0 (zero) order
                                    </td>
                                    <td>
                                    <input type="checkbox" name="current_base_family_support" /> Current base family support: $
                                    <input type="text" name="current_base_family_support_amount"style={{ backgroundColor: 'rgb(225, 243, 243)'}} />
                                    <br />
                                    <input type="checkbox" name="reserved_order_family_support" /> Reserved order
                                    <br />
                                    <input type="checkbox" name="zero_order_family_support" /> $0 (zero) order
                                    </td>
                                    <td>
                                    <input type="checkbox" name="current_spousal_support" /> Current spousal support: $
                                    <input type="text" name="current_spousal_support_amount"style={{ backgroundColor: 'rgb(225, 243, 243)'}} />
                                    <br />
                                    <input type="checkbox" name="reserved_order_spousal_support" /> Reserved order
                                    <br />
                                    <input type="checkbox" name="zero_order_spousal_support" /> $0 (zero) order
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                   (2).  Additional monthly support: $
                                    <input type="text" name="additional_monthly_support_child"style={{ backgroundColor: 'rgb(225, 243, 243)'}} />
                                    </td>
                                    <td>
                                    Additional monthly support: $
                                    <input type="text" name="additional_monthly_support_family"style={{ backgroundColor: 'rgb(225, 243, 243)'}} />
                                    </td>
                                    <td>
                                    Additional monthly support: $
                                    <input type="text" name="additional_monthly_support_spousal"style={{ backgroundColor: 'rgb(225, 243, 243)'}} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                   (3).  Total past-due support: $
                                    <input type="text" name="total_past_due_support_child"style={{ backgroundColor: 'rgb(225, 243, 243)'}} />
                                    </td>
                                    <td>
                                    Total past-due support: $
                                    <input type="text" name="total_past_due_support_family"style={{ backgroundColor: 'rgb(225, 243, 243)'}} />
                                    </td>
                                    <td>
                                    Total past-due support: $
                                    <input type="text" name="total_past_due_support_spousal"style={{ backgroundColor: 'rgb(225, 243, 243)'}} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                   (4).  Payment on past-due support: $
                                    <input type="text" name="payment_on_past_due_support_child"style={{ backgroundColor: 'rgb(225, 243, 243)'}} />
                                    </td>
                                    <td>
                                    Payment on past-due support: $
                                    <input type="text" name="payment_on_past_due_support_family"style={{ backgroundColor: 'rgb(225, 243, 243)'}} />
                                    </td>
                                    <td>
                                    Payment on past-due support: $
                                    <input type="text" name="payment_on_past_due_support_spousal"style={{ backgroundColor: 'rgb(225, 243, 243)'}} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                   (5).  Wage withholding was
                                    <input type="checkbox" name="wage_withholding_ordered" /> ordered
                                    <input type="checkbox" name="wage_withholding_stayed" /> ordered but stayed until (date): 
                                    <input type="text" name="wage_withholding_date"style={{ backgroundColor: 'rgb(225, 243, 243)'}} />
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
                                2.
                            </td>
                            <td width="95%" valign="top">
                            Person required to pay child or family support (name): <input type="text"style={{ backgroundColor: 'rgb(225, 243, 243)'}} />

                            </td>
                            <td width="95%" valign="top">Relationship to child (specify): <input type="text"style={{ backgroundColor: 'rgb(225, 243, 243)'}} /></td>
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
                                3.
                            </td>
                            <td width="95%" valign="top">
                            Person or agency to receive child or family support payments (name):<input type="text"style={{ backgroundColor: 'rgb(225, 243, 243)'}} />

                            </td>
                            <td width="95%" valign="top">Relationship to child (if applicable): <input type="text"style={{ backgroundColor: 'rgb(225, 243, 243)'}} /></td>
                        </tr>
                        </tbody>
                        </table>
                        <br />
                        <div style={{border:'2px solid black', marginLeft:'10px', display:'flex', justifyContent:'center',alignItems:'center'}}> <b>TYPE OR PRINT IN INK</b> </div>
                        <br /><br />
                        <hr style={{ width: "100%" }} />
                <div
                    className="footer"
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div style={{ listStyle: "none" , fontSize:'10px' }}>
                        <div>Form Approved for Optional Use</div>
                        <div>Judicial Council of California</div>
                        <div> FL-191 [Rev. July 1, 2005]</div>
                    </div>
                    <div style={{ }}>
                        <div style={{ marginLeft:"5px" , fontWeight: "bold" }}>
                        CHILD SUPPORT CASE REGISTRY FORM
                        </div>
                    </div>
                    <div style={{ listStyle: "none", fontSize:'10px' }}>
                        <div> Family Code, § 4014</div>
                        <div> www.courtinfo.ca.gov</div>
                    </div>
                    <div style={{ listStyle: "none", fontWeight: "bold",fontSize:'15px' }}>
                    <li>Page 1 of 4</li>
                    </div>
                </div>
                <div><br /><br />
                <table style={{ width: "100%", border: "2px solid black", borderCollapse: "collapse" }}>
                    <tbody>
                        <tr>
                            <td style={{ border: "2px solid black", borderCollapse: "collapse" }}>
                                <div style={{ marginLeft: "1.2rem" }}>
                                    <label htmlFor="name">PETITIONER/PLAINTIFF:</label>
                                    <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginTop: "5px",width:"77%" }} type="text" id="name" />
                                </div>
                                <div style={{ marginLeft: "1.2rem" }}>
                                    <label htmlFor="street">RESPONDENT/DEFENDANT:</label>
                                    <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginTop: "5px",width:"72.6%" }} type="text" id="street" />
                                </div>
                                <div style={{ marginLeft: "1.2rem" }}>
                                    <label htmlFor="street">OTHER PARENT:</label>
                                    <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginTop: "5px",width:"84%" }} type="text" id="street" />
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
      <h4>4. The child support order is for the following children:</h4>
      <table style={{ width: '100%', borderCollapse: 'collapse',marginLeft:'20px' }}>
        <thead>
          <tr>
            <th>Child's name</th>
            <th>Date of birth</th>
            <th>Social security number</th>
          </tr>
        </thead>
        <tbody >
          <tr  style={{marginLeft:'0'}}>
            <td> a. <input type="text" name="child_name_a"style={{ backgroundColor: 'rgb(225, 243, 243)',width:'450px'}} /></td>
            <td>  <input type="text" name="child_dob_a" style={{ backgroundColor: 'rgb(225, 243, 243)'}}/></td>
            <td><input type="text" name="child_ssn_a"style={{ backgroundColor: 'rgb(225, 243, 243)'}} /></td>
          </tr>
          <tr>
            <td> b. <input type="text" name="child_name_b"style={{ backgroundColor: 'rgb(225, 243, 243)',width:'450px'}} /></td>
            <td><input type="text" name="child_dob_b" style={{ backgroundColor: 'rgb(225, 243, 243)'}}/></td>
            <td><input type="text" name="child_ssn_b" style={{ backgroundColor: 'rgb(225, 243, 243)'}}/></td>
          </tr>
          <tr>
            <td> c. <input type="text" name="child_name_c" style={{ backgroundColor: 'rgb(225, 243, 243)',width:'450px'}}/></td>
            <td><input type="text" name="child_dob_c" style={{ backgroundColor: 'rgb(225, 243, 243)'}}/></td>
            <td><input type="text" name="child_ssn_c" style={{ backgroundColor: 'rgb(225, 243, 243)'}}/></td>
          </tr>
        </tbody>
      </table>
      <label>
        <input type="checkbox" name="additional_children"style={{margin:'8px'}} />
        Additional children are listed on a page attached to this document.
      </label>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px',marginLeft:'30px' }}>
        <div>
      <h5><b><u>5. Father's name:</u></b></h5>
      <form>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <label><b>a.</b> Date of birth:</label>
          <input type="text" name="father_dob" style={{ backgroundColor: 'rgb(225, 243, 243)', margin: '4px', width: '200px' }} />
        </div>
        <br />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <label><b>b.</b> Social security number:</label>
          <input type="text" name="father_ssn" style={{ backgroundColor: 'rgb(225, 243, 243)', margin: '4px', width: '200px' }} />
        </div>
        <br />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <label><b>c.</b> Street address:</label>
          <input type="text" name="father_street_address" style={{ backgroundColor: 'rgb(225, 243, 243)', margin: '4px', width: '200px' }} />
        </div>
        <br />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <label>City, state, zip code:</label>
          <input type="text" name="father_city_state_zip" style={{ backgroundColor: 'rgb(225, 243, 243)', margin: '4px', width: '200px' }} />
        </div>
        <br />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <label><b>d.</b> Mailing address:</label>
          <input type="text" name="father_mailing_address" style={{ backgroundColor: 'rgb(225, 243, 243)', margin: '4px', width: '200px' }} />
        </div>
        <br />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <label>City, state, zip code:</label>
          <input type="text" name="father_mailing_city_state_zip" style={{ backgroundColor: 'rgb(225, 243, 243)', margin: '4px', width: '200px' }} />
        </div>
        <br />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <label><b>e.</b> Driver's license number:</label>
          <input type="text" name="father_driver_license" style={{ backgroundColor: 'rgb(225, 243, 243)', margin: '4px', width: '200px' }} />
        </div>
        <br />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <label>State:</label>
          <input type="text" name="father_driver_license_state" style={{ backgroundColor: 'rgb(225, 243, 243)', margin: '4px', width: '200px' }} />
        </div>
        <br />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <label><b>f.</b> Telephone number:</label>
          <input type="text" name="father_phone" style={{ backgroundColor: 'rgb(225, 243, 243)', margin: '4px', width: '200px' }} />
        </div>
        <br />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <label><b>g.</b> Employment status:</label>
          <div>
            <input type="checkbox" name="father_employed" style={{ margin: '8px' }} /> Employed
            <input type="checkbox" name="father_not_employed" style={{ margin: '8px' }} /> Not employed
            <input type="checkbox" name="father_self_employed" style={{ margin: '8px' }} /> Self-employed
          </div>
        </div>
        <br />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <label>Employer's name:</label>
          <input type="text" name="father_employer_name" style={{ backgroundColor: 'rgb(225, 243, 243)', margin: '4px', width: '200px' }} />
        </div>
        <br />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <label>Street address:</label>
          <input type="text" name="father_employer_street" style={{ backgroundColor: 'rgb(225, 243, 243)', margin: '4px', width: '200px' }} />
        </div>
        <br />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <label>City, state, zip code:</label>
          <input type="text" name="father_employer_city_state_zip" style={{ backgroundColor: 'rgb(225, 243, 243)', margin: '4px', width: '200px' }} />
        </div>
        <br />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <label>Telephone number:</label>
          <input type="text" name="father_employer_phone" style={{ backgroundColor: 'rgb(225, 243, 243)', margin: '4px', width: '200px' }} />
        </div>
      </form>
    </div>

        <div>
          <h5><b><u>6. Mother's name:</u></b></h5>
          <form>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <label><b>a.</b> Date of birth:</label>
          <input type="text" name="father_dob" style={{ backgroundColor: 'rgb(225, 243, 243)', margin: '4px', width: '200px' }} />
        </div>
        <br />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <label><b>b.</b> Social security number:</label>
          <input type="text" name="father_ssn" style={{ backgroundColor: 'rgb(225, 243, 243)', margin: '4px', width: '200px' }} />
        </div>
        <br />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <label><b>c.</b> Street address:</label>
          <input type="text" name="father_street_address" style={{ backgroundColor: 'rgb(225, 243, 243)', margin: '4px', width: '200px' }} />
        </div>
        <br />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <label>City, state, zip code:</label>
          <input type="text" name="father_city_state_zip" style={{ backgroundColor: 'rgb(225, 243, 243)', margin: '4px', width: '200px' }} />
        </div>
        <br />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <label><b>d.</b> Mailing address:</label>
          <input type="text" name="father_mailing_address" style={{ backgroundColor: 'rgb(225, 243, 243)', margin: '4px', width: '200px' }} />
        </div>
        <br />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <label>City, state, zip code:</label>
          <input type="text" name="father_mailing_city_state_zip" style={{ backgroundColor: 'rgb(225, 243, 243)', margin: '4px', width: '200px' }} />
        </div>
        <br />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <label><b>e.</b> Driver's license number:</label>
          <input type="text" name="father_driver_license" style={{ backgroundColor: 'rgb(225, 243, 243)', margin: '4px', width: '200px' }} />
        </div>
        <br />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <label>State:</label>
          <input type="text" name="father_driver_license_state" style={{ backgroundColor: 'rgb(225, 243, 243)', margin: '4px', width: '200px' }} />
        </div>
        <br />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <label><b>f.</b> Telephone number:</label>
          <input type="text" name="father_phone" style={{ backgroundColor: 'rgb(225, 243, 243)', margin: '4px', width: '200px' }} />
        </div>
        <br />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <label><b>g.</b> Employment status:</label>
          <div>
            <input type="checkbox" name="father_employed" style={{ margin: '8px' }} /> Employed
            <input type="checkbox" name="father_not_employed" style={{ margin: '8px' }} /> Not employed
            <input type="checkbox" name="father_self_employed" style={{ margin: '8px' }} /> Self-employed
          </div>
        </div>
        <br />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <label>Employer's name:</label>
          <input type="text" name="father_employer_name" style={{ backgroundColor: 'rgb(225, 243, 243)', margin: '4px', width: '200px' }} />
        </div>
        <br />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <label>Street address:</label>
          <input type="text" name="father_employer_street" style={{ backgroundColor: 'rgb(225, 243, 243)', margin: '4px', width: '200px' }} />
        </div>
        <br />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <label>City, state, zip code:</label>
          <input type="text" name="father_employer_city_state_zip" style={{ backgroundColor: 'rgb(225, 243, 243)', margin: '4px', width: '200px' }} />
        </div>
        <br />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <label>Telephone number:</label>
          <input type="text" name="father_employer_phone" style={{ backgroundColor: 'rgb(225, 243, 243)', margin: '4px', width: '200px' }} />
        </div>
      </form>
        </div>
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
                                7.
                            </td>
                            <td width="95%" valign="top">
                            <input type="checkbox"style={{margin:'8px'}}/>
                            A restraining order, protective order, or nondisclosure order due to domestic violence is in effect.

                            </td>
                            
                        </tr>
                        </tbody>
                        </table>
      <div style={{ marginTop: '20px',marginLeft:'30px' }}>
        <div>
          <label>
            <b>a.</b> The order protects:
            <input type="checkbox" name="protect_father"style={{margin:'8px'}} /> Father
            <input type="checkbox" name="protect_mother"style={{margin:'8px'}} /> Mother
            <input type="checkbox" name="protect_children"style={{margin:'8px'}} /> Children
          </label>
        </div>
        <div style={{ marginTop: '10px' }}>
          <label>
           <b> b.</b> From:
            <input type="checkbox" name="from_father" style={{margin:'8px'}}/> Father
            <input type="checkbox" name="from_mother" style={{margin:'8px'}}/> Mother
          </label>
        </div>
        <div style={{ marginTop: '10px' }}>
          <label>
           <b> c.</b> The restraining order expires on (date):
            <input type="text" name="restraining_order_expiry" style={{ backgroundColor: 'rgb(225, 243, 243)',margin:'4px',width:'50%'}} />
          </label>
        </div>
      </div>
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
                </div><br />
              
                <hr style={{ width: "100%" }} />
                <div
                    className="footer"
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div style={{ listStyle: "none" , fontSize:'10px' }}>
                        <div>Form Approved for Optional Use</div>
                        <div>Judicial Council of California</div>
                        <div> FL-191 [Rev. July 1, 2005]</div>
                    </div>
                    <div style={{ }}>
                        <div style={{ marginLeft:"5px" , fontWeight: "bold" }}>
                        CHILD SUPPORT CASE REGISTRY FORM
                        </div>
                    </div>
                    <div style={{ listStyle: "none", fontSize:'10px' }}>
                        <div>Family Code, § 4014</div>
                        <div> www.courtinfo.ca.gov</div>
                    </div>
                    <div style={{ listStyle: "none", fontWeight: "bold",fontSize:'15px' }}>
                    <li>Page 2 of 4</li>
                    </div>
                </div>
                <br/>
                <br/>
                <h1 style={{display:'flex', justifyContent:'center', alignItems:'center'}}><b>INFORMATION SHEET FOR CHILD SUPPORT CASE REGISTRY FORM</b></h1>
                <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}><b>(Do NOT deliver this Information Sheet to the court clerk.)</b></div><br />
                <div>Please follow these instructions to complete the Child Support Case 
                    Registry Form (form FL-191) if you do not have an attorney to represent you. 
                    Your attorney, if you have one, should complete this form.</div>
                <div><p>Both parents must complete a Child Support Case Registry Form. 
                    The information on this form will be included in a national database that, 
                    among other things, is used to locate absent parents. When you file a court 
                    order, you must deliver a completed form to the court clerk along with your 
                    court order. If you did not file a court order, you must deliver a completed 
                    form to the court clerk WITHIN 10 DAYS of the date you received a copy of your 
                    court order. If any of the information you provide on this form changes, you 
                    must complete a new form and deliver it to the court clerk within 10 days of the change. 
                    The address of the court clerk is the same as the one shown for the superior court on your order. 
                    This form is confidential and will not be filed in the court file. It will be maintained in a 
                    confidential file with the State of California</p></div><br />
                <div><h2><b>INSTRUCTIONS FOR COMPLETING THE CHILD SUPPORT CASE REGISTRY FORM (TYPE OR PRINT IN INK):</b></h2></div><br />
                <div>If the top section of the form has already been filled out, skip down to number 1 below. If the top section of the 
                    form is blank, you must provide this information.</div><br />
                <div><u>Page 1, first box, top of form, left side: </u> Print your name, address, telephone number, 
                fax number, and e-mail address, if any, in this box. Attorneys must include their State Bar identification numbers.</div>
                <div><u>Page 1, second box, top of form, left side: </u>Print the name of the county and the court’s address in this box. 
                Use the same address for the court that is on the court order you are filing or have received.</div>
                <div><u>Page 1, third box, top of form, left side: </u> Print the names of the petitioner/plaintiff, 
                respondent/defendant, and other parent in this box. Use the same names listed on the court order you are filing or have received.</div>
                <div><u>Page 1, fourth box, top of form, left side: </u> Check the box indicating whether you are the mother or the father. 
                If you are the attorney for the mother, check the box for mother. If you are the attorney for the father, check the box for father. 
                Also, if this is the first time you have filled out this form, check the box by "First form completed.” If you have filled out 
                form FL-191 before, and you are changing any of the information, check the box by “Change to previous information.”</div>
                <div><u>Page 1, first box, right side: </u> Leave this box blank for the court’s use in stamping the date of receipt.</div>
                <div><u>Page 1, second box, right side: </u> Print the court case number in this box. This number is also shown on the court papers.</div>
                <div><u><b>Instructions for numbered paragraphs:</b></u></div>
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
                        </tr>
                        </tbody>
                        </table>
                        <div style={{ display: 'flex', marginBottom: 10, marginLeft: 43, fontSize: 16 }}>
                        <div style={{ width: '3%', verticalAlign: 'top' }}>
                            a.
                        </div>
                        <div style={{ marginTop: 2, fontSize: 16 }}>
                        Enter the date the court order was filed. This date is shown in the 
                        “COURT PERSONNEL: STAMP DATE RECEIVED HERE" box on page 1 at the top 
                        of the order on the right side. If the order has not been filed, 
                        leave this item blank for the court clerk to fill in.
                        </div>
                        </div>
                        <div style={{ display: 'flex', marginBottom: 10, marginLeft: 43, fontSize: 16 }}>
                        <div style={{ width: '3%', verticalAlign: 'top' }}>
                            b.
                        </div>
                        <div style={{ marginTop: 2, fontSize: 16 }}>
                        . If the court order you filed or received is the first child or family 
                        support order for this case, check the box by “Initial child support or 
                        family support order." If this is a change to your order, check the box by “Modification.” 
                        </div>
                        </div>
                        <div style={{ display: 'flex', marginBottom: 10, marginLeft: 43, fontSize: 16 }}>
                        <div style={{ width: '3%', verticalAlign: 'top' }}>
                            c.
                        </div>
                        <div style={{ marginTop: 2, fontSize: 16 }}>
                        Information regarding the amount and type of support 
                        ordered and wage withholding is on the court order you are filing or have received. 
                        </div>
                        </div>
                        <div style={{ display: 'flex', marginBottom: 10, marginLeft: 43, fontSize: 16 }}>
                        <div style={{ width: '5%', verticalAlign: 'top' }}>
                            (1).
                        </div>
                        <div style={{ marginTop: 2, fontSize: 16 }}>
                        If your order provides for any type of current support, check all 
                        boxes that describe that support. For example, if your order provides for both 
                        child and spousal support, check both of those boxes. If there is an amount, 
                        put it in the blank provided. If the order says the amount is reserved, check 
                        the “Reserved order” box. If the order says the amount is zero, check the “$0 
                        (zero) order" box. Do not include child care, special needs, uninsured medical 
                        expenses, or travel for visitation here These amounts will go in (2). Do NOT 
                        complete the Child Support Case Registry form if you receive spousal support only.
                        </div>
                        </div>
                        <div style={{ display: 'flex', marginBottom: 10, marginLeft: 43, fontSize: 16 }}>
                        <div style={{ width: '5%', verticalAlign: 'top' }}>
                            (2).
                        </div>
                        <div style={{ marginTop: 2, fontSize: 16 }}>
                        If your order provides for a set monthly amount to be paid as additional 
                        support for such needs as child care, special needs, uninsured medical expenses 
                        or travel for visitation check the box in Item 2 and enter the monthly amount. 
                        For example, if your order provides for base child support and in addition the 
                        paying parent is required to pay $300 per month, check the box in item 2 
                        underneath the "Child Support" column and enter $300. Do NOT check this box 
                        if your order provides only for a payment of a percentage, such as 50% of the childcare.
                        </div>
                        </div><br />
                        <hr style={{ width: "100%" }} />
                <div
                    className="footer"
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div style={{ listStyle: "none" , fontSize:'10px' }}>
                        <div>Form Approved for Optional Use</div>
                        <div>Judicial Council of California</div>
                        <div> FL-191 [Rev. July 1, 2005]</div>
                    </div>
                    <div style={{ }}>
                        <div style={{ marginLeft:"5px" , fontWeight: "bold" }}>
                        CHILD SUPPORT CASE REGISTRY FORM
                        </div>
                    </div>
                    <div style={{ listStyle: "none", fontSize:'10px' }}>
                        <div>Family Code, § 4014</div>
                        <div> www.courtinfo.ca.gov</div>
                    </div>
                    <div style={{ listStyle: "none", fontWeight: "bold",fontSize:'15px' }}>
                    <li>Page 3 of 4</li>
                    </div>
                </div><br /><br />
                        <div style={{ display: 'flex', marginBottom: 10, marginLeft: 43, fontSize: 16 }}>
                        <div style={{ width: '5%', verticalAlign: 'top' }}>
                            (3).
                        </div>
                        <div style={{ marginTop: 2, fontSize: 16 }}>
                        If your order determined the amount of past due support, 
                        check the box in Item 3 that states the type of past due support and enter the amount. 
                        For example, if the court determined that there was $5000 in past due child support and 
                        $1000 in past due spousal support, you would check the box in item 3 in the "Child Support" 
                        column and enter $5000 and you would also check the box in item 3 in the "Spousal Support" 
                        column and enter $1000.
                        </div>
                        </div>
                        <div style={{ display: 'flex', marginBottom: 10, marginLeft: 43, fontSize: 16 }}>
                        <div style={{ width: '5%', verticalAlign: 'top' }}>
                            (4).
                        </div>
                        <div style={{ marginTop: 2, fontSize: 16 }}>
                        If your order provides for a specific dollar amount to be paid towards any past 
                        due support, check the box in Item 4 that states the type of past due support and enter 
                        the amount. For example, the court ordered $350 per month to be paid on the past due child 
                        support, you would check the box in Item 4 in the "Child Support" column and enter $350.
                        </div>
                        </div>
                        <div style={{ display: 'flex', marginBottom: 10, marginLeft: 43, fontSize: 16 }}>
                        <div style={{ width: '5%', verticalAlign: 'top' }}>
                            (5).
                        </div>
                        <div style={{ marginTop: 2, fontSize: 16 }}>
                        Check the "ordered" box if wage withholding was ordered with no conditions. 
                        Check the box "ordered but stayed until" if wage withholding was ordered but is 
                        not to be deducted until a later date. If the court delayed the effective date of 
                        the wage withholding, enter the specific date. Check only one box in this item.
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
                        </tr>
                        </tbody>
                        </table>
                        <div style={{ display: 'flex', marginBottom: 10, marginLeft: 43, fontSize: 16 }}>
                        <div style={{ width: '3%', verticalAlign: 'top' }}>
                            a.
                        </div>
                        <div style={{ marginTop: 2, fontSize: 16 }}>
                        Write the name of the person who is supposed to pay child or family support.
                        </div>
                        </div>
                        <div style={{ display: 'flex', marginBottom: 10, marginLeft: 43, fontSize: 16 }}>
                        <div style={{ width: '3%', verticalAlign: 'top' }}>
                            b.
                        </div>
                        <div style={{ marginTop: 2, fontSize: 16 }}>
                        Write the relationship of that person to the child.
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
                                3.
                            </td>
                        </tr>
                        </tbody>
                        </table>
                        <div style={{ display: 'flex', marginBottom: 10, marginLeft: 43, fontSize: 16 }}>
                        <div style={{ width: '3%', verticalAlign: 'top' }}>
                            a.
                        </div>
                        <div style={{ marginTop: 2, fontSize: 16 }}>
                        Write the name of the person or agency supposed to receive child or family support payments.
                        </div>
                        </div>
                        <div style={{ display: 'flex', marginBottom: 10, marginLeft: 43, fontSize: 16 }}>
                        <div style={{ width: '3%', verticalAlign: 'top' }}>
                            b.
                        </div>
                        <div style={{ marginTop: 2, fontSize: 16 }}>
                        Write the relationship of that person to the child.
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
                                4.
                            </td>
                            <td width="95%" valign="top">
                            List the full name, date of birth, and social security number for each child 
                        included in the support order. If there are more than five children included in 
                        the support order, check the box below item 4e and list the remaining children 
                        with dates of birth and social security numbers on another sheet of paper. Attach 
                        the other sheet to this form.
                            </td>
                        </tr>
                        </tbody>
                        </table>
                        <div>The local child support agency is required, under section 466(a)(13) of the Social Security Act, 
                            to place in the records pertaining to child support the social security number of any individual 
                            who is subject to a divorce decree, support order, or paternity determination or acknowledgment. 
                            This information is mandatory and will be kept on file at the local child support agency.</div>
                        <div><u>Top of page 2, box on left side: </u>Print the names of the petitioner/plaintiff, respondent/defendant, 
                        and other parent in this box. Use the same names listed on page 1.</div>
                        <div><u>Top of page 2, box on right side: </u>Print your court case number in this box. Use the same case number 
                        as on page 1, second box, right side.</div>
                        <div>You are required to complete information about yourself. If you know information about the other person, 
                            you may also fill in what you know about him or her.</div>
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
                            If you are the father in this case, 
                            list your full name in this space. See instructions for a–g under item 6 below.
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
                                6.
                            </td>
                            <td width="95%" valign="top">
                            If you are the mother in this case, list your full name in this space.
                            </td>
                        </tr>
                        </tbody>
                        </table>
                        <div style={{ display: "flex", marginBottom: 5, marginLeft: 43, fontSize: 16 }}>
                    <div style={{ width: "3%", verticalAlign: "top" }}>
                        a.
                    </div>
                    <div style={{ width: "95%", verticalAlign: "top" }} >
                    List your date of birth.
                    </div>
                </div>
                        <div style={{ display: "flex", marginBottom: 5, marginLeft: 43, fontSize: 16 }}>
                    <div style={{ width: "3%", verticalAlign: "top" }}>
                        b.
                    </div>
                    <div style={{ width: "95%", verticalAlign: "top" }} >
                    Write your social security number.
                    </div>
                </div>
                        <div style={{ display: "flex", marginBottom: 5, marginLeft: 43, fontSize: 16 }}>
                    <div style={{ width: "3%", verticalAlign: "top" }}>
                        c.
                    </div>
                    <div style={{ width: "95%", verticalAlign: "top" }} >
                    List the street address, city, state, and zip code where you live.
                    </div>
                </div>
                        <div style={{ display: "flex", marginBottom: 5, marginLeft: 43, fontSize: 16 }}>
                    <div style={{ width: "3%", verticalAlign: "top" }}>
                        d.
                    </div>
                    <div style={{ width: "95%", verticalAlign: "top" }} >
                    List the street address, city, state, and zip code where you want your mail sent, if different from the address where you live.
                    </div>
                </div>
                        <div style={{ display: "flex", marginBottom: 5, marginLeft: 43, fontSize: 16 }}>
                    <div style={{ width: "3%", verticalAlign: "top" }}>
                        e.
                    </div>
                    <div style={{ width: "95%", verticalAlign: "top" }} >
                    Write your driver's license number and the state where it was issued.
                    </div>
                </div>
                        <div style={{ display: "flex", marginBottom: 5, marginLeft: 43, fontSize: 16 }}>
                    <div style={{ width: "3%", verticalAlign: "top" }}>
                        f.
                    </div>
                    <div style={{ width: "95%", verticalAlign: "top" }} >
                    List the telephone number where you live.
                    </div>
                </div>
                        <div style={{ display: "flex", marginBottom: 5, marginLeft: 43, fontSize: 16 }}>
                    <div style={{ width: "3%", verticalAlign: "top" }}>
                        g.
                    </div>
                    <div style={{ width: "95%", verticalAlign: "top" }} >
                    Indicate whether you are employed, not employed, self-employed, or by 
                    checking the appropriate box. If you are employed, write the name, street address, city, state, zip code, and telephone number where you work.
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
                                7.
                            </td>
                            <td width="95%" valign="top">
                            If there is a restraining order, protective order, or nondisclosure order, check this box.
                            </td>
                        </tr>
                        </tbody>
                        </table>
                        <div style={{ display: "flex", marginBottom: 5, marginLeft: 43, fontSize: 16 }}>
                    <div style={{ width: "3%", verticalAlign: "top" }}>
                        a.
                    </div>
                    <div style={{ width: "95%", verticalAlign: "top" }} >
                    Check the box beside each person who is protected by the restraining order.
                    </div>
                </div>
                <div style={{ display: "flex", marginBottom: 5, marginLeft: 43, fontSize: 16 }}>
                    <div style={{ width: "3%", verticalAlign: "top" }}>
                        b.
                    </div>
                    <div style={{ width: "95%", verticalAlign: "top" }} >
                    Check the box beside the parent who is restrained.
                    </div>
                </div>
                <div style={{ display: "flex", marginBottom: 5, marginLeft: 43, fontSize: 16 }}>
                    <div style={{ width: "3%", verticalAlign: "top" }}>
                        c.
                    </div>
                    <div style={{ width: "95%", verticalAlign: "top" }} >
                    Write the date the restraining order expires. See the restraining order, protective order, or nondisclosure order for this date.
                    </div>
                </div>
                <div>If you are in fear of domestic violence, you may want to ask the court for a restraining order, protective order, or nondisclosure order.</div>
                <div>You must type or print your name, fill in the date, and sign the Child Support Case Registry Form under penalty of perjury. When you 
                    sign under penalty of perjury, you are stating that the information you have provided is true and correct.</div>
                <br /><br />
                <hr style={{ width: "100%" }} />
                <div
                    className="footer"
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div style={{ listStyle: "none" , fontSize:'10px' }}>
                        <div>Form Approved for Optional Use</div>
                        <div>Judicial Council of California</div>
                        <div> FL-191 [Rev. July 1, 2005]</div>
                    </div>
                    <div style={{ }}>
                        <div style={{ marginLeft:"5px" , fontWeight: "bold" }}>
                        CHILD SUPPORT CASE REGISTRY FORM
                        </div>
                    </div>
                    <div style={{ listStyle: "none", fontSize:'10px' }}>
                        <div>Family Code, § 4014</div>
                        <div> www.courtinfo.ca.gov</div>
                    </div>
                    <div style={{ listStyle: "none", fontWeight: "bold",fontSize:'15px' }}>
                    <li>Page 4 of 4</li>
                    </div>
                </div><br />
                </div>
    )
};









               