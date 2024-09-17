

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
    UserGroup?: string;
    Language: string;
    ModifiedBy: string;
    ModifiedDateTime?: string;
    RecId?: number;
    CreatedBy: string;
    CreatedDateTime?: string;
}


/**
 * User Class Interface
 * @interface UserClass
 */
export default interface UserClass extends UserInterface {
    setUser(user: UserInterface): void;
    checkExists(Id: string, Email: string): void;
    checkNotExists(Id: string, Email: string): void;
    setBlank(): void;
    validate(): void;
    modified(): void;
    insert(): void;
    update(): void;
    delete(): void;
    get(): UserInterface;
    flush(): void;

    // params
    paramId(Id: string): string;
    paramEmail(Email: string): string;
    paramName(Name: string): string;
    paramPassword(Password: string): string;
    paramEnabled(Enabled: number): number;
    paramStartPage(StartPage: string): string;
    paramUserGroup(UserGroup: string): string;
    paramLanguage(Language: string): string;
    paramModifiedBy(ModifiedBy: string): string;
    paramModifiedDateTime(ModifiedDateTime: string): string;
    paramRecId(RecId: number): Number;
    paramCreatedBy(CreatedBy: string): string;
    paramCreatedDateTime(CreatedDateTime: string): string;
}

export const EmptyUser: UserInterface = {
    Id: "",
    Email: "",
    Name: "",
    Password: "",
    Enabled: 0,
    StartPage: "",
    Language: "",
    UserGroup: "",
    DefaultCountryRegion: "",
    ModifiedBy: "",
    CreatedBy: "",
    ModifiedDateTime: "",
    CreatedDateTime: "",
    RecId: 0
}