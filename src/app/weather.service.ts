// DONT WORK

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';

// interface WeatherData {
//   color?: object,
//   weather?: object[],
//   main?: {
//     temp?: string,
//     [propName: string]: any,
//   },
//   wind?: {
//     speed?: string,
//     [propName: string]: any,
//   },
//   clouds?: object,
//   name?: string,
//   [propName: string]: any,
// }

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private location;
  private apiKey = '2ac27ee036aeee78d401fffa925fc3cd';

  constructor(private http: HttpClient) { }

  getLocation() {
    return new Observable((observer) => {
      const {next, error} = observer;

      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(next, error);
      } else {
        error('Geolocation not available')
      }

      return {unsubscribe() {}};
    });
  }

  getWeather() {
    const sub = this.getLocation().subscribe(
        {
          next(position) { this.location = { lat: (<Position>position).coords.latitude, lon: (<Position>position).coords.longitude } },
          error(error) { console.log(error) }
        }
    );
    sub.unsubscribe();

    // pipe ?
    // const locationObservableFn = this.getLocation();
   
    // const pipedFunction = pipe(
    // );

    // if (this.location) {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.location.lat}&lon=${this.location.lon}&appid=${this.apiKey}`);
    //   } else {
    //     console.log('Error getting location');
    //   }
    // }
  }
}
