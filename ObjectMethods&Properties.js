// 1. Object.assign() → Merge multiple objects into one
let obj = { firstname: "abhishek" };
let obj1 = { age: 19, place: "kottayam" };

let merge = Object.assign(obj, obj1);
console.log("Merged Object:", merge);
// Output: { firstname: "abhishek", age: 19, place: "kottayam" }

// ✅ Use case: Combine multiple objects into one object (e.g. merging user info with address data)


// 2. Object.create() → Create an object with prototype inheritance
const person = {
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

const student = Object.create(person); // student inherits from person
student.name = "Abhishek";
student.greet();
// Output: Hello, my name is Abhishek

// ✅ Use case: When you want to create objects that share methods via prototype without copying them.


// 3. Object.entries() → Convert object to an array of key-value pairs
console.log("Entries of merged object:", Object.entries(merge));
// Output: [ ['firstname', 'abhishek'], ['age', 19], ['place', 'kottayam'] ]

// ✅ Use case: Useful when looping over objects using for...of, maps, or tables.


// 4. Object.fromEntries() → Convert array of key-value pairs back to an object
const entries = [["name", "John"], ["age", 25]];
const obj2 = Object.fromEntries(entries);
console.log("Object from entries:", obj2);
// Output: { name: "John", age: 25 }

// ✅ Use case: Often used with Object.entries() for transforming objects.


// 5. Object.groupBy() → Group array objects based on a condition
const students = [
  { name: "John", score: 85 },
  { name: "Sam", score: 60 },
  { name: "Mike", score: 90 },
];

const grouped = Object.groupBy(
  students,
  ({ score }) => (score >= 80 ? "Pass" : "Fail")
);

console.log("Grouped Students:", grouped);
// Output:
// {
//   Pass: [
//     { name: "John", score: 85 },
//     { name: "Mike", score: 90 }
//   ],
//   Fail: [
//     { name: "Sam", score: 60 }
//   ]
// }

// ✅ Use case: Group users/products/orders by status, category, etc.


// 6. Object.isExtensible() → Check if new properties can be added
//    Object.preventExtensions() → Stop adding new properties
const obj3 = {};
console.log("Is obj3 extensible before:", Object.isExtensible(obj3));
// Output: true

Object.preventExtensions(obj3); // prevent adding new properties
console.log("Is obj3 extensible after:", Object.isExtensible(obj3));
// Output: false

obj3.newKey = "test"; // ❌ Will NOT be added silently
console.log("After trying to add property:", obj3);
// Output: {} (property not added)

// ✅ Use case: When you want to lock an object from growing, e.g., API config objects.


// 7. Object.seal() → Prevent adding OR deleting properties, but allow modifying existing values
const obj4 = { name: "Abhi", role: "Developer" };

console.log("Before seal:", obj4);
Object.seal(obj4);
console.log("Is obj4 sealed:", Object.isSealed(obj4));
// Output: true

obj4.name = "Abhishek"; // ✅ Allowed (can modify existing)
delete obj4.role; // ❌ Not allowed
obj4.age = 20; // ❌ Not allowed
console.log("After seal:", obj4);
// Output: { name: "Abhishek", role: "Developer" }

// ✅ Use case: Lock structure of objects while still allowing updates to existing values.


// 8. Object.freeze() → Prevent adding, deleting, OR modifying any properties
const obj5 = { lang: "JavaScript" };
console.log("Before freeze:", obj5);

Object.freeze(obj5);
console.log("Is obj5 frozen:", Object.isFrozen(obj5));
// Output: true

obj5.lang = "Python"; // ❌ Not allowed
obj5.level = "Advanced"; // ❌ Not allowed
delete obj5.lang; // ❌ Not allowed
console.log("After freeze:", obj5);
// Output: { lang: "JavaScript" }

// ✅ Use case: Ideal for constants, configurations, or security-sensitive objects.


// 9. Object.values() → Get all values of an object
const user = { name: "John", age: 25 };
console.log("Object values:", Object.values(user));
// Output: ["John", 25]

// ✅ Use case: When you only care about values, e.g., summing numeric values.


// 10. Object.keys() → Get all keys of an object
console.log("Object keys:", Object.keys(user));
// Output: ["name", "age"]

// ✅ Use case: Useful for looping through object properties.
