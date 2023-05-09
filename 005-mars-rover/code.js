export function executeInstructions(rover){
    console.log(`${newPosition(rover)} ${newDirection(rover)}\n`);
}

function newPosition(rover){
    if (rover.x>0 || rover.y>0){
        throw new TypeError(`Invalid position '${rover.x},${rover.y}' in grid of size 1,1 indexed from zero`);
    }
    if (rover.instructions === 'M'){
        throw new TypeError('Cannot move outside of plateau boundaries');
    }
    return `0 0`
}

function newDirection(rover){
    if (rover.instructions === 'R'){
        return turnRight(rover.direction);
    }
    else if (rover.instructions === 'L'){
        return turnLeft(rover.direction);
    }
    if (!'LRM'.includes(rover.instructions)) {
        throw new TypeError(`Invalid instruction '${rover.instructions}'`);
    }
}

function turnLeft(direction){
    switch (direction){
        case 'W': return 'S';
        case 'S': return 'E';
        case 'E': return 'N';
        case 'N': return 'W';
        default: throw new TypeError(`Invalid direction '${direction}'`);
    }
}

function turnRight(direction){
    switch (direction){
        case 'W': return 'N';
        case 'S': return 'W';
        case 'E': return 'S';
        case 'N': return 'E';
        default: throw new TypeError(`Invalid direction '${direction}'`);
    }
}