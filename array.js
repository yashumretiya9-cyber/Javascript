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


// // Q1. push()
// // You are building a to-do app. Add a new task 'Buy milk' to the tasks array.
// // let tasks = ['Wake up', 'Brush teeth'];
// let Milk = ['Milk Soda','Dairy Milk','Milk Choclate'];
// console.log(Milk);



// // Q2. pop()
// // Remove the last notification from the notifications array.
// let notifications = ['Email', 'Message', 'Reminder'];
// notifications.pop();
// console.log(notifications)



// // Q3. shift()
// // A queue system removes the first customer. Remove the first customer.
// let customers = ['Customer1', 'Customer2', 'Customer3'];
// customers.shift()
// console.log(customers)



// // Q4. unshift()
// // A new song is added to the beginning of the playlist.
// let playlist = ['Song B', 'Song C'];
// playlist.unshift('Song A')
// console.log(playlist)




// // Q5. splice()
// // In a classroom list, remove 'Alex' and add 'John' and 'Sara' in the same position.
// let students = ['Mike', 'Alex', 'Emma', 'Sophia'];
// students.splice(1, 1, 'John', 'Sara');
// console.log(students);




// // Q6. splice()
// // From the menu, remove 2 items starting from index 1.
// let menu = ['Burger', 'Pizza', 'Pasta', 'Salad'];
// menu.splice(1, 2);
// console.log(menu);



// // Q7. slice()
// // Create a new array that contains only weekend days.
// let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// let weekend = days.slice(5);
// console.log(weekend);



// // Q8. reverse()
// // Reverse the order of levels in a game.
// let levels = ['Easy', 'Medium', 'Hard'];
// levels.reverse();
// console.log(levels);



// // Q9. sort()
// // Sort the scores in ascending order.
// let scores = [45, 12, 78, 34, 89];
// scores.sort((a, b) => a - b);
// console.log(scores);


// // Q10. sort() with numbers
// // Sort the prices from lowest to highest.
// let prices = [199, 49, 999, 299, 149];
// prices.sort((a, b) => a - b);
// console.log(prices);



// // Q11. slice() vs splice()
// // From the array, create a new array of the first 3 items WITHOUT changing the original array.
// let products = ['Laptop', 'Phone', 'Tablet', 'Monitor', 'Keyboard'];
// let firstThree = products.slice(0, 3);
// console.log(firstThree);
// console.log(products);



// // Q12. splice() complex
// // In the array below:
// // 1. Remove 'Blue'
// // 2. Add 'Purple' and 'Orange' at the same position
// let colors = ['Red', 'Green', 'Blue', 'Yellow'];
// // ans:colors.splice(2, 1, 'Purple', 'Orange')
// colors.splice(2, 1, 'Purple', 'Orange');
// console.log(colors);



// // Q13. reverse() + push()
// // Reverse the array and then add 'Final Step' at the end.
// let steps = ['Step 1', 'Step 2', 'Step 3'];
// steps.reverse();
// steps.push('Final Step');
// console.log(steps);



// // Q14. sort() strings
// // Sort names alphabetically, ignoring case sensitivity.
// let names = ['alice', 'Bob', 'charlie', 'David'];
// // ans: names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
// names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
// console.log(names);




// // Q15. Combination Question
// // You are managing a movie watchlist:
// // 1. Add 'Inception'
// // 2. Remove the first movie
// // 3. Sort the list alphabetically
// let movies = ['Avatar', 'Titanic', 'Gladiator'];
// movies.push('Inception');   // add
// movies.shift();             // remove first
// movies.sort();              // sort
// console.log(movies);



// // Q16. splice() return value
// // What does the splice method return in this case?
// let nums1 = [1, 2, 3, 4];
// nums1.splice(1, 2);
// let removed = nums1.splice(1, 2);
// console.log(removed);



// // Q17. slice() immutability check
// // After executing slice, does the original array change?
// let nums2 = [10, 20, 30, 40];
// let result = nums2.slice(1, 3);
// console.log(nums2);
// console.log(result);


// // Q19. reverse() mutation
// // After reversing, what happens to the original array reference?
// let letters = ['a', 'b', 'c'];
// let reversedLetters = letters.reverse();


