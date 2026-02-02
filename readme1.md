# JS Files Content

## controllflow.js
```javascript
// control flow statements in JavaScript

// if...else statement
// if(condition){}

if (12 < 13) {
    console.log(True);
}

if (15 < 12) {
    console.log(True);
}   // condition is false that why if statement not run






// if...else
if (12 < 13) {
    console.log("TRUE");
} else {
    console.log("FALSE");
}


if (12 < 13) {
    console.log(True);
}

// condition is false that why if statement not run

else {
    console.log(false);
}   


if (!12) {
    console.log("NUMBER");
} else {
    console.log("NOT A NUMBER");
}


// if else if else statement
/*
if(logggedIn && Admin){
    console.log("show admin ");
} else if (loggedIn){
    console.log("show user ");
} else {
    console.log("show login page");
}
// */ 


// if (12 > 13) {
//     console.log("12 is greater");
// } else if (12 === 13) {
//     console.log("12 is equal to 13");
// } else {
//     console.log("13 is greater");
// }



// switch statement

/*
switch ('First50') { // value --> Case value sathe match karshe
    case 'First50':
        console.log("50% Off on First Order")
        break;

    case 'BOGO':
        console.log("Buy one get one")
        break;

    case 'BlackFriday':
        console.log("It's Black Friday Sale - get at Rs. 50")
        break;

    default:
        console.log("Offer Not Vaild")
        break;
}*/ 


switch ('Event') {
    case 'Event':
        console.log("AD Create Event");
         break;
    case 'Puzzel':
        console.log("Puzzel solved Event");
        break;
    case 'Wed Fight':
        console.log("Wed Fighting Event");
        break;
    default:
        console.log("You can not choice any event");
}


// early return pattern 



function score(value) {
    if (value < 90) {
        return "A grade";
    } else if (value < 80) {
        return "B grade";
    } else if (value < 70) {
        return "C grade";
    } else if (value < 60) {
        return "D grade";
    }else {
    return "Fail";
}
}
score(100);
// console.log(score(100));


function score1(value) {
    if (value < 90)  return "A grade";
     else if (value < 80) return "B grade";
     else if (value < 70) return "C grade";
     else if (value < 60) return "D grade";
    else return "F grade";
}


function score2(value) {
    if (value < 60)  return "F grade";
     else if (value < 70) return "D grade";
     else if (value < 80) return "C grade";
     else if (value < 90) return "B grade";
    else return "A grade";
}


function score3(value) {
    if (value < 90 && value >= 80)  return "A grade";
     else if (value < 80 && value >= 70) return "B grade";
     else if (value < 70 && value >= 60) return "C grade";
     else if (value < 60 && value >= 50) return "D grade";
    else return "F grade";
}


// function rps(user, computer){ 
//     if(user === "rock" && computer === "scissor") return "user wins";
//     if(user === "scissor" && computer === "paper") return "user wins";
//     if(user === "paper" && computer === "rock") return "user wins";
//     if (user === "scissor" && computer === "rock") return "computer wins";
//     if (user === "paper" && computer === "scissor") return "computer wins";
//     if (user === "rock" && computer === "paper") return "computer wins";
//     return "tie";
// }

function rps(user, computer) {
    if (user === "rock" && computer === "scissor") return "user wins";
    if (user === "scissor" && computer === "paper") return "user wins";
    if (user === "paper" && computer === "rock") return "user wins";

    if (user === "scissor" && computer === "rock") return "computer wins";
    if (user === "rock" && computer === "paper") return "computer wins";
    if (user === "paper" && computer === "scissor") return "computer wins";

    return "it's a tie";
}


function rps1(user, computer){
    if(user === computer) return "it's a tie";
      if  (user === "rock" && computer === "scissor") return "user wins"; 
      if  (user === "scissor" && computer === "paper") return "user wins";
      if  (user === "paper" && computer === "rock") return "user wins";
    return "computer wins";
}
```

