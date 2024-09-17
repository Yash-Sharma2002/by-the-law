import React from 'react'
import SUPFl150 from "./SU150";
export default function () {
    const [details, setDetails] = React.useState<SUPFl150>(
        {} as SUPFl150
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
            
            <h3 style={{ display: 'flex', marginBottom: '0',alignItems:'end' }}>FL-150 </h3>
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
                            <div className='flex justify-end items-center mt-1'>
                                <label htmlFor="street" style={{ fontSize: "10px" }}>OTHER PARTY/PARENT/CLAIMANT:</label>
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
                            <h3 style={{ textAlign: "center", padding: 10 }}>
                                <b>INCOME AND EXPENSE DECLARATION</b>
                                </h3>
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



                <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <form>
        <div style={{ marginBottom: '20px'}}>
          <h3>1. Employment</h3>
          <p style={{ marginLeft: '20px' }}>(Give information on your current job or, if you're unemployed, your most recent job.)</p>
          
          <div style={{display:'flex'}}>
          <div style={{width:'12%'}}><b>Attach copies of your pay stubs for last two months (black out Social Security numbers). </b></div>
          <div style={{ marginLeft: '40px' }}>
            <p>Attach copies of your pay stubs for last two months (black out Social Security numbers).</p>
            <div>
              <label>a. Employer: <input type="text" name="employer" style={{ width: '50%', backgroundColor: 'rgb(225, 243, 243)' }} /></label>
            </div>
            <div>
              <label>b. Employer's address: <input type="text" name="employerAddress" style={{ width: '50%', backgroundColor: 'rgb(225, 243, 243)' }} /></label>
            </div>
            <div>
              <label>c. Employer's phone number: <input type="text" name="employerPhoneNumber" style={{ width: '50%', backgroundColor: 'rgb(225, 243, 243)' }} /></label>
            </div>
            <div>
              <label>d. Occupation: <input type="text" name="occupation" style={{ width: '50%', backgroundColor: 'rgb(225, 243, 243)' }} /></label>
            </div>
            <div>
              <label>e. Date job started: <input type="date" name="dateJobStarted" style={{ width: '50%', backgroundColor: 'rgb(225, 243, 243)' }} /></label>
            </div>
            <div>
              <label>f. If unemployed, date job ended: <input type="date" name="dateJobEnded" style={{ width: '50%', backgroundColor: 'rgb(225, 243, 243)' }} /></label>
            </div>
            <div>
              <label>g. I work about <input type="text" name="hoursPerWeek" style={{ width: '10%', backgroundColor: 'rgb(225, 243, 243)' }} /> hours per week.</label>
            </div>
            <div>
              <label>h. I get paid $ <input type="text" name="grossIncome" style={{ width: '10%', backgroundColor: 'rgb(225, 243, 243)' }} /> gross (before taxes) <input type="checkbox" name="highSchoolCompleted" /> per month<input type="checkbox" name="highSchoolCompleted" />per week  <input type="checkbox" name="highSchoolCompleted" /> per hour.</label>
            </div>
          </div>
          </div>
          
          <p style={{ marginLeft: '20px', fontWeight: 'bold' }}>
            (If you have more than one job, attach an 8 1/2-by-11-inch sheet of paper and list the same information as above for your other jobs. Write "Question 1—Other Jobs" at the top.)
          </p>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3>2. Age and education</h3>
          <div style={{ marginLeft: '40px' }}>
            <div>
              <label>a. My age is (specify): <input type="text" name="age" style={{ width: '20%', backgroundColor: 'rgb(225, 243, 243)' }} /></label>
            </div>
            <div>
              <label>
                b. I have completed high school or the equivalent: 
                <input type="checkbox" name="highSchoolCompleted" /> Yes
                <input type="checkbox" name="highSchoolNotCompleted" /> No 
                If no, highest grade completed (specify): <input type="text" name="highestGradeCompleted" style={{ width: '20%', backgroundColor: 'rgb(225, 243, 243)' }} />
              </label>
            </div>
            <div>
              <label>c. Number of years of college completed (specify): <input type="text" name="collegeYearsCompleted" style={{ width: '20%', backgroundColor: 'rgb(225, 243, 243)' }} /></label>
            </div>
            <div>
              <label><input type="checkbox" name="highSchoolCompleted" />Degree(s) obtained (specify): <input type="text" name="collegeDegreeObtained" style={{ width: '50%', backgroundColor: 'rgb(225, 243, 243)' }} /></label>
            </div>
            <div>
              <label>d. Number of years of graduate school completed (specify): <input type="text" name="gradSchoolYearsCompleted" style={{ width: '20%', backgroundColor: 'rgb(225, 243, 243)' }} /></label>
            </div>
            <div>
              <label><input type="checkbox" name="highSchoolCompleted" />Degree(s) obtained (specify): <input type="text" name="gradSchoolDegreeObtained" style={{ width: '50%', backgroundColor: 'rgb(225, 243, 243)' }} /></label>
            </div>
            <div>
              <label>e. I have: <input type="checkbox" name="professionalLicense" /> professional/occupational license(s) (specify): <input type="text" name="licenseSpecify" style={{ width: '50%', backgroundColor: 'rgb(225, 243, 243)' }} /></label>
            </div>
            <div>
              <label><input type="checkbox" name="vocationalTraining" /> vocational training (specify): <input type="text" name="vocationalSpecify" style={{ width: '50%', backgroundColor: 'rgb(225, 243, 243)' }} /></label>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3>3. Tax information</h3>
          <div style={{ marginLeft: '40px' }}>
            <div>
              <label>a. <input type="checkbox" name="filedTaxes" /> I last filed taxes for tax year (specify year): <input type="text" name="taxYear" style={{ width: '20%', backgroundColor: 'rgb(225, 243, 243)' }} /></label>
            </div>
            <div>
              <label>
                b. My tax filing status is <input type="checkbox" name="single" /> single
                <input type="checkbox" name="headOfHousehold" /> head of household
                <input type="checkbox" name="marriedJointly" /> married, filing jointly with (specify name): <input type="text" name="jointlyWith" style={{ width: '20%', backgroundColor: 'rgb(225, 243, 243)' }} />
                <input type="checkbox" name="marriedSeparately" /> married, filing separately
              </label>
            </div>
            <div>
              <label>c. I file state tax returns in <input type="checkbox" name="stateCA" /> California <input type="checkbox" name="stateOther" /> other (specify state): <input type="text" name="otherState" style={{ width: '20%', backgroundColor: 'rgb(225, 243, 243)' }} /></label>
            </div>
            <div>
              <label>d. I claim the following number of exemptions (including myself) on my taxes (specify): <input type="text" name="exemptions" style={{ width: '20%', backgroundColor: 'rgb(225, 243, 243)' }} /></label>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3>4. Other party's income</h3>
          <div style={{ marginLeft: '40px' }}>
            <div>
              <label>I estimate the gross monthly income (before taxes) of the other party in this case at (specify): $<input type="text" name="otherPartyIncome" style={{ width: '20%', backgroundColor: 'rgb(225, 243, 243)' }} /></label>
            </div>
            <div>
              <label>This estimate is based on (explain): <textarea name="incomeExplanation" style={{ width: '100%', backgroundColor: 'rgb(225, 243, 243)' }} /></label>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
          <p>(If you need more space to answer any questions on this form, attach an 8 1/2-by-11-inch sheet of paper and write the question number before your answer.)</p>
          <div>
            <label>Number of pages attached: <input type="text" name="pagesAttached" style={{ width: '20%', backgroundColor: 'rgb(225, 243, 243)' }} /></label>
          </div>
          <p>I declare under penalty of perjury under the laws of the State of California that the information contained on all pages of this form and any attachments is true and correct.</p>
        </div>
      </form>
    </div>
    <div style={{ marginTop: '16px' }}>
            <p>Date: <input type="text" style={{ borderBottom: '1px solid black', width: '160px', marginLeft: '8px' }} /></p>
            <p style={{ marginTop: '16px' }}><input type="text" style={{ borderBottom: '1px solid black', width: '50%' }} placeholder="TYPE OR PRINT NAME" /></p>
            <p style={{ marginTop: '16px' }}><input type="text" style={{ borderBottom: '1px solid black', width: '50%' }} placeholder="SIGNATURE OF ATTORNEY FOR PETITIONER" /></p>
          </div><br />
          <hr style={{ width: "100%" }} />
                <div
                    className="footer"
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div style={{ listStyle: "none" , fontSize:'10px' }}>
                        <div>Form Approved for Optional Use</div>
                        <div>Judicial Council of California</div>
                        <div> FL-150 [Rev. January 1, 2019]</div>
                    </div>
                    <div style={{ }}>
                        <div style={{ marginLeft:"5px" , fontWeight: "bold" }}>
                        INCOME AND EXPENSE DECLARATION
                        {/* <div><h3>(Family Law—Uniform Parentage)</h3></div>  */}
                        </div>

                    </div>
                    <div style={{ listStyle: "none", fontSize:'10px' }}>
                        <div>Family Code, §§ 2030-2032, 2100-2113,3552,3620-3634, </div>
                        <div>4050-4046, 4300-4339</div>
                        <div> www.courtinfo.ca.gov</div>
                    </div>
                    <div style={{ listStyle: "none", fontWeight: "bold",fontSize:'12px' }}>
                    <li>Page 1 of 4</li>
                    </div>
                </div>
                <br />
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
                                <div style={{ marginLeft: "1.2rem" }}>
                                    <label htmlFor="street">OUTHER PARTY/PARENT/CLAIMANT:</label>
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
                <form>
            <div style={{ marginBottom: '20px' }}>
                <label style={{ marginLeft: '0', display: 'block' }}>
                    5. Income (For average monthly, add up all the income you received in each category in the last 12 months and divide the total by 12.)
                </label>
                <div style={{ marginLeft: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                        <label style={{ flex: 1 }}>a. Salary or wages (gross, before taxes)............................................................</label>
                        $<input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} placeholder="Last month" />
                        <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} placeholder="Average monthly" />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                        <label style={{ flex: 1 }}>b. Overtime (gross, before taxes).............................................................</label>
                        $<input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} placeholder="Last month" />
                        <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} placeholder="Average monthly" />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                        <label style={{ flex: 1 }}>c. Commissions or bonuses.................................................................</label>
                        $<input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} placeholder="Last month" />
                        <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} placeholder="Average monthly" />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                        <label style={{ flex: 1 }}>d. Public assistance (for example: TANF, SSI, GA/GR)</label>
                        <input type="checkbox" style={{ marginLeft: '10px' }} />
                        <label>currently receiving</label>
                        $<input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} placeholder="Last month" />
                        <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} placeholder="Average monthly" />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                        <label style={{ flex: 1 }}>e. Spousal support</label>
                        <input type="checkbox" style={{ marginLeft: '10px' }} />
                        <label>from this marriage</label>
                        <input type="checkbox" style={{ marginLeft: '10px' }} />
                        <label>from a different marriage</label>
                        <input type="checkbox" style={{ marginLeft: '10px' }} />
                        <label>federally taxable*</label>
                        $<input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} placeholder="Last month" />
                        <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} placeholder="Average monthly" />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                        <label style={{ flex: 1 }}>f. Partner support</label>
                        <input type="checkbox" style={{ marginLeft: '10px' }} />
                        <label>from this domestic partnership</label>
                        <input type="checkbox" style={{ marginLeft: '10px' }} />
                        <label>from a different domestic partnership</label>
                        $<input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} placeholder="Last month" />
                        <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} placeholder="Average monthly" />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                        <label style={{ flex: 1 }}>g. Pension/retirement fund payments..........................................................</label>
                        $<input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} placeholder="Last month" />
                        <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} placeholder="Average monthly" />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                        <label style={{ flex: 1 }}>h. Social Security retirement (not SSI)...........................................................</label>
                        $<input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} placeholder="Last month" />
                        <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} placeholder="Average monthly" />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                        <label style={{ flex: 1 }}>i. Disability:</label>
                        <input type="checkbox" style={{ marginLeft: '10px' }} />
                        <label>Social Security (not SSI)</label>
                        <input type="checkbox" style={{ marginLeft: '10px' }} />
                        <label>State disability (SDI)</label>
                        <input type="checkbox" style={{ marginLeft: '10px' }} />
                        <label>Private insurance</label>
                        $<input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} placeholder="Last month" />
                        <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} placeholder="Average monthly" />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                        <label style={{ flex: 1 }}>j. Unemployment compensation............................................................</label>
                        $<input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} placeholder="Last month" />
                        <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} placeholder="Average monthly" />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                        <label style={{ flex: 1 }}>k. Workers' compensation............................................................</label>
                        $<input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} placeholder="Last month" />
                        <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} placeholder="Average monthly" />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                        <label style={{ flex: 1 }}>l. Other (military allowances, royalty payments) (specify): ...........................................</label>
                        $<input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} placeholder="Last month" />
                        <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} placeholder="Average monthly" />
                    </div>
                </div>
            
            </div>
            <div style={{ marginBottom: '20px' }}>
                <label style={{ marginLeft: '0', display: 'block' }}>
                    6. Investment income (Attach a schedule showing gross receipts less cash expenses for each piece of property.)
                </label>
                <div style={{ marginLeft: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                        <label style={{ flex: 1 }}>a. Dividends/interest...................................................................</label>
                        $<input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} placeholder="Last month" />
                        <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} placeholder="Average monthly" />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                        <label style={{ flex: 1 }}>b. Rental property income..............................................................</label>
                        $<input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} placeholder="Last month" />
                        <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} placeholder="Average monthly" />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                        <label style={{ flex: 1 }}>c. Other (specify): ........................................................................</label>
                        $<input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} placeholder="Last month" />
                        <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} placeholder="Average monthly" />
                    </div>
                </div>
            </div>
            <div style={{ marginBottom: '20px' }}>
                <label style={{ marginLeft: '0', display: 'block' }}>
                    7. Income from self-employment, after business expenses for all businesses...................................... 
                    $<input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} placeholder="Last month" />
                        <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} placeholder="Average monthly" />
                </label>
                <div style={{ marginLeft: '20px' }}>
                    <label>I am the <input type="checkbox" /> owner/sole proprietor <input type="checkbox" /> business partner <input type="checkbox" /> other (specify): ...................................</label><br />
                    <label>Number of years in this business (specify): ...........................................................</label><br />
                    <label>Name of business (specify): ...........................................................</label><br />
                    <label>Type of business (specify): ...........................................................</label><br />
                    <label>Attach a profit and loss statement for the last two years or a Schedule C from your last federal tax return. Black out your Social Security number. If you have more than one business, provide the information above for each of your businesses.</label><br />
                </div>
            </div>
            <div style={{ marginBottom: '20px' }}>
                <label style={{ marginLeft: '0', display: 'block' }}>
                    8. Additional income. I received one-time money (lottery winnings, inheritance, etc.) in the last 12 months (specify source and amount): ...........................................................
                </label>
                <textarea style={{ backgroundColor: 'rgb(225, 243, 243)', width: '100%' }}></textarea>
            </div>
            <div style={{ marginBottom: '20px' }}>
                <label style={{ marginLeft: '0', display: 'block' }}>
                    9. Change in income. My financial situation has changed significantly over the last 12 months because (specify): ...........................................................
                </label>
                <textarea style={{ backgroundColor: 'rgb(225, 243, 243)', width: '100%' }}></textarea>
            </div>
            <div style={{ marginBottom: '20px' }}>
                <label style={{ marginLeft: '0', display: 'block' }}>10. Deductions</label>
                <div style={{ marginLeft: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                        <label style={{ flex: 1 }}>a. Required union dues...............................................................</label>
                        $<input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} placeholder="Last month" />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                        <label style={{ flex: 1 }}>b. Required retirement payments (not Social Security, FICA, 401(k), or IRA)........................</label>
                        $<input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} placeholder="Last month" />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                        <label style={{ flex: 1 }}>c. Medical, hospital, dental, and other health insurance premiums (total monthly amount)....................................</label>
                        $<input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} placeholder="Last month" />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                        <label style={{ flex: 1 }}>d. Child support that I pay for children from other relationships................................</label>
                        $<input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} placeholder="Last month" />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                        <label style={{ flex: 1 }}>e. Spousal support that I pay by court order from a different marriage</label>
                        <input type="checkbox" style={{ marginLeft: '10px' }} />
                        <label>federally tax deductible*</label>
                        $<input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} placeholder="Last month" />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                        <label style={{ flex: 1 }}>f. Partner support that I pay by court order from a different domestic partnership.....................................</label>
                        $<input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} placeholder="Last month" />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                        <label style={{ flex: 1 }}>g. Necessary job-related expenses not reimbursed by my employer (attach explanation labeled "Question 10g")........</label>
                        $<input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} placeholder="Last month" />
                    </div>
                </div>
                </div>
                <div style={{ marginBottom: '20px' }}>
                <label style={{ marginLeft: '0', display: 'block' }}>11. Assets</label>
                <div style={{ marginLeft: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                        <label style={{ flex: 1 }}>a. Cash and checking accounts, savings, credit union, money market, and other deposit accounts................................</label>
                        $<input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} placeholder="Total" />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                        <label style={{ flex: 1 }}>b. Stocks, bonds, and other assets I could easily sell.....................................</label>
                        $<input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} placeholder="Total" />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                        <label style={{ flex: 1 }}>c. All other property,</label>
                        <input type="checkbox" style={{ marginLeft: '10px' }} />
                        <label>(estimate fair market value minus the debts you owe)</label>
                        $<input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} placeholder="Total" />
                    </div>
                </div><br />
                <div>
                    *Check the box if the spousal support order or judgment was executed by the parties and the court beforejanuary 1, 2019, or if a court-order change maintains the spousal support payments as taxable income to the receipt and tax Deductible to the payor.
                </div>
            </div>
        </form>
        <hr style={{ width: "100%" }} />
                <div
                    className="footer"
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div style={{ listStyle: "none" , fontSize:'10px' }}>
                        <div>Form Approved for Optional Use</div>
                        <div>Judicial Council of California</div>
                        <div> FL-150 [Rev. January 1, 2019]</div>
                    </div>
                    <div style={{ }}>
                        <div style={{ marginLeft:"5px" , fontWeight: "bold" }}>
                        INCOME AND EXPENSE DECLARATION
                        {/* <div><h3>(Family Law—Uniform Parentage)</h3></div>  */}
                        </div>

                    </div>
                    <div style={{ listStyle: "none", fontSize:'10px' }}>
                        <div>Family Code, §§ 2030-2032, 2100-2113,3552,3620-3634, </div>
                        <div>4050-4046, 4300-4339</div>
                        <div> www.courtinfo.ca.gov</div>
                    </div>
                    <div style={{ listStyle: "none", fontWeight: "bold",fontSize:'12px' }}>
                    <li>Page 2 of 4</li>
                    </div>
                </div>
                <br />
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
                                <div style={{ marginLeft: "1.2rem" }}>
                                    <label htmlFor="street">OUTHER PARTY/PARENT/CLAIMANT:</label>
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
                <div style={{ margin: '20px', fontFamily: 'Arial, sans-serif', fontSize: '15px' }}>
                <div style={{ marginBottom: '20px' }}>
                <label style={{ marginLeft: '0', display: 'block' }}>
                    12. The following people live with me:
                </label>
                <div style={{ marginLeft: '20px' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '10px' }}>
                        <thead>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '5px', backgroundColor: 'rgb(225, 243, 243)' }}>Name</th>
                                <th style={{ border: '1px solid black', padding: '5px', backgroundColor: 'rgb(225, 243, 243)' }}>Age</th>
                                <th style={{ border: '1px solid black', padding: '5px', backgroundColor: 'rgb(225, 243, 243)' }}>How the person is related to me (ex: son)</th>
                                <th style={{ border: '1px solid black', padding: '5px', backgroundColor: 'rgb(225, 243, 243)' }}>That person's gross monthly income</th>
                                <th style={{ border: '1px solid black', padding: '5px', backgroundColor: 'rgb(225, 243, 243)' }}>Pays some of the household expenses?</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[...Array(5)].map((_, index) => (
                                <tr key={index}>
                                    <td style={{ border: '1px solid black', padding: '5px' }}>
                                        <input type="text" style={{ width: '100%', boxSizing: 'border-box',backgroundColor: 'rgb(225, 243, 243)'  }} />
                                    </td>
                                    <td style={{ border: '1px solid black', padding: '5px' }}>
                                        <input type="text" style={{ width: '100%', boxSizing: 'border-box',backgroundColor: 'rgb(225, 243, 243)'  }} />
                                    </td>
                                    <td style={{ border: '1px solid black', padding: '5px' }}>
                                        <input type="text" style={{ width: '100%', boxSizing: 'border-box',backgroundColor: 'rgb(225, 243, 243)'  }} />
                                    </td>
                                    <td style={{ border: '1px solid black', padding: '5px' }}>
                                        <input type="text" style={{ width: '100%', boxSizing: 'border-box',backgroundColor: 'rgb(225, 243, 243)' }} />
                                    </td>
                                    <td style={{ border: '1px solid black', padding: '5px' }}>
                                        <label style={{ marginRight: '10px' }}>
                                            <input type="radio" name={`expenses${index}`} /> Yes
                                        </label>
                                        <label>
                                            <input type="radio" name={`expenses${index}`} /> No
                                        </label>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                <label style={{ flex: 1 }}>13. Average monthly expenses</label>
                <div style={{ marginLeft: '10px', display: 'flex', alignItems: 'center' }}>
                    <label>Estimated expenses</label>
                    <input type="checkbox" style={{ margin: '0 5px' }} />
                    <label>Actual expenses</label>
                    <input type="checkbox" style={{ margin: '0 5px' }} />
                    <label>Proposed needs</label>
                    <input type="checkbox" style={{ margin: '0 5px' }} />
                </div>
            </div>

            <div style={{ marginLeft: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                    <label style={{ flex: 1 }}>a. Home:</label>
                </div>
                <div style={{ marginLeft: '40px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                        <label style={{ flex: 1 }}>(1) Rent or mortgage</label>
                        <input type="checkbox" style={{ margin: '0 5px' }} />
                        <label>Rent</label>
                        <input type="checkbox" style={{ margin: '0 5px' }} />
                        <label>Mortgage...................................</label>
                        $<input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} />
                    </div>
                    <div style={{ marginLeft: '40px', marginBottom: '5px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                            <label style={{ flex: 1 }}>If mortgage:</label>
                        </div>
                        <div style={{ marginLeft: '40px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                                <label style={{ flex: 1 }}>(a) average principal...................................</label>
                               $ <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} />
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                                <label style={{ flex: 1 }}>(b) average interest...................................</label>
                                $<input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} />
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px',marginLeft:'40px' }}>
                    <label style={{ flex: 1 }}>(2) Real property taxes...................................</label>
                    $<input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px',marginLeft:'40px' }}>
                    <label style={{ flex: 1 }}>(3) Homeowner's or renter's insurance...................................</label>
                    $<input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px',marginLeft:'40px' }}>
                    <label style={{ flex: 1 }}>(4) Maintenance and repair...................................</label>
                    $<input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                    <label style={{ flex: 1 }}>b. Health-care costs not paid by insurance...................................</label>
                    $<input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                    <label style={{ flex: 1 }}>c. Child care...................................</label>
                    $<input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                    <label style={{ flex: 1 }}>d. Groceries and household supplies...................................</label>
                   $ <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                    <label style={{ flex: 1 }}>e. Eating out...................................</label>
                    $<input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                    <label style={{ flex: 1 }}>f. Utilities (gas, electric, water, trash)...................................</label>
                    $<input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                    <label style={{ flex: 1 }}>g. Telephone, cell phone, and e-mail...................................</label>
                    $<input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                    <label style={{ flex: 1 }}>h. Laundry and cleaning...................................</label>
                    $<input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                    <label style={{ flex: 1 }}>i. Clothes...................................</label>
                    $<input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                    <label style={{ flex: 1 }}>j. Education...................................</label>
                    $<input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                    <label style={{ flex: 1 }}>k. Entertainment, gifts, and vacation...................................</label>
                    $<input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                    <label style={{ flex: 1 }}>m. Insurance (life, accident, etc.; do not include auto, home, or health insurance)...................................</label>
                    $<input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                    <label style={{ flex: 1 }}>n. Savings and investments...................................</label>
                    $<input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                    <label style={{ flex: 1 }}>o. Charitable contributions...................................</label>
                    $<input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                    <label style={{ flex: 1 }}>p. Monthly payments listed in item 14 (itemize below in 14 and insert total here)...................................</label>
                    $<input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                    <label style={{ flex: 1 }}>q. Other (specify)</label>
                    $<input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px', marginTop: '10px' }}>
                    <label style={{ flex: 1 }}>r. TOTAL EXPENSES (a-q) (do not add in the amounts in a(1)(a) and (b))...................................</label>
                    $<input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px', flex: 1 }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                    <label style={{ flex: 1 }}>s. Amount of expenses paid by others...................................</label>
                    $<input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px', flex: 1 }} />
                </div>
            </div>
        </div>
            <div style={{ marginBottom: '20px' }}>
                <label style={{ marginLeft: '0', display: 'block' }}>
                    14. Installment payments and debts not listed above:
                </label>
                <div style={{ marginLeft: '20px' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '10px' }}>
                        <thead>
                            <tr>
                                <th style={{ border: '1px solid black', padding: '5px', backgroundColor: 'rgb(225, 243, 243)' }}>Paid to</th>
                                <th style={{ border: '1px solid black', padding: '5px', backgroundColor: 'rgb(225, 243, 243)' }}>For</th>
                                <th style={{ border: '1px solid black', padding: '5px', backgroundColor: 'rgb(225, 243, 243)' }}>Amount</th>
                                <th style={{ border: '1px solid black', padding: '5px', backgroundColor: 'rgb(225, 243, 243)' }}>Balance</th>
                                <th style={{ border: '1px solid black', padding: '5px', backgroundColor: 'rgb(225, 243, 243)' }}>Date of last payment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[...Array(5)].map((_, index) => (
                                <tr key={index}>
                                    <td style={{ border: '1px solid black', padding: '5px' }}>
                                        <input type="text" style={{ width: '100%', boxSizing: 'border-box',backgroundColor: 'rgb(225, 243, 243)' }} />
                                    </td>
                                    <td style={{ border: '1px solid black', padding: '5px' }}>
                                        <input type="text" style={{ width: '100%', boxSizing: 'border-box', backgroundColor: 'rgb(225, 243, 243)' }} />
                                    </td>
                                    <td style={{ border: '1px solid black', padding: '5px' }}>
                                        <input type="text" style={{ width: '100%', boxSizing: 'border-box', backgroundColor: 'rgb(225, 243, 243)' }} />
                                    </td>
                                    <td style={{ border: '1px solid black', padding: '5px' }}>
                                        <input type="text" style={{ width: '100%', boxSizing: 'border-box', backgroundColor: 'rgb(225, 243, 243)' }} />
                                    </td>
                                    <td style={{ border: '1px solid black', padding: '5px' }}>
                                        <input type="text" style={{ width: '100%', boxSizing: 'border-box', backgroundColor: 'rgb(225, 243, 243)' }} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div style={{ marginBottom: '20px' }}>
                <label style={{ marginLeft: '0', display: 'block' }}>
                    15. Attorney fees (This information is required if either party is requesting attorney fees):
                </label>
                <div style={{ marginLeft: '20px' }}>
                    <div style={{ display: 'block', marginBottom: '5px' }}>
                        <label style={{ display: 'block' }}>a. To date, I have paid my attorney this amount for fees and costs (specify):</label>
                        <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', display: 'block', width: '100%' }} />
                    </div>
                    <div style={{ display: 'block', marginBottom: '5px' }}>
                        <label style={{ display: 'block' }}>b. The source of this money was (specify):</label>
                        <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', display: 'block', width: '100%' }} />
                    </div>
                    <div style={{ display: 'block', marginBottom: '5px' }}>
                        <label style={{ display: 'block' }}>c. I still owe the following fees and costs to my attorney (specify total owed):</label>
                        <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', display: 'block', width: '100%' }} />
                    </div>
                    <div style={{ display: 'block', marginBottom: '5px' }}>
                        <label style={{ display: 'block' }}>d. My attorney's hourly rate is (specify):</label>
                        <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', display: 'block', width: '100%' }} />
                    </div>
                </div>
            </div>
            <p>I confirm this fee arrangement.</p>
        </div>
        <div style={{ marginTop: '16px' }}>
            <p>Date: <input type="text" style={{ borderBottom: '1px solid black', width: '160px', marginLeft: '8px' }} /></p>
            <p style={{ marginTop: '16px' }}><input type="text" style={{ borderBottom: '1px solid black', width: '50%' }} placeholder="TYPE OR PRINT NAME" /></p>
            <p style={{ marginTop: '16px' }}><input type="text" style={{ borderBottom: '1px solid black', width: '50%' }} placeholder="SIGNATURE OF ATTORNEY FOR PETITIONER" /></p>
          </div>
          <hr style={{ width: "100%" }} />
                <div
                    className="footer"
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div style={{ listStyle: "none" , fontSize:'10px' }}>
                        <div>Form Approved for Optional Use</div>
                        <div>Judicial Council of California</div>
                        <div> FL-150 [Rev. January 1, 2019]</div>
                    </div>
                    <div style={{ }}>
                        <div style={{ marginLeft:"5px" , fontWeight: "bold" }}>
                        INCOME AND EXPENSE DECLARATION
                        {/* <div><h3>(Family Law—Uniform Parentage)</h3></div>  */}
                        </div>

                    </div>
                    <div style={{ listStyle: "none", fontSize:'10px' }}>
                        <div>Family Code, §§ 2030-2032, 2100-2113,3552,3620-3634, </div>
                        <div>4050-4046, 4300-4339</div>
                        <div> www.courtinfo.ca.gov</div>
                    </div>
                    <div style={{ listStyle: "none", fontWeight: "bold",fontSize:'12px' }}>
                    <li>Page 3 of 4</li>
                    </div>
                </div>
                <br /><br />
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
                                <div style={{ marginLeft: "1.2rem" }}>
                                    <label htmlFor="street">OUTHER PARTY/PARENT/CLAIMANT:</label>
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
                </table><br />
                <div>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <b>
                <h2>CHILD SUPPORT INFORMATION</h2>
                <p>(NOTE: Fill out this page only if your case involves child support.)</p>
                </b>
            </div>
            
            <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontWeight: 'bold' }}>16. Number of children</label>
                <div style={{ marginLeft: '20px' }}>
                    <label style={{ display: 'block' }}>a. I have (specify number):</label>
                    <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', width: '100%' }} />
                    
                    <label style={{ display: 'block', marginTop: '5px' }}>b. The children spend 
                        <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', margin: '0 5px', width: '10%' }} />
                        percent of their time with me and 
                        <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', margin: '0 5px', width: '10%' }} />
                        percent of their time with the other parent.
                    </label>
                    <label style={{ display: 'block', fontSize: 'smaller', marginTop: '5px' }}>
                        (If you're not sure about percentage or it has not been agreed on, please describe your parenting schedule here.)
                    </label>
                    <textarea style={{ backgroundColor: 'rgb(225, 243, 243)', width: '100%', height: '50px' }} />
                </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontWeight: 'bold' }}>17. Children's health-care expenses</label>
                <div style={{ marginLeft: '20px' }}>
                    <label style={{ display: 'block' }}>
                        a. 
                        <input type="checkbox" style={{ marginLeft: '5px', marginRight: '5px' }} />
                        I do 
                        <input type="checkbox" style={{ marginLeft: '5px', marginRight: '5px' }} />
                        I do not have health insurance available to me for the children through my job.
                    </label>
                    <label style={{ display: 'block', marginTop: '5px' }}>b. Name of insurance company:</label>
                    <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', width: '100%' }} />
                    
                    <label style={{ display: 'block', marginTop: '5px' }}>c. Address of insurance company:</label>
                    <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', width: '100%' }} />
                    
                    <label style={{ display: 'block', marginTop: '5px' }}>d. The monthly cost for the children's health insurance is or would be (specify):</label>
                    <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', width: '30%' }} />
                    <label style={{ display: 'block', fontSize: 'smaller' }}>
                        (Do not include the amount your employer pays.)
                    </label>
                </div>
            </div>

            

            <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontWeight: 'bold' }}>18. Additional expense for the children in this case</label>
                <div style={{ marginLeft: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                    <label style={{ flex: 1 }}>a. Childcare so I can work or get job training:.................................</label>
                    $<input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }}placeholder="Amount per Month" />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                    <label style={{ flex: 1 }}>b. Children's health care not covered by insurance:.................................</label>
                    $<input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }}placeholder="Amount per Month" />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                    <label style={{ flex: 1 }}>c. Travel expenses for visitation:.................................</label>
                    $<input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }}placeholder="Amount per Month" />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                    <label style={{ flex: 1 }}>d. Children's educational or other special needs (specify below):.................................</label>
                    $<input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }}placeholder="Amount per Month" />
                </div>
                </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontWeight: 'bold' }}>19. Special hardships</label>
                <label style={{ display: 'block', fontSize: 'smaller' }}>
                    I ask the court to consider the following special financial circumstances
                    (attach documentation of any item listed here, including court orders):
                </label>
                <div style={{ marginLeft: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                    <label style={{ flex: 1 }}>a. Extraordinary health expenses not included in 18b:.................................</label>
                    $<input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} placeholder="Amount per Month"/>
                    <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }}placeholder="For how many Months?" />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                    <label style={{ flex: 1 }}>b. Major losses not covered by insurance (examples: fire, theft, other insured loss):</label>
                    $<input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }}placeholder="Amount per Month" />
                    <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }}placeholder="For how many Months?" />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                    <label style={{ flex: 1 }}>c. (1) Expenses for my minor children who are from other relationships and are living with me:</label>
                    $<input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} placeholder="Amount per Month"/>
                    <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', marginLeft: '10px' }} placeholder="For how many Months?"/>
                </div>

                    <label style={{ display: 'block', marginTop: '5px' }}>(2) Names and ages of those children (specify):</label>
                    <textarea style={{ backgroundColor: 'rgb(225, 243, 243)', width: '100%', height: '50px' }} />

                    <label style={{ display: 'block', marginTop: '5px' }}>(3) Child support I receive for those children:</label>
                    $<input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)', width: '30%' }} />
                    <label style={{ display: 'block', fontSize: 'smaller', marginTop: '5px' }}>
                        The expenses listed in a, b, and c create an extreme financial hardship because (explain):
                    </label>
                    <textarea style={{ backgroundColor: 'rgb(225, 243, 243)', width: '100%', height: '50px' }} />
                </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontWeight: 'bold' }}>20. Other information I want the court to know concerning support in my case (specify):</label>
                <textarea style={{ backgroundColor: 'rgb(225, 243, 243)', width: '100%', height: '50px' }} />
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
                        <div> FL-150 [Rev. January 1, 2019]</div>
                    </div>
                    <div style={{ }}>
                        <div style={{ marginLeft:"5px" , fontWeight: "bold" }}>
                        INCOME AND EXPENSE DECLARATION
                        {/* <div><h3>(Family Law—Uniform Parentage)</h3></div>  */}
                        </div>

                    </div>
                    <div style={{ listStyle: "none", fontSize:'10px' }}>
                        <div>Family Code, §§ 2030-2032, 2100-2113,3552,3620-3634, </div>
                        <div>4050-4046, 4300-4339</div>
                        <div> www.courtinfo.ca.gov</div>
                    </div>
                    <div style={{ listStyle: "none", fontWeight: "bold",fontSize:'12px' }}>
                    <li>Page 4 of 4</li>
                    </div>
                </div>
                <br />
                </div> 
                

        
    )
};
