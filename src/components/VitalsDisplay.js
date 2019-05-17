import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Line } from 'rc-progress'

class VitalsDisplay extends Component {
    render() {
        return (
            <div className="left-UI">
                <h1>Player Info</h1>
                <div className="left-UI-inner">
                    <div>
                        <div className="vits life">Life:<span>{this.props.vitals.life}</span> <Line percent={this.props.vitals.life / 10 * 100} strokeWidth="5" trailWidth="2" strokeColor="#d83d3d" />
                        </div>
                        <div className=" vits movement">Movement:<span>{this.props.vitals.speed}</span><Line percent={this.props.vitals.speed / 6 * 100} strokeWidth="5" trailWidth="2" strokeColor="#83F584" /> </div>
                        <div className=" vits hunger">Hunger:<span>{this.props.vitals.food}</span><Line percent={(12 - this.props.vitals.food) / 12 * 100} strokeWidth="5" trailWidth="2" strokeColor="#efea25" /> </div>
                        <div className=" vits thirst">Thirst:<span>{this.props.vitals.water}</span><Line percent={(5 - this.props.vitals.water) / 5 * 100} strokeWidth="5" trailWidth="2" strokeColor="#18b6dc" /> </div>
                    </div>
                    <div className="f-w-d">
                        <div className="vits">Days Survived:{this.props.vitals.days}</div>
                        <div className="vits">Water: {this.props.vitals.gotWater} Gallon</div>
                        <div className="vits">Food: {this.props.vitals.gotFood}</div>
                    </div>
                </div>
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