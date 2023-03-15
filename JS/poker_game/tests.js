import { it, describe } from "mocha";
import { expect } from "chai";
import * as func from "./code";



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
            let expected = [
                {value:2, suit:'H'},
                {value:3, suit:'D'},
                {value:5, suit:'S'},
                {value:9, suit:'C'},
                {value:13, suit:'D'},
            ];
            expect(variable).to.deep.equal(expected);
        });
        it("white hand example 2C 3H 4S 8C AH", () => {
            let variable = func.hand_input_to_card_array(["2C", "3H", "4S", "8C", "AH"])
            let expected = [
                {value:2, suit:'C'},
                {value:3, suit:'H'},
                {value:4, suit:'S'},
                {value:8, suit:'C'},
                {value:14, suit:'H'},
            ];
            expect(variable).to.deep.equal(expected);
        });
        it("hand example 5C 3H 4S 2C AH", () => {
            let variable = func.hand_input_to_card_array(["5C", "3H", "4S", "2C", "AH"])
            let expected = [
                {value:2, suit:'C'},
                {value:3, suit:'H'},
                {value:4, suit:'S'},
                {value:5, suit:'C'},
                {value:14, suit:'H'},
            ];
            expect(variable).to.deep.equal(expected);
        });
    });
    describe("process input line:", () => {
        it("Black: 2H 3D 5S 9C KD White: 2C 3H 4S 8C AH", () => {
            let variable = func.process_poker_game_line_input("Black: 2H 3D 5S 9C KD White: 2C 3H 4S 8C AH");
            let expected = [
                [
                    {value:2, suit:'H'},
                    {value:3, suit:'D'},
                    {value:5, suit:'S'},
                    {value:9, suit:'C'},
                    {value:13, suit:'D'},
                ],
                [
                    {value:2, suit:'C'},
                    {value:3, suit:'H'},
                    {value:4, suit:'S'},
                    {value:8, suit:'C'},
                    {value:14, suit:'H'},
                ]
            ];
                expect(variable).to.deep.equal(expected);
        });
        it("Black: 2H 4S 4C 2D 4H White: 2S 8S AS QS 3S", () => {
            let variable = func.process_poker_game_line_input("Black: 2H 4S 4C 2D 4H White: 2S 8S AS QS 3S");
            let expected = [
                [
                    {value:2, suit:'H'},
                    {value:2, suit:'D'},
                    {value:4, suit:'S'},
                    {value:4, suit:'C'},
                    {value:4, suit:'H'},
                ],
                [
                    {value:2, suit:'S'},
                    {value:3, suit:'S'},
                    {value:8, suit:'S'},
                    {value:12, suit:'S'},
                    {value:14, suit:'S'},
                ]
            ];
                expect(variable).to.deep.equal(expected);
        });
    });
});

