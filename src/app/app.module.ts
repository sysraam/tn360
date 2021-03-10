import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule,MatGridListModule} from '@angular/material/';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';

 


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule ,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
