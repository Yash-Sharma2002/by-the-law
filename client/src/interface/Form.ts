


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