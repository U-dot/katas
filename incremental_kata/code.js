export function Add(string){
    if (isEmpty(string)) return 0;
    let numbers = numbersFrom(string);
    if (hasNegatives(numbers)) throwNegativeNumbersError(string);
    
    return sumOf(numbers);
}
function throwNegativeNumbersError(string){
    let error = "negatives not allowed: ";
    let negativeNumbers = negativeNumbersFrom(string);
    throw TypeError(error.concat(negativeNumbers.join(" ")));
}
function negativeNumbersFrom(string){
    let stringNumbers = stringNumbersFrom(string)
    return stringNumbers.filter(num => isNegativeStringNumber(num))
}
function isNegativeStringNumber(string){
    return string[0] === '-';
}
function hasNegatives(numArray){
    return numArray.some(num => num<0);
}
function sumOf(array){
    let sum = 0;
    for (let i in array){
        sum += array[i];
    }
    return sum;
}

function numbersFrom(string){
    let arrayOfStringNumbers = stringNumbersFrom(string);
    let arrayOfNumbers = stringArrayToIntArray(arrayOfStringNumbers);
    return removeNumbersBiggerThan1000(arrayOfNumbers);
}
function removeNumbersBiggerThan1000(array){
    return array.filter(num => num <= 1000);
}
function stringArrayToIntArray(array){
    return array.map((string) => {
        let num = parseInt(string);

        if (num === null) throw TypeError("non-numeric element in array");
        return num;
    });
}

function stringNumbersFrom(string){
    let delimiters = delimitersFrom(string);
    if (beginsWithBackSlashes(string)) {
        let index = string.indexOf('\n')+1;
        string = string.slice(index);   
    }
    return splitStringByCharsOnArray(string, delimiters);
}
function delimitersFrom(string){
    let delimiters = ["\n",","];
    if (beginsWithBackSlashes(string)) {
        
        if(hasCompleteSquareBrackets(string)){
            let newDelimiter = delimitersInsideSquareBrackets(string);
            delimiters.push(...newDelimiter);
        }
        else {
            delimiters.push(string.charAt(2));
        }
    }
    return delimiters;
}
function delimitersInsideSquareBrackets(string) {
    return string.match(/\[(.*?)\]/g)
        .map((delimiter) => delimiter.slice(1,-1));
}
function hasCompleteSquareBrackets(string) {
    return string.match(/\[(.*?)\]/);
}
function splitStringByCharsOnArray(string,array){
    let myRegEx = array.join("|")
    myRegEx = "["+myRegEx+"]"
    return string.split( new RegExp(myRegEx));
}

function beginsWithBackSlashes(string){
    return string.slice(0,2) === "//";
}
function isEmpty(string){
    return string === "";
}
