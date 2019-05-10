import React, { Component } from 'react';
import { connect } from 'react-redux'

class VitalsDisplay extends Component {
    render() {
        return (
            <div>
                <h1>Player Vitals</h1>
                <ul>
                    <li>Life:{this.props.vitals.life}</li>
                    <li>Skill:{this.props.vitals.skill}</li>
                    <li>speed:{this.props.vitals.speed}</li>
                    <li>Hunger:{this.props.vitals.food}</li>
                    <li>Thirst:{this.props.vitals.water}</li>
                    <li>Water: {this.props.vitals.gotWater}</li>
                    <li>Food: {this.props.vitals.gotFood}</li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        vitals: state.player
    }
}
export default connect(mapStateToProps)(VitalsDisplay)