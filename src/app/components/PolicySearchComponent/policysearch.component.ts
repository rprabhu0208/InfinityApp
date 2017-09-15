import { Component, OnInit } from '@angular/core';
import {AccordionModule} from 'primeng/primeng';
import { PolicySearchResult,PolicySearch,Options } from '../../models/policy'
import {DataService} from '../../services/data.service'
// import {PolicyService} from '../../services/policy.service'
import {URLSearchParams  } from '@angular/http';
import { Utilities  } from '../../common/Utilities';
@Component({
    moduleId: module.id,
    selector: 'policy-search',
    templateUrl: 'policysearch.component.html' ,
     styleUrls: ['policysearch.component.css']
})

export class PolicySearchComponent implements OnInit {
     PolicySearch : PolicySearch;
     PolicySearchResults : PolicySearchResult[];  
     recentlyViewedPolicies : PolicySearchResult[];
     DB : DataService;
     AccordionIndex : number = 0; 
     constructor(public dataservice:DataService) { 
         this.PolicySearchResults = []; 
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
        this.DB.GetPolicies(params)
        .then(
        (
            policiesData: PolicySearchResult[]) => { 
            this.PolicySearchResults = policiesData;   
console.log(policiesData)
        },
        (errorMessage: string) => {
            console.log(errorMessage);
        });
        this.AccordionIndex = 1;
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