// // Q21. splice() edge case
// // What happens if deleteCount is 0?
// let arr1 = ['x', 'y', 'z'];
// arr1.splice(1, 0, 'new');
// console.log(arr1);


// // Q23. slice() negative index
// // What elements are returned?
// let values = [100, 200, 300, 400, 500];
// let sliced = values.slice(-3, -1);
// console.log(sliced);



// // Q24. splice() vs slice() decision
// // Which method would you use if you want to:
// // a) Update the original array
// // b) Keep the original array unchanged
// let fruits = ['Apple', 'Banana', 'Mango', 'Orange'];

// // Remove 'Banana' and add 'Grapes'
// fruits.splice(1, 1, 'Grapes');

// console.log(fruits);

// let fruits1 = ['Apple', 'Banana', 'Mango', 'Orange'];

// // Get first 2 fruits
// let newFruits = fruits.slice(0, 2);

// console.log(newFruits);
// console.log(fruits1);





// Q25. Chained methods (brain teaser)
// What is the final value of arr?
// let arr2 = [1, 2, 3];
// arr2.push(arr2.shift());
// console.log(arr2);


// let ar1 = [2,8,12,5,45,1]
// let sort_var = ar1.sort(function(a,b){
//     return a-b;
// })  
// let sort_var=ar1.sort((a,b)=> a-b) -- use array give a numeric values
// let ar2 = ['a','z','b','e','f','k']
// console.log(ar1);
// console.log(ar2);



// For Each Loop
// let i = [10,35,40,68]
// i.forEach(val =>{
//     let new_val = val+10;
//     console.log(new_val);
// })


// My Example
// let y =['Harsh','Hit','Bhavtik','Abhay','Om']
// y.forEach(b =>{
//     let new_b = b+'Just Chil ';
//     console.log(new_b);
// })


// .map() Method:
// map tyare j use karvu ke jare ek new array create karvo chhe
// first map create a black array -- only for understanding
// let data = [10, 20, 50, 40, 15] ;
// same like a for each loop but map return a new array

// let temp_data = data.map(val =>{
//     if(val > 20){
//         return val;
//     }
//     console.log(val);
// })


// My Example
// let Task = ['Task1','Task2','Task3','Task4','Task5']


// Real life Examples:

// 1. Double daily steps count
// Real life: Fitness app doubling step goal

// const steps = [1000, 2000, 3000];

// function doubleSteps(step) {
//   return step * 2;
// }

// const newSteps = steps.map(doubleSteps);
// console.log(newSteps);


// 2. Convert minutes to seconds
// Real life: Video duration calculation

// const minutes = [1, 5, 10];

// const seconds = minutes.map(function(min) {
//   return min * 60;
// });
// console.log(seconds)



// 3. Add ₹50 delivery charge to prices
// Real life: Food delivery app

// const price = [200, 350, 500];

// const finalPrices = price.map(price => price + 50);
// console.log(finalPrices)


// 4. Convert exam marks to grades
// Real life: Result system

// const marks = [35, 72, 88, 40];

// function getGrade(mark) {
//   return mark >= 40 ? 'Pass' : 'Fail';
// }

// const grades = marks.map(getGrade);
// console.log(grades)


// 5. Capitalize names
// Real life: Display usernames properly

// const names = ['rahul', 'neha', 'amit'];

// const formattedNames = names.map(name =>
//   name[0].toUpperCase() + name.slice(1)
// );
// console.log(formattedNames)


// 6. Apply 10% discount
// Real life: Shopping saleṇ

// const prices = [500, 1000, 1500];

// function applyDiscount(price) {
//   return price - price * 0.10;
// }

// const discounted = prices.map(applyDiscount);
// console.log(discounted);


// 7. Add bonus points to scores based on condition
// Real life: Game scoring system

// const scores = [45, 60, 85];

// const finalScores = scores.map(score => {
//   if (score >= 80) return score + 20;
//   if (score >= 50) return score + 10;
//   return score;
// });
// console.log(finalScores);



// 8. Convert temperatures with formula
// Real life: Weather app

// const celsius = [0, 20, 30];

// function toFahrenheit(temp) {
//   return (temp * 9/5) + 32;
// }

// const fahrenheit = celsius.map(toFahrenheit);
// console.log(fahrenheit);


