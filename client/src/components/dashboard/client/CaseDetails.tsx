import React from 'react'
import FL144, { EmptyFL144 } from '../../pdf/fl144/SU144'
import { Button, Modal, ModalFooter, ModalContent, ModalOverlay, ModalBody, ModalHeader } from '@chakra-ui/react'


type Props = {
    client_id: string,
    isOpen: boolean,
    onClose: () => void
}

export default function CaseDetails(props: Props) {

    const [caseDetails, setCaseDetails] = React.useState<FL144>(EmptyFL144)


    function handleChange(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {
        setCaseDetails({
            ...caseDetails,
            [e.target.name]: e.target.value
        })
    }

    function handleSuperiorCourtChange(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {
        setCaseDetails({
            ...caseDetails,
            SUPERIORCOURTOFCALIFORNIA: {
                ...caseDetails.SUPERIORCOURTOFCALIFORNIA,
                [e.target.name]: e.target.value
            }
        })
    }


    return (
        <>
            <Modal isOpen={props.isOpen} onClose={props.onClose}
                size={"6xl"}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Case Details</ModalHeader>
                    <ModalBody>
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
                                            name="AttorneyOrPartyWithoutAttorney"
                                            onChange={handleChange}
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
                                            <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", height: "18px", margin: "0px 2px", }} className='w-[46.7%]' type="number" id="TelephoneNo"
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className='flex justify-end items-center' style={{ width: "inherit" }}>
                                            <label style={{ fontSize: "10px" }} htmlFor="telephone">FAX NO. <span style={{ fontStyle: "italic" }}>(Optional)</span>:</label>
                                            <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", height: "18px", margin: "0px 2px", }} className='w-[46.7%]' type="number" id="FaxNo"
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className='mt-1 flex justify-end items-center'>
                                        <label style={{ fontSize: "10px" }} htmlFor="fax">E-MAIL ADDRESS <span style={{ fontStyle: "italic" }}>(Optional)</span>:</label>
                                        <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px 2px", height: "18px", width: '71%' }} type="text" id="EmailAddress"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='mt-1 flex justify-end items-center'>
                                        <label style={{ fontSize: "10px" }} htmlFor="attorney">ATTORNEY FOR <span style={{ fontStyle: "italic" }}>(Name)</span>:</label>
                                        <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px 2px", height: "18px", width: "71%" }} type="email" id="AttorneyFor"
                                            onChange={handleChange}
                                        />
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
                                <td style={{ margin: 0, padding: 1, paddingBottom: 2, borderCollapse: "collapse", borderTop: "2px solid black", display: "flex", flexDirection: "column", justifyContent: "flex-end", width: "70%", borderRight: "2px solid black" }}>
                                    <div className=' flex justify-end items-center'>
                                        <label htmlFor="name" style={{ fontSize: "10px", fontWeight: "bold" }}>SUPERIOR COURT OF CALIFORIA, COUNTY OF</label>
                                        <input
                                            style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px 2px", height: "18px", width: '56%' }}
                                            type="text"
                                            id="Countyof"
                                            onChange={handleSuperiorCourtChange}
                                        />
                                    </div>
                                    <div className='mt-1 flex justify-end items-center'>
                                        <label htmlFor="street" style={{ fontSize: "10px" }}>STREET ADDRESS:</label>
                                        <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px 2px", height: "18px", width: "79.7%" }}
                                            type="text" id="StreetAddress"
                                            onChange={handleSuperiorCourtChange}
                                        />
                                    </div>
                                    <div className='mt-1 flex justify-end items-center'>
                                        <label htmlFor="street" style={{ fontSize: "10px" }}>MAILING ADDRESS:</label>
                                        <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px 2px", height: "18px", width: "79.7%" }}
                                            onChange={handleSuperiorCourtChange}
                                            type="text" id="MailingAddress" />
                                    </div>
                                    <div className='mt-1 flex justify-end items-center'>
                                        <label htmlFor="street" style={{ fontSize: "10px" }}>CITY AND ZIP CODE:</label>
                                        <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px 2px", height: "18px", width: "79.7%" }}
                                            onChange={handleSuperiorCourtChange}
                                            type="text" id="CityAndZipCode" />
                                    </div>
                                    <div className='mt-1 flex justify-end items-center'>
                                        <label htmlFor="street" style={{ fontSize: "10px" }}>BRANCH NAME:</label>
                                        <input style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px 2px", height: "18px", width: "79.7%" }} type="text" id="BranchName"
                                            onChange={handleSuperiorCourtChange}
                                        />
                                    </div>
                                </td>
                                <td style={{ textAlign: "center", top: 0, marginBottom: 10, borderCollapse: "collapse" }}
                                    className=' w-[30%]'
                                >
                                </td>
                            </tr>
                            <tr className='flex justify-center items-center w-full'>
                                <td style={{ borderTop: "2px solid black", borderCollapse: "collapse", padding: 1, paddingBottom: 2, width: "70%", borderRight: "2px solid black", borderBottom: "2px solid black" }}>
                                    <div className='flex justify-end items-center '>
                                        <label htmlFor="name" style={{ fontSize: "10px" }}>PLAINTIFF/PETITIONER:</label>
                                        <input size={86} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px 2px", height: "18px", width: "74.4%" }}
                                            onChange={handleChange}
                                            type="text" id="PlaintiffPetitioner" />
                                    </div>
                                    <div className='flex justify-end items-center mt-1'>
                                        <label htmlFor="street" style={{ fontSize: "10px" }}>DEFENDENT/RESPONDENT:</label>
                                        <input size={85} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px 2px", height: "18px", width: "83%" }}
                                            onChange={handleChange}
                                            type="text" id="DefendantRespondent" />
                                    </div>
                                    <div className='flex justify-end items-center mt-1'>
                                        <label htmlFor="street" style={{ fontSize: "10px" }}>OTHER:</label>
                                        <input size={85} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px 2px", height: "18px", width: "74.4%" }} type="text" id="Other"
                                            onChange={handleChange}
                                        />
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
                                <td className='px-2 w-[30%]' style={{ borderTop: "2px solid black", }}>
                                    <div style={{ margin: "0px", }}>
                                        <label htmlFor="street" style={{ fontSize: "10px" }}>CASE NUMBER:</label>
                                        <br />
                                        <input size={35} style={{ backgroundColor: "rgb(225, 243, 243)", border: "none", margin: "0px", height: "18px", width: "100%" }} type="text" id="CaseNumber"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={props.onClose}>
                            Close
                        </Button>
                        <Button variant='ghost'>Save</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal >
        </>
    )
}
