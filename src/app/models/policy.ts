export class PolicySearchResult{
    city: string;
    countryCode: string;
    enReason:string ;
    InsuredFileAsName: string;
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
    InsuredFileAsName : string;
    InsuredNameOption : Options;
    DBAName : string;
    PolicyID: string;
    Version : number;
    Address : Address;
    StateId : string;
    CountryCode : string;
    OtherNameTypeId : string;
    TxnStatusCode : string;
    TxnTypeCode : string;
    SubCompanyCode:string;
    ProcessStatusCode : string;
    constructor(){
        this.SubCompanyCode = "";
        this.InsuredFileAsName = "";
        this.TxnTypeCode = "";
        this.TxnStatusCode = "";
        this.OtherNameTypeId = "";
        this.CountryCode ="";
        this.StateId ="";
        this.ProcessStatusCode = "";
    }
    
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

export class SubCompany{
    subCompanyCode:string;
    subCompanyName : string;

}

export class State{
    stateId : number;
    stateCode : string;
    stateName : string;
}

export class Country{
    countryName : string;
    countryCode : string;
}
export class NameType{
    nameTypeId : number
    nameTypeCode : string 
    nameType : string 
}
export class TxnType{
    txnTypeCode : string 
    txnType : string
}
export class TxnStatus{
    txnStatusCode : string 
    policyTxnStatus : string 
}
export class ProcessStatus{
    processStatusCode: string;
    processStatus : string;
}