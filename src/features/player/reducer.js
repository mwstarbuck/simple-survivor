const initialState = {
    position: [20, 50],
    spriteLocation: '0px 0px',
    direction: 'south',
    walkIndex: 0,
    life: 10,
    skill: 5, //use for events
    speed: 6,
    turnSpeed: 6,
    food: 12,
    water: 5,
    gotFood: 0,
    gotWater: 0, //use for movement and events
    thirstHistory: 5,
    hungerHistory: 12,
    speedHistory: 6,
    currentTerrain: 0,
    lastDirection: '',
    event: "",
    days: 0,
}

const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MOVE_PLAYER':
            return {
                ...state,
                ...action.payload,
            }
        case 'NEXT_TURN':
            return {
                ...state,
                ...action.payload,
            }
        case 'SEARCH':
            return {
                ...state,
                ...action.payload,
            }
        case 'ADJUST_STATS':
            return {
                ...state,
                ...action.payload,
            }
        case 'END_DAY_EVENT':
            return {
                ...state,
                ...action.payload,
            }
        case 'GAME_OVER':
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}

export default playerReducer