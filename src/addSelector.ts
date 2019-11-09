import { state } from './state'

export default function inputHandler(root:HTMLCanvasElement, selectBox:IselectBox):void {
    window.oncontextmenu = function() {
        return false
    }
    root.addEventListener('mousedown', mousedown, false)

    function mousedown(e:MouseEvent):void {
        console.log('sel', state.selectedUnits)
        if(e.button === 0) {
        console.log(e)
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

        state.selectedUnits = state.units.filter(el =>
            el.x > selectBox.xStart && el.x < selectBox.xEnd &&
            el.y > selectBox.yStart && el.y < selectBox.yEnd
)
        selectBox.xStart = 0
        selectBox.yStart = 0
        selectBox.xEnd = 0
        selectBox.yEnd = 0
        if(state.selectedUnits.length) {
            root.addEventListener('mousedown', rightclick, false)
        }
    }
    function mousemove(e:MouseEvent):void {
        selectBox.xEnd = e.clientX
        selectBox.yEnd = e.clientY
    }
    
    function rightclick(e:MouseEvent):void {
        if(e.button === 2) {
            console.log(e.clientX, e.clientY)
            state.selectedUnits.forEach(el => {
                let x = el.x - e.clientX
                let y = el.y - e.clientY
                if(Math.abs(x) > Math.abs(y)) {
                    el.xvel = -x/Math.abs(x)
                    el.yvel = -y/Math.abs(x)
                } else {
                    el.xvel = -x/Math.abs(y)
                    el.yvel = -y/Math.abs(y)
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