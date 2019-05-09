import React, { Component } from 'react';
import World from './features/world'
import store from './config/store'
import { connect } from 'react-redux'
import { SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT } from './config/constants'



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

  handleNewPlayerState() {
    const player = store.getState().player
    console.log(player.speed, player.food, player.water, player.skill)
    store.dispatch({
      type: 'NEXT_TURN',
      payload: {
        speed: 5,
      }
    })



  }

  render() {
    return (
      <div>
        <World />
        <button onClick={this.onGameStart}>Start Game</button>
        <button onClick={this.handleNewPlayerState}>Next Turn</button>
      </div>
    )
  }
}



export default App;
