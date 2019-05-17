import React, { Component } from 'react';
import plains from '../images/plains80-0.png'
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
                    <li><u>Food:</u>...This a measure of the amount of food you need to forage to maintain your current hunger level. A level of one means you have met the days needs.</li>
                    <li><u>Water:</u>  ...This a measure of the amount of food you need to forage to maintain your current hunger level.</li>
                    <li></li>
                </ul>
                <br></br>
                <h3>Movement</h3>
                <p>You use movement points to move on the game map.  Each particular type of tile will have a specific movement cost. Movement costs are shown below.  You can also use movement to forage for food by pushing the forage button.  Foraging costs 1 movement point.  Sometimes you will find food ande sometimes not.</p>
                <h3>Legend</h3>
                <ul className="legend">
                    <li><img src={require('../images/plains80-0.png')} /> <span>Grasslands  - 1 movement point</span></li>
                    <li><img src={require('../images/woodlands80-0.png')} /> <span>Light Woods  - 1 movement point</span></li>
                    <li><img src={require('../images/hills80-0.png')} /> <span>Hills  - 1 movement point</span></li>
                    <li><img src={require('../images/forest80-0.png')} /> <span>Forest  - 2 movement points</span></li>
                    <li><img src={require('../images/mountain80-2.png')} /> <span>Mountains  - 3 movement points</span></li>
                    <li><img src={require('../images/water80-0.png')} /> <span>Lake  - 1 movement point to enter 2 movement points + next terrain movement cost if exiting in the same direction you entered.  Rule assum you are crossing the body of water. By Entering this terrain you will mee the days water needs tand maintain your current thirs level.</span></li>
                    <li><img src={require('../images/food.png')} /> <span>Tile with Food  By entering this tile you will movement the days food requirement and maintain your current hunger level.</span></li>
                    <li><img src={require('../images/base.png')} /> <span>Goal - Ranger Station - 1 movement point and you will win the game if you reach this tile before you are overcome by hunger or thirst.</span></li>
                </ul>
                <h3>Water, Food, Life and Movement</h3>
                <p>Effects of thirst on Life:</p>
                <p>You start with 5 thirst points.  The lower this number goes the thirstier you are and the more life you lose.
                    <ul>
                        <li>At 4 thirst: - 1 life</li>
                        <li>At 3 thirst: - 2 life</li>
                        <li>At 2 thirst: - 2 life</li>
                        <li>At 1 thirst: - 3 life</li>
                        <li>At 0 thirst: - 3 life</li>
                    </ul>
                    <p>You can gain a thirst level back by staing on a wter tile for 3 consecutive days.  This will in turn raise your life.</p>
                    <br></br>
                    <p>Effects of hunger on life</p>
                    <p>You start with 12 hunger points.  The lower this number goes the hugrier you are and the more life you lose. See the effects on life below.</p>
                    <ul>

                        <li>At 10 hunger: - 1 life</li>
                        <li>At 8 hunger: - 1 life</li>
                        <li>At 6 hunger: - 1 life</li>
                        <li>At 4 hunger: - 2 life</li>
                        <li>At 3 hunger: - 2 life</li>
                        <li>At 2 hunger: - 2 life</li>
                        <li>At 1 hunger: - 3 life</li>
                        <li>At 0 hunger: - 3 life</li>

                    </ul>
                    <p>The loss of life points from hunger and thirst on the same turn are cumulative.  You can gain a thirst level back by staing on a wter tile for 3 consecutive days.  This will in turn raise your life.</p>
                    <br>
                    </br>
                    <p>Effects of Life on Movement</p>
                    <p>You start with 10 life points.  When you loose life it will cause you to loose movement points.  YOu only have 6 movement points</p>
                    <ul>
                        <li>At 10 life:  speed = 6</li>
                        <li>At 9 life: speed = 5</li>
                        <li>At 7 Life: speed = 4</li>
                        <li>At 5 life: speed = 3</li>
                        <li>At 4 life: speed = 2</li>
                        <li>At 2 hunger: speed = 1</li>
                        <li>At 0 hunger: speed = 0 because you are dead.</li>
                    </ul>

                    <h3>Random Events</h3>
                    <p>At the beginning of every turn a random event will occur sometimes benign sometimes bad  soemtimes beneficial.</p>


                </p>

            </div>
        )
    }
}