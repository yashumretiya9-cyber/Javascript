/*
## Write Answers, Errors, How, Why for Every Questions

## 🟢 VARIABLES & DATA TYPES (1–15)

> Use the given variables while solving. Do NOT change values unless asked.

```js
let a = "a";
let b = "10";
let c = 10;
let d;
let e = null;
```

1. Compare `a == "a"` and `a === "a"`. Log both results.
2. Compare `b == c` and `b === c`. Explain the output using code comments.
3. Convert `b` so that `b === c` becomes `true`.
4. Check whether `d` is `undefined` without using `typeof`.
5. Write a condition that safely checks both `d` and `e`.
6. Write code to prove that `null == undefined` but `null !== undefined`.
7. Show type coercion using `c + b` and fix it.
8. Check if `c` is `NaN` after doing `c / "a"`.
9. Convert `b` to a number using **two different approaches**.
10. Convert `c` to a string using **two different approaches**.
11. Write code that turns any value into a boolean.
12. Store a number in `const` and explain why reassignment fails (using code).
13. Copy a primitive value and prove changes don’t affect the original.
14. Write a comparison that returns `false` but looks like it should be `true`.
15. Fix a buggy comparison caused by implicit type conversion.

---

## 🟢 OPERATORS (16–30)

16. Check if a number is even **without `%` operator**.
17. Find maximum of two numbers **without `if` or `Math.max()`**.
18. Write a calculator using only arithmetic operators.
19. Use logical operators to provide default values.
20. Rewrite an `if-else` using ternary operator.
21. Chain multiple ternary conditions.
22. Use `&&` to conditionally execute a function.
23. Demonstrate short-circuit behavior with code.
24. Compare two values of different data types.
25. Write code using nullish coalescing (`??`).
26. Show difference between `||` and `??` using examples.
27. Use spread operator to merge arrays.
28. Use rest operator to accept variable arguments.
29. Create a copy of an array and modify it safely.
30. Demonstrate operator precedence using code.

---

## 🟡 CONTROL FLOW (31–45)

31. Write a grading system using `if-else`.
32. Convert the grading system into `switch`.
33. Demonstrate switch fall-through behavior.
34. Write nested `if` logic for login validation.
35. Refactor nested `if` into clean conditions.
36. Write code that executes only when two conditions are true.
37. Handle multiple conditions using logical operators.
38. Write a menu-driven program using `switch`.
39. Show what happens when `break` is missing.
40. Rewrite `switch` logic using `if-else`.
41. Validate input range using conditions.
42. Write code that exits early from a function.
43. Implement a simple traffic light system.
44. Convert real-life decision logic into code.
45. Handle edge cases in conditional logic.

---

## 🟡 LOOPS (46–60)

46. Print numbers from 1 to 100 using a loop.
47. Print only even numbers using loop.
48. Stop a loop when a condition is met.
49. Skip numbers divisible by 3.
50. Find sum of numbers using loop.
51. Reverse a number using loop.
52. Count digits in a number.
53. Find factorial using loop.
54. Generate Fibonacci sequence.
55. Break out of nested loops.
56. Use `continue` in a loop.
57. Create a multiplication table.
58. Detect infinite loop and fix it.
59. Compare `for` vs `while` using code.
60. Replace a loop with array methods.

---

## 🟡 FUNCTIONS (61–80)

61. Write a function that returns sum of two numbers.
62. Rewrite it using arrow function.
63. Use default parameters.
64. Write a function that returns another function.
65. Pass a function as an argument.
66. Write a callback-based example.
67. Create a pure function.
68. Demonstrate side effects in a function.
69. Write a recursive function.
70. Convert recursive logic to iterative.
71. Write a function that accepts unlimited arguments.
72. Implement a higher-order function.
73. Use closure to preserve state.
74. Create a function counter.
75. Implement currying.
76. Write a memoized function.
77. Handle invalid input inside a function.
78. Compare arrow vs normal function behavior.
79. Write a function that runs only once.
80. Refactor repeated logic into a function.

---

## 🔵 ARRAYS (81–101)

81. Find sum of array elements.
82. Find maximum element in array.
83. Remove duplicates from array.
84. Find second largest number.
85. Filter positive numbers.
86. Map array values to squares.
87. Use `reduce()` to count elements.
88. Chain `filter → map → reduce`.
89. Find first matching element.
90. Check if any value satisfies condition.
91. Check if all values satisfy condition.
92. Extract first and rest values using destructuring.
93. Merge arrays using spread operator.
94. Clone array deeply.
95. Sort array without `.sort()`.
96. Rotate array elements.
97. Flatten nested array.
98. Implement custom `map()`.
99. Implement custom `filter()`.
100. Implement custom `reduce()`.
101. FINAL BOSS ⭐ Combine multiple array methods with constraints.



# ✅ ANSWERS & HOW (Concise)

> Each answer shows **what happens** and **why**. Keep code minimal.

## Variables & Data Types (1–15)

1. `==` checks value, `===` checks value + type → both true here.
2. `b == c` true (coercion), `b === c` false (string vs number).
3. `b = Number(b)` or `b = +b`.
4. `d === undefined`.
5. `d == null` safely checks both `null` & `undefined`.
6. `null == undefined // true`, strict comparison is false.
7. `c + b` becomes string concat → fix by converting `b` to number.
8. `c / 'a'` → `NaN`; check via `Number.isNaN()`.
9. `Number(b)`, `+b`.
10. `String(c)`, `c.toString()`.
11. `Boolean(value)` or `!!value`.
12. `const` blocks reassignment, not mutation.
13. Primitives copy by value → independent.
14. Example: `0 == false` → true.
15. Use strict equality to avoid coercion.

## Operators (16–30)

16. Use bitwise: `(n & 1) === 0`.
17. Ternary: `a > b ? a : b`.
18. Basic ops with `+ - * /`.
19. Defaults via `||` or `??`.
20. `condition ? a : b`.
21. Nest ternaries carefully.
22. `cond && fn()`.
23. OR stops at first truthy.
24. Coercion occurs with `==`.
25. `x ?? y` only for null/undefined.
26. `||` treats falsy; `??` doesn’t.
27. `[...a, ...b]`.
28. `function f(...args){}`.
29. `const copy=[...arr]`.
30. Parentheses change order.

## Control Flow (31–45)

31. `if/else` grading.
32. `switch(score)`.
33. Missing `break` falls through.
34. Nested checks for auth.
35. Combine conditions.
36. Use `&&`.
37. Logical operators.
38. `switch(menu)`.
39. Execution continues.
40. Equivalent conditions.
41. Range checks.
42. Early `return`.
43. `switch(color)`.
44. Translate rules to code.
45. Handle edges first.

## Loops (46–60)

46. `for` loop.
47. `i+=2` or check even.
48. `break`.
49. `continue`.
50. Accumulator.
51. Mod/div loop.
52. Count divisions.
53. Multiply loop.
54. Iterative fib.
55. Label or flags.
56. Skip iteration.
57. Nested loop.
58. Fix condition.
59. Use cases differ.
60. Prefer array methods.

## Functions (61–80)

61. `function sum(a,b){return a+b}`.
62. `(a,b)=>a+b`.
63. Defaults in params.
64. Return function.
65. Pass fn.
66. Callback execution.
67. No side effects.
68. Mutates outer state.
69. Base case.
70. Loop version.
71. Rest params.
72. Takes/returns fn.
73. Closure retains state.
74. Increment counter.
75. Partial application.
76. Cache results.
77. Guard clauses.
78. `this` differs.
79. IIFE/flag.
80. DRY refactor.

## Arrays (81–101)

81. `reduce` sum.
82. Track max.
83. Filter/indexOf.
84. Two-pass or one-pass.
85. `filter(n>0)`.
86. `map(n*n)`.
87. `reduce((c)=>c+1)`.
88. Chain methods.
89. `find`.
90. `some`.
91. `every`.
92. `[first,...rest]`.
93. `[...a,...b]`.
94. Recursive copy.
95. Implement sort.
96. Slice/concat.
97. Recursion.
98. Loop + callback.
99. Conditional push.
100. Accumulator logic.
101. Combine with constraints.
*/