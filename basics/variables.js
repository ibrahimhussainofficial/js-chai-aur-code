// ============== Variables in JavaScript ======================

// const → used for values that should NOT be reassigned
const firstName = "Ibrahim"

// let → used for block-scoped variables that CAN change
let lastName = "Hussain"

// var → old way of declaring variables (avoid using it)
// var is function-scoped, not block-scoped → can create bugs
var email = "ibrahimhussain.dev@gmail.com"

// declaring a variable without assigning a value → default is "undefined"
let age

// if we don’t use let/const/var, JS puts variable in the global scope (NOT recommended)
address = "Karachi, Pakistan"
// The above line is equivalent to var address = "Karachi, Pakistan"; in the global scope

/*
⚠️ Notes:
- Always prefer "const" for values that don’t need reassignment.
- Use "let" if the variable value will change later.
- Avoid "var" because of scope issues (function vs block).
- Never assign a variable without let/const/var → creates global variable.
*/

// =================== Trying to reassign values ====================

// firstName = "Ali" // ❌ Error: Cannot reassign const

lastName = "Ali"    // ✅ works → because we used let

email = "abc@gmail.com"  // ✅ works → var allows reassignment

address = "Pakistan"   // ✅ works but bad practice → implicitly global

// ========================== Output =============================

console.log(firstName); // prints "Ibrahim" to console

console.table([firstName, lastName, email, address, age])

// console.table displays data in a nice tabular format
// Output will show: 
// ┌─────────┬───────────────────────────────┐
// │ (index) │ Values                        │
// ├─────────┼───────────────────────────────┤
// │    0    │ 'Ibrahim'                     │
// │    1    │ 'Ali'                         │
// │    2    │ 'abc@gmail.com'               │
// │    3    │ 'Pakistan'                    │
// │    4    │ undefined                     │
// └─────────┴───────────────────────────────┘

// ============= Difference between Var, Let and Const ===============

// The difference between var, let and const is:
/*
1. var is function scoped, let and const are block scoped.
2. var can be redeclared and reassigned, let can be reassigned but not redeclared, and const cannot be redeclared or reassigned.
3. var is hoisted to the top of the function or global scope, let and const are hoisted to the top of the block scope but not initialized.
4. const must be initialized at the time of declaration, let and var can be declared without initialization.
5. const is used to declare constants, let is used to declare variables that can be reassigned, and var is used to declare variables that can be redeclared and reassigned.
*/