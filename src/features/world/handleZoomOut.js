import store from '../../config/store'

export default function handleZoomOut() {
    let scale = store.getState().world.scale
    store.dispatch({
        type: 'ZOOM',
        payload: {
            scale: scale - 0.1
        }
    })
}

