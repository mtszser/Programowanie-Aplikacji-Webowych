export class App {

    titleInput: string;
    textInput: string;
    submitBtn: HTMLButtonElement;
    pinnedBox: HTMLDivElement;
    othersBox: HTMLDivElement;
    


    constructor() {
        this.startNoteApp();
    }

    startNoteApp(){
        this.getElements();
        this.btnEvent();

    }

    getElements() {
        this.pinnedBox = document.getElementById("pinnedBox") as HTMLDivElement;
        this.othersBox = document.getElementById("othersBox") as HTMLDivElement;
        this.submitBtn = document.getElementById("submitBtn") as HTMLButtonElement;
        this.titleInput = (<HTMLInputElement>document.getElementById("noteTitle")).value;
        this.textInput = (<HTMLTextAreaElement>document.getElementById("noteText")).value;
        
    }

    btnEvent() {
        this.submitBtn.addEventListener("click", () => this.addNote())
    }

    addNote() {
        console.log(this.titleInput = (<HTMLInputElement>document.getElementById("noteTitle")).value);
        console.log(this.textInput = (<HTMLTextAreaElement>document.getElementById("noteText")).value);

    }


}
const app = new App();