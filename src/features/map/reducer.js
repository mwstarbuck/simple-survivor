
const initialState = {
    tiles: [],
    currentTile: {}
}

function findAllVisible(state, action, tile, i, j, x) {
    if (j === x) return {
        ...state.tiles[i][j],
        visible: action.payload.visible,
    }
    if (j === x - 1) return {
        ...state.tiles[i][j],
        visible: action.payload.visible,
    }
    if (j === x + 1) return {
        ...state.tiles[i][j],
        visible: action.payload.visible,
    }

    return tile
}

const mapReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TILES':
            return {
                ...action.payload,
            }
        case 'REVEAL_TILES':
            let y = action.payload.y
            let x = action.payload.x

            return {
                ...state,
                tiles: state.tiles.map((row, i) => {
                    if (i === y) return row.map((tile, j) => {
                        //put this in a function
                        return tile = findAllVisible(state, action, tile, i, j, x)
                        // if (j === x) return {
                        //     ...state.tiles[i][j],
                        //     visible: action.payload.visible,
                        // }
                        // if (j === x - 1) return {
                        //     ...state.tiles[i][j],
                        //     visible: action.payload.visible,
                        // }
                        // if (j === x + 1) return {
                        //     ...state.tiles[i][j],
                        //     visible: action.payload.visible,
                        // }

                        // return tile
                    })
                    if (i === y - 1) return row.map((tile, j) => {
                        return tile = findAllVisible(state, action, tile, i, j, x)
                        // if (j === x) return {
                        //     ...state.tiles[i][j],
                        //     visible: action.payload.visible,
                        // }
                        // if (j === x - 1) return {
                        //     ...state.tiles[i][j],
                        //     visible: action.payload.visible,
                        // }
                        // if (j === x + 1) return {
                        //     ...state.tiles[i][j],
                        //     visible: action.payload.visible,
                        // }

                        // return tile
                    })
                    if (i === y + 1) return row.map((tile, j) => {

                        return tile = findAllVisible(state, action, tile, i, j, x)
                        // if (j === x) return {
                        //     ...state.tiles[i][j],
                        //     visible: action.payload.visible,
                        // }
                        // if (j === x - 1) return {
                        //     ...state.tiles[i][j],
                        //     visible: action.payload.visible,
                        // }
                        // if (j === x + 1) return {
                        //     ...state.tiles[i][j],
                        //     visible: action.payload.visible,
                        // }

                        // return tile
                    })
                    return row
                }),
            }

        default:
            return state
    }

}

export default mapReducer