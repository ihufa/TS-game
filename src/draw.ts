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
    const { buildings, units, resources, selectedBuilding, selectedUnits, preSelectedBuildings, preSelectedUnits, pngs, grid } = state
    for(let i = 0; i<grid.length; i++) {
        for(let j = 0; j<grid[0].length; j++) {
            ctx.strokeStyle = '#00ff00'
            ctx.strokeRect(i*30,j*30,30,30)
            if(grid[i][j]) {
                ctx.fillStyle = '#00ff00'
                ctx.fillRect(i*30, j*30, 30, 30)
            }
        }
    }
    buildings.forEach(el => {
        ctx.drawImage(pngs[el.type], el.gridX*30, el.gridY*30)
    })
    units.forEach(el => {
        ctx.drawImage(pngs[el.type], orientation(el.xvel, el.yvel)*50, 0, 50, 49, el.x-17, el.y-17, 34, 34)
    })
    resources.forEach(el => {
        ctx.drawImage(pngs[el.type], el.x, el.y, 75, 50)
    })
    if(selectedBuilding) { 
    ctx.drawImage(pngs.menu, 0, 800)
        ctx.beginPath();
        ctx.arc(selectedBuilding.gridX, selectedBuilding.gridY, selectedBuilding.radius, 0, 2 * Math.PI, false);
        ctx.strokeStyle = ' #00ff00'
        ctx.lineWidth = 2
        ctx.stroke();
    }

    preSelectedBuildings.forEach(el => {
        ctx.beginPath();
        ctx.arc(el.gridX*30, el.gridY*30, (el.radius+el.radius)/2, 0, 2 * Math.PI, false);
        ctx.strokeStyle = ' #00ff00'
        ctx.lineWidth = 1
        ctx.stroke();
    })
    selectedUnits.forEach(el => {
        ctx.beginPath();
        ctx.arc(el.x, el.y, el.radius+5, 0, 2 * Math.PI, false);
        ctx.strokeStyle = ' #00ff00'
        ctx.lineWidth = 2
        ctx.stroke();
    })
    preSelectedUnits.forEach(el => {
        ctx.beginPath();
        ctx.arc(el.x, el.y, el.radius+5, 0, 2 * Math.PI, false);
        ctx.strokeStyle = ' #00ff00'
        ctx.lineWidth = 1
        ctx.stroke();
    })
    ctx.strokeStyle = ' #00ff00';
    ctx.strokeRect(selectBox.xStart, selectBox.yStart, selectBox.xEnd-selectBox.xStart, selectBox.yEnd-selectBox.yStart)
}