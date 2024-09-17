

/**
 * RemarksMessage
 * @export
 * @enum {string}
 * @readonly
 */
enum RemarksMessage {
    Title = "Title is required",
    Type = "Type is required",
    Des = "Description is required",
    Image = "Image is required",
    Video = "Video is required",
    CreatedBy = "CreatedBy is required",
    ModifiedBy = "ModifiedBy is required",
    CreatedDateTime = "CreatedDateTime is required",
    ModifiedDateTime = "ModifiedDateTime is required",
    RefRecId = "RefRecId is required",
    RefTableId = "RefTableId is required",
    Created = "Remarks created successfully",
    Updated = "Remarks updated successfully",
    Deleted = "Remarks deleted successfully",
    Failed = "Remarks failed",
    NotExist = "Remarks does not exist",
    Exist = "Remarks already exist"
}

export default RemarksMessage;