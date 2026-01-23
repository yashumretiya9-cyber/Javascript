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
