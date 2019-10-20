export function createConvas():HTMLCanvasElement {
    let convas = document.createElement("canvas") as HTMLCanvasElement;
    convas.width = 400;
    convas.height = 400;
    convas.style.border="1px solid red";
    convas.style.display="block";
    return convas;
}
