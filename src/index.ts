
import renderUnits from './draw'
import moveUnits from './moveUnits'
import './interfaces'
(function game() {
const root = <HTMLCanvasElement> document.querySelector('#root')
let ctx = root.getContext("2d");

// colors
const black = '#000000'
const red = '#ff0000'
const yellow = '#f6ff00'
const green = '#ffea00'
const blue = '#0044ff'

// settings
const updateFrequency = 0.05 // seconds between each render
const canvas = {
    ctx: ctx,
    height: root.height,
    width: root.width
}

const test = {
    name: 'test',
    x: 200,
    y: 300,
    xvel: 1,
    yvel: 1,
    sizex: 30,
    sizey: 40,
    color: yellow,
}
let selectBox = {
    xStart: 0,
    yStart: 0,
    xEnd: 0,
    yEnd: 0
}

const units: Array<Iunit> = [test] 
const markedUnits: Array<Iunit> = [test]



// ENGINE
let start = Date.now()
let timeElapsed = 0
let framesElapsed = 0
const engine = ():void => {
    if(timeElapsed === 0) {
        root.addEventListener('mouse', (e) => {
            console.log('event', e)
            selectBox.xStart = e.x
            selectBox.yStart = e.y
            root.addEventListener('mouseup')
        })
    }
    let now = Date.now()
    timeElapsed = (now - start)/1000

    if(Math.floor(timeElapsed/updateFrequency)>framesElapsed) { // everything in each render goes here
        framesElapsed++
        ctx.fillStyle = black;
        ctx.fillRect(0, 0, root.width, root.height);
        moveUnits(units)
        renderUnits(canvas, units, selectBox)
    }

    window.requestAnimationFrame(engine)
}
engine()



})()