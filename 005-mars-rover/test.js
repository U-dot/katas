import { executeInstructions } from "./code";

beforeAll(() => {
    jest.spyOn(console,"log");
});

afterEach(() => {
    console.log.mockClear();
});

afterAll(() => {
    jest.restoreAllMocks();
})

describe("Given a 0x0 plateau with a sole rover in", () => {
    describe("0,0", () => {
        describe("facing north", () => {
            describe("When instructed to turn left", () => {
                it("It faces west", () => {
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
                    expect(console.log).toBeCalledWith("0 0 W\n");
                    expect(console.log).toBeCalledTimes(1);
                });
            });
            describe("When instructed to turn right", () => {
                it("It faces east", () => {
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
                    expect(console.log).toBeCalledWith("0 0 E\n");
                    expect(console.log).toBeCalledTimes(1);
                });
            });
        });
        describe("facing west", () => {
            describe("When instructed to turn left", () => {
                it("It faces south", () => {
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
                    expect(console.log).toBeCalledWith("0 0 S\n");
                    expect(console.log).toBeCalledTimes(1);
                });
            });
            describe("When instructed to turn right", () => {
                it("It faces south", () => {
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
                    expect(console.log).toBeCalledWith("0 0 N\n");
                    expect(console.log).toBeCalledTimes(1);
                });
            });
        });
        describe("facing east", () => {
            describe("When instructed to turn left", () => {
                it("It faces north", () => {
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
                    expect(console.log).toBeCalledWith("0 0 N\n");
                    expect(console.log).toBeCalledTimes(1);
                });
            });
            describe("When instructed to turn right", () => {
                it("It faces south", () => {
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
                    expect(console.log).toBeCalledWith("0 0 S\n");
                    expect(console.log).toBeCalledTimes(1);
                });
            });
        });
        describe("facing south", () => {
            describe("When instructed to turn left", () => {
                it("It faces east", () => {
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
                    expect(console.log).toBeCalledWith("0 0 E\n");
                    expect(console.log).toBeCalledTimes(1);
                });
            });
            describe("When instructed to turn right", () => {
                it("It faces west", () => {
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
                    expect(console.log).toBeCalledWith("0 0 W\n");
                    expect(console.log).toBeCalledTimes(1);
                });
            });
            describe("When given a invalid instruction 'X'", () => {
                it("It throws an error", () => {
                    expect(() => {
                        executeInstructions({
                            x: 0,
                            y: 0,
                            direction: 'S',
                            instructions: 'X',
                            plateau: {
                                width: 0,
                                height: 0,
                            }
                        })
                    }).toThrow(`Invalid instruction 'X'`);
                    expect(console.log).toBeCalledTimes(0);
                });
            });
            describe("When given a invalid instruction '3'", () => {
                it("It throws an error", () => {
                    expect(() => {
                        executeInstructions({
                            x: 0,
                            y: 0,
                            direction: 'S',
                            instructions: '3',
                            plateau: {
                                width: 0,
                                height: 0,
                            }
                        })
                    }).toThrow(`Invalid instruction '3'`);
                    expect(console.log).toBeCalledTimes(0);
                });
            });
        });
        describe("facing an invalid direction 'T'", () => {
            describe("When instructed to turn left", () => {
                it("It throws an error", () => {
                    expect(() => {
                        executeInstructions({
                            x: 0,
                            y: 0,
                            direction: 'T',
                            instructions: 'L',
                            plateau: {
                                width: 0,
                                height: 0,
                            }
                        })
                    }).toThrow(`Invalid direction 'T'`);
                    expect(console.log).toBeCalledTimes(0);
                });
            });
            describe("When instructed to turn right", () => {
                it("It throws an error", () => {
                    expect(() => {
                        executeInstructions({
                            x: 0,
                            y: 0,
                            direction: 'T',
                            instructions: 'R',
                            plateau: {
                                width: 0,
                                height: 0,
                            }
                        })
                    }).toThrow(`Invalid direction 'T'`);
                    expect(console.log).toBeCalledTimes(0);
                });
            });
        });
    });
    describe("1,0 facing south", () => {
        describe("When instructed to turn left", () => {
            it("It throws an error", () => {
                expect(() => {
                    executeInstructions({
                        x: 1,
                        y: 0,
                        direction: 'S',
                        instructions: 'L',
                        plateau: {
                            width: 0,
                            height: 0,
                        }
                    })
                }).toThrow(`Invalid position '1,0' in grid of size 1,1 indexed from zero`);
                expect(console.log).toBeCalledTimes(0);
            });
        });
    });
});

