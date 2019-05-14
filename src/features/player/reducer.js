const initialState = {
    position: [0, 0],
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
        default:
            return state
    }
}

export default playerReducer