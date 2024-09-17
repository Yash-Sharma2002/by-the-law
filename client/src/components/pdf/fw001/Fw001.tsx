import React from 'react'
export default function () {
    



    return (
        <div style={{ maxWidth: "1100px", margin: "auto" }}>
            <h3 style={{ display: 'flex', marginBottom: '0' }}>Fw-001 </h3>
            <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>
      {/* First Part */}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '65%' }}>
          <div style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '10px' }}>FW-001 Request to Waive Court Fees</div>
          <div style={{ marginBottom: '10px' }}>
            If you are getting public benefits, are a low-income person, or do not have enough income to pay for your household’s basic needs and your court fees, you may use this form to ask the court to waive your court fees. The court may order you to answer questions about your finances. If the court waives the fees, you may still have to pay later if:
            <ul>
              <li>You cannot give the court proof of your eligibility,</li>
              <li>Your financial situation improves during this case, or</li>
              <li>You settle your civil case for $10,000 or more. The trial court that waives your fees will have a lien on any such settlement in the amount of the waived fees and costs. The court may also charge you any collection costs.</li>
            </ul>
          </div>
          <div>
            <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>1. Your Information <span style={{ fontWeight: 'normal' }}>(person asking the court to waive the fees):</span></div>
            <div style={{ marginLeft: '10px', marginBottom: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <span style={{ marginRight: '10px' }}>Name:</span>
              <textarea style={{backgroundColor: 'rgb(225, 243, 243)',width: '95%',height: '20px'}}/>
            </div>

              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <span>Street or mailing address:</span>
                <textarea style={{ backgroundColor: 'rgb(225, 243, 243)', width: '79%', height: '20px' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <span>City:</span>
                <textarea style={{ backgroundColor: 'rgb(225, 243, 243)', width: '30%', height: '20px',marginTop:'5px' }} />
                <span style={{margin:'10px'}}> State:</span>
                <textarea style={{ backgroundColor: 'rgb(225, 243, 243)', width: '30%', height: '20px',marginTop:'5px' }} />
                <span style={{margin:'10px'}}> Zip:</span>
                <textarea style={{ backgroundColor: 'rgb(225, 243, 243)', width: '22%', height: '20px',marginTop:'5px' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <span>Phone:</span>
                <textarea style={{ backgroundColor: 'rgb(225, 243, 243)', width: '93%', height: '20px',marginTop:'6px' }} />
              </div>
            </div>

            <div style={{ fontWeight: 'bold',display: 'flex', alignItems: 'center', marginBottom: '10px' }}>2. Your Job, if you have one 
              <span style={{ fontWeight: 'normal',display: 'flex', alignItems: 'center', marginBottom: '4px',marginLeft:'5px' }}>(job title):</span>
              <textarea style={{ backgroundColor: 'rgb(225, 243, 243)', width: '68%', height: '20px' }} />
            </div>
            <div style={{ marginLeft: '10px', marginBottom: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <span >Name of employer:</span>
                <textarea style={{ backgroundColor: 'rgb(225, 243, 243)', width: '84%', height: '20px' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <span >Employer’s address:</span>
                <textarea style={{ backgroundColor: 'rgb(225, 243, 243)', width: '83%', height: '20px' }} />
              </div>
            </div>
          </div>
        </div>

        <div style={{ width: '33%', border: '1px solid black', padding: '10px' }}>
          <div style={{ fontWeight: 'bold', marginBottom: '10px',height:'120px' }}>CONFIDENTIAL</div>
          <div style={{ marginBottom: '20px' }}>
            Clerk stamps date here when form is filed.
          </div>
          <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>Fill in court name and street address:</div>
          <textarea style={{ backgroundColor: 'rgb(225, 243, 243)', width: '100%', height: '90px', marginBottom: '10px' }} />
          <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>Fill in case number and name:</div>
          <div>
            <span>Case Number:</span>
            <textarea style={{ backgroundColor: 'rgb(225, 243, 243)', width: '100%', height: '20px', marginBottom: '10px' }} />
          </div>
          <div>
            <span>Case Name:</span>
            <textarea style={{ backgroundColor: 'rgb(225, 243, 243)', width: '100%', height: '20px', marginBottom: '10px' }} />
          </div>
        </div>
      </div>

      {/* Second Part */}
      <div style={{ marginTop: '10px' }}>
        <div>
          <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>3. Your Lawyer, if you have one <span style={{ fontWeight: 'normal' }}>(name, firm or affiliation, address, phone number, and State Bar number):</span></div>
          <div style={{ marginLeft: '10px', marginBottom: '10px' }}>
            <textarea style={{ backgroundColor: 'rgb(225, 243, 243)', width: '100%', height: '40px' }} />
            <div>
              <span>a.</span>
              <span> The lawyer has agreed to advance all or a portion of your fees or costs </span>
              <span style={{ fontWeight: 'normal' }}>(check one):</span>
              <input type="checkbox" style={{ margin: '10px' }} />Yes
              <input type="checkbox" style={{ margin: '10px' }} />No
            </div>
            <div>
              <span>b. (If yes, your lawyer must sign here) Lawyer’s signature:</span>
              <textarea style={{ backgroundColor: 'rgb(225, 243, 243)', width: '100%', height: '20px' }} />
            </div>
          </div>

          <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>4. What court’s fees or costs are you asking to be waived?</div>
          <div style={{ marginLeft: '10px', marginBottom: '10px' }}>
            <div>
              <input type="checkbox" style={{ margin: '10px' }} />
              <span>Superior Court (See Information Sheet on Waiver of Superior Court Fees and Costs (form FW-001-INFO).)</span>
            </div>
            <div>
              <input type="checkbox" style={{ margin: '10px' }} />
              <span>Supreme Court, Court of Appeal, or Appellate Division of Superior Court (See Information Sheet on Waiver of Appellate Court Fees (form APP-015/FW-015-INFO).)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Third Part (Continuation) */}
      <div style={{ marginTop: '20px' }}>
        <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>5. Why are you asking the court to waive your court fees?</div>
        <div style={{ marginLeft: '10px', marginBottom: '10px' }}>
          <div>
            <input type="checkbox" style={{ margin: '10px' }} />
            <span>I receive (check all that apply; see form FW-001-INFO for definitions):</span>
          </div>
          <div style={{ marginLeft: '20px' }}>
            <input type="checkbox" style={{ margin: '10px' }} />Food Stamps
            <input type="checkbox" style={{ margin: '10px' }} />Supp. Sec. Inc.
            <input type="checkbox" style={{ margin: '10px' }} />SSP
            <input type="checkbox" style={{ margin: '10px' }} />Medi-Cal
            <input type="checkbox" style={{ margin: '10px' }} />County Relief/Gen. Assist.
            <input type="checkbox" style={{ margin: '10px' }} />IHSS
            <input type="checkbox" style={{ margin: '10px' }} />CalWORKS or Tribal TANF
            <input type="checkbox" style={{ margin: '10px' }} />CAPI
          </div>
        </div>
        <div style={{ marginLeft: '10px', marginBottom: '10px' }}>
          <div>
            <input type="checkbox" style={{ margin: '10px' }} />
            <span>My gross monthly household income (before deductions for taxes) is less than the amount listed below. (If you check 5b, you must fill out 7, 8, and 9 on page 2 of this form.)</span>
          </div>
          <div>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
              <thead>
                <tr>
                  <th style={{ border: '1px solid black', padding: '5px' }}>Family Size</th>
                  <th style={{ border: '1px solid black', padding: '5px' }}>Family Income</th>
                  <th style={{ border: '1px solid black', padding: '5px' }}>Family Size</th>
                  <th style={{ border: '1px solid black', padding: '5px' }}>Family Income</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ border: '1px solid black', padding: '5px' }}>1</td>
                  <td style={{ border: '1px solid black', padding: '5px' }}>$1,329.17</td>
                  <td style={{ border: '1px solid black', padding: '5px' }}>3</td>
                  <td style={{ border: '1px solid black', padding: '5px' }}>$2,262.50</td>
                </tr>
                <tr>
                  <td style={{ border: '1px solid black', padding: '5px' }}>2</td>
                  <td style={{ border: '1px solid black', padding: '5px' }}>$1,795.84</td>
                  <td style={{ border: '1px solid black', padding: '5px' }}>4</td>
                  <td style={{ border: '1px solid black', padding: '5px' }}>$2,729.17</td>
                </tr>
                <tr>
                  <td style={{ border: '1px solid black', padding: '5px' }}>5</td>
                  <td style={{ border: '1px solid black', padding: '5px' }}>$3,195.84</td>
                  <td style={{ border: '1px solid black', padding: '5px' }}>6</td>
                  <td style={{ border: '1px solid black', padding: '5px' }}>$3,662.50</td>
                </tr>
                <tr>
                  <td style={{ border: '1px solid black', padding: '5px' }} colSpan={4}>If more than 6 people at home, add $466.67 for each extra person.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <input type="checkbox" style={{ margin: '10px' }} />
          <span>I do not have enough income to pay for my household’s basic needs and the court fees. I ask the court to:</span>
          <div style={{ marginLeft: '20px' }}>
            <input type="checkbox" style={{ margin: '10px' }} />waive all court fees and costs
            <input type="checkbox" style={{ margin: '10px' }} />waive some of the court fees
            <input type="checkbox" style={{ margin: '10px' }} />let me make payments over time
          </div>
        </div>
        <div style={{ marginBottom: '10px' }}>
          
          <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>6. <input type="checkbox" style={{ margin: '10px' }} />Check here if you asked the court to waive your court fees for this case in the last six months.</div>
          <span></span>
          <div style={{ marginLeft: '20px' }}>
            <span>(If your previous request is reasonably available, please attach it to this form and check here:)</span>
            <input type="checkbox" style={{ margin: '10px' }} />
          </div>
        </div>
      </div>

      <div style={{ marginTop: '20px' }}>
        <i><b>I declare under penalty of perjury under the laws of the state of California that the information I have provided on this form and all attachments is true and correct.</b></i>
      </div>
    </div>
    <div style={{ marginLeft: "5%",padding: '20px', fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>
                    <div style={{ marginTop: 2 }}>
                        Date: <input
                        name={"Date"}
                        
                        style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px" }} type="text" size={20} id="fax" />
                    </div>
                    <div
                        style={{ display: "flex", justifyContent: "space-between", margin: 3}}
                    >
                        <div>
                            <input
                            name={"TypeOrPrintName"}
                            
                            style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "4px" }} type="text" id="fax" size={50} />
                            <div>(TYPE OR PRINT NAME)</div>{" "}
                        </div>
                        <div>
                        <input 
                        style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "4px" }}
                        name={"SignatureOfPetitioner"}
                        
                        type="text" size={40} id="fax" />{" "}
                            <div>  (SIGNATURE  HERE)</div>
                        </div>
                    </div>
                </div>


           <br/>
                <hr style={{ width: "100%" }} />
                <div
                    className="footer"
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div style={{ listStyle: "none" , fontSize:'10px' }}>
                        <div>Form Approved for Optional Use</div>
                        <div>Judicial Council of California</div>
                        <div> Fw-001 [Rev. March 24, 2020]</div>
                    </div>
                    <div style={{ }}>
                        <div style={{ marginLeft:"5px" , fontWeight: "bold" }}>
                        Request to Waive Court Fees</div>
                        {/* <div>Health-Care Costs and Reimbursement Procedures</div> */}
                    </div>
                    <div style={{ listStyle: "none", fontSize:'10px' }}>
                        <div> Government Code, § 68633,</div>
                        <div> Cal. Rules of Court, rules 3.51, 8.26 and 8.818</div>
                        <div> www.courtinfo.ca.gov</div>
                    </div>
                   
                </div><br />
                <table style={{ width: "97%", border: "2px solid black", borderCollapse: "collapse" }}>
                    <tbody>
                        <tr>
                            <td style={{ border: "2px solid black", borderCollapse: "collapse" }}>
                                <div style={{ marginLeft: "1.2rem" }}>
                                    <label htmlFor="name">Your name:</label>
                                    <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginTop: "5px",width:"75%" }} type="text" id="name" />
                                </div>
                               
                            </td>
                            <td style={{ width: "30%", border: "2px solid black", borderCollapse: "collapse" }}>
                                <div style={{ marginLeft: "1.2rem" }}>
                                    <label htmlFor="street">Case Number:</label>
                                    <br />
                                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginBottom: "5px",width:"97%" }} type="text" id="street" />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>



                <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', fontSize: '12px' }}>
      <form>
        <div><b><i>if you checked 5a on page 1, do not fill out below. if you checked 5b, fill out question 7, 8 and 9 only.</i></b></div>
        <div><b><i>if you checked 5c, you must fill this entire page. if you need more space, attach form MC-025 or attach a sheet of paper 
          and write financial Information and your name and case number at the top.</i></b></div><br />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Left Part */}
          <div style={{ flex: 1, paddingRight: '20px' }}>
            <div style={{ marginBottom: '20px' }}>
              <label>
                <b>7.</b>
                <input type="checkbox" />
                Check here if your income changes a lot from month to month. If it does, complete the form based on your average income for the past 12 months.
              </label>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label><b>8. Your Gross Monthly Income</b></label>
              <div style={{ marginLeft: '20px' }}>
                <label>a. List the source and amount of any income you get each month, including: wages or other income from work before deductions, spousal/child support, retirement, social security, disability, unemployment, military basic allowance for quarters (BAQ), veterans payments, dividends, interest, trust income, annuities, net business or rental income, reimbursement for job-related expenses, gambling or lottery winnings, etc.</label>
                {[1, 2, 3, 4].map((item, index) => (
                  <div key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <input type="text" style={{backgroundColor: 'rgb(225, 243, 243)', flex: 1, marginRight: '10px' }} placeholder={`Item ${item}`} />
                    <input type="text" style={{backgroundColor: 'rgb(225, 243, 243)', width: '100px' }} placeholder="$" />
                  </div>
                ))}
                <div>
                  <label>b. Your total monthly income:</label>
                  <input type="text" style={{backgroundColor: 'rgb(225, 243, 243)', width: '150px', marginLeft: '10px' }} placeholder="$" />
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label><b>9. Household Income</b></label>
              <div style={{ marginLeft: '20px' }}>
                <label>a. List the income of all other persons living in your home who depend in whole or in part on you for support, or on whom you depend in whole or in part for support.</label>
                {[1, 2, 3].map((item, index) => (
                  <div key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)',flex: 1, marginRight: '10px' }} placeholder="Name" />
                    <input type="text" style={{backgroundColor: 'rgb(225, 243, 243)', width: '50px', marginRight: '10px' }} placeholder="Age" />
                    <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)',width: '100px', marginRight: '10px' }} placeholder="Relationship" />
                    <input type="text" style={{backgroundColor: 'rgb(225, 243, 243)', width: '100px' }} placeholder="$" />
                  </div>
                ))}
                <div>
                  <label>b. Total monthly income of persons above:</label>
                  <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)',width: '150px', marginLeft: '10px' }} placeholder="$" />
                </div>
                <div>
                  <label><b>Total monthly income and household income (8b plus 9b):</b></label>
                  <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)',width: '150px', marginLeft: '10px' }} placeholder="$" />
                </div>
              </div>
              <div style={{border:'3px solid black', marginTop:'430px',padding:'4px'}}>
            To list any other facts you want the court to know, such as unusual Medical expenses, etc., attach MC-025 or attach a sheet of paper and write Financial Information and your name and case number at the top.
            <div style={{marginLeft:'50px'}}> <i>Check here if you attach another page. <input type="checkbox" /> </i> </div>
            <i><b>Importent! if your financial situation or ability to pay court fee improves, you must notify the court within five days on form FW-010.</b></i>
          </div>
            </div>
          </div>
          

          {/* Right Part */}
          <div style={{ flex: 1, paddingLeft: '20px' }}>
            <div style={{ marginBottom: '20px' }}>
              <label><b>10. Your Money and Property</b></label>
              <div style={{ marginLeft: '20px' }}>
                <div style={{ marginBottom: '10px' }}>
                  <label>a. Cash:</label>
                  <input type="text" style={{backgroundColor: 'rgb(225, 243, 243)', width: '150px', marginLeft: '10px' }} placeholder="$" />
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <label>b. All financial accounts (List bank name and amount):</label>
                  {[1, 2, 3].map((item, index) => (
                    <div key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                      <input type="text" style={{backgroundColor: 'rgb(225, 243, 243)', flex: 1, marginRight: '10px' }} placeholder={`Item ${item}`} />
                      <input type="text" style={{backgroundColor: 'rgb(225, 243, 243)', width: '150px' }} placeholder="$" />
                      <input type="text" style={{backgroundColor: 'rgb(225, 243, 243)', width: '150px' }} placeholder="$" />
                    </div>
                  ))}
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <label>c. Cars, boats, and other vehicles</label>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                   (1) <input type="text" style={{backgroundColor: 'rgb(225, 243, 243)', flex: 1, marginRight: '10px' }} placeholder="Make / Year" />
                    <input type="text" style={{backgroundColor: 'rgb(225, 243, 243)', width: '150px', marginRight: '10px' }} placeholder="Fair Market Value" />
                    <input type="text" style={{backgroundColor: 'rgb(225, 243, 243)', width: '150px' }} placeholder="How Much You Still Owe" />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                   (2) <input type="text" style={{backgroundColor: 'rgb(225, 243, 243)', flex: 1, marginRight: '10px' }} placeholder="Make / Year" />
                    <input type="text" style={{backgroundColor: 'rgb(225, 243, 243)', width: '150px', marginRight: '10px' }} placeholder="Fair Market Value" />
                    <input type="text" style={{backgroundColor: 'rgb(225, 243, 243)', width: '150px' }} placeholder="How Much You Still Owe" />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                   (3) <input type="text" style={{backgroundColor: 'rgb(225, 243, 243)', flex: 1, marginRight: '10px' }} placeholder="Make / Year" />
                    <input type="text" style={{backgroundColor: 'rgb(225, 243, 243)', width: '150px', marginRight: '10px' }} placeholder="Fair Market Value" />
                    <input type="text" style={{backgroundColor: 'rgb(225, 243, 243)', width: '150px' }} placeholder="How Much You Still Owe" />
                  </div>
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <label>d. Real estate</label>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                   (1) <input type="text" style={{backgroundColor: 'rgb(225, 243, 243)', flex: 1, marginRight: '10px' }} placeholder="Address" />
                    <input type="text" style={{backgroundColor: 'rgb(225, 243, 243)', width: '150px', marginRight: '10px' }} placeholder="Fair Market Value" />
                    <input type="text" style={{backgroundColor: 'rgb(225, 243, 243)', width: '150px' }} placeholder="How Much You Still Owe" />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                   (2) <input type="text" style={{backgroundColor: 'rgb(225, 243, 243)', flex: 1, marginRight: '10px' }} placeholder="Address" />
                    <input type="text" style={{backgroundColor: 'rgb(225, 243, 243)', width: '150px', marginRight: '10px' }} placeholder="Fair Market Value" />
                    <input type="text" style={{backgroundColor: 'rgb(225, 243, 243)', width: '150px' }} placeholder="How Much You Still Owe" />
                  </div>
                </div>
                <div>
                  <label>e. Other personal property (jewelry, furniture, furs, stocks, bonds, etc.)</label>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                   (1) <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)',flex: 1, marginRight: '10px' }} placeholder="Describe" />
                    <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)',width: '150px', marginRight: '10px' }} placeholder="Fair Market Value" />
                    <input type="text" style={{backgroundColor: 'rgb(225, 243, 243)', width: '150px' }} placeholder="How Much You Still Owe" />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                   (2) <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)',flex: 1, marginRight: '10px' }} placeholder="Describe" />
                    <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)',width: '150px', marginRight: '10px' }} placeholder="Fair Market Value" />
                    <input type="text" style={{backgroundColor: 'rgb(225, 243, 243)', width: '150px' }} placeholder="How Much You Still Owe" />
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label><b>11. Your Monthly Deductions and Expenses</b></label>
              <div style={{ marginLeft: '20px' }}>
                <div style={{ marginBottom: '10px' }}>
                  <label>a. List any payroll deductions and the monthly amount below:</label>
                  {[1, 2, 3].map((item, index) => (
                    <div key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                      <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)',flex: 1, marginRight: '10px' }} placeholder={`Item ${item}`} />
                      <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)',width: '150px' }} placeholder="$" />
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
    <label style={{ flex: '1' }}>b. Rent or house payment & maintenance:</label>
    <input
      type="text"
      style={{
        backgroundColor: 'rgb(225, 243, 243)',
        width: '150px',
      }}
      placeholder="$"
    />
  </div>
  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
    <label style={{ flex: '1' }}>c. Food and household supplies:</label>
    <input
      type="text"
      style={{
        backgroundColor: 'rgb(225, 243, 243)',
        width: '150px',
      }}
      placeholder="$"
    />
  </div>
  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
    <label style={{ flex: '1' }}>d. Utilities and telephone:</label>
    <input
      type="text"
      style={{
        backgroundColor: 'rgb(225, 243, 243)',
        width: '150px',
      }}
      placeholder="$"
    />
  </div>
  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
    <label style={{ flex: '1' }}>e. Clothing:</label>
    <input
      type="text"
      style={{
        backgroundColor: 'rgb(225, 243, 243)',
        width: '150px',
      }}
      placeholder="$"
    />
  </div>
  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
    <label style={{ flex: '1' }}>f. Laundry and cleaning:</label>
    <input
      type="text"
      style={{
        backgroundColor: 'rgb(225, 243, 243)',
        width: '150px',
      }}
      placeholder="$"
    />
  </div>
  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
    <label style={{ flex: '1' }}>g. Medical and dental expenses:</label>
    <input
      type="text"
      style={{
        backgroundColor: 'rgb(225, 243, 243)',
        width: '150px',
      }}
      placeholder="$"
    />
  </div>
  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
    <label style={{ flex: '1' }}>h. Insurance (life, health, accident, etc.):</label>
    <input
      type="text"
      style={{
        backgroundColor: 'rgb(225, 243, 243)',
        width: '150px',
      }}
      placeholder="$"
    />
  </div>
  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
    <label style={{ flex: '1' }}>i. School, child care:</label>
    <input
      type="text"
      style={{
        backgroundColor: 'rgb(225, 243, 243)',
        width: '150px',
      }}
      placeholder="$"
    />
  </div>
  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
    <label style={{ flex: '1' }}>j. Child, spousal support (another marriage):</label>
    <input
      type="text"
      style={{
        backgroundColor: 'rgb(225, 243, 243)',
        width: '150px',
      }}
      placeholder="$"
    />
  </div>
  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
    <label style={{ flex: '1' }}>k. Transportation, gas, auto repair and insurance:</label>
    <input
      type="text"
      style={{
        backgroundColor: 'rgb(225, 243, 243)',
        width: '150px',
      }}
      placeholder="$"
    />
  </div>
</div>



                <div style={{ marginBottom: '10px' }}>
                  <label>l. Installment payments (list each below):</label>
                  {[1, 2, 3].map((item, index) => (
                    <div key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                      <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)',flex: 1, marginRight: '10px' }} placeholder={`Item ${item}`} />
                      <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)',width: '150px' }} placeholder="$" />
                    </div>
                  ))}
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <label>m. Wages withheld by court order:</label>
                  <input type="text" style={{backgroundColor: 'rgb(225, 243, 243)', width: '150px', marginLeft: '10px' }} placeholder="$" />
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <label>n. Other expenses (list each below):</label>
                  {[1, 2, 3].map((item, index) => (
                    <div key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                      <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)',flex: 1, marginRight: '10px' }} placeholder={`Item ${item}`} />
                      <input type="text" style={{ backgroundColor: 'rgb(225, 243, 243)',width: '150px' }} placeholder="How Mutch?" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
            <footer>
            <hr style={{ width: "100%" }} />
                <div
                    className="footer"
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div style={{ listStyle: "none" , fontSize:'10px' }}>
                        <div>Form Approved for Optional Use</div>
                        <div>Judicial Council of California</div>
                        <div> Fw-001 [Rev. March 24, 2020]</div>
                    </div>
                    <div style={{ }}>
                        <div style={{ marginLeft:"5px" , fontWeight: "bold" }}>
                        Request to Waive Court Fees</div>
                        
                    </div>
                    <div style={{ listStyle: "none", fontSize:'10px' }}>
                        <div> Government Code, § 68633,</div>
                        <div> Cal. Rules of Court, rules 3.51, 8.26 and 8.818</div>
                        <div> www.courtinfo.ca.gov</div>
                    </div>
                    
                </div>
              </footer>    
                
                
  
                <br />
        </div>
        
    )
};
