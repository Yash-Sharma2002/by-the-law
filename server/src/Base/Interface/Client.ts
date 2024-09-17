


/**
 * @interface ClientInterface
 * @param AccountNum: string
 * @param Name: string
 * @param Email: string
 * @param Password: string
 * @param Status: number
 * @param LawyerId: number
 * @param CreatedBy: string 
 * @param ModifiedBy: string
 * @param CreatedDateTime: string
 * @param ModifiedDateTime: string
 * @param RecId?: number
 */
export interface ClientInterface {
    AccountNum: string;
    Name: string;
    Email: string;
    Password: string;
    Status: number;
    Phone: string;
    LawyerId: number;
    CustGroup?: number;
    CreatedBy: string;
    ModifiedBy: string;
    CreatedDateTime: string;
    ModifiedDateTime: string;
    RecId?: number
}


export default interface ClientClass extends ClientInterface {
    setClient(client: ClientInterface): void;
    setBlank(): void;
    validate(): void;
    insert(): void;
    update(): void;
    delete(): void;
    get(): void;
    flush(): void;

    // params
    paramModifiedBy(Id: string): string;
    paramCreatedBy(Id: string): string;
    paramAccountNum(AccountNum: string): string;
    paramName(Name: string): string;
    paramEmail(Email: string): string;
    paramPhone(Phone: string): string;
    paramPassword(Password: string): string;
    paramStatus(Status: number): number;
    paramCustGroup(CustGroup: number): number;
    paramLawyerId(LawyerId: number): number;
    paramCreatedDateTime(CreatedDateTime: string): string;
    paramModifiedDateTime(ModifiedDateTime: string): string;
    paramRecId(RecId: number): number

}


export const EmptyClient: ClientInterface = {
    AccountNum: "",
    Name: "",
    Email: "",
    Phone: "",
    Password: "",
    Status: 0,
    LawyerId: 0,
    CustGroup: 0,
    CreatedBy: "",
    ModifiedBy: "",
    CreatedDateTime: "",
    ModifiedDateTime: "",
    RecId: 0
}



