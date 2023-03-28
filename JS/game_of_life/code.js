Number.prototype.in_range = function(min,max){
    return  min <= this && this < max;
}

export function neighbors(group, cell, number_of_groups, number_of_cells_per_group){
    let neighbors = []
    for (let neighbor_group = group-1; neighbor_group <= group+1; neighbor_group++) {
        for (let neighbor_cell = cell-1; neighbor_cell <= cell+1; neighbor_cell++) {
            if (
                (neighbor_group!=group || neighbor_cell!=cell) && 
                neighbor_group.in_range(0, number_of_groups) && 
                neighbor_cell.in_range(0, number_of_cells_per_group)
                ) {
                neighbors.push({group: neighbor_group, cell: neighbor_cell})
            }
        }
    }
    return neighbors
}

export function is_alive(group,cell,population){
    return population[group][cell]
}

export function neighbors_alive_count(group, cell, population){
    let number_of_alive_neighbours = 0;
    neighbors(group, cell, population.length, population[0].length).forEach(
        function(neighbor)
        {              
            if(is_alive(neighbor.group, neighbor.cell, population)){
                number_of_alive_neighbours++;                
            }
        }
        )
    return number_of_alive_neighbours
}

export function does_cell_live(group, cell, population){
    if (is_alive(group,cell,population)){
        return is_comfortable(group,cell,population)
    }
    return can_spawn(group,cell,population)
}

export function is_comfortable(group, cell, population){
    return neighbors_alive_count(group,cell,population).in_range(2,4);
}

export function can_spawn(group,cell,population){
    return 3 === neighbors_alive_count(group,cell,population)
}

export function next_generation(population){
    let next_generation = JSON.parse(JSON.stringify(population))
    for (let group=0;group<population.length;group++){ 
        for (let cell=0;cell<population[0].length;cell++){
            next_generation[group][cell] = does_cell_live(group,cell,population)
        }
    }
    return next_generation
}

