export interface WeatherData {
  color?: object,
  weather?: object[],
  main?: {
    temp?: string,
    [propName: string]: any,
  },
  wind?: {
    speed?: string,
    [propName: string]: any,
  },
  clouds?: object,
  name?: string,
  [propName: string]: any,
}
