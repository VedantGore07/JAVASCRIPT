// console.log('hello')

// var x = 20;
// console.log(x);

// let y = 9;
// console.log(y);

// x = "hello";
// console.log(typeof x);

// y = 18;
// console.log(typeof y);

// x = true;
// console.log(typeof x);


// let x = 10n;
// console.log(typeof x);

// let y = 3;
// console.log(x+BigInt(y));


// WAP to declare 2 numbers num1 num2 and perfoirm all arithmetic operations

// let num1 = 20;
// let num2 = 5;

// // Addition
// console.log("Addition:", num1 + num2); 

// // Subtraction
// console.log("Subtraction:", num1 - num2); 

// // Multiplication
// console.log("Multiplication:",num1 * num2 ); 

// // Division
// console.log("Division:", num1 / num2); 



// find largest among 3 ternary operators

// let a = 7;
// let b = 9;
// let c = 3;

// console.log("largest: ", (a>b)?(a>c?a:c):(b>c?b:c) );


// take integer and print its absolute value

// let num = -5515;   
// console.log(Math.abs(num));


//selection statements --> if, if...else, if..else...if..else,  switch,  nested if

// write js code to check number is even or odd

let num = 5;
if(num % 2 == 0){
    console.log("even");
}else{
    console.log("odd");  
}


// check given year is leap year or not

let year = 2025;
if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      console.log(year + " is a Leap Year");
    } else {
      console.log(year + " is NOT a Leap Year");
    }
  } else {
    console.log(year + " is a Leap Year");
  }
} else {
  console.log(year + " is NOT a Leap Year");
}


// check for age

let age = 21;

if (age >= 0 && age <= 12) {
    console.log("Child");
} else if (age >= 13 && age <= 19) {
    console.log("Teen");
} else if (age >= 20 && age <= 59) {
    console.log("Adult");
} else  {
    console.log("Senior Citizen");
} 


// salary calculator

let salary = 75000
let bonus;

if (salary <= 20000) {
  bonus = salary * 0.10;
} else if (salary <= 50000) {
  bonus = salary * 0.15;
} else if (salary <= 100000) {
  bonus = salary * 0.20;
} else {
  bonus = salary * 0.25;
}




























