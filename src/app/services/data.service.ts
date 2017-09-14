import {Injectable} from '@angular/core'
import {Http,RequestOptions,Headers} from '@angular/http'
import { PolicySearchResult,PolicySearch } from '../models/policy'

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
     GetPolicies(params){
        return new Promise(
            (resolve,reject) =>
        {  
            this.HTTPService.get('http://localhost:5000/policySearchResults', { search:params })
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