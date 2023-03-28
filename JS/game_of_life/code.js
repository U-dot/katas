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

Number.prototype.between = function(min,max){
    return  min <= this && this < max;
}

export function neighbors(group, cell, number_of_groups, number_of_cells_per_group){
    let neighbors = []
    for (let margin_x = -1; margin_x < 2; margin_x++) {
        for (let margin_y = -1; margin_y < 2; margin_y++) {
            if ((margin_x !== 0 || margin_y !== 0) && (group+margin_x).between(0,number_of_groups) && (cell+margin_y).between(0,number_of_cells_per_group)) {
                neighbors.push([group + margin_x, cell + margin_y])
            }
        }
    }
    return neighbors
}