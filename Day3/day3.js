               // switch case 

// let day = 4;

// switch(day)
// {
//     case 1:
//         console.log('Monday')
//         break;
    
//     case 2:
//         console.log('Tuesday')
        
        
//     case 3:
//         console.log('Wednesday')
//         break;    
    
//     default:
//         console.log('invalid number')
//         break;
// }



            // calculator  ******************************************************************


// function calc(a, b, op) {
//     switch (op) {
//         case '+':
//             console.log("Addition :", a + b)
//             break;

//         case '-':
//             console.log("Subtraction :", a - b)
//             break;

//         case '*':
//             console.log("Multiplication :", a * b)
//             break;

//         case '/':
//             console.log("Division :", a / b)
//             break;

//         default:
//             console.log("Invalid operator");
//     }
// }

// calc(10, 20, "*");



                    // while  ********************************************************


// let num = 1;

// while(num<10){
//     console.log(num)
//     num = num + 2;
// }

///  write prog that counts the number of digits of a number

// let num = 1234;  
// let count = 0;

// while (num > 0) {
//   num = Math.floor(num / 10); 
//   count++;
// }



// console.log("Number of digits:", count);


// sum of digits   1234  1+2+3+4


// let num = 1234;  
// let sum = 0;

// while (num > 0) {
//   let digit = num % 10;     // get last digit
//   sum += digit;             // add digit to sum
//   num = Math.floor(num / 10); // remove last digit
// }

// console.log("Sum of digits:", sum);



// check number is palindrome or not

// let num = 121;
// let rev = 0;

// while (num > 0) {
//     rev = rev * 10 + num % 10;
//     num = Math.floor(num / 10);
// }
// if (rev == num) {
//     console.log("Palindrome");
// } else {
//     console.log("Not a palindrome");
// }



/// do while

// let num = 10;

// do
// {
//     console.log(num--);

// }while(num>=0)


//  first n fibonacci numbers using do while
//  0 1 1 2 3 5 8 13


// let n = 8; 
// let a = 0, b = 1, i = 1;

// console.log("Fibonacci Series:");

// do {
//   console.log(a);
//   let next = a + b;
//   a = b;
//   b = next;
//   i++;
// } while (i <= n);



//      for loop

// let count = 1;

// for( ; count<=10; count++){
//     console.log(count)
// }


// find the factorial of number 

// let num = 5;   
// let fact = 1;

// for (let i = 1; i <= num; i++) {
//   fact = fact * i;
// }

// console.log("Factorial of " + num + " is: " + fact);


// multiplication table of number 

// let num = 6;

// for(let i=1; i<=15; i++){
//     console.log(num*i);
// }


// check given number is perfect or not


// let num = 7; 
// let sum = 0;

// for (let i = 1; i < num; i++) {
//   if (num % i == 0) {
//     sum += i;
//   }
// }

// if (sum == num) {
//   console.log(num + " Perfect Number");
// } else {
//   console.log(num + " NOT a Perfect Number");
// }



// check whether given no is strong number or not
// 145 --> 1!+4!=5! = 1+24+120 = 145   strong number


// let num = 145;
// let sum = 0;

// for (let temp = num; temp > 0; temp = Math.floor(temp / 10)) {
//   let d = temp % 10;
//   let fact = 1;

//   for (let i = 1; i <= d; i++) {
//     fact *= i;
//   }

//   sum += fact;
// }

// if (sum === num) {
//   console.log(num + " is Strong Number");
// } else {
//   console.log(num + " is Not Strong Number");
// }




// A number is Armstrong if the sum of each digit raised to the
//  power of number of digits equals the number itself.

// Example: 153 → 1³ + 5³ + 3³ = 153 
// Example: 9474 → 9⁴ + 4⁴ + 7⁴ + 4⁴ = 9474

// let num = 153;
// let sum = 0;
// let digits = num.toString().length; 

// for (let temp = num; temp > 0; temp = Math.floor(temp / 10)) {
//   let d = temp % 10;
//   sum += Math.pow(d, digits);
// }

// if (sum === num) {
//   console.log(num + " is an Armstrong Number");
// } else {
//   console.log(num + " is NOT an Armstrong Number");
// }



///   for...in loop
// it used to iterate over the properties of an object

// let student = {name: "Amit", age: 20, course: "CS"};

// for(let key in student){                      // in for index
//     console.log(key+" : " + student[key])
// }


// let colors = ['green', 'red', 'blue'];
// for(let i of colors)                       // of for values
//     console.log(colors[i])



// create array of 5 elements   try to find the sum of elements in the array


// let arr = [10, 20, 30, 40, 50];
// let sum = 0;

// for (let i in arr) {
//   sum = sum + arr[i];
// }

// console.log("Array Elements: " + arr);
// console.log("Sum of Elements: " + sum);



// break -->  to terminate whole loop 
// continue --> skips the iteration and continues to next

// for(let i=1; i<=5; i++){
//     if(i==4){
//         continue;   // for continue --> 1 2 3 5   and   break --> 1 2 3
//     }
//     console.log(i)
// }



// to check whether given number is prime 
// to print first n prime numbers


