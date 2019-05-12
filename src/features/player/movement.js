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


    function handleSpeedAndMove(speed, nextTile, playerState) {
        let gotFood = playerState.gotFood
        switch (true) {
            case nextTile.terrain < 10:
                if (nextTile.food === true && gotFood === 0) {
                    gotFood++
                }
                return {
                    speed: speed - 1,
                    gotFood: gotFood,
                    gotWater: playerState.gotWater + 0,

                }
            case nextTile.terrain < 11:
                if (nextTile.food === true) {
                    gotFood++
                }
                return {
                    speed: speed - 3,
                    gotFood: gotFood,
                    gotWater: playerState.gotWater + 0,
                }
            case nextTile.terrain <= 12:
                if (nextTile.food === true) {
                    gotFood++
                }
                return {
                    speed: speed - 2,
                    gotFood: gotFood,
                    gotWater: playerState.gotWater + 0,
                }
            case nextTile.terrain === 13:
                if (nextTile.food === true) {
                    gotFood++
                }
                if (playerState.gotWater > 0) {
                    return {
                        speed: speed - 3,
                        gotFood: gotFood,
                        gotWater: playerState.gotWater,
                    }

                } else {
                    return {
                        speed: speed - 3,
                        gotFood: gotFood,
                        gotWater: playerState.gotWater + 1,
                    }
                }
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
        return nextTile.terrain < 20 //controls tiles player can move through >=7 allows free movement
    }


    function LOS(newPos, nextTile) {
        const y = newPos[1] / SPRITE_SIZE
        const x = newPos[0] / SPRITE_SIZE
        if (nextTile.terrain === 10 || nextTile.terrain === 11) {
            store.dispatch({
                type: 'MOUNTAIN_VIEW',
                payload: {
                    y: y,
                    x: x,
                    visible: true
                }
            })

        } else {
            store.dispatch({
                type: 'REVEAL_TILES',
                payload: {
                    y: y,
                    x: x,
                    visible: true
                }
            })
        }
    }

    function dispatchMove(newPos, currentSpeed, nextTile) {
        store.dispatch({
            type: 'MOVE_PLAYER',
            payload: {
                position: newPos,
                speed: currentSpeed.speed,
                gotWater: currentSpeed.gotWater,
                gotFood: currentSpeed.gotFood
            }
        })
        console.log(newPos)
        LOS(newPos, nextTile)
    }

    function attemptMove(direction) {
        const playerState = store.getState().player
        const oldPos = playerState.position
        const newPos = getNewPosition(oldPos, direction)
        if (observeBoundaries(oldPos, newPos)) {
            let oldSpeed = playerState.speed
            const tiles = store.getState().map.tiles
            const y = newPos[1] / SPRITE_SIZE
            const x = newPos[0] / SPRITE_SIZE
            const nextTile = tiles[y][x]

            const currentSpeed = handleSpeedAndMove(oldSpeed, nextTile, playerState) //new

            //runs observeBoundaries & observeImpassable functions which return BOOL    
            if (observeImpassable(nextTile) && currentSpeed.speed >= 0) {
                // console.log(oldSpeed) //new
                // console.log(currentSpeed)
                dispatchMove(newPos, currentSpeed, nextTile)
                console.log(nextTile)
            }
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