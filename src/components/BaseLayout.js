import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'


export class Menu extends Component {
    render() {
        return (
            <ul className="navBar">
                <li><NavLink exact to="/home">Simple Surivior</NavLink></li>
                <li><NavLink exact to="/game">Play Game</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
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
            <div>
                <Menu></Menu>
                {this.props.children}
                <Footer></Footer>
            </div>
        )
    }
}