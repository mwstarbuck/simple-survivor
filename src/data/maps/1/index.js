
//represents map, each 0 represents a position the player sprite can mpve on the map.  eache number represents a different tile that player can or cannot walkthrough , eg. rock, tree grass.  0 == grass  
// export const tiles = [
//     [0, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

// ]
function rollRandom(range) {
    return Math.floor(Math.random() * range)
}
function placeBase(width, height, array) {
    let x = Math.floor(Math.random() * width)
    let y = Math.floor(Math.random() * height)
    if (x >= 7 && x <= 10) {
        x = x - Math.floor(Math.random() * 4) + 3
    }
    if (x > 10 && x <= 13) {
        x = x + Math.floor(Math.random() * 4) + 3
    }
    array[y][x].terrain = 100
    console.log(y, x)
    return array
}

function placeFood(width, height, array) {
    const num = rollRandom(2) + 4

    let doublePlacement = rollRandom(2) + 1
    while (doublePlacement != 0) {
        let x = rollRandom(width)
        let y = rollRandom(height)
        if (array[y][x].terrain === 13) {
            array[y][x].food = true
            console.log("food")
            doublePlacement--
        }
    }
    for (let i = 0; i <= num; i++) {
        let x = rollRandom(width)
        let y = rollRandom(height)
        if (array[y][x].terrain != 13) {
            array[y][x].food = true
            console.log("food")
        }
    }
    return array
}

function createMap(width, height) {
    let result = [] //initialize array
    for (let i = 0; i < height; i++) {
        result[i] = [] //initialize inner array
        for (let j = 0; j < width; j++) {
            result[i][j] = { terrain: Math.floor(Math.random() * 14), visible: true, food: false }
            // result[i][j] = Math.floor(Math.random() * 7)
        }

    }
    let baseMap = placeBase(width, height, result)
    let readyMap = placeFood(width, height, baseMap)
    return readyMap
}


export const tiles = createMap(20, 10)
console.log(tiles)