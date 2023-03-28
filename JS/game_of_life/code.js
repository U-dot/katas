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
    for (let neighbor_group = group-1; neighbor_group <= group+1; neighbor_group++) {
        for (let neighbor_cell = cell-1; neighbor_cell <= cell+1; neighbor_cell++) {
            if (
                (neighbor_group!=group || neighbor_cell!=cell) && 
                neighbor_group.between(0, number_of_groups) && 
                neighbor_cell.between(0, number_of_cells_per_group)
                ) {
                neighbors.push([neighbor_group, neighbor_cell])
            }
        }
    }
    return neighbors
}