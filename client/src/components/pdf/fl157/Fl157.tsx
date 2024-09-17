import React from 'react'
import SUPFL157 from "./SU157";
export default function () {
    const [details, setDetails] = React.useState<SUPFL157>(
        {} as SUPFL157
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
            
            <h3 style={{ display: 'flex', marginBottom: '0' }}>FL-157 </h3>
            <table style={{ width: "100%", border: "2px solid black", borderCollapse: "collapse" }}>
                    <tbody>
                        <tr>
                            <td style={{ border: "2px solid black", borderCollapse: "collapse" }}>
                                <div style={{ marginLeft: "1.2rem" }}>
                                    <label htmlFor="name">PETITIONER/PLAINTIFF:</label>
                                    <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginTop: "5px",width:"75%" }} type="text" id="name" />
                                </div>
                                <div style={{ marginLeft: "1.2rem" }}>
                                    <label htmlFor="street">RESPONDENT/DEFENDANT:</label>
                                    <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginTop: "5px",width:"69.5%" }} type="text" id="street" />
                                </div>
                                <div style={{ marginLeft: "1.2rem" }}>
                                    <label htmlFor="street">OTHER PARENT:</label>
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
      <div style={{ border: 'none', padding: '10px' }}>
        <div style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '10px' }}>
          SPOUSAL OR PARTNER SUPPORT DECLARATION ATTACHMENT
        </div>
        <div style={{ marginBottom: '10px' }}>
          <div>
            <input type="checkbox" style={{margin:'10px'}} /> Declaration for Default or Uncontested Judgment (form FL-170)
          </div>
          <div>
            <input type="checkbox"style={{margin:'10px'}} /> Supporting Declaration for Attorney's Fees and Costs Attachment (form FL-158)
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input type="checkbox"style={{margin:'10px'}} /> Other (specify): <input type="text" style={{ marginLeft: '10px', flexGrow: 1,backgroundColor: 'rgb(225, 243, 243)' }} />
          </div>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <strong>1. Spousal or domestic partner support.</strong> I request that the court (check all that apply):
          <div style={{ marginLeft: '20px' }}>
            <div>
             a. <input type="checkbox"style={{margin:'10px'}} /> Enter a judgment for spousal or domestic partner support for 
              <input type="checkbox"style={{margin:'10px'}} /> Petitioner <input type="checkbox"style={{margin:'10px'}} /> Respondent.
            </div>
            <div>
             b. <input type="checkbox"style={{margin:'10px'}} /> Modify the judgment for spousal or domestic partner support for 
              <input type="checkbox"style={{margin:'10px'}} /> Petitioner <input type="checkbox"style={{margin:'10px'}} /> Respondent.
            </div>
            <div>
             c. <input type="checkbox"style={{margin:'10px'}} /> Deny the request to modify the judgment for spousal or domestic partner support.
            </div>
            <div>
              d.<input type="checkbox"style={{margin:'10px'}} /> Terminate jurisdiction to award spousal or domestic partner support to 
              <input type="checkbox"style={{margin:'10px'}} /> Petitioner <input type="checkbox"style={{margin:'10px'}} /> Respondent.
            </div>
          </div>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <strong>2. Attorney fees and costs.</strong> I request that the court (check one):
          <div style={{ marginLeft: '20px' }}>
            <div>
              a.<input type="checkbox"style={{margin:'10px'}} /> Order my attorney fees and costs to be paid by 
              <input type="checkbox"style={{margin:'10px'}} /> my spouse or domestic partner 
              <input type="checkbox"style={{margin:'10px'}} /> a joined party (specify): <input type="text" style={{ flexGrow: 1, marginLeft: '10px',backgroundColor: "rgb(225, 243, 243)" }} />
            </div>
            <div>
              b.<input type="checkbox"style={{margin:'10px'}} /> Deny the request for attorney fees and costs.
            </div>
          </div>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <strong>3. The facts in support of my request are:</strong>
          <div style={{ marginLeft: '20px' }}>
            <div>
              <strong>a. Family Code section 4320(a)(1)</strong>
              <div style={{ marginLeft: '20px' }}>
                <div style={{ marginBottom: '10px' }}>
                  (1) The supported party has the following training, job skills, and work history:
                  <textarea style={{ display: 'block', width: '100%', height: '60px', backgroundColor: 'rgb(225, 243, 243)' }}></textarea>
                </div>
                <div style={{ marginBottom: '10px' }}>
                  (2) The current job market for the job skills of the supported party described in item 3a(1) is:
                  <textarea style={{ display: 'block', width: '100%', height: '60px', backgroundColor: 'rgb(225, 243, 243)' }}></textarea>
                </div>
                <div style={{ marginBottom: '10px' }}>
                  (3) The supported party would need the following time and expense to acquire the education or training to develop the job skills described in item 3a(1):
                  <textarea style={{ display: 'block', width: '100%', height: '60px', backgroundColor: 'rgb(225, 243, 243)' }}></textarea>
                </div>
                <div style={{ marginBottom: '10px' }}>
                  (4) To develop other, more marketable job skills or employment, the supported party would need the following retraining or education:
                  <textarea style={{ display: 'block', width: '100%', height: '60px', backgroundColor: 'rgb(225, 243, 243)' }}></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <br />
    <hr style={{ width: "100%" }} />
                <div
                    className="footer"
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div style={{ listStyle: "none" , fontSize:'10px' }}>
                        <div>Form Approved for Optional Use</div>
                        <div>Judicial Council of California</div>
                        <div> FL-157 [Ne. January 1, 2012]</div>
                    </div>
                    <div style={{ }}>
                        <div style={{ marginLeft:"5px" , fontWeight: "bold" }}>
                        SPOUAL OR PARTNERSHIP SUPPORT DECLARTION AIIACHMENT
                        </div>
                    </div>
                    <div style={{ listStyle: "none", fontSize:'10px' }}>
                        <div> Family Code, § 270, 2030,2032,4320, 6344, 7640</div>
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
                                    <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginTop: "5px",width:"75%" }} type="text" id="name" />
                                </div>
                                <div style={{ marginLeft: "1.2rem" }}>
                                    <label htmlFor="street">RESPONDENT/DEFENDANT:</label>
                                    <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginTop: "5px",width:"69.5%" }} type="text" id="street" />
                                </div>
                                <div style={{ marginLeft: "1.2rem" }}>
                                    <label htmlFor="street">OTHER PARENT:</label>
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
      <div>
        <h3>3. Facts in support of request:</h3>
        <div style={{ marginBottom: '20px' }}>
          <label>
            <strong>b. Family Code section 4320(a)(2)</strong><br />
            Provide any facts that indicate the supported party's earning ability is, or is not, lower than it might be if he or she had not had periods of unemployment because of the time needed to attend to domestic duties <em>(explain)</em>:
          </label>
          <textarea style={{ width: '95%', height: '50px', backgroundColor: 'rgb(225, 243, 243)' }} />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label>
            <strong>c. Family Code section 4320(b)</strong><br />
            Provide any facts that indicate that the supported party contributed to the education, training, career position, or license of the supporting party.
          </label>
          <textarea style={{ width: '95%', height: '50px', backgroundColor: 'rgb(225, 243, 243)' }} />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label>
            <strong>d. Family Code section 4320(c)</strong>
          </label>
          <div style={{ marginBottom: '10px' }}>
            <label>
              (1) The supporting party <input type="checkbox" /> does <input type="checkbox" /> does not have the ability to pay spousal or domestic partner support.
            </label>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>
              (2) The supporting party's current gross income from employment or self-employment is <em>(specify)</em>:
            </label>
            <textarea style={{ width: '95%', height: '50px', backgroundColor: 'rgb(225, 243, 243)' }} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>
              (3) The supporting party's current income from investments, retirement, other sources is <em>(specify)</em>:
            </label>
            <textarea style={{ width: '95%', height: '50px', backgroundColor: 'rgb(225, 243, 243)' }} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>
              (4) The supporting party's current income from investments, retirement, other sources is <em>(specify)</em>:
            </label>
            <textarea style={{ width: '95%', height: '50px', backgroundColor: 'rgb(225, 243, 243)' }} />
          </div>
          <div>
            <label>
              (5) The supporting party's standard of living is <em>(describe, for example, type and frequency of vacations, value of home and other real estate, value of investments, type of vehicles owned, credit card use or non-use)</em>:
            </label>
            <textarea style={{ width: '95%', height: '70px', backgroundColor: 'rgb(225, 243, 243)' }} />
          </div>
        </div>
      </div>
    </form>
    <hr style={{width:'100%'}}/>
    <div
                    className="footer"
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div style={{ listStyle: "none" , fontSize:'10px' }}>
                        <div>Form Approved for Optional Use</div>
                        <div>Judicial Council of California</div>
                        <div> FL-157 [Ne. January 1, 2012]</div>
                    </div>
                    <div style={{ }}>
                        <div style={{ marginLeft:"5px" , fontWeight: "bold" }}>
                        SPOUAL OR PARTNERSHIP SUPPORT DECLARTION AIIACHMENT
                        </div>
                    </div>
                    <div style={{ listStyle: "none", fontSize:'10px' }}>
                        <div> Family Code, § 270, 2030,2032,4320, 6344, 7640</div>
                        <div> www.courtinfo.ca.gov</div>
                    </div>
                    <div style={{ listStyle: "none", fontWeight: "bold",fontSize:'15px' }}>
                    <li>Page 2 of 4</li>
                    </div>
                </div>

                <br />
                <br />
                <table style={{ width: "100%", border: "2px solid black", borderCollapse: "collapse" }}>
                    <tbody>
                        <tr>
                            <td style={{ border: "2px solid black", borderCollapse: "collapse" }}>
                                <div style={{ marginLeft: "1.2rem" }}>
                                    <label htmlFor="name">PETITIONER/PLAINTIFF:</label>
                                    <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginTop: "5px",width:"75%" }} type="text" id="name" />
                                </div>
                                <div style={{ marginLeft: "1.2rem" }}>
                                    <label htmlFor="street">RESPONDENT/DEFENDANT:</label>
                                    <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginTop: "5px",width:"69.5%" }} type="text" id="street" />
                                </div>
                                <div style={{ marginLeft: "1.2rem" }}>
                                    <label htmlFor="street">OTHER PARENT:</label>
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
      <div>
        <h3>3. Facts in support of request:</h3>

       
        <div style={{ marginBottom: '20px' }}>
          <label>
            <strong>e. Family Code section 4320(d)</strong><br />
            The supported party <input type="checkbox" /> does <input type="checkbox" /> does not need support to maintain the standard of living we enjoyed during the marriage or domestic partnership.
          </label>
        </div>

        
        <div style={{ marginBottom: '20px' }}>
          <label>
            <strong>f. Family Code Section 4320(e)</strong>
          </label>
          <div style={{ marginBottom: '20px' }}>
            <label>
              (1) The supported party's assets and obligations, including separate property, are <em>(list values and balances)</em>:
            </label>
            <textarea style={{ width: '95%', height: '300px', backgroundColor: 'rgb(225, 243, 243)' }} />
          </div>
          <div>
            <label>
              (2) The supporting party's assets and obligations, including separate property, are <em>(list values and balances)</em>:
            </label>
            <textarea style={{ width: '95%', height: '300px', backgroundColor: 'rgb(225, 243, 243)' }} />
          </div>
        </div>
      </div>
    </form>
    <hr style={{width:'100%'}}/>
    <div
                    className="footer"
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div style={{ listStyle: "none" , fontSize:'10px' }}>
                        <div>Form Approved for Optional Use</div>
                        <div>Judicial Council of California</div>
                        <div> FL-157 [Ne. January 1, 2012]</div>
                    </div>
                    <div style={{ }}>
                        <div style={{ marginLeft:"5px" , fontWeight: "bold" }}>
                        SPOUAL OR PARTNERSHIP SUPPORT DECLARTION AIIACHMENT
                        </div>
                    </div>
                    <div style={{ listStyle: "none", fontSize:'10px' }}>
                        <div> Family Code, § 270, 2030,2032,4320, 6344, 7640</div>
                        <div> www.courtinfo.ca.gov</div>
                    </div>
                    <div style={{ listStyle: "none", fontWeight: "bold",fontSize:'15px' }}>
                    <li>Page 3 of 4</li>
                    </div>
                </div>
                <br /><br />
                <table style={{ width: "100%", border: "2px solid black", borderCollapse: "collapse" }}>
                    <tbody>
                        <tr>
                            <td style={{ border: "2px solid black", borderCollapse: "collapse" }}>
                                <div style={{ marginLeft: "1.2rem" }}>
                                    <label htmlFor="name">PETITIONER/PLAINTIFF:</label>
                                    <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginTop: "5px",width:"75%" }} type="text" id="name" />
                                </div>
                                <div style={{ marginLeft: "1.2rem" }}>
                                    <label htmlFor="street">RESPONDENT/DEFENDANT:</label>
                                    <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginTop: "5px",width:"69.5%" }} type="text" id="street" />
                                </div>
                                <div style={{ marginLeft: "1.2rem" }}>
                                    <label htmlFor="street">OTHER PARENT:</label>
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
      <div>
        <h3>3. Facts in support of request:</h3>

        {/* Section g */}
        <div style={{ marginBottom: '20px' }}>
          <label>
            <strong>g. Family Code section 4320(f)</strong><br />
            Length of marriage or domestic partnership <em>(specify)</em>:
          </label>
          <textarea style={{ width: '95%', height: '50px', backgroundColor: 'rgb(225, 243, 243)' }} />
        </div>

        {/* Section h */}
        <div style={{ marginBottom: '20px' }}>
          <label>
            <strong>h. Family Code section 4320(g)</strong><br />
            Provide any facts indicating whether or not the supported party is able to work without unduly interfering with the interests of the children in his or her care <em>(describe)</em>:
          </label>
          <textarea style={{ width: '95%', height: '150px', backgroundColor: 'rgb(225, 243, 243)' }} />
        </div>

        {/* Section i */}
        <div style={{ marginBottom: '20px' }}>
          <label>
            <strong>i. Family Code section 4320(h)</strong>
          </label>
          <div style={{ marginBottom: '10px' }}>
            <label>
              (1) Petitioner's age is <em>(specify)</em>: <input type="text" style={{ width: '150px',backgroundColor: 'rgb(225, 243, 243)' }} /> Respondent's age is <em>(specify)</em>: <input type="text" style={{ width: '150px',backgroundColor: 'rgb(225, 243, 243)' }} />
            </label>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>
              (2) Petitioner's current health condition is <em>(describe)</em>:
            </label>
            <textarea style={{ width: '95%', height: '150px', backgroundColor: 'rgb(225, 243, 243)' }} />
          </div>
          <div>
            <label>
              (3) Respondent's current health condition is <em>(describe)</em>:
            </label>
            <textarea style={{ width: '95%', height: '150px', backgroundColor: 'rgb(225, 243, 243)' }} />
          </div>
        </div>

        {/* Section j */}
        <div style={{ marginBottom: '20px' }}>
          <label>
            <strong>j. Additional factors (Family Code sections 4320(i)–(n))</strong><br />
            The court will also consider the following factors before making a judgment for spousal or domestic partner support:
          </label>
          <ul>
            <li>(1) Any documented evidence of domestic violence between the parties as defined in Family Code section 6211.</li>
            <li>(2) The immediate and specific tax consequences for each party;</li>
            <li>(3) The balance of the hardships on each party;</li>
            <li>(4) The criminal conviction of an abusive spouse in reducing or eliminating support in accordance with Family Code section 4325;</li>
            <li>(5) The goal that the supported party will be self-supporting within a reasonable period of time; and</li>
            <li>(6) Any other factors the court determines are just and equitable.</li>
          </ul>
          <label>
            Describe below any additional information that will assist the court in considering the above factors:
          </label>
          <textarea style={{ width: '95%', height: '400px', backgroundColor: 'rgb(225, 243, 243)' }} />
        </div>
      </div>
    </form>
    <hr style={{width:'100%'}}/>
    <div
                    className="footer"
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div style={{ listStyle: "none" , fontSize:'10px' }}>
                        <div>Form Approved for Optional Use</div>
                        <div>Judicial Council of California</div>
                        <div> FL-157 [Ne. January 1, 2012]</div>
                    </div>
                    <div style={{ }}>
                        <div style={{ marginLeft:"5px" , fontWeight: "bold" }}>
                        SPOUAL OR PARTNERSHIP SUPPORT DECLARTION AIIACHMENT
                        </div>
                    </div>
                    <div style={{ listStyle: "none", fontSize:'10px' }}>
                        <div> Family Code, § 270, 2030,2032,4320, 6344, 7640</div>
                        <div> www.courtinfo.ca.gov</div>
                    </div>
                    <div style={{ listStyle: "none", fontWeight: "bold",fontSize:'15px' }}>
                    <li>Page 4 of 4</li>
                    </div>
                </div>
      </div>
</div>
    )
};









               