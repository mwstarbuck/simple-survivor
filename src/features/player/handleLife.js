export default function handleLife(foodResult, waterResult, life, thirstHistory, hungerHistory) {
    let hunger = foodResult
    let thirst = waterResult
    console.log(waterResult)
    //reducing life due to thirst
    if (thirst === 4 && thirstHistory === 5) {
        console.log(thirstHistory)
        thirstHistory = thirst
        console.log(thirstHistory)
    }
    if (thirst === 3 && thirstHistory === 4) {
        thirstHistory = thirst
        console.log(thirstHistory)

        life--
        console.log(life)

    }
    if (thirst === 2 && thirstHistory === 3) {
        thirstHistory = thirst
        life -= 2
    }
    if (thirst === 1 && thirstHistory === 2) {
        thirstHistory = thirst
        life -= 2
    }
    if (thirst === 0 && thirstHistory === 1) {
        thirstHistory = thirst
        life -= 3
    }
    //gaining life due to thirst level
    if (thirst === 1 && thirstHistory === 0) {
        thirstHistory = 1
        life += 3
    }
    if (thirst === 2 && thirstHistory === 1) {
        thirstHistory = 2
        life -= 2
    }
    if (thirst === 3 && thirstHistory === 2) {
        thirstHistory = 3
        life -= 1
    }
    if (thirst === 4 && thirstHistory === 3) {
        thirstHistory = 4
    }
    if (thirst === 5 && thirstHistory === 4) {
        thirstHistory = 5
    }

    //reducing life due to hunger
    if (hunger === 11 && hungerHistory > hunger) {
        hungerHistory = hunger
    }
    if (hunger === 10 && hungerHistory > hunger) {
        hungerHistory = hunger
        life--
    }
    if (hunger === 8 && hungerHistory > hunger) {
        hungerHistory = hunger
        life--
    }
    if (hunger === 6 && hungerHistory > hunger) {
        hungerHistory = hunger
        life--
    }
    if (hunger === 4 && hungerHistory > hunger) {
        hungerHistory = hunger
        life -= 2
    }
    if (hunger === 3 && hungerHistory > hunger) {
        hungerHistory = hunger
        life -= 2
    }
    if (hunger === 2 && hungerHistory > hunger) {
        hungerHistory = hunger
        life -= 2
    }
    if (hunger === 1 && hungerHistory > hunger) {
        hungerHistory = hunger
        life -= 2
    }
    if (hunger === 0 && hungerHistory > hunger) {
        hungerHistory = hunger
        life -= 3
    }
    // increasing life due to hunger index 
    if (hunger === 1 && hungerHistory < hunger) {
        hungerHistory = hunger
        life += 3
    }
    if (hunger === 2 && hungerHistory < hunger) {
        hungerHistory = hunger
        life += 2
    }
    if (hunger === 3 && hungerHistory < hunger) {
        hungerHistory = hunger
        life += 2
    }
    if (hunger === 4 && hungerHistory < hunger) {
        hungerHistory = hunger
        life += 2
    }
    if (hunger === 6 && hungerHistory < hunger) {
        hungerHistory = hunger
        life++
    }
    if (hunger === 8 && hungerHistory < hunger) {
        hungerHistory = hunger
        life++
    }
    if (hunger === 10 && hungerHistory < hunger) {
        hungerHistory = hunger
        life++
    }
    if (hunger === 11 && hungerHistory < hunger) {
        hungerHistory = hunger
    }
    //check if life less than zero
    if (life < 0) {
        life = 0
    }




    return { life: life, thirstHistory: thirstHistory, hungerHistory: hungerHistory }
}