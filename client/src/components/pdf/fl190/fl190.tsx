import React from 'react'
import SUPFl190 from "./SU190";
export default function () {
    const [details, setDetails] = React.useState<SUPFl190>(
        {} as SUPFl190
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
            
            <h3 style={{ display: 'flex', marginBottom: '0',justifyContent:'end' }}>FL-190 </h3>
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
                                <label htmlFor="name" style={{ fontSize: "10px" }}>PLAINTIFF/PETITIONER:</label>
                                <input size={86} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px 2px", height: "18px", width: "74.4%" }}
                                    type="text" id="name" />
                            </div>
                            <div className='flex justify-end items-center mt-1'>
                                <label htmlFor="street" style={{ fontSize: "10px" }}>DEFENDENT/RESPONDENT:</label>
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
                <br />
                <div>You are notified that the following judgment was entered on (date):<input type="text"style={{ backgroundColor: 'rgb(225, 243, 243)', border: 'none', margin: '0px',width:'30%' }} /></div>
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
                                <input type="checkbox"style={{margin:'8px'}} />
                                Dissolution
                            </td>
                        </tr>
                        <tr>
                            <td width="3%" valign='top'>
                                2.
                            </td>
                            <input type="checkbox"style={{margin:'8px'}} />
                            <label>Dissolution—status only</label><br />
                        
                        </tr>
                        <tr>
                            <td width="3%" valign='top'>
                                3.
                            </td>
                            <td>
                            <input type="checkbox"style={{margin:'8px'}} />
                                    <label >
                                    Dissolution—reserving jurisdiction over termination of marital status or domestic partnership
                                    </label><br />
                                </td>
                        </tr>
                        <tr>
                            <td width="3%" valign='top'>
                                4.
                            </td>
                            <td>
                            <input type="checkbox"style={{margin:'8px'}} />
                                    <label >
                                    Legal separation
                                    </label><br />
                                </td>
                        </tr>
                        <tr>
                            <td width="3%" valign='top'>
                                5.
                            </td>
                            <td>
                            <input type="checkbox"style={{margin:'8px'}} />
                                    <label >
                                    Nullity
                                    </label><br />
                                </td>
                        </tr>
                        <tr>
                            <td width="3%" valign='top'>
                                6.
                            </td>
                            <td>
                            <input type="checkbox"style={{margin:'8px'}} />
                                    <label >
                                    Parent-child relationship
                                    </label><br />
                                </td>
                        </tr>
                        <tr>
                            <td width="3%" valign='top'>
                                7.
                            </td>
                            <td>
                            <input type="checkbox"style={{margin:'8px'}} />
                                    <label >
                                    Judgment on reserved issues
                                    </label><br />
                                </td>
                        </tr>
                        <tr>
                            <td width="3%" valign='top'>
                                8.
                            </td>
                            <td>
                            <input type="checkbox"style={{margin:'8px'}} />
                                    <label >
                                    Other (specify): <br />
                                    <input type="text"style={{ backgroundColor: 'rgb(225, 243, 243)', border: 'none', margin: '0px',width:'90%',height:'60px' }}
                                     />
                                    </label><br />
                                </td>
                        </tr>
                    </tbody>
                </table><br />
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr",marginBottom:"5px",marginLeft:'30px' }}>
                                    <div>
                                        <label htmlFor="telephone">Date:</label>
                                        <input 
                                        name={"TelephoneNo"}
                                        onChange={(e) => handleChange(e)}
                                        style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"60%" }} type="number" id="telephone" />
                                    </div>
                                    <div>
                                        <label htmlFor="fax" style={{display:"inline"}}>Clerk, by</label>
                                        <input
                                        name={"FaxNo"}
                                        onChange={(e) => handleChange(e)}
                                        style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"54%" }} type="text" id="fax" /> , Deputy
                                    </div>
                                </div><br />
                                <div style={{display:'flex', justifyContent:'center',alignItems:'center'}}> <b>—NOTICE TO ATTORNEY OF RECORD OR PARTY WITHOUT ATTORNEY—</b> </div>
                                        <div>Under the provisions of Code of Civil Procedure section 1952, if no appeal is filed the court may order the exhibits destroyed or otherwise disposed of after 60 days from the expiration of the appeal time.</div>
                                                            <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px' }}>

                                            <div style={{ border: '1px solid #000', padding: '10px', margin: '20px 0' }}>
                                                <p>STATEMENT IN THIS BOX APPLIES ONLY TO JUDGMENT OF DISSOLUTION</p>
                                                <label htmlFor="effective-date" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Effective date of termination of marital or domestic partnership status (specify):</label>
                                                <input type="text" id="effective-date" name="effective-date" style={{ width: '60%', padding: '4px', marginBottom: '8px',backgroundColor: "rgb(225, 243, 243)" }} />
                                                <p> <b>WARNING:</b> Neither party may remarry or enter into a new domestic partnership until the effective date of the termination of marital or domestic partnership status, as shown in this box.</p>
                                            </div>

                                            <div style={{ marginBottom: '20px' }}>
                                                <label htmlFor="certificate-of-mailing" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>CLERK'S CERTIFICATE OF MAILING</label>
                                                <p>I certify that I am not a party to this cause and that a true copy of the Notice of Entry of Judgment was mailed first class, postage fully prepaid, in a sealed envelope addressed as shown below, and that the notice was mailed</p>
                                                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr",marginBottom:"5px",marginLeft:'30px' }}>
                                                        <div>
                                                            <label htmlFor="telephone">at (place):</label>
                                                            <input 
                                                            name={"TelephoneNo"}
                                                            onChange={(e) => handleChange(e)}
                                                            style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"60%" }} type="text" id="telephone" />
                                                        </div>
                                                        <div>
                                                            <label htmlFor="fax" style={{display:"inline"}}>, California, on (date):</label>
                                                            <input
                                                            name={"FaxNo"}
                                                            onChange={(e) => handleChange(e)}
                                                            style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"54%" }} type="text" id="fax" />
                                                        </div>
                                                    </div></div>
                                                    <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr",marginBottom:"5px",marginLeft:'30px' }}>
                                                        <div>
                                                            <label htmlFor="telephone">Date:</label>
                                                            <input 
                                                            name={"TelephoneNo"}
                                                            onChange={(e) => handleChange(e)}
                                                            style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"60%" }} type="number" id="telephone" />
                                                        </div>
                                                        <div>
                                                            <label htmlFor="fax" style={{display:"inline"}}>Clerk, by</label>
                                                            <input
                                                            name={"FaxNo"}
                                                            onChange={(e) => handleChange(e)}
                                                            style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"54%" }} type="text" id="fax" /> , Deputy
                                                        </div>
                                                    </div><br />
                                            

                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <div style={{ width: '48%' }}>
                                                <label htmlFor="petitioner" style={{ display: 'block', marginBottom: '5px' }}>Name and address of petitioner or petitioner's attorney:</label>
                                                <textarea id="petitioner" name="petitioner" style={{ width: '100%', padding: '8px', boxSizing: 'border-box',backgroundColor: "rgb(225, 243, 243)" }}></textarea>
                                                </div>
                                                <div style={{ width: '48%' }}>
                                                <label htmlFor="respondent" style={{ display: 'block', marginBottom: '5px' }}>Name and address of respondent or respondent's attorney:</label>
                                                <textarea id="respondent" name="respondent" style={{ width: '100%', padding: '8px', boxSizing: 'border-box',backgroundColor: "rgb(225, 243, 243)" }}></textarea>
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
                        <div> FL-190 [Rev. January 1, 2005]</div>
                    </div>
                    <div style={{ }}>
                        <div style={{ marginLeft:"5px" , fontWeight: "bold" }}>
                        NOTICE OF ENTRY OF JUDGMENT
                        <div><h3>(Family Law—Uniform Parentage—Custody and Support)</h3></div> 
                        </div>

                    </div>
                    <div style={{ listStyle: "none", fontSize:'10px' }}>
                        <div>Family Code, §§ 2338, 7636,7637</div>
                        <div> www.courtinfo.ca.gov</div>
                    </div>
                    <div style={{ listStyle: "none", fontWeight: "bold",fontSize:'12px' }}>
                    <li>Page 1 of 1</li>
                    </div>
                </div>
                </div> 
                

        
    )
};
