1) What is the difference between var, let, and const?

Answer:

var is function-scoped and can be redeclared and updated.
It is hoisted and initialized as undefined, which can lead to unexpected bugs.

let is block-scoped and can be updated but not redeclared in the same scope.
It is hoisted but not initialized, so accessing it before declaration causes an error.

const is also block-scoped, but it cannot be reassigned after declaration.
However, objects and arrays declared with const can still be mutated.





2) What is the difference between map(), forEach(), and filter()?

Answer:

map() creates and returns a new array by transforming each element of the original array.

forEach() executes a function for each array element but does not return a new array.

filter() returns a new array containing only elements that satisfy a given condition.





3) What are arrow functions in ES6?

Answer:

Arrow functions are a shorter syntax for writing functions in JavaScript.
They use => and automatically bind the surrounding this value, unlike regular functions.





4) How does destructuring assignment work in ES6?

Answer:

Destructuring allows you to extract values from arrays or properties from objects
and assign them to variables in a single line.


Example (Array):

const [a, b] = [1, 2];


Example (Object):

const { name, age } = person;

This feature makes code cleaner and reduces repetitive access
to object or array values.






5) Explain template literals in ES6. How are they different from string concatenation?

Answer:

Template literals use backticks (`) instead of quotes and allow embedded expressions using ${}.


Example:

const msg = `Hello ${name}, you are ${age} years old`;

Unlike string concatenation ("Hello " + name),
template literals are easier to read, support multiline strings,
and allow expressions directly inside strings.
