export default function draw(canvas: Icanvas, units:Array<Iunit>, selectBox:IselectBox):void {
    const { ctx, width, height } = canvas 
    units.forEach(el => {
        ctx.fillStyle = el.color;
        ctx.fillRect(el.x, el.y, el.sizex, el.sizey)
    }
    )
    ctx.fillStyle = 'rgba(0,255,0,0.2)';
    ctx.fillRect(selectBox.xStart, selectBox.yStart, selectBox.xEnd, selectBox.yEnd)
}