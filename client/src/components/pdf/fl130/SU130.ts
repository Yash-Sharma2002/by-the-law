export default interface FL130 {
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
    Petitioner: string;
    Respondent: string;
    CaseNumber: string;
    AppearanceByRespondent: number;
    AggrementsStipulationsAndWaivers: number;
    OtherSpecify: string;
    Date: string;
    TypeOrPrintName: string;
    SignatureOfPetitioner: string;
    SignatureOfRespondent: string;
    SignatureOfAttorneyForPetitioner: string;
    SignatureOfAttorneyForRespondent: string;
} 