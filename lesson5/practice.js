// реалізувати реверс стрінги (вивод в зворотньому порядку)
let originalString = "Hello, World!";
let reversedString = "";
for (let i = originalString.length - 1; i >= 0; i--) {
  reversedString += originalString[i];
}
console.log(reversedString);

// реалізувати функцію поліндром (коли в обидва боки одинакова стрінга)
function isPalindrome(str) {
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversedStr = cleanedStr.split("").reverse().join("");
  return cleanedStr === reversedStr;
}

const palindromeString = "Abaaba";
if (isPalindrome(palindromeString)) {
  console.log(`${palindromeString} - true`);
} else {
  console.log(`${palindromeString} - false`);
}

// вивести тільки парні числа з масиву, вивести в зворотньому порядку
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = [];

for (let i = numbers.length - 1; i >= 0; i--) {
  if (numbers[i] % 2 === 0) {
    evenNumbers.push(numbers[i]);
  }
}
console.log(evenNumbers);

