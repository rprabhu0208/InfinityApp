import { Component, OnInit, Input } from '@angular/core'; 
import {DataTable, SortEvent} from "angular2-datatable";

@Component({
    moduleId: module.id,
    selector: 'filter',
    templateUrl: 'filter.component.html' 
}) 

export class FilterComponent implements OnInit { 
    @Input("by") filterBy : string;
    @Input() filterMode : string;
    @Input() options : any;
    @Input("mfTable") mfTable: DataTable;
    _Policies :any;
    filteredPolicies : any;
     constructor() {    
     } 
     ngOnInit() {  
     } 

    filter(value,field,filtermatchMode,e){ 
        console.log('filterd click')
         console.log(this.mfTable)  
         e.preventDefault();
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
    }
}