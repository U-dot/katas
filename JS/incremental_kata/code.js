export function Add(string){
    if (isEmpty(string)) return 0;
    let numbers = numbersFrom(string);

    if (has_negatives(numbers)) throwNegativeNumbersError(string);
    
    return sumOf(numbers);
}
function throwNegativeNumbersError(string){
    let error = "negatives not allowed: ";
    let negativeNumbers = negativeNumbersFrom(string);
    throw TypeError(error.concat(negativeNumbers.join(" ")));
}
function negativeNumbersFrom(string){
    let stringNumbers = stringNumbersFrom(string)
    return stringNumbers.filter(num => is_negative_string_number(num))
}
function is_negative_string_number(string){
    return string[0] === '-';
}
function has_negatives(num_array){
    return num_array.some(num => num<0);
}
function sumOf(array){
    let sum = 0;
    for (let i in array){
        sum += array[i];
    }
    return sum;
}

function numbersFrom(string){
    let array_of_string_numbers = stringNumbersFrom(string);
    let array_of_numbers = string_array_to_int_array(array_of_string_numbers);
    return removeNumbersBiggerThan1000(array_of_numbers);
}
function removeNumbersBiggerThan1000(array){
    return array.filter(num => num <= 1000);
}
function string_array_to_int_array(array){
    return array.map((num) => parseInt(num));
}
function stringNumbersFrom(string){
    let delimiters = delimitersFrom(string);
    if (beginsWithBackSlashes(string)) {
        let index = string.indexOf('/n') + 2;
        string = string.slice(index);
    }
    return splitStringByCharsOnArray(string, delimiters);
}
function delimitersFrom(string){
    let delimiters = ["\n",","];
    if (beginsWithBackSlashes(string)) {
        
        if(hasCompleteSquareBrackets(string)){
            let new_delimiter = delimitersInsideSquareBrackets(string);
            delimiters.push(new_delimiter);
        }
        else {
            delimiters.push(string.charAt(2));
        }
    }
    return delimiters;
}

function delimitersInsideSquareBrackets(string) {
    return string.match(/\[(.*?)\]/)[1];
}
function hasCompleteSquareBrackets(string) {
    return string.match(/\[(.*?)\]/);
}
function splitStringByCharsOnArray(string,array){
    return string.split(RegExp(array.join("|"),"gi"));
}
function beginsWithBackSlashes(string){
    return string.slice(0,2) === "//";
}
function isEmpty(string){
    return string === "";
}
