import React, { Component } from 'react';
export class About extends Component {
    render() {
        return (
            <div className="aboutBox">
                <h1>How to Play Simple Survivor</h1>
                <h2>Story...</h2>
                <p>You have been out for a week long hike in a remote part of the world. While walking along a ridge you trip over a root and knock yourself unconscious in the process. To make things worse your backpack and gear fall over the ridge 200 feet below. A things often gow, it gets even worse for you.  You awake not knowing waht just happened, who you are, where you are or how you got there. All you have is a pack of matches and will to survive</p>
                <h2>How to Play</h2>
                <h3>The Goal...</h3>
                <p>Find your way to the ranger base to call for help. Before you lose your life.  Finding food and water are essential to survival with water being of the utmost importance.</p>
                <h3>Rules</h3>
                <h4>Player Info</h4>
                <ul>
                    <li><u>Life:</u>  ...You start with 10 life points.  When you reach 0 life point you are dead and the game is over.</li>
                    <li><u>Hunger:</u> ...You start with 12 hunger points.  This simulates a number of days you can go without food and still be functional.  The lower you're hunger points the hungrier you are and the more it affects your life.</li>
                    <li><u>Thirst:</u>  ...You start with 5 thirst points. This simulates a number of days you can go without water and still be alive.  The lower you're thirst points the thirstier you are and the more it affects your life. </li>
                    <li><u>Food:</u>...This a measure of the amount of food you need to forage to maintain your current hunger level. A level of one is </li>
                    <li><u>Water:</u>  ...This a measure of the amount of food you need to forage to maintain your current hunger level.</li>
                    <li></li>
                </ul>
                <ul>

                </ul>
                <h3>Legend</h3>
            </div>
        )
    }
}