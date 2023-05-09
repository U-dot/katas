export function executeInstructions(rover){
    roverInfoIsValid(rover);
    console.log(`${newPosition(rover)} ${newDirection(rover)}\n`);
}

function newPosition(rover){
    if (rover.instructions === 'M'){
        switch(rover.direction){
            case 'N': return `0 1`;
            case 'E': return `1 ${rover.y}`;
        }
    }
    return `0 0`;
}

function newDirection(rover){
    if (rover.instructions === 'R'){
        return turnRight(rover.direction);
    }
    else if (rover.instructions === 'L'){
        return turnLeft(rover.direction);
    }
    return rover.direction;
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


function roverInfoIsValid(rover){
    if (!roverPositionIsValid(rover)){
        throw new TypeError(`Invalid position '${rover.x},${rover.y}' in grid of size 1,1 indexed from zero`);
    }

    if (!roverInstructionIsValid(rover)) {
        throw new TypeError(`Invalid instruction '${rover.instructions}'`);
    }
}

function roverPositionIsValid(rover){
    return valueIsNonNegativeSmallerThanMax(rover.x,rover.plateau.width) && valueIsNonNegativeSmallerThanMax(rover.y,rover.plateau.height);
}

function valueIsNonNegativeSmallerThanMax(value,max){
    return max>=value && value>=0;
}

function roverInstructionIsValid(rover){
    return 'LRM'.includes(rover.instructions)
}