// // function
// // what --> function is a block of code that performs a 
// // specific task.
// // why --> to avoid code repetition and to make code modular 
// // and reusable.
// // how --> function keyword, name, parameters, body, return 
// // statement


// // Types of functions:-

// // function name(params) {} --> function declaration
// function greet(name){}

// // let fnc = function (){} --> function expression
// let fnc = function(){}

// // let fnc = () => {} --> arrow function --> fat arrow function
// let fnc2 = () => {}



// function temp_cart (){
// console.log("adding producat");
// }
// temp_cart("laptop");
// temp_cart("watch");
// temp_cart("mobile");

// // parameters vs arguments
// // parameters are the names listed in the function definition(params -- > () ni andar lakheli values)
// // arguments are the real values passed to the function (args -- > function call karti () ni andar lakheli(pass) kareli values )



// // function cart(producat){ // product -- params
// // console.log( `Adding ${  producat}` )
// // }
// // cart("Laptop"); // laptop -- args
// // cart("Mac Book");
// // cart("S25 ultra");

// // function Toy(producat, price){ // product -- params
// // console.log( `Toys ${producat} at ${price}` )
// // }
// // Toy("Fighter Get", 5000); // laptop -- args
// // Toy("Soft Toy", 2500);
// // Toy("Baby Toy", 600);



// // convert into arrow function
// // let fun = () => {}
// let cars = (cars, price) => {
// console.log( `Toys ${cars} at ${price}` );
// };
// cars("arrow finction -- BMW", 5000000);



// // convert into function expression
// // let fun = function () {}
// let bike = function (bike, price) {
// console.log( `Bike ${bike} at ${price}` );
// };
// bike("Dream Yuga", 90000);
// bike("HP sin 125CC", 115000);


// // default ,rest parameters in functions
// // default 
// function abcd(a=5,b=10){
//     console.log(a,b)
// }
// abcd(5);

// // use case -- fees / flipkart -- platform fee

// //rest
// function def(a,b,c,d,e,f,g){
//     console.log(a,b,c,d,e,f,g)
// }
// def(1,2,3,4,5,6,7);


// function def1(...number){
//     console.log(number)
// }
// def1(1,2,3,4,5,6,7,8,9,10);


// // early return -- > function mathi jaldi bahar nikalva mate
// function getValue1(collage) {
// if (collage > 7000000) return "Collage Fess:- 7000000";
// else if (collage > 400000) return "Collage Event:- 400000";    
// else if (collage > 150) return "Collage Place:- 150";
// return "Collage :- Dubi javo";
// }
// let result = getValue1(100);
// console.log(result);


// // first Class Function and their types:
// // function can be treated as variables
// // let temp_a = function(){} - first class function
// const cart5 = function (producat, price) {
// console.log( `Adding ${producat} at ${price}` );
// };
// cart5("function expression - S25 ultra", 69000);

// // function can be passed as arguments to other functions
// function temp_b(fnc){
// fnc();
// }
// temp_b(function fnc2(){
// console. log("First Class Function")

// });


// function can be returned from other functions
// function abcd() {
// return function () {
// console.log("function return other function")
// };
// }
// // abcd();
// abcd()(); // call a function that retrun other function


// higher order function (HOF)
// function that takes another function as an argument or returns a
//  function as a result (eva function je return kare ek function athava acpect kare ek function params ma)


// function abcd(val){val();} -- > abcd(function(){console.log ("hello")})


// function abcd(val){} -- > higher order function


// function abcd(){ return]function(){}} abcd()() -- > higher order


// pure vs impure function
// pure function --> function je same input par same output aapse ane koi bahar na state ne modify na kare
//(pure function --> je function bahar na state ne modify na kare)
// let a = 10;
// function abcd_pure()
// {
//     console.log("Hello");
// }
// abcd_pure();
// console.log("value of a",a);

// impure function --> function je same input par alag output aapse athava bahar na state ne modify 
// inpur function --> je function bahar na state ne modify kare
// function abcd_impure()
// {
//     a++; // modifying external state
//     console.log(a);
// }
// abcd_impure();


// closure function
// function je potana parent function na variables ne access kari shake
//  (return thava valo function use karshe perent function na koi variable) 
// function outer() {
//     let count = 0;
//     function inner() {
//         count++;
//         console.log("Count:", count);
//     }
//     return inner;
// }
// let fun=outer();
// fun();

// // my example 
// function admin(){
//     let username="admin is login";
//     function Username(){
//         console.log("Login is:", username);
//     }
//     return Username;
// }
// let AU = admin();
// AU();