## datatype.js
```javascript
// Datatype
// 1. Primitive Datatype
let a = 10; // number
let b = a;
a = a + 5;

// 2. non Primitive Datatype
let v1=[1,2,3]; // array
let v2=v1;
v1.pop(4); // remove last element from array


// primitive datatypes
let d="name";
d= "new name";
d=`name`;

// number

let e =12;
e= 14.5;

// boolean
let f = true;
f= false;

// null
let g = null;

// undefined
let h; // undefined

//symbol
let u1= Symbol("id");
let u2= Symbol("id");

//check u1===u2
let obj= {uid:1, name:"gautam" , age:24, email:"test@test.com"};
let u3=Symbol("uid");
obj[u3]= "111";

// BigInt
let number = BigInt(123456789090);
number = number + 4n;

let number2 = 123456789090n;
number2 = number2 + 4n;

console.log(number);
console.log(number2);


// non primitive datatypes
// array0
let arr= ["name", "age","email"];
let obj= {uid:1, name:"gautam" , age:24, email:"gotu@gmailcom"};
function name(params)   {
}



//Dynamic Typing
let data = "gautam";
data=   12;
data= {};

// javascript --> typescript


// if (12 > 10) {
//     console.log("True");
// }

// other use in console under (!!value)


// Truthy vs Falsy Values
// 0, false,null, undefined, NaN, document.all, -- false
// ex. !! 0 -- check value is true and false
// ex. if(null){}, js convert it into false
// ex. if(-1){}, js convert it into true
// all -- > true
```

## function.js
```javascript
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
```

