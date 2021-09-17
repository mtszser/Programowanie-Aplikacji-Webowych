"use strict";
exports.__esModule = true;
exports.Fibonacci = void 0;
var Fibonacci = /** @class */ (function () {
    function Fibonacci() {
    }
    Fibonacci.prototype.calculate = function (n) {
        if (n === 0) {
            return 0;
        }
        if (n === 1) {
            return 1;
        }
        return this.calculate(n - 1) + this.calculate(n - 2);
    };
    return Fibonacci;
}());
exports.Fibonacci = Fibonacci;
