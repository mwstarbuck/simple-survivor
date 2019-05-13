import React, { Component } from 'react';
import { connect } from 'react-redux'
import handleEvents from '../features/map/handleEvents'

class EventsDisplay extends Component {
    constructor(props) {
        super(props)
        this.state = {
            event: ""
        }
    }
    render() {
        return (
            <div className="right-UI">
                <h1>Events</h1>
                <p>{this.props.vitals.event}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        vitals: state.player
    }
}
export default connect(mapStateToProps)(EventsDisplay)