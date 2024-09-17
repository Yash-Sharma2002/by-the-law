import React from 'react'
import SUPPETITION from "./SUPetition"
export default function Petition () {
    const [details, setDetails] = React.useState<SUPPETITION>(
        {} as SUPPETITION
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
            
            <h3 style={{ display: 'flex', marginBottom: '0' ,justifyContent:'end'}}>FL-100 </h3>
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
                            <div className='flex justify-end items-center w-full m-1'
                            >
                                
                                <div className='flex justify-end items-center' style={{ width: "inherit", marginRight: "-45px" }}>
                                    <label style={{ fontSize: "10px" }} htmlFor="telephone">STREET ADDRESS:</label>
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", height: "18px", margin: "0px 2px", }} className='w-[46.7%]' id="telephone" />
                                </div>
                                <div className='flex justify-end items-center' style={{ width: "inherit" }}>
                                    <label style={{ fontSize: "10px" }} htmlFor="telephone">CITY: <span style={{ fontStyle: "italic" }}>(Optional)</span>:</label>
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", height: "18px", margin: "0px 2px", }} className='w-[46.7%]' id="telephone" />
                                </div>
                            </div>
                            <div className='flex justify-end items-center w-full m-1'
                            >
                                
                                <div className='flex justify-end items-center' style={{ width: "inherit", marginRight: "-45px" }}>
                                    <label style={{ fontSize: "10px" }} htmlFor="telephone">STATE:</label>
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", height: "18px", margin: "0px 2px", }} className='w-[46.7%]' id="telephone" />
                                </div>
                                <div className='flex justify-end items-center' style={{ width: "inherit" }}>
                                    <label style={{ fontSize: "10px" }} htmlFor="telephone">ZIP CODE: <span style={{ fontStyle: "italic" }}>(Optional)</span>:</label>
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", height: "18px", margin: "0px 2px", }} className='w-[46.7%]' type="number" id="telephone" />
                                </div>
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
                            height: "100px",
                            borderRight: "2px solid black",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <div style={{ textAlign: "start", fontSize: "14px", letterSpacing: "1px" }}>
                                <b>PETITION FOR </b>
                                <label style={{marginLeft:'40px'}}>
                                        <input style={{marginLeft:'270px'}} type="checkbox"/> <b>AMENDED</b>
                                    </label>
                                <form >
                                    <label>
                                        <input style={{marginLeft:'40px'}} type="checkbox" /> <b>Dissolution (Divorce) of:
                                        </b>
                                    </label>
                                    <label>
                                        <input style={{marginLeft:'50px'}} type="checkbox"  /> Marriage
                                    </label>
                                    <label>
                                        <input style={{marginLeft:'50px'}} type="checkbox"  /> Domestic Partnership
                                    </label>
                                </form>
                                <form >
                                    <label>
                                        <input style={{marginLeft:'40px'}} type="checkbox" /> <b>Legal Separation of:
                                        </b>
                                    </label>
                                    <label>
                                        <input style={{marginLeft:'85px'}} type="checkbox"  /> Marriage
                                    </label>
                                    <label>
                                        <input style={{marginLeft:'50px'}} type="checkbox"  /> Domestic Partnership
                                    </label>
                                </form>
                                <form >
                                    <label>
                                        <input style={{marginLeft:'40px'}} type="checkbox" /> <b>Nullity of:
                                        </b>
                                    </label>
                                    <label>
                                        <input style={{marginLeft:'160px'}} type="checkbox"  /> Marriage
                                    </label>
                                    <label>
                                        <input style={{marginLeft:'50px'}} type="checkbox"  /> Domestic Partnership
                                    </label>
                                </form>
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
                    style={{ pageBreakInside: "auto", margin: 0, fontSize: 16, verticalAlign: "top" }}
                    cellPadding={5}
                    cellSpacing={5}
                >
                    <tbody>
                        <tr>
                            <td width="3%" valign="top">
                                1.
                            </td>
                            <td width="95%" valign="top">
                                <b>LEGAL RELATIONSHIP </b><i>(check all that apply):</i>
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
                        We are married.
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
                         We are domestic partners and our domestic partnership was established in California
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
                        We are domestic partners and our domestic partnership was NOT established in California.
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
                                2.
                            </td>
                            <td width="95%" valign="top">
                                <b>RESIDENCE REQUIREMENTS </b><i>(check all that apply):</i>
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
                         Petitioner   
                        <input 
                        name={"AggrementsStipulationsAndWaivers"}
                        onChange={(e) => handleChange(e)}
                        type="checkbox" style={{ marginRight: 5, fontSize: 16 }} />
                        Respondent has been a resident of this state for at least six months and of this county for at least
                        three months immediately preceding the filing of this Petition. <i> (For a divorce, at least one person in the legal relationship
                            described in items 1a and 1c must comply with this requirement.)</i>
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
                         Our domestic partnership was established in California. Neither of us has to be a resident or have a domicile in California
                         to dissolve our partnership here.
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
                        We are the same sex, were married in California, but currently live in a jurisdiction that does not recognize, and will not
                        dissolve, our marriage.This Petition is filed in the county where we married
                    </div>
                </div>
                <div style={{ display: "flex", marginTop: 10 }}>
                    <div style={{ marginLeft: 50 }}>
                    Petitioner lives in (specify): <input onChange={(e) => handleChange(e)} size={40} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                    </div>
                    <div style={{ marginLeft: 50 }}>
                    Respondent lives in (specify):
                        <input onChange={(e) => handleChange(e)} size={40} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
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
                                3.
                            </td>
                            <td width="95%" valign="top">
                                <b>STATISTICAL FACTS </b>
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
                    <div style={{ width: "8%", verticalAlign: "top",display:'flex' }} >
                        <input 
                        name={"AggrementsStipulationsAndWaivers"}
                        onChange={(e) => handleChange(e)}
                        type="checkbox" style={{ marginRight: 5, fontSize: 16 }} />
                        <div style={{ display: "flex", marginTop: 10 }}>
                    <div style={{ marginLeft: 50 }}>
                    (1) Date of marriage (specify):  <input onChange={(e) => handleChange(e)} size={40} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                    </div>
                    <div style={{ marginLeft: 50 }}>
                    (2) Date of separation (specify):
                        <input onChange={(e) => handleChange(e)} size={40} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                    </div>
                </div> 
                    </div>
                </div>
                <div style={{ marginLeft: 50 }}>
                    (3) Time from date of marriage to date of separation (specify):
                    <div style={{ display: "flex", marginTop: 10 }}>
                    <div style={{ marginLeft: 50 }}>
                    Years:<input onChange={(e) => handleChange(e)} size={10} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                    </div>
                    <div style={{ marginLeft: 50 }}>
                    Months:
                        <input onChange={(e) => handleChange(e)} size={10} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                    </div>
                </div> 
                    </div>

                    <div
                    style={{ display: "flex", marginBottom: 5, marginLeft: 43, fontSize: 16 }}
                >
                    <div style={{ width: "3%", verticalAlign: "top", display:'flex' }}>
                        b.
                    </div>
                    <div style={{ verticalAlign: "top" }} >
                        <input 
                        name={"AggrementsStipulationsAndWaivers"}
                        onChange={(e) => handleChange(e)}
                        type="checkbox" style={{ marginRight: 5, fontSize: 16 }} />
                        <div style={{ marginTop: 10 }}>
                    <div style={{ marginLeft: 50 }}>
                    (1)  Registration date of domestic partnership with the California Secretary of State or other state equivalent (specify below):
                    </div>
                    <div style={{ marginLeft: 50 }}>
                    (2) Date of separation (specify):
                    <div style={{ display: "flex", marginTop: 10 }}>
                    <div style={{ marginLeft: 50 }}>
                    Years:<input onChange={(e) => handleChange(e)} size={10} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                    </div>
                    <div style={{ marginLeft: 50 }}>
                    Months:
                        <input onChange={(e) => handleChange(e)} size={10} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                    </div></div></div></div></div></div>
                    <div style={{marginLeft:50}}>
                    (3) Time from date of registration of domestic partnership to date of separation (specify):
                    <input type="text" size={20} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} id="name" />
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
                                3.
                            </td>
                            <td width="95%" valign="top">
                                <b>MINOR CHILDREN</b>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div
                    style={{ display: "flex", marginBottom: 5, marginLeft: 43, fontSize: 16 }}
                >
                    <div style={{ verticalAlign: "top",display:'flex' }}>
                        a.
                        <div style={{ marginLeft:20 }}>
                        <input style={{marginRight:'10px'}} type="checkbox" />
                    There are no minor children.
                    </div>
                    </div>
                </div>
                <div
                    style={{ display: "flex", marginBottom: 5, marginLeft: 43, fontSize: 16 }}
                >
                    <div style={{ verticalAlign: "top",display:'flex' }}>
                        b.
                        <div style={{ marginLeft:20 }}>
                        <input style={{marginRight:'10px'}} type="checkbox" />
                        The minor children are:
                    </div>
                    </div>
                </div>
                <table style={{marginLeft:'80px'}} >
                    <tbody style={{border:'2px solid black'}}>
                    <tr>
                                <th>Child's Name</th>
                                <th>BarthDate</th>
                                <th>Age</th>
                                <th>Sex</th>
                                
                            </tr>
                            <tr style={{border:'2px solid black'}}>
                                <td><input 
                                    name={"CaseNumber"}
                                    onChange={(e) => handleChange(e)}
                                    style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"96%" }} type="text" id="street" /></td>
                               <td><input 
                                    name={"CaseNumber"}
                                    onChange={(e) => handleChange(e)}
                                    style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"96%" }} type="text" id="street" /></td>
                                    <td><input 
                                    name={"CaseNumber"}
                                    onChange={(e) => handleChange(e)}
                                    style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"96%" }} type="text" id="street" /></td>
                                    <td><input 
                                    name={"CaseNumber"}
                                    onChange={(e) => handleChange(e)}
                                    style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"96%" }} type="text" id="street" /></td>
                                
                            </tr>
                            <tr style={{border:'2px solid black'}}>
                                <td><input 
                                    name={"CaseNumber"}
                                    onChange={(e) => handleChange(e)}
                                    style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"96%" }} type="text" id="street" /></td>
                                <td><input 
                                    name={"CaseNumber"}
                                    onChange={(e) => handleChange(e)}
                                    style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"96%" }} type="text" id="street" /></td>
                                <td><input 
                                    name={"CaseNumber"}
                                    onChange={(e) => handleChange(e)}
                                    style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"96%" }} type="text" id="street" /></td>
                                <td><input 
                                    name={"CaseNumber"}
                                    onChange={(e) => handleChange(e)}
                                    style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"96%" }} type="text" id="street" /></td>
                            </tr>
                            <tr style={{border:'2px solid black'}}>
                                <td><input 
                                    name={"CaseNumber"}
                                    onChange={(e) => handleChange(e)}
                                    style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"96%" }} type="text" id="street" /></td>
                                <td><input 
                                    name={"CaseNumber"}
                                    onChange={(e) => handleChange(e)}
                                    style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"96%" }} type="text" id="street" /></td>
                                <td><input 
                                    name={"CaseNumber"}
                                    onChange={(e) => handleChange(e)}
                                    style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"96%" }} type="text" id="street" /></td>
                                <td><input 
                                    name={"CaseNumber"}
                                    onChange={(e) => handleChange(e)}
                                    style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"96%" }} type="text" id="street" /></td>
                            </tr>
                            <tr style={{border:'2px solid black'}}>
                                <td><input 
                                    name={"CaseNumber"}
                                    onChange={(e) => handleChange(e)}
                                    style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"96%" }} type="text" id="street" /></td>
                                <td><input 
                                    name={"CaseNumber"}
                                    onChange={(e) => handleChange(e)}
                                    style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"96%" }} type="text" id="street" /></td>
                                <td><input 
                                    name={"CaseNumber"}
                                    onChange={(e) => handleChange(e)}
                                    style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"96%" }} type="text" id="street" /></td>
                                <td><input 
                                    name={"CaseNumber"}
                                    onChange={(e) => handleChange(e)}
                                    style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"96%" }} type="text" id="street" /></td>
                            </tr>
                    </tbody>
                </table><br />
                <div style={{display:'flex'}}>
                    <div style={{ marginLeft: 50 }}>
                        (1) <input onChange={(e) => handleChange(e)}  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "10px" }} type="checkbox" id="street" />
                        continued on <i><a href="Attachment 4b." target="_blank" style={{color:"blue"}}>Attachment 4b.</a></i> </div>
                    <div style={{ marginLeft: 50 }}>
                        (2) <input onChange={(e) => handleChange(e)}  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "10px" }} type="checkbox" id="street" />
                        a child who is not yet born.</div>
                </div>
                <div
                    style={{ display: "flex", marginBottom: 5, marginLeft: 43, fontSize: 16 }}
                >
                    <div style={{ verticalAlign: "top",display:'flex' }}>
                        c.
                        <div style={{ marginLeft:20 }}>
                        If any children listed above were born before the marriage or domestic partnership, the court has the authority to determine
                            those children to be children of the marriage or domestic partnership.
                    </div>
                    </div>
                </div>
                <div
                    style={{ display: "flex", marginBottom: 5, marginLeft: 43, fontSize: 16 }}
                >
                    <div style={{ verticalAlign: "top",display:'flex' }}>
                        d.
                        <div style={{ marginLeft:20 }}>
                        If there are minor children of Petitioner and Respondent, a completed Declaration Under Uniform Child Custody Jurisdiction
                            and Enforcement Act (UCCJEA) <a href="(form FL-105)" target="_blank" style={{color:"blue"}}>(form FL-105)</a> must be attached.
                    </div>
                    </div>
                </div>
                <div
                    style={{ display: "flex", marginBottom: 5, marginLeft: 43, fontSize: 16 }}
                >
                    <div style={{ verticalAlign: "top",display:'flex' }}>
                        e.
                        <div style={{ marginLeft:20 }}>
                        <input style={{marginRight:'10px'}} type="checkbox" />
                        Petitioner and Respondent signed a voluntary declaration of paternity. A copy 
                        <input style={{margin:'10px'}} type="checkbox" /> is 
                        <input style={{margin:'10px'}} type="checkbox" /> is not attached.
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
                        <div> FL-100 [Rev. July 1, 2016]</div>
                    </div>
                    <div style={{ }}>
                        <div style={{ marginLeft:"5px" , fontWeight: "bold" }}>
                        PETITION—MARRIAGE/DOMESTIC PARTNERSHIP 
                        </div>
                        <div><b>(Family Law)</b></div>
                    </div>
                    <div style={{ listStyle: "none", fontSize:'10px' }}>
                        <div>Family Code, §§ 297, 299, 2320, 2330, 3409</div>
                        <div> www.courtinfo.ca.gov</div>
                    </div>
                    <div style={{ listStyle: "none", fontWeight: "bold",fontSize:'15px' }}>
                    <li>Page 1 of 3</li>
                    </div>
                </div>
                <br/>
                <br/>
                <table style={{ width: "100%", border: "2px solid black", borderCollapse: "collapse" }}>
                    <tbody>
                        <tr>
                            <td style={{ border: "2px solid black", borderCollapse: "collapse" }}>
                                <div style={{ marginLeft: "1.2rem" }}>
                                    <label htmlFor="name">PETITIONER 1:</label>
                                    <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginTop: "5px",width:"75%" }} type="text" id="name" />
                                </div>
                                <div style={{ marginLeft: "1.2rem" }}>
                                    <label htmlFor="street">PETITIONER 2:</label>
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
                                <b>LEGAL GROUNDS</b>S (Family Code sections 2200–2210, 2310–2312)
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div style={{ marginLeft: 43, fontSize: 16,display:'flex' }}>
                    <div style={{ verticalAlign:'top'}}>
                       a. <input style={{margin:'10px'}} type="checkbox" />
                        Divorce or <input style={{margin:'10px'}} type="checkbox" />
                        Legal separation of the marriage or domestic partnership based on (check one):
                    </div>
                </div>
                <div style={{ marginLeft: 63, fontSize: 16,display:'flex' }}>
                    <div style={{ verticalAlign:'top'}}>
                       (1) <input style={{margin:'10px'}} type="checkbox" />
                       irreconcilable differences.     (2)<input style={{margin:'10px'}} type="checkbox" />
                       permanent legal incapacity to make decisions.
                    </div>
                </div>
                <div style={{ marginLeft: 43, fontSize: 16,display:'flex' }}>
                    <div style={{ verticalAlign:'top'}}>
                       b.
                        <input style={{margin:'10px'}} type="checkbox" />
                        Nullity of void marriage or domestic partnership based on
                    </div>
                </div>
                <div style={{ marginLeft: 63, fontSize: 16,display:'flex' }}>
                    <div style={{ verticalAlign:'top'}}>
                       (1) <input style={{margin:'10px'}} type="checkbox" />
                       incest.     (2)<input style={{margin:'10px'}} type="checkbox" />
                       bigamy.
                    </div>
                </div>
                <div style={{ marginLeft: 43, fontSize: 16,display:'flex' }}>
                    <div style={{ verticalAlign:'top'}}>
                       c.
                        <input style={{margin:'10px'}} type="checkbox" />
                        Nullity of voidable marriage or domestic partnership based on
                    </div>
                </div>
                <div style={{ marginLeft: 63, fontSize: 16 }}>
                    <div style={{ verticalAlign:'top'}}>
                       (1) <input style={{margin:'10px'}} type="checkbox" />
                       petitioner’s age at time of registration of domesticpartnership or marriage.
                    </div>
                    <div style={{ verticalAlign:'top'}}>
                       (2) <input style={{margin:'10px'}} type="checkbox" />
                       prior existing marriage or domestic partnership.

                    </div>
                    <div style={{ verticalAlign:'top'}}>
                       (3) <input style={{margin:'10px'}} type="checkbox" />
                       unsound mind.  <div></div>  (4) <input style={{margin:'10px'}} type="checkbox" /> fraud.
                    </div>
                    <div style={{ verticalAlign:'top'}}>
                       (5) <input style={{margin:'10px'}} type="checkbox" />
                       force.   <div></div> (6) <input style={{margin:'10px'}} type="checkbox" />  physical incapacity.
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
                                6.
                            </td>
                            <td width="95%" valign="top">
                                <b>CHILD CUSTODY AND VISITATION (PARENTING TIME)</b>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <form>
                    <div style={{display:'flex', marginLeft:'30px'}}>a.   Legal custody of children to..............
                    <label style={{marginLeft:'20px'}}>
                        <input onChange={(e) => handleChange(e)} type="checkbox" name="gender" value="male"/> Petitioner
                    </label>
                    <label >
                        <input style={{marginLeft:'20px'}} onChange={(e) => handleChange(e)} type="checkbox" name="gender" value="female"/>  Respondent
                    </label>
                    <label >
                        <input style={{marginLeft:'20px'}} onChange={(e) => handleChange(e)} type="checkbox" name="gender" value="female"/>  Joint
                    </label>
                    <label >
                        <input style={{marginLeft:'20px'}} onChange={(e) => handleChange(e)} type="checkbox" name="gender" value="other"/> Other
                    </label>
                    </div>
                </form>
                <form>
                    <div style={{display:'flex', marginLeft:'30px'}}>b.   Physical custody of children to..........
                    <label style={{marginLeft:'20px'}}>
                        <input onChange={(e) => handleChange(e)} type="checkbox" name="gender" value="male"/> Petitioner
                    </label>
                    <label >
                        <input style={{marginLeft:'20px'}} onChange={(e) => handleChange(e)} type="checkbox" name="gender" value="female"/>  Respondent
                    </label>
                    <label >
                        <input style={{marginLeft:'20px'}} onChange={(e) => handleChange(e)} type="checkbox" name="gender" value="female"/>  Joint
                    </label>
                    <label >
                        <input style={{marginLeft:'20px'}} onChange={(e) => handleChange(e)} type="checkbox" name="gender" value="other"/> Other
                    </label>
                    </div>
                </form>
                <form>
                    <div style={{display:'flex', marginLeft:'30px'}}>c.   Child visitation (parenting time) be granted to ......
                    <label style={{marginLeft:'20px'}}>
                        <input onChange={(e) => handleChange(e)} type="checkbox" name="gender" value="male"/>Petitioner
                    </label>
                    <label >
                        <input style={{marginLeft:'20px'}} onChange={(e) => handleChange(e)} type="checkbox" name="gender" value="female"/>Respondent
                    </label>
                    <label >
                        <input style={{marginLeft:'20px'}} onChange={(e) => handleChange(e)} type="checkbox" name="gender" value="other"/>Other
                    </label>
                    </div>
                </form>
                <form>
                    <div style={{display:'flex', marginLeft:'30px'}}>As requested in:
                    <label style={{marginLeft:'20px'}}>
                        <input onChange={(e) => handleChange(e)} type="checkbox" name="gender" value="male"/><a href="form FL-311" target="_blank" style={{color:"blue"}}>form FL-311</a>
                    </label>
                    <label >
                        <input style={{marginLeft:'20px'}} onChange={(e) => handleChange(e)} type="checkbox" name="gender" value="female"/><a href="form FL-312" target="_blank" style={{color:"blue"}}>form FL-312</a>
                    </label>
                    <label >
                        <input style={{marginLeft:'20px'}} onChange={(e) => handleChange(e)} type="checkbox" name="gender" value="other"/><a href="form FL-341(C)" target="_blank" style={{color:"blue"}}>form FL-341(C)</a>
                    </label>
                    </div>
                </form>
                <form>
                    <div style={{display:'flex', marginLeft:'140px'}}>
                    <label style={{marginLeft:'20px'}}>
                        <input onChange={(e) => handleChange(e)} type="checkbox" name="gender" value="male"/><a href="form FL-341(D)" target="_blank" style={{color:"blue"}}>form FL-341(D)</a>
                    </label>
                    <label >
                        <input style={{marginLeft:'20px'}} onChange={(e) => handleChange(e)} type="checkbox" name="gender" value="female"/><a href="form FL-341(E)" target="_blank" style={{color:"blue"}}>form FL-341(E)</a>
                    </label>
                    <label >
                        <input style={{marginLeft:'20px'}} onChange={(e) => handleChange(e)} type="checkbox" name="gender" value="other"/><a href="Attachment 6c(1)" target="_blank" style={{color:"blue"}}>Attachment 6c(1)</a>
                    </label>
                    </div>
                </form>
                <table
                    width="100%"
                    style={{ pageBreakInside: "auto", margin: 0, fontSize: 16, verticalAlign: "top" }}
                    cellPadding={5}
                    cellSpacing={5}
                >
                    <tbody>
                        <tr>
                            <td width="3%" valign="top">
                                7.
                            </td>
                            <td width="95%" valign="top">
                                <b>CHILD SUPPORT</b>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div style={{ marginLeft: 43, fontSize: 16,display:'flex' }}>
                    <div style={{ verticalAlign:'top'}}>
                       a.
                    </div>
                    <div style={{marginLeft:"10px"}}>If there are minor children born to or adopted by Petitioner and Respondent before or during this marriage or domestic
                            partnership, the court will make orders for the support of the children upon request and submission of financial forms by the
                            requesting party.</div>
                </div>
                <div style={{ marginLeft: 43, fontSize: 16,display:'flex' }}>
                    <div style={{ verticalAlign:'top'}}>
                       b.
                    </div>
                    <div style={{marginLeft:"10px"}}>An earnings assignment may be issued without further notice.</div>
                </div>
                <div style={{ marginLeft: 43, fontSize: 16,display:'flex' }}>
                    <div style={{ verticalAlign:'top'}}>
                       c.
                    </div>
                    <div style={{marginLeft:"10px"}}> Any party required to pay support must pay interest on overdue amounts at the "legal" rate, which is currently 10 percent.</div>
                </div>
                <div style={{ marginLeft: 43, fontSize: 16,display:'flex' }}>
                    <div style={{ verticalAlign:'top'}}>
                       d.
                    </div>
                    <div style={{marginLeft:"10px"}}> <input style={{margin:"10px"}} type="checkbox" />  Other (specify):</div>
                    <textarea
                                        style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"50%" ,resize:"none"}}
                                        name=""
                                        id=""
                                        rows={2}
                                        defaultValue={""}
                                    />
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
                                8.
                            </td>
                            <td width="95%" valign="top">
                                <b>SPOUSAL OR DOMESTIC PARTNER SUPPORT</b>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div style={{ marginLeft: 43, fontSize: 16,display:'flex' }}>
                    <div style={{ verticalAlign:'top'}}>
                       a.
                    </div>
                    <div style={{marginLeft:"10px"}}> <input style={{margin:"10px"}} type="checkbox" />   Spousal or domestic partner support payable to <input style={{margin:"10px"}} type="checkbox" /> Petitioner <input style={{margin:"10px"}} type="checkbox" />Respondent  </div>
                </div>
                <div style={{ marginLeft: 43, fontSize: 16,display:'flex' }}>
                    <div style={{ verticalAlign:'top'}}>
                       b.
                    </div>
                    <div style={{marginLeft:"10px"}}> <input style={{margin:"10px"}} type="checkbox" />   Terminate (end) the court's ability to award support to <input style={{margin:"10px"}} type="checkbox" /> Petitioner <input style={{margin:"10px"}} type="checkbox" />Respondent  </div>
                </div>
                <div style={{ marginLeft: 43, fontSize: 16,display:'flex' }}>
                    <div style={{ verticalAlign:'top'}}>
                       c.
                    </div>
                    <div style={{marginLeft:"10px"}}> <input style={{margin:"10px"}} type="checkbox" />   Reserve for future determination the issue of support payable to <input style={{margin:"10px"}} type="checkbox" />Respondent  </div>
                </div>
                <div style={{ marginLeft: 43, fontSize: 16,display:'flex' }}>
                    <div style={{ verticalAlign:'top'}}>
                       d.
                    </div>
                    <div style={{marginLeft:"10px"}}> <input style={{margin:"10px"}} type="checkbox" />   Other (specify):</div>
                    <textarea
                                        style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"50%" ,resize:"none"}}
                                        name=""
                                        id=""
                                        rows={2}
                                        defaultValue={""}
                                    />
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
                                9.
                            </td>
                            <td width="95%" valign="top">
                                <b>SEPARATE PROPERTY</b>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div style={{ marginLeft: 43, fontSize: 16,display:'flex' }}>
                    <div style={{ verticalAlign:'top'}}>
                       a.
                    </div>
                    <div style={{marginLeft:"10px"}}> <input style={{margin:"10px"}} type="checkbox" />   There are no such assets or debts that I know of to be confirmed by the court. </div>
                </div>
                <div style={{ marginLeft: 43, fontSize: 16,display:'flex' }}>
                    <div style={{ verticalAlign:'top'}}>
                       b.
                    </div>
                    <div style={{marginLeft:"10px"}}> <input style={{margin:"10px"}} type="checkbox" />   Confirm as separate property the assets and debts in<input style={{margin:"10px"}} type="checkbox" /> Property Declaration (form FL-160). <input style={{margin:"10px"}} type="checkbox" />Attachment 9b  </div>
                </div>
                <div
                    style={{ display: "flex", marginBottom: 5, marginLeft: 43, fontSize: 16 }}
                >
                    
        
                        <div style={{ marginLeft:20 }}>
                        <input style={{marginRight:'10px'}} type="checkbox" />
                        the following list.
                    </div>
                </div>
                <table style={{marginLeft:'80px'}} >
                    <tbody style={{border:'2px solid black'}}>
                    <tr>
                                <th> Item</th>
                                <th>Confirm to</th>
                                
                                
                            </tr>
                            <tr style={{border:'2px solid black'}}>
                                <td><input 
                                    name={"CaseNumber"}
                                    onChange={(e) => handleChange(e)}
                                    style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"96%" }} type="text" id="street" /></td>
                               <td><input 
                                    name={"CaseNumber"}
                                    onChange={(e) => handleChange(e)}
                                    style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"96%" }} type="text" id="street" /></td>
                                
                            </tr>
                            <tr style={{border:'2px solid black'}}>
                                <td><input 
                                    name={"CaseNumber"}
                                    onChange={(e) => handleChange(e)}
                                    style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"96%" }} type="text" id="street" /></td>
                                <td><input 
                                    name={"CaseNumber"}
                                    onChange={(e) => handleChange(e)}
                                    style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"96%" }} type="text" id="street" /></td>
                            </tr>
                            <tr style={{border:'2px solid black'}}>
                                <td><input 
                                    name={"CaseNumber"}
                                    onChange={(e) => handleChange(e)}
                                    style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"96%" }} type="text" id="street" /></td>
                                <td><input 
                                    name={"CaseNumber"}
                                    onChange={(e) => handleChange(e)}
                                    style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"96%" }} type="text" id="street" /></td>
                            </tr>
                            <tr style={{border:'2px solid black'}}>
                                <td><input 
                                    name={"CaseNumber"}
                                    onChange={(e) => handleChange(e)}
                                    style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"96%" }} type="text" id="street" /></td>
                                <td><input 
                                    name={"CaseNumber"}
                                    onChange={(e) => handleChange(e)}
                                    style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"96%" }} type="text" id="street" /></td>
                            </tr>
                            
                    </tbody>
                </table>
                 <br />
                    <hr style={{ width: "100%" }} />
                <div
                    className="footer"
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div style={{ listStyle: "none" , fontSize:'10px' }}>
                    <div>Form Approved for Optional Use</div>
                        <div>Judicial Council of California</div>
                        <div> FL-100 [Rev. July 1, 2016]</div>
                    </div>
                    <div style={{ }}>
                        <div style={{ marginLeft:"5px" , fontWeight: "bold" }}>
                        PETITION—MARRIAGE/DOMESTIC PARTNERSHIP 
                        </div>
                        <div><b>(Family Law)</b></div>
                    </div>
                    <div style={{ listStyle: "none", fontSize:'10px' }}>
                    <div>Family Code, §§ 297, 299, 2320, 2330, 3409</div>
                        <div> www.courtinfo.ca.gov</div>
                    </div>
                    <div style={{ listStyle: "none", fontWeight: "bold",fontSize:'15px' }}>
                    <li>Page 2 of 3</li>
                    </div>
                </div><br />
                <table style={{ width: "100%", border: "2px solid black", borderCollapse: "collapse" }}>
                    <tbody>
                        <tr>
                            <td style={{ border: "2px solid black", borderCollapse: "collapse" }}>
                                <div style={{ marginLeft: "1.2rem" }}>
                                    <label htmlFor="name">PETITIONER 1:</label>
                                    <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginTop: "5px",width:"75%" }} type="text" id="name" />
                                </div>
                                <div style={{ marginLeft: "1.2rem" }}>
                                    <label htmlFor="street">PETITIONER 2:</label>
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
                <table
                    width="100%"
                    style={{ pageBreakInside: "auto", margin: 0, fontSize: 16, verticalAlign: "top" }}
                    cellPadding={5}
                    cellSpacing={5}
                >
                    <tbody>
                        <tr>
                            <td width="3%" valign="top">
                                10.
                            </td>
                            <td width="95%" valign="top">
                                <b>COMMUNITY AND QUASI-COMMUNITY PROPERTY</b>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div style={{ marginLeft: 43, fontSize: 16,display:'flex' }}>
                    <div style={{ verticalAlign:'top'}}>
                       a.
                    </div>
                    <div style={{marginLeft:"10px"}}> <input style={{margin:"10px"}} type="checkbox" /> There are no such assets or debts that I know of to be divided by the court.</div>
                </div>
                <div style={{ marginLeft: 43, fontSize: 16,display:'flex' }}>
                    <div style={{ verticalAlign:'top'}}>
                       b.
                    </div>
                    <div style={{marginLeft:"10px"}}> <input style={{margin:"10px"}} type="checkbox" /> Determine rights to community and quasi-community assets and debts. All such assets and debts are listed
                    <br /><input style={{margin:"10px"}} type="checkbox" /> Property Declaration<a href="(form FL-160)" target="_blank" style={{color:"blue"}}>(form FL-160)</a> . <input style={{margin:"10px"}} type="checkbox" /> in <a href="Attachment 10b." target="_blank" style={{color:"blue"}}>Attachment 10b.</a>  </div><br />
                </div>
                <div style={{ marginLeft: 43, fontSize: 16,display:'flex' }}>
                    <div style={{marginLeft:"50px"}}> <input style={{margin:"10px"}} type="checkbox" />   Other (specify):</div>
                    <textarea
                                        style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px",width:"50%" ,resize:"none"}}
                                        name=""
                                        id=""
                                        rows={4}
                                        defaultValue={""}
                                    />
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
                                11.
                            </td>
                            <td width="95%" valign="top">
                                <b>OTHER REQUESTS</b>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div style={{ marginLeft: 43, fontSize: 16,display:'flex' }}>
                    <div style={{ verticalAlign:'top'}}>
                       a.
                    </div>
                    <div style={{marginLeft:"10px"}}> <input style={{margin:"10px"}} type="checkbox" />   Attorney's fees and costs payable by<input style={{margin:"10px"}} type="checkbox" /> Petitioner <input style={{margin:"10px"}} type="checkbox" />Respondent </div>
                </div>
                <div style={{ marginLeft: 43, fontSize: 16,display:'flex' }}>
                    <div style={{ verticalAlign:'top'}}>
                       b.
                    </div>
                    <div style={{marginLeft:"10px"}}> <input style={{margin:"10px"}} type="checkbox" />   Petitioner's former name be restored to (specify):
                    </div>
                    <textarea
                                        style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginTop: "10px",width:"40%" ,resize:"none"}}
                                        name=""
                                        id=""
                                        rows={1}
                                        defaultValue={""}
                                    />
                </div>
                <div style={{ marginLeft: 43, fontSize: 16,display:'flex' }}>
                    <div style={{ verticalAlign:'top'}}>
                       c.
                    </div>
                    <div style={{marginLeft:"10px"}}> <input style={{margin:"10px"}} type="checkbox" />   Other (specify):</div>
                    <textarea
                                        style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginTop: "10px",width:"50%" ,resize:"none"}}
                                        name=""
                                        id=""
                                        rows={4}
                                        defaultValue={""}
                                    />
                </div>
                <div style={{ marginLeft: 43, fontSize: 16,display:'flex' }}>
                    
                    <div style={{marginLeft:"10px"}}> <input style={{margin:"10px"}} type="checkbox" /><a href="Continued on Attachment 11c." target="_blank" style={{color:"blue"}}>Continued on Attachment 11c.</a></div>
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
                                11.
                            </td>
                            <td width="95%" valign="top">
                                <b>I HAVE READ THE RESTRAINING ORDERS ON THE BACK OF THE SUMMONS, AND I UNDERSTAND THAT THEY APPLY
                                TO ME WHEN THIS PETITION IS FILED.</b>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div>I declare under penalty of perjury under the laws of the State of California that the foregoing is true and correct.</div>
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
                            <div>  (SIGNATURE OF PETITIONER)</div>
                        </div>
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
                            <div>  (SIGNATURE OF ATTORNEY FOR PETITIONER)</div>
                        </div>
                    </div>
                </div>
                <div style={{ border:'2px solid black',width:'97%',margin:'10px',padding:'5px'}}> <b>FOR MORE INFORMATION:</b> Read Legal Steps for a Divorce or Legal Separation <a href="FL-107-INFO" target="_blank" style={{color:"blue"}}>(form FL-107-INFO)</a> and visit "Families Change"
                at <a href="www.familieschange.ca.gov" target="_blank" style={{color:"blue"}}>www.familieschange.ca.gov</a> — an online guide for parents and children going through divorce or separation.</div>
                <div style={{ border:'2px solid black',width:'97%',margin:'10px',padding:'5px'}}> <b>NOTICE:</b>You may redact (black out) social security numbers from any written material filed with the court in this case other than a
                form used to collect child, spousal or partner support.</div>
                <div style={{ border:'2px solid black',width:'97%',margin:'10px',padding:'5px'}}> <b>NOTICE—CANCELLATION OF RIGHTS:</b>  Dissolution or legal separation may automatically cancel the rights of a domestic partner
                        or spouse under the other domestic partner’s or spouse’s will, trust, retirement plan, power of attorney, pay-on-death bank account,
                        survivorship rights to any property owned in joint tenancy, and any other similar thing. It does not automatically cancel the right of a
                        domestic partner or spouse as beneficiary of the other partner’s or spouse’s life insurance policy. You should review these matters,
                        as well as any credit cards, other credit accounts, insurance polices, retirement plans, and credit reports, to determine whether they
                        should be changed or whether you should take any other actions. Some changes may require the agreement of your partner or
                        spouse or a court order.
                </div>
                <br />
                    <br />
                    <hr style={{ width: "100%" }} />
                <div
                    className="footer"
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div style={{ listStyle: "none" , fontSize:'10px' }}>
                    <div>Form Approved for Optional Use</div>
                        <div>Judicial Council of California</div>
                        <div> FL-100 [Rev. July 1, 2016]</div>
                    </div>
                    <div style={{ }}>
                        <div style={{ marginLeft:"5px" , fontWeight: "bold" }}>
                        PETITION—MARRIAGE/DOMESTIC PARTNERSHIP 
                        </div>
                        <div><b>(Family Law)</b></div>
                    </div>
                    <div style={{ listStyle: "none", fontSize:'10px' }}>
                    <div>Family Code, §§ 297, 299, 2320, 2330, 3409</div>
                        <div> www.courtinfo.ca.gov</div>
                    </div>
                    <div style={{ listStyle: "none", fontWeight: "bold",fontSize:'15px' }}>
                    <li>Page 3 of 3</li>
                    </div>
                </div> 
                </div>
                

        
    )
};
