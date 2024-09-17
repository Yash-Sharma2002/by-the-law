

/**
 * CustGroupMessage
 * @export CustGroupMessage
 * @enum {string}
 */
enum CustGroupMessage {
    CREATED = 'CustGroup created',
    UPDATED = 'CustGroup updated',
    DELETED = 'CustGroup deleted',
    NOT_FOUND = 'CustGroup not found',
    DESCRIPTION_REQUIRED = 'Description is required',
    ALREADY_EXISTS = 'CustGroup already exists',
    NAME_REQUIRED = 'Name is required',
}

export default CustGroupMessage;