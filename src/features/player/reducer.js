const initialState = {
    position: [400, 200],
    life: 10,
    skill: 5, //use for events
    speed: 5,
    food: 15,
    water: 5, //use for movement and events
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
        default:
            return state
    }
}

export default playerReducer