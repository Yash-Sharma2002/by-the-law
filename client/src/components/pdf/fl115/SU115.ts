export default interface FL115 {
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
    AtTheTimeOfService: {
      a: boolean;
      b: boolean;
      c: boolean;
      d:{
        contain: boolean;
        Options: boolean[];
        OtherSpecify: {
            contain: boolean;
            OtherSpecify: string;
        };
      };

    };
    AddressWhereRespondentWasServed: string;
    IServedTheRespondentByTheFollowingMeans: {
        a: {
            contain: boolean;
            OnDate: string;
            AtTime: string;
        };
        b: {
            contain: boolean;
            ILeftTheCopiesWithOrInThePresenceOf: string;
            WhoIsSpecifyTitleOrRelationshipToRespondet: string;
            Business: boolean;
            Home: {
                contain: boolean;
                OnDate: string;
                AtTime: string;
            };
            OnDate: string;
        };
        c: {
            contain: boolean;
            OnDate: string;
            FromCity: string;
            WithTwoCopiesOfTheNoticeAndAcknowledgmentOfReceipt: boolean;
            ToAnAddressOutsideCalifornia: boolean;
        };
        d: {
            contain: boolean;
            OtherSpecifyCodeSection: string;
            ContinuedOnAttachmentd3d:boolean;
        };
    };
    PersonWhoServedPapers: {
        Name: string;
        Address: string;
        TelephoneNumber: string;
        ThisPersonIs:{
            a: boolean;
            b: boolean;
            c:{
                contain: boolean;
                AnEmployee: boolean;
                AnIndependentContractor: boolean;
                RegistrationNo: string;
                County: string;
            };
            TheFeeForServiceWas: string;
        };
    };
    IDeclareUnderPenaltyOfPerjuryUnderTheLawsOfTheStateOfCaliforniaThatTheForegoingIsTrueAndCorrect: boolean;
    IAmACaliforniaSheriffMarshalOrConstable: boolean;
    Date: string;
    NameOfPersonWhoServedPapers: string;
    SignatureOfPersonWhoServedPapers:string;  
}  