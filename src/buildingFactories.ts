import { state } from './state'

export default function spawnBuilding(player: string, type: string, x: number, y:number) {
    state.buildings.push({
            player: player,
            type: type,
            gridX: x,
            gridY: y,
            gridSizeX: 5,
            gridSizeY: 5,
            radius: 75,
            color: 'red',
    })
    for(let i = x; i<x+5; i++) {
        for(let j = y; j<y+5; j++) {
            state.grid[i][j] = 1
        }
    }
    console.log(state.grid)
}