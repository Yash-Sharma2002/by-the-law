export interface BusUnitValueSetInterface {
  UnitName: string;
  ValueSet: string;
  RecId?: number;
  CreatedBy?: string;
  CreatedDateTime?: string;
  ModifiedBy?: string;
  ModifiedDateTime?: string;
}

export const EmptyBusUnitValueSet: BusUnitValueSetInterface = {
  UnitName: "",
  ValueSet: "",
  CreatedBy: "",
  ModifiedBy: "",
  RecId: 0,
  CreatedDateTime: "",
  ModifiedDateTime: "",
};
