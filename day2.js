// Day 2: Operators


// Activity 1: Arithmetic Operations

// Task 1: Write a program to add two numbers and log the result to the console.
const a=15;
const b=18;
console.log(a+b); //33

// Task 2: Write a program to subtract two numbers and log the result to the console.
const x=99;
const y=39;
console.log(x-y); //60

// Task 3: Write a program to multiply two numbers and log the result to the console.
let base=12;
let altitude=5;
let area=base*altitude;
console.log(area); //60

// Task 4: Write a program to divide two numbers and log the result to the console.
let area_circle=314;
const pi=3.14;
let radiusSquared=area_circle/pi;
console.log(radiusSquared);

// Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
let slices=10;
let friends=3;
let extraSlice=slices%friends;
console.log(extraSlice);

// Activity 2: Assignment Operators

// Task 6: Use the += operator to add a number to a variable and log the result to the console.
let money=100;
money+=50;
console.log(money);

// Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.
money-=200;
console.log(money);

// Activity 3: Comparison Operators

// Task 8: Write a program to compare two numbers using > and < and log the result to the console.
let ticket=50;
let canAfford=money>ticket;
console.log(canAfford);

let broke=money<0;
console.log(broke);

// Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.
let c=5;
let d=10;
let e=5;
console.log(d<=e);
console.log(c>=e);

// Task 10: Write a program to compare two numbers using == and === and log the result to the console.
let myNum1=10;
let myNum2=10.1;
console.log(myNum1==myNum2);
console.log(myNum1===myNum2);

// Activity 4: Logical Operators

// Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
let side1=12;
let side2=13;
let side3=5;

let isTriangle= (side1+side2>side3)&&(side2+side3>side1)&&(side1+side3>side2);
console.log(isTriangle);


// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.

let  isRightTriangle= (side1*side1==side2*side2+side3*side3)||(side2*side2==side1*side1+side3*side3)||(side3*side3==side2*side2+side1*side1);
console.log(isRightTriangle);


// Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.
let isRaining=false;

let isNotRaining=!isRaining;
console.log("Is it not raining? "+ isNotRaining);

// Activity 5: Ternary Operator

// Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.

let number=1;
let condition= number>0 ? "Yes": "No";
console.log("Is the given number positive? " + condition);

// Feature Request:

// 1. Arithmetic Operations Script: Write a script that performs basic arithmetic operations (addition, subtraction, multiplication, division, remainder) on two numbers and logs the results.

let num1=10;
let num2=3;
console.log("Arithmetic Operations:");
console.log("Addition: " +(num1+num2));
console.log("Subtraction: " +(num1-num2));
console.log("Multiplication: " +(num1*num2));


if (num2 !== 0) {
    console.log("Division: " +(num1/num2));
    console.log("Remainder: "+(num1 % num2));
} 
else {
    console.log("Division and remainder: Cannot divide by zero");
}






