export function Add(string){
    if (isEmpty(string)) return 0;
    let numbers = numbersFrom(string)
    return sumOf(numbers)
}

function sumOf(array){
    let sum = 0;
    for (let i in array){
        sum += stringToNumber(array[i])
    }
    return sum
}

function numbersFrom(string){
    let delimiters = ["\n",","];
    if (beginsWithBackSlashes(string)) {
        delimiters.push(string.charAt(2))
        string = string.slice(5)
    }
    return string.split(RegExp(delimiters.join("|"),"gi"));
}

function beginsWithBackSlashes(string){
    return string.slice(0,2) === "//"
}

function isEmpty(string){
    return string === "";
}

function stringToNumber(string){
    return parseInt(string);
}
