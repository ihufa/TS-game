export default function moveUnits(units:Array<Iunit>):void  {
    let movingUnits = units.filter(el => el.xvel !== 0 || el.yvel !== 0)
    for(let i=0; i<movingUnits.length; i++) {
        console.log('colision', checkCollision(movingUnits[i], units))
        if(Math.pow((movingUnits[i].x-movingUnits[i].gotoX), 2) + Math.pow((movingUnits[i].y-movingUnits[i].gotoY),2)<100) { //less than 10px from target
            movingUnits[i].xvel = 0
            movingUnits[i].yvel = 0
            movingUnits[i].moveCommand = false
        }
        let collision = checkCollision(movingUnits[i], units)
        if(!collision && movingUnits[i].moveCommand) { 
        movingUnits[i].x = movingUnits[i].x + movingUnits[i].xvel
        movingUnits[i].y = movingUnits[i].y + movingUnits[i].yvel
        }
        if(collision && movingUnits[i].moveCommand) {
            movingUnits[i].moveCommand = false
        }
        if(!collision && !movingUnits[i].moveCommand) {
            movingUnits[i].moveCommand = true
        }
    }
}

function checkCollision(unit:Iunit, units:Array<Iunit>):boolean {
    for(let i=0; i<units.length; i++) {
        if(units[i].name !== unit.name) {
        if(
            isIn(units[i].x, units[i].x+units[i].sizex, unit.x+unit.xvel) && //top left corner
            isIn(units[i].y, units[i].y+units[i].sizey, unit.y+unit.yvel) ||
            isIn(units[i].x, units[i].x+units[i].sizex, unit.x+unit.sizex+unit.xvel) && // top right corner
            isIn(units[i].y, units[i].y+units[i].sizey, unit.y+unit.yvel) ||
            isIn(units[i].x, units[i].x+units[i].sizex, unit.x+unit.xvel) && //bottom left corner
            isIn(units[i].y, units[i].y+units[i].sizey, unit.y+unit.sizey+unit.yvel) ||
            isIn(units[i].x, units[i].x+units[i].sizex, unit.x+unit.sizex+unit.xvel) && //bottom right corner
            isIn(units[i].y, units[i].y+units[i].sizey, unit.y+unit.sizey+unit.yvel)
        )
            {
            return true
        }
    }
    }
    return false
}

function isIn(x1:number, x2:number, point:number) {
    if(point > x1 && point < x2) {
    return true
    }
    return false
}