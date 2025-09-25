// private data members  getters setters
// private --> accessible only inside the class
// public --> accessible outside the class


// function Person(name){
//     let _name = name;

//     this.getName = function(){
//         return _name;
//     };

//     this.setName = function(newName){
//         if(typeof newName === 'string' && newName.length > 0){
//             _name = newName;
//         }else{
//             console.log('Invalid name')
//         }
//     }
// }

// const p = new Person('Ram')
// console.log(p.getName());
// p.setName("Mike");
// console.log(p.getName());




// class Person{
//     #name;
//     constructor(name){
//         this.#name = name;
//     }

//     get name(){
//         return this.#name;
//     }

//     set name(newName){
//         if(typeof newName === 'string' && newName.length > 0){
//             this.#name = newName;
//         }else{
//             console.log("Invalid name")
//         }
//     }
// }

// const p = new Person('Ram')
// console.log(p.name);
// p.name ='Mike';
// console.log(p.name);



// Q1. Student #name #age #marks  constructor getters setters

// class Student {
//     #name;
//     #age;
//     #marks;

//     constructor(name, age, marks) {
//         this.#name = name;
//         this.#age = age;
//         this.#marks = marks;
//     }

//     getName() {
//         return this.#name;
//     }

//     getAge() {
//         return this.#age;
//     }

//     getMarks() {
//         return this.#marks;
//     }

//     setName(newName) {
//         if (typeof newName === 'string' && newName.length > 0) {
//             this.#name = newName;
//         } else {
//             console.log("Invalid name");
//         }
//     }

//     setAge(newAge) {
//         if (typeof newAge === 'number' && newAge > 0) {
//             this.#age = newAge;
//         } else {
//             console.log("Invalid age");
//         }
//     }

//     setMarks(newMarks) {
//         if (typeof newMarks === 'number' && newMarks >= 0 && newMarks <= 100) {
//             this.#marks = newMarks;
//         } else {
//             console.log("Invalid marks");
//         }
//     }
// }

// const s1 = new Student("Virat", 21, [85, 90, 78]);

// console.log(s1.getName());   
// console.log(s1.getAge());    
// console.log(s1.getMarks());  

// s1.setName("Rohit");
// s1.setAge(23);
// s1.setMarks([54,65,92]);

// console.log(s1.getName());   
// console.log(s1.getAge());    
// console.log(s1.getMarks());  




// Multiple Inheritance --> When a class inherits from more than one parent class.
// Example in real life:
// Suppose you’re a Student and also an Athlete. If you want a class Person that inherits from both, that’s multiple inheritance.


// class Animal{
//     constructor(name){
//         this.name = name;
//     }

//     eat(){
//         console.log(`${this.name} is eating`)
//     }
// }

// const canFly = (Base) => class extends Base{
//     fly(){
//         console.log(`${this.name} can fly`)
//     }
// }

// const canSwim = (Base) => class extends Base{
//     swim(){
//         console.log(`${this.name} can swim`)
//     }
// }

// class Duck extends canFly(canSwim(Animal)){
//     makeSound(){
//         console.log(`${this.name} says quack`)
//     }
// }

// const duck = new Duck("Donald");
// duck.eat();
// duck.fly();
// duck.swim();
// duck.makeSound();



// Q3. EMS
// Employee  developers  designers  projects  techleads


// class Employee {
//     constructor(name) {
//         this.name = name;
//     }

//     showName() {
//         console.log(`${this.name} is working`);
//     }
// }

// const canCode = (Base) => class extends Base {
//     code() {
//         console.log(`${this.name} is coding`);
//     }
// };

// const canDesign = (Base) => class extends Base {
//     design() {
//         console.log(`${this.name} is designing`);
//     }
// };

// const canLead = (Base) => class extends Base {
//     lead() {
//         console.log(`${this.name} is leading the team`);
//     }
// };

// const canManageProject = (Base) => class extends Base {
//     manageProject() {
//         console.log(`${this.name} is managing the project`);
//     }
// };

// class Developer extends canCode(Employee) {
//     role() {
//         console.log(`${this.name} is a Developer`);
//     }
// }

// class Designer extends canDesign(Employee) {
//     role() {
//         console.log(`${this.name} is a Designer`);
//     }
// }

// class TechLead extends canLead(canCode(Employee)) {
//     role() {
//         console.log(`${this.name} is a Tech Lead`);
//     }
// }

// class ProjectManager extends canManageProject(Employee) {
//     role() {
//         console.log(`${this.name} is a Project Manager`);
//     }
// }

// const dev = new Developer("Ram");
// dev.role();
// dev.showName();
// dev.code();

// const des = new Designer("Virat");
// des.role();
// des.showName();
// des.design();

// const lead = new TechLead("Nezuko");
// lead.role();
// lead.showName();
// lead.code();
// lead.lead();

// const pm = new ProjectManager("Zenitsu");
// pm.role();
// pm.showName();
// pm.manageProject();


// or


// class Employee{
//   constructor(name)
//   {
//     this.name=name;
//   }
//   work()
//   {
//     console.log(`${this.name} is working`);


//   }
// }
// const Developer= (Base) => class extends Base{
//   code(){
//     console.log(`${this.name} is writing code`);
//   }
// };
// const Designer= (Base) => class extends Base{
//   desgin(){
//     console.log(`${this.name} is designing`);
//   }
// };


// class TechLead extends Designer(Developer(Employee)) {
//     manageAll() {
//         console.log(`${this.name} is managing projects `);
//     }
// }


// const lead = new TechLead("Virat");
// lead.work();           
// lead.code();         
// lead.desgin();         
// lead.manageAll();




// JSON --> Javascript Object Notation
// objects --> key-value pairs  {}  "key"

// JSON.stringfy  --> converts a js object or value to a JSON stringfy
// JSON.parse  --> parse a JSON string and converts it into a js object


// const person={
//     "name": "Ram",
//     "age": 22,
//     "isMarried": false,
//     "hobbies": ["Reading", "Writing", "singing", "Horse Riding"], 
//     "address":{
//         "houseNo":101,
//         "street":"Vijay Nagar",
//         "city":"Benguluru"
//     }
// }

const personJSON = '{"name": "Ram", "age": 22, "isMarried": false}';
const personData = JSON.parse(personJSON)
console.log(personData);
console.log(typeof personJSON)

console.log("******************");

personData.children = 1

const updatePersonData = JSON.stringify(personData)
console.log(updatePersonData)





// Q4. Employee JSON
// parse JS object
// update salary
// add a new property designation
// convert js object backto JSON
// log both JS object as well as JSON


const employeeJSON = '{"name":"Virat","dept":"IT","salary":1200000}';

const employeeData = JSON.parse(employeeJSON);
console.log(employeeData);
console.log(typeof employeeData);

employeeData.salary = employeeData.salary * 1.10;

employeeData.designation = "Product Developer";

const updatedEmployeeJSON = JSON.stringify(employeeData);

console.log(updatedEmployeeJSON);























































































