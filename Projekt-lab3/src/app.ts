import { IWeatherData } from "./interfaces";


export class App {

    cityName: HTMLInputElement;
    showBtn: HTMLButtonElement;
    opwApiKey: string = '2143d0a80d3b223e32953639018a12c4';
    weatherContainer: HTMLDivElement;

    constructor() {
        this.getCityName();
        this.getCityInfo(this.opwApiKey);
    }

    async getCityName() {
        this.cityName = <HTMLInputElement>document.getElementById("city");
        this.showBtn = <HTMLButtonElement>document.getElementById("showBtn");
        this.weatherContainer = <HTMLDivElement>document.getElementById("mainElement");
        this.showBtn.addEventListener("click", () => this.getCityInfo(this.opwApiKey));
        
    }    

    async getCityInfo(opwApiKey: string): Promise<any> {
        const cityName = this.cityName.value;
        console.log(cityName);
        const openWeatherApi = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${opwApiKey}`
        const weatherResponse = await fetch(openWeatherApi)
        const weatherData = await weatherResponse.json();
        this.createElement(weatherData, cityName)
        console.log(weatherData);
        return weatherData;
  
    }

    createElement(weatherData: IWeatherData, cityName: string) {
        

        const kelwin = weatherData.main.temp;
        const celcjusz = kelwin - 273.15;

        const opis = weatherData.weather[0].icon;
        console.log(opis);

        const mainDiv: HTMLDivElement = document.createElement("div");
        mainDiv.id = "mainDiv"
        mainDiv.textContent = "Pogoda w " + cityName + ":";
        const cityDiv: HTMLDivElement = document.createElement("div");
        cityDiv.id = "cityDiv"
        cityDiv.textContent = "Temperature: " + celcjusz.toFixed(2) + "°C" + " Country: " + weatherData.sys.country + " Wind: " + weatherData.wind.speed + "km/h" + " Weather: " + weatherData.weather[0].description;
        const temperatureIcon: HTMLImageElement = document.createElement("img")
        temperatureIcon.setAttribute("src", `http://openweathermap.org/img/wn/${opis}@2x.png`);
        temperatureIcon.setAttribute("width", "100");
        temperatureIcon.setAttribute("height", "100");
        temperatureIcon.setAttribute("alt", "icons");
        cityDiv.appendChild(temperatureIcon);
        mainDiv.appendChild(cityDiv);
        document.body.appendChild(mainDiv);
        this.saveData(weatherData);
    }

    saveData(data: any) {
        localStorage.setItem('weatherData,', JSON.stringify(data));

    }

    getData() {
        const data = localStorage.getItem('weatherData');
        if(data) {
            return JSON.parse(data);
        }
        else {
            return [];
        }
    }
    
    





    // constructor() {
    //     this.getCityInfo('zakopane')
    // }
    // async getCityInfo(zakopane: string) {
    //     const weather = await this.getWeather('zakopane');
    //     this.saveData(weather);
    // }
    // async getWeather(zakopane: string): Promise<any> {
    //     const openWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${zakopane}&APPID=${this.opwApiKey}`;
    //     const weatherResponse = await fetch(openWeatherUrl);
    //     const weatherData = await weatherResponse.json();
    //     console.log(weatherData);
    //     return weatherData;
    // }
    // saveData(data: any) {
    //     localStorage.setItem('weatherData', JSON.stringify(data));
    // }
    // getData() {
    //     const data = localStorage.getItem('weatherData');
    //     if (data) {
    //         return JSON.parse(data);
    //     } else {
    //         return {};
    //     }
    // }
}
const app = new App();