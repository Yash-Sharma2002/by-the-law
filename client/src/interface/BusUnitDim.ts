export interface BusUnitDimInterface {
  UnitName: string;
  Value: string;
  RefRecId?: number;
  RefTableId?: number;
  RecId?: number;
  CreatedBy?: string;
  CreatedDateTime?: string;
  ModifiedBy?: string;
  ModifiedDateTime?: string;
}


export const EmptyBusUnitDim: BusUnitDimInterface = {
  UnitName: "",
  Value: "",
  RefRecId: 0,
  RefTableId: 0,
  CreatedBy: "",
  ModifiedBy: "",
  RecId: 0,
  CreatedDateTime: "",
  ModifiedDateTime: "",
};
