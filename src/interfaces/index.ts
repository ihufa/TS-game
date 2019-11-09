interface Iunit {
    name: string,
    x: number,
    y: number,
    xvel: number,
    yvel: number,
    sizex: number,
    sizey: number,
    color: string,
}

interface Icanvas {
    ctx: CanvasRenderingContext2D,
    height: number,
    width: number,
}

interface IselectBox {
    xStart: number,
    yStart: number,
    xEnd: number,
    yEnd: number
}