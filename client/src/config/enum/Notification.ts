

/**
 * Enum for Notification Type
 * @readonly
 * @enum {number}
 */
export enum NotificationType{
    Approve = 0,
    General = 1,
}


/**
 * Enum for Notification Action
 * @readonly
 * @enum {number}
 */
export enum NotificationAction{
    ApproveProjectStatusChange = 0,
    RejectProjectStatusChange = 1,
    ApproveProject = 2,
    RejectProject = 3,
    Clear = 4,
    MarkRead = 5
}