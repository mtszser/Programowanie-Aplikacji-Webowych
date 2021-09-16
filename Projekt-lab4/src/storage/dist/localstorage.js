"use strict";
exports.__esModule = true;
var Localstorage = /** @class */ (function () {
    function Localstorage() {
    }
    Localstorage.prototype.addNote = function (note) {
        this.localstorage.addNote(note);
    };
    Localstorage.prototype.getNote = function (note) {
        return this.localstorage.getNote(note);
    };
    return Localstorage;
}());
exports["default"] = Localstorage;
