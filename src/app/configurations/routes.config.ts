import { PolicySearchComponent } from '../components/PolicySearchComponent/policysearch.component';
import { PolicyDetailComponent  } from '../components/PolicyDetailComponent/policydetail.component';


export const Routes = [
    {
        path :'',
        redirectTo : 'policysearch',
        pathMatch: 'full'
    }
    ,{
        path:'policysearch',
        component:PolicySearchComponent
    },
    {
        path:'policy', 
        component:PolicyDetailComponent 
    },
     {
        path:'policy/:policynum', 
        component:PolicyDetailComponent 
    }
]