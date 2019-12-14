export function checkCollisionUnitUnits(unit: Iunit, units: Array<Iunit>): boolean {
    for(let i = 0; i<units.length; i++) {
        if(units[i].hash !== unit.hash) {
          if(
            Math.sqrt(
                Math.pow(((units[i].x)-(unit.x+unit.xvel)), 2) + 
                Math.pow(((units[i].y)-(unit.y+unit.yvel)), 2)
                )
                < units[i].radius+unit.radius 
        ) {
            return true
        }
    }
}
return false
}


// FOR CHECKING IF SPACE TO BUILD BUILDING
// function checkCollisionBuildingBuilding(building:Ibuilding, buildings:Array<Ibuilding>):boolean {
//     for(let i=0; i<buildings.length; i++) {
//         if(buildings[i].name !== name) {
//         if(
//             isIn(buildings[i].x, buildings[i].x+buildings[i].sizex, building.x) && //top left corner
//             isIn(buildings[i].y, buildings[i].y+buildings[i].sizey, building.y) ||
//             isIn(buildings[i].x, buildings[i].x+buildings[i].sizex, building.x+building.sizex) && // top right corner
//             isIn(buildings[i].y, buildings[i].y+buildings[i].sizey, building.y) ||
//             isIn(buildings[i].x, buildings[i].x+buildings[i].sizex, building.x) && //bottom left corner
//             isIn(buildings[i].y, buildings[i].y+buildings[i].sizey, building.y+building.sizey) ||
//             isIn(buildings[i].x, buildings[i].x+buildings[i].sizex, building.x+building.sizex) && //bottom right corner
//             isIn(buildings[i].y, buildings[i].y+buildings[i].sizey, building.y+building.sizey)
//         )
//             {
//             return true
//         }
//     }
//     }
//     return false
// }


function isIn(x1:number, x2:number, point:number) {
    if(point > x1 && point < x2) {
    return true
    }
    return false
}