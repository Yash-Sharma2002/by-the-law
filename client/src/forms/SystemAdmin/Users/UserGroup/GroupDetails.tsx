import React from 'react'
import { EmptyUserGroup, UserGroupInterface } from '../../../../interface/UserGroup'
import DisplayTitle from '../../../../components/common/Utils/DisplayTitle'
import { Stack } from '@chakra-ui/react'
import FormInput from '../../../../components/input/FormInput'

type Props = {
    refGroup: UserGroupInterface
}

export default function GroupDetails(props: Props) {
    const [group, setGroup] = React.useState<UserGroupInterface>(props.refGroup);

    React.useEffect(() => {
        if (props.refGroup && props.refGroup.Name)
            setGroup(props.refGroup);
        else setGroup(EmptyUserGroup);
    }, [props.refGroup]);

    console.log(group);
    return (
        <>
            <div className="border rounded-md shadow-md mt-4">
                <DisplayTitle title="Group Details" />

                <Stack direction="row" spacing={4} className="border-t p-4">
                    <FormInput
                        label="Name"
                        defaultValue={group.Name}
                        isDisabled={true}
                        name='Name'
                    />
                    <FormInput
                        label="Description"
                        defaultValue={group.Description}
                        isDisabled={true}
                        name='Description'
                    />

                    <FormInput
                        label="Created By"
                        defaultValue={group.CreatedBy}
                        isDisabled={true}
                        name='CreatedBy'
                    />

                    <FormInput
                        label="Created Date"
                        defaultValue={new Date(group.CreatedDateTime || "").toDateString()}
                        isDisabled={true}
                        name='CreatedDateTime'
                    />
                </Stack>
            </div>
        </>
    )
}
