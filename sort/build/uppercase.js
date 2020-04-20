"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Uppercase = /** @class */ (function () {
    function Uppercase(string) {
        this.string = string;
    }
    Uppercase.prototype.uppercase = function () {
        console.log(this.string.toUpperCase());
    };
    return Uppercase;
}());
exports.Uppercase = Uppercase;
