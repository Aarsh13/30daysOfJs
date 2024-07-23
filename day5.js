// Day 5: Functions

// Activity 1: Function Declaration

// Task 1: Write a function to check if a number is even or odd and log the result to the console.

function evenCheck(n)
{
    if(n%2==0) return true;

    return false;
}

let num1=99;
console.log(`The given number ${num1} is even: ${evenCheck(num1)}`);

// Task 2: Write a function to calculate the square of a number and return the result.

function square(num)
{
    return num**2;
}

let num2=21;
console.log(`The square of ${num2} is : ${square(num2)}`);

// Activity 2: Function Expression

// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.

function maximum(a,b)
{
    if(a>=b) return a;
    return b;
}

let a=10;
let b=11;

console.log(`The maximum of ${a} and ${b} is ${maximum(a,b)}`);

// Task 4: Write a function expression to concatenate two strings and return the result.

function concat(str1, str2)
{
    return String(str1)+String(str2);
}

let str1=10;
let str2=10;
console.log("The concatenated string is "+ concat(str1, str2));

// Activity 3: Arrow Functions

// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.

let sum= (a,b) => a+b;
a=10;
b=12;

console.log(`Sum of ${a} and ${b} is ${sum(a,b)}`);

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.

let charCheck = (string, char) => string.includes(char);
let char='a';
let string='Aarsh';

console.log(`Is '${char}' present in ${string} ? ${charCheck(string, char)}`);

// Activity 4: Function Parameters and Default Values

// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

function multiply(a, b = 1) 
{
    return a * b;
}

console.log("Product of 10 and 11 is "+ multiply(10,11));
console.log("When only one parameter is provided: "+multiply(4));

// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

function greeting(name, age=25)
{
    return `Hi ${name}, wishes for your ${age+1}th year and welcome to 30daysofJS`
}

console.log(greeting("Aarsh", 18));

// Activity 5: Higher-Order Functions

// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.

const func = () => console.log(Math.random());

const higherFunc = (f, n) => {
  for (let i = 0; i < n; i++) {
    f();
  }
};

let times = 5;
console.log(`Print ${times} random numbers between 0 and 1:`);
higherFunc(func, times);

// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

let func1=(num)=> 10*num;
let func2=(num)=> num+7;

const highFunction= (f1,f2,num)=>{
    return(f2(f1(num)));
}

let myNum=10;
console.log(`After multiplying ${myNum} by 10 and adding 7 we get ${highFunction(func1, func2, myNum)}`);
