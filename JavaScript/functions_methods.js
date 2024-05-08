// Functions
function countVowels(str) {
    let count = 0;
    for (const char of str.toLowerCase()) {
      if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
        count++;
      }
    }
    console.log(count);
  }
countVowels("Education");

// Arrow Functions
const countVowels = (str) =>{
    let count = 0;
    for (const char of str.toLowerCase()) {
      if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
        count++;
      }
    }
    console.log(count);
}
countVowels("Education");

// forEach Loop in Arrays
let arr = [1 ,2, 3, 4, 5];

arr.forEach((val) => {
    console.log(val**2);
})

// Map
num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const newNum = num.map((val) => {
    return val * 2;
})
console.log(newNum)

// Filter
const newNum2 = num.filter((val) => {
    return val % 2 === 0;
})
console.log(newNum2)

// Reduce
let n = prompt("Enter a number : ");
let arr = [];

for (i = 1; i <= n; i++){
    arr[i-1] = i
}
console.log(arr);

let output = arr.reduce((res, curr) => {
    return res + curr
})
console.log(output)