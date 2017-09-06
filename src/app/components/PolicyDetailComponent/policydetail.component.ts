import { Component, OnInit, Input } from '@angular/core';  
import { Policy} from '../../models/policy'  
import { Utilities  } from '../../common/Utilities'; 
import { ActivatedRoute, Params } from '@angular/router'; 
import 'rxjs/add/operator/switchMap'; 
@Component({
    moduleId: module.id,
    selector: 'policy-detail',
    templateUrl: 'policydetail.component.html' 
}) 

export class PolicyDetailComponent implements OnInit {   
    policynum: string;
    private sub: any;
    constructor(private route: ActivatedRoute ) {    
        console.log(this.route.data)
    } 
   ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
        this.policynum = params['policynum']; // (+) converts string 'id' to a number
        console.log(this.policynum)
        // In a real app: dispatch action to load the details here.
        });
    }

    
    onload(){
        alert('')
    }
    
}