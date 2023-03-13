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
    return {value: card_value_to_number(card[0]), suit:card[1]}
}
function hand_input_to_card_array(hand){ 
    for (let i=0; i<5; i++){
        hand[i] = card_input_to_card_object(hand[i])
    }
    return hand
}
function process_poker_game_line_input(string){
    string = string.split(" ")
    return [
        hand_input_to_card_array(string.slice(1,6)),
        hand_input_to_card_array(string.slice(7,12))
    ]
}

export {
    card_value_to_number,
    card_input_to_card_object,
    hand_input_to_card_array,
    process_poker_game_line_input
} ;

