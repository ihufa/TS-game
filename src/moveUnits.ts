export default function moveUnits(units:Array<Iunit>):void  {
    units.forEach(el => {
        el.x = el.x + el.xvel
        el.y = el.y + el.yvel
    })
}