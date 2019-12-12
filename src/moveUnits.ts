import { checkCollisionUnitUnits } from './collisionDetection'

export default function moveUnits(units:Array<Iunit>):void  {
    let movingUnits = units.filter(el => el.xvel !== 0 || el.yvel !== 0)
    for(let i=0; i<movingUnits.length; i++) {
        if(Math.pow((movingUnits[i].x-movingUnits[i].gotoX), 2) + Math.pow((movingUnits[i].y-movingUnits[i].gotoY),2)<100) { //less than 10px from target
            movingUnits[i].xvel = 0
            movingUnits[i].yvel = 0
            movingUnits[i].moveCommand = false
        }
        let collision = checkCollisionUnitUnits(movingUnits[i], units)
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