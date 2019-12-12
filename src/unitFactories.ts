import { state } from './state'

export function spawnMarine(player: string, x:number, y:number) {
    state.units.push({
        player: player,
        name: 'test1',
        type: 'marine',
        speed: 2,
        x: x,
        y: y,
        xvel: 0,
        yvel: 0,
        radius: 15,
        color: 'white',
        moveCommand: false,
        attackCommand: false,
        gotoX: 0,
        gotoY: 0,
    })
}