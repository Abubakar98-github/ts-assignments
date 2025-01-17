// Problem 1: Basic Hello World
console.log("Hello, World!");

// Problem 2: Temperature Check
let temperature = 34;
if (temperature < 20) {
    console.log("It's cold!");
}

// Problem 3: Subtracting Apples
let apples = 10;
let result = apples - 3;
console.log(result);

// Problem 4: Concatenate Names
let firstName = "Muhammad ";
let lastName = "Abu Bakar";
let fullName = `${firstName} ${lastName}`;
console.log(fullName);

// Problem 5: Number Comparison
let num = 5;
if (num > 3) {
    console.log("yes");
}

// Problem 6: Calculate Area of Circle
// Problem 6: Calculate Area of Circle with type declaration
function calculateArea(input: number): number {
    let area = 3.14 * (input ** 2);
    console.log(`Area of circle with radius ${input} is:`, area);
    return area;
}
calculateArea(2);


// Problem 7: FizzBuzz Variant
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0) {
        console.log(i, "buzz");
    } else if (i % 5 === 0) {
        console.log(i, "fizz");
    } else {
        console.log(i);
    }
}

// Problem 8: Find Highest Temperature
const temps = [5, 15, 10, 25, 40];
const highTemp = Math.max(...temps);
console.log("Highest temperature in degree Celsius:", highTemp);

// Problem 9 log minor or adult
let age = 17;
if(age>=18){
    console.log("You are an adult");
}
else console.log("You are a minor(under 18)");

/// Problem 10 write a function that returns count of positive numbers in an array
const testArray  = [14,-5,25,0,15]
function positiveNumbers(num: number[]) {
    let count = 0;
    for(let number of num){
        if (number>0){
            count++;
        }
    }
    return count;
}
const count = positiveNumbers(testArray);
console.log(`Positive numbers in the array : ${count}`);

//Problem 11 Write a function that takes an array and returns a new array that start with the letter 'a'. 
function newArray(parameter: string[]) {
    return parameter.filter( value => value.startsWith('a') || value.startsWith('A'));
  }
  
  const oldArray = ['Ali', 'Umer', 'Abubakar', 'javed', 'abdullah'];
  const wordsStartingWithA = newArray(oldArray);
  console.log(wordsStartingWithA);

    // Problem 12 Create a script that logs the second to last element of an array named fruits.
    const fruits = ['Apple', 'Avocado', 'Banana', 'Grapes','Mangoes'];
const newFruits =fruits.slice(1);// slice slices a new array from the original by given parameters 
console.log(newFruits);

// Problem 13 Develop a function that takes an array of numbers and returns a new array with each number squared.

const firstArray = [0,15,2,4,11,1]
function squaredArray(input: number[]){
    return input.map(num => num*num) // .map method is an array iteration method(every value in array is subjugated to a specific function)
}
const secondArray = squaredArray(firstArray);
console.log(secondArray)

// Problem 14 Reverse an array elements without using the .reverse() method.
let orgArray = [1,2,3,4,5]
function reverseArray(it: any[]){
    const reversed = []; // defining empty array to store value
    for(let i = it.length - 1;i >= 0; i--){  // backward loop
        reversed.push(it[i]); // indexing last element of original array
    }
    return reversed;
} 
const aaa = reverseArray(orgArray);
console.log(aaa);

//Problem 15  write a function that logs the number of times the score exceeded maximum score & fell below the minimum score.
const scores = [10,5,20,20,4,5,2,25];
function maxOrminimum(pmt:number[]) {
    let maxScore = pmt[0]; // choosing first value to be the max value
    let minScore = pmt[0]; // choosing first value to be the min value
    let maxCount = 0;      // declaring a variable to count if new max value found   
    let minCount = 0;      // declaring a variable to count if new min value found
    for(let i = 1; i < pmt.length; i++){    // i starts from 1 because at 0 index value is already chosen to be max or min.(base value)
        if(pmt[i]>maxScore){        //if new value is found to be greater than base value
            maxScore = pmt[i];      // update max value
            maxCount++;             // count it to log how many times value exceeded
        }
        else if(pmt[i]<minScore){   // if new value is found to be lesser than base value
            minScore = pmt[i];      // update minimum value
            minCount++;             // count how many times value fell below the base value
        }
    }
    console.log(`Score exceeded maximum score ${maxCount} times.`);//when every score analysed,number of times it exceeded max score
    console.log(`Score exceeded minimum score ${minCount} times.`);//when every score iterated,number of times it fell below minimum
    
}
maxOrminimum(scores); 
// Problem 16 Create a function that removes all falsey values from an array.
const falseyValueArr = [NaN, "", 0, false, null, undefined, "Hello there!"] //Array with falsey values
function removeFalseyValue(parameter: any[]){
    return parameter.filter(value => !!value); // Filtering the array to get new array with no falsey value
}
const notFalseyValueArray = removeFalseyValue(falseyValueArr); // storing the resultant array to a new array name
console.log(notFalseyValueArray);
// Problem 17 Concatenate two arrays
const arr1 = [1,2,3]; const arr2 = [4,5,6] // defining two arrays
const concatenatedArray = arr1.concat(arr2); // concat method
console.log(concatenatedArray);
// Problem 18 Develop a function called sumOfElements that calculates the sum of all elements in an array. either odd or even as an parameter
function sumOfElements(parameter: number[], Type: "Even" | "Odd") {  // two parameters one an input value of array and other string
    return parameter.reduce((acc,curr) => {        //.reduce method used acc stands for accumulator & curr is current value treated
        if(Type === "Even" && curr % 2 === 0){  // for even number value in the array
            return acc + curr;                  // accumulator value set to 0 added in current value which satisfies our condition
        }
        else if(Type === "Odd" && curr % 2 !== 0){ // for odd number value in array
            return acc + curr;                  // accumulator value set to 0 added in current value which satisfies our condition
        }
        else{
            return acc; // if number is neither even nor odd "0" value returns which is accumulators original value
        }

    },0); // 0 being acc value
}
console.log("Sum of Even numbers of array:",sumOfElements(concatenatedArray,"Even"));
console.log("Sum of Odd numbers of array:",sumOfElements(concatenatedArray,"Odd"));
//problem19
function indexOfElement(params:number[], element : any) { // Two parameters taken, an array of values & specific value
    const index = params.indexOf(element); // index.of function called on specific element
    return index !== -1 ? index : -1      // if index has a value & is not equal to -1 then return value otherwise return -1
}
console.log("index of given element is:",indexOfElement(concatenatedArray,4));
console.log("index of given element is:",indexOfElement(concatenatedArray,40));


