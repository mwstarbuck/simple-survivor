const initialState = {
    position: [400, 200],
    spriteLocation: '0px 0px',
    direction: 'south',
    walkIndex: 0,
    life: 10,
    skill: 5, //use for events
    speed: 6,
    food: 12,
    water: 5,
    gotFood: 0,
    gotWater: 0, //use for movement and events
    thirstHistory: 5,
    hungerHistory: 12,
    speedHistory: 6,
    currentTerrain: 0,
    lastDirection: '',
    event: ""
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
        default:
            return state
    }
}

export default playerReducer