export class Policy{
    id: number;
    PolicyNum : string;
    SubCompany :string ;
    InsuredName : string;
    version : number;
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