// 9. Generate table of numbers
// Real life: Math learning app

// const numbers = [1, 2, 3, 4];

// const tableOfTwo = numbers.map(num => num * 2);
// console.log(tableOfTwo);


// 10. Combine map with string formatting
// Real life: SMS notification system

// const balances = [500, 1200, 300];

// const messages = balances.map(balance =>
//   `Your balance is ₹${balance}`
// );
// console.log(messages);

// filter
// filter tyare use karvu ke jare ek new array create karvo chhe with condition
// in return true/false
// if true -- > add into new array
// if else(false) -- > not add into new array
// let laptops_price = [15000, 20000, 30000, 65000,
// 99000, 45000];

// let expensive_laptops = laptops_price. filter((price) => {
// if (price > 30000) return true;
// });
// console.log(expensive_laptops);


// je value 30000 thi vadhare chhe te new array ma add thase and biji value ne array ma add nahi kare
// use case -- data ma thi specific data new array ma store karvo hoy based on condition




// ### 1. Get even numbers
// **Real life:** Find even roll numbers

// const numbers = [1, 2, 3, 4, 5, 6];
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers);

// ---

// ### 2. Filter adults
// **Real life:** Allow only 3+ users

// const ages = [2, 1, 10, 16, 5];
// function isAdult(age) {
//   return age >= 18;
// }
// const adults = ages.filter(isAdult);
// console.log(adults);

// ---

// ### 3. Remove empty items
// **Real life:** Clean user input

// const inputs = ['Hello', '', 'World', '', 'JS'];
// const validInputs = inputs.filter(text => text !== '');
// console.log(validInputs);

// ---

// ### 4. Filter passing marks
// **Real life:** Exam result system

// const marks = [35, 72, 88, 40, 25];
// const passedStudents = marks.filter(mark => mark >= 40);
// console.log(passedStudents);

// ---

// ### 5. Get affordable prices
// **Real life:** Shopping app price filter

// const prices = [199, 499, 999, 1499, 299];
// const affordable = prices.filter(price => price <= 500);
// console.log(affordable);

// ---

// ### 6. Filter long words
// **Real life:** Search keyword validation

// const words = ['hi', 'hello', 'javascript', 'ok'];
// function isLongWord(word) {
//   return word.length > 3;
// }
// const longWords = words.filter(isLongWord);
// console.log(longWords);

// ### 7. Filter positive numbers
// **Real life:** Bank transaction validation

// const transactions = [200, -100, 500, -50, 300];
// const credits = transactions.filter(amount => amount > 0);
// console.log(credits);

// ---

// ### 8. Filter numbers within a range
// **Real life:** Score selection

// const scores = [45, 60, 85, 30, 90];
// const selectedScores = scores.filter(score => score >= 50 && score <= 90);
// console.log(selectedScores);
 


// ex. poduct ma thi specific price na producat new array ma store karva hoy
// if you want to show only expensive producat on your homepage
// if you want to filter producat based on price
// let product_type = ["Mobile", "Tablet", "Laptop","Mouse", "Keyborad"];
// let filter_product_type = product_type.filter((type) => {
// if (type === "Tablet" || type === "Mobile")
//      return true;
// });
// console.log(filter_product_type);



// reduce
// reduce tyare j use karvu ke jare ek single value calculate karvi hoy from array
// let total_price = [15, 68, 45, 58, 52, 48];

// let final_price = total_price.reduce((accumulator,val) => {
// return accumulator + val;
// }, 0); // intial value of accumulator
// console.log(final_price);
// 0+ 10 => 10
// 10 + 10 => 20
// 20 + 10 => 30
// 30 + 10 => 40

// accumulator -- > je value function ma retun thas te accumulator ma store thase -- > accumulator name change kari sako cho
// val -- > array ni darek value
// use case -- data ma thi ek single value calulate karvi hoy
// ex. producat ma thi total price calculate karvi hoy




// ### 1. Total money in wallet
// **Real life:** Add all cash amounts

// const money = [100, 200, 50];
// const totalMoney = money.reduce((sum, amount) => sum + amount, 0);
// console.log(totalMoney);


// ### 2. Total steps walked in a week
// **Real life:** Fitness tracker