//lexical scope --> neasted function can access variables declared in their outer scope

// function outer1(){
//     let outer_var = "outer function variable";
//     function inner1(){
//     let inner_var = "inner function variable";
//     console.log(outer_var); // outer1 function na variable ne access kari shake
//         function most_inner(){
//            console.log(inner_var); // inner1 function na variable ne access kari shake
//            console.log(outer_var); // outer1 function na variable ne access kari shake
//                let most_inner_var = "most inner function variable";
//                function abcd(){
//                 console.log(most_inner_var); // most_inner function na variable ne access kari shake
//                 console.log(inner_var);
//                 console.log(outer_var);
//                }
//                abcd();
//         }   
//         most_inner();
// }
// inner1();
// }
// outer1();



// IIFE --> Immediately Invoked Function Expression
// (function (){})();

// (function (){
//     console.log("IIFE function executed")
// }());

// Hosting  in function

// abcde();

// function abcde(){
//     console.log("Function hoisting example")
// }



// hoistedFunction1();
// let hoistedFunction1 = function () {
// console.log("Hoisted Function Expression called");
// }

// hoistedFunction2();
// let hoistedFunction2 = () =>{
// console.log("Hoisted Arrow Function called");
// }







// Examples 
/*
## Function Examples
<hr>
<div>
<h1> Example 1: </h1>
<p>What's the difference between function declaration and function expression in terms of hoisting?</p>
<p></p>
</div>
*/ 

// Example 1 Answer:
// // function name(params) {} --> function declaration
// function greet(name){}

// // let fnc = function (){} --> function expression
// let fnc = function(){}


/*
<div>
<h1> Example 2: </h1>
<p>greet();</p>
<p>function greet(){
    console.log("Hello!");
}</p>
<p>Ans or Err and Why</p>
</div>
*/

// Example 2 Answer:
// greet()
// function greet(){
//     console.log("Hello!");
// }


/*
<div>
<h1> Example 3: </h1>
<p>Convert normal function to Arrow Function</p>
<p>function add(a, b){
    return a + b;
}</p>
<p>Ans And How</p>
</div>
*/

// Example 3 Answer:

// let add = (a, b) => a + b;


/*
<div>
<h1> Example 4: </h1>
<p>Identify what is parms and what is args</p>
<p>function welcome(name){
    console.log("Welcome " + name);
}</p>
<p>welcome("user");</p>
<p>Ans and why</p>
</div>
*/

// Example 4 Answer:
// function welcome(name){
//     console.log("Welcome " + name);
// }
// welcome("user");
// parms --> name
// args --> "user"

/*
<div>
<h1> Example 5: </h1>
<p>how many parameters and args</p>
<p>function temp (a, b, c){
    console.log(a,b,c);
}</p>
<p>temp(1, 2)</p>
<p> Ans, Err and Why</p>
</div>
*/

// Example 5 Answer:
// function temp (a, b, c){
//     console.log(a,b,c);
// }
// temp(1, 2);
// parameters --> 3 (a, b, c)
// args --> 2 (1, 2)
// c will be undefined

/*
<div>
<h1> Example 6: </h1>
<p>Predict the output</p>
<p>function temp_user(name = "Guest"){
    console.log("Hello " + name);
}</p>
<p>temp_user();</p>
<p>Ans, Err and Why</p>
</div>
*/

// Example 6 Answer:
// function temp_user(name = "Harsh"){
//     console.log("Hello " + name);
// }
// temp_user();
// Output: Hello Harsh

/*
<div>
<h1> Example 7: </h1>
<p>what is ... operator and why use it  in function</p>
<p>function number(...numbers){
    console.log(numbers);
}</p>
<p>number(1, 2, 3, 4, 5)</p>
<p>Ans, Err and why</p>
</div>
*/

// Example 7 Answer:
// function number(...numbers){
//     console.log(numbers);
// }
// number(1, 2, 3, 4, 5);
// ... operator is called rest operator
// it is used to accept any number of arguments as an array


/*
<div>
<h1> Example 8: </h1>
<p>Use rest Parameters to accept any number of scores and return the total</p>
<p>function calculateTotal(...scores){
    let total = 0;
    for(let i=0; i<=scores.length; i++){
        total += scores[i];
    }
    return total;
}</p>
<p>function calculateTotal(...scores){
    let total = 0;
    scores.forEach(function(val){
        total = total + val;
    });
    return total;
}</p>
<p>calculateTotal(10, 20 ,30 ,40 ,50)</p>
<p>let sumtotal = calculateTotal(10, 20 ,30 ,40 ,50)</p>
<p>Ans, Err and Why</p>
</div>
*/

