export interface BusUnitInterface {
  Name: string;
  Description: string;
  RecId?: number;
  CreatedBy?: string;
  CreatedDateTime?: string;
  ModifiedBy?: string;
  ModifiedDateTime?: string;
}


export const EmptyBusUnit: BusUnitInterface = {
  Name: "",
  Description: "",
  CreatedBy: "",
  ModifiedBy: "",
  RecId: 0,
  CreatedDateTime: "",
  ModifiedDateTime: "",
};
