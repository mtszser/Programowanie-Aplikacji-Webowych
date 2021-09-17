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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.App = void 0;
var App = /** @class */ (function () {
    function App() {
        this.opwApiKey = "2143d0a80d3b223e32953639018a12c4";
        this.cityCompare = [];
        this.cityList = [];
        this.getCityName();
        this.cityList = this.getData();
        for (var _i = 0, _a = this.cityList; _i < _a.length; _i++) {
            var city = _a[_i];
            this.createElement(city);
        }
    }
    App.prototype.getCityName = function () {
        var _this = this;
        this.showBtn = document.getElementById("showBtn");
        this.clearBtn = document.getElementById("clearBtn");
        this.clearBtn.addEventListener("click", function () { return _this.clearStorage(); });
        this.showBtn.addEventListener("click", function () {
            _this.cityName = (document.getElementById("city")).value.toUpperCase();
            _this.createElement(_this.cityName);
            // ... - spread syntax (składnia rozwinięcia)
            _this.saveData(__spreadArrays(_this.cityList));
            console.log(_this.getData());
        });
    };
    App.prototype.clearStorage = function () {
        localStorage.clear();
    };
    App.prototype.getCityInfo = function (cityName) {
        return __awaiter(this, void 0, Promise, function () {
            var openWeatherApi, weatherResponse, weatherData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(cityName);
                        openWeatherApi = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&APPID=" + this.opwApiKey;
                        return [4 /*yield*/, fetch(openWeatherApi)];
                    case 1:
                        weatherResponse = _a.sent();
                        return [4 /*yield*/, weatherResponse.json()];
                    case 2:
                        weatherData = _a.sent();
                        console.log(weatherData);
                        return [2 /*return*/, weatherData];
                }
            });
        });
    };
    App.prototype.createElement = function (cityName) {
        var _this = this;
        this.getCityInfo(cityName).then(function (data) {
            if (_this.cityCompare.includes(data.id))
                return;
            _this.cityCompare.push(data.id);
            var kelwin = data.main.temp;
            var celcjusz = kelwin - 273.15;
            var opis = data.weather[0].icon;
            console.log(opis);
            var mainDiv = document.createElement("div");
            mainDiv.id = "mainDiv";
            mainDiv.textContent = "Pogoda w " + cityName + ":";
            var cityDiv = document.createElement("div");
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
            var temperatureIcon = document.createElement("img");
            temperatureIcon.setAttribute("src", "http://openweathermap.org/img/wn/" + opis + "@2x.png");
            temperatureIcon.setAttribute("width", "100");
            temperatureIcon.setAttribute("height", "100");
            temperatureIcon.setAttribute("alt", "icons");
            cityDiv.appendChild(temperatureIcon);
            mainDiv.appendChild(cityDiv);
            var mainContainer = (document.getElementById("mainContainer"));
            var container = document.getElementById("container");
            container.appendChild(mainDiv);
            mainContainer.appendChild(container);
            _this.cityList.push(data.name);
        });
    };
    App.prototype.saveData = function (data) {
        localStorage.setItem("weatherData", JSON.stringify(data));
    };
    App.prototype.getData = function () {
        var data = localStorage.getItem("weatherData");
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
