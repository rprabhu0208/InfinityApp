import { Component, OnInit, Input } from '@angular/core'; 

import { Policy,PolicySearch,Options } from '../../models/policy'  
import { Utilities  } from '../../common/Utilities';
import { FilterComponent } from '../../common/components/filtercomponent/filter.component' 
import { Router, ActivatedRoute } from '@angular/router'

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
     constructor(routerservice : Router) {   
          this.RouteService = routerservice;
     } 
     ngOnInit() { 
       
    }
    @Input()
    set Policies(Policies : Policy[]){ 
        console.log(Policies)
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
    get Policies(){
        return this._Policies ;
    }

    showDetails(policyNum:string){ 
        this.RouteService.navigate(['/policy',policyNum]);
    }
    // filter(value,field,filtermatchMode,e){ 
    //      alert(value)  
    //      e.preventDefault();
    //    this.filteredPolicies = this._Policies.filter(function(el){
    //         switch(field){
    //             case 'InsuredName':
    //                 switch(value){
    //                     case 'All' :
    //                         return el; 
    //                     case 'NonBlanks':
    //                         return (el.InsuredName != '')
    //                     default :
    //                         return (el.InsuredName == value);
    //                 } 
    //             default :
    //                 break;

    //         }
    //         console.log('filter ' + el) 
    //     }); 
    // }
     

}