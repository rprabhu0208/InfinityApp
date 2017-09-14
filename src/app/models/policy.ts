export class PolicySearchResult{
    city: string;
    countryCode: string;
    enReason:string ;
    insuredFileAsName: string;
    lastTxnNum: Number;
    policyExp: Date;
    policyId: Number;
    policyNum: string;
    policyStatus:string  ;
    policyTermNum: Number;
    policyTxnId: Number;
    policyTxnNum: Number;
    policyType:string ;
    policyTypeId: Number;
    policyYear: Number;
    processStatusCode: string;
    producer: string;
    stateCode: string;
    subCompanyCode: string;
    subCompanyName: string;
    txnEff: Date;
    issued: Date;
    txnStatusCode: string;
    txnTypeCode: string;
    writtenPrem: number;
    portalStatus: string;
    portalStatusDescription: string;
    altPolicyNum: string;
    busClass: string;
    creationDate: string;
    declinationTypeCode: string;
    isCancelled: boolean;
    isNonRenewable: boolean;
    policyEff: Date;
    onWatchList: string
}

export class PolicySearch {
    PolicyNum :string;
    InsuredName : string;
    InsuredNameOption : Options;
    DBAName : string;
    PolicyID: string;
    Version : number;
    Address : Address;
}

 class Address {
    Address : string;
    City : string;
    State : string;
}

export class Options{
    Override : boolean;
    SoundsLike: boolean;
    AllRelationships : boolean;
}