export class App {

    cityName: HTMLInputElement;
    showBtn: HTMLButtonElement;
    opwApiKey: string = '2143d0a80d3b223e32953639018a12c4';

    constructor() {
        this.getCityName();
    }

    async getCityName() {
        this.cityName = <HTMLInputElement>document.getElementById("city");
        this.showBtn = <HTMLButtonElement>document.getElementById("showBtn");
        this.showBtn.addEventListener("click", () => this.getCityInfo(this.opwApiKey));
        
    }    

    async getCityInfo(opwApiKey: string,): Promise<any> {
        const cityName = this.cityName.value;
        console.log(cityName);
        const openWeatherApi = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${opwApiKey}`
        const weatherResponse = await fetch(openWeatherApi);
        const weatherData = await weatherResponse.json();
        this.createElement(weatherData)
        console.log(weatherData);
        return weatherData;
        
    }
    
    createElement(weatherData: any) {
        var weather: any = {
            cityName: String = weatherData.name,
            cityTemp: Number = weatherData.main.temp
        }  
        console.log(weather);
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