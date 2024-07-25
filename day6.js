// Activity 1: Array Creation and Access

// • Task 1: Create an array of numbers from 1 to 5 and log the array to the console.

const numbers= [1,2,3,4,5];
console.log(numbers);

// • Task 2: Access the first and last elements of the array and log them to the console.

let numFirst= numbers[0];
console.log(numFirst);

let numLast= numbers.at(numbers.length-1);
console.log(numLast)

// Activity 2: Array Methods (Basic)

// • Task 3: Use the push method to add a new number to the end of the array and log the updated array.

let countries=["India", "Russia", "USA", "Australia", "France"];
console.log(countries);

countries.push("United Kingdom");

console.log(countries)

// • Task 4: Use the pop method to remove the last element from the array and log the updated array.

countries.pop();
console.log(countries);

// • Task 5: Use the shift method to remove the first element from the array and log the updated array.

countries.shift();
console.log(countries);

// • Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.

countries.unshift("Italy");
console.log(countries);

// Activity 3: Array Methods (Intermediate)

// • Task 7: Use the map method to create a new array where each number is doubled and log the new array.


const numArray=[1,2,3,4,5,6,7,8,9,10];

let twoTimes=(num)=>2*num;
let newArray= numArray.map(twoTimes);
console.log(newArray);

// • Task 8: Use the filter method to create a new array with only even numbers and log the filtered array.

let evenCheck=(num)=>num%2==0;
let evenArray=numArray.filter(evenCheck);
console.log(evenArray);

// • Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.

function sumArray(total, num)
{
    return total+num;
}
let sum=numArray.reduce(sumArray);
console.log(sum);

// Activity 4: Array Iteration

// • Task 10: Use a for loop to iterate over the array and log each element to the console.

const programmingLanguages = ['JavaScript', 'Python', 'Java', 'C++', 'Ruby', 'Go', 'Swift'];
console.log(programmingLanguages);

for(let i=0;i<programmingLanguages.length;i++)
{
    console.log(programmingLanguages.at(i));
}


// • Task 11: Use the forEach method to iterate over the array and log each element to the console.

function iterate(item)
{
    console.log(item);

}

programmingLanguages.forEach(iterate);

// Activity 5: Multi-dimensional Arrays

// • Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.

// Create a 3x3 matrix
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix);

// • Task 13: Access and log a specific element from the two-dimensional array.

let specificElement = matrix[1][2];
console.log("\nThe element at row 2, column 3 : "+ specificElement);
