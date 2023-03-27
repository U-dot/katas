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
        it("This cell has three neighbors: 0 0, 0 1, 1 0", () => {
            const group = 1;
            const cell = 1;
            const given_generation_lenght = 2;
            const neighbors = [[0,0][0,1][1,0]]
            expect(neighbors).to.deep.equal(game_of_life.neighbors(group,cell,given_generation_lenght));
        });
        it("This cell has five neighbors: 0 0, 0 1, 1 0", () => {
            const group = 1;
            const cell = 1;
            const given_generation_lenght = 2;
            const neighbors = [[0,0][0,1][1,0]]
            expect(neighbors).to.deep.equal(game_of_life.neighbors(group,cell,given_generation_lenght));
        });
    });
});
