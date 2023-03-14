import { it, describe } from "mocha";
import { expect } from "chai";
import * as func from "./code";

describe("dummy func:", () => {
    describe("dummy test:", () => {
        it("dummy", () => {
            let variable = 2;
            let expected = 2;
            expect(variable).to.equal(expected);
        });
    });
});

describe("process input:", () => {
    describe("convert card value to a number:", () => {
        it("2", () => {
            let variable = func.card_value_to_number("2");
            expect(variable).to.equal(2);
        });
        it("3", () => {
            let variable = func.card_value_to_number("3");
            expect(variable).to.equal(3);
        });
        it("J", () => {
            let variable = func.card_value_to_number("J");
            expect(variable).to.equal(11);
        });
        it("Q", () => {
            let variable = func.card_value_to_number("Q");
            expect(variable).to.equal(12);
        });
        it("K", () => {
            let variable = func.card_value_to_number("K");
            expect(variable).to.equal(13);
        });
        it("A", () => {
            let variable = func.card_value_to_number("A");
            expect(variable).to.equal(14);
        });
    });
    describe("card input to card object:", () => {
        it("2H", () => {
            let variable = func.card_input_to_card_object("2H");
            let expected = {value:2, suit:'H'};
            expect(variable).to.deep.equal(expected);
        });
        it("3D", () => {
            let variable = func.card_input_to_card_object("3D");
            let expected = {value:3, suit:'D'};
            expect(variable).to.deep.equal(expected);
        });
        it("AS", () => {
            let variable = func.card_input_to_card_object("AS");
            let expected = {value:14, suit:'S'};
            expect(variable).to.deep.equal(expected);
        });
        it("KD", () => {
            let variable = func.card_input_to_card_object("KD");
            let expected = {value:13, suit:'D'};
            expect(variable).to.deep.equal(expected);
        });
    });
    describe("hand input to hand object:", () => {
        it("black hand example 2H 3D 5S 9C KD", () => {
            let variable = func.hand_input_to_card_array(["2H", "3D", "5S", "9C", "KD"])
            let expected = {
                type: 0,
                rank: 10,
                cards: [
                    {value:2, suit:'H'},
                    {value:3, suit:'D'},
                    {value:5, suit:'S'},
                    {value:9, suit:'C'},
                    {value:13, suit:'D'},
                ]
            };
            expect(variable).to.deep.equal(expected);
        });
        it("white hand example 2C 3H 4S 8C AH", () => {
            let variable = func.hand_input_to_card_array(["2C", "3H", "4S", "8C", "AH"])
            let expected = {
                type: 0,
                rank: 14,
                cards: [
                    {value:2, suit:'C'},
                    {value:3, suit:'H'},
                    {value:4, suit:'S'},
                    {value:8, suit:'C'},
                    {value:14, suit:'H'},
                ]
            };
            expect(variable).to.deep.equal(expected);
        });
        it("hand example 5C 3H 4S 2C AH", () => {
            let variable = func.hand_input_to_card_array(["5C", "3H", "4S", "2C", "AH"])
            let expected = {
                type: 0,
                rank: 14,
                cards: [
                    {value:2, suit:'C'},
                    {value:3, suit:'H'},
                    {value:4, suit:'S'},
                    {value:5, suit:'C'},
                    {value:14, suit:'H'},
                ]
            };
            expect(variable).to.deep.equal(expected);
        });
    });
    describe("process input line:", () => {
        it("Black: 2H 3D 5S 9C KD White: 2C 3H 4S 8C AH", () => {
            let variable = func.process_poker_game_line_input("Black: 2H 3D 5S 9C KD White: 2C 3H 4S 8C AH");
            let expected = [
                {
                    type: 0,
                    rank: 13,
                    cards: [
                        {value:2, suit:'H'},
                        {value:3, suit:'D'},
                        {value:5, suit:'S'},
                        {value:9, suit:'C'},
                        {value:13, suit:'D'},
                    ]
                },
                {
                    type: 0,
                    rank: 14,
                    cards: [
                        {value:2, suit:'C'},
                        {value:3, suit:'H'},
                        {value:4, suit:'S'},
                        {value:8, suit:'C'},
                        {value:14, suit:'H'},
                    ]
                }
            ];
                expect(variable).to.deep.equal(expected);
        });
        it("Black: 2H 4S 4C 2D 4H White: 2S 8S AS QS 3S full house", () => {
            let variable = func.process_poker_game_line_input("Black: 2H 4S 4C 2D 4H White: 2S 8S AS QS 3S");
            let expected = [
                {
                    type: 6,
                    rank: 4,
                    cards: [
                        {value:2, suit:'H'},
                        {value:2, suit:'D'},
                        {value:4, suit:'S'},
                        {value:4, suit:'C'},
                        {value:4, suit:'H'},    
                    ]
                },
                {
                    type: 5,
                    rank: 14,
                    cards: [
                        {value:2, suit:'S'},
                        {value:3, suit:'S'},
                        {value:8, suit:'S'},
                        {value:12, suit:'S'},
                        {value:14, suit:'S'},
                    ]
                }
            ];
                expect(variable).to.deep.equal(expected);
        });
    });
    //todo: process 4 input lines
});

