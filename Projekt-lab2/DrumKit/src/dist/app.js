"use strict";
exports.__esModule = true;
exports.App = void 0;
var App = /** @class */ (function () {
    function App() {
        this.startApp();
    }
    App.prototype.startApp = function () {
        this.getButton();
        this.addEventToButtons();
        this.onKeyDown = this.onKeyDown.bind(this);
        window.addEventListener('keydown', this.onKeyDown);
    };
    App.prototype.getButton = function () {
        this.koszmar = document.querySelector("#koszmar");
        this.diabel = document.querySelector("#diabel");
        this.pierwszerazy = document.querySelector("#pierwszerazy");
        this.obrzydliwe = document.querySelector("#obrzydliwe");
        this.oscypek = document.querySelector("#oscypek");
        this.zdrowie = document.querySelector("#zdrowie");
        this.qBtn = document.querySelector("#q-Btn");
        this.wBtn = document.querySelector("#w-Btn");
        this.eBtn = document.querySelector("#e-Btn");
        this.rBtn = document.querySelector("#r-Btn");
        this.tBtn = document.querySelector("#t-Btn");
        this.yBtn = document.querySelector("#y-Btn");
        console.log(this.diabel);
    };
    App.prototype.onKeyDown = function (ev) {
        var key = ev.key;
        this.play(key);
    };
    App.prototype.play = function (key) {
        switch (key) {
            case 'q':
                this.obrzydliwe.play();
                break;
            case 'w':
                this.pierwszerazy.play();
                break;
            case 'e':
                this.koszmar.play();
                break;
            case 'r':
                this.oscypek.play();
                break;
            case 't':
                this.diabel.play();
                break;
            case 'y':
                this.zdrowie.play();
                break;
        }
    };
    App.prototype.addEventToButtons = function () {
        var _this = this;
        this.qBtn.addEventListener("click", function () { return _this.obrzydliwe.play(); });
        this.wBtn.addEventListener("click", function () { return _this.pierwszerazy.play(); });
        this.eBtn.addEventListener("click", function () { return _this.koszmar.play(); });
        this.rBtn.addEventListener("click", function () { return _this.oscypek.play(); });
        this.tBtn.addEventListener("click", function () { return _this.diabel.play(); });
        this.yBtn.addEventListener("click", function () { return _this.zdrowie.play(); });
    };
    return App;
}());
exports.App = App;
