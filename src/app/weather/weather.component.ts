import { Component, OnInit } from '@angular/core';

interface weatherData {
  color?: Object,
  weather?: Object[],
  main?: {
    temp?: string,
    [propName: string]: any
  }
  wind?: {
    speed?: string,
    [propName: string]: any
  }
  clouds?: Object,
  name?: string
  [propName: string]: any
}

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  // not very private...
  private apiKey = '2ac27ee036aeee78d401fffa925fc3cd'; // 2ac27ee036aeee78d401fffa925fc3cd
  locationData: weatherData;

  constructor() { }

  ngOnInit() {
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
