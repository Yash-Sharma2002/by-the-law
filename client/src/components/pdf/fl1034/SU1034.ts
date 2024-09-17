export default interface SUPFL1034 {
    Name: string;
    Address: string;
    City: string;
    State: string;
    Zip: string;
    TelephoneNo: string;
    FaxNo: string;
    EmailAddress: string;
    AttorneyFor: string;
    PlaintiffPetitioner: string;
    DefendantRespondent: string;
    StatusConferenceStatement: {
      Dissolution: boolean;
      LegalSeparation: boolean;
      Nullity: boolean;
      Parentage: boolean;
      OtherFamilyLaw: {
        contain: boolean;
        input: string;
      };
    };
    CaseNumber: string;
    HearingDate: string;
    Time: string;
    Dept: string;
    CheckTheIssues: {
      a: boolean;
      b: boolean;
      c: boolean;
      d: boolean;
      e: boolean;
      f: boolean;
      g: boolean;
      h: boolean;
      i: boolean;
      j: boolean;
      k: boolean;
      Other: {
        contain: boolean;
        Other: string;
      };
    };
    DiscoveryThatStillNeedsToBeCompleted: {
      HasDiscoveryBeenFinished: number;
      IfNoWhatDiscoveryStillNeedsToBeDone: {
        options: boolean[];
        Other: {
          contain: boolean;
          Other: string;
        };
      };
      days: number;
    };
    CoParenting: number;
    MandatoryDeclarationOfDisclosure: {
      PetitionerHasServedRespondentWith: number;
      RespondentHasServedPetitionerWith: number;
      IfNotServedYetDoYouNeedADeadline: number;
    };
    HaveYouAndTheOtherParty: number;
    AreThePartiesInMediation: {
      Yes: boolean;
      No: boolean;
      IfYesOnWhatIssue?: string;
      AreYouSatisfied: number;
    };
    AreYouReadyToSetForTrial: {
      Yes: boolean;
      No: boolean;
      // messing###############
      Hours: number;
      NumberOfWitnesses: number;
      NamesOfWitnesses: string;
    };
    IsTheDepartmentOfChildSupportServices: {
      Yes: boolean;
      No: boolean;
      IfYes: {
        WhichCounty: string;
        FSBNumber: string;
        CourtCaseNumber: string;
      };
    };
    WhatFactorsDoYouAnticipateWillMakeItDifficultToReachAFinalJudgementInThisCase: string;
    IfYouHaveHadAPreviousStatusConferenceWhatHasOccuredOrChangedInThisCase: string;
    Date: number;
    PrintOrTypeName: string;
    Signature: string;
  } 