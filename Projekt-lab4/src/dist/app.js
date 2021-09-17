"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.App = void 0;
var note_1 = require("./classes/note");
var localstorage_1 = require("./storage/localstorage");
var App = /** @class */ (function () {
    function App() {
        this.notesArray = [];
        this.storage = new localstorage_1["default"]();
        this.getElements();
        this.addEvents();
        this.getData();
    }
    App.prototype.getElements = function () {
        this.submitBtn = document.getElementById("submitBtn");
        this.clearBtn = document.getElementById("clearNote");
        this.noteTitle = document.getElementById("noteTitle");
        this.noteText = document.getElementById("noteText");
        this.notesBox = document.getElementById("notes-Div");
    };
    App.prototype.addEvents = function () {
        var _this = this;
        this.submitBtn.addEventListener("click", function () {
            return _this.addNote(_this.noteTitle, _this.noteText);
        });
        this.clearBtn.addEventListener("click", function () { return _this.clearShiet(); });
    };
    App.prototype.addNote = function (noteTitle, noteText) {
        if (noteTitle.value.length === 0 && noteText.value.length)
            return;
        var note = new note_1["default"](noteTitle.value, noteText.value);
        this.notesBox.appendChild(note.getNote());
        this.notesArray.push(note);
        console.log(this.notesArray);
        this.saveData(__spreadArrays(this.notesArray));
    };
    App.prototype.clearShiet = function () {
        localStorage.clear();
    };
    App.prototype.saveData = function (data) {
        localStorage.setItem("notesArray", JSON.stringify(data));
    };
    App.prototype.getData = function () {
        var data = localStorage.getItem("notesArray");
        if (data) {
            console.log("cośjest");
            return JSON.parse(data);
        }
        else {
            console.log("nic tu nima");
            return [];
        }
    };
    return App;
}());
exports.App = App;
