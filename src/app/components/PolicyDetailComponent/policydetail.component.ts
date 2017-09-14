import { Component, OnInit, Input } from '@angular/core';
import { PolicySearchResult } from '../../models/policy'
import { Utilities } from '../../common/Utilities';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { DataService } from '../../services/data.service'
import { URLSearchParams } from '@angular/http';


@Component({
    moduleId: module.id,
    selector: 'policy-detail',
    templateUrl: 'policydetail.component.html'
})

export class PolicyDetailComponent implements OnInit {
    policynum: string;
    private sub: any;
    DB: DataService;
    policy: PolicySearchResult;
    constructor(private route: ActivatedRoute, public dataservice: DataService) { 
     //   this.DB = dataservice;
        this.policy = new PolicySearchResult();
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.policynum = params['policynum'];
        });
        if (!Utilities.isNullOrEmpty(this.policynum)) {
            // In a real app: dispatch action to load the details here.
            let paramsdata: URLSearchParams = new URLSearchParams();
            paramsdata.set('PolicyNum', this.policynum); 
            // this.DB.GetPolicies(paramsdata)
            //     .then(
            //     (policiesData: Policy[])  =>  {
            //      this.policy = (policiesData.length > 0) ?policiesData[0] : null;
            //     },
            //     (errorMessage:  string)  =>  {
            //         console.log(errorMessage);
            //     });
        }

    }
 

}