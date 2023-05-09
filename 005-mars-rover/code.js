export function executeInstructions(rover){
    console.log(`0 0 ${newDirection(rover)}\n`);
}

function newDirection(rover){
    return ['N','E','S','W'][getNewIndexInNESW(rover)];
}

function getNewIndexInNESW(rover){
    return mod(
        indexInNESW(rover.direction)+thisIsTurningClockwise(rover.instructions),
        4
    )
}

function thisIsTurningClockwise(instructions){
    return instructions==='R'? 1: -1;
}

function indexInNESW(direction){
    return ['N','E','S','W'].indexOf(direction)
}

function mod(n, m) {
    return ((n % m) + m) % m;
}