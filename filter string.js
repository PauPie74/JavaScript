// Change this string into another string with only vowels and in capital letters.

// Split the string into an array at some point and then join it

// Try to do it in one line!

let myString = "asssddrreyxvhoopppllllve";

const newString = myString.toUpperCase().split("").filter(x => ['A', 'I', 'U', 'E', 'O'].includes(x)).join("");

console.log(newString);