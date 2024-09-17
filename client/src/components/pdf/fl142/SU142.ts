export default interface FL142 {
    AttorneyOrPartyWithoutAttorney: string;
    TelephoneNo: string;
    AttorneyFor: string;
    SUPERIORCOURTOFCALIFORNIACOUNTYOF: string;
    Petitioner: string;
    Respondent: string;
    ScheduleOfAssetsAndDebts: {
        Petitioners: boolean;
        Respondents: boolean;
    };
    CaseNumber: string;

    SpecifyNumber: boolean;
    Pages: number;
    Date: string;
    TypeOrPrintName: string;
    SignatureOfDeclarant: string;   
} 