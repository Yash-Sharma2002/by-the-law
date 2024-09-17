import React from 'react'
import { BusUnitInterface } from '../../../interface/BusUnit'
import FormInput from '../../../components/input/FormInput'
import { Stack } from '@chakra-ui/react'
import DisplayTitle from '../../../components/common/Utils/DisplayTitle'

type Props = {
    refUnit: BusUnitInterface

}

export default function UnitDetails(props: Props) {
    return (
        <>
            <div className="border rounded-md shadow-md mt-4">
                <DisplayTitle title="Unit Details" />

                <Stack direction={['column', 'row']} spacing={4} className="border-t p-4">
                    <FormInput
                        label="Name"
                        defaultValue={props.refUnit ? props.refUnit.Name : ""}
                        isDisabled={true}
                        name='Name'
                    />
                    <FormInput
                        label="Description"
                        defaultValue={props.refUnit ? props.refUnit.Description : ""}
                        isDisabled={true}
                        name='Description'
                    />

                    <FormInput
                        label="Created By"
                        defaultValue={props.refUnit ? props.refUnit.CreatedBy : ""}
                        isDisabled={true}
                        name='CreatedBy'
                    />

                    <FormInput
                        label="Created Date"
                        defaultValue={props.refUnit ? new Date(props.refUnit.CreatedDateTime || "").toDateString() : ""}
                        isDisabled={true}
                        name='CreatedDateTime'
                    />
                </Stack>
            </div>
        </>
    )
}
