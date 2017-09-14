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
    //http://172.16.104.51/PolicySearch/api/PolicySearch
    //http://localhost:5000/policySearchResults
     GetPolicies(params){
        return new Promise(
            (resolve,reject) =>
        {  
            this.HTTPService.get(AppConfig.Services.baseUrl + '/policySearchResults', { search:params })
            .subscribe(
                (response) => { 
                    this.PolicySearchResults = response.json();
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