describe("scoring functions:", () => {
    describe("Pair:", () => {
        it("is not", () => {
            let hand =                [
                {value:8, suit:'H'},
                {value:3, suit:'S'},
                {value:7, suit:'S'},
                {value:5, suit:'S'},
                {value:14, suit:'S'},
            ]
            let variable = func.is_pair(hand);
            let expected = false;
            expect(variable).to.equal(expected);
        });
        it("is", () => {
            let hand =                
            [
                {value:6, suit:'H'},
                {value:3, suit:'S'},
                {value:7, suit:'S'},
                {value:3, suit:'S'},
                {value:14, suit:'S'},
            ]
            let variable = func.is_pair(hand);
            let expected = true;
            expect(variable).to.equal(expected);
        });
    });
    describe("dictionary of ocurrences",() =>{
        it("one of each", () => {
            let hand =                
            [
                {value:2, suit:'H'},
                {value:3, suit:'S'},
                {value:7, suit:'S'},
                {value:5, suit:'S'},
                {value:14, suit:'S'},
            ]
            let variable = func.number_of_ocurrences_dictionary(hand);
            let expected = {2:1,3:1,5:1,7:1,14:1};
            expect(variable).to.deep.equal(expected);
        });
        it("a pair", () => {
            let hand =                
            [
                {value:2, suit:'H'},
                {value:3, suit:'S'},
                {value:7, suit:'S'},
                {value:3, suit:'S'},
                {value:14, suit:'S'},
            ]
            let variable = func.number_of_ocurrences_dictionary(hand);
            let expected = {2:1,3:2,7:1,14:1};
            expect(variable).to.deep.equal(expected);
        });
    });
    describe("Flush:", () => {
        it("different", () => {
            let hand =                [
                {value:2, suit:'H'},
                {value:4, suit:'S'},
                {value:4, suit:'S'},
                {value:2, suit:'S'},
                {value:4, suit:'S'},
            ]
            let variable = func.is_flush(hand);
            let expected = false;
            expect(variable).to.equal(expected);
        });
        it("same", () => {
            let hand =                [
                {value:2, suit:'S'},
                {value:4, suit:'S'},
                {value:1, suit:'S'},
                {value:3, suit:'S'},
                {value:4, suit:'S'},
            ]
            let variable = func.is_flush(hand);
            let expected = true;
            expect(variable).to.equal(expected);
        });
    });
    describe("straight:", () => {
        it("not straight", () => {
            let hand =                [
                {value:2, suit:'H'},
                {value:4, suit:'S'},
                {value:4, suit:'S'},
                {value:2, suit:'S'},
                {value:4, suit:'S'},
            ]
            let variable = func.is_straight(hand);
            let expected = false;
            expect(variable).to.equal(expected);
        });
        it("straight", () => {
            let hand =                [
                {value:2, suit:'H'},
                {value:3, suit:'S'},
                {value:4, suit:'S'},
                {value:5, suit:'S'},
                {value:6, suit:'S'},
            ]
            let variable = func.is_straight(hand);
            let expected = true;
            expect(variable).to.equal(expected);
        });
        it("straight with A", () => {
            let hand =                [
                {value:2, suit:'H'},
                {value:3, suit:'S'},
                {value:4, suit:'S'},
                {value:5, suit:'S'},
                {value:14, suit:'S'},
            ]
            let variable = func.is_straight(hand);
            let expected = true;
            expect(variable).to.equal(expected);
        });
    });
    describe("with A:", () => {
        it("without", () => {
            let hand =                [
                {value:2, suit:'H'},
                {value:3, suit:'S'},
                {value:4, suit:'S'},
                {value:5, suit:'S'},
                {value:13, suit:'S'},
            ]
            let variable = func.has_an_A(hand);
            let expected = false;
            expect(variable).to.equal(expected);
        });
        it("with", () => {
            let hand =                [
                {value:2, suit:'H'},
                {value:3, suit:'S'},
                {value:4, suit:'S'},
                {value:5, suit:'S'},
                {value:14, suit:'S'},
            ]
            let variable = func.has_an_A(hand);
            let expected = true;
            expect(variable).to.equal(expected);
        });
    });
    describe("is straight flush:", () => {
        it("is not at all", () => {
            let hand =                [
                {value:2, suit:'H'},
                {value:3, suit:'S'},
                {value:4, suit:'S'},
                {value:5, suit:'S'},
                {value:13, suit:'S'},
            ]
            let variable = func.is_straight_flush(hand);
            let expected = false;
            expect(variable).to.equal(expected);
        });
        it("is not flush", () => {
            let hand =                [
                {value:2, suit:'H'},
                {value:3, suit:'S'},
                {value:4, suit:'S'},
                {value:5, suit:'S'},
                {value:6, suit:'S'},
            ]
            let variable = func.is_straight_flush(hand);
            let expected = false;
            expect(variable).to.equal(expected);
        });
        it("is not straight", () => {
            let hand =                [
                {value:2, suit:'S'},
                {value:3, suit:'S'},
                {value:4, suit:'S'},
                {value:5, suit:'S'},
                {value:7, suit:'S'},
            ]
            let variable = func.is_straight_flush(hand);
            let expected = false;
            expect(variable).to.equal(expected);
        });
        it("is straight flush", () => {
            let hand =                [
                {value:2, suit:'S'},
                {value:3, suit:'S'},
                {value:4, suit:'S'},
                {value:5, suit:'S'},
                {value:6, suit:'S'},
            ]
            let variable = func.is_straight_flush(hand);
            let expected = true;
            expect(variable).to.equal(expected);
        });
    });
    
});

