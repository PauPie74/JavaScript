// Part I: for-loop exercises

// Exercise 1)

// Get the sum of two arrays… actually the sum of all their elements.
// P.S. Each array includes only integer numbers. Output is a number too.

let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276
let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // --> 351
// Example output: 
// 276 + 351 = 627



let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2];
let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26];


function arraysum (array){
  let sum = 0
  for (let i = 0; i < array.length; i++) {
  sum += array[i]
  }
  return sum
}

let sum_array = arraysum(arr_1) + arraysum(arr_2)

console.log(sum_array)

// Exercise 2)

// Using a for loop print all even numbers up to and including n. Don’t include 0.

let n1 = 22; 
// Example output: 
// 2 4 6 8 10 12 14 16 18 20 22 OR each item on a new line
 

let n1 = 22; 

function even_nums (n) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0){
    console.log(i)
  }
}
}

even_nums(n1)


// Exercise 3)

// Using a for loop output the elements in reverse order

let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
// Example output: 
// true 3.5  be  false cannot  true 9 what 43 OR each item on a new line

let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];

function mirror (array){
  for (let i = array.length - 1; i >= 0; i--){
    console.log(array[i]);
  }
}

mirror(arr)
// -----
// ver 2

let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];

function mirror (array){
  let mirror_a = []
  for (let i = array.length - 1; i >= 0; i--){
    mirror_a.push(array[i]);
  }
  return mirror_a
}

console.log(mirror(arr))

// Exercise 4)

// Given two arrays of integers. Add up each element in the same position and
// create a new array containing the sum of each pair. Assume both arrays are of the // same length.

 
let arr_3   = [4, 6, 7];
let arr_4    = [8, 1, 9];
// Example output: 
// [12, 7, 16]

let arr_3   = [4, 6, 7];
let arr_4    = [8, 1, 9];

function sum_pairs(array1, array2) {
  let sum_array = []; 
  for (let i = 0; i < array1.length; i++) {
    sum_array.push(array1[i] + array2[i])
  }
  return sum_array
}

console.log(sum_pairs(arr_3, arr_4))

// Exercise 5)

// Given a string change the every second letter to an uppercase ‘Z’. Assume
// there are no space.

let str1 = "javascript";  
// Example output: 
// jZvZsZrZpZ OR each letter on a new line
// HINT: You can use  if((i+1) % 2 == 0) to check for even indexes 

// Exercise 6)

// Check if a string contains the letter “y”. Print “yes” if it does and “no” if it // does not.

let str2 = "don’t know why";
// Example output: 
// “yes” 

Exercise 7)

Given a number n Calculate the factorial of the number

let n2 = 4; //  4 * 3 * 2 * 1 = 24
// Example output:
// 24

Exercise 8)

Write a program that will allow someone to guess a four digit pin exactly 4
times. If the user guesses the number correctly. It prints “That was
correct!” Otherwise it will print “Sorry that was wrong.” Program stops after the 4th attempt of if they got it right.

let pin = 0704;
// Example output:
// Please make your guess: 
// 4544 
// Sorry that was wrong.
// Please make your guess: 
// 4444
// Sorry that was wrong.
// Please make your guess: 
// 0704
// That was correct!

Exercise 9)

Write a program that will check if two strings are palindromes. A palindrome is a word that spells the same forward and backward.
Palindrome: a word, phrase, or sequence that reads the same backward as
forward, e.g., madam or nurses run.

let str3 = "racecar";


Part II: String exercises

Exercise 1

Complete the solution so that it reverses the string passed into it.

‘world’  =>  ‘dlrow’

Exercise 2

Write a function that returns a sequence (index begins with 1) of all the even characters from a string. If the string is smaller than two characters or longer than 100 characters, the function should return “invalid string”.

For example:

“abcdefghijklm” –> [“b”, “d”, “f”, “h”, “j”, “l”]

“a”             –> “invalid string”

Exercise 3

The company you work for has just been awarded a contract to build a payment gateway. In order to help move things along, you have volunteered to create a function that will take a float and return (IN STRING FORMAT) the amount formatting in dollars and cents.

39.99 becomes $39.99

The rest of your team will make sure that the argument is sanitized before being passed to your function although you will need to account for adding trailing zeros if they are missing (though you won’t have to worry about a dangling period).

Examples:

3 needs to become $3.00

3.1 needs to become $3.10

Good luck! Your team knows they can count on you!

Exercise 4

In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.

For example:

solve(“xyab”,”xzca”) = “ybzc” 

–The first string has ‘yb’ which is not in the second string. 

–The second string has ‘zc’ which is not in the first string. 

Notice also that you return the characters from the first string concatenated with those from the second string.

Exercise 6

You receive the name of a city as a string, and you need to return a string that shows how many times each letter shows up in the string by using asterisks (*).

For example:

“Chicago”  –>  “c:**,h:*,i:*,a:*,g:*,o:*”

As you can see, the letter c is shown only once, but with 2 asterisks.

The return string should include only the letters (not the dashes, spaces, apostrophes, etc). There should be no spaces in the output, and the different letters are separated by a comma (,) as seen in the example above.

Note that the return string must list the letters in order of their first appearance in the original string.

More examples:

“Bangkok”    –>  “b:*,a:*,n:*,g:*,k:**,o:*”

“Las Vegas”  –>  “l:*,a:**,s:**,v:*,e:*,g:*”


Exercise 7

Complete the solution so that it reverses all of the words within the string passed in.

Example:

reverseWords(“The greatest victory is that which requires no battle”)

// should return “battle no requires which that is victory greatest The”

Exercise 8

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

Exercise 9

Create a function which answers the question “Are you playing banjo?”.
If your name starts with the letter “R” or lower case “r”, you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + ” plays banjo” 

name + ” does not play banjo”

Names given are always valid strings.

Exercise 10

Given a string, return true if the first instance of “x” in the string is immediately followed by the string “xx”.

tripleX(“abraxxxas”) → true

tripleX(“xoxotrololololololoxxx”) → false

tripleX(“softX kitty, warm kitty, xxxxx”) → true

tripleX(“softx kitty, warm kitty, xxxxx”) → false

Note :

    capital X’s do not count as an occurrence of “x”.
    if there are no “x”‘s then return false