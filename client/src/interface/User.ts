

/**
 * User Interface
 * @interface UserInterface
 */
export interface UserInterface {
    Id: string;
    Email: string;
    Name: string;
    Password: string;
    Enabled: number;
    DefaultCountryRegion?: string;
    StartPage: string;
    Language: string;
    ModifiedBy: string;
    ModifiedDateTime?: string;
    RecId?: number;
    CreatedBy: string;
    CreatedDateTime?: string;
}




export const EmptyUser: UserInterface = {
    Id: "",
    Email: "",
    Name: "",
    Password: "",
    Enabled: 0,
    StartPage: "",
    Language: "",
    DefaultCountryRegion: "",
    ModifiedBy: "",
    CreatedBy: "",
    ModifiedDateTime: "",
    CreatedDateTime: "",
    RecId: 0
}