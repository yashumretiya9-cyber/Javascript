// Array -- Hold multiple values at same time
// [1, 2, 3, 4, 5]
// ["Hello", "a", "B", "C"]
// [2, "Bye", "Hello", 50]

// create
// define a variable = [multiple values]
// let arr = [1, 2, 3, 4];
// console.log(arr);

// access
// position = [0 1 2 3]
// access
// array_name [position]
// arr[3], arr[2], arr[10]


// modify
// array_name(position) = new value
// arr[1]=100
// console.log(arr);


// Array Methods: (variable_name.method_name)
// push, pop, shift, unshift, splice, slice, reverse, sort
// push --> enter new values into array -- place it into last
// arr.push(5);

// variable || function.method --> koi variable ke function in pachhal dot(.) kari ne lakho to te method kevai
// use case -- enter new products into existing products list
// let snaks=["Balaji vafer","Balaji chips","Balaji bhungda","Balaji vatka"]
// console.log(snaks);


// pop --. remove last value into array
// arr.pop()
// use case -- remove last product you add into your list
// snaks.pop();
// console.log(snaks);


// shipt -- remove first value int array
// arr.shift()
// console.log(arr);

// unshift -- add value into array -- first
// arr.unshift(10)
// console.log(arr);


// splice - remove value into array -- spacific position and specification number of values
// into () - first index (position), how many value you want to remove 
// let e = ["10","20","30","40","50","60"];
// console.log(e);

// e.splice(3 , 2);
// console.log(e);
// use case -- select msg and remove multiple msg at on click


// slice - copy values from array -- specific position and specific number of values
// new variable = array_name.slice(start index, end index)
// start index -- include into copy
// end index -- not include into copy
// let f = [10,20,30,40,50,60];
// let new_f = f.slice(1, 3);
// // use case -- copy specific data and save it into new variable
//  let snaks=["Balaji vafer","Balaji chips","Balaji bhungda","Balaji vatka"]
//  console.log(snaks)
// let new_snaks = snaks.slice(1, 3);
// console.log(snaks)

// generate a report based on date and generate a file or save the file into your local machine


// generate a report based on date and generate a file or save the file into your local machine

// splice vs slice
// splice -- remove value into main array or modify new array
// slice -- copy value from main array and create a new array that hold the value that you can into

// reverse -- reverse value of array
// let g = [10,20,30,40,50];
// g.reverse();
// console.log(g);

// // use case -- show latest update first into your fronted
// let games = ["Free Fire","COC","COD","PUBG","Game og Thor"];
// games.reverse();
// console.log(games);


// // sort -- set into ascending order
// let h = [50, 20, 80, 10, 40];
// h.sort();
// console.log(h);


// let h1 = [11, 62, 3, 4, 25];
// let sr = h1.sort(function(a, b){
// return a - b; // ascending order
// })
// console.log(h1);

// let h2 = [11, 62, 3, 4, 25];
// let sr1 = h2.sort(function(a, b){
// return b - a; // decending order
// })
// console.log(h2); 


// Q1. push()
// You are building a to-do app. Add a new task 'Buy milk' to the tasks array.
// let tasks = ['Wake up', 'Brush teeth'];
let Milk = ['Milk Soda','Dairy Milk','Milk Choclate'];
console.log(Milk);



// Q2. pop()
// Remove the last notification from the notifications array.
let notifications = ['Email', 'Message', 'Reminder'];
notifications.pop();
console.log(notifications)



// Q3. shift()
// A queue system removes the first customer. Remove the first customer.
let customers = ['Customer1', 'Customer2', 'Customer3'];
customers.shift()
console.log(customers)



// Q4. unshift()
// A new song is added to the beginning of the playlist.
let playlist = ['Song B', 'Song C'];
playlist.unshift('Song A')
console.log(playlist)




// Q5. splice()
// In a classroom list, remove 'Alex' and add 'John' and 'Sara' in the same position.
let students = ['Mike', 'Alex', 'Emma', 'Sophia'];
students.splice(1, 1, 'John', 'Sara');
console.log(students);




