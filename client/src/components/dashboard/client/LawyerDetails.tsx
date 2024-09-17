import React from 'react'
import { Button, Modal, ModalFooter, ModalContent, ModalOverlay, ModalHeader, ModalBody } from '@chakra-ui/react'
import toTitleCase from '../../../functions/toTitle'
import { Link } from 'react-router-dom'


type Props = {
    data: any,
    isOpen: boolean,
    onClose: () => void
}

export default function LawyerDetails(props: Props) {
    return (
        <>
            <Modal isOpen={props.isOpen} onClose={props.onClose} size={"md"}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Lawyer Details</ModalHeader>
                    <ModalBody>
                        <div className="flex flex-col">
                            <div className="flex flex-row">
                                <p className="text-lg font-bold">Lawyer ID:</p>
                                <Link
                                    className="text-blue-500 hover:underline"
                                    to={
                                        "/dashboard/lawyer/" + (props.data && props.data.client.lawyer_id) + "/details"
                                    }
                                >
                                    <p className="text-lg ml-2">{props.data && props.data.lawyer.username}</p>
                                </Link>
                            </div>
                            <div className="flex flex-row">
                                <p className="text-lg font-bold">Lawyer Name:</p>
                                <p className="text-lg ml-2">{props.data && props.data.lawyer.name}</p>
                            </div>
                            <div className="flex flex-row">
                                <p className="text-lg font-bold">Lawyer Email:</p>
                                <p className="text-lg ml-2">{props.data && props.data.lawyer.email}</p>
                            </div>
                            <div className="flex flex-row">
                                <p className="text-lg font-bold">Lawyer Status:</p>
                                <p className="text-lg ml-2">
                                    {toTitleCase((props.data && props.data.lawyer.status!) || '')}
                                </p>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={props.onClose}>
                            Close
                        </Button>
                        {/* <Button variant='ghost'>Secondary Action</Button> */}
                    </ModalFooter>
                </ModalContent>
            </Modal >
        </>
    )
}
