import { state } from './state'

export default function draw(canvas: Icanvas, selectBox: IselectBox):void {
    const { ctx, width, height } = canvas
    state.units.forEach(el => {
        ctx.fillStyle = el.color;
        ctx.fillRect(el.x, el.y, el.sizex, el.sizey)
    }
    )
    state.selectedUnits.forEach(el => {
        ctx.beginPath();
        ctx.arc(el.x+0.5*el.sizex, el.y+0.5*el.sizey, (el.sizex+el.sizey)/2, 0, 2 * Math.PI, false);
        ctx.strokeStyle = '#f6ff00'
        ctx.lineWidth = 2
        ctx.stroke();
    })
    ctx.strokeStyle = '#f6ff00';
    ctx.strokeRect(selectBox.xStart, selectBox.yStart, selectBox.xEnd-selectBox.xStart, selectBox.yEnd-selectBox.yStart)
}