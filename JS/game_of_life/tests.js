import { it, describe } from "mocha";
import { expect } from "chai";
import * as game_of_life from "./code";

describe("Dummy", () => {
    describe("", () => {
        it("", () => {
            const given_generation = 2;
            const next_generation = 2;
            //expect(next_generation).to.deep.equal(game_of_life.next_generation(given_generation));
        });
    });
});

describe("Here we apply the rules of the game to the board:", () => {
    describe("Here we find the neighbouring cells position", () => {
        it("Here we get 8 neighbors", () => {
            const group = 1;
            const cell = 1;
            const number_of_groups = 3;
            const number_of_cells_per_group = 3;
            const neighbors = [
                {group: 0, cell: 0},
                {group: 0, cell: 1},
                {group: 0, cell: 2},
                {group: 1, cell: 0},
                {group: 1, cell: 2},
                {group: 2, cell: 0},
                {group: 2, cell: 1},
                {group: 2, cell: 2},
            ];
                //[0,0],[0,1],[0,2],[1,0],[1,2],[2,0],[2,1],[2,2]];
            expect(neighbors).to.deep.equal(game_of_life.neighbors(group,cell,number_of_groups,number_of_cells_per_group));
        });
        it("Here we get 8 neighbors from different cell", () => {
            const group = 2;
            const cell = 1;
            const number_of_groups = 4;
            const number_of_cells_per_group = 3;
            const neighbors = [
                {group: 1, cell: 0},
                {group: 1, cell: 1},
                {group: 1, cell: 2},
                {group: 2, cell: 0},
                {group: 2, cell: 2},
                {group: 3, cell: 0},
                {group: 3, cell: 1},
                {group: 3, cell: 2},

            ]
            //[[1,0],[1,1],[1,2],[2,0],[2,2],[3,0],[3,1],[3,2]];
            expect(neighbors).to.deep.equal(game_of_life.neighbors(group,cell,number_of_groups,number_of_cells_per_group));
        });
        it("Here we get 5 neighbors from cell too far down", () => {
            const group = 2;
            const cell = 1;
            const number_of_groups = 3;
            const number_of_cells_per_group = 4;
            const neighbors = [
                {group: 1, cell: 0},
                {group: 1, cell: 1},
                {group: 1, cell: 2},
                {group: 2, cell: 0},
                {group: 2, cell: 2},
            ]
            //[[1,0],[1,1],[1,2],[2,0],[2,2]];
            expect(neighbors).to.deep.equal(game_of_life.neighbors(group,cell,number_of_groups,number_of_cells_per_group));
        });
        it("Here we get 5 neighbors from cell too far up", () => {
            const group = 0;
            const cell = 1;
            const number_of_groups = 3;
            const number_of_cells_per_group = 4;
            const neighbors = [
                {group: 0, cell: 0},
                {group: 0, cell: 2},
                {group: 1, cell: 0},
                {group: 1, cell: 1},
                {group: 1, cell: 2},
            ];
            //[[0,0],[0,2],[1,0],[1,1],[1,2]];
            expect(neighbors).to.deep.equal(game_of_life.neighbors(group,cell,number_of_groups,number_of_cells_per_group));
        });
        it("Here we get 3 neighbors from cell too far up and left", () => {
            const group = 0;
            const cell = 0;
            const number_of_groups = 3;
            const number_of_cells_per_group = 3;
            const neighbors = [                
                {group: 0, cell: 1},
                {group: 1, cell: 0},
                {group: 1, cell: 1},
            ];
                //[0,1],[1,0],[1,1]];
            expect(neighbors).to.deep.equal(game_of_life.neighbors(group,cell,number_of_groups,number_of_cells_per_group));
        });
        it("Here we get 3 neighbors from cell too far down and right", () => {
            const group = 1;
            const cell = 1;
            const number_of_groups = 2;
            const number_of_cells_per_group = 2;
            const neighbors = [                
                {group: 0, cell: 0},
                {group: 0, cell: 1},
                {group: 1, cell: 0},
            ];
                //[0,0],[0,1],[1,0]];
            expect(neighbors).to.deep.equal(game_of_life.neighbors(group,cell,number_of_groups,number_of_cells_per_group));
        });
    });
    describe("Here we check whether cell is alive or dead", () => {
        it("Dead", () => {
            const group = 1;
            const cell = 1;
            const population = [[true,false],[false,false]]
            const cell_status = game_of_life.is_alive(group,cell,population)
            const expected_cell_status = false;
            expect(expected_cell_status).to.equal(game_of_life.is_alive(group,cell, population));
        });
        it("Alive", () => {
            const group = 0;
            const cell = 0;
            const population = [[true,false],[false,false]]
            const cell_status = game_of_life.is_alive(group,cell,population)
            const expected_cell_status = true;
            expect(expected_cell_status).to.equal(game_of_life.is_alive(group,cell, population));
        });
    });
    describe("Here we find the status of the neighbors of a cell", () => {
        it("All dead neighbors", () => {
            const group = 1;
            const cell = 1;
            const population = [[false,false],[false,false]]
            const neighbors = game_of_life.neighbors(group,cell,population.length, population[0].length)
            const neighbors_status = 0
            expect(neighbors_status).to.equal(game_of_life.neighbors_alive_count(group,cell,population));
        });
        it("Only one alive neighbor", () => {
            const group = 1;
            const cell = 1;
            const population = [[true,false],[false,false]]
            const neighbors = game_of_life.neighbors(group,cell,population.length, population[0].length)
            const neighbors_status = 1
            expect(neighbors_status).to.equal(game_of_life.neighbors_alive_count(group,cell,population));
        });

        it("Two alive neighbors", () => {
            const group = 1;
            const cell = 1;
            const population = [[false,false,false],[true,false,false],[false,false,true]]
            const neighbors = game_of_life.neighbors(group,cell,population.length, population[0].length)
            const neighbors_status = 2
            expect(neighbors_status).to.equal(game_of_life.neighbors_alive_count(group,cell,population));
        });
        it("All alive neighbors", () => {
            const group = 1;
            const cell = 1;
            const population = [[true,true],[true,true]]
            const neighbors = game_of_life.neighbors(group,cell,population.length, population[0].length)
            const neighbors_status = 3
            expect(neighbors_status).to.equal(game_of_life.neighbors_alive_count(group,cell,population));
        });
    });
    describe("Here we check if a cell dies or lives through next generation", () => {
        it("Lonely dead cell stays dead", () => {
            const group = 1;
            const cell = 1;
            const population = [[true,false],[true,false]]
            expect(false).to.equal(game_of_life.does_cell_live(group,cell,population));
        });
        it("Accompannied by 3, dead cell spawns", () => {
            const group = 1;
            const cell = 1;
            const population = [[true,true],[true,false]]
            expect(true).to.equal(game_of_life.does_cell_live(group,cell,population));
        });
        it("Comfortable alive cell stays alive", () => {
            const group = 1;
            const cell = 1;
            const population = [[true,false],[true,true]]
            expect(true).to.equal(game_of_life.does_cell_live(group,cell,population));
        });
    });
    describe("Here we check if a cell is accompanied enough", () => {
        describe("Here we check if a cell is comfortable", () => {
            it("Lonely cell is not", () => {
                const group = 1;
                const cell = 1;
                const population = [[false,false,false],[true,false,false],[false,false,false]]
                expect(false).to.equal(game_of_life.is_comfortable(group,cell,population));
            });
            it("Accompanied cell is", () => {
                const group = 1;
                const cell = 1;
                const population = [[false,false,false],[true,false,false],[false,false,true]]
                expect(true).to.equal(game_of_life.is_comfortable(group,cell,population));
            });
            it("Overaccompanied cell is not", () => {
                const group = 1;
                const cell = 1;
                const population = [[true,true,false],[true,false,false],[false,false,true]]
                expect(false).to.equal(game_of_life.is_comfortable(group,cell,population));
            });
        });

        describe("Here we check if a cell can spawn", () => {
            it("Lonely cell can not", () => {
                const group = 1;
                const cell = 1;
                const population = [[false,false,false],[true,false,false],[false,false,false]]
                expect(false).to.equal(game_of_life.can_spawn(group,cell,population));
            });
            it("Cell accompanied by three can", () => {
                const group = 1;
                const cell = 1;
                const population = [[true,false,true],[true,false,false],[false,false,false]]
                expect(true).to.equal(game_of_life.can_spawn(group,cell,population));
            });
        });
    });
});
