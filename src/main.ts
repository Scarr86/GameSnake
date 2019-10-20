
// import * as rxjs from '../node_modules/rxjs/bundles/rxjs.umd'
import * as rxjs from 'rxjs/index'
import { createConvas } from "./canvas"
import { Draw } from './draw'
rxjs.of("Hello").subscribe(console.log);

rxjs.fromEvent(document, "click").subscribe(
    console.log
)
let canvas = createConvas();
document.body.append(canvas);



let draw = new Draw(canvas);
// draw.square(1, 1, 10);
draw.moveX(2);
// draw.move(1);
draw.moveY(1);


