import { it, describe } from "mocha";
import { expect } from "chai";
import * as incremental from "./code";



describe("Step 1: The Add method", () => {
    it("returns 0 to an empty string", () => {
        let emptyString = "";
        expect(incremental.Add(emptyString)).to.equal(0);
    });
    describe("returns the number when its just one number", () => {
        it("1", () =>{
            let singleNumber = "1";
            expect(incremental.Add(singleNumber)).to.equal(1);
        });
        it("2", () =>{
            let singleNumber = "2";
            expect(incremental.Add(singleNumber)).to.equal(2);
        });
    });
    describe("returns the sum when its just two numbers", () => {
        it("1,0", () =>{
            let twoNumbers = "1,0";
            expect(incremental.Add(twoNumbers)).to.equal(1);
        });
        it("0,1", () =>{
            let twoNumbers = "0,1";
            expect(incremental.Add(twoNumbers)).to.equal(1);
        });
    });
});

describe("Step 2: The Add method", () => {
    it("handles an unknown amount of numbers", () => {
        let threeNumbers = "0,1,2";
        expect(incremental.Add(threeNumbers)).to.equal(3);
    });
});
describe("Step 3: The Add method handles new lines", () => {
    it("instead of commas", () => {
        let numbersSeparatedByNewLines = "0\n1\n2";
        expect(incremental.Add(numbersSeparatedByNewLines)).to.equal(3);
    });
    it("in between commas", () => {
        let numbersSeparatedByNewLines = "0,1\n2";
        expect(incremental.Add(numbersSeparatedByNewLines)).to.equal(3);
    });
});
describe("Step 4: The add method works with functions that start with //", () => {
    it(";",() => {
        let numbers_with_given_separator = "//;/n1;2";
        expect(incremental.Add(numbers_with_given_separator)).to.equal(3);
    })
    it(':', () => {
        let numbers_with_given_separator = "//:/n2:2";
        expect(incremental.Add(numbers_with_given_separator)).to.equal(4);
    });
})
