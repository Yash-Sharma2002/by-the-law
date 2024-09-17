export default interface FL141 {
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
    OtherParentParty: string;
    DeclarationRegardingServiceOfDeclarationOfDisclosureAndIncomeAndExpenseDeclaration: {
        Petitioners: boolean;
        Respondents: boolean;
        Preliminary: boolean;
        Final: boolean; 
    };
    CaseNumber: string;
    
    Date: string;
    TypeOrPrintName: string;
    Signature: string;   
} 