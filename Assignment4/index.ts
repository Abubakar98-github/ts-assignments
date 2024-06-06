//Problem #1 Hello world
let greeting: string; // declared a variable with string value
greeting = "Hello, World!"; // Initialized
console.log(greeting); // Printed
//Problem #2 Basic Arithmetic operations
let num1:number ; let num2 : number ;//Declared 2 variables with number value 
num1 = 2; num2 = 3;
console.log(`Sum of ${num1} and ${num2} is : ${num1 + num2}`);
console.log(`Difference of ${num1} and ${num2} is : ${num1 -num2}`);
console.log(`Product of ${num1} and ${num2} is : ${num1 * num2}`);
console .log(`quotient of ${num1} and ${num2} is : ${num1 / num2}`);
//Problem #3 swaping value of two variables
let a = 1; let b = 2; // declaring two variables
[a,b] = [b,a];
console.log(`After swapping value of a now is ${a} and b is ${b}`);
//Problem #4  Type Annotation
let message:string; //Declared a variable and annotated its type string.
//message = true; after giving message string value we cannot change it
//message = 5; after giving message string  value we cannot change it
//Problem #5
console.log(`Remainder of ${num2} and ${num1} is: ${num2%num1}`);
//Problem #6 Increment Challenge
let counter=0; // value of counter here is 0
counter = counter + 1; // value of counter here is 1
counter += 1; // value of counter here is 2
counter++; // value of counter here is 3
//Problem #7 boolean operators
let aa= true;
let bb = false;
let cc = true;
aa && bb && cc; // used AND operator expression 
aa || bb || cc; // used OR operator expression
!aa;  !bb; !cc; // used NOT gate expression
//Problem #8 Compound Assignment operators
let num = 10;
num +=1; // num = num + 1; (11)
num -=1; // num = num - 1; (10)
num /=1; // num = num / 1; (10)
num *=1; // num = num * 1; (10)