describe("scoring functions:", () => {
    describe("Flush:", () => {
        it("different", () => {
            let hand = {
                type: 6,
                rank: 4,
                cards: [
                    {value:2, suit:'H'},
                    {value:4, suit:'S'},
                    {value:4, suit:'S'},
                    {value:2, suit:'S'},
                    {value:4, suit:'S'},
                ]
            }     
            let variable = func.is_flush(hand);
            let expected = false;
            expect(variable).to.equal(expected);
        });
        it("same: three of a kind", () => {
            let hand = {
                type: 1,
                rank: ,
                cards: [
                    {value:2, suit:'S'},
                    {value:4, suit:'S'},
                    {value:1, suit:'S'},
                    {value:3, suit:'S'},
                    {value:4, suit:'S'},
                ]
            }
            let variable = func.is_flush(hand);
            let expected = true;
            expect(variable).to.equal(expected);
        });
    });
    describe("straight:", () => {
        it("not straight full house", () => {
            let hand =  {      
                type: 6,       
                rank: 4,  
                cards: [
                    {value:2, suit:'H'},
                    {value:4, suit:'S'},
                    {value:4, suit:'S'},
                    {value:2, suit:'S'},
                    {value:4, suit:'S'},
                ]
            }
            let variable = func.is_straight(hand);
            let expected = false;
            expect(variable).to.equal(expected);
        });
        it("straight", () => {
            let hand =   {
                type: 4,
                rank: 6,
                cards:    [
                    {value:2, suit:'H'},
                    {value:3, suit:'S'},
                    {value:4, suit:'S'},
                    {value:5, suit:'S'},
                    {value:6, suit:'S'},
                ]
            }
            let variable = func.is_straight(hand);
            let expected = true;
            expect(variable).to.equal(expected);
        });
        it("straight with A", () => {
            let hand = {
                type: 0,
                rank: 14,
                cards:    [
                    {value:2, suit:'H'},
                    {value:3, suit:'S'},
                    {value:4, suit:'S'},
                    {value:5, suit:'S'},
                    {value:14, suit:'S'},
                ]
            }
            let variable = func.is_straight(hand);
            let expected = true;
            expect(variable).to.equal(expected);
        });
    });
    describe("with A:", () => {
        it("without", () => {
            let hand = 
            {
                type: 0,
                rank: 13,
                cards:    [
                    {value:2, suit:'H'},
                    {value:3, suit:'S'},
                    {value:4, suit:'S'},
                    {value:5, suit:'S'},
                    {value:13, suit:'S'},
                ]
            }
            let variable = func.has_an_A(hand);
            let expected = false;
            expect(variable).to.equal(expected);
        });
        it("with", () => {
            let hand =  {
                type: 4,
                rank: 5,
                cards:    [
                    {value:2, suit:'H'},
                    {value:3, suit:'S'},
                    {value:4, suit:'S'},
                    {value:5, suit:'S'},
                    {value:14, suit:'S'},
                ]
            } 
            let variable = func.has_an_A(hand);
            let expected = true;
            expect(variable).to.equal(expected);
        });
    });
    describe("is straight flush:", () => {
        it("is not at all", () => {
            let hand = {
                type: 0,
                rank: 13,
                cards:    [
                    {value:2, suit:'H'},
                    {value:3, suit:'S'},
                    {value:4, suit:'S'},
                    {value:5, suit:'S'},
                    {value:13, suit:'S'},
                ]
            } 
            let variable = func.is_straight_flush(hand);
            let expected = false;
            expect(variable).to.equal(expected);
        });
        it("is not flush", () => {
            let hand = {
                type: 4,
                rank: 6,
                cards:    [
                    {value:2, suit:'H'},
                    {value:3, suit:'S'},
                    {value:4, suit:'S'},
                    {value:5, suit:'S'},
                    {value:6, suit:'S'},
                ]
            }      
            let variable = func.is_straight_flush(hand);
            let expected = false;
            expect(variable).to.equal(expected);
        });
        it("is not straight", () => {
            let hand = {
                type: 5,
                rank: 7,
                cards:    [
                    {value:2, suit:'S'},
                    {value:3, suit:'S'},
                    {value:4, suit:'S'},
                    {value:5, suit:'S'},
                    {value:7, suit:'S'},
                ]
            }
            let variable = func.is_straight_flush(hand);
            let expected = false;
            expect(variable).to.equal(expected);
        });
        it("is straight flush", () => {
            let hand = {
                type: 8,
                rank: 6,
                cards:    [
                    {value:2, suit:'S'},
                    {value:3, suit:'S'},
                    {value:4, suit:'S'},
                    {value:5, suit:'S'},
                    {value:6, suit:'S'},
                ]
            }    
            let variable = func.is_straight_flush(hand);
            let expected = true;
            expect(variable).to.equal(expected);
        });
    });
    
});

