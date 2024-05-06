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