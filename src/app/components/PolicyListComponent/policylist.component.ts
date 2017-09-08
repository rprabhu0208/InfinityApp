import { Component, OnInit, Input } from '@angular/core'; 

import { Policy,PolicySearch,Options } from '../../models/policy'  
import { Utilities  } from '../../common/Utilities';
import { FilterComponent } from '../../common/components/filtercomponent/filter.component' 
import { Router, ActivatedRoute } from '@angular/router'

import { DataService } from '../../services/data.service'
@Component({
    moduleId: module.id,
    selector: 'policy-list',
    templateUrl: 'policylist.component.html' ,
    styleUrls: ['policylist.css']
}) 
export class PolicyListComponent implements OnInit { 
    _Policies : Policy[]; 
    _InsuredNames : any; 
     RouteService : Router; 
      @Input() type : string = 'default';
     constructor(routerservice : Router, public dataservice : DataService) {   
          this.RouteService = routerservice;
       
     } 
    
     ngOnInit() {  
       //  if(!Utilities.isNullOrEmpty(this.dataservice.Policies))
            if(this.type == 'default')
              this._Policies = this.dataservice.Policies;
            else 
              this._Policies = this.dataservice.recentlyViewedPolicies;
            
     }
     
    @Input()
    set Policies(Policies : Policy[]){   
        this._Policies = Policies; 
        if(!Utilities.isNullOrEmpty(Policies))
        {
            this._InsuredNames = Policies.map((x)=>({label : x.InsuredName, value : x.InsuredName})).filter(function(el)
                            {return (el.value != '')}) 
            // if(this._InsuredNames.length > 0){
            //     this._InsuredNames.unshift({ label: '(NonBlanks)', value: 'NonBlanks' })
            //     this._InsuredNames.unshift({ label: '(Blanks)', value: '' })
            //     this._InsuredNames.unshift({ label: '(Custom)', value: 'Custom' })
            //     this._InsuredNames.unshift({ label: '(All)', value: 'All' })
            // }
        }
    }
     
    showDetails(policy:Policy){ 
       if(Utilities.isNullOrEmpty(this.dataservice.recentlyViewedPolicies))
       {
           this.dataservice.recentlyViewedPolicies = new Array<Policy>();
       }
       if(this.dataservice.recentlyViewedPolicies.indexOf(policy) < 0)
          this.dataservice.recentlyViewedPolicies.push(policy);
        this.RouteService.navigate(['/policy',policy.PolicyNum]);
    }  
}