import { Component, OnInit, Input } from '@angular/core'; 

import { PolicySearchResult,PolicySearch,Options } from '../../models/policy'  
import { Utilities  } from '../../common/Utilities';
import { FilterComponent } from '../../common/components/filtercomponent/filter.component' 
import { Router, ActivatedRoute } from '@angular/router'

import { DataService } from '../../services/data.service'
@Component({
    moduleId: module.id,
    selector: 'policy-list',
    templateUrl: 'policylist.component.html' ,
    styleUrls: ['policylist.css'
              
    ]
}) 
export class PolicyListComponent implements OnInit { 
    _PolicySearchResults : PolicySearchResult[]; 
    _InsuredNames : any; 
     RouteService : Router; 
      @Input() type : string = 'default';
     constructor(routerservice : Router, public dataservice : DataService) {   
          this.RouteService = routerservice;
       
     } 
    
     ngOnInit() {  
       //  if(!Utilities.isNullOrEmpty(this.dataservice.Policies))
            if(this.type == 'default')
              this._PolicySearchResults = this.dataservice.PolicySearchResults;
            else 
              this._PolicySearchResults = this.dataservice.recentlyViewedPolicies;
            
     }
     
    @Input()
    set Policies(PolicySearchResults : PolicySearchResult[]){   
        this._PolicySearchResults = PolicySearchResults; 
        if(!Utilities.isNullOrEmpty(PolicySearchResults))
        {
            // this._InsuredNames = PolicySearchResults.map((x)=>({label : x.InsuredName, value : x.InsuredName})).filter(function(el)
            //                 {return (el.value != '')}) 
            // if(this._InsuredNames.length > 0){
            //     this._InsuredNames.unshift({ label: '(NonBlanks)', value: 'NonBlanks' })
            //     this._InsuredNames.unshift({ label: '(Blanks)', value: '' })
            //     this._InsuredNames.unshift({ label: '(Custom)', value: 'Custom' })
            //     this._InsuredNames.unshift({ label: '(All)', value: 'All' })
            // }
        }
    }
     
    showDetails(policy:PolicySearchResult){ 
    //    if(Utilities.isNullOrEmpty(this.dataservice.recentlyViewedPolicies))
    //    {
    //        this.dataservice.recentlyViewedPolicies = new Array<PolicySearchResult>();
    //    }
    //    if(this.dataservice.recentlyViewedPolicies.indexOf(policy) < 0)
    //       this.dataservice.recentlyViewedPolicies.push(policy);
    //     this.RouteService.navigate(['/policy',policy.PolicyNum]);
    }  
}