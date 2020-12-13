import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Everymundo } from './component/every_mundo.component';
import { CurrencyFormComponent } from './currency-form/currency-form.component';

@NgModule({
  declarations: [
    AppComponent,
    Everymundo,
    CurrencyFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
