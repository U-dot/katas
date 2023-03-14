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

//----------------->

function highest_requirement_fulfilled(hand){
    switch(true){
        case is_straight_flush(hand): return 
    }
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
} ;

