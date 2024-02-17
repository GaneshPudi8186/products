import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule} from '@angular/common/http';
import { Pipe1Pipe } from './pipe1.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Pipe1Pipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
