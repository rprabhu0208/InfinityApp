import { Component, OnInit, Input } from '@angular/core'; 
import { Policy,PolicySearch,Options } from '../../models/policy'  
import { Utilities  } from '../../common/Utilities';
@Component({
    moduleId: module.id,
    selector: 'policy-list',
    templateUrl: 'policylist.component.html' 
}) 
export class PolicyListComponent implements OnInit { 
    _Policies : Policy[];
    filteredPolicies : Policy[];
    _InsuredNames : any; 
     constructor() {   
          
     } 
     ngOnInit() { 
       
    }
    @Input()
    set Policies(Policies : Policy[]){ 
        this._Policies = Policies;
        this.filteredPolicies = Policies;
        if(!Utilities.isNullOrEmpty(Policies))
            {
        this._InsuredNames = Policies.map((x)=>({label : x.InsuredName, value : x.InsuredName})).filter(function(el)
                        {return (el.value != '')})
                        
            if(this._InsuredNames.length > 0){
                this._InsuredNames.unshift({ label: '(NonBlanks)', value: 'NonBlanks' })
                this._InsuredNames.unshift({ label: '(Blanks)', value: '' })
                this._InsuredNames.unshift({ label: '(Custom)', value: 'Custom' })
                this._InsuredNames.unshift({ label: '(All)', value: 'All' })
            }
        }
    }
    get Policies(){
        return this._Policies ;
    }
     filter(value,field,filtermatchMode){  
       this.filteredPolicies = this._Policies.filter(function(el){
            switch(field){
                case 'InsuredName':
                    switch(value){
                        case 'All' :
                            return el; 
                        case 'NonBlanks':
                            return (el.InsuredName != '')
                        default :
                            return (el.InsuredName == value);
                    } 
                default :
                    break;

            }
            console.log('filter ' + el) 
        }); 
    }
     

}