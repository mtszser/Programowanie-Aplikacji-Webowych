class MyCalc{
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
        this.input1 = document.querySelector('#input1');
        this.input2 = document.querySelector('#input2');
        this.input3 = document.querySelector('#input3');
        this.input4 = document.querySelector('#input4');
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
        const min = Math.min(input1, input2, input3, input3);
        const max = Math.max(input1, input2, input3, input3);

        this.showStats(sum, avg, min, max);

    }
    showStats(sum: number, avg: number, min: number, max: number) {
        this.sumOutput.value = sum.toString();
        this.avgOutput.value = avg.toString();
        this.minOutput.value = min.toString();
        this.maxOutput.value = min.toString();
    }
} 
const myCalc = new MyCalc();