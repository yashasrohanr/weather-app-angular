import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-individual-card',
  templateUrl: './individual-card.component.html',
  styleUrls: ['./individual-card.component.css'],
})
export class IndividualCardComponent implements OnInit {

  WeatherData: any;
  cityname: string = 'Delhi';
  api_url: string =
    'https://api.openweathermap.org/data/2.5/weather?q=' +
    this.cityname +
    '&appid=7cbb834811702b21cd936ca37ec64168';
  constructor() {}

  ngOnInit() {
    this.WeatherData = {
      main: {},
      isDay: true,
    };
    this.getWeatherData();
    // console.log(this.WeatherData);
  }

  getWeatherData() {
    fetch(this.api_url)
      .then((response) => response.json())
      .then((data) => {
        this.setWeatherData(data);
      });

    // let data = JSON.parse(
    //   '{"coord":{"lon":72.85,"lat":19.01},"weather":[{"id":721,"main":"Haze","description":"haze","icon":"50n"}],"base":"stations","main":{"temp":297.15,"feels_like":297.4,"temp_min":297.15,"temp_max":297.15,"pressure":1013,"humidity":69},"visibility":3500,"wind":{"speed":3.6,"deg":300},"clouds":{"all":20},"dt":1580141589,"sys":{"type":1,"id":9052,"country":"IN","sunrise":1580089441,"sunset":1580129884},"timezone":19800,"id":1275339,"name":"Mumbai","cod":200}'
    // );
    // this.setWeatherData(data);
  }

  setWeatherData(data: any) {
    this.WeatherData = data;
    let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.WeatherData.isDay = currentDate.getTime() < sunsetTime.getTime();
    this.WeatherData.temp_celcius = (
      this.WeatherData.main.temp - 273.15
    ).toFixed(0);
    this.WeatherData.temp_min = (
      this.WeatherData.main.temp_min - 273.15
    ).toFixed(0);
    this.WeatherData.temp_max = (
      this.WeatherData.main.temp_max - 273.15
    ).toFixed(0);
    this.WeatherData.temp_feels_like = (
      this.WeatherData.main.feels_like - 273.15
    ).toFixed(0);
    this.WeatherData.humidity = this.WeatherData.main.humidity;
    this.WeatherData.windSpeed = this.WeatherData.wind.speed;
    this.WeatherData.country = this.WeatherData.sys.country;
  }

}
