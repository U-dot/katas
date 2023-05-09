export function executeInstructions(rover){
    console.log(`0 0 ${newDirection(rover)}\n`);
}

function newDirection(rover){
    if (rover.instructions === 'R'){
        return turnRight(rover)
    }
    else {
        return turnLeft(rover)
    }
}

function turnLeft(rover){
    if(rover.direction==='W'){
        return 'S';
    }
    if(rover.direction==='E'){
        return 'N';
    }
    if(rover.direction==='S'){
        return 'E';
    }
    return 'W';
}

function turnRight(rover){
    if(rover.direction==='W'){
        return 'N';
    }
    if(rover.direction==='E'){
        return 'S';
    }
    if(rover.direction==='S'){
        return 'W';
    }
    return 'E';
}