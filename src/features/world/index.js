import React from 'react'
import Map from '../map'
import Player from '../player'
import { connect } from 'react-redux'

import { tiles } from '../../data/maps/1'
import store from '../../config/store'

let count = 0

function World(props) {


    if (count === 0) {
        count = count + 1
        store.dispatch({
            type: 'ADD_TILES', payload: {
                tiles: tiles
            }
        })
    } else {
        store.dispatch({
            type: 'ADD_TILES', payload: {
                tiles: props.currentTiles
            }
        })
    }
    return (
        <div
            style={{
                position: 'relative',
                width: '1600px',
                height: '1200px',
                // minWidth: '800px',
                // minHeight: '400px',
                transform: `scale(${props.style.scale}, ${props.style.scale})`,
                margin: '2opx auto',
            }}
        >
            <Map />
            <Player />
        </div>
    )

}

function mapStateToProps(state) {
    return {
        style: state.world,
        currentTiles: state.map.tiles
    }
}

export default connect(mapStateToProps)(World)
