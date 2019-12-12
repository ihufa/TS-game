import { state } from './state'
import { spawnMarine } from './unitFactories'

export default function inputHandler(root:HTMLCanvasElement, selectBox:IselectBox):void {
    window.oncontextmenu = function() {
        return false
    }
    root.addEventListener('mousedown', mousedown, false)

    function mousedown(e:MouseEvent):void {
        if(e.button === 0) {
        selectBox.xStart = e.clientX
        selectBox.yStart = e.clientY
        selectBox.xEnd = e.clientX
        selectBox.yEnd = e.clientY
        root.addEventListener('mouseup', mouseup, false)
        root.addEventListener('mousemove', mousemove, false)
        }
    }
    
    function mouseup(e:MouseEvent):void {
        root.removeEventListener('mouseup', mouseup, false)
        root.removeEventListener('mousemove', mousemove, false)
        const { xStart, xEnd, yStart, yEnd } = selectBox
        if(Math.abs(xStart-xEnd)+Math.abs(yStart-yEnd) < 5) {
            selectBox.xStart = 0
            selectBox.yStart = 0
            selectBox.xEnd = 0
            selectBox.yEnd = 0
            state.selectedUnits = []
            state.selectedUnits = []
            for(let i = 0; i < state.units.length; i++){
                if( Math.pow((state.units[i].x - xStart), 2) + Math.pow((state.units[i].y - yStart), 2) < Math.pow(state.units[i].radius, 2)) {
                state.selectedUnits = [state.units[i]]
                    break
            }
        }
        if(!state.selectedUnits.length) {
            for(let i = 0; i < state.buildings.length; i++){
                if( Math.pow((state.buildings[i].x - xStart), 2) + Math.pow((state.buildings[i].y - yStart), 2) < Math.pow(state.buildings[i].radius, 2)) {
                state.selectedBuildings = [state.buildings[i]]
                    break
            }
        }
        }
    } else {
        state.preSelectedUnits = []
        const smallestX = xStart < xEnd ? xStart : xEnd
        const biggestX = xStart < xEnd ? xEnd : xStart
        const smallestY = yStart < yEnd ? yStart : yEnd
        const biggestY = yStart < yEnd ? yEnd : yStart
        state.selectedUnits = state.units.filter(el =>
            el.x > smallestX && el.x < biggestX &&
            el.y > smallestY && el.y < biggestY
)
        if(!state.selectedUnits.length) {
            state.selectedBuildings = state.buildings.filter(el => 
                    el.x > smallestX && el.x < biggestX &&
                    el.y > smallestY && el.y < biggestY
           )
        }
        selectBox.xStart = 0
        selectBox.yStart = 0
        selectBox.xEnd = 0
        selectBox.yEnd = 0
    }
        if(state.selectedUnits.length) {
            root.addEventListener('mousedown', rightclick, false)
        }
        if(state.selectedBuildings.length) {
            root.addEventListener('mousedown', rightclick, false)
            console.log('building selected')
        }
    }
    function mousemove(e:MouseEvent):void {
        selectBox.xEnd = e.clientX
        selectBox.yEnd = e.clientY
        const { xStart, xEnd, yStart, yEnd } = selectBox
        const smallestX = xStart < xEnd ? xStart : xEnd
        const biggestX = xStart < xEnd ? xEnd : xStart
        const smallestY = yStart < yEnd ? yStart : yEnd
        const biggestY = yStart < yEnd ? yEnd : yStart
        state.preSelectedUnits = state.units.filter(el =>
            el.x > smallestX && el.x < biggestX &&
            el.y > smallestY && el.y < biggestY
)
    }
    
    function rightclick(e:MouseEvent):void {
        if(e.button === 2) {
            state.selectedUnits.forEach(el => {
                let x = el.x - e.clientX
                let y = el.y - e.clientY
                if(Math.abs(x) > Math.abs(y)) {
                    el.xvel = -(x/Math.abs(x))*el.speed
                    el.yvel = -(y/Math.abs(x))*el.speed
                } else {
                    el.xvel = -(x/Math.abs(y))*el.speed
                    el.yvel = -(y/Math.abs(y))*el.speed
                }
                el.moveCommand = true
                el.gotoX = e.clientX
                el.gotoY = e.clientY
                })
        } else { 
            root.removeEventListener('mousedown', rightclick, false)
        }

    }
}