import store from 'react-redux'

export default function handleWater(player, currentTile, water, gotWater) {
    console.log(currentTile)
    if (currentTile.terrain === 14) {
        if (player.turnSpeed / player.speed === 1 && player.gotWater < 4) {
            gotWater++
            water = water
        } else {
            gotWater = 1
            water = water
        }

    } else {
        if (water > 0 && gotWater != 0) {
            gotWater = 0
            water = water
        } else if (water > 0 && gotWater === 0) {
            gotWater = 0
            water--
        } else {
            gotWater = 0
            water = 0
        }
    }

    if (gotWater === 4 && water < 5) {
        water++
        gotWater = 1
    }
    return { water: water, gotWater: gotWater }
}

