
const initialState = {
    tiles: [],
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

function findMountainView(state, action, tile, i, j, x2) {
    if (j === x2) return {
        ...state.tiles[i][j],
        visible: action.payload.visible,
    }
    if (j === x2 - 1) return {
        ...state.tiles[i][j],
        visible: action.payload.visible,
    }
    if (j === x2 + 1) return {
        ...state.tiles[i][j],
        visible: action.payload.visible,
    }
    if (j === x2 - 2) return {
        ...state.tiles[i][j],
        visible: action.payload.visible,
    }
    if (j === x2 + 2) return {
        ...state.tiles[i][j],
        visible: action.payload.visible,
    }


    return tile

}

const mapReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TILES':
            return {
                ...state,
                ...action.payload,
            }
        case 'REVEAL_TILES':
            let y = action.payload.y
            let x = action.payload.x

            return {
                ...state,
                tiles: state.tiles.map((row, i) => {
                    if (i === y) return row.map((tile, j) => {
                        return tile = findAllVisible(state, action, tile, i, j, x)
                    })
                    if (i === y - 1) return row.map((tile, j) => {
                        return tile = findAllVisible(state, action, tile, i, j, x)
                    })
                    if (i === y + 1) return row.map((tile, j) => {

                        return tile = findAllVisible(state, action, tile, i, j, x)
                    })
                    return row
                }),
            }
        case 'MOUNTAIN_VIEW':
            let y2 = action.payload.y
            let x2 = action.payload.x
            return {
                ...state,
                tiles: state.tiles.map((row, i) => {
                    if (i === y2) return row.map((tile, j) => {
                        return tile = findMountainView(state, action, tile, i, j, x2)
                    })
                    if (i === y2 - 1) return row.map((tile, j) => {
                        return tile = findMountainView(state, action, tile, i, j, x2)
                    })
                    if (i === y2 + 1) return row.map((tile, j) => {

                        return tile = findMountainView(state, action, tile, i, j, x2)
                    })
                    if (i === y2 - 2) return row.map((tile, j) => {
                        return tile = findMountainView(state, action, tile, i, j, x2)
                    })
                    if (i === y2 + 2) return row.map((tile, j) => {

                        return tile = findMountainView(state, action, tile, i, j, x2)
                    })

                    return row
                }),
            }

        default:
            return state
    }

}

export default mapReducer