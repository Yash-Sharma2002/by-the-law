import React from 'react'
import SUPFL158 from "./SU158";
export default function () {
    const [details, setDetails] = React.useState<SUPFL158>(
        {} as SUPFL158
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
            
            <h3 style={{ display: 'flex', marginBottom: '0' }}>FL-158 </h3>
            <table style={{ width: "100%", border: "2px solid black", borderCollapse: "collapse" }}>
                    <tbody>
                        <tr>
                            <td style={{ border: "2px solid black", borderCollapse: "collapse" }}>
                                <div style={{ marginLeft: "1.2rem" }}>
                                    <label htmlFor="name">PETITIONER/PLAINTIFF:</label>
                                    <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginTop: "5px",width:"76%" }} type="text" id="name" />
                                </div>
                                <div style={{ marginLeft: "1.2rem" }}>
                                    <label htmlFor="street">RESPONDENT/DEFENDANT:</label>
                                    <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginTop: "5px",width:"71.5%" }} type="text" id="street" />
                                </div>
                                <div style={{ marginLeft: "1.2rem" }}>
                                    <label htmlFor="street">OTHER PARENT:</label>
                                    <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginTop: "5px",width:"83%" }} type="text" id="street" />
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
      <div>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}><b><h3>SUPPORTING DECLARATION FOR ATTORNEY'S FEES AND COSTS ATTACHMENT</h3></b></div>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
          <label><b>To:</b></label>
          <div style={{ marginLeft: '20px' }}>
            <div>
              <input type="checkbox" /><b> Request for Attorney's Fees and Costs Attachment (form FL-319)</b>
            </div>
            <div>
              <input type="checkbox" /> <b>Responsive Declaration (form FL-320)</b>
            </div>
          </div>
        </div>
      </div>
      <div>
        <label>1. I am</label>
        <div style={{ marginLeft: '20px' }}>
          <div>
          a. <input type="checkbox"style={{margin:'8px'}} />  the petitioner/plaintiff.
          </div>
          <div>
          b. <input style={{margin:'8px'}} type="checkbox" />  the respondent/defendant.
          </div>
          <div>
          c. <input type="checkbox"style={{margin:'8px'}} />  the other party.
          </div>
        </div>
      </div>
      <div>
        <label>2. I request that the court</label>
        <div style={{ marginLeft: '20px' }}>
          <div>
            <input type="checkbox" style={{margin:'8px'}}/> grant
            <input type="checkbox" style={{margin:'8px'}}/> grant in part
            <input type="checkbox" style={{margin:'8px'}}/> deny
          </div>
          <div>
            the request for attorney's fees and costs.
          </div>
        </div>
      </div>
      <div>
        <label>3. I am providing the following information</label>
        <div style={{ marginLeft: '20px' }}>
          <div>
            <input type="checkbox"style={{margin:'8px'}} /> in support of
            <input type="checkbox" style={{margin:'8px'}}/> in opposition to
          </div>
          <div>
            the request for attorney's fees and costs.
          </div>
        </div>
        <div style={{ marginLeft: '20px' }}>
          <label>a. The</label>
          <div style={{ marginLeft: '20px' }}>
            <input type="checkbox"style={{margin:'8px'}} /> petitioner/plaintiff
            <input type="checkbox" style={{margin:'8px'}}/> respondent/defendant
            <input type="checkbox" style={{margin:'8px'}}/> other party
            <span> has the ability to pay</span>
          </div>
          <div style={{ marginLeft: '40px' }}>
            <div>
            (1) <input type="checkbox"style={{margin:'8px'}} />  my attorney's fees and costs.
            </div>
            <div>
            (2) <input type="checkbox" style={{margin:'8px'}}/>  his or her own attorney's fees and costs.
            </div>
            <div>
            (3) <input type="checkbox"style={{margin:'8px'}} />  both my and his or her own attorney's fees and costs.
            </div>
            <div>
            (4) <input type="checkbox" style={{margin:'8px'}}/>  other (specify):
              <textarea style={{ backgroundColor: "rgb(225, 243, 243)", width: '95%',height:'150px' }}></textarea>
            </div>
          </div>
        </div>
        <div style={{ marginLeft: '20px' }}>
          <label>b. The attorney's fees and costs can be paid from the following sources:</label>
          <textarea style={{ backgroundColor: "rgb(225, 243, 243)", width: '95%', height:'300px' }}></textarea>
        </div>
        <div style={{ marginLeft: '20px' }}>
          <label>c. The court should consider the following facts in deciding whether to grant, grant in part, or deny the request for attorney's fees and costs (describe):</label>
          <div>
            <input type="checkbox"style={{margin:'8px'}} /> See Attachment 3c.
            <textarea style={{ backgroundColor: "rgb(225, 243, 243)", width: '95%', height:'300px' }}></textarea>
          </div>
        </div>
        <div style={{ marginLeft: '20px' }}>
          <label>d. If appropriate, describe the reasons why a non-spouse party or domestic partner is involved in the case and whether he or she should or should not pay attorney's fees and costs:</label>
          <div>
            <input type="checkbox" style={{margin:'8px'}}/> See Attachment 3d.
            <textarea style={{ backgroundColor: "rgb(225, 243, 243)", width: '95%', height:'300px' }}></textarea>
          </div>
        </div>
      </div>
    </form>
    <br />
    <hr style={{ width: "100%" }} />
                <div
                    className="footer"
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div style={{ listStyle: "none" , fontSize:'10px' }}>
                        <div>Form Approved for Optional Use</div>
                        <div>Judicial Council of California</div>
                        <div> FL-158 [New January 1, 2012]</div>
                    </div>
                    <div style={{ }}>
                        <div style={{ marginLeft:"5px" , fontWeight: "bold" }}>
                        SUPPORTING DECLARATION FOR ATTORNEY'S FEES AND COSTS ATTACHMENT (Family Law)
                        </div>
                    </div>
                    <div style={{ listStyle: "none", fontSize:'10px' }}>
                        <div> Family Code, §§ 270, 2030,2032,3121,4320,3557, 7605 Cal. rules of Court, rules 5.425, 5.93</div>
                        <div> www.courtinfo.ca.gov</div>
                    </div>
                    <div style={{ listStyle: "none", fontWeight: "bold",fontSize:'15px' }}>
                    <li>Page 1 of 2</li>
                    </div>
                </div>
                <div><br /><br />
                <table style={{ width: "100%", border: "2px solid black", borderCollapse: "collapse" }}>
                    <tbody>
                        <tr>
                            <td style={{ border: "2px solid black", borderCollapse: "collapse" }}>
                                <div style={{ marginLeft: "1.2rem" }}>
                                    <label htmlFor="name">PETITIONER/PLAINTIFF:</label>
                                    <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginTop: "5px",width:"76%" }} type="text" id="name" />
                                </div>
                                <div style={{ marginLeft: "1.2rem" }}>
                                    <label htmlFor="street">RESPONDENT/DEFENDANT:</label>
                                    <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginTop: "5px",width:"71.5%" }} type="text" id="street" />
                                </div>
                                <div style={{ marginLeft: "1.2rem" }}>
                                    <label htmlFor="street">OTHER PARENT:</label>
                                    <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginTop: "5px",width:"83%" }} type="text" id="street" />
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
        <label>4. Has an order already been made for payment of child support in this case?</label>
        <div style={{ marginLeft: '20px' }}>
          <div>
          a.<input type="checkbox" style={{margin:'8px'}} />  No.
          </div>
          <div>
          b. <input type="checkbox" style={{margin:'8px'}}/>  Yes. If so, describe the order:
          </div>
          <div style={{ marginLeft: '40px' }}>
            <div>
              <label>(1) The</label>
              <input type="checkbox" style={{margin:'8px'}}/> petitioner/plaintiff
              <input type="checkbox" style={{margin:'8px'}}/> respondent/defendant
              <input type="checkbox" style={{margin:'8px'}}/> other party
              <span> must pay: $</span>
            </div>
            <div>
              per month for child support
            </div>
            <div style={{ marginLeft: '40px' }}>
              <div>
                <label>(a) This order has been in effect since (date):</label>
                <textarea style={{ backgroundColor: "rgb(225, 243, 243)", width: '20%',height:'25px' }}></textarea>
              </div>
              <div>
                <label>(b) The payments</label>
                <input type="checkbox" style={{margin:'8px'}}/> have been made
                <input type="checkbox" style={{margin:'8px'}}/> have not been made
                <input type="checkbox" style={{margin:'8px'}}/> have been made in part
                <span> since the date of the order.</span>
              </div>
            </div>
            <div>
              <label>(2)<input type="checkbox" style={{margin:'8px'}}/> Additional information (specify):</label>
              <textarea style={{ backgroundColor: "rgb(225, 243, 243)", width: '95%',height:'200px' }}></textarea>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label>5. Has an order already been made for payment of spousal, partner, or family support in this case?</label>
        <div style={{ marginLeft: '20px' }}>
          <div>
          a. <input type="checkbox" style={{margin:'8px'}}/>  No.
          </div>
          <div>
          b. <input type="checkbox" style={{margin:'8px'}}/>  Yes. If so, describe the order:
          </div>
          <div style={{ marginLeft: '40px' }}>
            <div>
              <label>(1) The</label>
              <input type="checkbox" style={{margin:'8px'}}/> petitioner/plaintiff
              <input type="checkbox" style={{margin:'8px'}}/> respondent/defendant
              <input type="checkbox" style={{margin:'8px'}}/> other party
              <span> must pay: $</span>
            </div>
            <div>
              per month for 
              <input type="checkbox" style={{margin:'8px'}}/> spousal support
              <input type="checkbox" style={{margin:'8px'}}/> partner support
              <input type="checkbox" style={{margin:'8px'}}/> family support
            </div>
            <div style={{ marginLeft: '40px' }}>
              <div>
                <label>(a) This order has been in effect since (date):</label>
                <textarea style={{ backgroundColor: "rgb(225, 243, 243)", width: '20%',height:'25px' }}></textarea>
              </div>
              <div>
                <label>(b) The payments</label>
                <input type="checkbox" style={{margin:'8px'}}/> have been made
                <input type="checkbox" style={{margin:'8px'}}/> have not been made
                <input type="checkbox" style={{margin:'8px'}}/> have been made in part
                <span> since the date of the order.</span>
              </div>
            </div>
            <div>
              <label>(2)<input type="checkbox" style={{margin:'8px'}}/> Additional information (specify):</label>
              <textarea style={{ backgroundColor: "rgb(225, 243, 243)", width: '95%',height:'200px' }}></textarea>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label>6. If you are or were married to, or in a domestic partnership with, the person you are seeking fees from, the court must consider the factors in Family Code section 4320 in determining whether it is just and reasonable under the relative circumstances to award attorney's fees and costs. Complete and attach Spousal or Partner Support Declaration Attachment (form FL-157) or a comparable declaration to provide the court with information about the factors described in section 4320.</label>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label>7. You must complete, file, and serve a current Income and Expense Declaration (form FL-150). It is considered current if you have completed form FL-150 within the past three months and no facts have changed since the time of completion.</label>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label>8. Number of pages attached to this Supporting Declaration:</label>
        <input type="text" style={{ width: '150px',backgroundColor: "rgb(225, 243, 243)" }} />
      </div>
      <div>
        <p>I declare under penalty of perjury under the laws of the State of California that the information contained on all pages of this form and any attachments is true and correct.</p>
      </div>
    </form>
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
                            <div>  (SIGNATURE)</div>
                        </div>
                    </div>
                </div>
                <br />
    <hr style={{width:'100%'}}/>
    <div
                    className="footer"
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div style={{ listStyle: "none" , fontSize:'10px' }}>
                        <div>Form Approved for Optional Use</div>
                        <div>Judicial Council of California</div>
                        <div> FL-158 [Ne. January 1, 2012]</div>
                    </div>
                    <div style={{ }}>
                        <div style={{ marginLeft:"5px" , fontWeight: "bold" }}>
                        SUPPORTING DECLARATION FOR ATTORNEY'S FEES AND COSTS ATTACHMENT (Family Law)
                        </div>
                    </div>
                    <div style={{ listStyle: "none", fontSize:'10px' }}>
                        <div> Family Code, §§ 270, 2030,2032,3121,4320,3557, 7605 Cal. rules of Court, rules 5.425, 5.93</div>
                        <div> www.courtinfo.ca.gov</div>
                    </div>
                    <div style={{ listStyle: "none", fontWeight: "bold",fontSize:'15px' }}>
                    <li>Page 2 of 2</li>
                    </div>
                </div>
      </div>
</div>
    )
};









               