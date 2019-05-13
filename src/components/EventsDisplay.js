import React, { Component } from 'react';
import { connect } from 'react-redux'
import handleEvents from '../features/map/handleEvents'

function EventsDisplay(props) {
    if (props.eventObj.choice) {
        return (
            <div className="right-UI">
                <h1>Events</h1>
                <div>
                    <p>{props.eventObj.event}</p>
                    <button>Yes</button>
                    <button>No</button>
                </div>
            </div>
        )
    } else {
        return (
            <div className="right-UI">
                <h1>Events</h1>
                <p>{props.eventObj.event}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        eventObj: state.player.event
    }
}
export default connect(mapStateToProps)(EventsDisplay)