// Problem 20 Write a function to find and return the smallest number in an array of integers.
const integerArr = [24,40,-15,105];
function smallestInteger(params:number[]) {
    let smallest = params[0];      // assuming first value to be smallest value
    for(let i = 1; i < params.length; i++){
        if(params[i] < smallest)    // checking every value against first value to findout which is smaller
        smallest = params[i];    // updating smallest value
    }
    return smallest;
}
console.log(smallestInteger(integerArr));
// Problem 21 Write a function calculateProduct that takes an array of numbers and returns the product of all elements.
function productOfEveryElement(params:number[]) {
    return params.reduce((Sum,param)=>param*Sum ,1) //reduce function used to find sum of every element 
}
const product = productOfEveryElement(concatenatedArray);
console.log(product); 

// Problem 22 Develop a function filterByLength that takes an array of strings and a number n. 
const strArray = ["Aalo","dhania","piaaz","pudina","tamatar","mirch"];
function filterByLength(array:string[],n:number):string[]{  // input of string values in an array & a number n
    return array.filter(str=>str.length>n)       // filtering the array & applying length function to it's elements
}
console.log(filterByLength(strArray,5));

// Problem 23 Create a function findDuplicates that finds and logs all duplicates in an array.
const testArr = [1,2,2,3,4,3,4,5,5]; //Declaring & initializing random array
//  Pseudo Code
// 1. see all the values in an array
// 2. store the duplicate values in a set object
// 3. Usage of set object which is basically un ordered list of unique values assigned to it.
function findDuplicates(arr:any[]):void { // void type means function isn't returning any value. just executing
    const seen = new Set();          // set initiated
    const duplicates = new Set();
    arr.forEach((item) => {            // for each method implemented on given array to itteriate every element
        if(seen.has(item)){         // if check set already has the value being checked
            duplicates.add(item);   // add to the duplicate set.
        }
        else{
            seen.add(item);         // else just check & ignore(check by adding value to check list (seen set))     
        }
    });
    duplicates.forEach((duplicate)=>{     // values in set duplicate is itterated through for each & consoled
        console.log(duplicate); 
    })
    

}
findDuplicates(testArr);

// Problem 24 Write a function incrementAll that takes an array of integers and increments each element by one.
function incrementAll(arr:number[]): number[] {
    return arr.map(num => num + 1);    // .map method used to manipulate array values and returning new array
}
const incremented = incrementAll(testArr);
console.log(incremented);

//Problem 25 Develop a function countOccurrences that counts how many times a specific element appears in an array.
function countOccurances(arr : any[],specNum : any):number{
    let count = 0;
    for(num of arr){
        if(num === specNum){
            count++;
        }
        
    } 
    return count;
}
const countOf = countOccurances(testArr,9);
console.log(countOf);
// Problem 26 Create a function isSorted that checks if an array is sorted in ascending order.
function isSorted(array:number[]):boolean{
    for(let i = 0;i < array.length - 1;i++){
        if(array[i]>array[i+1]){
            return false;
        }      
        }
        return true;    
}
console.log(isSorted(testArr));

// Problem 27 Write a function that formats an array into a string separated by commas
const stringArray = ['John','Smith','Kate','Alice','Zach']
function formatArray(str:string[]):string{            
    let lastNames = str.splice(-2);    //Separating last two values for "and"
    return `${str.join()},${lastNames.join(' and ')}` //returning string value to function, using ".join"
}
console.log(formatArray(stringArray));

