import {Injectable} from '@angular/core'
import {Http,RequestOptions,Headers} from '@angular/http'
import { Policy,PolicySearch } from '../models/policy'

@Injectable()
export class DataService
{
    HTTPService : Http;
    Policies : Policy[];  
    policysearch : PolicySearch;
    constructor(httpService:Http)
    {
        this.HTTPService = httpService;
        this.Policies = []; 
    } 
     GetPolicies(params){
        return new Promise(
            (resolve,reject) =>
        {  
            this.HTTPService.get('http://localhost:5000/Policies', { search:params })
            .subscribe(
                (response) => { 
                    this.Policies = response.json();
                    return resolve(this.Policies); 
                },
                (error) => {
                    console.dir(error)
                    return reject("No data found");
                }
            )
        })    
    }
}