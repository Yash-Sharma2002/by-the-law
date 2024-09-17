
/**
 * @interface LocationInterface
 * @param {number} RefRecId
 * @param {number} RefTableId
 * @param {number} IsPrimary
 * @param {string} Address
 * @param {string} ZipCode
 * @param {string} City
 * @param {string} State
 * @param {string} Country
 * @param {string} Street
 * @param {string} District
 */
interface LocationInterface {
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
    ModifiedBy?: string;
    ModifiedDateTime?: string;
    RecId?: number;
    CreatedBy?: string;
    CreatedDateTime?: string;
}

export default LocationInterface


export const EmptyLocation: LocationInterface = {
    Address: "",
    ZipCode: "",
    City: "",
    State: "",
    Country: "",
    Street: "",
    District: "",
    IsPrimary: 1,
    RefRecId: 0,
    RefTableId: 0,
}

