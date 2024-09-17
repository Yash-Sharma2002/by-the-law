export default interface FL130a {
    PetitionerPlaintiff: string;
    RespondentDefendant: string;
    OtherParent: string;
    CaseNumber: string;
    ThisWaiverIsConditionedAsFollws:{
        a: number;
        b:number;
        c:number;
    };
    Date: string;
    TypeOrPrintName: string;
    SignatureOfRespondent: string;
}