## loops.js
```javascript
// loops  --  repeating code blocks
// 1 1 1 1 1 1
// 1 2 3 4 5 6



// for loop
// kya thi javanu chhe --> kya sudhi javany chhe --> ketli vaar javanu chhe
// for(let i=1; i<=10; i++){
//     console.log(i);
// }
// for(let i=20; i>=10; i--){
//     console.log(i);
// }


// while loop 
// kaya thi javanu chhe --> Kaya rokavanu chhe --> Kevi rite javanu chhe
// while (ex. 1 -> Hello world -> stop when condition false)
// start
// while(end){
// code
// change
// }

// let j = 10;
// while(j<=20){
//     console.log("j:", j);
//     j++;
// }

// let a = 1;
// while(a>=20){
//     console.log("a:", a);
//     a--;
// }


// loop
// let k = 50;
// while (k >= 20) {
//     console.log(k);
//     k++;
// }

// let a = 60;
// while (k >= 20) {
//     console.log(a);
//     a--;
// }

// let c = 30;
// while (c >= 25) {
//     console.log(c);
//     a--;
// }
// do while loop



// let d="hello world";
// while(d <= 10)      {   
//     console.log(d);
//     d++;
// }



// let f=50;
// while(f >= 60)      {
//     console.log(f);
//     f++;
// }


// let q=50;
// while(q <= 60)      {
//     console.log(q);
//     q++;
// }



//do while loop
// do {} while (end);
// start
// do{
// code
// change}
// while(end);
// let g = 10;
// do {
//     console.log("do while:", g);
//     g++;
// } while (g <= 20);


// let h = 10;
// do {
//     console.log("do while:", h);
//     h--;
// } while (h >= 1);



// break
// for (let i = 1; i <= 100; i++) {
//     console.log( i);
//     if (i == 20) {
//         break;
//     }
// }



// continue
// for (let i = 1; i <= 10; i++) {
//     if (i == 5) {
//         continue;
//     }
//     console.log(i);
// }

// for (let i = 10; i >= 1; i--) {
//     if (i == 5) {
//         continue;
//     }
//     console.log(i);
// }


/* example convert html to javascript  */


{/* <div>
Example 1:
<p>Print number from 1 to 10 using a for loop.</p>
</div> */}



for(let i=1; i <= 10; i++)
{
    console.log(i);
}



{/* <div>
<h1>Example 2:</h1>
<p>Print number from 10 to 1 using while loop.</p>
</div > */}



let i=10;
while(i>=1){
    console.log(i);
    i--;
} 
 

// <div>
// <h1>Example 3:</h1>
// <p>Print even numbers from 1 to 20 using for loop.</p>
// <p>for(let i=1; i<=20; i++){
//     if(i%2 ===0){
//     console.log(i);
//     }
// }</p>
// </div> }

for (let i=1; i<=20; i++){
    if(i%2 ===0){
    console.log(i);
    }
}


// <div>
// <h1>Example 4:</h1>
// <p>Print odd numbers from 1 to 15 using while loop.</p>
// <p>let i= 1;</p>
// <p>while(i<=15){
//     if(i%2 !==0){ // or (i%2 ===1)
//     console.log(i);
//     }
//     i++;
// }</p>
// </div>
// <div>

let i1= 1;
while(i1<=15){
    if(i1%2 !==0){ 
    console.log(i1);
    }
    i1++;
}

// <h1>Example 5:</h1>
// <p>Print the multiplication table of 5.</p>
// <p>
// for(let i=1; i<=10; i++){
//     console.log(`5 x ${i} = ${5*i}`);
// }
// </p>
// </div>

for (let i=1; i<=10; i++){
    console.log(`8 x ${i} = ${8*i}`);
}

// <div>
// <h1>Example 6:</h1>
// <p>Find the sum of numbers from 1 to 100 using a loop.</p>
// <p>
// let sum = 0;
// for(let i=1; i<=100; i++){
//     // let sum =0;
//     sum = sum + i;
//     // console.log(sum);
// }
// console.log(sum);
// </p>
// </div>

let sum = 0;
for(let i=1; i<=100; i++){
    sum = sum + i;  
}
console.log(sum); 


// <div>
// <h1>Example 7:</h1>
// <p>Print all numbers between 1 to 50 that are divisible by 3.</p>
// <p>
// for(let i=1; i<=50; i++){
//     if(i%3 === 0){
//         console.log(i);
//     }
// }
// </p>
// </div>

for (let i=1; i<=50; i++){
    if(i%3 === 0){
        console.log(i);
    }
}

// <div>
// <h1>Example 8:</h1>
// <p>Ask the user for a number and print whether each number from 1 to that number is even or odd.</p>
// <p>
// let num = prompt("give a number");
// for(let i=1; i <=numl i++){
//     if(i%2 ===0){
//         console.log(i, " is even");
//     }else{
//         console.log(i, " is odd");
//     }
// }
// </p>
// </div>

let num =  prompt("give a number");
for(let i=1; i <=num; i++){
    if(i%2 ===0){
        console.log(i, " is even");
    }else{
        console.log(i, " is odd");
    }
}

// <div>
// <h1>Example 9:</h1>
// <p>Count how many numbers between 1 to 100 are divisible by 3 or 5.</p>
// <p>
// for(let i=1; i<=100; i++){
//     if(i%3 ===0 || i%5 ===0){
//         console.log(i);
//     }
// }
// </p>
// </div>

for (let i=1; i<=100; i++){
    if(i%3 ===0 || i%5 ===0){
        console.log(i);
    }   
}

// <div>
// <h1> (Break and Continue)Example 10:</h1>
// <p>Stop at First Multiple of 7</p>
// <p>Write a Loop from 1 to 100 that:</p>
// <p>Prints Each number</p>
// <p>Stop Completely when it finds the first number divisible by 7</p>
// <p>
// for(let i=1; i<=100; i++){
//     console.log(i);
//     if(i%7 ===0){
//         break;
//     }
// }
// </p>
// </div>

for(let i=1; i<=100; i++){
    console.log(i);
    if(i%7 ===0){
        break;
    }
}

// <div>
// <h1> (Break and Continue)Example 11:</h1>
// <p>Skip Multiples of 3</p>
// <p>Write a Loop From 1 to 20 that:</p>
// <p>Skip number divisible by 3</p>
// <p>Prints all other numbers</p>
// <p>
// for(let i=1; i<=20; i++){
//     if(i%3 ===0){
//         continue;
//     }
//     console.log(i);
// }
// </p>
// </div>

for(let i=1; i<=20; i++){
    if(i%3 ===0){
        continue;
    }
    console.log(i);
}


// <div>
// <h1> (Break and Continue)Example 12:</h1>
// <p>Print First 5 Odd Numbers</p>
// <p>Write a loop from 1 to 100 that:</p>
// <p>Prints only 5 odd numbers</p>
// <p>Then stops the loop</p>
// <p>Use Both if, continue and a counter + break</p>
// <p>
// count = 0;
// for(let i =1; i<=100; i++){
//     if(i%2 ===1){
//         count++;
//         console.log(i)
//     }
//     console.log(i);
//     if(count ===5){cha
//         break;
//     }
// }
// </p>
// </div>

count = 0;
for(let i =1; i<=100; i++){
    if(i%2 ===1){
        count++;
        console.log(i)
    }
    console.log(i);
    if(count ===5){
        break;
    }
}
```

