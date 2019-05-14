import React from 'react'
import { connect } from 'react-redux'
import walkSprite from './player_walk.png'
import handleMovement from './movement'
// import campfireSprite from '/tiles/camp4040.png'

function Player(props) {

    if (props.speed === 0) {
        return (
            <div
                style={{
                    position: 'absolute',
                    top: props.position[1],
                    left: props.position[0],
                    backgroundImage: `url('/tiles/camp4040.png')`,
                    // backgroundPosition: '0 0', //automate bkgd potition so player faces 
                    backgroundPosition: props.spriteLocation, //different directions
                    width: '40px',
                    height: '40px',
                }}
            />
        )
    }
    return (
        <div
            style={{
                position: 'absolute',
                top: props.position[1],
                left: props.position[0],
                backgroundImage: `url('${walkSprite}')`,
                // backgroundPosition: '0 0', //automate bkgd potition so player faces 
                backgroundPosition: props.spriteLocation, //different directions
                width: '40px',
                height: '40px',
            }}
        />

    )
}
function mapStateToProps(state) {
    return {
        ...state.player,
    }
}

export default connect(mapStateToProps)(handleMovement(Player))