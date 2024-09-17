import React from 'react'

export default function FL144() {


    return (
        <>
            <div className='text-black w-full pdf'>
                <h3 style={{ display: "flex", justifyContent: "end", marginTop: 0, marginBottom: 0 }}>FL-144</h3>
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
                            <div className='flex justify-end items-center mt-1'>
                                <label htmlFor="street" style={{ fontSize: "10px" }}>OTHER:</label>
                                <input size={85} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px 2px", height: "18px", width: "74.4%" }} type="text" id="street" />
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
                                <b>STIPULATION AND WAIVER OF FINAL DECLARATION OF DISCLOSURE</b>
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
                    style={{ pageBreakInside: "auto", verticalAlign: "top", fontSize: "10px" }}
                    cellPadding={5}
                    cellSpacing={5}
                    className='my-2'
                >
                    <tbody>
                        <tr>
                            <td width="3%" valign="top">
                                1.
                            </td>
                            <td width="95%" valign="top">
                                <div style={{ display: "flex" }}>
                                    Under Family Code section 2105(d), the parties agree to waive the
                                    requirements of Family Code section 2105(a) concerning the
                                    <br />
                                    final declaration of disclosure.
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table
                    width="100%"
                    style={{ pageBreakInside: "auto", verticalAlign: "top", fontSize: "10px" }}
                    cellPadding={5}
                    cellSpacing={5}
                    className='my-2'
                >
                    <tbody>
                        <tr>
                            <td width="3%" valign="top">
                                2.
                            </td>
                            <td width="95%" valign="top">
                                <div style={{ display: "flex" }}>The parties agree as follows:</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table
                    width="100%"
                    style={{ pageBreakInside: "auto", verticalAlign: "top", fontSize: "10px" }}
                    cellPadding={5}
                    cellSpacing={5}
                    className='my-2'
                >
                    <tbody>
                        <tr>
                            <td width="3%">
                                <div />
                            </td>
                            <td width="3%" valign="top">
                                a.
                            </td>
                            <td width="95%" valign="top">
                                <div style={{ display: "flex" }}>
                                    We have complied with Family Code section 2104, and the preliminary
                                    declarations of disclosure have been completed and
                                    <br /> exchanged.
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table
                    width="100%"
                    style={{ pageBreakInside: "auto", verticalAlign: "top", fontSize: "10px" }}
                    cellPadding={5}
                    cellSpacing={5}
                    className='my-2'
                >
                    <tbody>
                        <tr>
                            <td width="3%">
                                <div />
                            </td>
                            <td width="3%" valign="top">
                                b.
                            </td>
                            <td width="95%" valign="top">
                                <div style={{ display: "flex" }}>
                                    We have completed and exchanged a current Income and Expense
                                    Declaration (form FL-150) that includes all material facts and
                                    <br />
                                    information on each party's earnings, accumulations, and expenses.
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table
                    width="100%"
                    style={{ pageBreakInside: "auto", verticalAlign: "top", fontSize: "10px" }}
                    cellPadding={5}
                    cellSpacing={5}
                    className='my-2'
                >
                    <tbody>
                        <tr>
                            <td width="3%">
                                <div />
                            </td>
                            <td width="3%" valign="top">
                                c.
                            </td>
                            <td width="95%" valign="top">
                                <div style={{ display: "flex" }}>
                                    We have fully complied with Family Law section 2102 and have fully
                                    augmented the preliminary declarations of disclosure,
                                    <br />
                                    including disclosure of all material facts and information on
                                </div>
                                <div style={{ display: "flex", marginBottom: 10, marginTop: 10 }}>
                                    <div>(1)</div>
                                    <div style={{ marginLeft: 5 }}>
                                        the characterization of all assets and liabilities,
                                    </div>
                                </div>
                                <div style={{ display: "flex", marginBottom: 10 }}>
                                    <div>(2)</div>
                                    <div style={{ marginLeft: 5 }}>
                                        the valuation of all assets that are community property or in
                                        which the community has an interest, and
                                    </div>
                                </div>
                                <div style={{ display: "flex"}}>
                                    <div>(3)</div>
                                    <div style={{ marginLeft: 5 }}>
                                        the amounts of all community debts and obligations.
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table
                    width="100%"
                    style={{ pageBreakInside: "auto", verticalAlign: "top", fontSize: "10px" }}
                    cellPadding={5}
                    cellSpacing={5}
                    className='my-2'
                >
                    <tbody>
                        <tr>
                            <td width="3%">
                                <div />
                            </td>
                            <td width="3%" valign="top">
                                d.
                            </td>
                            <td width="95%" valign="top">
                                <div style={{ display: "flex" }}>
                                    Each of the parties enters into this waiver knowingly,
                                    intelligently, and voluntarily
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table
                    width="100%"
                    style={{ pageBreakInside: "auto", verticalAlign: "top", fontSize: "10px" }}
                    cellPadding={5}
                    cellSpacing={5}
                    className='my-2'
                >
                    <tbody>
                        <tr>
                            <td width="3%">
                                <div />
                            </td>
                            <td width="3%" valign="top">
                                e.
                            </td>
                            <td width="95%" valign="top">
                                <div style={{ display: "flex" }}>
                                    Each party understands that this waiver does not limit the legal
                                    disclosure obligations of the parties but rather is a
                                    <br /> statement under penalty of perjury that those obligations
                                    have been fulfilled.
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table
                    width="100%"
                    style={{ pageBreakInside: "auto", verticalAlign: "top", fontSize: "10px" }}
                    cellPadding={5}
                    cellSpacing={5}
                    className='my-2'
                >
                    <tbody>
                        <tr>
                            <td width="3%">
                                <div />
                            </td>
                            <td width="3%" valign="top">
                                f.
                            </td>
                            <td width="95%" valign="top">
                                <div style={{ display: "flex" }}>
                                    The parties also understand that if they do not comply with these
                                    obligations, the court will set aside the judgment.
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p style={{ fontSize: "14px" }}>
                    The petitioner and respondent declare under penalty of perjury under the
                    laws of the State of California that the foregoing is true and
                    <br /> correct.
                </p>
                <div style={{ margin: 10, marginBottom: 15 }} className='flex justify-start items-center'>
                    <p style={{fontSize:"12px"}}>Date:</p>
                    <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px 2px", width: "20%", height: "18px" }} type="text" id="street" />
                </div>
                <div style={{ display: "flex", marginBottom: 20, width: "100%" }}>
                    <div className='flex justify-center flex-col items-center w-[45%]'>
                        <input style={{ backgroundColor: "rgb(225, 243, 243)", borderBottom: "1px solid black", margin: "0px", width: "100%", height: "18px" }} type="text" id="street" />
                        <p style={{ fontSize: "10px" }}>(TYPE OR PRINT NAME)</p>
                    </div>
                    <div className='flex justify-center flex-col items-center w-[45%]' style={{ marginLeft: 100 }}>
                        {" "}
                        <div style={{ borderBottom: "1px solid black", margin: "0px", width: "100%", height: "18px" }} id="street" />
                        <p style={{ fontSize: "10px" }}>(SIGNATURE OF PETITIONER)</p>
                    </div>
                </div>
                <div style={{ display: "flex", width: "100%", marginBottom: 40, }}>
                    <div className='flex justify-center flex-col items-center w-[45%]'>
                        <input style={{ backgroundColor: "rgb(225, 243, 243)", borderBottom: "1px solid black", margin: "0px", width: "100%", height: "18px" }} type="text" id="street" />
                        <p style={{ fontSize: "10px" }}>(TYPE OR PRINT NAME)</p>
                    </div>
                    <div className='flex justify-center flex-col items-center w-[45%]' style={{ marginLeft: 100 }}>
                        {" "}
                        <div style={{ borderBottom: "1px solid black", margin: "0px", width: "100%", height: "18px" }} id="street" />
                        <p style={{ fontSize: "10px" }}>(SIGNATURE OF RESPONDENT)</p>
                    </div>
                </div>
                <hr style={{ width: "100%" }} />
                <div
                    className="footer"
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <div style={{ listStyle: "none", fontSize: 12 }}>
                        <li>
                            Form Approved for Optional Use
                            <br />
                            Judicial Council of California
                            <br />
                            FL-144 [Rev. January 1, 2007]
                        </li>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <h3>
                            STIPULATION AND WAIVER OF FINAL
                            <br />
                            DECLARATION OF DISCLOSURE
                        </h3>
                    </div>
                    <div style={{ listStyle: "none", fontSize: 12 }}>
                        <li>
                            Family Code, §§ 2102, 2104, 2105(d)
                            <br />
                            www.courtinfo.ca.gov
                        </li>
                    </div>
                </div>
            </div>
        </>



    )
}