// Example 8 Answer:
// function calculateTotal(...scores){
//     let total = 0;
//     for(let i=0; i< scores.length; i++){
//         total += scores[i];
//     }
//     return total;
// }
// function calculateTotal(...scores){
//     let total = 0;
//     scores.forEach(function(val){
//         total = total + val;
//     });
//     return total;
// }
// let sumtotal = calculateTotal(10, 20 ,30 ,40 ,50);
// console.log(sumtotal);


/*
<div>
<h1> Example 9: </h1>
<p>Fix the function using early return</p>
<p>function checkAge(age){
    if(age < 18){
        console.log("Too Young");
    } else {
        console.log("Access Granted");
    }
}</p>
<p>Ans And how</p>
</div>
*/

// Example 9 Answer:
// function checkAge(age){
//     if(age < 18){
//         console.log("Too Young");
//         return;
//     } 
//     console.log("Access Granted");
// }
// checkAge(10);


/*
<div>
<h1> Example 10: </h1>
<p>What is the return value of above function</p>
<p>function f(){ return;}</p>
<p>Ans and Why</p>
</div>
 */

// Example 10 Answer:
// function f(){ return;}
// return value is undefined
// console.log(f());




/*

<div>
<h1> Example 11: </h1>
<p>What does is mean when we say "functions are first-class citizens"?</p>
<p>Ans and Why </p>
</div>
*/

// Example 11 Answer:


// Ans=In JavaScript, functions are called first-class citizens because they are treated like normal variables.

// Why:
// 1. Functions can be assigned to variables.
// 2. Functions can be passed as arguments to other functions.
// 3. Functions can be returned from other functions.
// 4. Functions can be stored in data structures like arrays and objects.



/*
<div>
<h1> Example 12: </h1>
<p>Can You assign a function to a variable and then all it?</p>
<p>let a = function(){console.log("Hello");}</p>
<p>a();</p>
</div>
*/

// Example 12 Answer:
let a = function(){
    console.log("Hello");}
a();
/* Answer:
Yes, a function can be assigned to a variable and called using that variable.

Why:
Functions are values in JavaScript, so they can be stored in variables just like numbers or strings. */


/*
<div>
<h1> Example 13: </h1>
<p>Pass A function into anthor funtion and excute it inside.</p>
<p>Ans and Why, How</p>
<p>function abcd(val){val()}</p>
<p>abcd(function(){ console.log("Hello")})</p>
</div>
*/

// Example 13 Answer:
function abcd(val){
    val()
}
abcd(function(){
    console.log("Hello")
})
/* Answer:
Yes, a function can be passed as an argument to another function and executed inside it.
Why:
Functions are first-class citizens in JavaScript, meaning they can be treated like any other value. This allows us to pass functions as arguments to other functions.
How:
Define a function that takes another function as a parameter and call that parameter as a function inside the outer function. */



/*
<div>
<h1> Example 14: </h1>
<p>What is higer order function?</p>
<p>Ans and Why</p>
</div>
*/

// Example 14 Answer:
function higherOrderFunction(val){
    val();
}
higherOrderFunction(function(){
    console.log("Higher Order Function Example");
})

/* Answer:
Higher-order functions are useful for creating abstractions and managing side effects in functional programming. They allow us to create more flexible and reusable code by treating functions as first-class citizens. */

/*
<div>
<h1> Example 15: </h1>
<p>Identify what is higher order function?</p>
<p>[1,2, 3].map(function(x){
    return x * 2;
})</p>
<p>.map is a function</p>
<p>Ans and Why</p>
</div>
*/

// Example 15 Answer:
[1,2, 3].map(function(x){
    return x * 2;
})

/* Answer:
Yes, .map is a higher-order function.
Why:
.map takes a function as an argument and applies it to each element of the array, returning a new array with the results. This is the defining characteristic of higher-order functions. */ 


/*
<div>
<h1> Example 16: </h1>
<p>pure or impure function?</p>
<p>let a = 5;</p>
<p>function num(num){
total += num;
}
<p>num(3);</p>
<p>Ans and Why</p>
</div>
*/

// Example 16 Answer:
let ab = 5;
function num(num, total){
    return total + num;
}
num(3, ab);
/* Answer:
This is an impure function.
Why:
The function modifies an external variable total, which is outside its own scope. This means that the function's output depends not only on its input but also on the state of the external variable, making it impure. */  


/*
<div>
<h1> Example 17: </h1>
<p>convert example 16 function into pure function?</p>
<p>Ans and how</p>
</div>
*/

