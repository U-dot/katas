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
    return string.split(/[, \n]/)
}

function isEmpty(string){
    return string === "";
}

function stringToNumber(string){
    return parseInt(string)
}
