


export interface FormInterface{
    ClientId: number;
    LawyerId: number;
    Form: string;
    Details: number;
    RecId?: number;
    CreatedBy: string;
    ModifiedBy: string;
    CreatedDateTime: string;
    ModifiedDateTime: string;
}


export default interface FormClass extends FormInterface{
    setForm(form: FormInterface): void;
    setBlank(): void;
    validate(): void;
    insert(): void;
    update(): void;
    delete(): void;
    get(): void;
    flush(): void;

    // params
    paramClientId(ClientId: number): number;
    paramLawyerId(LawyerId: number): number;
    paramForm(Form: string): string;
    paramDetails(Details: number): number;
    paramRecId(RecId: number): number
    paramCreatedBy(CreatedBy: string): string;
    paramModifiedBy(ModifiedBy: string): string;
    paramCreatedDateTime(CreatedDateTime: string): string;
    paramModifiedDateTime(ModifiedDateTime: string): string;
}



export const EmptyForm: FormInterface = {
    ClientId: 0,
    LawyerId: 0,
    Form: "",
    Details: 0,
    RecId: 0,
    CreatedBy: "",
    ModifiedBy: "",
    CreatedDateTime: "",
    ModifiedDateTime: ""
}