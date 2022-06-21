import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { weatherData1 } from '../models/weather.model';

// this service fetches weather data for the new-card-component

@Injectable({
  providedIn: 'root',
})
export class WeatherServiceService {
  constructor(private http: HttpClient) {}
  getWeatherData(city_url: string): Observable<weatherData1> {
    return this.http.get<weatherData1>(
      '{"coord":{"lon":-0.1257,"lat":51.5085},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"base":"stations","main":{"temp":304.38,"feels_like":303.8,"temp_min":301.4,"temp_max":305.5,"pressure":1019,"humidity":36},"visibility":10000,"wind":{"speed":6.69,"deg":230},"clouds":{"all":98},"dt":1655473160,"sys":{"type":2,"id":268730,"country":"GB","sunrise":1655437361,"sunset":1655497208},"timezone":3600,"id":2643743,"name":"London","cod":200}'
    );
  }
}
