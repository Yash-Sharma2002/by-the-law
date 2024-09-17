export interface BusUnitInterface {
  Name: string;
  Description: string;
  RecId?: number;
  CreatedBy: string;
  CreatedDateTime?: string;
  ModifiedBy: string;
  ModifiedDateTime?: string;
}

export default interface BusUnitClass extends BusUnitInterface {
  setBusUnit(BusUnit: BusUnitInterface): void;
  setBlank(): void;
  validate(): void;
  modified(): void;
  insert(): void;
  update(): void;
  delete(): void;
  get(): BusUnitInterface;
  flush(): void;

  // params
  paramName(Name: string): string;
  paramDescription(Description: string): string;
  paramRecId(RecId: number): number;
  paramCreatedBy(CreatedBy: string): string;
  paramCreatedDateTime(CreatedDateTime: string): string;
  paramModifiedBy(ModifiedBy: string): string;
  paramModifiedDateTime(ModifiedDateTime: string): string;
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