describe("game logic:", () => {
    describe("highest requirement fulfilled", () => {
        it("straight flush", () => {
            let hand =                [
                {value:2, suit:'S'},
                {value:3, suit:'S'},
                {value:4, suit:'S'},
                {value:5, suit:'S'},
                {value:6, suit:'S'},
            ]
            let variable = func.highest_requirement_fulfilled(hand);
            let expected = 8;
            expect(variable).to.equal(expected);
        });
        it("straight", () => {
            let hand =                [
                {value:2, suit:'H'},
                {value:3, suit:'S'},
                {value:4, suit:'S'},
                {value:5, suit:'S'},
                {value:6, suit:'S'},
            ]
            let variable = func.highest_requirement_fulfilled(hand);
            let expected = 4;
            expect(variable).to.equal(expected);
        });
        it("flush", () => {
            let hand =                [
                {value:2, suit:'S'},
                {value:3, suit:'S'},
                {value:4, suit:'S'},
                {value:5, suit:'S'},
                {value:7, suit:'S'},
            ]
            let variable = func.highest_requirement_fulfilled(hand);
            let expected = 5;
            expect(variable).to.equal(expected);
        });
        it("pair", () => {
            let hand =                [
                {value:2, suit:'S'},
                {value:3, suit:'S'},
                {value:4, suit:'S'},
                {value:5, suit:'S'},
                {value:2, suit:'H'},
            ]
            let variable = func.highest_requirement_fulfilled(hand);
            let expected = 1;
            expect(variable).to.equal(expected);
        });
        it("high card", () => {
            let hand =                [
                {value:2, suit:'S'},
                {value:7, suit:'S'},
                {value:4, suit:'S'},
                {value:5, suit:'S'},
                {value:6, suit:'H'},
            ]
            let variable =  func.highest_requirement_fulfilled(hand);
            let expected = 0;
            expect(variable).to.equal(expected);
        });
    });
    describe("numeric rank each type:", () => {
        describe("highest card:", () => {
        it("2-6", () => {
            let hand =                [
                {value:2, suit:'S'},
                {value:3, suit:'S'},
                {value:4, suit:'S'},
                {value:5, suit:'S'},
                {value:6, suit:'S'},
            ]
            let variable = func.highest_card(hand);
            let expected = 6;
            expect(variable).to.equal(expected);
        });
        it("10-14", () => {
            let hand =                [
                {value:10, suit:'H'},
                {value:11, suit:'H'},
                {value:12, suit:'H'},
                {value:13, suit:'H'},
                {value:14, suit:'H'},
            ]
            let variable = func.highest_card(hand);
            let expected = 14;
            expect(variable).to.equal(expected);
        });
        });
        it("6", () => {
            let hand =                [
                {value:2, suit:'S'},
                {value:3, suit:'S'},
                {value:4, suit:'S'},
                {value:5, suit:'S'},
                {value:6, suit:'S'},
            ]
            let variable = func.highest_card(hand);
            let expected = 6;
            expect(variable).to.equal(expected);
        });
        describe("by x times repeated card value:", () => {
            it("6 2 times", () => {
                let hand =                [
                    {value:2, suit:'S'},
                    {value:2, suit:'S'},
                    {value:6, suit:'S'},
                    {value:6, suit:'S'},
                    {value:6, suit:'S'},
                ]
                let variable = func.value_of_card_repeated_x_times(hand,2);
                let expected = 2;
                expect(variable).to.equal(expected);
            });
            it("6 3 times", () => {
                let hand =                [
                    {value:2, suit:'S'},
                    {value:2, suit:'S'},
                    {value:6, suit:'S'},
                    {value:6, suit:'S'},
                    {value:6, suit:'S'},
                ]
                let variable = func.value_of_card_repeated_x_times(hand,3);
                let expected = 6;
                expect(variable).to.equal(expected);
            });
        });
            
    });
    describe("numeric_rank:", () => {
        it("straight flush", () => {
            let hand =                [
                {value:2, suit:'S'},
                {value:3, suit:'S'},
                {value:4, suit:'S'},
                {value:5, suit:'S'},
                {value:6, suit:'S'},
            ]
            let variable = func.numeric_rank(hand,func.highest_requirement_fulfilled(hand));
            let expected = 6;
            expect(variable).to.equal(expected);
        });
        it("flush", () => {
            let hand =                [
                {value:2, suit:'S'},
                {value:3, suit:'S'},
                {value:4, suit:'S'},
                {value:5, suit:'S'},
                {value:7, suit:'S'},
            ]
            let variable = func.numeric_rank(hand,func.highest_requirement_fulfilled(hand));
            let expected = 7;
            expect(variable).to.equal(expected);
        });
        it("straight", () => {
            let hand =                [
                {value:2, suit:'S'},
                {value:3, suit:'S'},
                {value:4, suit:'S'},
                {value:5, suit:'S'},
                {value:6, suit:'H'},
            ]
            let variable = func.numeric_rank(hand,func.highest_requirement_fulfilled(hand));
            let expected = 6;
            expect(variable).to.equal(expected);
        });
        it("pair", () => {
            let hand =                [
                {value:2, suit:'S'},
                {value:2, suit:'S'},
                {value:4, suit:'S'},
                {value:5, suit:'S'},
                {value:6, suit:'H'},
            ]
            let variable = func.numeric_rank(hand,func.highest_requirement_fulfilled(hand));
            let expected = 2;
            expect(variable).to.equal(expected);
        });
        it("high card", () => {
            let hand =                [
                {value:2, suit:'S'},
                {value:4, suit:'S'},
                {value:5, suit:'S'},
                {value:6, suit:'S'},
                {value:7, suit:'H'},
            ]
            let variable = func.numeric_rank(hand,func.highest_requirement_fulfilled(hand));
            let expected = 7;
            expect(variable).to.equal(expected);
        });
    });
    describe("game logic function:", () => {
        it("straight flush vs straight", () => {
            let hand1 =                [
                {value:2, suit:'S'},
                {value:3, suit:'S'},
                {value:4, suit:'S'},
                {value:5, suit:'S'},
                {value:6, suit:'S'},
            ]
            let hand2 =                [
                {value:2, suit:'H'},
                {value:3, suit:'S'},
                {value:4, suit:'S'},
                {value:5, suit:'S'},
                {value:6, suit:'S'},
            ]
            let variable = func.game_logic(hand1,hand2);
            let expected = [0,8,6];// black or white, type, rank
            expect(variable).to.deep.equal(expected);
        });
        it(" straight vs straight flush", () => {
            let hand2 =                [
                {value:2, suit:'S'},
                {value:3, suit:'S'},
                {value:4, suit:'S'},
                {value:5, suit:'S'},
                {value:6, suit:'S'},
            ]
            let hand1 =                [
                {value:2, suit:'H'},
                {value:3, suit:'S'},
                {value:4, suit:'S'},
                {value:5, suit:'S'},
                {value:6, suit:'S'},
            ]
            let variable = func.game_logic(hand1,hand2);
            let expected = [1,8,6];// black or white, type, rank
            expect(variable).to.deep.equal(expected);
        });
        it(" straight vs flush", () => {
            let hand1 =                [
                {value:2, suit:'S'},
                {value:3, suit:'H'},
                {value:4, suit:'S'},
                {value:5, suit:'S'},
                {value:6, suit:'S'},
            ]
            let hand2 =                [
                {value:3, suit:'S'},
                {value:3, suit:'S'},
                {value:4, suit:'S'},
                {value:5, suit:'S'},
                {value:6, suit:'S'},
            ]
            let variable = func.game_logic(hand1,hand2);
            let expected = [1,5,6];// black or white, type, rank
            expect(variable).to.deep.equal(expected);
        });
        it(" straight vs straight flush with different rank", () => {
            let hand1 =                [
                {value:2, suit:'S'},
                {value:3, suit:'H'},
                {value:4, suit:'S'},
                {value:5, suit:'S'},
                {value:6, suit:'S'},
            ]
            let hand2 =                [
                {value:3, suit:'S'},
                {value:4, suit:'S'},
                {value:5, suit:'S'},
                {value:6, suit:'S'},
                {value:7, suit:'S'},
            ]
            let variable = func.game_logic(hand1,hand2);
            let expected = [1,8,7];// black or white, type, rank
            expect(variable).to.deep.equal(expected);
        });
        it(" pair vs pair with diff pair value", () => {
            let hand1 =                [
                {value:2, suit:'S'},
                {value:3, suit:'H'},
                {value:5, suit:'S'},
                {value:5, suit:'S'},
                {value:6, suit:'S'},
            ]
            let hand2 =                [
                {value:3, suit:'S'},
                {value:3, suit:'H'},
                {value:5, suit:'S'},
                {value:6, suit:'S'},
                {value:7, suit:'S'},
            ]
            let variable = func.game_logic(hand1,hand2);
            let expected = [0,1,5];// black or white, type, rank
            expect(variable).to.deep.equal(expected);
        });
        it(" pair vs pair with diff pair value", () => {
            let hand2 =                [
                {value:2, suit:'S'},
                {value:3, suit:'H'},
                {value:5, suit:'S'},
                {value:5, suit:'S'},
                {value:6, suit:'S'},
            ]
            let hand1 =                [
                {value:3, suit:'S'},
                {value:3, suit:'H'},
                {value:5, suit:'S'},
                {value:6, suit:'S'},
                {value:7, suit:'S'},
            ]
            let variable = func.game_logic(hand1,hand2);
            let expected = [1,1,5];// black or white, type, rank
            expect(variable).to.deep.equal(expected);
        });
        it("card vs itself", () => {
            let hand1 =                [
                {value:3, suit:'S'},
                {value:3, suit:'H'},
                {value:5, suit:'S'},
                {value:6, suit:'S'},
                {value:7, suit:'S'},
            ]
            let variable = func.game_logic(hand1,hand1);
            let expected = false;
            expect(variable).to.deep.equal(expected);
        });
    });
});

