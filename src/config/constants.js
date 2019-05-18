export const SPRITE_SIZE = 40 // size of player sprite for move calculations

// size of MAP for player boundaries in movement
export const MAP_HEIGHT = 80 * 10 + 40

export const MAP_WIDTH = 80 * 20 + 20

// export const NEW_WIDTH = 80

// export const NEW_HEIGHT = 120

export const GAME_START_MESSAGE = {
    id: 99,
    choice: false,
    life: 0,
    gotWater: 0,
    gotFood: 0,
    caption: "Can you Survive?",
    event: "You wake to discover you're alone in the wilderness. 'Where am I?!', you ask yourself. 'How did i get here?!!'  ...How will I survive?!!!' The rest is up to you. what will you do?",
}

export const END_DAY_MESSAGE = {
    id: 99,
    choice: false,
    life: 0,
    gotWater: 0,
    gotFood: 0,
    caption: "'Click' Next Turn",
    event: "The day is done and there is nothing left to do but find shelter and try to get a good nights rest. Click next turn when ready",
}
export const GAME_WON_MESSAGE = {
    id: 99,
    choice: true,
    life: 0,
    gotWater: 0,
    gotFood: 0,
    caption: "You Made It!! You have survived!",
    event: "The ranger exclaims, 'You look like you need some water and food.  You also need a bath'  Would you like to play again? ",
}

export const MOVE_MESSAGE = {
    id: 99,
    choice: false,
    life: 0,
    gotWater: 0,
    gotFood: 0,
    caption: "Moving Along",
    event: "",
}

export const GAME_OVER_MESSAGE = {
    id: 99,
    choice: true,
    life: 0,
    gotWater: 0,
    gotFood: 0,
    caption: "PLAYER HAS DIED.  GAME OVER!",
    event: "Play Again?",
}

