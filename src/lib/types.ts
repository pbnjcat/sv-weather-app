export interface Weather {
    location: Location;
    forecast: Forecast;
    current: Current;
    timezone: string;
    localtime: string;
}
// models the current weather data
export interface Current {
    last_updated: string;
    temp: number;
    condition: WeatherCondition;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    wind: Wind;
}
// models the forecasted weather data
export interface Forecast {

}

export interface WeatherCondition {
    id: number;
    description: string;
    icon: string;
}

export interface Wind {
    speed: number;
    deg: number;
}

export interface WindDirection {

}

export interface Coordinates {
    lat: number;
    lon: number;
}

export interface Location {
    name: string;
    country: string;
    coords: Coordinates;
}

