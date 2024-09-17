

export default interface SUdivorce {
  referredBy: string;
  date: string;
  client: {
    first: string;
    maiden: string;
    last: string;
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
    first: string;
    maiden: string;
    last: string;
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
        weekly: string;
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
  previousMarriage: {
    client: string;
    spouse: string;
    endedDetails: {
      client: string;
      spouse: string;
    };
    children: {
      client: {
        name: string;
        dob: string;
        ssn: string;
      }[];
      spouse: {
        name: string;
        dob: string;
        ssn: string;
      }[];
    };
  };
  thisMarriage: {
    date: string;
    place: string;
    registered: string;
    currentlyPregnant: boolean;
    specialProblems: string;
    spouseAttorney: string[];
    previousDivorceActions: {
      when: string;
      where: string;
      terminated: string;
    };
    grounds: boolean[];
    other: string;
    comments: string[];
    children: {
      client: {
        name: string;
        dob: string;
        ssn: string;
      }[];
      spouse: {
        name: string;
        dob: string;
        ssn: string;
      }[];
    };
    feeAgreement: {
      retainer: boolean;
      hourlyRate: boolean;
      minimum: boolean;
      other: boolean
    }
  };
  assets: {
    martialResidence: {
      address: string;
      titleNames: string;
      titleLocation: string;
      downPaymentMadeBy: string;
      paymentsCurrent: string;
      whoMakesPayments: string;
      purchaseDetailsWhen: string;
      purchaseDetailsPricePaid: string;
      mortgagePayments: string;
      yearlyTaxes: string;
      presentValue: string;
      mortgageBalanceasOf: string;
      mortgageBalancebalance: string;
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
      balanceOwingOnLien: string;
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


export const DivorceFields: SUdivorce = {
  referredBy: "",
  date: "",
  client: {
    first: "",
    maiden: "",
    last: "",
    address: "",
    phone: {
      home: "",
      cell: "",
      work: "",
      fax: "",
    },
    emailAddress: "",
    correspondenceAddress: {
      home: { contain: false },
      work: { contain: false },
    },
    employer: "",
    position: "",
    yearsEmployed: "",
    salary: {
      gross: "",
      net: "",
      type: {
        annual: false,
        monthly: false,
        hourly: false,
      },
    },
    socialSecurityNo: "",
    placeOfBirth: "",
    dateOfBirth: "",
    age: "",
    educationOrTraining: {
      highSchool: {
        contain: false,
        details: "",
      },
      college: {
        contain: false,
        details: "",
      },
      graduateSchool: {
        contain: false,
        details: "",
      },
    },
    healthStatus: "",
  },
  spouse: {
    first: "",
    maiden: "",
    last: "",
    address: "",
    phone: {
      home: "",
      cell: "",
      work: "",
      fax: "",
    },
    emailAddress: "",
    correspondenceAddress: {
      home: { contain: false },
      work: { contain: false },
      attorney: { contain: false },
    },
    employer: "",
    position: "",
    yearsEmployed: "",
    salary: {
      gross: "",
      net: "",
      type: {
        annual: "",
        monthly: "",
        weekly: "",
      },
    },
    socialSecurityNo: "",
    placeOfBirth: "",
    dateOfBirth: "",
    age: "",
    educationOrTraining: {
      highSchool: {
        contain: false,
        details: "",
      },
      college: {
        contain: false,
        details: "",
      },
      graduateSchool: {
        contain: false,
        details: "",
      },
    },
    healthStatus: "",
  },
  previousMarriage: {
    client: "",
    spouse: "",
    endedDetails: {
      client: "",
      spouse: "",
    },
    children: {
      client: [{
        name: "",
        dob: "",
        ssn: "",
      }, {
        name: "",
        dob: "",
        ssn: "",
      }, {
        name: "",
        dob: "",
        ssn: "",
      }],
      spouse: [{
        name: "",
        dob: "",
        ssn: "",
      },
      {
        name: "",
        dob: "",
        ssn: "",
      },
      {
        name: "",
        dob: "",
        ssn: "",
      }],
    },
  },
  thisMarriage: {
    date: "",
    place: "",
    registered: "",
    children: {
      client: [{
        name: "",
        dob: "",
        ssn: "",
      },
      {
        name: "",
        dob: "",
        ssn: "",
      },
      {
        name: "",
        dob: "",
        ssn: "",
      }],
      spouse: [{
        name: "",
        dob: "",
        ssn: "",
      }
      ],
    },
    currentlyPregnant: false,
    specialProblems: "",
    spouseAttorney: [],
    previousDivorceActions: {
      when: "",
      where: "",
      terminated: "",
    },
    grounds: [false, false, false, false, false, false, false],
    other: "",
    comments: ["", "", ""],
    feeAgreement: {
      retainer: false,
      hourlyRate: false,
      minimum: false,
      other: false
    }
  },
  assets: {
    martialResidence: {
      address: "",
      titleNames: "",
      titleLocation: "",
      downPaymentMadeBy: "",
      paymentsCurrent: "",
      whoMakesPayments: "",
      purchaseDetailsWhen: "",
      purchaseDetailsPricePaid: "",
      mortgagePayments: "",
      yearlyTaxes: "",
      presentValue: "",
      mortgageBalanceasOf: "",
      mortgageBalancebalance: "",
      estimatedNetValue: "",
    },
    realEstate: {
      address: "",
      titleLocation: "",
      downPaymentMadeBy: "",
      mortgageholds: "",
      paymentsCurrent: "",
      whoMakesPayments: "",
      mortagePayments: "",
      yearlyTaxes: "",
      presentValue: "",
      mortgageBalance: {
        asOf: "",
        balance: "",
      },
      grossmonthlyIncome: "",
      netMonthlyIncome: "",
      incomeExpenseStatement: "",
      estimatedNetValue: "",
    },
    automobiles: [
      {
        yearAndModel: "",
        nameOnTitle: "",
        possession: "",
        whoHoldslien: "",
        paymentsPerMonth: "",
        whomakingpayments: "",
        approximatePresentValue: "",
        balanceOwingOnLien: "",
        estimatedNetValue: "",
      },
      {
        yearAndModel: "",
        nameOnTitle: "",
        possession: "",
        whoHoldslien: "",
        paymentsPerMonth: "",
        whomakingpayments: "",
        approximatePresentValue: "",
        balanceOwingOnLien: "",
        estimatedNetValue: "",
      },
    ],
    stocksAndBonds: [
      {
        amountTypeCompany: "",
        location: "",
        namedOwner: "",
        valueAsOf: 0,
      },
      {
        amountTypeCompany: "",
        location: "",
        namedOwner: "",
        valueAsOf: 0,
      },
      {
        amountTypeCompany: "",
        location: "",
        namedOwner: "",
        valueAsOf: 0,
      },
      {
        amountTypeCompany: "",
        location: "",
        namedOwner: "",
        valueAsOf: 0,
      },
    ],
    insurancePolicies: [
      {
        company: "",
        policyNumber: 0,
        faceAmount: 0,
        premiums: "",
        per: 0,
        owner: "",
        beneficiary: 0,
        cashValue: "",
      },
      {
        company: "",
        policyNumber: 0,
        faceAmount: 0,
        premiums: "",
        per: 0,
        owner: "",
        beneficiary: 0,
        cashValue: "",
      },
    ],
    safeDepositBox: {
      location: "",
      namesOnBox: "",
      whoHasTheKey: "",
      contents: "",
    },
    bankAccounts: [
      {
        location: "",
        balanceAsOf: "",
        inWhoseName: "",
        WhohasPassbook: "",
        typeOfAccount: "",
        howFundsAcquired: "",
      },
      {
        location: "",
        balanceAsOf: "",
        inWhoseName: "",
        WhohasPassbook: "",
        typeOfAccount: "",
        howFundsAcquired: "",
      },
    ],
    otherAssetsInPossession: [
      {
        description: "",
        estimatedValue: "",
      },
    ],
    clientsNonMaritalProperty: [
      {
        description: "",
        estimatedValue: "",
      },
    ],
    pensionPlans: [
      {
        description: "",
        estimatedValue: "",
      },
    ],
  },
  liabilities: {
    creditCardDebt: {
      toWhomOwed: [],
      forWhat: [],
      monthlyPayment: [],
      balanceAsOf: [],
    },
    personalLoans: {
      toWhomOwed: [],
      forWhat: [],
      monthlyPayment: [],
      balanceAsOf: [],
    },
    automobileLoans: {
      toWhomOwed: [],
      forWhat: [],
      monthlyPayment: [],
      balanceAsOf: [],
    },
    mortgageLoans: {
      toWhomOwed: [],
      forWhat: [],
      monthlyPayment: [],
      balanceAsOf: [],
    },
    otherDebt: {
      toWhomOwed: [],
      forWhat: [],
      monthlyPayment: [],
      balanceAsOf: [],
    },
    total: {
      husband: "",
      wife: "",
    },
  },
  issuesToAddress: {
    maidenNameRestored: {
      yes: false,
      no: false,
      maidenName: "",
    },
    custody: {
      joint: "",
      husband: "",
      wife: "",
    },
    physicalCustody: {
      husband: "",
      wife: "",
    },
    maintenance: {
      yes: false,
      no: false,
      howMuch: "",
    },
    childSupport: {
      yes: false,
      no: false,
      howMuch: "",
      deviateFromStatute: {
        yes: false,
        no: false,
      },
    },
    attorneyFees: {
      interim: false,
      final: false,
      husband: "",
      wife: "",
      eachPartyPaysOwn: "",
      petitionForFees: {
        yes: false,
        no: false,
      },
    },
    dissipation: {
      yes: false,
      no: false,
    },
    exclusivePossessionOfMaritalResidence: {
      yes: false,
      no: false,
      for: {
        husband: false,
        wife: false,
      },
    },
    fileCounterPetition: {
      yes: false,
      no: false,
    },
  },
  settlementNotes: Array(20).fill(""),
}