describe("user interaction:", () => {
    describe("output:", () => {
        describe("output array:", () => {
            it("white straight flush 6", () => {
                let arr = [1,8,6]
                let variable = func.output_arr(arr);
                let expected = ["White","straight flush","6"];
                expect(variable).to.deep.equal(expected);
            });
            describe("player:", () => {
                it("white", () => {
                    let variable = func.player_name(1);
                    let expected = "White";
                    expect(variable).to.equal(expected);
                });
            });
            it("black straight flush 6", () => {
                let arr = [0,8,6]
                let variable = func.output_arr(arr);
                let expected = ["Black","straight flush","6"];
                expect(variable).to.deep.equal(expected);
            });
            it("black flush 6", () => {
                let arr = [0,5,6]
                let variable = func.output_arr(arr);
                let expected = ["Black","flush","6"];
                expect(variable).to.deep.equal(expected);
            });
            describe("type:", () => {
                it("straight flush", () => {
                    let variable = func.hand_type_name(8);
                    let expected = "straight flush";
                    expect(variable).to.equal(expected);
                });
                it("flush", () => {
                    let variable = func.hand_type_name(5);
                    let expected = "flush";
                    expect(variable).to.equal(expected);
                });
                it("straight", () => {
                    let variable = func.hand_type_name(4);
                    let expected = "straight";
                    expect(variable).to.equal(expected);
                });
                it("pair", () => {
                    let variable = func.hand_type_name(1);
                    let expected = "pair";
                    expect(variable).to.equal(expected);
                });
                it("high card", () => {
                    let variable = func.hand_type_name(0);
                    let expected = "high card";
                    expect(variable).to.equal(expected);
                });
            });
            it("black flush 4", () => {
                let arr = [0,5,4]
                let variable = func.output_arr(arr);
                let expected = ["Black","flush","4"];
                expect(variable).to.deep.equal(expected);
            });
            describe("card:", () => {
                it("4", () => {
                    let variable = func.card_name(4);
                    let expected = "4";
                    expect(variable).to.equal(expected);
                });
                it("6", () => {
                    let variable = func.card_name(4);
                    let expected = "4";
                    expect(variable).to.equal(expected);
                });
                it("J", () => {
                    let variable = func.card_name(11);
                    let expected = "Joker";
                    expect(variable).to.equal(expected);
                });
                it("K", () => {
                    let variable = func.card_name(12);
                    let expected = "Queen";
                    expect(variable).to.equal(expected);
                });
                it("Q", () => {
                    let variable = func.card_name(13);
                    let expected = "King";
                    expect(variable).to.equal(expected);
                });
                it("A", () => {
                    let variable = func.card_name(14);
                    let expected = "Ace";
                    expect(variable).to.equal(expected);
                });
            });
            it("card vs itself", () => {
                let arr = false;
                let variable = func.output_arr(arr);
                let expected = false;
                expect(variable).to.deep.equal(expected);
            });
        });
        it("eg 1", () => {
            let arr = [1,0,14]
            let variable = func.output(arr);
            let expected = "White wins. - with high card: Ace";
            expect(variable).to.equal(expected);
        });
        it("eg 2", () => {
            let arr = [0,8,9]
            let variable = func.output(arr);
            let expected = "Black wins. - with straight flush: 9";
            expect(variable).to.equal(expected);
        });
    });
    describe("poker game full language processing:", () =>{
        it("Black: 2H 3D 5S 9C KD White: 2C 3H 4S 8C AH", () => {
            let variable = func.poker_game("Black: 2H 3D 5S 9C KD White: 2C 3H 4S 8C AH");
            let expected = "White wins. - with high card: Ace";
            expect(variable).to.equal(expected);
        });
        it("Black: 2H 3H 5S 6H 4H White: 2S 8S AS QS 3S", () => {
            let variable = func.poker_game("Black: 2H 3H 5S 6H 4H White: 2S 8S AS QS 3S");
            let expected = "White wins. - with flush: Ace";
            expect(variable).to.equal(expected);
        });
        it("Black: 2H 3H 5S 6H 4H White: 2H 3H 5S 6H 4H", () => {
            let variable = func.poker_game("Black: 2H 3H 5S 6H 4H White: 2H 3H 5S 6H 4H");
            let expected = "Tie.";
            expect(variable).to.equal(expected);
        });
    });
});
