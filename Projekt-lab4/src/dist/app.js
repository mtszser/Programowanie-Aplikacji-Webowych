"use strict";
exports.__esModule = true;
exports.App = void 0;
var App = /** @class */ (function () {
    function App() {
        this.startNoteApp();
    }
    App.prototype.startNoteApp = function () {
        this.getElements();
        this.btnEvent();
    };
    App.prototype.getElements = function () {
        this.pinnedBox = document.getElementById("pinnedBox");
        this.othersBox = document.getElementById("othersBox");
        this.submitBtn = document.getElementById("submitBtn");
        this.titleInput = document.getElementById("noteTitle").value;
        this.textInput = document.getElementById("noteText").value;
    };
    App.prototype.btnEvent = function () {
        var _this = this;
        this.submitBtn.addEventListener("click", function () { return _this.addNote(); });
    };
    App.prototype.addNote = function () {
        console.log(this.titleInput = document.getElementById("noteTitle").value);
        console.log(this.textInput = document.getElementById("noteText").value);
    };
    return App;
}());
exports.App = App;
var app = new App();
