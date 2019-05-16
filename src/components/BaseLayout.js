import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'


export class Menu extends Component {
    render() {
        return (
            <ul className="menu">
                <li><NavLink className="menu-link title" exact to="/">Simple Surivior</NavLink></li>
                <li><NavLink className="menu-link" to="/game">Play Game</NavLink></li>
                <li><NavLink className="menu-link" to="/about">About</NavLink></li>
            </ul >
        )
    }
}

export class Footer extends Component {
    render() {
        return (
            <div className="footer">Design By Mike Starbuck -- Copyright 2019</div>
        )
    }
}

export class BaseLayout extends Component {
    render() {
        return (
            <div className="game-container">
                <Menu></Menu>
                {this.props.children}
                <Footer className="footer"></Footer>
            </div>
        )
    }
}