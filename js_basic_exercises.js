// 1. Write a JavaScript program that accept two integers and display the larger.

function displaylarger(n1,n2) {
  if (n1 > n2) {
    console.log(n1)
  }
  if (n2 > n1) {
    console.log(n2)
  }
}

// 2. Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign.
Sample numbers : 3, -7, 2
Output : The sign is -

function findsign(n1,n2,n3) {
  let sum = n1 * n2 * n3
  if (sum > 0) {
  alert("The sign is +");
  }
  if (sum < 0) {
  alert("The sign is -");
  }
}

findsign(3,-7,2)

// 4. Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result.
Sample numbers : -5, -2, -6, 0, -1
Output : 0

function finlargest(n1,n2,n3,n4,n5) {
  let largest = n1
  if (n2 > largest) {
  largest = n2
  }
  if (n3 > largest) {
  largest = n3
  }
  if (n4 > largest) {
  largest = n4
  }
  if (n5 > largest) {
  largest = n5
  }

  console.log(largest)
}


// 5. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
Sample Output :
"0 is even"
"1 is odd"
"2 is even"
----------
----------

for (let i = 0; i < 16; i++) {
  if (i % 2 == 0){
    console.log(i + " is even");
}
  else{
    console.log(i + " is odd");
}
}

// 6. Write a JavaScript program which computes the average marks of the following students. Then, this average is used to determine the corresponding grade.
Name	Marks
David	80
Vinoth	77
Divya	88
Ishitha	95
Thomas	68

The grades are computed as follows :
Range Grade
<60 F
<70 D
<80 C
<90 B
<100 A

function grade (person,marks) {
  if (marks <= 60){
  console.log(person +" gets F")
  }
  else if (marks <= 70){
  console.log(person +" gets D")
  }
  else if (marks <= 80){
  console.log(person +" gets C")
  }
  else if (marks <= 90){
  console.log(person +" gets B")
  }
  else {
  console.log(person +" gets A")
  }

}

grade ("David",80)
grade ("Vinoth",77)
grade ("Divya",88)
grade ("Ishitha",95)
grade ("Thomas",68)

function grade (score) {
  if (score <= 60) return "F";
  if (score <= 70) return "D";
  if (score <= 80) return "C";
  if (score <= 90) return "B";
  if (score <= 100) return "A";
}

// 7. Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

for (let i = 1; i < 101; i++) {
  if (i % 3 == 0){
    if (i % 5 == 0){
      console.log("FizzBuzz");
    }
    else {
      console.log("Fizz");
    }
  }
  else if (i % 5 == 0){
    console.log("Buzz");
  }
  else {
    console.log(i);
}
}


for (let i = 1; i < 101; i++) {
  if (i % 3 === 0 && i % 5 == 0){
      console.log("FizzBuzz");
    }
  if (i % 3 === 0) {
      console.log("Fizz");
    }
  if (i % 5 === 0){
    console.log("Buzz");
  }
  else {
    console.log(i);
}
}