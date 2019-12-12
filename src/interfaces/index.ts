interface Ibuilding {
    player: string,
    name: string,
    type: string,
    x: number,
    y: number,
    radius: number,
    color: string,
}
interface Iunit {
    player: string,
    name: string,
    type: string,
    x: number,
    y: number,
    xvel: number,
    yvel: number,
    speed: number,
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
interface Ipng {
    src: string
    type: string
}
interface IloadedPng {
    element: HTMLImageElement
    type: string
}
interface Iresource {
    type: string
    x: number
    y: number
    value: number
}