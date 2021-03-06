import {Injectable} from '@angular/core'
import {Http,RequestOptions,Headers} from '@angular/http'
import { PolicySearchResult,PolicySearch } from '../models/policy'
import { AppConfig } from '../configurations/app.config';

@Injectable()
export class DataService
{
    HTTPService : Http;
    PolicySearchResults : PolicySearchResult[];
    recentlyViewedPolicies: PolicySearchResult[];  
    policysearch : PolicySearch;
   
    constructor(httpService:Http)
    {
        this.HTTPService = httpService; 
        //this.Policies = []; 
    } 

    GetMetaData(){
         return new Promise(
            (resolve,reject) =>
        {   
            this.HTTPService.get(AppConfig.Services.metaDataUrl+"/metadata/api/metadata")
            //this.HTTPService.get(AppConfig.Services.metaDataUrl + "/metadata")
            .subscribe(
                (response) => {  
                
                    return resolve(response.json()); 
                },
                (error) => {
                    console.dir(error)
                    return reject("No data found");
                }
            )
        })   
    }

    //http://172.16.104.51/PolicySearch/api/PolicySearch
    //http://localhost:5000/policySearchResults
     GetPolicies(params){
        return new Promise(
            (resolve,reject) =>
        {   
         //    let options = new RequestOptions({  params: params });
             
            //this.HTTPService.get(AppConfig.Services.baseUrl + '/policySearchResults', options)
            // this.HTTPService.get(AppConfig.Services.baseUrl, options)
            // .subscribe(
            //     (response) => { 
            //         let policyResults = response.json();

            //         // this.PolicySearchResults = response.json();
            //         this.PolicySearchResults = policyResults.policySearchResults;
            //         return resolve(this.PolicySearchResults); 
            //     },
            //     (error) => {
            //         console.dir(error)
            //         return reject("No data found");
            //     }
            // )

            // this.HTTPService.get(AppConfig.Services.baseUrl+"/infinity/api/policysearch",params)
            this.HTTPService.get(AppConfig.Services.baseUrl+"/infinity/api/policysearch")
            .subscribe(
                (response) => {  
                    debugger;
                    //let policyResults = response.json();

                     this.PolicySearchResults = response.json();
                    //this.PolicySearchResults = policyResults.policySearchResults;
                    return resolve(this.PolicySearchResults); 
                },
                (error) => {
                    console.dir(error)
                    return reject("No data found");
                }
            )
        })    
    }
}