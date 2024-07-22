// Day 4: Loops

// Activity 1: For Loop

// Task 1: Write a program to print numbers from 1 to 10 using a for loop.
for(let i=1; i<=10; i++)
{
    console.log(i);
}
// This loop initializes i to 1, continues while i is less than or equal to 10, and increments i by 1 each iteration

// Task 2: Write a program to print the multiplication table of 5 using a for loop.
let num = 5;
for(let i=1; i<=10; i++) 
{
    console.log(`${num} * ${i} = ${num*i}`);
}
// This loop prints the multiplication table of 5 up to 10 times 5

// Activity 2: While Loop

// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
let i = 1;
let sum = 0;
while(i <= 10) 
{
    sum += i;
    i++;
}
console.log("Sum of first 10 natural numbers: "+ sum);
// This while loop adds each number from 1 to 10 to the sum variable

// Task 4: Write a program to print numbers from 10 to 1 using a while loop.
let j = 10;
console.log("Print numbers from 10 to 1 using a while loop.");
while(j > 0) 
{
    console.log(j);
    j--;
}
// This while loop starts at 10 and decrements j until it reaches 1

// Activity 3: Do...While Loop

// Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
let it = 1;
console.log("print numbers from 1 to 5 using a do...while loop.");
do 
{
    console.log(it);
    it++;
} while(it < 6);
// This do...while loop ensures the body is executed at least once before checking the condition

// Task 6: Write a program to calculate the factorial of a number using a do...while loop.
let number = 6;
let fact = 1;
let k = 1;
do {
    fact = fact * k;
    k++;
} while(k <= number);
console.log(`Factorial of ${number} is ${fact}`);
// This calculates the factorial by multiplying fact by each number from 1 to 6

// Activity 4: Nested Loops

// Task 7: Write a program to print a pattern using nested for loops:

for(let a=1; a<=5; a++)
{
    let line = "";
    for(let b=1; b<=a; b++) 
    {
        line += "* "; // Creating a string for each line of the pattern
    }
    console.log(line);
}
// The outer loop controls the number of lines, the inner loop adds stars to each line

// Activity 5: Loop Control Statements

// Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
for(let i=1; i<=10; i++) 
{
    if(i == 5) continue; // continue keyword will skip to the next iteration if i==5
    console.log(i);
}

// Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
for(let i=1; i<=10; i++)
{
    console.log(i);
    if(i == 7) break; // break keyword will exit the loop when i==7
}