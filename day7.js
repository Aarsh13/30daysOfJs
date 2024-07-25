// Day 7: Objects

// Tasks/Activities:

// Activity 1: Object Creation and Access
// • Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.

const book={
    title:"To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
}

console.log(book);

// • Task 2: Access and log the title and author properties of the book object.

console.log(book.title);
console.log(book["author"]);

// Activity 2: Object Methods
// • Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.

book.info= ()=> `${book.title} was written by ${book.author}`;
console.log(book.info())

// • Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

book.changeYear= function(year){
    this.year=year;
    console.log(`Changed book's year to ${year}`) ;
}

book.changeYear(2024);
console.log(book.year);

// Activity 3: Nested Objects
// • Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
const Library = {
    name: "30daysofJS Library",
    books: [
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            year: 1960
        },
        {
            title: "Pride and Prejudice",
            author: "Jane Austen",
            year: 1813
        },
        {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            year: 1925
        },
        {
            title: "War and Peace",
            author: "Leo Tolstoy",
            year: 1869
        }
    ]
};

console.log(Library);

// • Task 6: Access and log the name of the library and the titles of all the books in the library.

console.log(`${Library.name} has the following books: `);
Library.inventory= function(){Library.books.forEach(book=> {console.log(book.title)})}
Library.inventory();

// Activity 4: The 'this' Keyword

// • Task 7: Add a method to the book object that uses the 'this' keyword to return a string with the book's title and year, and log the result of calling this method.

book.checkYear= function(){ console.log(`${this.title} was published in ${this.year}`)};
book.checkYear();


// Activity 5: Object Iteration
// • Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.

for(key in book)
{
    console.log(`${key}: ${book[key]}`);
}

// • Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.

console.log(Object.keys(book));
console.log(Object.values(book));