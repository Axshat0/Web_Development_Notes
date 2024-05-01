// console. log() method is a built-in function in JavaScript that allows you to print output to the browser's console.
console.log("hello world");

// Variable rules.
// Variable names are case sensitive.
name = "spongebob";
Name = "Patrick";
console.log(name);
console.log(Name);

// Only a letters, digits, underscore(_) and $ is allowed(not even space), to give names.
// Reserved wordscan't be variable name.

// Let, const and var
// var: a global scope variable, can be re-declared and updated

var name = "eren";
name = "armin";
console.log(name);

// let: a block scope variable, can't be re-declared and but can be updated.
let number = 12345;
number = 54321;
console.log(number);

// const: a block scope variable, can't be re-declared or updated.
const pi = 3.1415
console.log(pi)

// Data type
// Number
let number = 123

// String
let name = "Spongebob"

// Boolean
let pi = 3.14

// Null
let age = null

//Undefined
let stars = undefined

// Object
const student = {
    name : "Sasuke",
    age : 27,
    cgpa : 8.9,
    isPass : true
};
console.log(student);
console.log(student.name)
