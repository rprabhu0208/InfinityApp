import { PolicySearchComponent } from '../components/PolicySearchComponent/policysearch.component';


export const Routes = [
    {
        path :'',
        redirectTo : 'policysearch',
        pathMatch: 'full'
    }
    ,{
        path:'policysearch',
        component:PolicySearchComponent
    }
]