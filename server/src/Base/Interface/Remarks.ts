

export interface RemarksInterface {
    Title: string;
    Description?: string;
    Type: number; // RemarksType
    Image?: string;
    Video?: string;
    CreatedBy: string;
    ModifiedBy: string;
    CreatedDateTime: string;
    ModifiedDateTime: string;
    RecId?: number;
    RefTableId: number;
    RefRecId: number;
}


export default interface RemarksClass extends RemarksInterface {

    setBlank(): void;
    setRemarks(remarks: RemarksInterface): void;
    get(): RemarksInterface;

    paramTitle(Title: string): string;
    paramDescription(Description: string): string;
    paramType(Type: number): number;
    paramImage(Image: string): string;
    paramVideo(Video: string): string;
    paramCreatedBy(CreatedBy: string): string;
    paramModifiedBy(ModifiedBy: string): string;
    paramCreatedDateTime(CreatedDateTime: string): string;
    paramModifiedDateTime(ModifiedDateTime: string): string;
    paramRecId(RecId: number): number;
    paramRefTableId(RefTableId: number): number;
    paramRefRecId(RefRecId: number): number;

    validate(): void;
    modified(): void;
    insert(): Promise<void>;
    update(): Promise<void>;
    delete(): Promise<void>;
    flush(): void;
}

export const EmptyRemarks: RemarksInterface = {
    Title: "",
    Description: "",
    Type: 0,
    Image: "",
    Video: "",
    CreatedBy: "",
    ModifiedBy: "",
    CreatedDateTime: "",
    ModifiedDateTime: "",
    RecId: 0,
    RefTableId: 0,
    RefRecId: 0
}


