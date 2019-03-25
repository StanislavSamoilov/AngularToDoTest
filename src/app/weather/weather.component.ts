import { Component, OnInit } from '@angular/core';
// import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  private apiKey = '2ac27ee036aeee78d401fffa925fc3cd'; // 
  // weatherData;
  locationData;

  constructor(
    // private weatherService: WeatherService
  ) { }

  ngOnInit() {
    // this.weatherData = this.weatherService.getWeather();
    navigator.geolocation.getCurrentPosition((position): void => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${this.apiKey}`)
        .then((responce) => {
          return responce.json();
        })
        .then((data) => {
          this.locationData = data;
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }

}
