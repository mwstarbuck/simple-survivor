import store from '../../config/store'
import { SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT, END_DAY_MESSAGE, GAME_WON_MESSAGE, MOVE_MESSAGE } from '../../config/constants'
import handleEvents from '../map/handleEvents'

export default function handleMovement(player) {
    //position where sprite will end move
    //===NEW =========
    function getDestination(oldPos, direction) {
        switch (direction) {
            case 'WEST':
                return [oldPos[0] - SPRITE_SIZE * 2, oldPos[1]]
            case 'EAST':
                return [oldPos[0] + SPRITE_SIZE * 2, oldPos[1]]
            case 'NORTH':
                return [oldPos[0], oldPos[1] - SPRITE_SIZE * 2]
            case 'SOUTH':
                return [oldPos[0], oldPos[1] + SPRITE_SIZE * 2]
        }

    }
    // =======REMOVE FUNCTION======= ?????
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

    function getSpriteLocation(direction, walkIndex) {
        switch (direction) {
            case 'SOUTH':
                return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 0}px`         // handling movement of tile sheet
            case 'EAST':
                return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 1}px`
            case 'WEST':
                return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 2}px`
            case 'NORTH':
                return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 3}px`
        }

    }

    function getWalkIndex(wIndex) {
        const walkIndex = wIndex
        return walkIndex >= 7 ? 0 : walkIndex + 1
    }
    //===NEW ==============
    function spriteTransition(oldPos, direction, wIndex) {
        console.log(oldPos)
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
    //===NEW ========
    function transitionMove(transLoc, direction, wIndex) {
        store.dispatch({
            type: 'MOVE_PLAYER',
            payload: {
                position: transLoc,
                direction: direction,
                walkIndex: wIndex,
                spriteLocation: getSpriteLocation(direction, wIndex),
            }

        })
        console.log(transLoc)
    }
    // function checkForEvent(range) {
    //     let result = Math.floor(Math.random() * range)
    //     if (result <= 10) {
    //         return {}
    //     } else {

    //     }
    // }

    function handleSpeedAndMove(oldSpeed, nextTile, playerState, direction) {
        let gotFood = playerState.gotFood
        let terrain = playerState.currentTerrain
        let lastDirection = playerState.lastDirection
        let updateSpeed = oldSpeed
        switch (true) {
            case nextTile.terrain < 10:
                if (nextTile.food === true && gotFood === 0) {
                    gotFood++
                }
                if (terrain === 14 && lastDirection === direction) {
                    return {
                        speed: updateSpeed - 3,
                        gotFood: gotFood,
                        gotWater: playerState.gotWater,
                        currentTerrain: nextTile.terrain,
                        lastDirection: direction,
                        event: MOVE_MESSAGE,
                    }

                } else {
                    return {
                        speed: updateSpeed - 1,
                        gotFood: gotFood,
                        gotWater: playerState.gotWater + 0,
                        currentTerrain: nextTile.terrain,
                        lastDirection: direction,
                        event: MOVE_MESSAGE,

                    }
                }
            case nextTile.terrain < 12:
                if (nextTile.food === true) {
                    gotFood++
                }
                if (terrain === 14 && lastDirection === direction) {
                    return {
                        speed: updateSpeed - 5,
                        gotFood: gotFood,
                        gotWater: playerState.gotWater,
                        currentTerrain: nextTile.terrain,
                        lastDirection: direction,
                        event: MOVE_MESSAGE,
                    }

                } else {
                    return {
                        speed: updateSpeed - 3,
                        gotFood: gotFood,
                        gotWater: playerState.gotWater + 0,
                        currentTerrain: nextTile.terrain,
                        lastDirection: direction,
                        event: MOVE_MESSAGE,
                    }
                }
            case nextTile.terrain < 14:  //Forest
                if (nextTile.food === true) {
                    gotFood++
                }
                if (terrain === 14 && lastDirection === direction) {
                    return {
                        speed: updateSpeed - 4,
                        gotFood: gotFood,
                        gotWater: playerState.gotWater,
                        currentTerrain: nextTile.terrain,
                        lastDirection: direction,
                        event: MOVE_MESSAGE,
                    }

                } else {
                    return {
                        speed: updateSpeed - 2,
                        gotFood: gotFood,
                        gotWater: playerState.gotWater + 0,
                        currentTerrain: nextTile.terrain,
                        lastDirection: direction,
                        event: MOVE_MESSAGE,
                    }
                }
            case nextTile.terrain === 14:
                if (nextTile.food === true) {
                    gotFood++
                }
                if (terrain === 14 && lastDirection === direction) {
                    if (playerState.gotWater > 0) {
                        return {
                            speed: updateSpeed - 5,
                            gotFood: gotFood,
                            gotWater: playerState.gotWater,
                            currentTerrain: nextTile.terrain,
                            lastDirection: direction,
                            event: MOVE_MESSAGE,
                        }

                    } else {
                        return {
                            speed: updateSpeed - 5,
                            gotFood: gotFood,
                            gotWater: playerState.gotWater + 1,
                            currentTerrain: nextTile.terrain,
                            lastDirection: direction,
                            event: MOVE_MESSAGE,
                        }
                    }

                } else {
                    if (playerState.gotWater > 0) {
                        return {
                            speed: updateSpeed - 1,
                            gotFood: gotFood,
                            gotWater: playerState.gotWater,
                            currentTerrain: nextTile.terrain,
                            lastDirection: direction,
                            event: MOVE_MESSAGE,
                        }

                    } else {
                        return {
                            speed: updateSpeed - 1,
                            gotFood: gotFood,
                            gotWater: playerState.gotWater + 1,
                            currentTerrain: nextTile.terrain,
                            lastDirection: direction,
                            event: MOVE_MESSAGE,
                        }
                    }
                }
            case nextTile.terrain === 100:
                alert("You have Won!")

                return {
                    speed: null,
                    gotFood: gotFood,
                    gotWater: playerState.gotWater + 1,
                    currentTerrain: nextTile.terrain,
                    lastDirection: direction,
                    event: GAME_WON_MESSAGE,
                }
        }
    }

    function observeBoundaries(oldPos, newPos) {
        return (newPos[0] >= 0 && newPos[0] <= MAP_WIDTH - SPRITE_SIZE) &&
            (newPos[1] >= 0 && newPos[1] <= MAP_HEIGHT - SPRITE_SIZE)
    }
    function endTurnReminder(currentSpeed) {
        if (currentSpeed.speed === 0) {
            store.dispatch({
                type: 'END_DAY_EVENT',
                payload: {
                    event: END_DAY_MESSAGE,
                }
            })
        }
    }


    function observeImpassable(nextTile) {
        return nextTile.terrain < 20 //controls tiles player can move through >=7 allows free movement
    }


    function LOS(newPos, nextTile) {
        const y = (newPos[1] - 50) / 80
        const x = (newPos[0] - 20) / 80
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
    function dispatchMove(direction, newPos, currentSpeed, nextTile, wIndex) {
        const walkIndex = getWalkIndex(wIndex)
        store.dispatch({
            type: 'MOVE_PLAYER',
            payload: {
                position: newPos,
                direction: direction,
                walkIndex: walkIndex,
                spriteLocation: getSpriteLocation(direction, walkIndex),
                speed: currentSpeed.speed,
                gotWater: currentSpeed.gotWater,
                gotFood: currentSpeed.gotFood,
                currentTerrain: currentSpeed.currentTerrain,
                lastDirection: currentSpeed.lastDirection,
                event: currentSpeed.event,

            }
        })
        console.log(newPos)
        LOS(newPos, nextTile)
        endTurnReminder(currentSpeed)
    }

    function attemptMove(direction) {
        const playerState = store.getState().player
        const oldPos = playerState.position
        const destination = getDestination(oldPos, direction) //=====NEW
        // const newPos = getNewPosition(oldPos, direction) // ===NEW
        if (observeBoundaries(oldPos, destination)) {  //===NEW
            let oldSpeed = playerState.speed
            const tiles = store.getState().map.tiles
            const y = (destination[1] - 50) / 80 //===NEW
            const x = (destination[0] - 20) / 80//===NEW
            const nextTile = tiles[y][x]

            const currentSpeed = handleSpeedAndMove(oldSpeed, nextTile, playerState, direction) //new
            // const eventResults = checkForEvent(100)

            //runs observeBoundaries & observeImpassable functions which return BOOL    
            if (currentSpeed.speed >= 0) {
                // console.log(oldSpeed) //new
                // console.log(currentSpeed)
                //===NEW BELOW
                const transLoc = spriteTransition(oldPos, direction, playerState.walkIndex)
                // ===NEW BELOW
                transitionMove(transLoc, direction, playerState.walkIndex)
                // dispatchMove(direction, newPos, currentSpeed, nextTile, playerState.walkIndex)
                //===NEW
                setTimeout(() => {
                    dispatchMove(direction, destination, currentSpeed, nextTile, playerState.walkIndex)
                }, 200);
                // dispatchMove(direction, newPos, currentSpeed, nextTile, playerState.walkIndex)
                console.log(nextTile)
            } else {
                alert("You do not have enough movement points to move into this terrain.")
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

