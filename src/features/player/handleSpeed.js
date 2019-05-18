
export default function handleSpeed(life, speed) {
    if (life === 10) {
        speed = 6
    }
    if (life === 9) {
        speed = 5
    }
    if (life === 9) {
        speed = 5
    }
    if (life === 8) {
        speed = 4
    }
    if (life === 7) {
        speed = 4
    }
    if (life === 6) {
        speed = 3
    }
    if (life === 5) {
        speed = 3
    }
    if (life === 4) {
        speed = 2
    }
    if (life === 3) {
        speed = 2
    }
    if (life === 2) {
        speed = 2
    }
    if (life === 1) {
        speed = 1
    }
    if (life === 0) {
        speed = 0
    }
    return speed
}