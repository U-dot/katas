import { executeInstructions } from "./code";

describe("Given a sole rover in", () => {
    describe("0,0 facing north", () => {
        describe("When instructed to turn left", () => {
            it("It faces west", () => {
                jest.spyOn(console,"log")
                executeInstructions({
                    x: 0,
                    y: 0,
                    direction: 'N',
                    instructions: 'L',
                    plateau: {
                        width: 0,
                        height: 0,
                    }
                });
                expect(console.log).toBeCalledWith("0 0 W\n")
                expect(console.log).toBeCalledTimes(1)
                console.log.mockReset();
            });
        });
        describe("When instructed to turn right", () => {
            it("It faces east", () => {
                jest.spyOn(console,"log")
                executeInstructions({
                    x: 0,
                    y: 0,
                    direction: 'N',
                    instructions: 'R',
                    plateau: {
                        width: 0,
                        height: 0,
                    }
                });
                expect(console.log).toBeCalledWith("0 0 E\n")
                expect(console.log).toBeCalledTimes(1)
                console.log.mockReset();
            });
        });
    });
    describe("0,0 facing west", () => {
        describe("When instructed to turn left", () => {
            it("It faces south", () => {
                jest.spyOn(console,"log")
                executeInstructions({
                    x: 0,
                    y: 0,
                    direction: 'W',
                    instructions: 'L',
                    plateau: {
                        width: 0,
                        height: 0,
                    }
                });
                expect(console.log).toBeCalledWith("0 0 S\n")
                expect(console.log).toBeCalledTimes(1)
                console.log.mockReset();
            });
        });
        describe("When instructed to turn right", () => {
            it("It faces south", () => {
                jest.spyOn(console,"log")
                executeInstructions({
                    x: 0,
                    y: 0,
                    direction: 'W',
                    instructions: 'R',
                    plateau: {
                        width: 0,
                        height: 0,
                    }
                });
                expect(console.log).toBeCalledWith("0 0 N\n")
                expect(console.log).toBeCalledTimes(1)
                console.log.mockReset();
            });
        });
    });
    describe("0,0 facing east", () => {
        describe("When instructed to turn left", () => {
            it("It faces north", () => {
                jest.spyOn(console,"log")
                executeInstructions({
                    x: 0,
                    y: 0,
                    direction: 'E',
                    instructions: 'L',
                    plateau: {
                        width: 0,
                        height: 0,
                    }
                });
                expect(console.log).toBeCalledWith("0 0 N\n")
                expect(console.log).toBeCalledTimes(1)
                console.log.mockReset();
            });
        });
        describe("When instructed to turn right", () => {
            it("It faces south", () => {
                jest.spyOn(console,"log")
                executeInstructions({
                    x: 0,
                    y: 0,
                    direction: 'E',
                    instructions: 'R',
                    plateau: {
                        width: 0,
                        height: 0,
                    }
                });
                expect(console.log).toBeCalledWith("0 0 S\n")
                expect(console.log).toBeCalledTimes(1)
                console.log.mockReset();
            });
        });
    });
    describe("0,0 facing south", () => {
        describe("When instructed to turn left", () => {
            it("It faces east", () => {
                jest.spyOn(console,"log")
                executeInstructions({
                    x: 0,
                    y: 0,
                    direction: 'S',
                    instructions: 'L',
                    plateau: {
                        width: 0,
                        height: 0,
                    }
                });
                expect(console.log).toBeCalledWith("0 0 E\n")
                expect(console.log).toBeCalledTimes(1)
                console.log.mockReset();
            });
        });
        describe("When instructed to turn right", () => {
            it("It faces west", () => {
                jest.spyOn(console,"log")
                executeInstructions({
                    x: 0,
                    y: 0,
                    direction: 'S',
                    instructions: 'R',
                    plateau: {
                        width: 0,
                        height: 0,
                    }
                });
                expect(console.log).toBeCalledWith("0 0 W\n")
                expect(console.log).toBeCalledTimes(1)
                console.log.mockReset();
            });
        });
    });
});
