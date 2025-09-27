// Exception Handling

// errors --> runtime, compiletime
// runtime --> Errors that occur while the program is running.
// comiletime --> These errors are caught by the compiler before the program runs.
// try catch finally throw

// try{
//     let num = 123;
//     console.log(Number.toUppercase())
// }catch(error){
//     console.log(error.message)
// }finally{
//     console.log("finally")
// }




// function divide(a,b){

//     if(b===0){
//         throw new Error("cannot divide by 0")
//     }
//     return a/b;
// }

// try{
//         console.log(divide(10,0))
//     }catch(error){
//         console.log(error.message)
// }



// Q1. parseUserData(jsonString) that parses a json string to an JS object. if the json is Invalid
// handle the exception and return a default object with  {name:"unknown", age:0}


// function parseUserData(jsonString) {
//     try {
//         return JSON.parse(jsonString); 
//     }catch(error){
//         console.log("Invalid JSON", error.message);
//         return { name: "unknown", age: 0 };  
//     }
// }

// let validJson = '{"name":"Ram","age":21}';
// console.log(parseUserData(validJson));

// let invalidJson = '{name:Sham,age:25}';
// console.log(parseUserData(invalidJson));



//************************ */

// regex --> sequence of characters that defines a search


//literal syntax

let pattern = /hello/;

//constructor
let pattern1 = new RegExp('hello');

let str = 'sfjhsagab';
console.log(pattern.test(str));

console.log(/\d/.test('2045')); // check for numbers
console.log(/\w/.test('hello123')); //checks word character
console.log(/\s/.test('  hello'));

//quantifiers
console.log(/a*/.test('bbb')); // 0 or more
console.log(/a+/.test('bbb')); // 1 or more
console.log(/a?/.test('bbb')); // 0 or 1
console.log(/a{2, 4}/.test('bbb')); //between n and m

//brackets
console.log(/[aeiou]/.test('gjkkv'));
console.log(/[^0-9]/.test('135'));

//anchor ^ start of string
//$ end of string
console.log(/hello$/.test('hii hello'));

//methods
let regex = /test/;
let regex1 = /test/gi;
let str1 = 'This is test string Test';
console.log(regex.exec(str1));
console.log(str1.search(regex));
console.log(str1.replace(regex, 'sample'));
console.log(str1.replace(regex1, 'sample'));

console.log('yellow, red, blue; green'.split([/,;/]));

//valid phone number
let phone = '8787878787';
let pattern2 = /^\d{10}$/;
console.log(pattern2.test(phone));
























































































