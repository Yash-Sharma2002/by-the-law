export default interface SUdivorce {
  referredBy: string;
  date: string;
  client: {
    name: string;
    address: string;
    phone: {
      home: string;
      cell: string;
      work: string;
      fax: string;
    };
    emailAddress: string;
    correspondenceAddress: {
      home: {
        contain: boolean;
      };
      work: {
        contain: boolean;
      };
    };
    employer: string;
    position: string;
    yearsEmployed: string;
    salary: {
      gross: string;
      net: string;
      type: {
        annual: boolean;
        monthly: boolean;
        hourly: boolean;
      };
    };
    socialSecurityNo: string;
    placeOfBirth: string;
    dateOfBirth: string;
    age: string;
    educationOrTraining: {
      highSchool: {
        contain: boolean;
        details: string;
      };
      college: {
        contain: boolean;
        details: string;
      };
      graduateSchool: {
        contain: boolean;
        details: string;
      };
    };
    healthStatus: string;
  };
  spouse: {
    name: string;
    address: string;
    phone: {
      home: string;
      cell: string;
      work: string;
      fax: string;
    };
    emailAddress: string;
    correspondenceAddress: {
      home: {
        contain: boolean;
      };
      work: {
        contain: boolean;
      };
      attorney: {
        contain: boolean;
      };
    };
    employer: string;
    position: string;
    yearsEmployed: string;
    salary: {
      gross: string;
      net: string;
      type: {
        annual: string;
        monthly: string;
        hourly: string;
      };
    };
    socialSecurityNo: string;
    placeOfBirth: string;
    dateOfBirth: string;
    age: string;
    educationOrTraining: {
      highSchool: {
        details: string;
      };
      college: {
        details: string;
      };
      graduateSchool: {
        details: string;
      };
    };
    healthStatus: string;
  };
  previousMarriage: {
    client: string;
    spouse: string;
    endedDetails: {
      client: string;
      spouse: string;
    };
  };
  childrenOfClient: {
    client: {
      name: string[];
      dob: string[];
      ssn: string[];
    };
    spouse: {
      name: string[];
      dob: string[];
      ssn: string[];
    };
  };
  thisMarriage: {
    date: string;
    place: string;
    registered: string;
    children: {
      name: string[];
      dob: string[];
      ssn: string[];
      livesWith: string[];
    };
    currentlyPregnant: boolean; //dekhna hai abhi
    specialProblems: string;
    spouseAttorney: string[];
    previousDivorceActions: {
      when: string;
      where: string;
      terminated: string;
    };
    grounds: string[];
    other: string;
    comments: string[];
  };
  assets: {
    martialResidence: {
      address: string;
      titleNames: string;
      titleLocation: string;
      downPaymentMadeBy: string;
      paymentsCurrent: string;
      whoMakesPayments: string;
      purchaseDetails: {
        when: string;
        pricePaid: string;
      };
      mortgagePayments: string;
      yearlyTaxes: string;
      presentValue: string;
      mortgageBalance: {
        asOf: string;
        balance: string;
      };
      estimatedNetValue: string;
    };
    realEstate: {
      address: string;
      titleLocation: string;
      downPaymentMadeBy: string;
      mortgageholds: string;
      paymentsCurrent: string;
      whoMakesPayments: string;
      mortagePayments: string;
      yearlyTaxes: string;
      presentValue: string;
      mortgageBalance: {
        asOf: string;
        balance: string;
      };
      grossmonthlyIncome: string;
      netMonthlyIncome: string;
      incomeExpenseStatement: string;
      estimatedNetValue: string;
    };
    automobiles: {
      yearAndModel: string;
      nameOnTitle: string;
      possession: string;
      whoHoldslien: string;
      paymentsPerMonth: string;
      whomakingpayments: string;
      approximatePresentValue: string;
      balanceOwingOnLien:string
      estimatedNetValue: string;
    }[];

    stocksAndBonds: {
      amountTypeCompany: string;
      location: string;
      namedOwner: string;
      valueAsOf: number;
    }[];

    insurancePolicies: {
      company: string;
      policyNumber: number;
      faceAmount: number;
      premiums: string;
      per: number;
      owner: string;
      beneficiary: number;
      cashValue: string;
    }[];

    safeDepositBox: {
      location: string;
      namesOnBox: string;
      whoHasTheKey: string;
      contents: string;
    };

    bankAccounts: {
      location: string;
      balanceAsOf: string;
      inWhoseName: string;
      WhohasPassbook: string;
      typeOfAccount: string;
      howFundsAcquired: string;
    }[];

    otherAssetsInPossession: {
      description: string;
      estimatedValue: string;
    }[];
    clientsNonMaritalProperty: {
      description: string;
      estimatedValue: string;
    }[];
    pensionPlans: {
      description: string;
      estimatedValue: string;
    }[];
  };
  liabilities: {
    creditCardDebt: {
      toWhomOwed: string[];
      forWhat: string[];
      monthlyPayment: string[];
      balanceAsOf: string[];
      
    };
    personalLoans: {
      toWhomOwed: string[];
      forWhat: string[];
      monthlyPayment: string[];
      balanceAsOf: string[];
    };
    automobileLoans: {
      toWhomOwed: string[];
      forWhat: string[];
      monthlyPayment: string[];
      balanceAsOf: string[];
    };
    mortgageLoans: {
      toWhomOwed: string[];
      forWhat: string[];
      monthlyPayment: string[];
      balanceAsOf: string[];
    };
    otherDebt: {
      toWhomOwed: string[];
      forWhat: string[];
      monthlyPayment: string[];
      balanceAsOf: string[];
    };
    total: {
      husband: string;
      wife: string;
    };
  };
  issuesToAddress: {
    maidenNameRestored: {
      yes: boolean;
      no: boolean;
      maidenName: string;
    };
    custody: {
      joint: string;
      husband: string;
      wife: string;
    };
    physicalCustody: {
      husband: string;
      wife: string;
    };

    maintenance: {
      yes: boolean;
      no: boolean;
      howMuch: string;
    };
    childSupport: {
      yes: boolean;
      no: boolean;
      howMuch: string;
      deviateFromStatute: {
        yes: boolean;
        no: boolean;
      };
    };
    attorneyFees: {
      interim: boolean;
      final: boolean;
      husband: string;
      wife: string;
      eachPartyPaysOwn: string;
      petitionForFees: {
        yes: boolean;
        no: boolean;
      };
    };
    dissipation: {
      yes: boolean;
      no: boolean;
    };
    exclusivePossessionOfMaritalResidence: {
      yes: boolean;
      no: boolean;
      for: {
        husband: boolean;
        wife: boolean;
      };
    };
    fileCounterPetition: {
      yes: boolean;
      no: boolean;
    };
  };
  settlementNotes: string[];
}
