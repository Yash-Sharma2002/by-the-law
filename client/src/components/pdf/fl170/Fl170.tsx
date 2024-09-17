import React from 'react'
import SUPFl170 from "./SU170";
export default function () {
    const [details, setDetails] = React.useState<SUPFl170>(
        {} as SUPFl170
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
            
            <h3 style={{ display: 'flex', marginBottom: '0',alignContent:'end' }}>FL-170 </h3>
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
                            <div className=' justify-center items-center w-full mr-9'>
                                <div className='flex justify-end' style={{ width: "inherit", marginRight: "-45px" }}>
                                    <label style={{ fontSize: "10px" }} htmlFor="telephone">FIRST NAME:</label>
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", height: "18px", margin: "0px 2px", }} className='w-[25%]' id="telephone" />
                                </div>
                            </div>
                            <div className='flex justify-end items-center w-full m-1'>
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
                            <div style={{ fontSize: "12px", letterSpacing: "1px" }}>
                              <b>DECLARATION FOR DEFAULT OR UNCONTESTED</b>
                                <form >
                                    <label>
                                        <input  type="checkbox" /> DISSOLUTION
                                    </label>
                                    
                                </form>
                                <form >
                                    <label>
                                        <input  type="checkbox" /> LEGAL SEPARATION
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
            <br />
                <div><b>(NOTE: Items 1 through 12 apply to both dissolution and legal separation proceedings.)</b></div>
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
                            I declare that if I appeared in court and were sworn, I would testify to the truth of the facts in this declaration.
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
                                2.
                            </td>
                            <td width="95%" valign="top">
                            I agree that my case will be proven by this declaration and that I 
                            will not appear before the court unless I am ordered by the court to do so.
                            </td>
                        </tr>
                        </tbody>
                        </table>
                        <div className="p-4">
      <div className="mb-4">
        <p className="mb-2">
          <strong>3.</strong> All the information in the 
          <input type="checkbox" className="ml-2 mr-2" /> 
          amended 
          <input type="checkbox" className="ml-2 mr-2" /> 
          Petition 
          <input type="checkbox" className="ml-2 mr-2" /> 
          Response is true and correct.
        </p>
      </div>
      <div className="mb-4">
        <p className="mb-2">
          <strong>4. Type of case (check a, b, or c):</strong>
        </p>
        <div className="ml-4 mb-4">
          <label className="block mb-2">
             a. <input type="checkbox" className="mr-2" /> Default without agreement
          </label>
          <div className="ml-6 mb-4">
            <label className="block mb-2">
               (1) No response has been filed and there is no written agreement or stipulated judgment between the parties;
            </label>
            <label className="block mb-2">
               (2) The default of the respondent was entered or is being requested, and I am not seeking any relief not requested in the petition; and
            </label>
            <label className="block mb-2">
               (3) The following statement is true (check one):
            </label>
            <div className="ml-6 mb-4">
              <label className="block mb-2">
                <input type="checkbox" className="mr-2" /> (A) There are no assets or debts to be disposed of by the court.
              </label>
              <label className="block mb-2">
                <input type="checkbox" className="mr-2" /> (B) The community and quasi-community assets and debts are listed on the <strong>completed current Property Declaration</strong> (form FL-160), which includes an estimate of the value of the assets and debts that I propose to be distributed to each party. The division in the proposed <strong>Judgment</strong> (form FL-180) is a fair and equal division of the property and debts, or if there is a negative estate, the debts are assigned fairly and equitably.
              </label>
            </div>
          </div>
        </div>
        <div className="ml-4 mb-4">
          <label className="block mb-2">
             b. <input type="checkbox" className="mr-2" /> Default with agreement
          </label>
          <div className="ml-6 mb-4">
            <label className="block mb-2">
               (1) No response has been filed and the parties have agreed that the matter may proceed as a default matter without notice;
            </label>
            <label className="block mb-2">
               (2) The parties have entered into a written agreement regarding their property and their marriage or domestic partnership rights, including support, the original of which is being or has been submitted to the court. I request that the court approve the agreement.
            </label>
          </div>
        </div>
        <div className="ml-4 mb-4">
          <label className="block mb-2">
             c. <input type="checkbox" className="mr-2" /> Uncontested
          </label>
          <div className="ml-6 mb-4">
            <label className="block mb-2">
              <input type="checkbox" className="mr-2" /> (1) Both parties have appeared in the case; and
            </label>
            <label className="block mb-2">
              <input type="checkbox" className="mr-2" /> (2) The parties have entered into a written agreement regarding their property and their marriage or domestic partnership rights, including support, the original of which is being or has been submitted to the court. I request that the court approve the agreement.
            </label>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <p className="mb-2">
          <strong>5. Declaration of disclosure (check a, b, or c):</strong>
        </p>
        <div className="ml-4 mb-4">
          <label className="block mb-2">
            a. <input type="checkbox" className="mr-2" /> Both the parties have filed, or are filing concurrently, a <strong>Declaration Regarding Service of Declaration of Disclosure</strong> (form FL-141) and an <strong>Income and Expense Declaration</strong> (form FL-150).
          </label>
        </div>
        <div className="ml-4 mb-4">
          <label className="block mb-2">
             b. <input type="checkbox" className="mr-2" /> This matter is proceeding by default. I am the petitioner in this action and have filed a proof of service of the preliminary <strong>Declaration of Disclosure</strong> (form FL-140) with the court. I hereby waive receipt of the final <strong>Declaration of Disclosure</strong> (form FL-140) from the respondent.
          </label>
        </div>
        <div className="ml-4 mb-4">
          <label className="block mb-2">
             c. <input type="checkbox" className="mr-2" /> This matter is proceeding by default. I am the petitioner in this action, and service of the summons on respondent was effected by publication or posting order. Service of the preliminary <strong>Declaration of Disclosure</strong> (form FL-140) is not required. I hereby waive receipt of the final <strong>Declaration of Disclosure</strong> (form FL-140) from the respondent.
          </label>
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
                        <div> FL-170 [Rev. January 17, 2020]</div>
                    </div>
                    <div style={{ }}>
                        <div style={{ marginLeft:"5px" , fontWeight: "bold" }}>
                        DECLARATION FOR DEFAULT OR UNCONTESTED DISSOLUTION OR LEGAL SEPARATION (Family Law)
                        </div>

                    </div>
                    <div style={{ listStyle: "none", fontSize:'10px' }}>
                        <div>Family Code, § 2336 </div>
                        <div> www.courtinfo.ca.gov</div>
                    </div>
                    <div style={{ listStyle: "none", fontWeight: "bold",fontSize:'12px' }}>
                    <li>Page 1 of 3</li>
                    </div>
                </div><br />

                <table style={{ width: "100%", border: "2px solid black", borderCollapse: "collapse" }}>
                    <tbody>
                        <tr>
                            <td style={{ border: "2px solid black", borderCollapse: "collapse" }}>
                                <div style={{ marginLeft: "1.2rem" }}>
                                    <label htmlFor="name">PETITIONER:</label>
                                    <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginTop: "5px",width:"83%" }} type="text" id="name" />
                                </div>
                                <div style={{ marginLeft: "1.2rem" }}>
                                    <label htmlFor="street">RESPONDENT:</label>
                                    <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginTop: "5px",width:"75%" }} type="text" id="street" />
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
                <br />
                <div className="mb-4">
                <div className="ml-4 mb-4">
          <label className="block mb-2">
            d.<input type="checkbox" className="mr-2" /> This matter is proceeding as an uncontested action. Service of the final Declaration of 
            Disclosure (form FL-140) is mutually waived by both parties. A waiver provision executed by both parties under penalty of perjury is 
            contained on the Stipulation and Waiver of Final Declaration of Disclosure (form FL-144), in the settlement agreement or proposed judgment, or in another, separate stipulation.
          </label>
        </div>
        </div>
                <div className="p-4">
      <div className="mb-4">
        <p className="mb-2">
          <strong>6.</strong> <input type="checkbox" className="mr-2" /> Child custody and visitation (parenting time) should be ordered as set forth in the proposed Judgment (form FL-180).
        </p>
        <div className="ml-4 mb-4">
          <label className="block mb-2">
            a. <input type="checkbox" className="mr-2" /> The information in Declaration Under Uniform Child Custody Jurisdiction and Enforcement Act (UCCJEA) (form FL-105)
          </label>
          <div className="ml-6 mb-4">
            <label className="block mb-2">
              <input type="checkbox" className="mr-2" /> has <input type="checkbox" className="ml-2 mr-2" /> has not changed since it was last filed with the court. (If changed, attach updated form.)
            </label>
            <label className="block mb-2">
              b.<input type="checkbox" className="mr-2" /> There is an existing court order for custody/parenting time in another case in (county): <input style={{backgroundColor: "rgb(225, 243, 243)"}} type="text" className="border ml-2" placeholder="Specify" />
            </label>
            <label className="block mb-2">
              The case number is (specify): <input style={{backgroundColor: "rgb(225, 243, 243)"}} type="text" className="border ml-2" placeholder="Specify" />
            </label>
          </div>
          <label className="block mb-2">
             c. <input type="checkbox" className="mr-2" /> The current custody and visitation (parenting time) previously ordered in this case, or the current schedule is (specify):
          </label>
          <textarea style={{backgroundColor: "rgb(225, 243, 243)"}} className="border ml-6 w-full h-16 mb-4"></textarea>
          <label className="block mb-2">
            <input type="checkbox" className="mr-2" /> Contained on Attachment 6c.
          </label>
          <label className="block mb-2">
             d. <input type="checkbox" className="mr-2" /> The facts that support the requested judgment are (In a default case, state your reasons below):
          </label>
          <textarea style={{backgroundColor: "rgb(225, 243, 243)"}} className="border ml-6 w-full h-16 mb-4"></textarea>
          <label className="block mb-2">
            <input type="checkbox" className="mr-2" /> Contained on Attachment 6d.
          </label>
        </div>
      </div>
      <div className="mb-4">
        <p className="mb-2">
          <strong>7.</strong> <input type="checkbox" className="mr-2" /> Child support should be ordered as set forth in the proposed Judgment (form FL-180).
        </p>
        <div className="ml-4 mb-4">
          <label className="block mb-2">
            <input type="checkbox" className="mr-2" /> a. If there are minor children, check and complete item (1) if applicable and then item (2) or (3):
          </label>
          <div className="ml-6 mb-4">
            <label className="block mb-2">
              (1) <input type="checkbox" className="mr-2" /> Child support is being enforced in another case in (county): <input style={{backgroundColor: "rgb(225, 243, 243)"}} type="text" className="border ml-2" placeholder="Specify" />
            </label>
            <label className="block mb-2">
              The case number is (specify): <input style={{backgroundColor: "rgb(225, 243, 243)"}} type="text" className="border ml-2" placeholder="Specify" />
            </label>
            <label className="block mb-2">
              (2) <input type="checkbox" className="mr-2" /> The information in the child support calculation attached to the proposed judgment is correct based on my personal knowledge.
            </label>
            <label className="block mb-2">
              (3) <input type="checkbox" className="mr-2" /> I request that this order be based on the <input type="checkbox" className="ml-2 mr-2" /> Petitioner's <input type="checkbox" className="ml-2 mr-2" /> Respondent's earning ability. The facts in support of my estimate of earning ability are (specify):
            </label>
            <textarea style={{backgroundColor: "rgb(225, 243, 243)"}} className="border ml-6 w-full h-16 mb-4"></textarea>
            <label className="block mb-2">
              <input type="checkbox" className="mr-2" /> Contained on Attachment 7a(3).
            </label>
          </div>
          <label className="block mb-2">
            b. Complete items (1) and (2) regarding public assistance.
          </label>
          <div className="ml-6 mb-4">
            <label className="block mb-2">
              (1) I <input type="checkbox" className="ml-2 mr-2" /> am receiving <input type="checkbox" className="ml-2 mr-2" /> am not receiving <input type="checkbox" className="ml-2 mr-2" /> intend to apply for public assistance for the child or children listed in the proposed order.
            </label>
            <label className="block mb-2">
              (2) To the best of my knowledge, the other party <input type="checkbox" className="ml-2 mr-2" /> is <input type="checkbox" className="ml-2 mr-2" /> is not receiving public assistance.
            </label>
            <label className="block mb-2">
              <input type="checkbox" className="mr-2" /> Petitioner <input type="checkbox" className="ml-2 mr-2" /> Respondent is presently receiving public assistance, and all support should be made payable to the local child support agency at the address set forth in the proposed judgment. A representative of the local child support agency has signed the proposed judgment.
            </label>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <p className="mb-2">
          <strong>8.</strong> <input type="checkbox" className="mr-2" /> Spousal, Partner, and Family Support (If a support order or attorney fees are requested, submit a completed Income and Expense Declaration (form FL-150) unless a current form is on file. Include your best estimate of the other party's income. Check at least one of the following.)
        </p>
        <div className="ml-4 mb-4">
          <label className="block mb-2">
            a.  <input type="checkbox" className="mr-2" />I knowingly give up forever any right to receive spousal or partner support.
          </label>
          <label className="block mb-2">
             b. <input type="checkbox" className="mr-2" /> I ask the court to reserve jurisdiction to award spousal or partner support in the future to:
          </label>
          <div className="ml-6 mb-4">
            <label className="block mb-2">
              <input type="checkbox" className="mr-2" /> Petitioner
            </label>
            <label className="block mb-2">
              <input type="checkbox" className="mr-2" /> Respondent
            </label>
          </div>
          <label className="block mb-2">
             c. <input type="checkbox" className="mr-2" /> I ask the court to terminate forever spousal or partner support for: 
          </label>
          <div className="ml-6 mb-4">
            <label className="block mb-2">
              <input type="checkbox" className="mr-2" /> Petitioner
            </label>
            <label className="block mb-2">
              <input type="checkbox" className="mr-2" /> Respondent
            </label>
          </div>
          <label className="block mb-2">
             d.<input type="checkbox" className="mr-2" /> Spousal support or domestic partner support should be ordered as set forth in the proposed Judgment (form FL-180) based on the factors described in:
          </label>
          <div className="ml-6 mb-4">
            <label className="block mb-2">
              <input type="checkbox" className="mr-2" /> Spousal or Partner Support Declaration Attachment (form FL-157)
            </label>
            <label className="block mb-2">
              <input type="checkbox" className="mr-2" /> written agreement
            </label>
            <label className="block mb-2">
              <input type="checkbox" className="mr-2" /> attached declaration (Attachment 8d)
            </label>
          </div>
          
          <label className="block mb-2">
             e. <input type="checkbox" className="mr-2" /> Family support should be ordered as set forth in the proposed Judgment (form FL-180).
          </label>
          <label className="block mb-2">
             f. <input type="checkbox" className="mr-2"  /> Other (specify):
          </label>
          <textarea style={{backgroundColor: "rgb(225, 243, 243)"}} className="border ml-6 w-full h-16 mb-4 bg-rgb(225, 243, 243)"></textarea>
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
                        <div> FL-170 [Rev. January 17, 2020]</div>
                    </div>
                    <div style={{ }}>
                        <div style={{ marginLeft:"5px" , fontWeight: "bold" }}>
                        DECLARATION FOR DEFAULT OR UNCONTESTED DISSOLUTION OR LEGAL SEPARATION (Family Law)
                        </div>

                    </div>
                    <div style={{ listStyle: "none", fontSize:'10px' }}>
                        <div>Family Code, § 2336</div>
                        <div> www.courtinfo.ca.gov</div>
                    </div>
                    <div style={{ listStyle: "none", fontWeight: "bold",fontSize:'12px' }}>
                    <li>Page 2 of 3</li>
                    </div>
                </div><br />
                

                <table style={{ width: "100%", border: "2px solid black", borderCollapse: "collapse" }}>
                    <tbody>
                        <tr>
                            <td style={{ border: "2px solid black", borderCollapse: "collapse" }}>
                                <div style={{ marginLeft: "1.2rem" }}>
                                    <label htmlFor="name">PETITIONER:</label>
                                    <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginTop: "5px",width:"75%" }} type="text" id="name" />
                                </div>
                                <div style={{ marginLeft: "1.2rem" }}>
                                    <label htmlFor="street">RESPONDENT:</label>
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
                <br />
                <div className="p-4">
      {/* Item 9 */}
      <div className="mb-4 p-4">
        <p className="mb-2">
          <strong>9.</strong> <input type="checkbox" className="mr-2" /> Parentage of the children of the petitioner and respondent born prior to their marriage or domestic partnership should be ordered as set forth in the proposed <em>Judgment</em> (form FL-180).
        </p>
        <div className="ml-4 mb-4">
          <label className="block mb-2  p-2">
            <input type="checkbox" className="mr-2" /> a. A voluntary declaration of parentage or paternity is attached.
          </label>
          <div className="ml-6 mb-4 p-2">
            <label className="block mb-2">
              <input type="checkbox" className="mr-2" /> b. Parentage was previously established by the court in (county): <input style={{backgroundColor: "rgb(225, 243, 243)"}} type="text" className="border ml-2" placeholder="Specify" />
            </label>
            <label className="block mb-2">
              The case number is (specify): <input style={{backgroundColor: "rgb(225, 243, 243)"}} type="text" className="border ml-2" placeholder="Specify" />
            </label>
          </div>
          <label className="block mb-2  p-2">
            <input type="checkbox" className="mr-2" /> The written agreement of the parties regarding parentage is attached here (Attachment 9b) or to the proposed <em>Judgment</em> (form FL-180).
          </label>
        </div>
      </div>
      {/* Item 10 */}
      <div className="mb-4  p-4">
        <p className="mb-2">
          <strong>10.</strong> <input type="checkbox" className="mr-2" /> Attorney fees should be ordered as set forth in the proposed <em>Judgment</em> (form FL-180).
        </p>
        <div className="ml-4 mb-4">
          <label className="block mb-2  p-2">
            <input type="checkbox" className="mr-2" /> The facts in support of this request are on <em>Request for Attorney's Fees and Costs Attachment</em> (form FL-319).
          </label>
          <label className="block mb-2  p-2">
            <input type="checkbox" className="mr-2" /> Other (specify facts below):
          </label>
          <textarea style={{backgroundColor: "rgb(225, 243, 243)"}} className="border ml-6 w-full h-16 mb-4"></textarea>
        </div>
      </div>
      {/* Item 11 */}
      <div className="mb-4  p-4">
        <p className="mb-2">
          <strong>11.</strong> <input type="checkbox" className="mr-2" /> The judgment should be entered nunc pro tunc for the following reasons (specify):
        </p>
        <textarea style={{backgroundColor: "rgb(225, 243, 243)"}} className="border ml-6 w-full h-16 mb-4"></textarea>
      </div>
      {/* Item 12 */}
      <div className="mb-4  p-4">
        <p className="mb-2">
          <strong>12.</strong> <input type="checkbox" className="mr-2" /> Petitioner <input type="checkbox" className="ml-2 mr-2" /> Respondent requests restoration of the former name as set forth in the proposed <em>Judgment</em> (form FL-180) (proceedings for dissolution or nullity of marriage only).
        </p>
      </div>
      {/* Item 13 */}
      <div className="mb-4 p-4">
        <p className="mb-2">
          <strong>13.</strong> Irreconcilable differences have led to the irremediable breakdown of the marriage or domestic partnership, and there is no possibility of saving the marriage or domestic partnership through counseling or other means.
        </p>
      </div>
      {/* Item 14 */}
      <div className="mb-4 p-4">
        <p className="mb-2">
          <strong>14.</strong> This declaration may be reviewed by a commissioner sitting as a temporary judge, who may determine whether to grant this request or require my appearance under Family Code section 2336.
        </p>
      </div>
      {/* Dissolution Statement */}
      <div className="mb-4  p-4">
        <p className="mb-2 font-bold">
          STATEMENTS IN THIS BOX APPLY ONLY TO DISSOLUTIONS
        </p>
        <div className="ml-4 mb-4">
          <p className="mb-2">
            <strong>15.</strong> If this is a dissolution of a marriage or domestic partnership created in another state, the petitioner or the respondent has been a resident of this county for at least three months and of the state of California for at least six months continuously and immediately preceding the date of the filing of the petition for dissolution of marriage or domestic partnership.
          </p>
          <p className="mb-2">
            <strong>16.</strong> I ask that the court grant the request for a judgment of dissolution of marriage or domestic partnership based on irreconcilable differences and that the court make the orders set forth in the proposed <em>Judgment</em> (form FL-180) submitted with this declaration.
          </p>
          <p className="mb-2">
            <strong>17.</strong> <input type="checkbox" className="mr-2" /> Status only judgment: This declaration is only for the termination of marital or domestic partner status. I ask the court to reserve jurisdiction over all other issues not requested in this declaration for later determination.
          </p>
        </div>
      </div>
      {/* Legal Separations Statement */}
      <div className="mb-4  p-4">
        <p className="mb-2 font-bold">
          THIS STATEMENT APPLIES ONLY TO LEGAL SEPARATIONS
        </p>
        <div className="ml-4 mb-4">
          <p className="mb-2">
            <strong>18.</strong> I ask that the court grant the request of a judgment for legal separation based on irreconcilable differences and that the court make the orders set forth in the proposed <em>Judgment</em> (form FL-180) submitted with this declaration.
          </p>
          <p className="mb-2">
            I understand that a judgment of legal separation does not terminate a marriage or domestic partnership, and that I am still married or a partner in a domestic partnership.
          </p>
        </div>
      </div>
      {/* Item 19 */}
      <div className="mb-4 p-4">
        <p className="mb-2">
          <strong>19.</strong> <input type="checkbox" className="mr-2" /> Other (specify):
        </p>
        <textarea style={{backgroundColor: "rgb(225, 243, 243)"}} className="border ml-6 w-full h-16 mb-4 "></textarea>
      </div>
      {/* Final Statement */}
      <div className="p-4">
        <p>
          I declare under penalty of perjury under the laws of the State of California that the foregoing is true and correct.
        </p>
      </div>
      <br />
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
                            <div>  (SIGNATURE OF DECLARANT)</div>
                        </div>
                    </div>
                </div>
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
                        <div> FL-170 [Rev. January 17, 2020]</div>
                    </div>
                    <div style={{ }}>
                        <div style={{ marginLeft:"5px" , fontWeight: "bold" }}>
                        DECLARATION FOR DEFAULT OR UNCONTESTED DISSOLUTION OR LEGAL SEPARATION
                            (Family Law)

                        </div>

                    </div>
                    <div style={{ listStyle: "none", fontSize:'10px' }}>
                        <div>Family Code, § 2336 </div>
                        <div> www.courtinfo.ca.gov</div>
                    </div>
                    <div style={{ listStyle: "none", fontWeight: "bold",fontSize:'12px' }}>
                    <li>Page 1 of 3</li>
                    </div>
                </div><br />
                </div>
                    
                

        
    )
};
