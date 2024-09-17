import React from 'react'
import SUPFl165 from "./SU165";
export default function () {
    const [details, setDetails] = React.useState<SUPFl165>(
        {} as SUPFl165
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
            
            <h3 style={{ display: 'flex', marginBottom: '0',justifyItems:'end' }}>FL-165 </h3>
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
                        <td style={{ textAlign: "center", top: 0, marginBottom: 10, borderCollapse: "collapse" }}
                            className='relative w-[30%]'
                        >
                            <p className='absolute' style={{
                                top: 10,
                                left: "21%",
                                fontSize: "10px",
                                fontWeight: "bold"
                            }}>
                                FOR COURT USE ONLY
                            </p>
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
                                <label htmlFor="name" style={{ fontSize: "10px" }}>PETITIONER:</label>
                                <input size={86} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px 2px", height: "18px", width: "74.4%" }}
                                    type="text" id="name" />
                            </div>
                            <div className='flex justify-end items-center mt-1'>
                                <label htmlFor="street" style={{ fontSize: "10px" }}>RESPONDENT:</label>
                                <input size={85} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px 2px", height: "18px", width: "83%" }}
                                    type="text" id="street" />
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
                                <b>REQUEST TO ENTER DEFAULT</b>
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
                <br />
                <div style={{ padding: '32px' }}>
      <ol style={{ listStyleType: 'decimal', marginLeft: '16px' }}>
        <li style={{ marginBottom: '16px' }}>
          <p>Please enter the default of the respondent who has failed to respond to the petition.</p>
        </li>
        <li style={{ marginBottom: '16px' }}>
          <p style={{ fontWeight: 'bold' }}>A completed Income and Expense Declaration (form FL-150) or Financial Statement (Simplified) (form FL-155)</p>
          <div style={{ marginLeft: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
              <input type="checkbox" id="fl150-attached" />
              <label htmlFor="fl150-attached" style={{ marginLeft: '8px' }}>is attached</label>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
              <input type="checkbox" id="fl150-not-attached" />
              <label htmlFor="fl150-not-attached" style={{ marginLeft: '8px' }}>is not attached</label>
            </div>
          </div>
          <p style={{ fontWeight: 'bold' }}>A completed Property Declaration (form FL-160)</p>
          <div style={{ marginLeft: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
              <input type="checkbox" id="fl160-attached" />
              <label htmlFor="fl160-attached" style={{ marginLeft: '8px' }}>is attached</label>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
              <input type="checkbox" id="fl160-not-attached" />
              <label htmlFor="fl160-not-attached" style={{ marginLeft: '8px' }}>is not attached</label>
            </div>
          </div>
          <p>because (check at least one of the following):</p>
          <div style={{ marginLeft: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
             (a) <input type="checkbox" id="no-changes" />
              <label htmlFor="no-changes" style={{ marginLeft: '8px' }}>there have been no changes since the previous filing.</label>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
             (b) <input type="checkbox" id="written-agreement" />
              <label htmlFor="written-agreement" style={{ marginLeft: '8px' }}>the issues subject to disposition by the court in this proceeding are the subject of a written agreement.</label>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
             (c) <input type="checkbox" id="no-issues-support" />
              <label htmlFor="no-issues-support" style={{ marginLeft: '8px' }}>there are no issues of child, spousal, or partner support or attorney fees and costs subject to determination by the court.</label>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
             (d) <input type="checkbox" id="no-money" />
              <label htmlFor="no-money" style={{ marginLeft: '8px' }}>the petition does not request money, property, costs, or attorney fees. (Fam. Code, § 2330.5.)</label>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
             (e) <input type="checkbox" id="no-division" />
              <label htmlFor="no-division" style={{ marginLeft: '8px' }}>there are no issues of division of community property.</label>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
             (f) <input type="checkbox" id="establish-parental" />
              <label htmlFor="establish-parental" style={{ marginLeft: '8px' }}>this is an action to establish parental relationship.</label>
            </div>
          </div>
          <div style={{ marginTop: '16px' }}>
            <p>Date: <input type="text" style={{backgroundColor: 'rgb(225, 243, 243)', borderBottom: '1px solid black', width: '160px', marginLeft: '8px' }} /></p>
            <div style={{display:'flex',width:'100%'}}>
            <div style={{width: '50%'}}><p style={{ marginTop: '16px' }}><input type="text" style={{backgroundColor: 'rgb(225, 243, 243)', borderBottom: '1px solid black', width: '50%' }} placeholder="TYPE OR PRINT NAME" /></p>
            </div>
            <div style={{width: '50%'}}><p style={{ marginTop: '16px' }}><input type="text" style={{backgroundColor: 'rgb(225, 243, 243)', borderBottom: '1px solid black', width: '50%' }} placeholder="SIGNATURE OF DECLARANT" /></p></div>
          </div></div>
        </li>
        <li style={{ marginBottom: '16px' }}>
          <p style={{ fontWeight: 'bold' }}>Declaration</p>
          <div style={{ marginLeft: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
             (a) <input type="checkbox" id="no-mailing-required" />
              <label htmlFor="no-mailing-required" style={{ marginLeft: '8px' }}>No mailing is required because service was by publication or posting and the address of the respondent remains unknown.</label>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
             (b) <input type="checkbox" id="copy-request" />
              <label htmlFor="copy-request" style={{ marginLeft: '8px' }}>A copy of this Request to Enter Default, including any attachments and an envelope with sufficient postage, was provided to the court clerk, with the envelope addressed as follows (address of the respondent’s attorney or, if none, the respondent’s last known address):</label>
            </div>
            <textarea style={{ border: '1px solid black', width: '100%', height: '96px', marginTop: '8px', backgroundColor: 'rgb(225, 243, 243)' }}></textarea>
          </div>
          <div style={{ marginTop: '16px' }}>
            <p>I declare under penalty of perjury under the laws of the State of California that the foregoing is true and correct.</p>
            <p style={{ marginTop: '16px' }}>Date: <input type="text" style={{backgroundColor: 'rgb(225, 243, 243)', borderBottom: '1px solid black', width: '160px', marginLeft: '8px' }} /></p>
            
          </div>
          
        </li>
      </ol>
      <div style={{display:'flex',width:'100%'}}>
            <div style={{width: '50%'}}><p style={{ marginTop: '16px' }}><input type="text" style={{backgroundColor: 'rgb(225, 243, 243)', borderBottom: '1px solid black', width: '50%' }} placeholder="TYPE OR PRINT NAME" /></p>
            </div>
            <div style={{width: '50%'}}><p style={{ marginTop: '16px' }}><input type="text" style={{backgroundColor: 'rgb(225, 243, 243)', borderBottom: '1px solid black', width: '50%' }} placeholder="SIGNATURE OF DECLARANT" /></p></div>
          </div>
      <div style={{ border: '1px solid black', padding: '16px', marginTop: '16px' }}>
        <p style={{ fontWeight: 'bold' }}>FOR COURT USE ONLY</p>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', marginTop: '16px' }}>
          <input type="checkbox" id="request-mailed" />
          <label htmlFor="request-mailed" style={{ marginLeft: '8px' }}>Request to Enter Default mailed to the respondent or the respondent’s attorney on (date):</label>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
          <input type="checkbox" id="default-entered" />
          <label htmlFor="default-entered" style={{ marginLeft: '8px' }}>Default entered as requested on (date):</label>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
          <input type="checkbox" id="default-not-entered" />
          <label htmlFor="default-not-entered" style={{ marginLeft: '8px' }}>Default not entered. Reason:</label>
        </div>
        <p style={{ marginTop: '16px' }}>Clerk, by <input type="text" style={{ borderBottom: '1px solid black', width: '256px', marginLeft: '8px' }} />, Deputy</p>
      </div>
    </div><br />
                <br />
                                            <hr style={{ width: "100%" }} />
                <div
                    className="footer"
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div style={{ listStyle: "none" , fontSize:'10px' }}>
                        <div>Form Approved for Optional Use</div>
                        <div>Judicial Council of California</div>
                        <div> FL-165 [Rev. January 1, 2005]</div>
                    </div>
                    <div style={{ }}>
                        <div style={{ marginLeft:"5px" , fontWeight: "bold" }}>
                        REQUEST TO ENTER DEFAULT
                        <div><h3>(Family Law—Uniform Parentage)</h3></div> 
                        </div>

                    </div>
                    <div style={{ listStyle: "none", fontSize:'10px' }}>
                        <div>Code of Civil Procedure, §§ 585, 587; </div>
                        <div>Family Code § 2335.5 </div>
                        <div> www.courtinfo.ca.gov</div>
                    </div>
                    <div style={{ listStyle: "none", fontWeight: "bold",fontSize:'12px' }}>
                    <li>Page 1 of 2</li>
                    </div>
                </div>
                <div style={{ padding: '16px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
        <div style={{ width: '70%' }}>
          <p style={{ margin: '0' }}>CASE NAME (Last name, first name of each party):</p>
          <textarea style={{ width: '100%', height: '32px', backgroundColor: 'rgb(225, 243, 243)', border: '1px solid black' }}></textarea>
        </div>
        <div style={{ width: '25%' }}>
          <p style={{ margin: '0' }}>CASE NUMBER:</p>
          <textarea style={{ width: '100%', height: '32px', backgroundColor: 'rgb(225, 243, 243)', border: '1px solid black' }}></textarea>
        </div>
      </div>

      <ol style={{ marginLeft: '16px' }}>
        <li style={{ marginBottom: '16px' }}>
          <p style={{ fontWeight: 'bold' }}> 4. Memorandum of costs</p>
          <div style={{ marginLeft: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
             a. <input type="checkbox" id="costs-waived" />
              <label htmlFor="costs-waived" style={{ marginLeft: '8px' }}>Costs and disbursements are waived.</label>
            </div>
            <p>b. Costs and disbursements are listed as follows:</p>
            <div style={{ marginLeft: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
              (1) <input type="checkbox" id="clerks-fees" />
                <label htmlFor="clerks-fees" style={{ marginLeft: '8px', display: 'flex', alignItems: 'center' }}>
                   Clerk’s fees
                  <span style={{ flexGrow: 1, borderBottom: '1px dotted black', margin: '0 8px' }}></span>.......................................................................................................
                  $<textarea style={{ backgroundColor: 'rgb(225, 243, 243)', width: '200px',height:'30px', marginLeft: '8px' }}></textarea>
                </label>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
              (2)  <input type="checkbox" id="process-server-fees" />
                <label htmlFor="process-server-fees" style={{ marginLeft: '8px', display: 'flex', alignItems: 'center' }}>
                   Process server’s fees
                  <span style={{ flexGrow: 1, borderBottom: '1px dotted black', margin: '0 8px' }}></span>.....................................................................................
                  $<textarea style={{ backgroundColor: 'rgb(225, 243, 243)', width: '200px',height:'30px', marginLeft: '8px' }}></textarea>
                </label>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
              (3) <input type="checkbox" id="other" />
                <label htmlFor="other" style={{ marginLeft: '8px', display: 'flex', alignItems: 'center' }}>
                   Other (specify):....................................................................................................
                  $<textarea style={{ backgroundColor: 'rgb(225, 243, 243)', width: '200px',height:'30px', marginLeft: '8px' }}></textarea>
                </label>
              </div>
              $<textarea style={{ width: '100%', height: '96px', backgroundColor: 'rgb(225, 243, 243)', marginTop: '8px' }}></textarea>
              <p style={{ marginTop: '8px', display: 'flex', alignItems: 'center' }}>
                TOTAL
                <span style={{ flexGrow: 1, borderBottom: '1px dotted black', margin: '0 8px' }}></span>
                $<textarea style={{ backgroundColor: 'rgb(225, 243, 243)', width: '200px',height:'30px', marginLeft: '8px' }}></textarea>
              </p>
            </div>
            <p style={{ marginTop: '16px' }}>
              c. I am the attorney, agent, or party who claims these costs. To the best of my knowledge and belief, the foregoing items of cost are correct and have been necessarily incurred in this cause or proceeding.
            </p>
          </div>
          <div style={{ marginTop: '16px' }}>
            <p>I declare under penalty of perjury under the laws of the State of California that the foregoing is true and correct.</p>
            <p style={{ marginTop: '16px' }}>Date: <input type="text" style={{backgroundColor: 'rgb(225, 243, 243)', borderBottom: '1px solid black', width: '160px', marginLeft: '8px' }} /></p>
            <div style={{display:'flex',width:'100%'}}>
            <div style={{width: '50%'}}><p style={{ marginTop: '16px' }}><input type="text" style={{backgroundColor: 'rgb(225, 243, 243)', borderBottom: '1px solid black', width: '50%' }} placeholder="TYPE OR PRINT NAME" /></p>
            </div>
            <div style={{width: '50%'}}><p style={{ marginTop: '16px' }}><input type="text" style={{backgroundColor: 'rgb(225, 243, 243)', borderBottom: '1px solid black', width: '50%' }} placeholder="SIGNATURE OF DECLARANT" /></p></div>
          </div></div>
        </li>
        <li style={{ marginBottom: '16px' }}>
          <p style={{ fontWeight: 'bold' }}>5. Declaration of nonmilitary status</p>
          <p>The respondent is not in the military service of the United States as defined in section 511 et seq. of the Servicemembers Civil Relief Act (50 U.S.C. Appen. § 501 et seq.), and is not entitled to the benefits of such act.</p>
          <div style={{ marginTop: '16px' }}>
            <p>I declare under penalty of perjury under the laws of the State of California that the foregoing is true and correct.</p>
            <p style={{ marginTop: '16px' }}>Date: <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)',borderBottom: '1px solid black', width: '160px', marginLeft: '8px' }} /></p>
            <div style={{display:'flex',width:'100%'}}>
            <div style={{width: '50%'}}><p style={{ marginTop: '16px' }}><input type="text" style={{backgroundColor: 'rgb(225, 243, 243)', borderBottom: '1px solid black', width: '50%' }} placeholder="TYPE OR PRINT NAME" /></p>
            </div>
            <div style={{width: '50%'}}><p style={{ marginTop: '16px' }}><input type="text" style={{backgroundColor: 'rgb(225, 243, 243)', borderBottom: '1px solid black', width: '50%' }} placeholder="SIGNATURE OF DECLARANT" /></p></div>
          </div></div>
        </li>
      </ol>
    </div>
                
                
                
                
                
                
                
                
                
                
                
                
                <br /><br />
                <hr style={{ width: "100%" }} />
                <div
                    className="footer"
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div style={{ listStyle: "none" , fontSize:'10px' }}>
                        <div>Form Approved for Optional Use</div>
                        <div>Judicial Council of California</div>
                        <div> FL-165 [Rev. January 1, 2005]</div>
                    </div>
                    <div style={{ }}>
                        <div style={{ marginLeft:"5px" , fontWeight: "bold" }}>
                        REQUEST TO ENTER DEFAULT
                        <div><h3>(Family Law—Uniform Parentage)</h3></div> 
                        </div>

                    </div>
                    <div style={{ listStyle: "none", fontSize:'10px' }}>
                        <div>Code of Civil Procedure, §§ 585, 587; </div>
                        <div>Family Code § 2335.5 </div>
                        <div> www.courtinfo.ca.gov</div>
                    </div>
                    <div style={{ listStyle: "none", fontWeight: "bold",fontSize:'12px' }}>
                    <li>Page 2 of 2</li>
                    </div>
                </div>
                </div> 
                

        
    )
};
