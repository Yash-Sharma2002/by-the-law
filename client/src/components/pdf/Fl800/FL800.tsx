import React from 'react'

export default function SU115() {
    return (

        <>
            <div style={{ maxWidth: "1100px", margin: "auto" }}>
                <h3 style={{ display: "flex", justifyContent: "end", marginTop: "0", marginBottom: "0" }}>FL-800</h3>
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
                                    <label style={{ fontSize: "10px" }} htmlFor="telephone"></label>
                                    {/* <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", height: "18px", margin: "0px 2px", }} className='w-[46.7%]' id="telephone" /> */}
                                </div>
                                <div className='flex justify-end items-center' style={{ width: "inherit" }}>
                                    <label style={{ fontSize: "10px" }} htmlFor="telephone">FIRST NAME:</label>
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", height: "18px", margin: "0px 2px", }} className='w-[46.7%]' id="telephone" />
                                </div>
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
                                <label htmlFor="name" style={{ fontSize: "10px" }}>PETITIONER 1:</label>
                                <input size={86} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px 2px", height: "18px", width: "74.4%" }}
                                    type="text" id="name" />
                            </div>
                            <div className='flex justify-end items-center mt-1'>
                                <label htmlFor="street" style={{ fontSize: "10px" }}>PETITIONER 2:</label>
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
                                <b>JOINT PETITION FOR SUMMARY DISSOLUTION</b>
                                
                                <form >
                                    <label>
                                        <input style={{marginLeft:'40px'}} type="checkbox" /> <b>MARRIAGE
                                        </b>
                                    </label>
                                    
                                </form>
                                <form >
                                    <label>
                                        <input style={{marginLeft:'40px'}} type="checkbox" /> <b>DOMESTIC PARTNERSHIP
                                        </b>
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
                
                <div><b>We petition for a summary dissolution of marriage, registered domestic partnership, or both </b>and declare that all the following conditions exist on the date this petition is filed with the court:</div>
                <div style={{ display: "flex", marginTop: 2 }}>
                    <div style={{ marginLeft: 5 }}>1.</div>
                    <div style={{ marginLeft: 10 }}>
                    We have read and understand the Summary Dissolution Information booklet (form FL-810).
                    </div>
                </div>
                <div style={{ display: "flex", marginTop: 2 }}>
                <div style={{ marginLeft: 5 }}>2.</div>
                    <div style={{ marginLeft: 20 }}>a.</div>
                    <div style={{ marginLeft: 5 }}>
                    <input type="checkbox" size={10} style={{ marginLeft: "10px" }} />
                     <label> We were married on (date):</label>
                    </div>
                </div>
                <div style={{ display: "flex", marginTop: 10 }}>
                    <div style={{ marginLeft: 25 }}>b.</div>
                    <div style={{ marginLeft: 5 }}>
                    <input type="checkbox" size={10} style={{ marginLeft: "10px" }} />
                        <label> We registered as domestic partners on (date):
                            </label>
                    </div>
                </div>
                <div style={{ display: "flex", marginTop: 10 }}>
                <div style={{ marginLeft: 5 }}>3.</div>
                    <div style={{ marginLeft: 5 }}>
                    <input type="checkbox" size={10} style={{ marginLeft: "10px" }} />
                       <label> We separated on (date):</label>
                    </div>
                </div>
                <div style={{ display: "flex", marginTop: 2 }}>
                    <div style={{ marginLeft: 5 }}>4.</div>
                    <div style={{ marginLeft: 10 }}>
                    4.	Less than five years have passed between the date of our marriage and/or registration of our domestic partnership and the date of our separation.</div>
                </div>
                <div style={{ display: "flex", marginTop: 2 }}>
                <div style={{ marginLeft: 5 }}>5.</div>
                    <div style={{ marginLeft: 20 }}>a.</div>
                    <div style={{ marginLeft: 5 }}>
                    <input type="checkbox" size={10} style={{ marginLeft: "10px" }} />
                     <label> One of us has lived in California for at least six months and in the county of filing for at least the three months preceding the date of filing. Or we are only asking to end a domestic partnership registered in California.</label>
                    </div>
                </div>
                <div style={{ display: "flex", marginTop: 10 }}>
                    <div style={{ marginLeft: 25 }}>b.</div>
                    <div style={{ marginLeft: 5 }}>
                    <input type="checkbox" size={10} style={{ marginLeft: "10px" }} />
                        <label> We are the same sex and were married in California but are not residents of California. Neither of us lives in a place that will allow us to divorce. We are filing this case in the county in which we married.
                            </label>
                    </div>
                </div>
                <div style={{ display: "flex", marginTop: 2 }}>
                    <div style={{ marginLeft: 5 }}>6.</div>
                    <div style={{ marginLeft: 10 }}>
                    There are no minor children who were born of our relationship before or during our marriage or domestic partnership or adopted by us during our marriage or domestic partnership. Neither one of us, to our knowledge, is pregnant.</div>
                </div>
                <div style={{ display: "flex", marginTop: 2 }}>
                    <div style={{ marginLeft: 5 }}>7.</div>
                    <div style={{ marginLeft: 10 }}>
                    Neither of us has an interest in any real property anywhere.<b> (You may have a lease for a residence in which one of you lives. It must terminate within a year from the date of filing this petition. The lease must not include an option to purchase.)</b></div>
                </div>
                <div style={{ display: "flex", marginTop: 2 }}>
                    <div style={{ marginLeft: 5 }}>8.</div>
                    <div style={{ marginLeft: 10 }}>
                    Except for obligations with respect to cars, on obligations incurred by either or both of us during our marriage or domestic partnership, we owe no more than $6,000.</div>
                </div>
                <div style={{ display: "flex", marginTop: 2 }}>
                    <div style={{ marginLeft: 5 }}>9.</div>
                    <div style={{ marginLeft: 10 }}>
                    The total fair market value of community property assets, not including what we owe on those assets and not including cars, is less than $45,000.</div>
                </div>
                <div style={{ display: "flex", marginTop: 2 }}>
                    <div style={{ marginLeft: 5 }}>10.</div>
                    <div style={{ marginLeft: 10 }}>
                    Neither of us has separate property assets, not including what we owe on those assets and not including cars, in excess of
                    $45,000.
                </div>
                </div>
                <div style={{ display: "flex", marginTop: 2 }}>
                    <div style={{ marginLeft: 5 }}>11.</div>
                    <div style={{ marginLeft: 10 }}>
                    We each have filled out and given the other an Income and Expense Declaration
                    <a href="FL-105" target="_blank" style={{color:"blue"}}>(form FL-105)</a>
                </div>
                </div>
                <div style={{ display: "flex", marginTop: 2 }}>
                    <div style={{ marginLeft: 5 }}>12.</div>
                    <div style={{ marginLeft: 10 }}>
                    We have complied with the preliminary disclosure requirements as follows:
                </div>
                </div>
                <div style={{ display: "flex", marginTop: 10 }}>
                    <div style={{ marginLeft: 25 }}>a.</div>
                    <div style={{ marginLeft: 5 }}>
                        <label>We each have disclosed information about the value and division of our property by filling out and giving each other copies of the documents listed in (1) or (2) below (specify):</label>
                    </div>
                </div>
                <div style={{ display: "flex", marginTop: 2 }}>
                {/* <div style={{ marginLeft: 5 }}>2.</div> */}
                    <div style={{ marginLeft: 20 }}>(1)</div>
                    <div style={{ marginLeft: 5 }}>
                    <input type="checkbox" size={10} style={{ marginLeft: "10px" }} />
                     <label>The worksheets on pages 7, 9, and 11 of the Summary Dissolution Information booklet</label>
                     <a href="FL-105" target="_blank" style={{color:"blue"}}>(form FL-810)</a>
                    </div>
                </div>
                <div style={{ display: "flex", marginTop: 10 }}>
                    <div style={{ marginLeft: 25 }}>(2)</div>
                    <div style={{ marginLeft: 5 }}>
                    <input type="checkbox" size={10} style={{ marginLeft: "10px" }} />
                        <label>(2)	A Declaration of Disclosure <a href="FL-140" target="_blank" style={{color:"blue"}}>(form FL-140)</a>, a Schedule of Assets and Debts <a href="FL-142" target="_blank" style={{color:"blue"}}>(form FL-142)</a>, or Property Declaration<a href="FL-160" target="_blank" style={{color:"blue"}}>(form FL-160)</a>, and all attachments to these forms.
                            </label>
                    </div>
                </div>
                <div style={{ display: "flex", marginTop: 10 }}>
                    <div style={{ marginLeft: 25 }}>b.</div>
                    <div style={{ marginLeft: 5 }}>
                        <label>We have told each other in writing about any investment, business, or other income-producing opportunities that came up after we were separated based on investments made or work done during the marriage or domestic partnership and before our separation.</label>
                    </div>
                </div>
                <div style={{ display: "flex", marginTop: 10 }}>
                    <div style={{ marginLeft: 25 }}>c.</div>
                    <div style={{ marginLeft: 5 }}>
                        <label>We have exchanged all tax returns each of us has filed within the two years before disclosing the information described in 12a.</label>
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
                        <li>Judicial Council of California</li>
                        <li>FL-800 [Rev. January 1, 2019]</li>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <h3><b>JOINT PETITION FOR SUMMARY DISSOLUTION</b></h3>
                        <label style={{ textAlign: "center", fontWeight: "bold" }}>
                        (Family Law—Summary Dissolution)
                        </label>
                    </div>
                    <div style={{ listStyle: "none" }}>
                        <li>Family Code, § 299, 2109, 2320, 2400-2406</li>
                        <li>www.courts.ca.gov</li>
                    </div>
                    <div style={{ listStyle: "none" }}>
                        <li>Page 1 of 2</li>
                    </div>
                </div>
                <br /><br />
                <table style={{ width: "100%", border: "2px solid black", borderCollapse: "collapse" }}>
                    <tbody>
                        <tr>
                            <td style={{ border: "2px solid black", borderCollapse: "collapse" }}>
                                <div style={{ marginLeft: "1.2rem" }}>
                                    <label htmlFor="name">PETITIONER 1:</label>
                                    <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginTop: "5px",width:"85%" }} type="text" id="name" />
                                </div>
                                <div style={{ marginLeft: "1.2rem" }}>
                                    <label htmlFor="street">PETITIONER 2:</label>
                                    <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginTop: "5px",width:"85%" }} type="text" id="street" />
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
                <div style={{ display: "flex", marginTop: 2 }}>
                    <div style={{ marginLeft: 5 }}>13.</div>
                    <div style={{ marginLeft: 10 }}>
                    <i>(Check whichever statement is true.)</i>
                </div>
                </div>
                <div style={{ display: "flex", marginTop: 10 }}>
                    <div style={{ marginLeft: 25 }}>a</div>
                    <div style={{ marginLeft: 5 }}>
                    <input type="checkbox" size={10} style={{ marginLeft: "10px" }} />
                        <label>We have no community assets or liabilities
                            </label>
                    </div>
                </div>
                <div style={{ display: "flex", marginTop: 10 }}>
                    <div style={{ marginLeft: 25 }}>b</div>
                    <div style={{ marginLeft: 5 }}>
                    <input type="checkbox" size={10} style={{ marginLeft: "10px" }} />
                        <label>We have signed an agreement listing and dividing all our community assets and liabilities and have signed all the papers necessary to carry out our agreement. A copy of our agreement is attached to the Judgment of Dissolution and Notice of Entry of Judgment (form FL-825).
                            </label>
                    </div>
                </div>
                <div style={{ display: "flex", marginTop: 2 }}>
                    <div style={{ marginLeft: 5 }}>14.</div>
                    <div style={{ marginLeft: 10 }}>
                    Irreconcilable differences have caused the irremediable breakdown of our marriage and/or domestic partnership, and each of us wishes to have the court dissolve our marriage and/or domestic partnership without our appearing before a judge.
                </div>
                </div>
                <div style={{ display: "flex", marginTop: 2 }}>
                    <div style={{ marginLeft: 5 }}>15.</div>
                </div>
                <div style={{ display: "flex", marginTop: 10 }}>
                    <div style={{ marginLeft: 25 }}>a</div>
                    <div style={{ marginLeft: 5 }}>
                    <input type="checkbox" size={10} style={{ marginLeft: "10px" }} />
                        <label>Petitioner 1 desires to have his or her former name restored. That name is (specify):
                            </label>
                    </div>
                </div>
                <div style={{ display: "flex", marginTop: 10 }}>
                    <div style={{ marginLeft: 25 }}>b</div>
                    <div style={{ marginLeft: 5 }}>
                    <input type="checkbox" size={10} style={{ marginLeft: "10px" }} />
                        <label>Petitioner 2 desires to have his or her former name restored. That name is (specify):
                            </label>
                    </div>
                </div>
                <div style={{ display: "flex", marginTop: 2 }}>
                    <div style={{ marginLeft: 5 }}>16.</div>
                    <div style={{ marginLeft: 10 }}>
                    We each give up our rights to appeal and to move for a new trial after the effective date of our Judgment of Dissolution.
                </div>
                </div>
                <div style={{ display: "flex", marginTop: 2 }}>
                    <div style={{ marginLeft: 5 }}>17.</div>
                    <div style={{ marginLeft: 10 }}>
                    <b>Each of us forever gives up any right to spousal or partner support from the other.</b>
                </div>
                </div>
                <div style={{ display: "flex", marginTop: 2 }}>
                    <div style={{ marginLeft: 5 }}>18.</div>
                    <div style={{ marginLeft: 10 }}>
                    We each agree to keep the court and each other informed of any change of mailing address or phone number occurring within six months from the filing of this joint petition using the Notice of Change of Address or Other Contact Information (form MC-040).
                </div>
                </div>
                <div style={{ display: "flex", marginTop: 2 }}>
                    <div style={{ marginLeft: 5 }}>19.</div>
                    <div style={{ marginLeft: 10 }}>
                    We are submitting the original and three copies of the proposed Judgment of Dissolution and Notice of Entry of Judgment (form FL-825) and two stamped envelopes together with this petition. One envelope is addressed to Petitioner 1 and the other to Petitioner 2.
                </div>
                </div>
                <div style={{ display: "flex", marginTop: 2 }}>
                    <div style={{ marginLeft: 5 }}>20.</div>
                    <div style={{ marginLeft: 10 }}>
                    We agree that this matter may be determined by a commissioner sitting as a temporary judge.
                </div>
                </div>
                <div style={{ display: "flex", marginTop: 10 }}>
                <div style={{ marginLeft: 5 }}>21.</div>
                    <div style={{ marginLeft: 50 }}>
                        <div><b>Mailing address of Petitioner 1</b></div>
                        Name: <input size={40} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                    </div>
                    <div style={{ marginLeft: 50 }}>
                        <div>22. <b> Mailing address of Petitioner 2</b></div>
                       Name:
                        <input size={40} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                    </div>
                </div>
                <div style={{ display: "flex", marginTop: 10 }}>
                    <div style={{ marginLeft: 60 }}>
                        Address: <input size={40} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                    </div>
                    <div style={{ marginLeft: 35 }}>
                    Address:
                        <input size={40} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                    </div>
                </div>
                <div style={{ display: "flex", marginTop: 10 }}>
                    <div style={{ marginLeft: 89 }}>
                        City: <input size={40} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                    </div>
                    <div style={{ marginLeft: 65 }}>
                    City:
                        <input size={40} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                    </div>
                </div>
                <div style={{ display: "flex", marginTop: 10 }}>
                    <div style={{ marginLeft: 80 }}>
                        State: <input size={40} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                    </div>
                    <div style={{ marginLeft: 56 }}>
                        State:
                        <input size={40} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                    </div>
                </div>
                <div style={{ display: "flex", marginTop: 10 }}>
                    <div style={{ marginLeft: 50 }}>
                        Zip Code: <input size={40} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                    </div>
                    <div style={{ marginLeft: 30 }}>
                    Zip Code:
                        <input size={40} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                    </div>
                </div>
                <div style={{ display: "flex", marginTop: 10 }}>
                <div style={{ marginLeft: 5 }}>23.</div>
                    <div style={{ marginLeft: 15 }}>
                Number of Pages attached: <input size={6} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                    </div>
                    </div>
                    <div style={{ display: "flex", marginTop: 10 }}>
                    <div style={{ marginLeft: 50 }}>
                        <div>I declare under penalty of perjury under the laws of the State of California that the foregoing and all attached documents are true and correct.</div>
                        Date: <input size={40} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                    </div>
                    <div style={{ marginLeft: 50 }}>
                        <div>I declare under penalty of perjury under the laws of the State of California that the foregoing and all attached documents are true and correct.</div>
                       Date:
                        <input size={40} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" id="street" />
                    </div>
                </div>
                <div
                        style={{ display: "flex", justifyContent: "space-between", margin: 3}}
                    >
                        <div>
                            <input
                            style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginLeft: "87px" }}
                            name={"SignatureOfPetitioner"}
                            type="text" size={40} id="fax" />{" "}
                            <div style={{marginLeft:'100px'}}>(SIGNATURE OF PETITIONER 1)</div>
                        </div>
                        <div>
                        <input 
                        style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginRight: "132px" }}
                        name={"SignatureOfPetitioner"}
                        type="text" size={40} id="fax" />{" "}
                            <div>(SIGNATURE OF PETITIONER 2)</div>
                        </div>
                    </div><br />
                    <div style={{justifyContent:'center',alignItems:'center',display:'flex'}}><b>NOTICES</b></div>
                    <div style={{border:'2px solid black', width:'98%', height:'' , marginLeft:'15px',padding:'10px', }}><b>Your marriage and/or domestic partnership will end six months from the date of
                         filing this joint petition. Both petitioners will receive a stamped copy from the court of the Judgment of Dissolution and Notice of Entry of Judgment (from FL-825) stating
                          the effective date of your dissolution. Until the effective date specified on form FL-825 for the dissolution of your marriage and/or domestic partnership, either one of
                           you can stop this joint petition by filing a Notice of Revocation of Petition for Summary Dissolution<a href="FL-140" target="_blank" style={{color:"blue"}}>(form FL-830)</a>. If you stop this joint petition, you will STILL be
                            married or in a domestic partnership.</b> </div>
                    <div style={{border:'2px solid black', width:'98%', height:'' , marginLeft:'15px',padding:'10px',marginTop:'5px'}}>Dissolution may automatically cancel the rights of 
                        a spouse or domestic partner under the other spouse’s or domestic partner’s will, trust, retirement plan, power of attorney, pay-on-death bank account, 
                        transfer-on-death vehicle registration, survivorship rights to any property owned in joint tenancy, and any other similar instrument. It does not 
                        automatically cancel the rights of a spouse or domestic partner as beneficiary of the other spouse’s or domestic partner's life insurance policy. 
                        You should review these matters, as well as any credit card accounts, other credit accounts, insurance policies, and credit reports to determine 
                        whether they should be changed or whether you should take any other actions. However, some changes may require the agreement of your spouse or 
                        domestic partner or a court order. (See Fam. Code, §§ 231–235.)
                    </div><br /><br />
                    <hr style={{ width: "100%" }} />
                <div
                    className="footer"
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div style={{ listStyle: "none" }}>
                        <li>Form Approved for Optional Use</li>
                        <li>Judicial Council of California</li>
                        <li>FL-800 [Rev. January 1, 2019]</li>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <h3><b>JOINT PETITION FOR SUMMARY DISSOLUTION</b></h3>
                        <label style={{ textAlign: "center", fontWeight: "bold" }}>
                        (Family Law—Summary Dissolution)
                        </label>
                    </div>
                    <div style={{ listStyle: "none" }}>
                        <li>Family Code, § 299, 2109, 2320, 2400-2406</li>
                        <li>www.courts.ca.gov</li>
                    </div>
                    <div style={{ listStyle: "none" }}>
                        <li>Page 2 of 2</li>
                    </div>
                    
                </div>
                
            </div>
        </>





    )
}