// Problem 28  Convert an array of Fahrenheit temperatures to Celsius and logs the new temperatures.
const tempFar = [90,101,56,75,82];
function convertTemp(fahr:number[]):number[]{
    return fahr.map(far=> Math.round((far-32)*(5/9))); // simple conversion formula on each value of given array using .map and values returned
}
console.log(convertTemp(tempFar)); 

// Problem 29 take an array of numbers and returns an object with properties for the min, max and avg of those numbers
const numbersArray = [1,2,3,4,5];
function minMaxAverage(numbers: number[]):{min: number, max: number, avg: number}{ //object properties
    let min = Math.min(...numbers); // ... for iteration of each value in array
    let max = Math.max(...numbers); // ... for iteration of each value in array
    let avg = numbers.reduce((a,b)=>a+b/numbers.length,0); // reduce function to add each value in each other
    return {min,max,avg}; // returning object properties i.e keys and values
} 
console.log(minMaxAverage(numbersArray));

// Problem 30 Create a function swapElements that swaps two specified indices in an array.
let swapArr = [1,2,3,4];
function swapElements(arr:any[],index1: number,index2:number):void{ //input array,values of indices to swap, void function, no value returned
    [arr[index1],arr[index2]] = [arr[index2],arr[index1]]; // just simply swapping
}
swapElements(swapArr,1,2); //call the function which manipulates the array
console.log(swapArr);
                                  //Hard
// Problem 31 Develop a function that takes two inputs, a string and a character, and returns the number of times the character appears
const testString = 'Hello world!';
function countCharacter(string: string,character: string): number { // two inputs, string & a character
    let count = 0;                           //initializing count at 0
    for(let i = 0; i < string.length; i++){           //for loop for index to run at 0
        if(string.charAt(i) === character){    // using .charAt() to read a character at specific index
            count++;     // counting
        }
    }
    return count; // returning the count of the specific characters appearance to function
}
console.log(countCharacter(testString,'!'));

// Problem 32 Create a 'to-do list' array of objects where each object has properties task and completed(boolean). Write a function to log the tasks that are not yet completed.
interface toDo { // interface is used to define shape(properties) of the array of objects
    task: string; // yet to make an array of objects that will have these properties(keys & Values and their types)
    completed: boolean; // A string & a boolean
}
const toDoList: toDo[] = [ // creating an array of objects whose properties are mentioned in the interface
    {task: 'Turn up at the event' , completed: true},      //self explaining. key and value are stored
    {task: "Drive your car to the hotel" , completed: false},
    {task: "Water the flowers" , completed: false}
];
function logTasks(DoList: toDo[]):void { // calling a void function to log incomplete tasks
    DoList.forEach(item=>{         //.forEach() method used on DoList array of objects
        if(!item.completed){         // .completed method boolean value checking method applied & not operator applied so it goes further only if false value 
            console.log(`Tasks yet to be completed: ${item.task}`); // respective key attached to false value shown using dot method
        }
    });
}
logTasks(toDoList);

// Problem 33 Write a function that takes an array of integers and sorts them from smallest to largest.
const arrOfInt = [4,3,5,1,2,5,6]     // array of integers
function sortAscendingOrder(params:number[]):number[] { 
    return params.slice().sort((a,b)=>a-b);    //.slice() used so original array isn't manipulated and new array is generated to return
}                                       // .sort with it's arrow function syntax enforces ascending order a - b means exactly that
console.log(sortAscendingOrder(arrOfInt));
console.log(arrOfInt);

// Problem 34 Develop a TypeScript program that logs every element of an array in reverse order without using the .reverse() method.
const arrX = [1,2,3,4,5];        // same as problem 14 very little difference
function arrayReversed(arr: any[]): void {        // returning void as this function just executes code without returning a value
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);  // directly logging in reverse order as per problem discription. 
    }                        // In problem 14 it was asked to reverse an array without .reverse(), so it was done accordingly
}
arrayReversed(arrX);

// Problem 35 Write a script that simulates a basic calculator. It should take two operands and an operator ('+', '-', '*', '/')
function calc(operand1:number,operand2:number,arOper:string):any{ // operand1,2 & arithmetic operator being parameters to function
    switch(arOper){ //Switch statment. it evaluates the value of "arOper" and executes accordingly
        case '+':
            return operand1 + operand2;
        case '-':
            return operand1 - operand2;
        case '*':
            return operand1 * operand2;
        case '/':
            if(operand2 !== 0){
                return operand1 / operand2; // division will only work if user is not dividing a number by "0"
            }
            else{
                return "Error: Can't divide by Zero!"     // not divisible by "0"
            }
        default:
            return "Error: Arithmetic Operator not recognized!" // if wrong input is entered in arOper, this error emerges    
                   
    }
}
const operand1 = 15;
const operand2 = 20;
const operator = '*';
const calculated = calc(operand1,operand2,operator);
console.log(calculated);



