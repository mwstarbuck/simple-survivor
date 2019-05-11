

export default function handleFood(player, currentTile, food, gotFood) {
    if (currentTile.food === true) {
        if (player.speed === 5 && player.gotFood < 4) {
            gotFood++
            food = food
        } else {
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
    if (gotFood === 4 && food < 12) {
        food += 3
        gotFood = 1

    }
    return { food: food, gotFood: gotFood }
}