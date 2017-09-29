import { HttpClient } from './http.client';
import { PolicySearchResult,PolicySearch } from '../models/policy'
import { AppConfig } from '../configurations/app.config';
import {Injectable} from '@angular/core';

 @Injectable()
export class PolicyService {
  // Notice we inject "our" HttpClient here, naming it Http so it's easier
  http :any;
   PolicySearchResults : PolicySearchResult[];
    recentlyViewedPolicies: PolicySearchResult[];  

    constructor(httpClient: HttpClient) {
      this.http = httpClient;
  }

   
  GetPolicies(params){
        // return new Promise(
        //     (resolve,reject) =>
        // {   
            debugger;
          return  this.http.get(AppConfig.Services.baseUrl + '/policySearchResults')
            // .subscribe(
            //     (response) => { 
            //         this.PolicySearchResults = response.json();
            //         return resolve(this.PolicySearchResults); 
            //     },
            //     (error) => {
            //         console.dir(error)
            //         return reject("No data found");
            //     }
            // )
    //     })    
     }
}