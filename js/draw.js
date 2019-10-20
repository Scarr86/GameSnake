"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Draw = /** @class */ (function () {
    function Draw(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
    }
    Draw.prototype.square = function (x, y, z) {
        this.ctx.fillStyle = "blue";
        this.ctx.fillRect(x * z, y * z, z, z);
    };
    Draw.prototype.moveX = function (x) {
        this.square(x, 0, 50);
    };
    Draw.prototype.moveY = function (y) {
        this.square(0, y, 50);
    };
    return Draw;
}());
exports.Draw = Draw;
//# sourceMappingURL=draw.js.map