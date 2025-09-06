"use strict" 
// "use strict" → Treat all JS code as newer (ES6+) version
// It helps avoid accidental errors (e.g., using undeclared variables)

// alert("Hello World!") // ❌ Won’t work in Node.js, only in browser

console.log("Hello World!"); // ✅ Works in both browser and Node.js console

// -------------------- Primitive Data Types --------------------
// These are stored directly in memory and are immutable

let name = "Ali";   // string → sequence of characters
let age = 19;            // number → integer/float (JS doesn’t differentiate)
let isLoggedIn = false;  // boolean → true/false

// typeof operator → tells us the type of a value
console.log(typeof name);       // "string"
console.log(typeof null);       // ⚠️ "object" (this is a well-known JS bug!)
console.log(typeof undefined);  // "undefined"

// ✅ Primitive Data Types in JavaScript
/*
1. number   → range: -(2^53 - 1) to 2^53 - 1
2. bigint   → for very large integers beyond number limit
3. string   → text, defined using "" or '' or ``
4. boolean  → true/false
5. null     → intentional empty value (represents "nothing")
6. undefined → variable declared but not assigned
7. symbol   → unique and immutable value (used for object keys)
*/

// -------------------- Reference (Non-Primitive) Data Types --------------------
// These are stored by reference (pointer to memory location)

let heroes = ["Ironman", "Spiderman", "Thor"]; // Array → list of values

let user = {   // Object → key-value pairs
    name: "Ibrahim",
    age: 20,
    isLoggedIn: true
};

function greet() {      // Function → block of code
    console.log("Hello, world!");
}

/*
📌 Difference between primitive and reference:
- Primitive → stored directly, compared by value
- Reference → stored as reference (memory address), compared by reference
*/

// -------------------- Extra Notes --------------------
/*
typeof null → "object" (bug in JavaScript since the beginning)
typeof array → "object" (special kind of object)
typeof function → "function" (special type of object)
*/