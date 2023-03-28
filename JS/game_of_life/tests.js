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
    it("Only dead cells -> Only dead cells", () => {
        const given_generation = [[false,false],[false,false]];
        const next_generation = [[false,false],[false,false]];
        expect(next_generation).to.deep.equal(game_of_life.next_generation(given_generation));
    });
    it("Only one alive cell -> Only dead cells", () => {
        const given_generation = [[false,false],[false,true]];
        const next_generation = [[false,false],[false,false]];
        expect(next_generation).to.deep.equal(game_of_life.next_generation(given_generation));
    });
    describe("Here we check the conditions on each element", () => {
        it("This cell has only one alive neighbor", () => {
            const group = 1;
            const cell = 1;
            const given_generation = [[false,false],[false,true]];
            const alone_cell = true;
            expect(alone_cell).to.deep.equal(game_of_life.is_cell_alone(group,cell,given_generation));
        });
    });
    describe("Here we find the neighbouring cells position", () => {
        it("Here we get 7 neighbors", () => {
            const group = 1;
            const cell = 1;
            const number_of_groups = 3;
            const number_of_cells_per_group = 3;
            const neighbors = [[0,0],[0,1],[0,2],[1,0],[1,2],[2,0],[2,1],[2,2]];
            expect(neighbors).to.deep.equal(game_of_life.neighbors(group,cell,number_of_groups,number_of_cells_per_group));
        });
        it("Here we get 7 neighbors from different cell", () => {
            const group = 2;
            const cell = 1;
            const number_of_groups = 4;
            const number_of_cells_per_group = 3;
            const neighbors = [[1,0],[1,1],[1,2],[2,0],[2,2],[3,0],[3,1],[3,2]];
            expect(neighbors).to.deep.equal(game_of_life.neighbors(group,cell,number_of_groups,number_of_cells_per_group));
        });
        it("Here we get 5 neighbors from cell too far down", () => {
            const group = 2;
            const cell = 1;
            const number_of_groups = 3;
            const number_of_cells_per_group = 4;
            const neighbors = [[1,0],[1,1],[1,2],[2,0],[2,2]];
            expect(neighbors).to.deep.equal(game_of_life.neighbors(group,cell,number_of_groups,number_of_cells_per_group));
        });
        it("Here we get 5 neighbors from cell too far up", () => {
            const group = 0;
            const cell = 1;
            const number_of_groups = 3;
            const number_of_cells_per_group = 4;
            const neighbors = [[0,0],[0,2],[1,0],[1,1],[1,2]];
            expect(neighbors).to.deep.equal(game_of_life.neighbors(group,cell,number_of_groups,number_of_cells_per_group));
        });
        it("Here we get 3 neighbors from cell too far up and left", () => {
            const group = 0;
            const cell = 0;
            const number_of_groups = 3;
            const number_of_cells_per_group = 3;
            const neighbors = [[0,1],[1,0],[1,1]];
            expect(neighbors).to.deep.equal(game_of_life.neighbors(group,cell,number_of_groups,number_of_cells_per_group));
        });
        it("Here we get 3 neighbors from cell too far down and right", () => {
            const group = 1;
            const cell = 1;
            const number_of_groups = 2;
            const number_of_cells_per_group = 2;
            const neighbors = [[0,0],[0,1],[1,0]];
            expect(neighbors).to.deep.equal(game_of_life.neighbors(group,cell,number_of_groups,number_of_cells_per_group));
        });
    });
});
