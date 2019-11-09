export default function moveUnits(units:Array<Iunit>):void  {
    units.forEach(el => {
        if(Math.pow((el.x-el.gotoX), 2) + Math.pow((el.y-el.gotoY),2)>100) {
        el.x = el.x + el.xvel
        el.y = el.y + el.yvel
        }
    })
}