// Q6. splice()
// From the menu, remove 2 items starting from index 1.
let menu = ['Burger', 'Pizza', 'Pasta', 'Salad'];
menu.splice(1, 2);
console.log(menu);



// Q7. slice()
// Create a new array that contains only weekend days.
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let weekend = days.slice(5);
console.log(weekend);



// Q8. reverse()
// Reverse the order of levels in a game.
let levels = ['Easy', 'Medium', 'Hard'];
levels.reverse();
console.log(levels);



// Q9. sort()
// Sort the scores in ascending order.
let scores = [45, 12, 78, 34, 89];
scores.sort((a, b) => a - b);
console.log(scores);


// Q10. sort() with numbers
// Sort the prices from lowest to highest.
let prices = [199, 49, 999, 299, 149];
prices.sort((a, b) => a - b);
console.log(prices);



// Q11. slice() vs splice()
// From the array, create a new array of the first 3 items WITHOUT changing the original array.
let products = ['Laptop', 'Phone', 'Tablet', 'Monitor', 'Keyboard'];
let firstThree = products.slice(0, 3);
console.log(firstThree);
console.log(products);



// Q12. splice() complex
// In the array below:
// 1. Remove 'Blue'
// 2. Add 'Purple' and 'Orange' at the same position
let colors = ['Red', 'Green', 'Blue', 'Yellow'];
// ans:colors.splice(2, 1, 'Purple', 'Orange')
colors.splice(2, 1, 'Purple', 'Orange');
console.log(colors);



// Q13. reverse() + push()
// Reverse the array and then add 'Final Step' at the end.
let steps = ['Step 1', 'Step 2', 'Step 3'];
steps.reverse();
steps.push('Final Step');
console.log(steps);



// Q14. sort() strings
// Sort names alphabetically, ignoring case sensitivity.
let names = ['alice', 'Bob', 'charlie', 'David'];
// ans: names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(names);




// Q15. Combination Question
// You are managing a movie watchlist:
// 1. Add 'Inception'
// 2. Remove the first movie
// 3. Sort the list alphabetically
let movies = ['Avatar', 'Titanic', 'Gladiator'];
movies.push('Inception');   // add
movies.shift();             // remove first
movies.sort();              // sort
console.log(movies);



// Q16. splice() return value
// What does the splice method return in this case?
let nums1 = [1, 2, 3, 4];
nums1.splice(1, 2);
let removed = nums1.splice(1, 2);
console.log(removed);



// Q17. slice() immutability check
// After executing slice, does the original array change?
let nums2 = [10, 20, 30, 40];
let result = nums2.slice(1, 3);
console.log(nums2);
console.log(result);


// Q19. reverse() mutation
// After reversing, what happens to the original array reference?
let letters = ['a', 'b', 'c'];
let reversedLetters = letters.reverse();


// Q21. splice() edge case
// What happens if deleteCount is 0?
let arr1 = ['x', 'y', 'z'];
arr.splice(1, 0, 'new');
console.log(arr1);


// Q23. slice() negative index
// What elements are returned?
let values = [100, 200, 300, 400, 500];
let sliced = values.slice(-3, -1);
console.log(sliced);



// Q24. splice() vs slice() decision
// Which method would you use if you want to:
// a) Update the original array
// b) Keep the original array unchanged
let fruits = ['Apple', 'Banana', 'Mango', 'Orange'];

// Remove 'Banana' and add 'Grapes'
fruits.splice(1, 1, 'Grapes');

console.log(fruits);

let fruits1 = ['Apple', 'Banana', 'Mango', 'Orange'];

// Get first 2 fruits
let newFruits = fruits.slice(0, 2);

console.log(newFruits);
console.log(fruits1);





// Q25. Chained methods (brain teaser)
// What is the final value of arr?
let arr2 = [1, 2, 3];
arr2.push(arr2.shift());
console.log(arr2);