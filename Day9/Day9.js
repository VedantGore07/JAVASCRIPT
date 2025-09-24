// Class --> blueprint of an object
// Object --> instance of a class

// class Person{

//     constructor(name="anonymous", age=null){
//         this.name = name;
//         this.age = age;
//     }

//     showDetails(){
//         console.log(`Name: ${this.name}, Age: ${this.age}`);
//     }
// }

// const p1 = new Person("Ram", 30);
// const p2 = new Person("Shyam");
// const p3 = new Person();
// p1.showDetails();
// p2.showDetails();
// p3.showDetails();




// Q1. class Employee  constructor  name designation salary  displayDetails()
// if any param is missing it should use default value


// class Employee{

//     constructor(name="anonymous", designation="unemployed", salary=0){
//         this.name = name;
//         this.designation = designation;
//         this.salary = salary;
//     }

//     displayDetails(){
//         console.log(`Name: ${this.name}, Designation: ${this.designation}, Salary: ${this.salary}`);
//     }
// }
// const e1 = new Employee("Ram", "Developer", 50000);
// const e2 = new Employee("Shyam", "Manager");
// const e3 = new Employee();
// e1.displayDetails();
// e2.displayDetails();
// e3.displayDetails();





// class Car{
//     constructor({company="unknown", model="unknown", year=null}={})
//     {
//         this.company = company;
//         this.model = model;
//         this.year = year;
//     }

//     showDetails()
//     {
//         console.log(`Company: ${this.company}, Model: ${this.model ?? 'No Model'}, Year: ${this.year} `);
//     }
// }

// const car = new Car({company:"Maruti", model:"Ertiga", year:2024});
// const car1 = new Car({company:"Toyota"});
// car.showDetails();
// car1.showDetails();





///  Static Method and Static Property

// class MyClass{

//     static prop = 0;
//     static demo(){
//         console.log("demo static method")
//         console.log(MyClass.prop)
//     }
// }

// MyClass.demo();



// Q2. Calculator add(a,b)  sub exponent

// class Calculator{

//     static add(a,b){
//         return a+b;
//     }

//     static sub(a,b){
//         return a-b;
//     }
    
//     static exponent(a,b){
//         console.log(`${a} ** ${b} = ${a**b}`)
//     }
// }

// console.log(Calculator.add(10,5));
// console.log(Calculator.sub(10,5));
// // console.log(Calculator.exponent(10,5));
// Calculator.exponent(2,3);




// Inheritance --> inheriting properties and methods from parent class to child class


// function Animal(name){
//     this.name = name;
// }

// Animal.prototype.speak = function(){
//     console.log(`${this.name} makes a noise`);
// }

// function Dog(name, breed){
//     Animal.call(this, name);
//     this.breed = breed;
// }


// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// Dog.prototype.speak = function(){
//     console.log(`${this.name} barks`);
// }

// const dog = new Dog("Tommy", "Bulldog");
// dog.speak();





// class Animal
// {
//     constructor(name){
//         this.name = name;
//     }

//     speak()
//     {
//         console.log(`${this.name} makes a sound`);
//     }
// }

// class Dog extends Animal{
//     constructor(name, breed)
//     {
//         super(name);
//         this.breed = breed;
//     }

//     speak()
//     {
//         super.speak();
//         console.log(`${this.breed} barks`);
//     }
// }

// const dog = new Dog("Tommy", "Bulldog");
// dog.speak();



// Q3. class Vehicle brand displayDetails()
// car inherits Vehicle brand+model super(brand) displayDetails() super.displayDetails()


// class Vehicle{
//     constructor(brand){
//         this.brand = brand;
//     }

//     displayDetails(){
//         console.log(`Brand: ${this.brand}`);
//     }
// }

// class Car extends Vehicle{
//     constructor(brand, model){
//         super(brand);
//         this.model = model;
//     }

//     displayDetails(){
//         super.displayDetails();
//         console.log(`Model: ${this.model}`);
//     }
// }       

// const car = new Car("Toyota", "Camry");
// car.displayDetails();



// Q4. Multilevel Inheritance
// class A
// class B extends A
// class C extends B
// each class has a method show() that prints the class name


// class Person{
//     constructor(name){
//         this.name = name;
//     }
//     showname()
//     {
//         console.log(`Name: ${this.name}`);
//     }
// }

// class Student extends Person{
//     constructor(name, rollNo){
//         super(name);
//         this.rollNo = rollNo;
//     }

//     showStudentDetails(){
//         super.showname();
//         console.log(`Roll No: ${this.rollNo}`);
//     }
// }

// class EngineeringStudent extends Student{
//     constructor(name, rollNo, spec){
//         super(name, rollNo);
//         this.spec = spec;
//     }

//     showSpecialization(){
//         super.showStudentDetails();
//         console.log(`Specialization: ${this.spec}`);
//     }
// }

// const engStudent = new EngineeringStudent("Ram", 101, "Computer Science");
// engStudent.showSpecialization();



// Hierarchical Inheritance
// class A
// class B extends A
// class C extends A
// each class has a method show() that prints the class name



class Student{
    constructor(name, rollno){
        this.name = name;
        this.rollno = rollno;
    }
    
    showDetails(){
        console.log(`Name: ${this.name}, Roll No: ${this.rollno}`);
    }
}


class EngineeringStudent extends Student{
    constructor(name, rollNo, spec){
        super(name, rollNo);
        this.spec = spec;
    }

    showSpecialization(){
        super.showStudentDetails();
        console.log(`Specialization: ${this.spec}`);
    }
}

class ArtStudent extends Student{
    constructor(name, rollNo, dept){
        super(name, rollNo);
        this.dept = dept;
    }                       

    showDepartment(){
        super.showStudentDetails();
        console.log(`Department: ${this.dept}`);
    }
}

const engStudent = new EngineeringStudent("Ram", 101, "Computer Science");
engStudent.showSpecialization();

const artStudent = new ArtStudent("Shyam", 102, "History");
artStudent.showDepartment();


