describe("Given a 2x2 plateau with a sole rover in", () => {
    describe("0,0 ", () => {
        describe("facing east", () => {
            describe("When instructed to move forward", () => {
                it("It is in 1,0", () => {
                    executeInstructions({
                        x: 0,
                        y: 0,
                        direction: 'E',
                        instructions: 'M',
                        plateau: {
                            width: 2,
                            height: 2,
                        }
                    });
                    expect(console.log).toBeCalledWith("1 0 E\n");
                    expect(console.log).toBeCalledTimes(1);
                });
            });
        });
        describe("facing north", () => {
            describe("When instructed to move forward", () => {
                it("It is in 0,1", () => {
                    executeInstructions({
                        x: 0,
                        y: 0,
                        direction: 'N',
                        instructions: 'M',
                        plateau: {
                            width: 2,
                            height: 2,
                        }
                    });
                    expect(console.log).toBeCalledWith("0 1 N\n");
                    expect(console.log).toBeCalledTimes(1);
                });
            });
        });
    });
    describe("1,1 ", () => {
        describe("facing west", () => {
            describe("When instructed to move forward", () => {
                it("It is in 0,1", () => {
                    executeInstructions({
                        x: 1,
                        y: 1,
                        direction: 'W',
                        instructions: 'M',
                        plateau: {
                            width: 2,
                            height: 2,
                        }
                    });
                    expect(console.log).toBeCalledWith("0 1 W\n");
                    expect(console.log).toBeCalledTimes(1);
                });
            });
        });
        describe("facing south", () => {
            describe("When instructed to move forward", () => {
                it("It is in 1,0", () => {
                    executeInstructions({
                        x: 1,
                        y: 1,
                        direction: 'S',
                        instructions: 'M',
                        plateau: {
                            width: 2,
                            height: 2,
                        }
                    });
                    expect(console.log).toBeCalledWith("1 0 S\n");
                    expect(console.log).toBeCalledTimes(1);
                });
            });
        });
        describe("facing east", () => {
            describe("When instructed to move forward", () => {
                it("It is in 2,1", () => {
                    executeInstructions({
                        x: 1,
                        y: 1,
                        direction: 'E',
                        instructions: 'M',
                        plateau: {
                            width: 2,
                            height: 2,
                        }
                    });
                    expect(console.log).toBeCalledWith("2 1 E\n");
                    expect(console.log).toBeCalledTimes(1);
                });
            });
        });
        describe("facing north", () => {
            describe("When instructed to move forward", () => {
                it("It is in 2,1", () => {
                    executeInstructions({
                        x: 1,
                        y: 1,
                        direction: 'N',
                        instructions: 'M',
                        plateau: {
                            width: 2,
                            height: 2,
                        }
                    });
                    expect(console.log).toBeCalledWith("1 2 N\n");
                    expect(console.log).toBeCalledTimes(1);
                });
            });
        });
    });
    describe("2,2 ", () => {
        describe("facing west", () => {
            describe("When instructed to move forward", () => {
                it("It is in 1,2", () => {
                    executeInstructions({
                        x: 2,
                        y: 2,
                        direction: 'W',
                        instructions: 'M',
                        plateau: {
                            width: 2,
                            height: 2,
                        }
                    });
                    expect(console.log).toBeCalledWith("1 2 W\n");
                    expect(console.log).toBeCalledTimes(1);
                });
            });
        });
        describe("facing south", () => {
            describe("When instructed to move forward", () => {
                it("It is in 2,1", () => {
                    executeInstructions({
                        x: 2,
                        y: 2,
                        direction: 'S',
                        instructions: 'M',
                        plateau: {
                            width: 2,
                            height: 2,
                        }
                    });
                    expect(console.log).toBeCalledWith("2 1 S\n");
                    expect(console.log).toBeCalledTimes(1);
                });
            });
        });
    });
});