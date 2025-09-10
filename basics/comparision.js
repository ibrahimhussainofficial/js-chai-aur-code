// =============================== Comparisons ==================================

// ======================= Basic numeric comparisons ========================
/*
console.log(2 > 1); // true
console.log(2 >= 1); // true
console.log(2 < 1); // false
console.log(2 <= 1); // false
console.log(2 == 1); // false
console.log(2 != 1); // true
*/

// ======================== String and number comparison =======================

// When comparing string with number → JavaScript automatically converts string to number
// (type coercion (implicit conversion) happens)

/*
"2" is converted to number 2 before comparison
console.log("2" > 1); // true
console.log("02" > 1); // true (because "02" → 2)
*/

// ================================= Comparisons with null ===============================
/*
console.log(null > 0);  // false → null is converted to 0 → 0 > 0 (false)
console.log(null == 0); // false → null is only loosely equal to undefined
console.log(null != 0); // true  → because null == undefined only
console.log(null >= 0); // true  → null → 0 → 0 >= 0 (true)
console.log(null <= 0); // true  → (same reason as above)
console.log(null < 0);  // false → 0 < 0 (false)
*/
/*
📌 Important Note:
- null behaves strangely in comparisons:
   → Equality (==) check: null is only equal to undefined
   → Relational checks (<, >, >=, <=): null is treated as 0
*/

// ============================== Comparisons with undefined =============================
// All result in false except !=
/*
console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined == 0); // false
console.log(undefined != 0); // true
console.log(undefined >= 0); // false
console.log(undefined <= 0); // false
*/
/*
📌 Important Note:
- undefined is not equal to anything except itself (and null with ==)
- In numeric comparisons, undefined always results in false
*/

// ========================= Strict vs Loose Equality =========================
/*
console.log("2" === 2); // false → strict equality (===) checks type + value
console.log("2" == 2);  // true  → loose equality (==) converts "2" → 2
*/
/*
📌 Equality Rules:
- === → strict equality (no type conversion, safest to use)
- ==  → loose equality (performs type coercion, can cause unexpected results)
- Best practice → Always prefer === to avoid hidden type conversion issues
*/