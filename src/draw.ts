export class Draw {
    ctx: CanvasRenderingContext2D;

    constructor(public canvas: HTMLCanvasElement) {
        this.ctx = canvas.getContext("2d");
    }
    square(x, y, z) {
        this.ctx.fillStyle = "blue";
        this.ctx.fillRect(x*z, y*z, z, z);
    }
    moveX(x){
        this.square(x, 0, 50);
    }
    moveY(y){
        this.square(0, y, 50);
    }

}