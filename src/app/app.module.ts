import {FormsModule}   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelsComponent } from './panels/panels.component';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule} from '@angular/common/http';
import { WeatherAPIService } from "./weather-api.service";


@NgModule({
  declarations: [
    AppComponent,
    PanelsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [WeatherAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
