import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from '../components/AppComponent/app.component';
import { DataService } from '../services/data.service';
import { Routes } from '../configurations/routes.config';
import { PolicySearchComponent  } from '../components/PolicySearchComponent/policysearch.component';
import { PolicyListComponent  } from '../components/PolicyListComponent/policylist.component';
 import {SharedModule,DropdownModule,AccordionModule} from 'primeng/primeng';
import {DataTableModule} from 'angular2-datatable'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { Utilities } from '../common/Utilities';
import { FilterComponent } from '../common/components/filtercomponent/filter.component'
import { PolicyDetailComponent  } from '../components/PolicyDetailComponent/policydetail.component';

@NgModule({
  declarations: [
    AppComponent
    ,PolicySearchComponent
    ,PolicyListComponent
    ,FilterComponent
    ,PolicyDetailComponent 
  ],
  imports: [
    BrowserModule
    ,BrowserAnimationsModule
   ,DataTableModule
   ,DataTableModule
    ,SharedModule
    ,DropdownModule
    ,HttpModule
    ,FormsModule
    ,RouterModule.forRoot(Routes, { useHash: true }) 
   ,AccordionModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
