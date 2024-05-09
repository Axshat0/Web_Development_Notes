// DOM
// When a web page is loaded, the browser creates a Document Object Model (DOM) of the page

// DOM Manipulation

// Selecting with id
let myId = document.getElementById("myId");
console.log(myId);
console.dir(myId);

// Selecting with class
let myClass = document.getElementsByClassName("myClass");
console.log(myClass);
console.dir(myClass);

// Selecting with tag
let tag = document.getElementsByTagName("h1");
console.log(tag);
console.dir(tag);

// Query Selector
console.dir(document.querySelector(".myClass"));
console.dir(document.querySelector("#myId"));
console.dir(document.querySelector("h1"));

// tagName
let btn = document.querySelector(".btn");
console.log(btn.tagName);

// innerText
console.log(myId.innerText);

// innerHTML
let pss = document.querySelector(".pss");
console.log(pss.innerHTML);

// textContent
let div = document.querySelector(".class-div");
console.log(div.textContent);

// getAttribute
console.log(div.getAttribute("class"));
console.log(div.getAttribute("id"));

// setAttribute
let oldClass = document.querySelector("div");
console.log(oldClass.setAttribute("oldClass", "newClass")); 