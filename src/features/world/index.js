import React from 'react'
import Map from '../map'
import Player from '../player'
import { connect } from 'react-redux'

import { tiles } from '../../data/maps/1'
import store from '../../config/store'



function World(props) {
    store.dispatch({
        type: 'ADD_TILES', payload: {
            tiles: tiles,
        }
    })
    return (
        <div
            style={{
                position: 'relative',
                width: '800px',
                height: '400px',
                // minWidth: '800px',
                // minHeight: '400px',
                transform: `scale(${props.style.scale}, ${props.style.scale})`,
                margin: '100 auto',
            }}
        >
            <Map />
            <Player />
        </div>
    )
}

function mapStateToProps(state) {
    return {
        style: state.world
    }
}

export default connect(mapStateToProps)(World)
