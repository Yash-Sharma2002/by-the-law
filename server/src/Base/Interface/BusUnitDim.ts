export interface BusUnitDimInterface {
  UnitName: string;
  Value: string;
  RefRecId: number;
  RefTableId: number;
  RecId?: number;
  CreatedBy: string;
  CreatedDateTime?: string;
  ModifiedBy: string;
  ModifiedDateTime?: string;
}

export default interface BusUnitDimClass extends BusUnitDimInterface {
  setBusUnitDim(BusUnitDim: BusUnitDimInterface): void;
  setBlank(): void;
  validate(): void;
  modified(): void;
  insert(): void;
  update(): void;
  delete(): void;
  get(): void;
  flush(): void;

  // params
  paramUnitName(UnitName: string): string;
  paramValue(Value: string): string;
  paramRefRecId(RefRecId: number): number;
  paramRefTableId(RefTableId: number): number;
  paramRecId(RecId: number): number;
  paramCreatedBy(CreatedBy: string): string;
  paramCreatedDateTime(CreatedDateTime: string): string;
  paramModifiedBy(ModifiedBy: string): string;
  paramModifiedDateTime(ModifiedDateTime: string): string;
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
