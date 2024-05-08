//Arrays

let heroes = ["ironman", "hulk", "thor", "batman"];
let marks = [96, 75, 48, 83, 66];
let info = ["rahul", 86, "Delhi"];

//Arrays in JS
console.log(heroes.push("spiderman")); //add to end
console.log(heroes.pop()); //delete from end & return
console.log(heroes.toString( )); //converts array to string
console.log(heroes.concat(info)); // add
console.log(heroes.unshift("Antman")); //add to start
console.log(heroes.shift( )); //delete from start & return
console.log(heroes.slice(1, 3)); //returns a piece of the array

//Splice
let num = [1, 2, 3, 4, 5, 6]
// splice( startIdx, delCount, newEl1... )
num.splice(2, 2, 101, 202) //change original array (add, remove, replace)
console.log(num)

// Array Indices
console.log(heroes[0]);

for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}
