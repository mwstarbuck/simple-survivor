import React, { Component } from 'react';
import { connect } from 'react-redux'
import store from '../config/store'
import handleEvents from '../features/map/handleEvents'
import createMap, * as mapCreate from '../data/maps/1/index'


function EventsDisplay(props) {
    if (props.eventObj.choice) {
        return (
            <div className="right-UI">
                <h1>Events</h1>
                <div>
                    <h2>{props.eventObj.caption}</h2>
                    <p>{props.eventObj.event}</p>
                    <button onClick={refresh}>Yes</button>
                    <button onClick={redirect}>No</button>
                </div>
            </div>
        )
    } else {
        return (
            <div className="right-UI">
                <h1>Events</h1>
                <h2>{props.eventObj.caption}</h2>
                <p>{props.eventObj.event || props.event}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        eventObj: state.player.event
    }
}
function refresh() {
    window.location.reload()
}
function redirect() {
    window.location.href = 'http://localhost:3000'
}


export default connect(mapStateToProps)(EventsDisplay)