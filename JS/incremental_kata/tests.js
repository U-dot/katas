import { it, describe } from "mocha";
import { expect } from "chai";
import * as incremental from "./code";


describe("The Add method", () => {
        it("returns 0 to an empty string", () => {
            expect(incremental.Add("")).to.equal(0);
        });
        describe("returns the number when its just one number", () => {
            it("1", () => {
                expect(incremental.Add("1")).to.equal(1);
            });
            it("2", () => {
                expect(incremental.Add("2")).to.equal(2);
            });
        });
        describe("returns the sum when its just two numbers", () => {
            it("1,0", () => {
                expect(incremental.Add("1,0")).to.equal(1);
            });
            it("0,1", () => {
                expect(incremental.Add("0,1")).to.equal(1);
            });
    });
        
    it("handles an unknown amount of numbers", () => {
        expect(incremental.Add("0,1,2")).to.equal(3);
    });

    describe("handles new lines as delimiters", () => {
        it("instead of commas", () => {
            expect(incremental.Add("0\n1\n2")).to.equal(3);
        });
        it("in between commas", () => {
            expect(incremental.Add("0,1\n2")).to.equal(3);
        });
    });
    describe("works with functions that start with //", () => {
        it(";",() => {
            expect(incremental.Add("//;/n1;2")).to.equal(3);
        });
        it(':', () => {
            expect(incremental.Add("//:/n2:2")).to.equal(4);
        });
    })
    describe("when given a negative number throws an exception", () => {
        it("//;/n1;-2", () => {
            expect(() => incremental.Add("//;/n1;-2")).to.throw();
        });
        it("//;/n-1;2", () => {
            expect(() => incremental.Add("//;/n-1;2")).to.throw();
        });
        describe("of type 'negatives not allowed:",() => {
            it("-2'", () => {
                let error = "negatives not allowed: -2";
                expect(() => incremental.Add("//;/n1;-2")).to.throw(error);
            });
            it("-1", () => {
                let error = "negatives not allowed: -1";
                expect(() => incremental.Add("//;/n-1;2")).to.throw(error);
            });
            it("-1 -2", () => {
                let error = "negatives not allowed: -1 -2";
                expect(() => incremental.Add("//;/n-1;-2")).to.throw(error);
            });
        });
    });
    describe("ignores numbers bigger than 1000", () => {
        it("1000", () => {
            expect(incremental.Add("//;/n1;1000")).to.equal(1001);
        });
        it("1001", () => {
            expect(incremental.Add("//;/n0;1001")).to.equal(0);
        });
        it("1031", () => {
            expect(incremental.Add("//;/n4;1031")).to.equal(4);
        });
    });
    describe("handles delimiters of any lenght", () => {
        it("..:", () => {
            expect(incremental.Add("//[..:]/n1..:3")).to.equal(4);
        });
    });
});