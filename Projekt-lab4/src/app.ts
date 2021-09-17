import Note from "./classes/note";
import Localstorage from "./storage/localstorage";
import appFireStorage from "./storage/AppFireStoreStorage";
export class App {
  noteTitle: HTMLInputElement;
  noteText: HTMLInputElement;

  submitBtn: HTMLButtonElement;
  clearBtn: HTMLButtonElement;

  pinnedBox: HTMLDivElement;
  notesBox: HTMLDivElement;

  storage: Localstorage;

  notesArray: Note[] = [];

  notes: HTMLDivElement;

  constructor() {
    this.storage = new Localstorage();

    this.getElements();
    this.addEvents();
    this.getData();
  }

  getElements() {
    this.submitBtn = <HTMLButtonElement>document.getElementById("submitBtn");
    this.clearBtn = <HTMLButtonElement>document.getElementById("clearNote");
    this.noteTitle = <HTMLInputElement>document.getElementById("noteTitle");
    this.noteText = <HTMLInputElement>document.getElementById("noteText");
    this.notesBox = <HTMLDivElement>document.getElementById("notes-Div");
  }

  addEvents() {
    this.submitBtn.addEventListener("click", () =>
      this.addNote(this.noteTitle, this.noteText)
    );
    this.clearBtn.addEventListener("click", () => this.clearShiet());
  }

  addNote(noteTitle: any, noteText: any) {
    if (noteTitle.value.length === 0 && noteText.value.length) return;

    const note = new Note(noteTitle.value, noteText.value);
    this.notesBox.appendChild(note.getNote());
    this.notesArray.push(note);
    console.log(this.notesArray);
    this.saveData([...this.notesArray]);
  }

  clearShiet() {
    localStorage.clear();
  }

  saveData(data: any) {
    localStorage.setItem("notesArray", JSON.stringify(data));
  }

  getData() {
    const data = localStorage.getItem("notesArray");
    if (data) {
      console.log("cośjest");
      return JSON.parse(data);
    } else {
      console.log("nic tu nima");
      return [];
    }
  }
}
