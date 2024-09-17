export default interface FL140 {
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
    DeclarationOfDisclosure: {
        Petitioners: boolean;
        Respondents: boolean;
        Preliminary: boolean;
        Final: boolean; 
    };
    CaseNumber: string;
    AttachedTheFollowing: {
        ACompletedScheduleOfAssetsAndDebts: boolean;
        APropertyDeclaration: {
            contain: boolean;
            CommunityAndQuasiCommunityProperty: boolean;
            SeparateProperty: boolean;
        };
        ACompletedIncomeAndExpenseDeclaration: boolean;
        AllTaxReturnsFileds: {
            contain: boolean;
            AllTaxReturnsFiled: string;
        };
        AStatementOfAllMaterialFactsAndInformationRegardingValuation: {
            contain: boolean;
            AStatementOfAllMaterialFactsAndInformationRegardingValuation: string;
        };
        AStatementOfAllMaterialFactsAndInformationRegardingObligations: {
            contain: boolean;
            AStatementOfAllMaterialFactsAndInformationRegardingObligations: string;
        };
        AnAccurateAndCompleteWrittenDisclosureOfAnyInvestmentOpportunity: {
            contain: boolean;
            AnAccurateAndCompleteWrittenDisclosureOfAnyInvestmentOpportunity: string;
        };   
    };
    Date: string;
    TypeOrPrintName: string;
    Signature: string;   
} 