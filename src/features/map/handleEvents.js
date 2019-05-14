import plainsEvents from '../../data/events/plainsEvents'
export default function handleEvents(currentTile, foodResult, waterResult, range) {

    let events = [
        {
            id: 0,
            choice: true,
            life: 0,
            speed: 0,
            gotWater: 0,
            gotFood: 0,
            caption: "",
            event: "You see a skunk in your path."
        },
        {
            id: 1,
            choice: true,
            life: 0,
            speed: 0,
            gotWater: 0,
            gotFood: 0,
            caption: "",
            event: "A hawk dives into the bushes near the you and grabs a small rodent before flying away"
        },
        {
            id: 2,
            choice: false,
            life: 0,
            speed: 0,
            gotWater: 0,
            gotFood: 0,
            caption: "",
            event: "A wolf howls in the distance; from the opposite direction, another wolf answers."
        },
        {
            id: 3,
            choice: false,
            life: 0,
            speed: 0,
            gotWater: 0,
            gotFood: 0,
            caption: "",
            event: "Squirrels chatter at the you from a nearby tree's branches. The squirrels taunt you and hurl acorns if approached."
        },

        {
            id: 4,
            choice: false,
            life: 0,
            speed: 0,
            gotWater: 1,
            gotFood: 0,
            caption: "+1 water for today",
            event: "A weather system with light rain has moved into the area. You have met the days water needs."
        },
        {
            id: 5,
            choice: false,
            life: 0,
            speed: -1,
            gotWater: 1,
            gotFood: 0,
            caption: "-1 Movement for today",
            event: "Torrential rain in the area. The You have met the days water needs but movement is slowed. +1 to water, -1 to movement"
        },
    ]
    let num = Math.floor(Math.random() * range)
    let result = { ...events[num] }
    if (foodResult.gotFood > 0) {
        result.gotFood = 0
    }
    if (waterResult.gotWater > 0) {
        result.gotWater = 0
    }
    console.log(num)
    return result

}