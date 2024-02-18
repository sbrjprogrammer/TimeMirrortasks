function sumOfNumbers(numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
function reverseString(inputString) {
    return inputString.split('').reverse().join('');
}

function averageOfNumbers(numbers) {
    if (numbers.length === 0) {
        return 0; 
    }
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}


function countVowels(inputString) {
    const vowels = "aeiouAEIOU";
    return [...inputString].filter(char => vowels.includes(char)).length;
}
function largestNumber(numbers) {
    if (numbers.length === 0) {
        return null;  
    }
    return Math.max(...numbers);
}


const numbers = [1, 2, 3, 4, 5];
const stringInput = "Hello, World!";

console.log(sumOfNumbers(numbers));
console.log(reverseString(stringInput));
console.log(averageOfNumbers(numbers));
console.log(countVowels(stringInput));
console.log(largestNumber(numbers));
