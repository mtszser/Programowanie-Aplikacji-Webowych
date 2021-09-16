"use strict";
exports.__esModule = true;
var Note = /** @class */ (function () {
    function Note(title, text, pinned, id) {
        if (pinned === void 0) { pinned = false; }
        this.id = 0 + Math.round(Math.random() * 100);
        this.noteTitle = title;
        this.noteText = text;
        // this.date = date;
        this.pinned = pinned;
    }
    Note.prototype.getNote = function () {
        var noteDiv = document.createElement("div");
        noteDiv.className = "noteDiv";
        noteDiv.id = "noteDiv";
        noteDiv.innerHTML = "\n        <a onclick=\"app.pinned('" + this.id + "')\" class=\"pinClick\">\n        <img src=\"" + (this.pinned ? "./assets/push-pin.svg" : "./assets/push-pin.png") + "\" alt=\"\">\n        </a>\n        <h1>\"" + this.noteTitle + "\"<h1>\n        <span>" + this.noteText + "<span>\n        ";
        noteDiv.style.border = "1px solid black";
        noteDiv.style.minWidth = "200px";
        noteDiv.style.minHeight = "200px";
        noteDiv.style.maxWidth = "200px";
        noteDiv.style.maxHeight = "200px";
        noteDiv.style.display = "flex";
        noteDiv.style.padding = "2px;";
        noteDiv.style.margin = "5px;";
        noteDiv.style.flexDirection = "column";
        noteDiv.style.color = "black";
        noteDiv.style.background = "white";
        noteDiv.style.wordBreak = "break-all";
        return noteDiv;
    };
    return Note;
}());
exports["default"] = Note;
