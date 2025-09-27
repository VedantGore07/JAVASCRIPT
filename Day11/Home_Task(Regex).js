
// 1. Email Validation

// let emailPattern = /^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// console.log(emailPattern.test("user@example.com"));  
// console.log(emailPattern.test("bad-email@com"));     



// // 2. Strong Password Validation

// let strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// console.log(strongPassword.test("Password@123"));  
// console.log(strongPassword.test("weakpass"));      



// // 3. Find All Numbers in a String

// let str = "I bought 5 apples for 120 rupees on 25th.";
// let numbers = str.match(/\d+/g);
// console.log(numbers);  



// // 4. Extract All Hashtags from a Tweet

// let tweet = "Loving the #JavaScript #coding journey! #100DaysOfCode";
// let hashtags = tweet.match(/#\w+/g);
// console.log(hashtags);  



// // 5. Validate Indian Pincode

// let pincodePattern = /^[1-9][0-9]{5}$/;
// console.log(pincodePattern.test("411001"));  
// console.log(pincodePattern.test("012345"));  



// // 6. Remove Extra Spaces from a String

// let messy = "This   is   a    spaced   out   string";
// let cleaned = messy.replace(/\s+/g, " ").trim();
// console.log(cleaned);  



// // 7. Check Whether String is Palindrome Using Regex

function isPalindrome(str) {
    let cleaned = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    return cleaned === cleaned.split("").reverse().join("");
}

console.log(isPalindrome("A man, a plan, a canal, Panama"));  
console.log(isPalindrome("Hello"));  

































