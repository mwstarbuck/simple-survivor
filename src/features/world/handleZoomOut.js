import store from '../../config/store'

export default function handleZoomOut() {
    let scale = store.getState().world.scale
    const tiles = store.getState().map.tiles
    store.dispatch({
        type: 'ZOOM',
        payload: {
            scale: scale - 0.1
        }
    })
    store.dispatch({
        type: 'ZOOM_OUT',
        payload: {
            tiles: tiles
        }
    })
}