// Example 17 Answer:
let abcd = 5;
function num1(num, total){
    return total + num;
}
num1(3, abcd);
/* Answer:
To convert the function into a pure function, we need to ensure that it does not modify any external state and only relies on its input parameters to produce an output.
How:
1. Remove any references to external variables.
2. Ensure that the function only uses its input parameters to compute the result.
3. Return the computed result without modifying any external state. */


/*
<div>
<h1> Example 18: </h1>
<p>What is Closure? When is it created?</p>
<p>Ans and Example</p>
</div>
*/
// Example 18 Answer:
function outer() {
    let count = 0;
    function inner() {
        count++;
        console.log("Count:", count);
    }
    return inner;
}
let fun=outer();
fun();
/* Answer:
A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function's variables and parameters, even after the outer function has returned.
When is it created?
A closure is created when a function is defined inside another function and the inner function is returned or passed outside the outer function. The inner function retains access to the outer function's scope, allowing it to use its variables even after the outer function has finished executing. */


/*
<div>
<h1> Example 19: </h1>
<p>What's logged?</p>
<p>function outer(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    };
}</p>
<p>const counter = outer();</p>
<p>counter();</p>
<p>counter();</p>
<p>Ans, Err and Why</p>
</div>
*/
// Example 19 Answer:
function outer(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    };
}
const counter = outer();
counter();
counter();

/* Answer:
The output will be:
1
2
Why:
The outer function initializes a variable count to 0 and returns an inner function that increments and logs the count variable. Each time the returned function (counter) is called, it has access to the count variable from its closure, allowing it to increment and log the updated value. Thus, the first call logs 1, and the second call logs 2. */  


/*
<div>
<h1> Example 20: </h1>
<p>Convert below function into an IIFE:</p>
<p>function init(){
    console.log("Initialized");
}</p>
<p>Ans and Why</p>
</div>
*/
// Example 20 Answer:
(function init(){
    console.log("Initialized");
})();
/* Answer:
An IIFE (Immediately Invoked Function Expression) is a function that is defined and executed immediately after its creation. To convert the given function into an IIFE, we wrap the function definition in parentheses and add another set of parentheses at the end to invoke it immediately.
why:
IIFEs are used to create a new scope and avoid polluting the global namespace. They are often used for initialization code that needs to run once when the script is loaded.
*/


/*
<div>
<h1> Example 21: </h1>
<p>What is the use of IIFE? Name one real-world use case.</p>
<p>let fun=(function(){
    let score = 0; // this is private variable
    return{
        getScore: function(){
            console.log(score);
        },
        setScore: function(val){
            score = val;
        }
    }
})()</p>
<p>Ans and Why</p>
</div>
*/
// Example 21 Answer:
let fun1=(function(){
    let score = 0; // this is private variable
    return{

        getScore: function(){

            console.log(score);
        },
        setScore: function(val){
            score = val;
        }
    }
})()
/* Answer:
IIFEs are used to create a private scope for variables and functions, preventing them from polluting the global namespace. This is particularly useful for encapsulating functionality and maintaining state without exposing it to the outside world.
Real-world use case:    
A common use case for IIFEs is in module pattern implementations, where you want to create a module with private variables and methods that can only be accessed through public methods. In the example above, the score variable is private and can only be accessed or modified through the getScore and setScore methods. This encapsulation helps in maintaining data integrity and avoiding unintended side effects from external code.
*/


/*
<div>
<h1> Example 22: </h1>
<p>What will be the output here and why?</p>
<p>temp_var();</p>
<p>var temp_var = function(){
    console.log("Hello");
}</p>
<p>Ans and Why</p>
</div>
*/

// Example 22 Answer:
temp_var();
var temp_var = function(){
    console.log("Hello");
}
/* Answer:
The output will be a TypeError: temp_var is not a function.
This is because function expressions are not hoisted in the same way as function declarations. When the code is executed, temp_var is hoisted as a variable declaration but is initialized to undefined. Therefore, when we try to call temp_var() before its assignment, it results in a TypeError since undefined is not a function.
*/

/*
<div>
<h1> Example 23: </h1>
<p>What will be the output here and why?</p>
<p>temp_var();</p>
<p>function temp_var(){
    console.log("Hello");
}</p>
<p>Ans and Why</p>
</div>
*/

// Example 23 Answer:
temp_var();
function temp_var(){
    console.log("Hello");
}
/* Answer:
The output will be "Hello".
This is because function declarations are hoisted to the top of their scope, meaning that the entire function definition is available before any code is executed. Therefore, when we call temp_var() before its definition, it works correctly and logs "Hello" to the console.
*/



/* */