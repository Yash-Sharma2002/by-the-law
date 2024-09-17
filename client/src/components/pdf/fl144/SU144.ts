
export default interface FL144 {
    AttorneyOrPartyWithoutAttorney: string;
    TelephoneNo: string;
    FaxNo: string;
    EmailAddress: string;
    AttorneyFor: string;
    SUPERIORCOURTOFCALIFORNIA: {
        Countyof: string;
        StreetAddress: string;
        MailingAddress: string;
        CityAndZipCode: string;
        BranchName: string;
    };
    PlaintiffPetitioner: string;
    DefendantRespondent: string;
    Other: string;
    CaseNumber: string;
    Date: string;
    TypeOrPrintName: string;
    SignatureOfPetitioner: string; 
    SignatureOfRespondent: string;  
} 


export const EmptyFL144: FL144 = {
    AttorneyOrPartyWithoutAttorney: '',
    TelephoneNo: '',
    FaxNo: '',
    EmailAddress: '',
    AttorneyFor: '',
    SUPERIORCOURTOFCALIFORNIA: {
        Countyof: '',
        StreetAddress: '',
        MailingAddress: '',
        CityAndZipCode: '',
        BranchName: '',
    },
    PlaintiffPetitioner: '',
    DefendantRespondent: '',
    Other: '',
    CaseNumber: '',
    Date: '',
    TypeOrPrintName: '',
    SignatureOfPetitioner: '',
    SignatureOfRespondent: '',
}