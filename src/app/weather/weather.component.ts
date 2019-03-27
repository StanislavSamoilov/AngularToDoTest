import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherService } from '../weather.service';
import { WeatherData } from '../weather-data';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit, OnDestroy {
  public weatherData: WeatherData;
  private dataSub: Subscription;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.dataSub = this.weatherService.getWeather().subscribe(
      (res) => { this.weatherData = res; },
      (error) => { console.log(error) }
    );
  }

  ngOnDestroy() {
    this.dataSub.unsubscribe();
  }
}
