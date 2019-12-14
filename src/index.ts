
import draw from './draw'
import moveUnits from './moveUnits'
import inputHandler from './inputHandler'
import { state } from './state'
import './interfaces'
const root = <HTMLCanvasElement> document.querySelector('#root')
let ctx = root.getContext("2d");
import spawnBuilding from './buildingFactories'

// colors
const backgroundColor = '#665f4a'
const black = '#000000'
const red = '#ff0000'
const yellow = '#f6ff00'
const green = '#3ef238'
const blue = '#0044ff'

// settings
const gridWidth = 40 ;
const gridHeight = 40 ;
const gridSize = 30 ;
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
const createGrid = () => {
    let column = []
    for(let i = 0; i<gridWidth; i++) {
        for(let j = 0; j<gridHeight; j++) {
            column[j] = 0
        }
        state.grid[i] = [...column,]
    }
}

const renderEngine = ():void => {
    let now = Date.now()
    timeElapsed = (now - start)/1000

    //if(Math.floor(timeElapsed/updateFrequency)>framesElapsed) { // everything in each render goes here
        framesElapsed++
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, root.width, root.height);
        moveUnits(state.units)
        draw(canvas, selectBox)
    //}

    window.requestAnimationFrame(renderEngine)
}

const startGame = ():void => {
createGrid()
renderEngine()
initiate()
spawnBuilding('PLAYER1', 'commandCenter', 10, 20)
}

const pngs:IpngSources = 
    {
        marine: './media/marine.png',
        commandCenter: './media/commandCenter.png',
        mineral: './media/minerals.png',
        menu: './media/menu.png'
    }

// Img resource loading before game starts
function loadResources(pngs:IpngSources) {
    let counter = 0
    const keys = Object.keys(pngs)
    for(let i = 0; i<keys.length; i++) {
        let newPng = new Image
        newPng.addEventListener('load', () => {
        state.pngs = { ...state.pngs, [keys[i]]: newPng}
            console.log('loaded', newPng)
            counter++
            if(counter === keys.length) {
                startGame()
            }
        })
        newPng.src = pngs[keys[i]]
    }
}
loadResources(pngs)





