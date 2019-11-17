
interface Istate {
    pngs: Array<IloadedPng>
    buildings:  Array<Ibuilding>
    selectedUnits:  Array<Iunit>
    preSelectedUnits:  Array<Iunit>
    selectedBuildings: Array<Ibuilding>
    preSelectedBuildings: Array<Ibuilding>
    units: Array<Iunit>
}
// colors
const black = '#000000'
const red = '#ff0000'
const yellow = '#f6ff00'
const green = '#00ff00'
const blue = '#0044ff'
export var state: Istate = {
    pngs: [],
    units: [{
        player: 'PLAYER1',
        name: 'test1',
        type: 'marine',
        x: 300,
        y: 600,
        xvel: 0,
        yvel: 0,
        radius: 20,
        color: green,
        moveCommand: false,
        attackCommand: false,
        gotoX: 0,
        gotoY: 0,
    },
    {
        player: 'PLAYER1',
        name: 'test2',
        type: 'marine',
        x: 400,
        y: 600,
        xvel: 0,
        yvel: 0,
        radius: 20,
        color: green,
        moveCommand: false,
        attackCommand: false,
        gotoX: 0,
        gotoY: 0,
    },{
        player: 'PLAYER1',
        name: 'test3',
        type: 'marine',
        x: 500,
        y: 600,
        xvel: 0,
        yvel: 0,
        radius: 20,
        color: green,
        moveCommand: false,
        attackCommand: false,
        gotoX: 0,
        gotoY: 0,
    },{
        player: 'PLAYER1',
        name: 'test4',
        type: 'marine',
        x: 600,
        y: 600,
        xvel: 0,
        yvel: 0,
        radius: 20,
        color: green,
        moveCommand: false,
        attackCommand: false,
        gotoX: 0,
        gotoY: 0,
    },{
        player: 'PLAYER1',
        name: 'test5',
        type: 'marine',
        x: 700,
        y: 600,
        xvel: 0,
        yvel: 0,
        radius: 20,
        color: green,
        moveCommand: false,
        attackCommand: false,
        gotoX: 0,
        gotoY: 0,
    }],
    buildings: [{
        player: 'PLAYER1',
        name: 'test0',
        type: 'commandCenter',
        x: 400,
        y: 200,
        sizex: 30,
        sizey: 40,
        color: red,
    }],
    selectedBuildings: [],
    preSelectedBuildings: [],
    selectedUnits: [],
    preSelectedUnits: []

}

