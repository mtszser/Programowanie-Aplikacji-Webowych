"use strict";
exports.__esModule = true;
exports.App = void 0;
var note_1 = require("./classes/note");
var App = /** @class */ (function () {
    function App() {
        this.notesArray = [];
        this.getElements();
        this.addEvents();
    }
    App.prototype.getElements = function () {
        this.submitBtn = document.getElementById("submitBtn");
        this.noteTitle = document.getElementById("noteTitle");
        this.noteText = document.getElementById("noteText");
        this.notesBox = document.getElementById("notesDiv");
    };
    App.prototype.addEvents = function () {
        var _this = this;
        this.submitBtn.addEventListener("click", function () { return _this.addNote(); });
    };
    App.prototype.addNote = function () {
        var note = new note_1["default"](this.noteTitle.value, this.noteText.value);
        this.notesBox.appendChild(note.getNote());
    };
    App.prototype.printNote = function () {
    };
    return App;
}());
exports.App = App;
