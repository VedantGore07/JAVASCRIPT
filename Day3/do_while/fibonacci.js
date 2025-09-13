
// 0 1 1 2 3 5 8 13 ...

let n = 8;
let a = 0, b = 1; i = 1;

do{
    console.log(a);
    let next = a+b;
    a = b;
    b = next;
    i++;
}while(i<=n)