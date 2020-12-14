import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Everymundo } from './component/every_mundo.component';
import { CurrencyFormComponent } from './currency-form/currency-form.component';
import { DatatableComponent } from './component/datatable/datatable.component';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    AppComponent,
    Everymundo,
    CurrencyFormComponent,
    DatatableComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
