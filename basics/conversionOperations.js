// =================== Conversions ======================

// ================== Number Conversion ==================

let score = "45";

console.log(typeof score);  // "string"
console.log(typeof(score))  // "string"

let valueInNumber = Number(score); // Explicit conversion
let valueInNumber2 = +score;       // Shortcut (unary plus)

/*
console.log(typeof valueInNumber);   // "number"
console.log(typeof valueInNumber2);  // "number"
console.log(valueInNumber);   // 45
console.log(valueInNumber2);  // 45
*/

/*
📌 Notes:
- "123"   => 123
- "123abc" => NaN (Not a Number)
- "Ibrahim" → NaN
- true    => 1
- false   => 0
- null    => 0
- undefined => NaN
*/

// ================== String Conversion ==================

let anyNumber = 23;
// console.log(typeof anyNumber);  // "number"

let stringNumber = String(anyNumber); // Converts to string explicitly using String()
let stringNumber2 = anyNumber.toString(); // Converts to string using toString() method

/*
console.log(typeof stringNumber);   // string
console.log(typeof stringNumber2);  // string
console.log(stringNumber);   // "23"
console.log(stringNumber2);  // "23"
*/

/*
📌 Notes:
- 123        => "123"
- null       => "null"
- undefined  => "undefined"
- true       => "true"
- false      => "false"
*/

// ================== Boolean Conversion ==================

/*
let isLoggedIn = 1
console.log(Boolean(isLoggedIn)); // true

isLoggedIn = 0
console.log(Boolean(isLoggedIn)); // false

isLoggedIn = ""
console.log(Boolean(isLoggedIn)); // false

isLoggedIn = "Ibrahim"
console.log(Boolean(isLoggedIn)); // true

isLoggedIn = null
console.log(Boolean(isLoggedIn)); // false

isLoggedIn = undefined
console.log(Boolean(isLoggedIn)); // false
*/

/*
📌 Notes:
- 1 => true, 0 => false
- "" => false
- "abc" => true
- null/undefined => false
*/

// =================== Operations ===================

let value = 3
let negValue = -value
// console.log(negValue); // -3

// ================ Arithmetic operations ====================
/*
console.log(2+2); // Addition
console.log(2-2); // Subtraction
console.log(2*2); // Multiplication
console.log(2**3); // Exponentiation (2^3)
console.log(2/3); // Division
console.log(2%3); // Modulus (remainder)
*/

// =================== String concatenation =================
let str1 = "Ibrahim"
let str2 = " Hussain"
let str3 = str1 + str2 // Concatenation of strings
// console.log(str3);  // "Ibrahim Hussain"

// ================ Type Coercion (Implicit Conversion) ==============

// Type coercion (Implicit Conversion) with + operator
/*
console.log("1" + 2); // "12" (string)
console.log(1 + "2"); // "12" (string)
console.log("1" + 2 + 2); // "122" (left-to-right evaluation)
console.log(1 + 2 + "2"); // "32"  (1+2=3, then "3"+"2"="32")
*/

// console.log(+true); // 1
// console.log(+""); // 0

// Multiple assignment (bad practice due to low readability)
// let num1, num2, num3
// num1 = num2 = num3 = 2 + 2

// ===================== Increment operators ==================

let gameCounter = 100
// gameCounter++; // Post-increment → use value first, then increment
// ++gameCounter; // Pre-increment → increment first, then use value
// console.log(gameCounter);  // 102