// const steps = [3000, 5000, 4000, 6000];
// function addSteps(total, step) {
//   return total + step;
// }
// const weeklySteps = steps.reduce(addSteps, 0);
// console.log(weeklySteps);

// ### 3. Find total cart price
// **Real life:** Shopping bill

// const prices = [499, 299, 199];
// const totalPrice = prices.reduce((total, price) => total + price, 0);
// console.log(totalPrice);


// ### 4. Find maximum score
// **Real life:** Highest exam mark

// const marks = [45, 88, 67, 92];
// const highest = marks.reduce((max, mark) => {
//   return mark > max ? mark : max;
// }, marks[0]);
// console.log(highest);


// ### 5. Count total characters
// **Real life:** Text length calculation

// const words1 = ['Hi', 'Hello', 'JS'];
// const totalChars = words1.reduce((count, word) => count + word.length, 0);
// console.log(totalChars);


// ### 6. Combine words into a sentence
// **Real life:** Message builder

// const words = ['Learning', 'JavaScript', 'is', 'fun'];
// const sentence = words.reduce((text, word) => text + ' ' + word);
// console.log(sentence);


// ### 7. Count passed students
// **Real life:** Result summary

// const marks1 = [35, 72, 88, 40, 25];
// const passCount = marks1.reduce((count, mark) => {
//   return mark >= 40 ? count + 1 : count;
// }, 0);
// console.log(passCount);


// ### 8. Calculate final balance
// **Real life:** Bank account calculation

// const transactions = [1000, -200, -300, 500];
// const finalBalance = transactions.reduce((balance, amount) => balance + amount, 0);
// console.log(finalBalance);

// ### 10. Build comma-separated string
// **Real life:** Display values in UI

// const items = ['Pen', 'Book', 'Pencil'];
// const result = items.reduce((text, item) => text + ', ' + item);
// console.log(result);
 


// ### Q1. Shopping App – Discounted Total You are given a list of item prices.

// **Tasks:**
// 1. Keep only items costing more than 500

// 2. Apply a 10% discount to those items

// 3. Find the total amount to pay

// ### Q1. Shopping App – Discounted Total
const prices = [200, 800, 1200, 450, 700];

const total = prices
  .filter(price => price > 500)
  .map(price => price * 0.9)
  .reduce((sum, price) => sum + price, 0);

console.log(total);


// Ans: const total = prices

// .filter(price => price > 500)

// .map(price => price \* 0.9)

// .reduce((sum, price) => sum + price, 0);



// ### Q2. Fitness App – Total Active Minutes You are given daily activity minutes.

// **Tasks:**
// 1. Keep only days with more than 30 minutes activity

// 2. Convert minutes to calories (1 min = 5 calories)

// 3. Calculate total calories burned
// ### Q2. Fitness App – Total Active Minutes
const minutes = [20, 45, 60, 15, 90];

const totalCalories = minutes
  .filter(min => min > 30)
  .map(min => min * 5)
  .reduce((total, cal) => total + cal, 0);

console.log(totalCalories);



// Ans:

// const totalCalories = minutes

// .filter(min => min > 30)

// .map(min => min * 5)

// .reduce((total, cal) => total + cal, 0);





// ### Q3. Exam System – Average of Passed Marks You are given marks of students.

// **Tasks:**

// 1. Keep only passing marks (>= 40)

// 2. Calculate the average of passed marks

// ### Q3. Exam System – Average of Passed Marks
const marks = [35, 72, 88, 40, 25, 90];

const passed = marks.filter(mark => mark >= 40);

const average = passed.reduce((sum, mark) => sum + mark, 0) / passed.length;

console.log(average);



// Ans:

// const passed = marks.filter(mark => mark >= 40);

// const average = passed.reduce((sum, mark) => sum + mark, 0) / passed.length;





// ### Q4. Salary System – Monthly Payout You are given daily wages.

// **Tasks:**
// 1. Keep wages greater than 500

// 2. Add a bonus of 100 to each

// 3. Calculate total payou

// ### Q4. Salary System – Monthly Payout
const wages = [300, 800, 450, 1000, 600];

const totalPayout = wages
  .filter(wage => wage > 500)
  .map(wage => wage + 100)
  .reduce((total, wage) => total + wage, 0);

