"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// import * as rxjs from '../node_modules/rxjs/bundles/rxjs.umd'
var rxjs = __importStar(require("rxjs/index"));
var canvas_1 = require("./canvas");
var draw_1 = require("./draw");
rxjs.of("Hello").subscribe(console.log);
rxjs.fromEvent(document, "click").subscribe(console.log);
var canvas = canvas_1.createConvas();
document.body.append(canvas);
var draw = new draw_1.Draw(canvas);
// draw.square(1, 1, 10);
draw.moveX(2);
// draw.move(1);
draw.moveY(1);
//# sourceMappingURL=main.js.map