## operator.js
```javascript
// operators
// Arithmetic, comparison, logical, assignment, unary, ternary

// Arithmetic:
// +, -, /, *, **, %

// + --> Add and concatenation
// ex. 1+2, "user" + "name"

// -
// ex. 2 - 1

// /, *
// ex. 240/2, 25*2

// % (modulas) (sheshfal)
// ex. 12%4 --> 0
// ex. 9%2 --> 1

// ** (square)(exposination)
// ex. 2**3 --> 8


// Comparison (ans: true, false)

// ==
// ex. 12 == 13, 12 == "12" (don't check type, only check value, not strict comparison)

// ===
// ex. 12 === "12" (check type and value, strict comparaison)

// !=
// ex. 12 != 13 (reverse of ==, not strict comparison)

// !==
// ex. 12 !== "12" (reverse of ===)

// >=
// ex. 22 >= 22

// <=
// ex. 13 <= 13

// <
// ex. 12 < 113, 12 < 9, 22 < 22

// >
// ex. 12 > 113, 12 > 9, 13 > 13


// assignment
// =
//  give a value, value assignment operator
// ex. let a = 12;
// +=
// ex. a += 3; (add value into old value and save it into a)
// -=
// ex. a -= 4; (subtract value into old value and save it into a)
// *=
// ex. a *= 2;
// /=
// ex. a /= 2;
// %=
// ex. a %= 2; (give remainder)


// logical
// && (AND)
// ex. true && true --> true  12 < 13 && 14 < 15 --> true
// false && true --> false  12 < 10 && 14 < 15 --> false
// true && false --> false
// false && false --> false

// || (OR)
// ex. true || true --> true
// false || true --> true
// true || false --> true
// false || false --> false

// ! (NOT)
// ex. !true --> false
// !false --> true
// !12 --> false --> !!12 --> true
// Unary Operator
// + - ! typeof ++ --
// +
// convert string to number
// ex. +"5" --> 5
// +"Name" --> NaN
// -
// ex. -5
// !
// ex. !12 --> false
// typeof
// ex. typeof "name" --> string
// ++
// ex. let a = 12
// a++ --> 12 // post ex. a++ + a => 25
// ++a --> 13 // pre ex. ++a + a => 26
// --
// ex. let a = 3
// a--
// a++


// Ternary
// ? :
// condition ? true case to print this : false case to print this
// let a = 12 > 13 ? console.log("true") : console.log("false");

// typeof null --> object
// typeof [] --> object,let a=[]; a instanceof Array --> true
// instanceof --> check type of reference data type // don`t typeof for refrence data type
// typeof NaN --> number
// typeof --> premitive data type mate use kRVO
// instanceof --> refrence data type mate use karvo





