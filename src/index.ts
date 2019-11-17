
import draw from './draw'
import moveUnits from './moveUnits'
import inputHandler from './addSelector'
import { state } from './state'
import './interfaces'
const root = <HTMLCanvasElement> document.querySelector('#root')
let ctx = root.getContext("2d");

// colors
const black = '#000000'
const red = '#ff0000'
const yellow = '#f6ff00'
const green = '#3ef238'
const blue = '#0044ff'

// settings
const updateFrequency = 0.01 // seconds between each render
const canvas = {
    ctx: ctx,
    height: root.height,
    width: root.width
}

let selectBox = {
    xStart: 0,
    yStart: 0,
    xEnd: 0,
    yEnd: 0
}

// ENGINE
let start = Date.now()
let timeElapsed = 0
let framesElapsed = 0

// Initiate listeners for clicking
const initiate = () => {
    inputHandler(root, selectBox)
}

const renderEngine = ():void => {
    let now = Date.now()
    timeElapsed = (now - start)/1000

    if(Math.floor(timeElapsed/updateFrequency)>framesElapsed) { // everything in each render goes here
        framesElapsed++
        ctx.fillStyle = black;
        ctx.fillRect(0, 0, root.width, root.height);
        moveUnits(state.units)
        draw(canvas, selectBox)
    }

    window.requestAnimationFrame(renderEngine)
}

const startGame = ():void => {
renderEngine()
initiate()
}

const pngs:Array<Ipng> = [
    {
        name: 'marine',
        src: './media/marine.png'
    },
    {
        name: 'commandCenter',
        src: './media/commandCenter.png'
    }

]
// Img resource loading before game starts
function loadResources(pngs:Array<Ipng>) {
    let counter = 0
    for(let i = 0; i<pngs.length; i++) {
        let newPng = {
            name: pngs[i].name,
            element: new Image()
        }
        newPng.element.addEventListener('load', () => {
        state.pngs.push(newPng)
            console.log('loaded', newPng.name)
            counter++
            if(counter === pngs.length) {
                startGame()
            }
        })
        newPng.element.src = pngs[i].src
    }
}
loadResources(pngs)





