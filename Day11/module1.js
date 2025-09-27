// const num1 = 10;
// const num2 = 20;

// export function mult(a,b){
//     return a*b;
// }

// export function divide(a,b){
//     return a/b;
// }

// export{num1, num2, mult as m, divide as d};



// ******************************

// class Student{
//     constructor(name, age){
//     this.name = name;
//     this.age = age;
//     }

//     showDetails(){
//         console.log(this.name);
//         console.log(this.age);
//     }
// }


// export {Student as s};




// Q1. Book class  title author year  numOfCopies
// getDetails borrow() returnBook()


export class Book {
    constructor(title, author, year, numOfCopies) {
        this.title = title
        this.author = author
        this.year = year
        this.numOfCopies = numOfCopies
    }
    borrowBook() {
        if (this.numOfCopies > 0) {
            this.numOfCopies--
            console.log(`${this.title} borrowed\nAvailable copies : ${this.numOfCopies}\n`)
        } else {
            console.log("Copy not available");
        }
    }
    returnBook() {
        this.numOfCopies++;
        console.log(`${this.title} returned\nAvailable copies : ${this.numOfCopies}\n`)
    }
} 


