//Example : 1
// let x = 10;
// let y = 20;
// if(x>5 && y > 5){
//     console.log("Both are greater than 5");
// }else{
//     console.log("One or both are not greater than 5");
// }




// //Example : 2
// let isAdmin = true;
// let isLoggedIn = false;
// if(isAdmin || isLoggedIn){
//     console.log("Acess granted");
// }else{
//     console.log("Acess Denied");
// }
 



//Example : 3
// let temp = 35;
// if(!(temp > 30)){
//     console.log("Hot day");
// }else{
//     console.log("Pleasant day");
// }




//Example : 4
// let a = 0;
// if(a){
//     console.log("Truthy value");
// }else{
//     console.log("Falsy value");
// }

 


//Example : 5
// let score = 78;
// let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";
// console.log("Grade:", grade);





 
//Example : 6
// let points = 120;
// let status = points >= 100 ? "Gold" : points >= 50 ? "Silver" : "Bronze";
// console.log("Status:", status);





//Example : 7
// let loggedIn = true;
// let hasToken = false;
// let access = loggedIn && hasToken ? "Allow" : "Deny";
// console.log("access:", access);




 
//Example : 8
// let a = 5;
// a++;
// console.log(a);
 




//Example : 9
// let a = 8;
// ++a;
// console.log(a);





//Example : 10
// let b = 4;
// let c = b++;
// console.log(b, c);




//Example : 11 
// let b = 4;
// let c = ++b;
// console.log(b, c);




//Example : 12
// let m = 10;
// console.log(m--);
// console.log(m);

 


//Example : 13
// let n = 5;
// let result = n++ + ++n;
// console.log(result);





 
//Example : 14
// let likes = 100;
// function likePost(){
// result +=likes;
// }
// console.log(likePost());
// console.log(likes);

 


//Example : 15
// let count = 5;
// if(count-- === 5){   
// console.log("Matched");
// }else{
//     console.log("Not Matched"); 
// }
```

## variable.js
```javascript
var a= "temp";
var _12 = "Hello World";
var $12 ="hello";

//let 1temp = "temp"; // Invalid: cannot start with a digit
let temp = "temp";

//const 12temp = "Hello World"; // Invalid: cannot start with a digit
const temp_cont = "Hello World";


var c;
console.log(c); // Output: undefined

var d=10;
console.log(d); 

var b = "gautam";
console.log(b); 

var globlalVar = "I am global";

let e=23;
{
    let e=45;
    console.log("block scope : "+e)
}
function abc(){
    let e=30;
    console.log("function scope  : "+e);
}
abc();
console.log("global scope : "+e); 

console.log(temp_b);
var temp_b = 24;  

// console.log(j);
// let j = 12;

//Hoisting Imapact 
//hoisting --> when your create variable into js that break into two part first is declare 
// part that go to up and there initialization part that go down

var temp_d = 12;

//console.log(temp_e); // ReferenceError: Cannot access 'temp_e' before initialization

let temp_d_let =24;
//let variable not use befor initialization
//if you use console.log before initialization it give reference error
//Hoisting Imapact  on var,let,cont

/*
var --> hoisted and initialized with undefined.
let --> hoisted --> error
const --> hoisted --> error
*/


//Example 1
console.log(nm)
let nm = "Gautam";
//Answer Of Error
//underfined


//Example 2
console.log(bi);
var bi = "Hello";
var x = 1;
{
    var x= 2;

}
//example 3
console.log("Example 3");
var x = 1;
{
    let x= 2;
}
 console.log(x);


// Example 4
let f = 10;
{
    let a = 20;
    console.log("Inside:", f);
}
console.log("Outside:", f);

// Example 5
// const re-assignment vs mutation
const student = { name: "Raj" };
student.name = "Simran"; // Allowed (Mutation)
console.log(student.name);

// student = {}; // Error: Assignment to constant variable
```
