
// Immediately invoked functions

// (function greet(){
//     console.log("Hello");
// })();


// write a js code to define a function add numbers that takes 2 numbers and return their sum

// function addNumbers(a, b){
//     console.log(a+b);
// }

// addNumbers(10, 8);



// factorial that takes a number and returns the fact of number

// function factorial(num) {
//     let fact = 1;
//     let i=1;
//     while(i <= num) {
//         fact = fact * i;
//         i++;
//     }
//     console.log(fact);
    
// }
//  factorial(5);



// Variable scope --> var - global scope  &  let, const --> block scope

// {
//     let a =10;
//     var b =20;
//     const c = 30;

//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// console.log(b)


// global Variable

// var gv = 'global';

// function test(){

//     console.log(gv)
// }
// test();

// console.log(gv);


// closure  

// function outer(){

//     let outVariable='Am outer variable';

//     function inner(){
//         console. log(outvariable)
//     }
//     return inner;
// }

// let closure=outer();
// closure();



// write a fn createcounter()  count = 0
// increment()  count++ print


// function createCounter() {
//   let count = 0;  

//   function increment() {
//     count++;
//     console.log("Count = " + count);
//   }

//   return increment; 
// }

// let counter = createCounter();
// counter(); 
// counter(); 



/// parameters   &   arguments

// function add(a, b){
//     return a+b;
// }

// console.log(add(2,3));


// function add( ...numbers){

//     let sum = 0;
//     for(let num of numbers)
//          sum += num
//     return sum;

// }

// console. log(add (10,20))
// console. log(add(10))
// console. log(add (20,30,40,50))
// console. log (add())


// average that accepts any number of arguments calculate the average and rest

// function avg(...numbers) {
//     let sum = 0;
//     for (let num of numbers) {
//         sum += num;
//     }   
//     return sum / numbers.length;
// }


// console.log(avg(20, 30));
// console.log(avg(10));



// pass by value and pass by refference

// function update(){
//     user.name = 'Ved';
//     user.gender = 'Male';
// }

// let person = {name: "Tannaya", gender: 'female'}

// console.log(person);
// update(person)
// console.log(person);



// function showData({name='unknown', age=0} = {}){
//     console.log(name);
//     console.log(age);
// }

// let user = {name:'Ram', age:22, city: 'Benguluru'}
// showData();



// Anonymous function

// let greet = function(name){
//     console.log('hello' + name);
// }

// greet('Luffy')


// create a function to calculate the square of number

let square = function(number){
    return number * number;
}

console.log(square(5));










