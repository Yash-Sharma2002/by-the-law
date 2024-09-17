


/**
 * Projects Message
 * @readonly
 * @enum {string}
 */
enum ProjectsMessage {
    ProjectNumber = 'Project Number is required',
    Name = 'Name is required',
    Description = 'Description is required',
    Client = 'Client is required',
    ProjectManager = 'Project Manager is required',
    DesignManager = 'Design Manager is required',
    DlvLocation = 'Delivery Location is required, No Primary Address Found',
    StartDate = 'Start Date is required',
    EndDate = 'End Date is required',
    EndDateInvalid = 'End Date is invalid',
    StartDateInvalid = 'Start Date is invalid',
    Category = 'Category is required',
    Budget = 'Budget is required',
    AddressId = 'Address is required',
    Status = 'Status is required',
    AlreadyExists = 'Project Already Exists',
    NotFound = 'Project Not Found',
    ProjectCreated = 'Project Created',
    ProjectUpdated = 'Project Updated',
    ProjectDeleted = 'Project Deleted',
    ProjectApproved = 'Project Approved',
    ProjectRejected = 'Project Rejected',
    Fetched = 'Projects Fetched',
    DesignManagerAssigned = 'Design Manager Assigned',
    RequestAlreadySent = 'Request Already Sent',
    CannotChangeStatus = 'Cannot Change Status to Backward',
}

export default ProjectsMessage;