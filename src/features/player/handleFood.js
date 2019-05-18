

export default function handleFood(player, currentTile, food, gotFood) {
    console.log(currentTile)
    if (currentTile.food === true) {
        if (player.turnSpeed / player.speed === 1 && player.gotFood < 4) {
            gotFood++
            food = food
        } else {
            gotFood = 1
            food = food
        }
    } else {
        if (food > 0 && gotFood != 0) {
            gotFood = 0
            food = food
        } else if (food > 0 && gotFood === 0) {
            gotFood = 0
            food--
        } else {
            gotFood = 0
            food = 0
        }
    }
    if (gotFood >= 4 && food < 12) {
        food += 1
        gotFood = 1

    }
    return { food: food, gotFood: gotFood }
}