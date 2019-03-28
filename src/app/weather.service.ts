import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { WeatherData } from './weather-data';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = '2ac27ee036aeee78d401fffa925fc3cd';
  private origin = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  private getLocation(): Observable<Position> {
    return Observable.create(observer => {
      navigator.geolocation.getCurrentPosition((pos: Position) => {
        observer.next(pos);
      });
    });
  }

  private getWeatherInfo(locationCoords: Position): Observable<WeatherData> {
    return this.http.get(
      `${this.origin}?lat=${locationCoords.coords.latitude}&lon=${
        locationCoords.coords.longitude
      }&appid=${this.apiKey}`
    );
  }

  public getWeather(): Observable<WeatherData> {
    return this.getLocation().pipe(
      switchMap((position: Position) => {
        return this.getWeatherInfo(position);
      })
    );
  }
}
