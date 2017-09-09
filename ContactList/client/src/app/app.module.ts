/*************************************************************************/
/******************** @author : Nitesh Singh Rajput **********************/
/*************************************************************************/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Pipe,PipeTransform } from '@angular/core';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent
  ],
  
  imports: [
   	HttpModule,
    FormsModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
