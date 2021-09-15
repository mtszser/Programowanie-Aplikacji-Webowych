import  Note from './classes/note'
export class App {

    noteTitle: HTMLInputElement;
    noteText: HTMLInputElement;


    submitBtn: HTMLButtonElement;
    
    
    
    
    pinnedBox: HTMLDivElement;
    notesBox: HTMLDivElement;


    notesArray: string[] = [];


    notes: HTMLDivElement;

    constructor() {
        this.getElements();
        this.addEvents()

    }

    getElements(){
        this.submitBtn = <HTMLButtonElement>document.getElementById("submitBtn");
        this.noteTitle = <HTMLInputElement>document.getElementById("noteTitle");
        this.noteText = <HTMLInputElement>document.getElementById("noteText");
        this.notesBox = <HTMLDivElement>document.getElementById("notesDiv");


    }

    addEvents(){
        this.submitBtn.addEventListener("click", () => this.addNote())
    }

    addNote() {
        const note = new Note(this.noteTitle.value, this.noteText.value)
        this.notesBox.appendChild(note.getNote());

    }

    printNote() {

    }
}