console.log(totalPayout);


// Ans: const totalPayout = wages

// .filter(wage => wage > 500)

// .map(wage => wage + 100)

// .reduce((total, wage) => total + wage, 0);





// ### Q5. Online Course – Completion Points You are given lesson completion percentages.

// **Tasks:**

// 1. Keep only completed lessons (>= 50%)

// 2. Convert percentage into points (percentage × 2)

// 3. Calculate total points

// ### Q5. Online Course – Completion Points
const progress = [20, 50, 75, 40, 100];

const totalPoints = progress
  .filter(p => p >= 50)
  .map(p => p * 2)
  .reduce((sum, p) => sum + p, 0);

console.log(totalPoints);


// Ans: const totalPoints = progress

// .filter(p => p >= 50)

// .map(p => p * 2)

// .reduce((sum, p) => sum + p, 0);




// ### Q6. Bank Transactions – Final Balance You are given a list of transactions.

// **Tasks:**

// 1. Keep only credit transactions (positive values)

// 2. Add 2% interest to each credit

// 3. Calculate final credited amount

// ### Q6. Bank Transactions – Final Balance
const transactions = [1000, -500, 2000, -300, 1500];

const creditedAmount = transactions
  .filter(amount => amount > 0)
  .map(amount => amount * 1.02)
  .reduce((total, amount) => total + amount, 0);

console.log(creditedAmount);


// Ans: const creditedAmount = transactions

// .filter(amount => amount > 0)

// .map(amount => amount * 1.02)

// .reduce((total, amount) => total + amount, 0);



// ### Q7. Game App – Final Score You are given scores from multiple rounds.

// **Tasks:**

// 1. Keep scores greater than 50

// 2. Add bonus points (+10)

// 3. Calculate final score

// ### Q7. Game App – Final Score
const scores = [30, 60, 90, 45, 80];

const finalScore = scores
  .filter(score => score > 50)
  .map(score => score + 10)
  .reduce((sum, score) => sum + score, 0);

console.log(finalScore);


// Ans: const finalScore = scores

// .filter(score => score > 50)

// .map(score => score + 10)

// .reduce((sum, score) => sum + score, 0);




// ### Q8. E-commerce – Total Taxed Amount You are given item prices.

// **Tasks:**

// 1. Keep items priced above 1000

// 2. Add 18% tax

// 3. Calculate final payable amount


// ### Q8. E-commerce – Total Taxed Amount
const prices1 = [500, 1200, 3000, 800, 1500];

const finalAmount = prices1
  .filter(price => price > 1000)
  .map(price => price * 1.18)
  .reduce((sum, price) => sum + price, 0);

console.log(finalAmount);


// Ans: const finalAmount = prices

// .filter(price => price > 1000)

// .map(price => price * 1.18)

// .reduce((sum, price) => sum + price, 0);




// ### Q9. Attendance System – Reward Points You are given daily attendance hours.

// **Tasks:**

// 1. Keep days with attendance >= 8 hours

// 2. Convert hours into points (1 hour = 10 points)

// 3. Find total points earned

// ### Q9. Attendance System – Reward Points
const hours = [6, 8, 9, 7, 10];

const totalAttendancePoints = hours
  .filter(hour => hour >= 8)
  .map(hour => hour * 10)
  .reduce((sum, point) => sum + point, 0);

console.log(totalAttendancePoints);



// ans: const totalPoints = hours

// .filter(hour => hour >= 8)

// .map(hour => hour * 10)

// .reduce((sum, point) => sum + point, 0);


// ### Q10. Interview Brain Teaser ⭐ You are given a list of numbers.

// **Tasks:**

// 1. Keep only even numbers

// 2. Square each number

// 3. Find the sum of squares

// ### Q10. Interview Brain Teaser ⭐
const numbers = [1, 2, 3, 4, 5, 6];

const sumOfSquares = numbers
  .filter(num => num % 2 === 0)
  .map(num => num * num)
  .reduce((sum, num) => sum + num, 0);

console.log(sumOfSquares);



// ans: const sumOfSquares = numbers

// .filter(num => num % 2 === 0)

// .map(num => num * num)

// .reduce((sum, num) => sum + num, 0);

 