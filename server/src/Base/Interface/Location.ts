

export interface LocationInterface {
    RefRecId: number;
    RefTableId: number;
    IsPrimary: number;
    Address: string;
    ZipCode: string;
    City: string;
    State: string;
    Country: string;
    Street: string;
    District: string;
    ModifiedBy: string;
    ModifiedDateTime?: string;
    RecId?: number;
    CreatedBy: string;
    CreatedDateTime?: string;
}

export default interface LocationClass extends LocationInterface {
    setLocation(location: LocationInterface): void;
    setBlank(): void;
    validate(): void;
    modified(): void;
    insert(): void;
    update(): void;
    delete(): void;
    get(): void;
    flush(): void;

    // params
    paramIsPrimary(IsPrimary: number): number;
    paramRefRecId(RefRecId: number): number
    paramRefTableId(RefTableId: number): number
    paramAddress(Address: string): string;
    paramZipCode(ZipCode: string): string;
    paramCity(City: string): string;
    paramState(State: string): string;
    paramCountry(Country: string): string;
    paramStreet(Street: string): string;
    paramDistrict(District: string): string;
    paramModifiedBy(ModifiedBy: string): string;
    paramModifiedDateTime(ModifiedDateTime: string): string;
    paramRecId(RecId: number): number;
    paramCreatedBy(CreatedBy: string): string;
    paramCreatedDateTime(CreatedDateTime: string): string;
}

export const EmptyLocation: LocationInterface = {
    IsPrimary: 0,
    RefRecId: 0,
    RefTableId: 0,
    Address: "",
    ZipCode: "",
    City: "",
    State: "",
    Country: "",
    Street: "",
    District: "",
    ModifiedBy: "",
    CreatedBy: "",
    RecId: 0
}