import store from '../../config/store'
import map from '../map';
import { bindActionCreators } from '../../../../../Library/Caches/typescript/3.4.3/node_modules/redux';


export default function handleZoomIn() {
    let scale = store.getState().world.scale
    const tiles = store.getState().map.tiles
    store.dispatch({
        type: 'ZOOM',
        payload: {
            scale: scale + 0.1
        },
        type: 'REVEAL_TILES',
        payload: {
            tiles: tiles
        }
    })

}

