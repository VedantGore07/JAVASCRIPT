let num = 6;     //6 → divisors are 1, 2, 3 → 1 + 2 + 3 = 6   --> perfect no
let sum = 0;

for (let i = 1; i < num; i++) {
  if (num % i == 0) {
    sum += i;
  }
}

if (sum == num) {
  console.log(num + " Perfect Number");
} else {
  console.log(num + " NOT a Perfect Number");
}