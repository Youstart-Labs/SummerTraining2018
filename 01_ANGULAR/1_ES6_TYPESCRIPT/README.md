# EcmaScript6

1. `let` and `const`
2. Arrow functions
3. Default parameters
4. for of loop
5. Spread attributes
6. Maps
7. Sets
8. Classes and properties/methods
9. Import/Export

[Read these in details here](https://codeburst.io/es6-tutorial-for-beginners-5f3c4e7960be)

## let and const

`let` has a block scope unlike  `var` which can be accessed outside block.
`const` is to make a variable as constant. It is useful in case of declaring normal constants or avoding re-assignment of Reference variables (i.e arrays and objects).

## Arrow functions

This is a new style of function declaration.
Basic differences are :

* Use of `()=>{}` in place of `function()`
* shorthand return functions  `a=>a` instead of `function(a){return a}`

## Default Parameters

Use of default value when args don't have a value given i.e. `function(m,g=9.8){ return m*g ;}`

## for of loop

for..of iterates through list of elements (i.e) like Array and returns the elements (not their index) one by one.

```javascript
let arr = [2,3,4,1];
for (let value of arr) {
 console.log(value);
}
```

## Spread attributes

Spread attributes help to spread the expression as the name suggests. It converts a list of elements to an array and vice versa.

`arr = [1,2,3,4,5,6]`  is coverted to `1,2,3,4,5,6` using `...arr` and vice versa.

## Maps

Map holds key-value pairs. It’s similar to an array but we can define our own index. And indexes are unique in maps.

```javascript
var NewMap = new Map();
NewMap.set('name', 'John'); 
NewMap.set('id', 2345796);
NewMap.set('interest', ['js', 'ruby', 'python']);
NewMap.get('name'); // John
NewMap.get('id'); // 2345796
NewMap.get('interest'); // ['js', 'ruby', 'python']
```

## Sets

Sets are used to store the unique values of any type. Simple..!

```javascript
var sets = new Set();
sets.add('a');
sets.add('b');
sets.add('a'); // We are adding duplicate value.
```

## Class

Classes are used to have object-oriented approach in JS. Classes have constructors, properties and methods. Class methods don't require `function` keyword

```javascript
class People {
constructor(name) {
      this.name = name;
    }
    getName() {
      return this.name;
    }
    setName(name) {
      this.name = name;
    }
}
```

## Import/Export

You can export and import varibales from one javascript file to other.

`export { myFunction };`

`import {myFunction} from ".\test"`


# TypeScript

## Basic Data Types

1. Boolean
2. Number
3. String
4. Array
5. Tuple
6. Enum
7. Any

[Read these in details here](https://www.typescriptlang.org/docs/handbook/basic-types.html)

## Interfaces

Use interfaces to fix some properties of a data type which are compulsory i.e. Peope - firstName, lastName