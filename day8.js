// Day 8: ES6+ Features

// Tasks/Activities:

// Activity 1: Template Literals
// - Task 1: Use template literals to create a string with variables for a person's name and age, and log it to the console.

let personName= "Rohit";
let personAge=40;

console.log(`Hello, I am ${personName} and I am ${personAge} years old`);

// - Task 2: Create a multi-line string using template literals and log it to the console.

let multiLineString=`
Hi, if you are reading. 
This is the 8th day of 30 days of JS.
It has been good and I have learnt mant things.
Maybe this is long enough. So, bye and apologies
you had to witness this lame text.
 `;

console.log(multiLineString);

// Activity 2: Destructuring
// - Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
let JS0_4daysTopics=["console.log", "datatypes", "operators", "conditionals", "loops"];

let [day0, day1]=JS0_4daysTopics;

console.log(day0);
console.log(day1);

// - Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.

const book={
    title:"To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
}

let {title, author}=book;

console.log(title);
console.log(author);

// Activity 3: Spread and Rest Operators
// - Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

let JS5_8daysTopics=["functions", "arrays", "objects", "spread and rest operators"];

let JS0_8daysTopics=[...JS0_4daysTopics, ...JS5_8daysTopics];
console.log(JS0_8daysTopics);

// - Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

function sum(...args)
{
    let sum=0;
    for (const arg of args) {

        sum+=arg;
        
    }

    return sum;
}

let randomSum=sum(1,2,3,4,5);
console.log(randomSum);

// Activity 4: Default Parameters
// - Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

let twoProduct=(a,b=1)=>a*b;

console.log(twoProduct(11,5));
console.log(twoProduct(11));

// Activity 5: Enhanced Object Literals
// - Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
const bookname= "The Great Gatsby";
const bookauthor= "F. Scott Fitzgerald";
const bookyear= 1925;
const bookInfo={
    bookname,
    bookyear,
    bookauthor,

    yearInfo(){
        console.log(`${bookname} was written in ${bookyear}`);
    },

    authorInfo()
    {
        console.log(`${bookauthor} was a very famous writer.`)
    }
}

console.log(bookInfo);
bookInfo.yearInfo();
bookInfo.authorInfo();

// - Task 9: Create an object with computed property names based on variables and log the object to the console.

let key1="name";
let key2="contact";
const car={

    [`car_${key1}`]: "Toyota Corolla",
    [`owner_${key1}`]: "John Doe",
    [key2]:{
        [`${key2}_number`]: 1234567890,
        [`${key2}_mail`]: "123@gmail.com"
    }
}

console.log(car)
