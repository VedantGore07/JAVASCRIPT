function calculator(a, b, operator){

    switch(operator){
    case "+":
        console.log("addition: " , a+b)
        break;

    case "-":
        console.log("substraction: " , a-b);
        break;
             
    case "*":
        console.log("multiplication: " , a*b)
        break;

    case "/":
        console.log("division: " , a/b);
        break;

    case "%":
        console.log("modulus: " , a%b)
        break;

    default:
        console.log("invalid operator")
        break;

    }

}

calculator(2, 2, "+");
calculator(2, 2, "-");
calculator(2, 2, "*");
calculator(2, 2, "/");
calculator(2, 2, "%");
calculator(2, 2, "@");

