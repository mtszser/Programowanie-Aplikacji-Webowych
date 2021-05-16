export class App {

    // oty: HTMLAudioElement;
    oscypek: HTMLAudioElement;
    koszmar: HTMLAudioElement;
    pierwszerazy: HTMLAudioElement;
    obrzydliwe: HTMLAudioElement;
    diabel: HTMLAudioElement;
    // mamma: HTMLAudioElement;
    // dupa: HTMLAudioElement;
    // sergio: HTMLAudioElement;
    zdrowie: HTMLAudioElement;
    qBtn: HTMLButtonElement;
    wBtn: HTMLButtonElement;
    eBtn: HTMLButtonElement;
    rBtn: HTMLButtonElement;
    tBtn: HTMLButtonElement;
    yBtn: HTMLButtonElement;


    

    constructor() {
        this.startApp();
    }

    startApp() {
        this.getButton();
        this.addEventToButtons();
        this.onKeyDown = this.onKeyDown.bind(this);
        window.addEventListener('keydown', this.onKeyDown);

    }
    
    
    getButton() {
        this.koszmar = document.querySelector("#koszmar");
        this.diabel = document.querySelector("#diabel");
        this.pierwszerazy = document.querySelector("#pierwszerazy");
        this.obrzydliwe = document.querySelector("#obrzydliwe")
        this.oscypek = document.querySelector("#oscypek")
        this.zdrowie = document.querySelector("#zdrowie")
        this.qBtn = document.querySelector("#q-Btn");
        this.wBtn = document.querySelector("#w-Btn");
        this.eBtn = document.querySelector("#e-Btn");
        this.rBtn = document.querySelector("#r-Btn");
        this.tBtn = document.querySelector("#t-Btn");
        this.yBtn = document.querySelector("#y-Btn");
        console.log(this.diabel);

    }

    onKeyDown(ev: KeyboardEvent): void {
        const key = ev.key;
        this.play(key);
    }
    play(key: string){
        switch (key) {
            case 'q':
                this.obrzydliwe.play();
                break;
                case 'w':
                    this.pierwszerazy.play();
                    break;
                    case 'e':
                        this.koszmar.play();
                        break;
                        case 'r':
                            this.oscypek.play();
                            break;
                            case 't':
                                this.diabel.play();
                                break;
                                case 'y':
                                    this.zdrowie.play();
                                    break;
        }
    }

    
     addEventToButtons() {
         this.qBtn.addEventListener("click",() => this.obrzydliwe.play());
         this.wBtn.addEventListener("click",() => this.pierwszerazy.play());
         this.eBtn.addEventListener("click",() => this.koszmar.play());
         this.rBtn.addEventListener("click",() => this.oscypek.play());
         this.tBtn.addEventListener("click",() => this.diabel.play());
         this.yBtn.addEventListener("click",() => this.zdrowie.play());

     }

}