import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  moduleId: module.id,
  selector: 'weather',
  templateUrl: 'weather.component.html',
  styleUrls: ['../../weather.css'],
  providers:[WeatherService]
})
export class WeatherComponent  { 
    name : string;
    city : string;
    weathers : Weathers;

      constructor(private weatherService: WeatherService){       
        this.name = ' live weather';
        this.city = '';
        
        //this.weatherService.getweather(this.city).subscribe(weathers => {this.weathers = weathers;});
      }
      method(a: string){   
        //alert('enterd');
        //this.name = ' live weather';
        this.city = a;
        console.log("Inside methoddddd" + a);
        //this.weathers = this.weatherService.getweather(this.city);
        this.weatherService.getweather(this.city).subscribe(weathers => {this.weathers = weathers;});
        //this.weathers = this.weatherService.getweather(this.city);
        //console.log("Inside methoddddd");
        //console.log(weathers);
      }
  }
interface Weathers{
    name: string;
    city: string;
    body: string;
}