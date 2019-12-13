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
    hp: number,
    damage: number,
    fireFrequency: number,
    armor: number,
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

interface IpngSources {
    [key:string]:string
}
interface Ipngs {
    [key:string]:HTMLImageElement
}
interface Iresource {
    type: string
    x: number
    y: number
    value: number
}