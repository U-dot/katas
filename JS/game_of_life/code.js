export function next_generation(population){
    let next_generation = population
    for (let group=0; group<population.length; group++){
        for (let cell=0; cell<population.length; cell++){
            next_generation[group][cell] = new_cell_status(group,cell,population);
        }
    }
    return next_generation;
}

export function new_cell_status(group,cell,population){
    return false
}

export function is_cell_alone(group,cell,population){
    return true //for ([neighbour_group,neighbour_cell] in neighbors(group,cell,population.length)){
}

export function neighbors(group, cell, population_length){
    // for (let position_x = -1; position_x<2; position_x++){
    //     for (let position_y = 0; position_y < 2; position_y++) {

    //     }
    // }
    return [[0,0][0,1][1,0]]
}