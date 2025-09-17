// Higher Order function  -->
// Takes another function as an argument (callback), OR
// Returns a function as its result.


// function greet(name){
//     return `hello, ${name}`;
// }

// function prepareInput(callback){
//     let name = "Ved";
//     return callback(name)
// }

// console.log(prepareInput(greet));


// define a function calculateSquare that takes a number returns a string
// the square of 4 is 16
//processNumber that takes a number and a callback function and use this callback

// function calculateSquare(num){
//     let Square = num*num;
//     return `The Square of ${num} is ${Square}`
// }

// function processNumber(num, callback){
//     return callback(num);
// }

// console.log(processNumber(4, calculateSquare));



///  Arrow functions

// const a = (num1, num2) => num1+num2;
                // or

// const a = (num1,num2) =>{
//     return num1+num2;
// }

// console.log(a(10,20));



// arrow functions with no parameters

// const greet = () => console.log('Welcome');
// greet();



// const findSquare = (x=2) => x*x*x;
// console.log(findSquare(6));
// console.log(findSquare());


/// write an arrow function calculateAverage() that takes 4 numbers and return 

// const calculateAverage = (a,b,c,d) => (a+b+c+d)/4;  
// console.log(calculateAverage(10,20,30,40));


/// develop a simple math calculator using arrow functions

// const add = (a, b) => a + b;
// const subtract = (a, b) => a - b;
// const multiply = (a, b) => a * b;

// console.log("Addition: " + add(10, 5));       
// console.log("Subtraction: " + subtract(10, 5)); 
// console.log("Multiplication: " + multiply(10, 5)); 



//// Pure Vs impure functions
// Pure --> Always returns the same output for the same input.

// Impure --> Might return different results for the same input.

// let count = 0;

// function counter(){
//     count++;
//     return count;
// }

// console.log(counter());
// console.log(counter());



/// built in functions

// console.log(parseInt("42"));
// console.log(parseInt("42.98"));
// console.log(parseFloat("42.94"));

// console.log(isNaN("a"));
// console.log(isNaN(15));

// console.log(isFinite(1800));
// console.log(isFinite(1800/0));

// console.log(Number("194"));

// let num = 10;
// let num1 = String(num)
// console.log(num1 + 20)

// console.log(typeof num.toString())


// let n = 123.457896545
// console.log(n.toFixed(2))
// console.log(n.toPrecision(4))



/// Array --> collection of similar/unsimilar type of elements

// let colors = ['red', 'green', 'blue']
// console.log(colors)

// let nums = [10, 20, 30, 40, 'hello', true]
// console.log(nums)


// let nums = [10,20,30,40]
// console.log(nums)
// nums.push(100)
// console.log(nums)
// console.log("---------------------------")

// console.log(nums.pop())
// console.log("---------------------------")
// console.log(nums)
// console.log("---------------------------")
// console.log(nums.shift())
// console.log("---------------------------")
// console.log(nums)
// console.log("---------------------------")
// nums.unshift(200)
// console.log("---------------------------")
// console.log(nums)




// let nums = [10,20,30,40]
// console.log(nums)

// splice
// array.splice(start(index), deleteCount, item1, item2,...)

// let rem = nums.splice(1,2)
// console.log(nums)
// console.log(rem)


// nums.splice(1,2,15,17)
// console.log(nums)




//// create a array of student names
// perform crud perations
// add new name at index 2
// print current list of students
// update replace a name with an new name
// delete a name

// let students = ["Ram", "Narayan", "Dhanush", "Tanjiro"];
// console.log(students);

// students.splice(2, 0, "Zenitsu");  
// console.log(students);

// console.log("Current Student List:");
// for (let i = 0; i < students.length; i++) {
//   console.log(i, students[i]);
// }

// students[1] = "Akaza";
// console.log(students);

// students.splice(3, 1); 
// console.log(students);




//// 
// let nums = [10,20,30,40,50,60]
// let nums1 = [100,200,300]

// let n = nums.splice(-3,-1);
// console.log(nums)
// console.log(n)

// let newArr = nums.concat(nums1)
// console.log(newArr)


//// join 

// console.log(nums.join(''))   /// 102030405060
// console.log(nums.join())     /// 10,20,30,40,50,60
// console.log(nums.join(':'))  /// 10:20:30:40:50:60


//// flat 

// let nums = [10,20,[30,[40,[50,55]],60]]
// let newArray = nums.flat()
// let newArray = nums.flat(2)
// let newArray = nums.flat(Infinity)
// console.log(newArray)



// const gamename = new String('vedant gore');
// console.log(gamename.split(","))










