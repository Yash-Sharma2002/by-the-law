export interface BusUnitValueSetInterface {
  UnitName: string;
  ValueSet: string;
  RecId?: number;
  CreatedBy: string;
  CreatedDateTime?: string;
  ModifiedBy: string;
  ModifiedDateTime?: string;
}

export default interface BusUnitValueSetClass extends BusUnitValueSetInterface {
  setBusUnitValueSet(BusUnitValueSet: BusUnitValueSetInterface): void;
  setBlank(): void;
  validate(): void;
  modified(): void;
  insert(): void;
  update(): void;
  delete(): void;
  get(): BusUnitValueSetInterface;
  flush(): void;

  // params
  paramUnitName(UnitName: string): string;
  paramValueSet(ValueSet: string): string;
  paramRecId(RecId: number): number;
  paramCreatedBy(CreatedBy: string): string;
  paramCreatedDateTime(CreatedDateTime: string): string;
  paramModifiedBy(ModifiedBy: string): string;
  paramModifiedDateTime(ModifiedDateTime: string): string;
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
