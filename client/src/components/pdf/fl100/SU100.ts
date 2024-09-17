export default interface FL100 {
    Name: string;
    FirmName: string;
    StreetAddress: string;
    City: string;
    State: string;
    ZipCode: string;
    TelephoneNo: string;
    FaxNo: string;
    CaseNumber: string;
    SUPERIORCOURTOFCALIFORNIA: {
      Countyof: string;
      StreetAddress: string;
      MailingAddress: string;
      CityAndZipCode: string;
      BranchName: string;
    };
    Petitioner: string;
    Respondent: string;
    PetitionFor: {
      Amended: boolean;
      Dissolution: number;
      LegalSeparation: number;
      Nullity: number;
    };
    LegalRelationship: number;
    ResidenceRequirement: {
      a: number;
      b: number;
      c: {
        contain: boolean;
        PetitionerLivesIn: string;
        RespondentLivesIn: string;
      };
    };
    StatisticalFacts: {
      a: {
        contain: boolean;
        DateOfMarriage: string;
        DateOfSeparation: string;
        Years: number;
        Months: number;
      };
      b: {
        contain: boolean;
        Registrationdate: boolean;
        DateOfSeparation: string;
        Years: number;
        Months: number;
      };
    };
    MinorChildren: {
      a: boolean;
      b: {
        contain: boolean;
        ChildDetails: {
          Name: string;
          BirthDate: string;
          Age: number;
        }[];
        ContinueAttachment4b: boolean;
        ChildNotBorn: boolean;
      };
      e: boolean;
    };
    LegalMatters: {
      a: {
        Divorce: boolean;
        LegalSeparation: boolean;
        IrreconcilableDifferences: boolean;
        PermanentLegalIncapacity: boolean;
      };
      b: {
        contain: boolean;
        Incest: boolean;
        Bigamy: boolean;
      };
      c: {
        contain: boolean;
        options: boolean[];
      };
    };
    ChildCustody: {
      a: {
        Petitioner: boolean;
        Respondent: boolean;
        Joint: boolean;
        Other: boolean;
      };
      b: {
        Petitioner: boolean;
        Respondent: boolean;
        Joint: boolean;
        Other: boolean;
      };
      c: {
        Petitioner: boolean;
        Respondent: boolean;
        Other: boolean;
      };
      AsRequested: boolean[];
    };
    ChildSupport: {
      d: {
        contain: boolean;
        Otherspecify: string;
      };
    };
    SpousalOrDomesticPartnerSupport: {
      a: {
        SpousalOrDomesticPartnerSupport: boolean;
        Petitioner: boolean;
        Respondent: boolean;
      };
      b: {
        TerminateTheCourts: boolean;
        Petitioner: boolean;
        Respondent: boolean;
      };
      c: {
        ReserveForFuture: boolean;
        Petitioner: boolean;
        Respondent: boolean;
      };
      d: {
        contain: boolean;
        Otherspecify: string;
      };
    };
    SeparateProperty: {
      a: boolean;
      b: {
        ConfirmAsSeparateProperty: boolean;
        PropertyDeclaration: boolean;
        Attachment9b: boolean;
        TheFollowinglist: {
          cotain: boolean;
          listDetails: {
            item: string;
            confirmTo: string;
          }[];
        };
      };
    };
    CommunityAndQuasiCommunityProperty: {
      a: boolean;
      b: {
        contain: boolean;
        InPropertyDeclaration: boolean;
        InAttachment10b: boolean;
        asFollowsSpecify: {
          cotain: boolean;
          asFollowsSpecify: string
        };
      };
    };
    OtherRequests: {
      a: {
        AttorneyFees: boolean;
        Petitioner: boolean;
        Respondent: boolean;
      };
      b: {
        contain: boolean;
        PetitionersFormerNameBeRestoredToSpecify: string;
      };
      c: {
       contain: boolean;
       OtherSpecify: string;
       ContinuedOnAttachment11c: boolean;
      };
    };
    Date: number;
    TypeOrPrintName: string;
    SignatureOfPetitioner: string;
    SignatureOfAttorneyForPetitioner: string; 
  }