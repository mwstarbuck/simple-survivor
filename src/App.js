import React, { Component } from 'react';
import World from './features/world'
import store from './config/store'
import VitalsDisplay from './components/VitalsDisplay'
import { connect } from 'react-redux'
import { SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT } from './config/constants'
import { exportDefaultSpecifier } from '@babel/types';
import handleWater from './features/player/handleWater'
import handleFood from './features/player/handleFood'

class App extends Component {

  onGameStart() {
    const tiles = store.getState().map.tiles
    const oldPos = store.getState().player.position
    const y = oldPos[1] / SPRITE_SIZE
    const x = oldPos[0] / SPRITE_SIZE

    store.dispatch({
      type: 'REVEAL_TILES',
      payload: {
        y: y,
        x: x,
        visible: true
      }
    })

  }

  handleSearch() {
    const player = store.getState().player
    const tiles = store.getState().map.tiles
    const y = player.position[1] / SPRITE_SIZE
    const x = player.position[0] / SPRITE_SIZE
    const currentTile = tiles[y][x]

    const skill = player.skill
    let speed = player.speed
    let gotFood = player.gotFood
    let food = player.food
    if (speed > 0) {
      let result = Math.floor(Math.random() * 50) + 1
      if (result + skill > 35) {
        gotFood = gotFood + 1
        speed = speed - 1
      } else {
        speed = speed - 1
      }
    }

    store.dispatch({
      type: 'SEARCH',
      payload: {
        speed: speed,
        gotFood: gotFood
      }
    })
  }
  //===== handleWater function returning error Cannot read property 'handleWater of undefined ==========================

  // handleWater = (player, currentTile, water, gotWater) => {
  //   if (currentTile.terrain === 13) {
  //     if (player.speed === 5 && player.gotWater < 3) {
  //       gotWater++
  //       water = water
  //     } else {
  //       water = water
  //     }

  //   } else {
  //     if (water > 0) {
  //       gotWater = 0
  //       water--
  //     } else {
  //       gotWater = 0
  //     }
  //   }

  //   if (gotWater === 3 && water < 5) {
  //     water++
  //     gotWater = 1
  //   }
  // }
  handleNewTurn() {
    const player = store.getState().player
    const tiles = store.getState().map.tiles
    const y = player.position[1] / SPRITE_SIZE
    const x = player.position[0] / SPRITE_SIZE
    const currentTile = tiles[y][x]
    let water = player.water
    let gotWater = player.gotWater
    let food = player.food
    let gotFood = player.gotFood
    // // place in handleWater() function
    const waterResult = handleWater(player, currentTile, water, gotWater)
    const foodResult = handleFood(player, currentTile, food, gotFood)
    // if (currentTile.terrain === 13) {
    //   if (player.speed === 5 && player.gotWater < 3) {
    //     gotWater++
    //     water = water
    //   } else {
    //     water = water
    //   }

    // } else {
    //   if (water > 0) {
    //     gotWater = 0
    //     water--
    //   } else {
    //     gotWater = 0
    //   }
    // }

    // if (gotWater === 3 && water < 5) {
    //   water++
    //   gotWater = 1
    // }
    // end of handleWater() function returns waterResult = {water: water, gotWater: gotWater}
    store.dispatch({
      type: 'NEXT_TURN',
      payload: {
        speed: 5,
        water: waterResult.water,
        gotWater: waterResult.gotWater,
        food: foodResult.food,
        gotFood: foodResult.gotFood
      }
    })
  }

  render() {
    const player = store.getState().player
    return (
      <div>
        <World />
        <button onClick={this.onGameStart}>Start Game</button>
        <button onClick={this.handleNewTurn}>Next Turn</button>
        <button onClick={this.handleSearch}>Search</button>
        <VitalsDisplay />
      </div>
    )
  }
}
// }

// const handleWater = (player, currentTile) => {
//   if (currentTile.terrain === 13) {
//     if (player.speed === 5 && player.gotWater < 3) {
//       gotWater++
//       water = water
//     } else {
//       water = water
//     }

//   } else {
//     if (water > 0) {
//       gotWater = 0
//       water--
//     } else {
//       gotWater = 0
//     }
//   }

//   if (gotWater === 3 && water < 5) {
//     water++
//     gotWater = 1
//   }
//   return {
//     water: water,
//     gotWater: gotWater
//   }
// }

export default App