describe("game logic:", () => {
    describe("highest requirement fulfilled", () => {
        it("is straight flush", () => {
            let hand =   {
                type: 8,
                rank: 6,
                cards:    [
                    {value:2, suit:'S'},
                    {value:3, suit:'S'},
                    {value:4, suit:'S'},
                    {value:5, suit:'S'},
                    {value:6, suit:'S'},
                ]
            } 
            let variable = func.highest_requirement_fulfilled(hand);
            let expected = 8;
            expect(variable).to.equal(expected);
        });
        it("is straight", () => {
            let hand = {
                type: 4,
                rank: 6,
                cards:    [
                    {value:2, suit:'H'},
                    {value:3, suit:'S'},
                    {value:4, suit:'S'},
                    {value:5, suit:'S'},
                    {value:6, suit:'S'},
                ]
            }     
            let variable = func.highest_requirement_fulfilled(hand);
            let expected = 4;
            expect(variable).to.equal(expected);
        });
        it("is flush but not straight", () => {
            let hand = {
                type: 4,
                rank: 6,
                cards:    [
                    {value:2, suit:'H'},
                    {value:3, suit:'S'},
                    {value:4, suit:'S'},
                    {value:5, suit:'S'},
                    {value:6, suit:'S'},
                ]
            } 
            let variable = func.is_straight_flush(hand);
            let expected = false;
            expect(variable).to.equal(expected);
        });
    });
    describe("straight flush rank:", () => {
        it("2-6", () => {
            let hand = {
                type: 8,
                rank: 6,
                cards:    [
                    {value:2, suit:'S'},
                    {value:3, suit:'S'},
                    {value:4, suit:'S'},
                    {value:5, suit:'S'},
                    {value:6, suit:'S'},
                ]
            }          
            let variable = func.straight_flush_rank(hand);
            let expected = 6;
            expect(variable).to.equal(expected);
        });
        it("10-14", () => {
            let hand =  {
                type: 8,
                rank: 14,
                cards:    [
                    {value:10, suit:'H'},
                    {value:11, suit:'H'},
                    {value:12, suit:'H'},
                    {value:13, suit:'H'},
                    {value:14, suit:'H'},
                ]
            }  
            let variable = func.straight_flush_rank(hand);
            let expected = 14;
            expect(variable).to.equal(expected);
        });
    });
    describe("numeric_rank:", () => {
        it("straight flush rank", () => {
            let hand =  {
                type: 8,
                rank: 6,
                cards:    [
                    {value:2, suit:'S'},
                    {value:3, suit:'S'},
                    {value:4, suit:'S'},
                    {value:5, suit:'S'},
                    {value:6, suit:'S'},
                ]
            } 
            let variable = func.numeric_rank(hand);
            let expected = 6;
            expect(variable).to.equal(expected);
        });
    });
});
