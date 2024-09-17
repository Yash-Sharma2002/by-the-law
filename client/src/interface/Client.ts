


/**
 * @interface ClientInterface
 * @param AccountNum: string
 * @param Name: string
 * @param Email: string
 * @param Password: string
 * @param Status: number
 * @param Manager: number
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
    Phone: string;
    Status: number;
    Manager: number;
    CustGroup: number;
    CreatedBy: string;
    ModifiedBy: string;
    CreatedDateTime: string;
    ModifiedDateTime: string;
    RecId?: number
}


export const EmptyClient: ClientInterface = {
    AccountNum: "",
    Name: "",
    Email: "",
    Password: "",
    Phone: "",
    Status: 0,
    Manager: 0,
    CustGroup: 0,
    CreatedBy: "",
    ModifiedBy: "",
    CreatedDateTime: "",
    ModifiedDateTime: "",
    RecId: 0
}



