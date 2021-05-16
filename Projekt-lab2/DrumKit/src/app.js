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
        this.oty = document.querySelector("#oty");
        this.diabel = document.querySelector("#diabel");
        this.mamma = document.querySelector("#mamma");
        this.dupa = document.querySelector("#dupa");
        this.sergio = document.querySelector("#sergio");
        this.zdrowie = document.querySelector("#zdrowie");
        this.qBtn = document.querySelector("#q-Btn");
        this.wBtn = document.querySelector("#w-Btn");
        this.eBtn = document.querySelector("#e-Btn");
        this.rBtn = document.querySelector("#r-Btn");
        this.tBtn = document.querySelector("#t-Btn");
        this.yBtn = document.querySelector("#y-Btn");
        console.log(this.diabel, this.oty, this.clap);
    };
    App.prototype.onKeyDown = function (ev) {
        var key = ev.key;
        this.play(key);
    };
    App.prototype.play = function (key) {
        switch (key) {
            case 'q':
                this.diabel.play();
                break;
            case 'w':
                this.oty.play();
                break;
            case 'e':
                this.mamma.play();
                break;
            case 'r':
                this.dupa.play();
                break;
            case 't':
                this.sergio.play();
                break;
            case 'y':
                this.zdrowie.play();
                break;
        }
    };
    App.prototype.addEventToButtons = function () {
        var _this = this;
        this.qBtn.addEventListener("click", function () { return _this.diabel.play(); });
        this.wBtn.addEventListener("click", function () { return _this.oty.play(); });
        this.eBtn.addEventListener("click", function () { return _this.mamma.play(); });
        this.rBtn.addEventListener("click", function () { return _this.dupa.play(); });
        this.tBtn.addEventListener("click", function () { return _this.sergio.play(); });
        this.yBtn.addEventListener("click", function () { return _this.zdrowie.play(); });
    };
    return App;
}());
exports.App = App;
