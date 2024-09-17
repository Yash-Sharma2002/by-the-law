import React from 'react'

export default function SU161() {
    return (

        <>
            <div style={{ maxWidth: "1100px", margin: "auto" }}>
                <h3 style={{ display: "flex", justifyContent: "end", marginTop: "0", marginBottom: "0" }}>FL-161</h3>
                <table style={{ width: "100%", border: "2px solid black", borderCollapse: "collapse" }}>
                    <tbody>
                        <tr>
                            <td style={{ border: "2px solid black", borderCollapse: "collapse" }}>
                                <div style={{ marginLeft: "1.2rem" }}>
                                    <label htmlFor="name">PETITIONER:</label>
                                    <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginTop: "5px",width:"88%" }} type="text" id="name" />
                                </div>
                                <div style={{ marginLeft: "1.2rem" }}>
                                    <label htmlFor="street">RESPONDENT:</label>
                                    <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginTop: "5px",width:"86%" }} type="text" id="street" />
                                </div>
                                <div style={{ marginLeft: "1.2rem" }}>
                                    <label htmlFor="street">OUTHER PARENT/PARTY:</label>
                                    <input  style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", marginTop: "5px",width:"76%" }} type="text" id="street" />
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
                <div><br />
                <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}><b>C - D = E</b></div>
                <div style={{ margin: '20px' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th colSpan={8} style={{ padding: '8px' }}>
              <input type="checkbox" /> PETITIONER'S &nbsp;&nbsp;
              <input type="checkbox" /> RESPONDENT'S &nbsp;&nbsp;
              <input type="checkbox" /> COMMUNITY AND QUASI-COMMUNITY PROPERTY DECLARATION &nbsp;&nbsp;
              <input type="checkbox" /> SEPARATE PROPERTY DECLARATION
            </th>
          </tr>
          <br />
          <tr>
            <th style={{ border: '1px solid black', padding: '8px' }}></th>
            <th style={{ border: '1px solid black', padding: '8px' }}>A</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>B</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>C</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>- D</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>= E</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>F</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>F</th>
          </tr>
          <tr>
            <th style={{ border: '1px solid black', padding: '8px' }}>ITEM NO.</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>BRIEF DESCRIPTION</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>DATE ACQUIRED (mm/dd/yyyy)</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>GROSS FAIR MARKET VALUE</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>AMOUNT OF DEBT</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>NET FAIR MARKET VALUE</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>PROPOSAL Award or Confirm to: PETITIONER</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>FOR DIVISION Confirm to: RESPONDENT</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>1</td>
            <td style={{ border: '1px solid black', padding: '8px',  }}>
            <textarea style={{ width: '100%', height: '100%', backgroundColor: 'rgb(225, 243, 243)' }}></textarea>
            </td>
            <td style={{ border: '1px solid black', padding: '8px', }}>
            <textarea style={{ width: '100%', height: '100%', backgroundColor: 'rgb(225, 243, 243)' }}></textarea>
            </td>
            <td style={{ border: '1px solid black', padding: '8px',  }}>$
            <textarea style={{ width: '100%', height: '100%', backgroundColor: 'rgb(225, 243, 243)' }}></textarea>
            </td>
            <td style={{ border: '1px solid black', padding: '8px', }}>$
            <textarea style={{ width: '100%', height: '100%', backgroundColor: 'rgb(225, 243, 243)' }}></textarea>
            </td>
            <td style={{ border: '1px solid black', padding: '8px',  }}>$
            <textarea style={{ width: '100%', height: '100%', backgroundColor: 'rgb(225, 243, 243)' }}></textarea>
            </td>
            <td style={{ border: '1px solid black', padding: '8px',  }}>$
            <textarea style={{ width: '100%', height: '100%', backgroundColor: 'rgb(225, 243, 243)' }}></textarea>
            </td>
            <td style={{ border: '1px solid black', padding: '8px',  }}>$
            <textarea style={{ width: '100%', height: '100%', backgroundColor: 'rgb(225, 243, 243)' }}></textarea>
            </td>
          </tr>
          {Array.from({ length: 19 }).map((_, index) => (
            <tr key={index + 2}>
              <td style={{ border: '1px solid black', padding: '8px' }}>{index + 2}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                <textarea style={{ width: '100%', height: '100%', backgroundColor: 'rgb(225, 243, 243)' }}></textarea>
              </td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                <textarea style={{ width: '100%', height: '100%', backgroundColor: 'rgb(225, 243, 243)' }}></textarea>
              </td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                <textarea style={{ width: '100%', height: '100%', backgroundColor: 'rgb(225, 243, 243)' }}></textarea>
              </td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                <textarea style={{ width: '100%', height: '100%', backgroundColor: 'rgb(225, 243, 243)' }}></textarea>
              </td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                <textarea style={{ width: '100%', height: '100%', backgroundColor: 'rgb(225, 243, 243)' }}></textarea>
              </td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                <textarea style={{ width: '100%', height: '100%', backgroundColor: 'rgb(225, 243, 243)' }}></textarea>
              </td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                <textarea style={{ width: '100%', height: '100%', backgroundColor: 'rgb(225, 243, 243)' }}></textarea>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>


    </div><br />
                <hr style={{ width: "100%" }} />
                <div
                    className="footer"
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div style={{ listStyle: "none" }}>
                        <li>Form Approved for Optional Use</li>
                        <li>Judicial Council of California</li>
                        <li>FL-161 [Rev. July 1, 2013]</li>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <h3><b>CONTINUATION OF PROPERTY DECLARATION</b></h3>
                        <label style={{ textAlign: "center", fontWeight: "bold" }}>
                        (Family Law)
                        </label>
                    </div>
                    <div style={{ listStyle: "none" }}>
                        <li>Family Code, §§ 115, 2104, 2500-2660</li>
                        <li>www.courts.ca.gov</li>
                    </div>
                    <div style={{ listStyle: "none" }}>
                        <li>Page 1 of 2</li>
                    </div>
                </div>
                <br /><br />
                <div>
      <form>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '8px' }}></th>
            <th style={{ border: '1px solid black', padding: '8px' }}>A</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>B</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>C</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>D</th>
            {/* <th style={{ border: '1px solid black', padding: '8px' }}></th> */}
            {/* <th style={{ border: '1px solid black', padding: '8px' }}>F</th> */}
            {/* <th style={{ border: '1px solid black', padding: '8px' }}>F</th> */}
          </tr>
            <tr>
              <th style={{ border: '1px solid black', padding: '5px' }}>ITEM NO.</th>
              <th style={{ border: '1px solid black', padding: '5px' }}>DEBTS—SHOW TO WHOM OWED</th>
              <th style={{ border: '1px solid black', padding: '5px' }}>DATE INCURRED</th>
              <th style={{ border: '1px solid black', padding: '5px' }}>AMOUNT OF DEBT</th>
              <th style={{ border: '1px solid black', padding: '5px' }}>PROPOSAL FOR DIVISION<br />Award or Confirm to:<br />PETITIONER RESPONDENT</th>
            </tr>
          </thead>
          <tbody>
            {[
              "1. ",
              "2. ",
              "3. ",
              "4. ",
              "5. ",
              "6. ",
              "7. ",
              "8. ",
              "9. ",
              "10. ",
              "11. ",
              "12. ",
              "13. ",
              "14. ",
              "15. ",
              "16. ",
              "17. ",
              "18. ",
              "19. ",
              "20. "
              
            ].map((item, index) => (
              <tr key={index}>
                <td style={{ border: '1px solid black', padding: '5px' }}>
                  {item}
                </td>
                <td style={{ border: '1px solid black', padding: '5px' }}>
                  <textarea style={{ backgroundColor: "rgb(225, 243, 243)", width: '100%' }}></textarea>
                </td>
                <td style={{ border: '1px solid black', padding: '5px' }}>
                  <textarea style={{ backgroundColor: "rgb(225, 243, 243)", width: '100%' }}></textarea>
                </td>
                <td style={{ border: '1px solid black', padding: '5px' }}>
                  <textarea style={{ backgroundColor: "rgb(225, 243, 243)", width: '100%' }}></textarea>
                </td>
                <td style={{ border: '1px solid black', padding: '5px' }}>
                  <textarea style={{ backgroundColor: "rgb(225, 243, 243)", width: '100%' }}></textarea>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>
    </div>
                
    <hr style={{ width: "100%" }} />
                <div
                    className="footer"
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div style={{ listStyle: "none" }}>
                        <li>Form Approved for Optional Use</li>
                        <li>Judicial Council of California</li>
                        <li>FL-161 [Rev. July 1, 2013]</li>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <h3><b>CONTINUATION OF PROPERTY DECLARATION</b></h3>
                        <label style={{ textAlign: "center", fontWeight: "bold" }}>
                        (Family Law)
                        </label>
                    </div>
                    <div style={{ listStyle: "none" }}>
                        <li>Family Code, §§ 115, 2104, 2500-2660</li>
                        <li>www.courts.ca.gov</li>
                    </div>
                    <div style={{ listStyle: "none" }}>
                        <li>Page 2 of 2</li>
                    </div>
                </div><br />
                
            </div>
        </>





    )
}
