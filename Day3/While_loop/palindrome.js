let num = 123;
let org = num;
let rev = 0;

while(num>0){
    let digit = num % 10;
    rev = rev * 10 + digit;
    num = Math.floor(num / 10);
}

if(org == rev){
    console.log(org , " is palindrome");
}else{
    console.log(org , " is not palindrome")
}