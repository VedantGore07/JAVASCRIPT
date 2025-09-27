// Asychronous programming

// console.log('task1');
// for(let i=0;i<100000000;i++);
// console.log('task2');
// console.log('task3');



// console.log('task1');

// setTimeout(() => {
//     console.log('Task 2 after 2 secs')
// }, 7000);

// console.log('task3')



/// key components of asynchronous execution

// call stack
// web api
// call backqueue


// function greet(name, callback){
//     console.log('hello'+name);
//     callback();
// }

// function sayBye()
// {
//     console.log('bye');
// }

// greet('Ram', sayBye)



// callback hell  pyramid of Doom

// let users = [
//     { id: 1, name: 'Ram' },
//     { id: 2, name: 'Syam' }
// ];

// let posts = [
//     { postId: 101, userId: 1, title: "Post 1 by Ram" },
//     { postId: 102, userId: 1, title: "Post 2 by Ram" },
//     { postId: 103, userId: 2, title: "Post 1 by Syam" }
// ];

// let comments = {
//     101: ["Nice post!", "Very helpful"],
//     102: ["Good explanation", "Keep writing more"],
//     103: ["Interesting post"]
// };

// function getUser(id, callback) {
//     setTimeout(() => {
//         let user = users.find(u => u.id === id);
//         callback(user);
//     }, 4000);
// }

// function getPosts(userId, callback) {
//     setTimeout(() => {
//         let userPosts = posts.filter(p => p.userId === userId);
//         callback(userPosts);
//     }, 3000);
// }

// function getComments(postId, callback) {
//     setTimeout(() => {
//         let postComments = comments[postId];
//         callback(postComments);
//     }, 3000);
// }

// getUser(1, (user) => {
//     console.log("User:", user);
//     getPosts(user.id, (userPosts) => {
//         console.log("Posts:", userPosts);
//         getComments(userPosts[0].postId, (postComments) => {
//             console.log("Post comments:", postComments);
//         });
//     });
// });



// Q1. calculate sum with callback (callback hell)
// async fns add multiply subtract
// each fns takes 2 arguments and a callback
//  ((5+10)*2)-5



// function add(a, b, callback) {
//     setTimeout(() => {
//         callback(a + b);
//     }, 1000);
// }

// function multiply(a, b, callback) {
//     setTimeout(() => {
//         callback(a * b);
//     }, 1000);
// }

// function subtract(a, b, callback) {
//     setTimeout(() => {
//         callback(a - b);
//     }, 1000);
// }

// add(5, 10, (sum) => {
//     console.log("After add:", sum);
//     multiply(sum, 2, (product) => {
//         console.log("After multiply:", product);
//         subtract(product, 5, (result) => {
//             console.log("Final Result:", result);
//         });
//     });
// });



// promises


// let myPromise = new Promise((resolve, reject) => {
//     let success = false; 

//     if (success) {
//         resolve('Task completed successfully');
//     } else {
//         reject('Task failed');
//     }
// });

// myPromise
//     .then(result => console.log(result))     
//     .catch(error => console.log(error))      
//     .finally(() => console.log('Promise settled'));






//  // promise 

// let promise = new Promise((resolve, reject) => {
//     resolve(10);
// });

// promise
// .then(result => {
//     console.log(result); 
//     return result * 2;  
// })
// .then(result => {
//     console.log(result); 
//     return result + 2;   
// })
// .then(result => {
//     console.log(result); 
// })
// .catch(error => {
//     console.log('error' +error);
// });




// Q2. shopping cart with items [100,30,50]
// calculate total price
// apply 10% discount
// print the final payable amount
// .catch handle errors



// let cart = [100, 30, 50];

// function calculateTotal(cart) {
//     return new Promise((resolve, reject) => {
//         if (!Array.isArray(cart) || cart.length === 0) {
//             reject("Cart is empty or invalid!");
//         } else {
//             let total = cart.reduce((sum, item) => sum + item, 0);
//             resolve(total);
//         }
//     });
// }

// function applyDiscount(total) {
//     return new Promise((resolve) => {
//         let discounted = total - (total * 0.1); 
//         resolve(discounted);
//     });
// }

// calculateTotal(cart)
// .then(total => {
//     console.log("Total Price:", total);
//     return applyDiscount(total);
// })
// .then(finalAmount => {
//     console.log("Final Payable Amount:", finalAmount);
// })
// .catch(err => {
//     console.error("Error:", err);
// });







let p1=Promise.resolve (10);
let p2=new Promise((resolve, reject) => setTimeout(resolve, 1000,20) ); 
let p3=new Promise((resolve, retent)=>setTimeout(resolve, 2000,30));
Promise.all([p1,p2,p3])
.then(results => console.log('all results', results))
.catch(error =>console.log(error))













































