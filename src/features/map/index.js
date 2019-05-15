import React from 'react'
import { SPRITE_SIZE, NEW_HEIGHT, NEW_WIDTH } from '../../config/constants'
import { connect } from 'react-redux'

import './styles.css'
//get the image for each tile
function getTileSprite(type) {
    switch (true) {
        case type < 10:
            return 'grass'
        case type < 12:
            return 'rock'
        case type < 13:
            return 'tree'  //time: 22:00 in video 2
        case type === 13:
            return 'water'
        case type === 100:
            return 'base'
    }
}

function placeFoodSprite(type) {
    if (type === true) {
        console.log("food")
        return 'food'
    }
    console.log('no Food')

}

//assigning class based on array value which will set the sprite for the tile through css
function MapTile(props) {
    if (props.tile.visible || props.tile.base) {
        return <div
            className={`tile ${getTileSprite(props.tile.terrain)}`}
            style={{
                height: 120, // =====NEW 
                width: 80,
            }}
        >
            {/* ======= test for placing food ========  */}
            {props.tile.food ? <img src="tiles/food.png"></img> : null}
            {/* ========test done ==================== */}
        </div>
    } else {
        return <div
            className={`tile fog`}
            style={{
                height: 80,  // =====NEW 
                width: 80,  // =====NEW  
            }}
        >
            {}
        </div>

    }
}
//making a row of map tiles
function MapRow(props) {
    return <div
        className="row"
        style={{
            height: 80 // =====NEW 
        }}
    >
        {
            props.tiles.map(tile => <MapTile tile={tile} />)
        }
    </div>
}

//adding each row of tiles to map
function Map(props) {
    return (

        <div
            style={{
                position: 'relative',
                top: '0',
                left: '0',
                width: '1600px',  // =====NEW 
                height: '840px', // =====NEW 
                // transform: scale(0.5, 0.5),
                // backgroundColor: 'green',
                border: '4px solid white',
            }}
        >
            {
                props.tiles.map(row => <MapRow tiles={row} />)
            }

        </div>

    )
}

function mapStateToProps(state) {
    return {
        tiles: state.map.tiles
    }
}

export default connect(mapStateToProps)(Map)


// import React from 'react'
// import { SPRITE_SIZE } from '../../config/constants'
// import { connect } from 'react-redux'

// import './styles.css'
// //get the image for each tile
// function getTileSprite(type) {
//     switch (true) {
//         case type < 10:
//             return 'grass'
//         case type < 12:
//             return 'rock'
//         case type < 13:
//             return 'tree'  //time: 22:00 in video 2
//         case type === 13:
//             return 'water'
//         case type === 100:
//             return 'base'
//     }
// }

// function placeFoodSprite(type) {
//     if (type === true) {
//         console.log("food")
//         return 'food'
//     }
//     console.log('no Food')

// }

// //assigning class based on array value which will set the sprite for the tile through css
// function MapTile(props) {
//     if (props.tile.visible || props.tile.base) {
//         return <div
//             className={`tile ${getTileSprite(props.tile.terrain)}`}
//             style={{
//                 height: SPRITE_SIZE,
//                 width: SPRITE_SIZE,
//             }}
//         >
//             {/* ======= test for placing food ========  */}
//             {props.tile.food ? <img src="tiles/food.png"></img> : null}
//             {/* ========test done ==================== */}
//         </div>
//     } else {
//         return <div
//             className={`tile fog`}
//             style={{
//                 height: SPRITE_SIZE,
//                 width: SPRITE_SIZE,
//             }}
//         >
//             {}
//         </div>

//     }
// }
// //making a row of map tiles
// function MapRow(props) {
//     return <div
//         className="row"
//         style={{
//             height: SPRITE_SIZE
//         }}
//     >
//         {
//             props.tiles.map(tile => <MapTile tile={tile} />)
//         }
//     </div>
// }

// //adding each row of tiles to map
// function Map(props) {
//     return (
//         <div
//             style={{
//                 position: 'relative',
//                 top: '0',
//                 left: '0',
//                 width: '1600px',
//                 height: '840px',
//                 // minHeight: '840px',
//                 // minWidth: '1600px',
//                 // backgroundColor: 'green',
//                 border: '4px solid white',
//             }}
//         >
//             {
//                 props.tiles.map(row => <MapRow tiles={row} />)
//             }

//         </div>
//     )
// }

// function mapStateToProps(state) {
//     return {
//         tiles: state.map.tiles
//     }
// }

// export default connect(mapStateToProps)(Map)