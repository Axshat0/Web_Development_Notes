// LOOPs in javascript

// for loop
for (let i = 1; i <= 5; i++) {
    console.log("Hello world");
}

// while loop
let num = 0
while (num <= 5) {
    console.log("num =", num);
    num++
}

// do while loop
let i = 1
do {
    console.log("i'm do while loop")
    i++
} while (i <= 5);

// For-of loop
let str = "JavaScript";
let size = 0;

for(let i of str){
    console.log("i = ", i);
    size++
}
console.log(size)

// For-in loop
let student = {
    name: "Naruto",
    age: 17,
    cgpa: 7.9,
    isPass: true
};
for(let key in student){
    console.log("Key = ", key, " Value = ", student[key]);
}

// Strings in js
let str  = "Luffy"
console.log(str.length); //Find Lenght
console.log(str[2]); //String Indices
console.log(str.toUpperCase( )); //To UpperCase
console.log(str.toLowerCase( )); //To LowerCase

let char = "   Naruto uzumaki   "
console.log(char.trim( )); // removes whitespaces

let name = "Spongebob";
console.log(`Hello ${name}`); //String Interpolation
console.log(name.slice(6, 9));  // returns part of string
console.log(char.concat(name)) // joins str2 with str1
console.log(name.replace("Sponge", "Stone"));
console.log(name.charAt(6)) // character at index
