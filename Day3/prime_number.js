let num = 1;
let isPrime = true;

if (num <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log(num + " Prime Number");
} else {
  console.log(num + " is NOT a Prime Number");
}
