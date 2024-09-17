

/**
 * Interface for Project Table
 * @interface
 * @description Interface for Project Table
 */
export interface ProjTableInterface {
    ProjId: string;
    Name: string;
    Description: string;
    StartDate: string;
    EndDate: string;
    ExtendedDate?: string;
    Status: number;
    Budget: number;
    CustAccount: number;
    ProjManager: number;
    DlvLocation: number;
    Type: number;
    CreatedBy: string;
    CreatedDateTime?: string;
    ModifiedBy: string;
    ModifiedDateTime?: string;
    RecId?: number;
}




export default interface ProjTableClass extends ProjTableInterface {
    setProjTable(projTable: ProjTableInterface): void;
    setBlank(): void;
    validate(): void;
    modified(): void;
    insert(): void;
    update(): void;
    delete(): void;
    get(): void;
    flush(): void;

    // params
    paramProjId(ProjId: string): string;
    paramName(Name: string): string;
    paramDescription(Description: string): string;
    paramStartDate(StartDate: string): string;
    paramEndDate(EndDate: string): string;
    paramExtendedDate(ExtendedDate: string): string;
    paramStatus(Status: number): number;
    paramBudget(Budget: number): number;
    paramCustAccount(CustAccount: number): number;
    paramProjManager(ProjManager: number): number;
    paramDlvLocation(DlvLocation: number): number;
    paramType(Type: number): number;
    paramCreatedBy(CreatedBy: string): string;
    paramCreatedDateTime(CreatedDateTime: string): string;
    paramModifiedBy(ModifiedBy: string): string;
    paramModifiedDateTime(ModifiedDateTime: string): string;
    paramRecId(RecId: number): number;
}


export const EmptyProjTable: ProjTableInterface = {
    ProjId: "",
    Name: "",
    Description: "",
    StartDate: "",
    EndDate: "",
    ExtendedDate: "",
    Status: 0,
    Budget: 0,
    CustAccount: 0,
    ProjManager: 0,
    DlvLocation: 0,
    Type: 0,
    CreatedBy: "",
    ModifiedBy: "",
    ModifiedDateTime: "",
    CreatedDateTime: "",
    RecId: 0
}