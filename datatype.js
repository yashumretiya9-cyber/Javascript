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








