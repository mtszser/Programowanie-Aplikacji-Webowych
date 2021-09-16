export default class Note {
  id: number;
  noteTitle: string;
  noteText: string;
  // date: number;
  pinned: boolean;

  constructor(
    title: string,
    text: string,
    pinned: boolean = false,
    id?: number
  ) {
    this.id = 0 + Math.round(Math.random() * 100);
    this.noteTitle = title;
    this.noteText = text;
    // this.date = date;
    this.pinned = pinned;
  }

  getNote() {
    const noteDiv = document.createElement("div");
    noteDiv.className = "noteDiv";
    noteDiv.id = "noteDiv";

    noteDiv.innerHTML = `
        <a onclick="app.pinned('${this.id}')" class="pinClick">
        <img src="${
          this.pinned ? "./assets/push-pin.svg" : "./assets/push-pin.png"
        }" alt="">
        </a>
        <h1>"${this.noteTitle}"<h1>
        <span>${this.noteText}<span>
        `;
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
  }
}
