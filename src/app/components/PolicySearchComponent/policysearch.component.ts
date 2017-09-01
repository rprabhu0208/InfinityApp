import { Component, OnInit } from '@angular/core';
import {AccordionModule} from 'primeng/primeng';
import { Policy,PolicySearch,Options } from '../../models/policy'
import {DataService} from '../../services/data.service'
import {URLSearchParams  } from '@angular/http';
import { Utilities  } from '../../common/Utilities';
@Component({
    moduleId: module.id,
    selector: 'policy-search',
    templateUrl: 'policysearch.component.html' 
})

export class PolicySearchComponent implements OnInit {
     PolicySearch : PolicySearch;
     Policies : Policy[];
     filteredPolicies : Policy[];
     InsuredNames : any;
     DB : DataService;
     AccordionIndex : number = 0; 
     constructor( dataservice:DataService) { 
         this.Policies = []; 
         this.DB = dataservice;
     }

    ngOnInit() { 
        this.AccordionIndex = 0; 
        this.PolicySearch = new PolicySearch()
         this.PolicySearch.InsuredNameOption = new Options(); 
    }
    onTabOpen(event:any){ 
        this.AccordionIndex = event.index; 
    }
    onKey(event: any){  
        if(event.keyCode == 13)
            this.Search(this.PolicySearch); 
        return
    }
    Search(policysearch:any){   
        console.dir(policysearch);
        
        let params: URLSearchParams = new URLSearchParams(); 
        if(policysearch.InsuredName != null &&  policysearch.InsuredNameOption != null ){
            if(policysearch.InsuredNameOption.SoundsLike != null && policysearch.InsuredNameOption.SoundsLike)
                params.set('InsuredName_like', policysearch.InsuredName); 
            if(policysearch.InsuredNameOption.AllRelationships != null && policysearch.InsuredNameOption.AllRelationships)
                params.set('InsuredName_like', policysearch.InsuredName);  
            if(policysearch.InsuredNameOption.AllRelationships != null && policysearch.InsuredNameOption.AllRelationships)
                params.set('InsuredName_like', policysearch.InsuredName);   
        }
        if(!Utilities.isNullOrEmpty(policysearch.InsuredName) && !params.has("InsuredName_like")) { 
                params.set('InsuredName', policysearch.InsuredName);  
        } 
        console.log(params)
        this.DB.GetPolicies(params)
        .then(
        (
            policiesData: Policy[]) => { 
            this.Policies = policiesData; 
            this.filteredPolicies = policiesData;
            //this.InsuredNames.push(); 
            this.InsuredNames = policiesData.map((x)=>({label : x.InsuredName, value : x.InsuredName})).filter(function(el)
                        {return (el.value != '')})
                        
            if(this.InsuredNames.length > 0){
                this.InsuredNames.unshift({ label: '(NonBlanks)', value: 'NonBlanks' })
                this.InsuredNames.unshift({ label: '(Blanks)', value: '' })
                this.InsuredNames.unshift({ label: '(Custom)', value: 'Custom' })
                this.InsuredNames.unshift({ label: '(All)', value: 'All' })
            }
            
        },
        (errorMessage: string) => {
            console.log(errorMessage);
        });
        this.AccordionIndex = 1;
    }
    
    filter(value,field,filtermatchMode){ 
        this.filteredPolicies = this.Policies.filter(function(el){
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
            console.log(el) 
        }); 
    }

    openFilter(){
     //   debugger;
        var insuredNameFilter = document.getElementById('InsuredNameFilter');  
        insuredNameFilter.querySelector('div.ui-column-filter').classList.add("ui-dropdown-open")
        //insuredNameFilter.querySelector('div.ui-column-filter') 
        insuredNameFilter.querySelector('div.ui-dropdown-panel').setAttribute("style","display: block; z-index: 1001; top: 30px; left: 0px; opacity: 1;")
        
        //insuredNameFilter.querySelector('div.ui-column-filter').classList.add("ui-state-focus") 
        
        
        // if(!insuredNameFilter.classList.contains('ui-dropdown-open'))
        //     insuredNameFilter.classList.add('ui-dropdown-open');
        // else 
        //     insuredNameFilter.classList.remove('ui-dropdown-open');
    } 
}