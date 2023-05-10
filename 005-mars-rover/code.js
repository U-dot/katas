export function executeInstructionsForList(rovers){
    executeInstructions(rovers[0]);
    if (rovers[1]){
        executeInstructionsForList(rovers.slice(1,rovers.length));
    }
}

export function executeInstructions(rover){
    if (rover.instructions.length===0) {
        console.log(`${rover.x} ${rover.y} ${rover.direction}\n`);
        return;
    }
    roverInfoIsValid(rover);
    executeInstructions({
            x: newXPosition(rover),
            y: newYPosition(rover),
            direction: newDirection(rover),
            instructions: rover.instructions.slice(1),
            plateau: {
                width: rover.plateau.width,
                height: rover.plateau.height,
            }
    });
}

function newXPosition(rover){
    if (firstChar(rover.instructions) === 'M'){
        switch(rover.direction){
            case 'W': return rover.x-1
            case 'N': return rover.x;
            case 'E': return rover.x+1
            case 'S': return rover.x;
        }
    }
    return rover.x;
}

function newYPosition(rover){
    if (firstChar(rover.instructions) === 'M'){
        switch(rover.direction){
            case 'W': return rover.y;
            case 'N': return rover.y+1;
            case 'E': return rover.y;
            case 'S': return rover.y-1;
        }
    }
    return rover.y;
}

function newDirection(rover){
    if (firstChar(rover.instructions) === 'R'){
        return turnRight(rover.direction);
    }
    else if (firstChar(rover.instructions) === 'L'){
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
        throw new TypeError(`Invalid position '${rover.x},${rover.y}' in grid of size ${rover.plateau.width},${rover.plateau.height} indexed from zero`);
    }

    if (!roverInstructionIsValid(rover)) {
        throw new TypeError(`Invalid instruction '${firstChar(rover.instructions)}'`);
    }

    if (firstChar(rover.instructions) === 'M'){
        if (
            valueIsNonNegativeSmallerThanMax(newXPosition(rover), rover.plateau.width)
            && valueIsNonNegativeSmallerThanMax(newYPosition(rover), rover.plateau.height)
        )
            return `${newXPosition(rover)} ${newYPosition(rover)}`;
        throw new TypeError("Cannot move outside of plateau boundaries");
    }
}

function roverPositionIsValid(rover){
    return valueIsNonNegativeSmallerThanMax(rover.x,rover.plateau.width) && valueIsNonNegativeSmallerThanMax(rover.y,rover.plateau.height);
}

function valueIsNonNegativeSmallerThanMax(value,max){
    return max>=value && value>=0;
}

function roverInstructionIsValid(rover){
    return 'LRM'.includes(firstChar(rover.instructions));
}

function firstChar(string){
    return string[0];
}