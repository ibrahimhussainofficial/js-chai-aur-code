// ================================= Stack (Primitive) =================================

// In JavaScript, primitive types (String, Number, Boolean, null, undefined, Symbol, BigInt)
// are stored in the **stack**. This means their values are stored directly in memory.
// Assigning a primitive to another variable creates a **copy**, so changes to the new variable
// do not affect the original.

let name = "Ibrahim Hussain"       // 'name' stored in stack

let fullName = name                // A copy of 'name' is created and stored separately
fullName = "Syed Ibrahim Hussain"  // Changing 'fullName' does NOT affect 'name'

console.log(name);                 // Output: "Ibrahim Hussain"
console.log(fullName);             // Output: "Syed Ibrahim Hussain"

// Notes:
// - Primitive types are immutable in terms of their reference in memory.
// - Each variable has its own copy; changes do not reflect elsewhere.

// ========================== Heap (Reference / Non-Primitive) ==========================

// Non-primitive types (Objects, Arrays, Functions) are stored in the **heap**.
// Assigning them to another variable does NOT create a copy, it creates a **reference**.
// Both variables point to the same memory location, so changes via one variable
// affect the other.

let userOne = {
    email: "user@gmail.com",
    id: 123321
}

let userTwo = userOne // Both variables point to the same object in the heap

userTwo.id = 321      // Updating 'userTwo' also affects 'userOne' because they share the same reference

console.log(userOne); // Output: { email: "user@gmail.com", id: 321 }
console.log(userTwo); // Output: { email: "user@gmail.com", id: 321 }

// Notes:
// - Objects, arrays, and functions are stored in heap memory due to their dynamic size.
// - When you assign a heap object to another variable, both variables reference the same object.
// - To create a true copy of an object, methods like Object.assign() or spread operator {...} are needed.