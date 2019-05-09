import store from '../../config/store'
import { SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT } from '../../config/constants'


export default function handleMovement(player) {

    function getNewPosition(oldPos, direction) {
        switch (direction) {
            case 'WEST':
                return [oldPos[0] - SPRITE_SIZE, oldPos[1]]
            case 'EAST':
                return [oldPos[0] + SPRITE_SIZE, oldPos[1]]
            case 'NORTH':
                return [oldPos[0], oldPos[1] - SPRITE_SIZE]
            case 'SOUTH':
                return [oldPos[0], oldPos[1] + SPRITE_SIZE]
        }
    }


    function handleSpeedAndMove(speed, nextTile) {
        switch (true) {
            case nextTile.terrain < 10:
                return speed - 1
            case nextTile.terrain <= 11:
                return speed - 3
            case nextTile.terrrain <= 13:
                return speed - 2
            case nextTile.terrain === 13:
                return speed - 3
            case nextTile.terrain === 100:
                alert("You have Won!")
                break;
        }
    }

    function observeBoundaries(oldPos, newPos) {
        return (newPos[0] >= 0 && newPos[0] <= MAP_WIDTH - SPRITE_SIZE) &&
            (newPos[1] >= 0 && newPos[1] <= MAP_HEIGHT - SPRITE_SIZE)
    }

    // function observeImpassable(oldPos, newPos) {
    //     const tiles = store.getState().map.tiles
    //     const y = newPos[1] / SPRITE_SIZE
    //     const x = newPos[0] / SPRITE_SIZE
    //     const nextTile = tiles[y][x]

    //     console.log(x, y)
    //     return nextTile.terrain < 15 //controls tiles player can move through >=7 allows free movement
    // }

    function observeImpassable(nextTile) {
        return nextTile.terrain < 15 //controls tiles player can move through >=7 allows free movement
    }


    function LOS(newPos) {
        const y = newPos[1] / SPRITE_SIZE
        const x = newPos[0] / SPRITE_SIZE

        store.dispatch({
            type: 'REVEAL_TILES',
            payload: {
                y: y,
                x: x,

                visible: true
            }
        })
    }

    function dispatchMove(newPos, speed) {
        store.dispatch({
            type: 'MOVE_PLAYER',
            payload: {
                position: newPos,
                speed: speed
            }
        })
        console.log(newPos)
        LOS(newPos)
    }

    function attemptMove(direction) {
        const oldPos = store.getState().player.position
        const newPos = getNewPosition(oldPos, direction)
        let oldSpeed = store.getState().player.speed
        const tiles = store.getState().map.tiles
        const y = newPos[1] / SPRITE_SIZE
        const x = newPos[0] / SPRITE_SIZE
        const nextTile = tiles[y][x]

        const currentSpeed = handleSpeedAndMove(oldSpeed, nextTile) //new


        //runs observeBoundaries & observeImpassable functions which return BOOL    
        if (observeBoundaries(oldPos, newPos) && observeImpassable(nextTile) && currentSpeed >= 0) {
            console.log(oldSpeed) //new
            console.log(currentSpeed)
            dispatchMove(newPos, currentSpeed)
            console.log(newPos)
        }

    }
    //converts key press number into cardinal direction for movement handling
    function handleKeyDown(e) {
        e.preventDefault()
        switch (e.keyCode) {
            case 37:
                return attemptMove('WEST')
            case 38:
                return attemptMove('NORTH')
            case 39:
                return attemptMove('EAST')
            case 40:
                return attemptMove('SOUTH')
            default:
                console.log(e.keyCode)
        }
    }

    window.addEventListener('keydown', (e) => {
        handleKeyDown(e)
    })

    return player
}