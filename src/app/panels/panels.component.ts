import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WeatherAPIService } from "../weather-api.service";

@Component({
  selector: 'app-panels',
  templateUrl: './panels.component.html',
  styleUrls: ['./panels.component.css']
})

export class PanelsComponent implements OnInit {
  public isCollapsed : boolean = false;
  public enter : boolean = false;
  public error : string ;
  public weatherSearchForm: FormGroup;
  public weatherData: any;
  public isDay : boolean;
  public value;
  public interval;
 
  constructor(private formBuilder: FormBuilder,private weatherapiService: WeatherAPIService) {}

  ngOnInit(): void {
    this.weatherSearchForm = this.formBuilder.group({
      location: [""]
    });
  }

  refresh(data){
    this.value = data;
    this.sendToAPI(this.value);
    this.interval = setInterval(() => {
      this.sendToAPI(this.value);
    },30000);
  }
  
  sendToAPI(formValues) {
    this.weatherapiService.getWeatherData(formValues.location)
    .subscribe( 
      data => {
       this.setWeatherData(data);
       this.weatherData = data;
       console.log(this.weatherData);
       this.error = "";
      },
      error => { 
        console.log(error);
        this.error = error;
      }
    )
  }
  
  setWeatherData(data){
    this.weatherData = data;
    let sunsetTime = new Date(this.weatherData.sys.sunset * 1000);
    this.weatherData.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.isDay = (currentDate.getTime() < sunsetTime.getTime());
  }

  form(){
    this.enter = !this.enter;
  }

}

