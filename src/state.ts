
interface Istate {
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
    units: [{
        player: 'PLAYER1',
        name: 'test1',
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

