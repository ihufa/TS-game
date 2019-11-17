interface Ibuilding {
    player: string,
    name: string,
    x: number,
    y: number,
    sizex: number,
    sizey: number,
    color: string,
}
interface Iunit {
    player: string,
    name: string,
    x: number,
    y: number,
    xvel: number,
    yvel: number,
    radius: number,
    color: string,
    moveCommand: boolean,
    attackCommand: boolean,
    gotoX: number,
    gotoY: number
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
interface Icoord {
    x:number,
    y:number
}