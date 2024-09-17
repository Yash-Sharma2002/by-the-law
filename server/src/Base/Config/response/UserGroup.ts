enum UserGroupMessage {
    CREATED = 'UserGroup created',
    UPDATED = 'UserGroup updated',
    DELETED = 'UserGroup deleted',
    NOT_FOUND = 'UserGroup not found',
    FOUND = 'UserGroup found',
    DESCRIPTION_REQUIRED = 'Description is required',
    ALREADY_EXISTS = 'UserGroup already exists',
    NAME_REQUIRED = 'Name is required',
}

export default UserGroupMessage;