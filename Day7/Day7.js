// Date Object

// let now = new Date();
// console.log(now);

// let date1 = new Date("2025-09-20");
// console.log(date1)

// let date2 = new Date(2025,9,15,16,35,16,0)
// console.log(date2)


// let date3 = new Date();

// console.log(date3.getFullYear());
// console.log(date3.getMonth());
// console.log(date3.getDay());
// console.log(date3.getDate());
// console.log(date3.getHours());
// console.log(date3.getMinutes());
// console.log(date3.getSeconds());
// console.log(date3.getMilliseconds());


// date3.setFullYear(2025);        
// date3.setMonth(9);              
// date3.setDate(20);               
// date3.setHours(16);
// date3.setMinutes(45);           
// date3.setSeconds(30);           
// date3.setMilliseconds(500);     

// console.log(date3);




////////////////

// let d = new Date();

// console.log(d.toString());
// console.log(d.toDateString());
// console.log(d.toTimeString());
// console.log(d.toUTCString());
// console.log(d.toISOString());
// console.log(d.toLocaleString());
// console.log(d.toLocaleDateString());
// console.log(d.toLocaleTimeString());


// console.log(Date.now());
// console.log(Date.parse("2025-09-20"));
// console.log(Date.UTC(2025,8,20));


//Q. write a function that takes a date string("2025-09-20") and prints the day of the week

// const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// const date = new Date("2025-09-21");
// console.log(days[date.getDay()]);

                // or

// function DayOfWeek(d) {
//     let date = new Date(d);
//     let days = ["sun", "mon", "tue", "wed", "thurs", "fri", "sat"];
//     console.log(days[date.getDay()]);
// }

// DayOfWeek("2022-08-20");
// DayOfWeek("2025-08-21");


////Q.  write a function that calculates a person's age given their date of birth ("1998-09-23")

// let dob = new Date(dobString); 
// let today = new Date();

// let age = today.getFullYear() - dob.getFullYear();

// ///  or

// function displayAge(dateStr){
//     let date = new Date(dateStr).getFullYear();
//     let now = new Date().getFullYear();
//     console.log(`Age : ${now-date}`)
// }
// displayAge("2005-02-07") 


// write a function that calculates a person's age given their date of birth ("1998-09-23")
// Write a fucntion that calculates a person's age given their date of birth ("1998-09-23")
// Write aprogram that add 10 days to the current date and prints the new date
// Write function that calculates how many days left until 30th NOvember 2025
// Write a fuention that returns the date in format YYYY/MM/DD
// Check if a year is a leap year
// Write a program to display next 7 days starting from today




//Q. Write a program that add 10 days to the current date and prints the new date

// let d1 = new Date();

// function addDays(date, days) {
//     let newDate = new Date(date);
//     newDate.setDate(newDate.getDate() + days);
//     console.log(newDate);
// }

// addDays(d1, 10);



//Q. Write function that calculates how many days left until 30th NOvember 2025

// function daysLeft(){
//     let now = new Date().getTime();
//     let setDate = new Date("2025-11-30").getTime();
//     let days = Math.floor((setDate - now)/86400000);
//     console.log("Days left : ", days)
// }
// daysLeft() 



//Q. Write a funtion that returns the date in format YYYY/MM/DD

// let date = new Date();
// let year = date.getFullYear();
// let month = (date.getMonth() + 1);
// let day = date.getDate();
// let ymd = `${year}-${month}-${day}`;
// console.log(ymd); 

//    or

// function getFormattedDate() {
//     let today = new Date();
//     let options = { year: '2-digit', month: '2-digit', day: '2-digit' };
//     return today.toLocaleDateString('en-GB', options)
// }

// console.log(getFormattedDate());



//Q. Check if a year is a leap year


// function isLeapYear(year) {
//     return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
// }

// console.log(isLeapYear(2024));



//Q. Write a program to display next 7 days starting from today

// function next7Days() {  
//     const today = new Date();  
//     for (let i = 0; i < 7; i++) {  
//         let nextDay = new Date(today);  
//         nextDay.setDate(today.getDate() + i);  
//         console.log(nextDay.toDateString());  
//     }  
// }  
  
// next7Days();




//////      Math function

// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.sqrt(16));
// console.log(Math.LN2);
// console.log(Math.LN10);
// console.log(Math.LOG2E);
// console.log(Math.SQRT2);
// console.log(Math.SQRT1_2);
// console.log(Math.round(4.4));
// console.log(Math.ceil(4.708));
// console.log(Math.floor(9.689));
// console.log(Math.trunc(8.45));
// console.log(Math.pow(2,3));
// console.log(Math.cbrt(64));
// console.log(Math.abs(-75));
// console.log(Math.sign(0));
// console.log(Math.min(50,20,65,11,78));
// console.log(Math.max(10,20,50,45,38));
// console.log(Math.random());
// console.log(Math.log2(8));
// console.log(Math.exp(4));
// console.log(Math.sin(60));



///Q. write a function to generate a random otp of 4 digits

// function generateOTP() {
//     return Math.floor(1000 + Math.random() * 9000);
// }

// console.log("Random OTP Generated " + generateOTP());



//// Q. find the area and volume of circle using Math.PI


// function area(radius) {
//     return Math.PI * radius * radius; 
// }

// function volume(radius) {
//     return (4 / 3) * Math.PI * Math.pow(radius, 3); 
// }

// const r = 5;
// console.log("area is " + area(r).toFixed(2));
// console.log("Volume is " + volume(r).toFixed(2));



//  unpacking

// let nums = [10,20,30,40]
// let nums1 = [...nums]
// let nums2 = [1,2,3]
// let nums3 = [...nums1, ...nums2]
// console.log(...nums3)


// let str = "Hello";
// console.log(...str);


// function sum(a1,b1,c1){
//     return a1+b1+c1;
// }

// let res = sum(...nums2)
// console.log(res);



/// Q. copy an array of numbers and add 2 extra numbers at the end

// let arr1 = [1, 2, 3];
// let arr2 = [...arr1, 4, 5];
// console.log(arr2);
// console.log(...arr2);


//Q. find maximum and minimum in an array

// let a = [1,2,3]
// let b = [...a, 5, 6]
// console.log(a)
// console.log(b)

// console.log("Max is " + Math.max(...b))
// console.log("Min is " + Math.min(...b)) 

     // or 

// let arr = [10,20,30,40,50]

// const findMaxAndMin = (arr) => {
//     const Max = Math.max(...a);
//     const Min = Math.min(...a);
//     return { Max, Min };
// }
// console.log(findMaxAndMin(a));


//////////////////////////////////////


// let str = "123.56";
// let num = 1234.56789
// console.log(Number(str));
// console.log(parseInt(str));
// console.log(num.toFixed(2));
// console.log(num.toExponential());
// console.log(num.toPrecision());
// console.log(num.toLocaleString("en-IN"));

// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.POSITIVE_INFINITY);
// console.log(Number.NEGATIVE_INFINITY);
// console.log(Number.NaN);



// Q. write a js code to display the number 573506 as rs dollars

let num = 573506;

let inRupees = num.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR"
});

let inDollars = num.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
});

console.log("In Rupees:", inRupees);
console.log("In Dollars:", inDollars);


// Q. BMI rounded to 2 decimal pts

// function calculateBMI(weight, height) {
//     let bmi = weight / (height * height);
//     return bmi.toFixed(2);
// }
// console.log(`BMI: ${calculateBMI(70, 1.75)}`);





//       *************  Home Task  **********************

/// Date Object

// Q1. write a function that takes a date string("2025-09-20") and prints the day of the week
// Q2. write a function that calculates a person's age given their date of birth ("1998-09-23")
// Q3. Write aprogram that add 10 days to the current date and prints the new date
// Q4. Write function that calculates how many days left until 30th NOvember 2025
// Q5. Write a fuention that returns the date in format YYYY/MM/DD
// Q6. Check if a year is a leap year
// Q7. Write a program to display next 7 days starting from today

/// MATH 

// Q8. write a function to generate a random otp of 4 digits
// Q9. find the area and volume of circle using Math.PI
// Q10. copy an array of numbers and add 2 extra numbers at the end
// Q11. find maximum and minimum in an array
// Q12. write a js code to display the number 573506 as rs dollars
// Q13. BMI rounded to 2 decimal pts