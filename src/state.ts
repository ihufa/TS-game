
interface Istate {
    pngs: Ipngs
    buildings:  Array<Ibuilding>
    selectedUnits:  Array<Iunit>
    preSelectedUnits:  Array<Iunit>
    selectedBuilding: Ibuilding
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
    pngs: {},
    units: [],
    buildings: [{
        player: 'PLAYER1',
        name: 'test0',
        type: 'commandCenter',
        x: 350,
        y: 550,
        radius: 75,
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
    selectedBuilding: undefined,
    preSelectedBuildings: [],
    selectedUnits: [],
    preSelectedUnits: []

}

