
/**
 * Interface for Project Table
 * @interface
 * @description Interface for Project Table
 */
interface ProjTableInterface {
    ProjId: string;
    Name: string;
    Description: string;
    StartDate: string;
    EndDate: string;
    Status: number;
    Budget: number;
    CustAccount: number;
    ProjManager: number;
    Type: number;
    DlvLocation: number;
    CreatedBy?: string;
    CreatedDateTime?: string;
    ModifiedBy?: string;
    ModifiedDateTime?: string;
    RecId?: number;
}


export default ProjTableInterface


export const EmptyProjTable:ProjTableInterface = {
    ProjId: "",
    Name: "",
    Description: "",
    StartDate: "",
    EndDate: "",
    Status: 0,
    Budget: 0,
    CustAccount: 0,
    ProjManager: 0,
    Type: 0,
    DlvLocation: 0,
  }