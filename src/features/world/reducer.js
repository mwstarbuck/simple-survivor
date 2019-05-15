//==NEW
const initialState = {
    scale: 1,
}
//==NEW
const worldReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ZOOM':
            return {
                ...action.payload
            }
    }
    return state
}
export default worldReducer