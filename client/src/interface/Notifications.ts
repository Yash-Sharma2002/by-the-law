

export interface NotificationsInterface {
    Type: number;
    Show:number;
    Status: number;
    Title: string;
    Description: string;
    GeneratedBy: number;
    GeneratedFor: number;
    RefRecId?: number;
    RefTableId?: number;
    RecId?: number;
    CreatedBy?: string;
    CreatedDateTime?: string;
    ModifiedBy?: string;
    ModifiedDateTime?: string;
}


export const EmptyNotifications: NotificationsInterface = {
    Type: 0,
    Status: 0,
    Show:0,
    Title: "",
    Description: "",
    GeneratedBy: 0,
    GeneratedFor: 0,
    RefTableId: 0,
    RefRecId: 0,
    RecId: 0,
    CreatedBy: "",
    ModifiedBy: "",
    ModifiedDateTime: "",
    CreatedDateTime: ""
}