import { Component, OnInit, Input } from '@angular/core';
import { PolicySearchResult,Policy } from '../../models/policy'
import { Utilities } from '../../common/Utilities';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { DataService } from '../../services/data.service'
import { URLSearchParams } from '@angular/http';

import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { PolicySearch,Options ,SubCompany,State, Country, TxnType,TxnStatus, NameType,ProcessStatus } from '../../models/policy'
@Component({
    moduleId: module.id,
    selector: 'policy-detail',
    templateUrl: 'policydetail.component.html',
   
    styleUrls: ['policydetail.component.css']
})

export class PolicyDetailComponent implements OnInit {
    SavedPolicyForm: FormGroup;
    policyTxnId: string;
    private sub: any;
    DB: DataService; 
    policy : Policy;
     subCompanies : SubCompany[];
     states : State[];
     countries : Country[]
     txnTypes : TxnType[]
     txnstatus : TxnStatus[]
     otherNames : NameType[]
     processStatus : ProcessStatus[]
    constructor( public dataservice: DataService,private route : ActivatedRoute) {  
         this.DB = dataservice;   
           this.subCompanies =  this.states = this.countries = this.txnTypes = this.txnstatus = this.otherNames= this.processStatus=  [];
    }

    ngOnInit() {
        
          this.DB.GetMetaData().then(
        (metadata: any) => {  
            this.subCompanies = metadata.subCompanyResults;  
            this.states = metadata.stateResults;
            this.countries = metadata.countryResults;
            this.otherNames = metadata.nameTypeResults;
            this.txnTypes = metadata.txnTypeResults;
            this.txnstatus = metadata.txnStatusResults; 
            this.processStatus = metadata.processStatusResults;
        },
        (errorMessage: string) => {
            console.log(errorMessage);
        });

        this.policy = new Policy()
        let policyTxnId = this.route.params.subscribe(params => { 
            this.policyTxnId = params['policyTxnId'];
        });
        if(!Utilities.isNullOrEmpty(this.policyTxnId)){
            debugger;
            this.DB.GetPolicyTransaction(policyTxnId)
            .then(
            (policy: Policy) => {  
                this.policy = policy;    
            },
            (errorMessage: string) => {
                console.log(errorMessage);
            });
        }  
    }
 

}