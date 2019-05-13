
export default function handleEvents(currentTile, range) {

    let events = [{ id: 0, event: "You see a skunk in their path before the animal sees them" }, { id: 1, event: "A hawk dives into the bushes near the you and grabs a small rodent before flying away" }, { id: 2, event: "A wolf howls in the distance; from the opposite direction, another wolf answers." }, {
        id: 4, event: "Squirrels chatter at the you from a nearby tree's branches. The squirrels taunt you and hurl acorns if approached."
    }]
    let result = Math.floor(Math.random() * range)

    return events[result].event

}