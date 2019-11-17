import { state } from './state'

const orientation = (xvel: number, yvel: number):number => {
    if(xvel === 0 && yvel === 0) {
        return 0
    }
    const x = xvel
    const y = yvel
    console.log('x,y', x, y)
    if (y > 0 && x > 0) {
        if(y/x > 3) return 0
        if(y/x < 1/3) return 6
        return 7
    }
    if (y < 0 && x > 0) {
        if(y/x < -3) return 4
        if(y/x > -1/3) return 6
        return 5
    }
    if (y < 0 && x < 0) {
        if(y/x < 1/3) return 2
        if(y/x > 3) return 4
        return 3
    }
    if (y > 0 && x < 0) {
        if(y/x > -1/3) return 2
        if(y/x < -3) return 0
        return 1
    }
}

export default function draw(canvas: Icanvas, selectBox: IselectBox, marine:HTMLImageElement):void {
    const { ctx, width, height } = canvas
    state.buildings.forEach(el => {
        ctx.fillStyle = el.color;
        ctx.fillRect(el.x, el.y, el.sizex, el.sizey)
    })
    state.units.forEach(el => {
        ctx.drawImage(marine, orientation(el.xvel, el.yvel)*50, 0, 50, 49, el.x-25, el.y-25, 50, 49)
    })
    state.selectedBuildings.forEach(el => {
        ctx.beginPath();
        ctx.arc(el.x+0.5*el.sizex, el.y+0.5*el.sizey, (el.sizex+el.sizey)/2, 0, 2 * Math.PI, false);
        ctx.strokeStyle = ' #00ff00'
        ctx.lineWidth = 2
        ctx.stroke();
    })
    state.preSelectedBuildings.forEach(el => {
        ctx.beginPath();
        ctx.arc(el.x+0.5*el.sizex, el.y+0.5*el.sizey, (el.sizex+el.sizey)/2, 0, 2 * Math.PI, false);
        ctx.strokeStyle = ' #00ff00'
        ctx.lineWidth = 1
        ctx.stroke();
    })
    state.selectedUnits.forEach(el => {
        ctx.beginPath();
        ctx.arc(el.x, el.y, el.radius+5, 0, 2 * Math.PI, false);
        ctx.strokeStyle = ' #00ff00'
        ctx.lineWidth = 2
        ctx.stroke();
    })
    state.preSelectedUnits.forEach(el => {
        ctx.beginPath();
        ctx.arc(el.x, el.y, el.radius+5, 0, 2 * Math.PI, false);
        ctx.strokeStyle = ' #00ff00'
        ctx.lineWidth = 1
        ctx.stroke();
    })
    ctx.strokeStyle = ' #00ff00';
    ctx.strokeRect(selectBox.xStart, selectBox.yStart, selectBox.xEnd-selectBox.xStart, selectBox.yEnd-selectBox.yStart)
}