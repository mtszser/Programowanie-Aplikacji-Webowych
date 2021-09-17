import Note from "./classes/note";
import Localstorage from "./storage/localstorage";
import appFireStorage from "./storage/AppFireStoreStorage";
export class App {
  noteTitle: HTMLInputElement;
  noteText: HTMLInputElement;

  submitBtn: HTMLButtonElement;
  clearBtn: HTMLButtonElement;
  noteColor: HTMLInputElement;

  pinnedBox: HTMLDivElement;
  notesBox: HTMLDivElement;
  pinornot: HTMLInputElement;

  storage: Localstorage;

  noteDiv: any = "";
  notesArray2: string[] = [];
  notesArray: Note[] = [];
  addedNote: string = "";

  notes: HTMLDivElement;

  constructor() {
    this.storage = new Localstorage();

    this.addedNote = this.getData();
    console.log("addedNote ma w sobie notki");
    console.log(this.addedNote);
    this.getElements();
    this.addEvents();
    // this.showNotes();
  }

  getElements() {
    this.submitBtn = <HTMLButtonElement>document.getElementById("submitBtn");
    this.clearBtn = <HTMLButtonElement>document.getElementById("clearNote");
    this.noteTitle = <HTMLInputElement>document.getElementById("noteTitle");
    this.noteText = <HTMLInputElement>document.getElementById("noteText");
    this.notesBox = <HTMLDivElement>document.getElementById("notes-Div");
    this.noteColor = <HTMLInputElement>document.getElementById("color");
  }

  addEvents() {
    this.submitBtn.addEventListener("click", () =>
      this.addNote(this.noteTitle, this.noteText)
    );
    this.clearBtn.addEventListener("click", () => this.clearShiet());
  }

  addNote(noteTitle: any, noteText: any) {
    if (noteTitle.value.length === 0 && noteText.value.length === 0) return;

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

  // showNotes() {
  //   let data: any = localStorage.getItem("notesArray");
  //   let ObjData = JSON.parse(data);
  //   console.log(ObjData);
  //   for (let i = 0; i < ObjData.length; i++) {
  //     this.addNote(ObjData[i].noteTitle, ObjData[i].noteText);
  //   }
  // }
}
