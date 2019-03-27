export interface WeatherData {
  color?: {
    lon: number,
    lat: number,
  },
  sys?: {
    country: string,
    sunrise: number,
    sunset: number,
  }
  weather?: [{
    id: number,
    main: string,
    description: string,
    icon: string,
  }],
  main?: {
    temp: number,
    humidity: number,
    pressure: number,
    temp_min: number,
    temp_max: number
  },
  wind?: {
    speed: number,
    deg: number,
  },
  rain?: {
    [propName: string]: any,
  }
  clouds?: {
    [propName: string]: any,
  },
  name?: string,
  cod?: number,
}