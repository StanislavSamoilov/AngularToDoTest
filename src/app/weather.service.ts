import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  // private location = {
  //   lat: 0,
  //   lon: 0
  // };
  // private apiKey = '2ac27ee036aeee78d401fffa925fc3cd';

  // constructor(private http: HttpClient) { }

  // getLocation() {
    // return new Observable((observer) => {
    //   const {next, error} = observer;

    //   if ('geolocation' in navigator) {
    //     navigator.geolocation.getCurrentPosition(next, error);
    //   } else {
    //     error('Geolocation not available')
    //   }

    //   return {unsubscribe() {}};
    // });
  // }
  // getLocation() {
  //   navigator.geolocation.getCurrentPosition(
  //     (position)=> { this.location = { lat: position.coords.latitude, lon: position.coords.longitude } }
  //   );
  // }

  // getWeather() {
  //   const locationCoords = this.getLocation().subscribe(
  //     (location) => { console.log('hi') },
  //     (error) => { console.log(error) }
  //   );
  // }

  // getWeather() {
  //   const sub = this.getLocation().subscribe(
  //       {
  //         next(position) { this.location = { lat: (<Position>position).coords.latitude, lon: (<Position>position).coords.longitude } },
  //         error(error) { console.log(error) }
  //       }
  //   );
  //   sub.unsubscribe();

  //   return this.http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.location.lat}&lon=${this.location.lon}&appid=${this.apiKey}`);
  // }
}
