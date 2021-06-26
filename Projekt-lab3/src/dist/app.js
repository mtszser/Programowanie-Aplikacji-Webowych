"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.App = void 0;
var App = /** @class */ (function () {
    function App() {
        this.opwApiKey = '2143d0a80d3b223e32953639018a12c4';
        this.getCityName();
        this.getCityInfo(this.opwApiKey);
    }
    App.prototype.getCityName = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.cityName = document.getElementById("city");
                this.showBtn = document.getElementById("showBtn");
                this.weatherContainer = document.getElementById("mainElement");
                this.showBtn.addEventListener("click", function () { return _this.getCityInfo(_this.opwApiKey); });
                return [2 /*return*/];
            });
        });
    };
    App.prototype.getCityInfo = function (opwApiKey) {
        return __awaiter(this, void 0, Promise, function () {
            var cityName, openWeatherApi, weatherResponse, weatherData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cityName = this.cityName.value;
                        console.log(cityName);
                        openWeatherApi = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&APPID=" + opwApiKey;
                        return [4 /*yield*/, fetch(openWeatherApi)];
                    case 1:
                        weatherResponse = _a.sent();
                        return [4 /*yield*/, weatherResponse.json()];
                    case 2:
                        weatherData = _a.sent();
                        this.createElement(weatherData, cityName);
                        console.log(weatherData);
                        return [2 /*return*/, weatherData];
                }
            });
        });
    };
    App.prototype.createElement = function (weatherData, cityName) {
        var kelwin = weatherData.main.temp;
        var celcjusz = kelwin - 273.15;
        var opis = weatherData.weather[0].icon;
        console.log(opis);
        var mainDiv = document.createElement("div");
        mainDiv.id = "mainDiv";
        mainDiv.textContent = "Pogoda w " + cityName + ":";
        var cityDiv = document.createElement("div");
        cityDiv.id = "cityDiv";
        cityDiv.textContent = "Temperature: " + celcjusz.toFixed(2) + "°C" + " Country: " + weatherData.sys.country + " Wind: " + weatherData.wind.speed + "km/h" + " Weather: " + weatherData.weather[0].description;
        var temperatureIcon = document.createElement("img");
        temperatureIcon.setAttribute("src", "http://openweathermap.org/img/wn/" + opis + "@2x.png");
        temperatureIcon.setAttribute("width", "100");
        temperatureIcon.setAttribute("height", "100");
        temperatureIcon.setAttribute("alt", "icons");
        cityDiv.appendChild(temperatureIcon);
        mainDiv.appendChild(cityDiv);
        document.body.appendChild(mainDiv);
        this.saveData(weatherData);
    };
    App.prototype.saveData = function (data) {
        localStorage.setItem('weatherData,', JSON.stringify(data));
    };
    App.prototype.getData = function () {
        var data = localStorage.getItem('weatherData');
        if (data) {
            return JSON.parse(data);
        }
        else {
            return [];
        }
    };
    return App;
}());
exports.App = App;
var app = new App();
