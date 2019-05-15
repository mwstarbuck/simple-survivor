import React, { Component } from 'react';
import World from './features/world'
import store from './config/store'
import VitalsDisplay from './components/VitalsDisplay'
import { connect } from 'react-redux'
import { SPRITE_SIZE, GAME_START_MESSAGE, MAP_WIDTH, MAP_HEIGHT } from './config/constants'
import { exportDefaultSpecifier } from '@babel/types';
import handleWater from './features/player/handleWater'
import handleFood from './features/player/handleFood'
import handleLife from './features/player/handleLife'
import handleSpeed from './features/player/handleSpeed'
import EventsDisplay from './components/EventsDisplay';
import handleEvents from './features/map/handleEvents'
import '../src/App.css'
import handleZoomIn from '../src/features/world/handleZoomIn' //
import handleZoomOut from './features/world/handleZoomOut'; //==NEW

class App extends Component {

  onGameStart() {
    const tiles = store.getState().map.tiles
    const player = store.getState().player
    const oldPos = player.position
    const y = (oldPos[1] - 50) / SPRITE_SIZE
    const x = (oldPos[0] - 20) / SPRITE_SIZE
    const startTile = tiles[y][x]
    //adjust player starting water and food if necessary
    let startGotWater = 0
    let startGotFood = 0
    if (startTile.terrain === 13) {
      startGotWater = 1
    }
    if (startTile.food) {
      startGotFood = 1
    }
    store.dispatch({
      type: 'ADJUST_STATS',
      payload: {
        gotWater: startGotWater,
        gotFood: startGotFood,
        event: GAME_START_MESSAGE,
      }
    })


    if (startTile.terrain === 10 || startTile.terrain === 11) {
      store.dispatch({
        type: 'MOUNTAIN_VIEW',
        payload: {
          y: y,
          x: x,
          visible: true
        }
      })

    } else {
      store.dispatch({
        type: 'REVEAL_TILES',
        payload: {
          y: y,
          x: x,
          visible: true
        }
      })
    }
  }

  handleSearch() {
    const player = store.getState().player
    const tiles = store.getState().map.tiles
    const y = (player.position[1] - 50) / SPRITE_SIZE
    const x = (player.position[0] - 20) / SPRITE_SIZE
    const currentTile = tiles[y][x]

    const skill = player.skill
    let speed = player.speed
    let gotFood = player.gotFood
    let food = player.food
    if (speed > 0 && gotFood === 0) {
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
        gotFood: gotFood,
      }
    })
  }
  handleNewTurn() {
    const player = store.getState().player
    const tiles = store.getState().map.tiles
    const y = (player.position[1] - 50) / 80
    const x = (player.position[0] - 20) / 80
    const currentTile = tiles[y][x]
    let water = player.water
    let gotWater = player.gotWater
    let food = player.food
    let gotFood = player.gotFood
    let life = player.life
    let speed = player.speed
    let hungerHistory = player.hungerHistory
    let thirstHistory = player.thirstHistory
    let speedHistory = player.speedHistory
    // // place in handleWater() function
    const waterResult = handleWater(player, currentTile, water, gotWater)
    const foodResult = handleFood(player, currentTile, food, gotFood)
    const lifeResult = handleLife(foodResult.food, waterResult.water, life, thirstHistory, hungerHistory)
    const speedResult = handleSpeed(lifeResult.life, speed)
    const eventResult = handleEvents(currentTile, foodResult, waterResult, 5)

    console.log(eventResult)
    store.dispatch({
      type: 'NEXT_TURN',
      payload: {
        speed: speedResult + eventResult.speed,
        turnSpeed: speedResult + eventResult.speed,
        water: waterResult.water,
        gotWater: waterResult.gotWater + eventResult.gotWater,
        food: foodResult.food,
        gotFood: foodResult.gotFood + eventResult.gotFood,
        life: lifeResult.life,
        thirstHistory: lifeResult.thirstHistory,
        hungerHistory: lifeResult.hungerHistory,
        event: eventResult
      }
    })
    // ======== DEATH END GAME CHECK =================
    if (lifeResult.life === 0) {
      alert("Player has died.  Game Over")
      // do more stuff here
    }
  }
  ZoomIn() {
    handleZoomIn()
    console.log('zoom')
  }
  ZoomOut() {
    handleZoomOut()
  }

  render() {
    const player = store.getState().player
    return (
      <div>
        <div className="world-container">
          <World />
        </div>

        <button onClick={this.onGameStart}>Start Game</button>
        <button onClick={this.handleNewTurn}>Next Turn</button>
        <button onClick={this.handleSearch}>Search</button>
        <button onClick={this.ZoomIn}>+</button>
        <button onClick={this.ZoomOut}>-</button>
        <div className="UI">
          <VitalsDisplay />
          <EventsDisplay></EventsDisplay>
        </div>
      </div>
    )
  }
}
// }


export default App
