// Variables and Data Types

    // Activity 1: Variable Declaration

// Task 1: Declare a variable using var, assign it a number, and log the value to the console.
var num=192;
console.log(num);

// Task 2: Declare a variable using let, assign it a string, and log the value to the console.
let str="30 Days of Javascript";
console.log(str);

    // Activity 2: Constant Declaration

// Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.
const boolVar= true;
console.log(boolVar);

    // Activity 3: Data Types

// Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.
let num1=100;
console.log(typeof(num1));
let str1="Hello its me!";
console.log(typeof(str1));
let bool1=false;
console.log(bool1);
let obj1={
      name_obj: "John Doe",
      age_obj: 30,
      profession_obj: "Developer",};
console.log(typeof(obj1));
let arr1=[1,2,3,4,5];
console.log(typeof(arr1));
    
    // Activity 4: Reassigning Variables

// Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.

let fruit="Apple"; //Initial declaration
console.log(fruit)

fruit="Banana"  //Reassignment
console.log(fruit)

    // Activity 5: Understanding const

// Task 6: Try reassigning a variable declared with const and observe the error.

const veggie="Broccoli"; //Initial declaration using const
console.log(veggie);

veggie="Cucumber"; //Reassignment
console.log(veggie); //TypeError: Assignment to constant variable.

    // Feature Request

// 1. Variable Types Console Log: Write a script that declares varibles of diffeent datatypes and logs both the value and the type of each variable to the console.
let myNum=999;
console.log(myNum, typeof myNum);
let myString="This is my String";
console.log(myString, typeof myString);
let myBool=false;
console.log(myBool, typeof myBool);
let myArr=['This', 'is', false, '1', 1, 'my arr'];
console.log(myArr, typeof myArr);
let myObj= {"objName": "myObj"};
console.log(myObj, typeof myObj);

// 2. Reassignment Demo: Create a script that demonstatres the difference in between let and const when it comes to reassignment.

let radius=10;
console.log(radius);
radius=14;
console.log(radius)
// let does not give any erroe and can be reassigned

const pi=3.14;
console.log(pi);
pi=4; //TypeError: Assignment to constant variable.
console.log(pi); // Variables defined with const cannot be Redeclared 







