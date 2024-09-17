/**
 * ClientFieldsMessage
 * @description User fields message
 * @readonly
 */
enum ClientFieldsMessage {
    AccountNum = "Account Number is required",
    Name = "Name is required",
    Email = "Email is required",
    Password = "Password is required",
    Status = "Status is required",
    Manager = "Manager is required",
    CreatedBy = "Created By is required",
    ModifiedBy = "Modified By is required",
    CreatedDateTime = "Created Date Time is required",
    ModifiedDateTime = "Modified Date Time is required",
    RecId = "RecId is required",
    Found = "Client found",
    NotFound = "Client not found",
    Insert = "Client inserted",
    Update = "Client updated",
    Delete = "Client deleted",
    AlreadyExists = "Client already exists",
    DeliveryLocation = "Location Added"
}

export default ClientFieldsMessage;
