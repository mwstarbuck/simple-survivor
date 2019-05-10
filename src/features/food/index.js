import React from 'react'
import walkSprite from '../player/player_walk.png'



function Food(props) {
    return (
        <div

            style={{
                position: 'absolute',
                top: props.position[1],
                left: props.position[0],
                backgroundImage: `url('${walkSprite}')`,
                backgroundPosition: '0 0',
                width: '40px',
                height: '40px',
            }}
        ><p>hello</p></div>

    )
}
export default Food