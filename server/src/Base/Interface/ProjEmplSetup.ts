

export interface ProjEmplSetupInterface {
    ProjId: number;
    UserId: number;
    ModifiedBy: string;
    ModifiedDateTime?: string;
    RecId?: number;
    CreatedBy: string;
    CreatedDateTime?: string;
}

export default interface ProjEmplSetupClass extends ProjEmplSetupInterface {
    setProjEmplSetup(projEmplSetup: ProjEmplSetupInterface): void;
    setBlank(): void;
    validate(): void;
    modified(): void;
    insert(): void;
    update(): void;
    delete(): void;
    get(): void;
    flush(): void;

    // params
    paramProjId(ProjId: number): number;
    paramUserId(UserId: number): number;
    paramModifiedBy(ModifiedBy: string): string;
    paramModifiedDateTime(ModifiedDateTime: string): string;
    paramRecId(RecId: number): number;
    paramCreatedBy(CreatedBy: string): string;
    paramCreatedDateTime(CreatedDateTime: string): string;
}

export const EmptyProjEmplSetup: ProjEmplSetupInterface = {
    ProjId: 0,
    UserId: 0,
    ModifiedBy: "",
    CreatedBy: "",
    RecId: 0,
    ModifiedDateTime: "",
    CreatedDateTime: "",
}