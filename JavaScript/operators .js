// Arithmetic operators
let a = 2;
let b = 5;
console.log("a =", a, "b =", b);
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);
console.log("a ** b =", a ** b);

// Unary operators
let c = 5;
let d = 3;

c = c + 1 //6
c++ //6
console.log("c =", c);

d = d - 1 //2
d-- //2
console.log("d =", d);

// Assignment operators
let e = 5;
let f = 10;

e = e + 1; //6
e += 1 //6
console.log("e =", e);

f = f + 1; //11 
f +=  1 //11
console.log("f =", f);

// Comparison operators
let g = 8;
let h = 8;
console.log("g == h", g == h); //equal to
console.log("g != h", g != h); //not equal
console.log("g === h", g === h); //equal to & type
console.log("g !== h", g !== h); //not equal to & type

// >, <, >=, <=

// Logical operators
let i = 6
let j = 5

let cond1 = i > j; //true
let cond2 = i == j; //flase

console.log("cond1 && cond2 = ", cond1 && cond2); //need both conditions true
console.log("cond1 || cond2 = ", cond1 || cond2); //need one conditions true
console.log("!(6 < 5) = ", !(6 < 5)); //opposite
