export class App {
  cityName: string;
  clearBtn: HTMLButtonElement;
  showBtn: HTMLButtonElement;
  opwApiKey: string = "2143d0a80d3b223e32953639018a12c4";
  weatherList: HTMLDivElement;
  cityCompare: string[] = [];
  cityList: string[] = [];

  constructor() {
    this.getCityName();
    this.cityList = this.getData();
    for (let city of this.cityList) {
      this.createElement(city);
    }
  }
  getCityName() {
    this.showBtn = <HTMLButtonElement>document.getElementById("showBtn");
    this.clearBtn = <HTMLButtonElement>document.getElementById("clearBtn");
    this.clearBtn.addEventListener("click", () => this.clearStorage());
    this.showBtn.addEventListener("click", () => {
      this.cityName = (<HTMLInputElement>(
        document.getElementById("city")
      )).value.toUpperCase();
      this.createElement(this.cityName);
      // ... - spread syntax (składnia rozwinięcia)
      this.saveData([...this.cityList]);
      console.log(this.getData());
    });
  }

  clearStorage() {
    localStorage.clear();
  }

  async getCityInfo(cityName: string): Promise<any> {
    console.log(cityName);
    const openWeatherApi = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${this.opwApiKey}`;
    const weatherResponse = await fetch(openWeatherApi);
    const weatherData = await weatherResponse.json();
    console.log(weatherData);
    return weatherData;
  }

  createElement(cityName: string) {
    this.getCityInfo(cityName).then((data) => {
      if (this.cityCompare.includes(data.id)) return;
      this.cityCompare.push(data.id);
      const kelwin = data.main.temp;
      const celcjusz = kelwin - 273.15;
      const opis = data.weather[0].icon;
      console.log(opis);
      const mainDiv: HTMLDivElement = document.createElement("div");
      mainDiv.id = "mainDiv";
      mainDiv.textContent = "Pogoda w " + cityName + ":";
      const cityDiv: HTMLDivElement = document.createElement("div");
      cityDiv.id = "cityDiv";
      cityDiv.textContent =
        "Temperature: " +
        celcjusz.toFixed(0) +
        "°C" +
        " Country: " +
        data.sys.country +
        " Wind: " +
        data.wind.speed +
        "km/h" +
        " Weather: " +
        data.weather[0].description;
      const temperatureIcon: HTMLImageElement = document.createElement("img");
      temperatureIcon.setAttribute(
        "src",
        `http://openweathermap.org/img/wn/${opis}@2x.png`
      );
      temperatureIcon.setAttribute("width", "100");
      temperatureIcon.setAttribute("height", "100");
      temperatureIcon.setAttribute("alt", "icons");
      cityDiv.appendChild(temperatureIcon);
      mainDiv.appendChild(cityDiv);
      const mainContainer = <HTMLDivElement>(
        document.getElementById("mainContainer")
      );
      const container = <HTMLDivElement>document.getElementById("container");
      container.appendChild(mainDiv);
      mainContainer.appendChild(container);
      this.cityList.push(data.name);
    });
  }

  saveData(data: any) {
    localStorage.setItem("weatherData", JSON.stringify(data));
  }

  getData() {
    const data = localStorage.getItem("weatherData");
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  }
}
