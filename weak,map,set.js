//  Set in JavaScript

// A Set is a built-in JavaScript object that stores unique values of any type (primitive or object).
// Duplicates are automatically removed.

// | Method          | Description                | Example           |
// | --------------- | -------------------------- | ----------------- |
// | `add(value)`    | Adds a new element         | `mySet.add(5)`    |
// | `delete(value)` | Removes an element         | `mySet.delete(2)` |
// | `has(value)`    | Checks if value exists     | `mySet.has(3)`    |
// | `clear()`       | Removes all elements       | `mySet.clear()`   |
// | `size`          | Returns number of elements | `mySet.size`      |


let set =new Set();
set.add('a');
set.add('b');
set.add('b');
set.add('a');

set.delete('b');
console.log('set size:',set.size);
console.log(set.has('a'));
set.clear();
console.log(set);



//  WeakSet in JavaScript

// Similar to Set but only stores objects (not primitives).
// Holds weak references → objects can be garbage-collected when no other reference exists.
// Not iterable (cannot use for...of).

let ws=new WeakSet();

const Obj={
    name:'abhishek'
}
const obj={
    name:'shishu balan'
}
ws.add(Obj);
ws.add(obj);
ws.add(Obj);

console.log(ws.has(obj));
ws.delete(Obj);



// Map in JavaScript
// A Map is a key-value pair collection.
// Keys can be any type (object, function, primitive).
// Maintains insertion order.

// | Method         | Description                | Example                  |
// | -------------- | -------------------------- | ------------------------ |
// | `set(key,val)` | Adds or updates key-value  | `map.set("name","Abhi")` |
// | `get(key)`     | Returns value for a key    | `map.get("name")`        |
// | `has(key)`     | Checks if key exists       | `map.has("age")`         |
// | `delete(key)`  | Removes key-value pair     | `map.delete("age")`      |
// | `clear()`      | Removes all entries        | `map.clear()`            |
// | `size`         | Returns number of elements | `map.size`               |

let map=new Map();
map.set("name","sagar");
map.set(obj,"oooo");
map.set("age",233);

console.log(map.get("name"));
console.log(map.has("name"));

console.log(map.size);

for(const [key,value] of map){
    console.log(`${key}:${value}`)
}

map.delete(obj);
map.clear()




// WeakMap in JavaScript

// Similar to Map but:
// Keys must be objects.
// Garbage-collected if no other reference exists.
// Not iterable.

let wm=new WeakMap()
const user1 = { id: 1 };
const user2 = { id: 2 };

wm.set(user1, "Premium");
wm.set(user2,'Free');

console.log(wm.get(user2));
wm.delete(user2);
console.log(wm.has(user1))







// | Feature     | **Set**       | **WeakSet**      | **Map**         | **WeakMap**      |
// | ----------- | ------------- | ---------------- | --------------- | ---------------- |
// | Stores      | Unique values | Objects only     | Key-value pairs | Key-value pairs  |
// | Keys Type   | N/A           | Objects only     | Any type        | Objects only     |
// | Duplicates  | ❌ No         | ❌ No            | ✅ Allowed      | ✅ Allowed       |
// | Garbage Col | ❌ No         | ✅ Yes           | ❌ No           | ✅ Yes           |
// | Iterable    | ✅ Yes        | ❌ No            | ✅ Yes          | ❌ No            |
// | Use Case    | Unique values | Tracking objects | Key-value store | Private metadata |












