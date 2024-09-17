export default interface FL117 {
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
    ToNameOfIndividualBeingServed: string;
    DateOfMailing: string;
    TypeOrPrintSendersName: string;
    SignatureOfSender: string;
    IAgreeIReceivedTheFollowing: {
        a: boolean;
        b: boolean;
        c: boolean;
        d: {
            contain: boolean;
            Options: boolean[];
            OtherSpecify: {
                contain: boolean;
                OtherSpecify: string;
            };
        };
    };
    RecipientSignedThisAcknowlegmentOnSpecifyDate: string;
    TypeOrPrintNameOfPersonAcknowledgingReceipt: string;
    SignatureOfPersonAcknowledgingReceipt: string;  
}