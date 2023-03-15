//Comparar dos manos para evaluar la ganadora

//"Black: 2H 3D 5S 9C KD White: 2C 3H 4S 8C AH"
//White wins. - with high card: Ace

function card_value_to_number(value){
    switch(true){
        case value == 'J': return 11;
        case value == 'Q': return 12;
        case value == 'K': return 13;
        case value == 'A': return 14;
        default: return Number(value)
    }
}
function card_input_to_card_object(card){ 
    return {value: card_value_to_number(card[0]), suit:card[1]};
}
function hand_input_to_card_array(hand){ 
    hand = hand.map((card) => card_input_to_card_object(card));
    hand = hand.sort((c1,c2)=>{return c1.value-c2.value});
    return hand;
}
function process_poker_game_line_input(string){
    string = string.split(" ");
    return [
        hand_input_to_card_array(string.slice(1,6)),
        hand_input_to_card_array(string.slice(7,12))
    ];
}

//------------------->
function is_pair(hand){
    let ocurrences = number_of_ocurrences_dictionary(hand);
    for (let value in ocurrences){
        if (ocurrences[value] == 2){
            return true;
        }
    }
    return false;
}

function is_flush(hand){
    const first_suit = hand[0].suit;
    for(let i=1; i<5; i++){
        if (hand[i].suit!= first_suit){
            return false;
        }
    }   
    return true;
}

function is_straight(hand){
    
    if(has_an_A(hand)){
        const first_value = 1;
        for(let i=0;i<4;i++){
            if (hand[i].value!=first_value+i+1){
                return false;
            }
        }
        return true
    }
    else{
        const first_value = hand[0].value;
        for(let i=1;i<5;i++){
            if (hand[i].value!=first_value+i){
                return false;
            }
        }
        return true;
    }
}

function has_an_A(hand){
    return hand[4].value === 14;
}

function is_straight_flush(hand){
    return is_flush(hand) && is_straight(hand);
}

function number_of_ocurrences_dictionary(hand){
    let ocurrences = {} 
    hand.map((card) => {
        if (typeof ocurrences[card.value] === 'undefined'){
            ocurrences[card.value] = 0;
        }  
        ocurrences[card.value] += 1;
    });
    return ocurrences;
}

//----------------->

function highest_requirement_fulfilled(hand){
    switch(true){
        case is_straight_flush(hand): return 8;
        case is_flush(hand): return 5;
        case is_straight(hand): return 4;
        case is_pair(hand): return 1;
        default: return 0;
    }
}
//----------------->

function highest_card(hand){
    return hand[4].value;
}

function value_of_card_repeated_x_times(hand, x){
    let ocurrences = number_of_ocurrences_dictionary(hand);
    for (let value in ocurrences){
        if (ocurrences[value] == x){
            return Number(value);
        }
    }
    return false;
}

function numeric_rank (hand, type){
    switch(true){
        case type == 8: return highest_card(hand);
        case type == 5: return highest_card(hand);
        case type == 4: return highest_card(hand);
        case type == 1: return value_of_card_repeated_x_times(hand,2);
        case type == 0: return highest_card(hand);
    }
}

function game_logic(hand_a,hand_b){
    //if I did this again I would 
    //make hand an object with the following aspects:
    //cards, type, initial_rank, ocurrences
    let type_a = highest_requirement_fulfilled(hand_a);
    let type_b = highest_requirement_fulfilled(hand_b);
    let rank_a = numeric_rank(hand_a,type_a);
    let rank_b = numeric_rank(hand_b,type_b)
    
    if (type_a<type_b || (type_a==type_b && rank_a<rank_b)){
        return [1,type_b,rank_b];
    }
    if (type_b<type_a || (type_a==type_b && rank_b<rank_a)){
        return [0,type_a,rank_a];
    }

    //to implement  type_a==type_b && rank_b==rank_a
    //something like:
    //resolve_tie(hand_a,hand_b)
    return false;
}

function output_arr(arr){
    if(arr==false){
        return false;
    }
    return [
        player_name(arr[0]),
        hand_type_name(arr[1]),
        card_name(arr[2])
    ];
}
function player_name(num){
    switch(true){
        case num == 0: return "Black";
        case num == 1: return "White";
    }
}
function hand_type_name(num){
    switch(true){
        case num == 8: return "straight flush";
        case num == 5: return "flush";
        case num == 4: return "straight";
        case num == 1: return "pair";
        case num == 0: return "high card";
    }
}
function card_name(num){
    switch(true){
        case num == 11: return "Joker";
        case num == 12: return "Queen";
        case num == 13: return "King";
        case num == 14: return "Ace";
        default: return String(num);
    }
}
function output(arr){
    let ans = output_arr(arr)
    if (ans == false){
        return "Tie."
    }
    return ans[0]+" wins. - with "+ans[1]+": "+ans[2];
}
function poker_game(input){
    let hands = process_poker_game_line_input(input);
    let result = game_logic(hands[0], hands[1]);
    return output(result)
}

export {
    card_value_to_number,
    card_input_to_card_object,
    hand_input_to_card_array,
    process_poker_game_line_input,
    is_flush,
    is_straight,
    has_an_A,
    is_straight_flush,
    highest_requirement_fulfilled,
    numeric_rank,
    is_pair,
    number_of_ocurrences_dictionary,
    game_logic,
    highest_card,
    value_of_card_repeated_x_times,
    output_arr,
    player_name,
    hand_type_name,
    card_name,
    output,
    poker_game,
} ;

