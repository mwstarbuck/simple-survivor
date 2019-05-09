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

  handleNewTurn() {
    const player = store.getState().player
    console.log(player.speed, player.food, player.water, player.skill, player.life)
    store.dispatch({
      type: 'NEXT_TURN',
      payload: {
        speed: 5,
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
        <ul>
          <li>Life:{this.props.life}</li>
          <li>Skill:{this.props.skill}</li>
          <li>speed:{this.props.speed}</li>
          <li>Food:{this.props.food}</li>
          <li>Water:{this.props.water}</li>

        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.player
  }
}

export default connect(mapStateToProps)(App);
