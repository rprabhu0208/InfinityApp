import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from '../components/AppComponent/app.component';
import { DataService } from '../services/data.service';
import { Routes } from '../configurations/app.config';
import { PolicySearchComponent  } from '../components/PolicySearchComponent/policysearch.component';
import {DataTableModule,SharedModule,DropdownModule,AccordionModule} from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { Utilities  } from '../common/Utilities';

@NgModule({
  declarations: [
    AppComponent
    ,PolicySearchComponent

  ],
  imports: [
    BrowserModule
    ,BrowserAnimationsModule
    ,DataTableModule
    ,SharedModule
    ,DropdownModule
    ,HttpModule
    ,FormsModule
    ,RouterModule.forRoot(Routes)
    ,AccordionModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
