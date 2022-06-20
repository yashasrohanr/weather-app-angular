import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { weatherdata } from 'src/app/weatherData';
import { HttpClient } from '@angular/common/http';
import { WeatherServiceService } from 'src/app/Services/weather-service.service';
import { weatherData1 } from 'src/app/models/weather.model';
import { observable } from 'rxjs';
@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.css'],
})
export class NewCardComponent implements OnInit {
  weather_from_api: any;
  cityname: string = 'Delhi';



  constructor(weatherService: WeatherServiceService, private http: HttpClient) {
    this.weather_from_api = {
      active: 0,
      coord: {
        lon: -122.08,
        lat: 37.39,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      base: 'stations',
      main: {
        temp: 282.55,
        feels_like: 281.86,
        temp_min: 280.37,
        temp_max: 284.26,
        pressure: 1023,
        humidity: 100,
      },
      visibility: 10000,
      wind: {
        speed: 1.5,
        deg: 350,
      },
      clouds: {
        all: 1,
      },
      dt: 1560350645,
      sys: {
        type: 1,
        id: 5122,
        message: 0.0139,
        country: 'US',
        sunrise: 1560343627,
        sunset: 1560396563,
      },
      timezone: -25200,
      id: 420006353,
      name: 'Mountain View',
      cod: 200,
    };
  }
  weatherService: any;
  ngOnInit(): void {}
  onreset() {
    this.weather_from_api.active = 0;
  }
  onSearchPress(userInput: any) {
    // console.log(userInput.value.input_city);
    let api_url: string =
      'https://api.openweathermap.org/data/2.5/weather?q=' +
      userInput.value.input_city +
      '&appid=7cbb834811702b21cd936ca37ec64168';
    console.log(api_url);
    this.http.get<any>(api_url).subscribe((data: any) => {
      this.weather_from_api = data;
      this.weather_from_api.active = 2;
      console.log(userInput.value.input_city);
      this.weather_from_api.cityNAME = userInput.value.input_city;
      
    });
  }
  onBlankCardClick() {
    this.weather_from_api.active = 1;
  }
  onEdit(){
    this.weather_from_api.active = 1;
  }
}
