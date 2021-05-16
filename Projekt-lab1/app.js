var MyCalc = /** @class */ (function () {
    function MyCalc() {
        this.startCalc();
    }
    MyCalc.prototype.startCalc = function () {
        this.getUserInput();
        this.getInputValues();
    };
    MyCalc.prototype.getUserInput = function () {
        this.input1 = document.querySelector('#userInput1');
        this.input2 = document.querySelector('#userInput2');
        this.input3 = document.querySelector('#userInput3');
        this.input4 = document.querySelector('#userInput4');
        this.sumOutput = document.querySelector('#sum');
        this.avgOutput = document.querySelector('#avg');
        this.minOutput = document.querySelector('#min');
        this.maxOutput = document.querySelector('#max');
    };
    MyCalc.prototype.getInputValues = function () {
        var _this = this;
        this.input1.addEventListener('input', function () { return _this.computeData(); });
        this.input2.addEventListener('input', function () { return _this.computeData(); });
        this.input3.addEventListener('input', function () { return _this.computeData(); });
        this.input4.addEventListener('input', function () { return _this.computeData(); });
    };
    MyCalc.prototype.computeData = function () {
        var input1 = +this.input1.value;
        var input2 = +this.input2.value;
        var input3 = +this.input3.value;
        var input4 = +this.input4.value;
        var sum = input1 + input2 + input3 + input4;
        var avg = sum / 4;
        var min = Math.min(input1, input2, input3, input4);
        var max = Math.max(input1, input2, input3, input4);
        this.showStats(sum, avg, min, max);
    };
    MyCalc.prototype.showStats = function (sum, avg, min, max) {
        this.sumOutput.value = sum.toString();
        this.avgOutput.value = avg.toString();
        this.minOutput.value = min.toString();
        this.maxOutput.value = max.toString();
    };
    return MyCalc;
}());
var myCalc = new MyCalc();
