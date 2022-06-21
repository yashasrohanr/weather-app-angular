import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherServiceService } from 'src/app/Services/weather-service.service';
// this imports weather service created in the services folder to fetch weather from an api
@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.css'],
})
export class NewCardComponent implements OnInit {
  weather_from_api: any;
  cityname: string = 'Delhi';

  @Input() public current_cards: any;
  //the constructor sets a default value of the weather_from_api variable 
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
  ngOnInit(): void {
    // console.warn(' this is from new-card-component ' + this.current_cards);
    // this item is fetched from local storage to preserve 
    // data and state on page reload hence included here
    let a = localStorage.getItem('card' + this.current_cards);
    if (a != null) {
      let b = JSON.parse(a);
      // console.log(b?.cityNAME);
      // console.log(b);
      if (this.weather_from_api != null) {
        // console.log(this.weather_from_api);
        this.weather_from_api = b;
      }
    }
  }
  onreset() {
    // here too its saved in localstorage for preserving reset state on page reload
    this.weather_from_api.active = 0;
    let x = JSON.stringify(this.weather_from_api);
    localStorage.setItem('card' + this.current_cards, x);
  }
  onSearchPress(userInput: any) {
    // console.log(userInput.value.input_city);
    let api_url: string =
      'https://api.openweathermap.org/data/2.5/weather?q=' +
      userInput.value.input_city +
      '&appid=7cbb834811702b21cd936ca37ec64168';
    this.http.get<any>(api_url).subscribe((data: any) => {
      this.weather_from_api = data;
      this.weather_from_api.active = 2;
      // console.log(userInput.value.input_city);
      this.weather_from_api.cityNAME = userInput.value.input_city;
      let x = JSON.stringify(this.weather_from_api);
      // this.key = "card" + this.cardNumber;
      localStorage.setItem('card' + this.current_cards, x);
    });
  }
  onBlankCardClick() {
    // here too its saved in localstorage for preserving blank state on page reload
    this.weather_from_api.active = 1;
    let x = JSON.stringify(this.weather_from_api);
    localStorage.setItem('card' + this.current_cards, x);
  }
  onEdit() {
    // here too its saved in localstorage for preserving edit state on page reload
    this.weather_from_api.active = 1;
    let x = JSON.stringify(this.weather_from_api);
    localStorage.setItem('card' + this.current_cards, x);
  }
}
