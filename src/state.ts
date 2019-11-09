
interface Istate {
    units:  Array<Iunit>
    selectedUnits:  Array<Iunit>
}
export var state: Istate = {
    units: [{
        name: 'test1',
        x: 400,
        y: 200,
        xvel: 1,
        yvel: 1,
        sizex: 30,
        sizey: 40,
        color: '#0044ff',
        moveCommand: false,
        attackCommand: false,
        gotoX: 0,
        gotoY: 0,
    },{
        name: 'test2',
        x: 600,
        y: 600,
        xvel: 1,
        yvel: 1,
        sizex: 30,
        sizey: 40,
        color: '#0044ff',
        moveCommand: false,
        attackCommand: false,
        gotoX: 0,
        gotoY: 0,
    },{
        name: 'test3',
        x: 900,
        y: 400,
        xvel: 1,
        yvel: 1,
        sizex: 30,
        sizey: 40,
        color: '#0044ff',
        moveCommand: false,
        attackCommand: false,
        gotoX: 0,
        gotoY: 0,
    },{
        name: 'test4',
        x: 700,
        y: 300,
        xvel: 1,
        yvel: 1,
        sizex: 30,
        sizey: 40,
        color: '#0044ff',
        moveCommand: false,
        attackCommand: false,
        gotoX: 0,
        gotoY: 0,
    }],
    selectedUnits: []
}

