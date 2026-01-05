

#### 1) What is the difference between var, let, and const?
ans: var is function-scoped and can be redeclared and updated. It is hoisted and initialized as undefined, which can lead to unexpected bugs.

    let is block-scoped and can be updated but not redeclared in the same scope. It is hoisted but not initialized, so accessing it before declaration causes an error.

    const is also block-scoped, but it cannot be reassigned after declaration. However, objects and arrays declared with const can still be mutated.

#### 2) What is the difference between map(), forEach(), and filter()? 

#### 3) What are arrow functions in ES6?

#### 4) How does destructuring assignment work in ES6?

#### 5) Explain template literals in ES6. How are they different from string concatenation?
