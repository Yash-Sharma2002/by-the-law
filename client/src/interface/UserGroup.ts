

/**
 * UserGroupInterface
 * @export
 * @interface UserGroupInterface
 * @param Name: string
 * @param Description: string
 * @param Settings: number - RecId of the settings
 * @param RecId: number
 * @param CreatedBy: number
 * @param CreatedDateTime: Date
 * @param ModifiedBy: number
 * @param ModifiedDateTime: Date
 */
export interface UserGroupInterface {
    Name: string;
    Description: string;
    Settings: number;
    RecId?: number;
    CreatedBy: string;
    CreatedDateTime?: string;
    ModifiedBy: string;
    ModifiedDateTime?: string;
}


export const EmptyUserGroup: UserGroupInterface = {
    Name: "",
    Description: "",
    Settings: 0,
    RecId: 0,
    CreatedBy: "",
    CreatedDateTime: "",
    ModifiedBy: "",
    ModifiedDateTime: ""
}