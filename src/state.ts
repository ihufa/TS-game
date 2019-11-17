
interface Istate {
    pngs: Array<IloadedPng>
    buildings:  Array<Ibuilding>
    selectedUnits:  Array<Iunit>
    preSelectedUnits:  Array<Iunit>
    selectedBuildings: Array<Ibuilding>
    preSelectedBuildings: Array<Ibuilding>
    units: Array<Iunit>
    resources: Array<Iresource>
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
        speed: 2,
        x: 500,
        y: 300,
        xvel: 0,
        yvel: 0,
        radius: 15,
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
        speed: 2,
        x: 550,
        y: 350,
        xvel: 0,
        yvel: 0,
        radius: 15,
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
        x: 350,
        y: 550,
        sizex: 30,
        sizey: 40,
        color: red,
    }],
    resources: [
        {
            type: 'mineral',
            x: 0,
            y: 700,
            value: 1500
        },
        {
            type: 'mineral',
            x: 37,
            y: 650,
            value: 1500
        },
        {
            type: 'mineral',
            x: 0,
            y: 600,
            value: 1500
        },
        {
            type: 'mineral',
            x: 37,
            y: 550,
            value: 1500
        },
        {
            type: 'mineral',
            x: 0,
            y: 500,
            value: 1500
        }],
    selectedBuildings: [],
    preSelectedBuildings: [],
    selectedUnits: [],
    preSelectedUnits: []

}

