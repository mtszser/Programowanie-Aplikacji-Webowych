class MyCalc{

    howManyInputs: HTMLInputElement;
    input1: HTMLInputElement;
    input2: HTMLInputElement;
    input3: HTMLInputElement;
    input4: HTMLInputElement;

    sumOutput: HTMLInputElement;
    avgOutput: HTMLInputElement;
    minOutput: HTMLInputElement;
    maxOutput: HTMLInputElement;
    
    constructor() {
        this.startCalc();
    }
    startCalc(){
        this.getUserInput();
        this.getInputValues();
    }

    getUserInput(){
        this.howManyInputs = document.querySelector('#howManyInputs')
        this.input1 = document.querySelector('#userInput1');
        this.input2 = document.querySelector('#userInput2');
        this.input3 = document.querySelector('#userInput3');
        this.input4 = document.querySelector('#userInput4');
        this.sumOutput = document.querySelector('#sum')
        this.avgOutput = document.querySelector('#avg')
        this.minOutput = document.querySelector('#min')
        this.maxOutput = document.querySelector('#max')
    }


    getInputValues(){

        this.input1.addEventListener('input', () => this.computeData());
        this.input2.addEventListener('input', () => this.computeData());
        this.input3.addEventListener('input', () => this.computeData());
        this.input4.addEventListener('input', () => this.computeData());
    }


    computeData() {
        const input1 = +this.input1.value;
        const input2 = +this.input2.value;
        const input3 = +this.input3.value;
        const input4 = +this.input4.value;

        const sum = input1 + input2 + input3 + input4;
        const avg = sum/4;
        const min = Math.min(input1, input2, input3, input4);
        const max = Math.max(input1, input2, input3, input4);

        this.showStats(sum, avg, min, max);

    }
    showStats(sum: number, avg: number, min: number, max: number) {
        this.sumOutput.value = sum.toString();
        this.avgOutput.value = avg.toString();
        this.minOutput.value = min.toString();
        this.maxOutput.value = max.toString();
    }
}  
const myCalc = new MyCalc();