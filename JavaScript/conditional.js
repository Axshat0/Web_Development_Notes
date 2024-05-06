// Conditional Statements 
let age = prompt("Enter your age :");

if (age >= 18 && age < 60) {
    citizen = "Adult";
} else if (age >= 60) {
    citizen = "Senior";
} else {
    citizen = "Middle";
}
console.log(citizen);

//Simpler, compact if-else
let year = 25
            //Condition ? True  : false
let result = year >= 18 ? "Adult" : "Not Adult";
console.log(result);