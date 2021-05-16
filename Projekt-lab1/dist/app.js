var MyCalc = /** @class */ (function () {
    function MyCalc() {
        this.howManyInputs = document.getElementById("#addInput");
        this.inputArray = [];
        this.startApp();
    }
    MyCalc.prototype.startApp = function () {
        this.getOutputs();
        this.createInputs();
    };
    MyCalc.prototype.getOutputs = function () {
        this.sum = document.querySelector("#sum");
        this.avg = document.querySelector("#avg");
        this.min = document.querySelector("#min");
        this.max = document.querySelector("#max");
    };
    MyCalc.prototype.createInputs = function () {
        var _this = this;
        this.inputContainer = document.querySelector(".inputContainer");
        this.input = document.getElementById("addInput");
        this.input.addEventListener("blur", function () {
            var howmuch = +_this.input.value;
            _this.inputContainer.innerHTML = "";
            _this.inputArray = [];
            for (var i = 0; i < howmuch; i++) {
                var input = document.createElement("input");
                input.id = "input" + i;
                input.className = "data";
                input.type = "number";
                _this.inputContainer.appendChild(input);
                _this.inputArray.push(input);
                console.log(_this.inputContainer);
                input.addEventListener("input", function () { return _this.computeData(); });
            }
        });
    };
    MyCalc.prototype.computeData = function () {
        var values = this.inputArray.filter(function (el) { return el.value.length > 0; }).map(function (el) { return +el.value; });
        if (values.length > 0) {
            var sum = values.reduce(function (a, b) { return a + b; }, 0);
            var avg = sum / values.length;
            var min = Math.min.apply(Math, values);
            var max = Math.max.apply(Math, values);
            this.showOutput(sum, avg, min, max);
        }
        else {
            this.showOutput(0, 0, 0, 0);
        }
    };
    MyCalc.prototype.showOutput = function (sum, avg, min, max) {
        this.sum.value = sum.toString();
        this.avg.value = avg.toString();
        this.min.value = min.toString();
        this.max.value = max.toString();
    };
    return MyCalc;
}());
var myCalc = new MyCalc();
