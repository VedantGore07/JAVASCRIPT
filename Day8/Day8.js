
// Object --> collection of properties
// Property : key+value
// object literal  creation , accessing prop using dot and bracket notation

// let student={
//     name: 'Tanjiro',
//     gender: 'Male',
//     course: 'BE',
//     showDetails:function() 
//     {
//         console.log(`${this.name} ${this.course}`);
        
//     }
// }

// console.log(student.name);  // dot notation
// console.log(student["course"]);  // bracket notation

// student.showDetails();



///****************  Nested Object 

// let person={
//     name: 'Zenitsu',
//     address:{
//         city: 'Japan',
//         pincode: 485745
//     }
// }

// console.log(`${person.name}`);
// console.log(`${person.address.city}`);



/// object wwith arrays

// let employees = {
//     name: 'Ram',
//     skills: ["Javascript", "Angular", "Express", "MongoDB"]
// };

// console.log(`${employees.name}`);
// for(let skill of employees.skills)
//     console.log(skill);
    


// ************ dynamic 

// let key="dynamickey"

// let obj={
//     [key]:"value"
// }


// let propName="salary"

// let employee={
//     name:"Ram",
//     [propName]:50000
// };

// console.log(employee.salary)



// let i=1;

// let marks={
//     ["subject" + i++]:"Javascript",
//     ["subject" + i]:"React"
// };

// console.log(marks.subject1);
// console.log(marks.subject2);



// let key = prompt("Enter property name  age/ city");
//         let value = prompt("Enter value for" + key);
//         let person = {
//             name: "Ram",
//             [key]:value
//         }
//         console.log(person.name);
//         console.log(person.age);




// let name = "Ram"
// let age = 22

// let person = {
//     name,
//     age,
//     greet(){
//         console.log(`Hello ${this.name}`);
//     }
// }

// person.greet();


// create update delete ************

// let person ={
//     name: "Ram",
//     age: 25, 
//     city: 'Benguluru'
// };

// console.log (person)
// let prop="age";
// delete person[prop];
// console.log(person);

// person.city="Chennai"; 
// console.log(person);




// Q1. Create a object book with  properties title, author, method getDeatils()

// let book={
//     title: "FountainHead",
//     author: "Laren",
//     getDetails(){
//         console.log(`title-> ${this.title}, author-> ${this.author}`)
//     }
// }

// book.getDetails();


// Q2. create an object laptop with nested objects specs Ram processor print the object

// let laptop = {
//     brand: "lenevo",
//     model: "ryzen",
//     specs: {
//         Ram: "16GB",
//         processor: "Intel i7"
//     }
// };
// console.log(laptop);



// Q3. Create an object student with name,marks(array), getAverage() that returns the average marks

// const student={
//     name:"Tanjiro",
//     marks:[70,80,90,95],
//     getAverage(){
//         let sum=0;
//     this.marks.forEach(mark=> {
//             sum+=mark
//         });
//         let avg=sum/this.marks.length;
//         return avg;
//     }
// }

// console.log("Student Name:", student.name);
// console.log("Marks:", student.marks);
// console.log("Average Marks:", student.getAverage());



// Q4. Ask user how many fruits they want to enter , for each fruit ask for name and quantity
// create an object fruits with each fruitname and property and quantity as values


// let numberOfFruits = prompt("How many fruits do you want to enter?");
// let fruits = {};


// for (let i = 0; i < numberOfFruits; i++) {
//     let fruitName = prompt("Enter the name of fruit " + (i + 1));
//     let quantity = prompt("Enter the quantity for " + fruitName);
//     fruits[fruitName] = quantity;
// }

// console.log(fruits);



// Q5. create an object employee : name age dept salary
// CRUD add a new property designation

let employee={
    name: "Ram",
    age: 22,
    dept: "IT",
    salary: 50000 
};

employee.designation = "MSC",
console.log(employee);

employee.name = "Virat"
console.log(employee)

delete employee.age
console.log(employee);




// ***************** Mini Project  **************************

// Console based Student Management System
// CRUD
// student: id name age marks
// findtopper()
// Menu

































































