import { state } from './state'

const orientation = (xvel: number, yvel: number):number => {
    if(xvel === 0 && yvel === 0) {
        return 0
    }
    const x = xvel
    const y = yvel
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

export default function draw(canvas: Icanvas, selectBox: IselectBox):void {
    const { ctx, width, height } = canvas
    state.buildings.forEach(el => {
        ctx.drawImage(state.pngs.filter(png => png.type === el.type)[0].element, el.x, el.y)
    })
    state.units.forEach(el => {
        ctx.drawImage(state.pngs.filter(png => png.type === el.type)[0].element, orientation(el.xvel, el.yvel)*50, 0, 50, 49, el.x-17, el.y-17, 34, 34)
    })
    state.resources.forEach(el => {
        ctx.drawImage(state.pngs.filter(png => png.type === el.type)[0].element, el.x, el.y, 75, 50)
    })
    ctx.drawImage(state.pngs.filter(el => el.type === 'menu')[0].element, 0, 800)
    state.selectedBuildings.forEach(el => {
        ctx.beginPath();
        ctx.arc(el.x+0.5*el.radius, el.y+0.5*el.radius, (el.radius+el.radius)/2, 0, 2 * Math.PI, false);
        ctx.strokeStyle = ' #00ff00'
        ctx.lineWidth = 2
        ctx.stroke();
    })
    state.preSelectedBuildings.forEach(el => {
        ctx.beginPath();
        ctx.arc(el.x+0.5*el.radius, el.y+0.5*el.radius, (el.radius+el.radius)/2, 0, 2 * Math.PI, false);
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