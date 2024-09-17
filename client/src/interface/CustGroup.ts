


export interface CustGroupInterface{
    Name: string;
    Description: string;
    RecId?: number;
    CreatedBy: string;
    CreatedDateTime?: string;
    ModifiedBy: string;
    ModifiedDateTime?: string;
}

export const EmptyCustGroup: CustGroupInterface = {
    Name: "",
    Description: "",
    CreatedBy: "",
    ModifiedBy: "",
    RecId: 0,
    CreatedDateTime: "",
    ModifiedDateTime: ""
}
