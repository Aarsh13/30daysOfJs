// Day 3: Control Structures

// Activity 1: If-Else Statements

// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.

let num = 10;
if (num > 0) {
    console.log(`The given number ${num} is positive.`);
} else if (num < 0) {
    console.log(`The given number ${num} is negative.`);
} else {
    console.log(`The given number ${num} is zero.`);
}

// Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

let age=19;

if (age >= 18) {
    console.log("You are eligible to vote");
}
else {
    console.log("You are not eligible to vote");
}

// Activity 2: Nested If-Else Statements

// Task 3: Write a program to find the largest of three numbers using nested if-else statements.

let num1=10;
let num2=18;
let num3=13;

if(num1>num2)
{
    if(num1>num3)
    {
        console.log(` ${num1} is the largest`);
    }
    else
    {
        console.log(` ${num3} is the largest`);
    }
    
}
else{

    if(num2>num3)
        {
            console.log(` ${num2} is the largest`);
        }
        else
        {
            console.log(` ${num3} is the largest`);
        }

}

// Activity 3: Switch Case

let dayNumber = 3; 

switch (dayNumber) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number. Please enter a number between 1 and 7.");
}

// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.

let score=65;

switch (true) {
    case score >= 85:
        console.log("Grade: A");
        break;
    case score >= 75:
        console.log("Grade: B");
        break;
    case score >= 65:
        console.log("Grade: C");
        break;
    case score >= 40:
        console.log("Grade: D");
        break;
    case score >= 0:
        console.log("Grade: F");
        break;
    default:
        console.log("Invalid score. Please enter a number between 0 and 100.");
}

// Activity 4: Conditional (Ternary) Operator

// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

let checkNum=32;
let check= checkNum%2==0?true: false;
if(check)
{
    console.log("The given number is even.")
}
else{
    console.log("The given number is odd");
}

// Activity 5: Combining Conditions

// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

let year=2024;


if ((year%4==0 && year%100!==0) || year%400==0) {
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
}