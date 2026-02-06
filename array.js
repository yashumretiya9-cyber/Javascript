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
// const prices = [200, 800, 1200, 450, 700];

// const total = prices
//   .filter(price => price > 500)
//   .map(price => price * 0.9)
//   .reduce((sum, price) => sum + price, 0);

// console.log(total);


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
// const minutes = [20, 45, 60, 15, 90];

// const totalCalories = minutes
//   .filter(min => min > 30)
//   .map(min => min * 5)
//   .reduce((total, cal) => total + cal, 0);

// console.log(totalCalories);



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
// const marks = [35, 72, 88, 40, 25, 90];

// const passed = marks.filter(mark => mark >= 40);

// const average = passed.reduce((sum, mark) => sum + mark, 0) / passed.length;

// console.log(average);



// Ans:

// const passed = marks.filter(mark => mark >= 40);

// const average = passed.reduce((sum, mark) => sum + mark, 0) / passed.length;





// ### Q4. Salary System – Monthly Payout You are given daily wages.

// **Tasks:**
// 1. Keep wages greater than 500

// 2. Add a bonus of 100 to each

// 3. Calculate total payou

// ### Q4. Salary System – Monthly Payout
// const wages = [300, 800, 450, 1000, 600];

// const totalPayout = wages
//   .filter(wage => wage > 500)
//   .map(wage => wage + 100)
//   .reduce((total, wage) => total + wage, 0);

// console.log(totalPayout);


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
// const progress = [20, 50, 75, 40, 100];

// const totalPoints = progress
//   .filter(p => p >= 50)
//   .map(p => p * 2)
//   .reduce((sum, p) => sum + p, 0);

// console.log(totalPoints);


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
// const transactions = [1000, -500, 2000, -300, 1500];

// const creditedAmount = transactions
//   .filter(amount => amount > 0)
//   .map(amount => amount * 1.02)
//   .reduce((total, amount) => total + amount, 0);

// console.log(creditedAmount);


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
// const scores = [30, 60, 90, 45, 80];

// const finalScore = scores
//   .filter(score => score > 50)
//   .map(score => score + 10)
//   .reduce((sum, score) => sum + score, 0);

// console.log(finalScore);


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
// const prices1 = [500, 1200, 3000, 800, 1500];

// const finalAmount = prices1
//   .filter(price => price > 1000)
//   .map(price => price * 1.18)
//   .reduce((sum, price) => sum + price, 0);

// console.log(finalAmount);


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
// const hours = [6, 8, 9, 7, 10];

// const totalAttendancePoints = hours
//   .filter(hour => hour >= 8)
//   .map(hour => hour * 10)
//   .reduce((sum, point) => sum + point, 0);

// console.log(totalAttendancePoints);



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
// const numbers = [1, 2, 3, 4, 5, 6];

// const sumOfSquares = numbers
//   .filter(num => num % 2 === 0)
//   .map(num => num * num)
//   .reduce((sum, num) => sum + num, 0);

// console.log(sumOfSquares);



// ans: const sumOfSquares = numbers

// .filter(num => num % 2 === 0)

// .map(num => num * num)

// .reduce((sum, num) => sum + num, 0);


// find
// find tyare j use karvu ke jare array mathi ek value find karvi hoy based on condition
// find() return kare chhe array no element -- > callback no return value nahi
// never returns what you return inside it
// returns the array element itself -- not return array
// .find() stops at the first match
// It does not continue looping

// let product = ["Laptop", "Mobile", "Tablet",
// "Desktop", "Smart Watch"];
// let find_product = product.find( (item) => {
// // console. log("can't find product"); // notworking why ??
// if (item === "Mobile") {
// return true;
// } else if (item === "Tablet") {
// return true;
// } else {
// return false;
// }
// }) ;



// find vs filter
// Real-life Scenario: Shopping Mall Security
// your are a security guard at a shopping mall
// chack the list of visitors
// let people = ["John", "Sara", "Mike", "Anna",
// "David", "Sara"];
// find -- > you are looking for the first person
// named "Sara" in the list and stop searching (Pehli
// var j male, bas e j and Anagal check j na kare)
// let person = people. find ((name) => name === "Sara");
// console. log(person);


// filter --> you want to find all visitors named "sara" in the list (all data check kare and list ma ena sudhi check kare)
// let AllSara = people.filter((name)=> name ==="Sara")
// console.log(AllSara);


// Example 2:


// some
// check kare che ke array ma koi pan ek item condition satisfy ke che ke nahi
// condition true aave tyare stope kare
// some() vs find() --> some()  can't return you value its return true of false,find() return value of array
// give ans in true and false

// let marks1 =[10,20,30,90];
// let any = marks1.some((val) =>{
//   if(val > 85)
//     return true;
// } );
// console.log(any)


// every
// check kare chhe ke array ma baddha j items condition satisfy kare chhe ke nahi
// true -- baha items condition match kare
// false -- ek pan fail thay to
// let def =[20, 30, 90, 45];
// let num = def. every(function (val){
// return val < 40;
// })
// console.log(num);
// use case -- > check all student is pass or not

// some(), find(), filter(), every()
// let products = ["Tablet", "Mobile", "Laptop", "Mobile"]
// method -- > condition -- > output
// .some() -- > item === "Mobile" -- > true
// let pro = products.some((val) =>  {
//   if (item === "Mobile") {
//      return true;
//   } else {
//     return false;
//   }
// });
// console.log(pro)
// // . find() -- > item === "Mobile" -- > "Mobile"
// .filter() -- > item === "Mobile" -- > ["Mobile", "Mobile"]


// Destructuring oprator -- give value to variable (ex. we don't use every time arr1[1], just save it into variable let [ ,k] = arr1)
let arr4 = [1, 2, 3, 4, 5]
// let j = arr4[0];
// let k = arr4[2];
let [ j, , k] = arr4; // -- > destructuring
// let [j, , k] = arr;
console. log(k);
let user_data = ["test", "test@gmail.com", "Male", "Surat"]
let [name1,email1,gender1,city1] = user_data;
console.log("name:" + name1, "email:" + email1 , "gender:" + gender1 , "gender:" + city1);

// name, email, gender, city
// console. log ("name", name)


// spread oprator -- copy value from main array
let arr8 = [1, 2, 3, 4, 5, 6, 7];
// let arr4 = arr3 ; // - just give reference not copy value(when you change into arr4 that will be change arr3 too)
let arr9 = [ ... arr8];
// ... -- > rest -- > into function
// ... -- > spred -- > into Array and Object
let temp_arr = [1, 2, 3];
let temp_arr2 = [4, 5, 6];
let mix_arr = [ ... temp_arr, ... temp_arr2];









/*
## 1. `.find()` – First even number

**Real life:** Find first available even seat number

```js
const seats = [3, 5, 8, 10, 7];

const firstEvenSeat = seats.find(seat => seat % 2 === 0);
```

---

## 2. `.some()` – Any even number?

**Real life:** Check if any VIP seat exists

```js
const seats = [3, 5, 7, 9];

const hasEvenSeat = seats.some(seat => seat % 2 === 0);
```

---

## 3. `.find()` – First passing mark

**Real life:** Find first student who passed

```js
const marks = [25, 35, 40, 60];

const firstPass = marks.find(mark => mark >= 40);
```

---

## 4. `.some()` – Any failed student?

**Real life:** Check if re-test is needed

```js
const marks = [60, 70, 55, 30];

const hasFail = marks.some(mark => mark < 40);
```

---

## 5. `.find()` – First affordable product

**Real life:** Shopping app price filter

```js
const prices = [1500, 1200, 800, 2000];

const affordable = prices.find(price => price <= 1000);
```

---

## 6. `.some()` – Any discount item?

**Real life:** Show discount banner

```js
const prices = [500, 800, 1200, 300];

const hasDiscountItem = prices.some(price => price < 500);
```

---

## 7. `.find()` – First long word

**Real life:** Auto-suggestion keyword

```js
const words = ['hi', 'hello', 'javascript', 'ok'];

const longWord = words.find(word => word.length > 5);
```

---

## 8. `.some()` – Any empty input?

**Real life:** Form validation

```js
const inputs = ['name', 'email', '', 'password'];

const hasEmpty = inputs.some(input => input === '');
```

---

## 9. `.find()` – First high transaction

**Real life:** Fraud detection

```js
const transactions = [200, 500, 1200, 3000, 400];

const highTransaction = transactions.find(amount => amount > 1000);
```

---

## 10. `.some()` – System alert check ⭐

**Real life:** Check if any value exceeds limit

```js
const temperatures = [30, 32, 35, 42, 36];

const isOverheated = temperatures.some(temp => temp > 40);
```

---
*/


// // 1. find() – First even number
// const seats1 = [3, 5, 8, 10, 7];
// const firstEvenSeat = seats1.find(seat => seat % 2 === 0);
// console.log("First Even Seat:", firstEvenSeat);

// // 2. some() – Any even number?
// const seats2 = [3, 5, 7, 9];
// const hasEvenSeat = seats2.some(seat => seat % 2 === 0);
// console.log("Has Even Seat:", hasEvenSeat);

// // 3. find() – First passing mark
// const marks1 = [25, 35, 40, 60];
// const firstPass = marks1.find(mark => mark >= 40);
// console.log("First Passing Mark:", firstPass);

// // 4. some() – Any failed student?
// const marks2 = [60, 70, 55, 30];
// const hasFail = marks2.some(mark => mark < 40);
// console.log("Any Failed Student:", hasFail);

// // 5. find() – First affordable product
// const prices1 = [1500, 1200, 800, 2000];
// const affordable = prices1.find(price => price <= 1000);
// console.log("First Affordable Product:", affordable);

// // 6. some() – Any discount item?
// const prices2 = [500, 800, 1200, 300];
// const hasDiscountItem = prices2.some(price => price < 500);
// console.log("Has Discount Item:", hasDiscountItem);

// // 7. find() – First long word
// const words = ['hi', 'hello', 'javascript', 'ok'];
// const longWord = words.find(word => word.length > 5);
// console.log("First Long Word:", longWord);

// // 8. some() – Any empty input?
// const input = ['name', 'email', '', 'password'];
// const hasEmpty = input.some(input => input === '');
// console.log("Has Empty Input:", hasEmpty);

// // 9. find() – First high transaction
// const transactions = [200, 500, 1200, 3000, 400];
// const highTransaction = transactions.find(amount => amount > 1000);
// console.log("First High Transaction:", highTransaction);

// // 10. some() – System alert check
// const temperatures = [30, 32, 35, 42, 36];
// const isOverheated = temperatures.some(temp => temp > 40);
// console.log("System Overheated:", isOverheated);



/*
## create Readmd.md file and write the answers of all questions

### Q1. Shopping List – Price Increase

Increase each price by ₹20 using `map()`.

```js
const prices = [100, 200, 300];
```

---

### Q2. Exam Marks – Passing Students

Filter out only passing marks (>= 40).

```js
const marks = [35, 60, 45, 20, 80];
```

---

### Q3. Attendance Check

Check if **any day** attendance is less than 75% using `some()`.

```js
const attendance = [80, 90, 70, 85];
```

---

### Q4. Find First Discounted Item

Find the first price less than 500 using `find()`.

```js
const prices = [1200, 800, 450, 600];
```

---


### Q5. Salary Calculation

1. Keep salaries above 20,000
2. Add bonus of 2,000
3. Calculate total payout
   (Use `filter`, `map`, `reduce`)

```js
const salaries = [18000, 25000, 30000, 15000];
```

---

### Q6. Product Quality Check

Check if **all products** have rating >= 4 using `every()`.

```js
const ratings = [4, 5, 4, 4];
```

---

### Q7. Daily Expenses – Total

Calculate total expenses using `reduce()`.

```js
const expenses = [200, 150, 300, 100];
```

---

### Q8. Scores Update

1. Keep scores above 50
2. Add 10 bonus points

```js
const scores = [45, 60, 80, 30, 70];
```

---

### Q9. Array Destructuring – Top Scores

Extract the first two scores into variables.

```js
const scores = [95, 90, 85, 80];
```

---


### Q10. Shopping Cart Merge

Merge two carts using the **spread operator**.

```js
const cart1 = [200, 400];
const cart2 = [300, 500];
```

---

### Q11. Expense Validation

Check if **all expenses** are below 1000 using `every()`.

```js
const expenses = [200, 450, 800, 1200];
```

---

### Q12. Transaction Analysis

1. Find first transaction above 1000
2. Check if any transaction is negative

```js
const transactions = [500, -200, 1200, 300];
```

---

### Q13. Student Result Summary

1. Keep passing marks (>= 40)
2. Calculate average marks

```js
const marks = [30, 45, 60, 25, 80];
```

---

### Q14. Temperature Alert System

1. Check if any temperature exceeds 40
2. Check if all temperatures are above 20

```js
const temps = [22, 30, 45, 28];
```

---

### Q15. Spread + Reduce Combo ⭐

Combine two arrays and find the total sum.

```js
const a = [1, 2, 3];
const b = [4, 5, 6];
```

---


### Q16. Bonus Eligibility

Check if **every score** is above the class average.

```js
const scores = [60, 70, 80, 90];
```

---

### Q17. First Valid Input

Find the first non-empty input.

```js
const inputs = ['', '', 'name', 'email'];
```

---

### Q18. Salary Spread

Create a new salary list by copying existing salaries and adding a new one.

```js
const salaries = [20000, 30000, 40000];
```

---

### Q19. Performance Check
1. Check if any performance score is below 50
2. Check if all scores are above 60

```js
const performance = [55, 65, 45, 80];
```

---

### Q20. Interview Finisher ⭐⭐
1. Merge arrays
2. Keep even numbers
3. Square them
4. Find total sum

```js
const x = [1, 2, 3];
const y = [4, 5, 6];
```

---
*/

// Answer
// Q1
// const prices10 = [100, 200, 300];
// const increasedPrices = prices10.map(price => price + 20);
// console.log("Q1 Increased Prices:", increasedPrices);

// // Q2
// const marks10 = [35, 60, 45, 20, 80];
// const passingMarks = marks10.filter(mark => mark >= 40);
// console.log("Q2 Passing Marks:", passingMarks);

// // Q3
// const attendance = [80, 90, 70, 85];
// const lowAttendance = attendance.some(day => day < 75);
// console.log("Q3 Any Attendance < 75:", lowAttendance);

// // Q4
// const prices20 = [1200, 800, 450, 600];
// const firstDiscount = prices20.find(price => price < 500);
// console.log("Q4 First Discounted Item:", firstDiscount);

// // Q5
// const salaries1 = [18000, 25000, 30000, 15000];
// const totalPayout = salaries1
//   .filter(salary => salary > 20000)
//   .map(salary => salary + 2000)
//   .reduce((total, salary) => total + salary, 0);
// console.log("Q5 Total Salary Payout:", totalPayout);

// // Q6
// const ratings = [4, 5, 4, 4];
// const allGoodRatings = ratings.every(rate => rate >= 4);
// console.log("Q6 All Ratings >= 4:", allGoodRatings);

// // Q7
// const expenses1 = [200, 150, 300, 100];
// const totalExpenses = expenses1.reduce((sum, exp) => sum + exp, 0);
// console.log("Q7 Total Expenses:", totalExpenses);

// // Q8
// const scores1 = [45, 60, 80, 30, 70];
// const updatedScores = scores1
//   .filter(score => score > 50)
//   .map(score => score + 10);
// console.log("Q8 Updated Scores:", updatedScores);

// // Q9
// const scores2 = [95, 90, 85, 80];
// const [firstScore, secondScore] = scores2;
// console.log("Q9 Top Scores:", firstScore, secondScore);

// // Q10
// const cart1 = [200, 400];
// const cart2 = [300, 500];
// const mergedCart = [...cart1, ...cart2];
// console.log("Q10 Merged Cart:", mergedCart);

// // Q11
// const expenses2 = [200, 450, 800, 1200];
// const allBelowLimit = expenses2.every(exp => exp < 1000);
// console.log("Q11 All Expenses < 1000:", allBelowLimit);

// // Q12
// const transactions1 = [500, -200, 1200, 300];
// const firstHighTxn = transactions1.find(txn => txn > 1000);
// const hasNegativeTxn = transactions1.some(txn => txn < 0);
// console.log("Q12 First High Transaction:", firstHighTxn);
// console.log("Q12 Any Negative Transaction:", hasNegativeTxn);

// // Q13
// const marks20 = [30, 45, 60, 25, 80];
// const passMarks = marks20.filter(mark => mark >= 40);
// const averageMarks =
//   passMarks.reduce((sum, mark) => sum + mark, 0) / passMarks.length;
// console.log("Q13 Passing Marks:", passMarks);
// console.log("Q13 Average Marks:", averageMarks);

// // Q14
// const temps = [22, 30, 45, 28];
// const anyHighTemp = temps.some(temp => temp > 40);
// const allAbove20 = temps.every(temp => temp > 20);
// console.log("Q14 Any Temp > 40:", anyHighTemp);
// console.log("Q14 All Temps > 20:", allAbove20);

// // Q15
// const a = [1, 2, 3];
// const b = [4, 5, 6];
// const totalSum = [...a, ...b].reduce((sum, num) => sum + num, 0);
// console.log("Q15 Total Sum:", totalSum);

// // Q16
// const scores3 = [60, 70, 80, 90];
// const avgScore =
//   scores3.reduce((sum, score) => sum + score, 0) / scores3.length;
// const allAboveAvg = scores3.every(score => score > avgScore);
// console.log("Q16 Class Average:", avgScore);
// console.log("Q16 All Above Average:", allAboveAvg);

// // Q17
// const inputs = ['', '', 'name', 'email'];
// const firstValidInput = inputs.find(input => input !== '');
// console.log("Q17 First Valid Input:", firstValidInput);

// // Q18
// const salaries2 = [20000, 30000, 40000];
// const updatedSalaries = [...salaries2, 50000];
// console.log("Q18 Updated Salaries:", updatedSalaries);

// // Q19
// const performance = [55, 65, 45, 80];
// const anyBelow50 = performance.some(score => score < 50);
// const allAbove60 = performance.every(score => score > 60);
// console.log("Q19 Any Below 50:", anyBelow50);
// console.log("Q19 All Above 60:", allAbove60);

// // Q20
// const x = [1, 2, 3];
// const y = [4, 5, 6];
// const finalResult = [...x, ...y]
//   .filter(num => num % 2 === 0)
//   .map(num => num * num)
//   .reduce((sum, num) => sum + num, 0);
// console.log("Q20 Final Result:", finalResult);




/*
## create Readmd.md file and write the answers of all questions
### Q1. Increase all prices by 10

```js
const prices = [100, 200, 300];
```

### Q2. Filter even numbers

```js
const numbers = [1, 2, 3, 4, 5, 6];
```

### Q3. Check if any number is negative

```js
const nums = [10, -5, 20];
```

### Q4. Check if all marks are passing (>=40)

```js
const marks = [45, 60, 70];
```

### Q5. Find first number greater than 50

```js
const scores = [20, 40, 55, 70];
```

### Q6. Calculate total bill amount

```js
const bills = [120, 300, 80];
```

### Q7. Convert hours to minutes

```js
const hours = [1, 2, 1.5];
```

### Q8. Find first empty string

```js
const inputs = ['name', '', 'email'];
```

### Q9. Check if any value is zero

```js
const values = [5, 0, 8];
```

### Q10. Double all numbers

```js
const nums = [2, 4, 6];
```

### Q11. Extract first two values using destructuring

```js
const data = [10, 20, 30];
```

### Q12. Merge two arrays using spread

```js
const a = [1, 2];
const b = [3, 4];
```

### Q13. Check if all temperatures are below 50

```js
const temps = [30, 40, 45];
```

### Q14. Find first even number

```js
const nums = [1, 3, 4, 6];
```

### Q15. Calculate total steps walked

```js
const steps = [2000, 3000, 1500];
```

### Q16. Filter salaries above 25,000

```js
const salaries = [18000, 26000, 30000];
```

### Q17. Add bonus of 500 to filtered salaries (>20000)

```js
const salaries = [15000, 22000, 28000];
```

### Q18. Total expense after filtering (>100)

```js
const expenses = [50, 200, 150, 80];
```

### Q19. Check if any score is below class average

```js
const scores = [60, 70, 80];
```

### Q20. Find first number divisible by 7

```js
const nums = [10, 14, 21];
```

### Q21. Convert prices to discounted prices (10%)

```js
const prices = [500, 1000, 1500];
```

### Q22. Total calories burned (>30 min only)

```js
const minutes = [20, 45, 60];
```

### Q23. Check if all inputs are filled

```js
const inputs = ['name', 'email', 'password'];
```

### Q24. Merge 3 arrays using spread

```js
const a = [1];
const b = [2];
const c = [3];
```

### Q25. Find first failing mark

```js
const marks = [55, 48, 35, 70];
```

### Q26. Calculate average marks of passed students

```js
const marks = [30, 45, 60, 80];
```

### Q27. Square only odd numbers

```js
const nums = [1, 2, 3, 4, 5];
```

### Q28. Check if any value exceeds 1000

```js
const values = [200, 500, 1500];
```

### Q29. Extract first and rest values using destructuring

```js
const nums = [10, 20, 30, 40];
```

### Q30. Total reward points (>=8 hours only)

```js
const hours = [6, 8, 9, 7];
```

### Q31. Find first word longer than 4 characters

```js
const words = ['hi', 'hello', 'world'];
```

### Q32. Check if all numbers are even

```js
const nums = [2, 4, 6, 8];
```

### Q33. Combine arrays and filter positives

```js
const a = [1, -2];
const b = [3, -4];
```

### Q34. Total bill after tax (5%)

```js
const prices = [200, 400];
```

### Q35. Find first temperature above average

```js
const temps = [20, 30, 40];
```

---

### Q36. Combine arrays, keep even numbers, find sum

```js
const a = [1, 2, 3];
const b = [4, 5, 6];
```

### Q37. Check if every score is above average

```js
const scores = [60, 70, 80];
```

### Q38. Find first transaction above total average

```js
const tx = [100, 500, 900];
```

### Q39. Total of squared even numbers

```js
const nums = [1, 2, 3, 4, 5];
```

### Q40. Merge arrays, remove negatives, total sum

```js
const a = [-1, 2];
const b = [3, -4];
```

### Q41. Check if any value is prime

```js
const nums = [4, 6, 9, 11];
```

### Q42. Calculate weighted total (double values >50)

```js
const values = [30, 60, 80];
```

### Q43. Find first value greater than cumulative sum

```js
const nums = [10, 20, 50];
```

### Q44. Total salary payout after bonus and tax

```js
const salaries = [20000, 30000];
```

### Q45. Check if all prices are within budget (<=1000)

```js
const prices = [400, 800, 1200];
```

### Q46. Combine arrays and find maximum value

```js
const a = [10, 40];
const b = [30, 20];
```

### Q47. Find first value failing custom rule (>2×avg)

```js
const nums = [10, 20, 60];
```

### Q48. Total distance after bonus km (>5 only)

```js
const km = [3, 6, 10];
```

### Q49. Check if every element is unique

```js
const nums = [1, 2, 3, 2];
```

### Q50. FINAL BOSS ⭐⭐⭐

1. Merge arrays
2. Keep numbers > average
3. Square them
4. Find total sum

```js
const a = [1, 2, 3];
const b = [4, 5, 6];
```
*/


// Q1
const prices1 = [100, 200, 300];
console.log("Q1:", prices1.map(p => p + 10));

// Q2
const numbers = [1, 2, 3, 4, 5, 6];
console.log("Q2:", numbers.filter(n => n % 2 === 0));

// Q3
const nums1 = [10, -5, 20];
console.log("Q3:", nums1.some(n => n < 0));

// Q4
const marks1 = [45, 60, 70];
console.log("Q4:", marks1.every(m => m >= 40));

// Q5
const scores1 = [20, 40, 55, 70];
console.log("Q5:", scores1.find(s => s > 50));

// Q6
const bills = [120, 300, 80];
console.log("Q6:", bills.reduce((sum, b) => sum + b, 0));

// Q7
const hours1 = [1, 2, 1.5];
console.log("Q7:", hours1.map(h => h * 60));

// Q8
const inputs1 = ['name', '', 'email'];
console.log("Q8:", inputs1.find(i => i === ''));

// Q9
const values1 = [5, 0, 8];
console.log("Q9:", values1.some(v => v === 0));

// Q10
const nums2 = [2, 4, 6];
console.log("Q10:", nums2.map(n => n * 2));

// Q11
const data = [10, 20, 30];
const [d1, d2] = data;
console.log("Q11:", d1, d2);

// Q12
const a1 = [1, 2];
const b1 = [3, 4];
console.log("Q12:", [...a1, ...b1]);

// Q13
const temps1 = [30, 40, 45];
console.log("Q13:", temps1.every(t => t < 50));

// Q14
const nums3 = [1, 3, 4, 6];
console.log("Q14:", nums3.find(n => n % 2 === 0));

// Q15
const steps = [2000, 3000, 1500];
console.log("Q15:", steps.reduce((s, n) => s + n, 0));

// Q16
const salaries1 = [18000, 26000, 30000];
console.log("Q16:", salaries1.filter(s => s > 25000));

// Q17
const salaries2 = [15000, 22000, 28000];
console.log("Q17:", salaries2.filter(s => s > 20000).map(s => s + 500));

// Q18
const expenses1 = [50, 200, 150, 80];
console.log("Q18:", expenses1.filter(e => e > 100).reduce((s, e) => s + e, 0));

// Q19
const scores2 = [60, 70, 80];
const avg1 = scores2.reduce((s, n) => s + n, 0) / scores2.length;
console.log("Q19:", scores2.some(s => s < avg1));

// Q20
const nums4 = [10, 14, 21];
console.log("Q20:", nums4.find(n => n % 7 === 0));

// Q21
const prices2 = [500, 1000, 1500];
console.log("Q21:", prices2.map(p => p * 0.9));

// Q22
const minutes = [20, 45, 60];
console.log("Q22:", minutes.filter(m => m > 30).reduce((s, m) => s + m, 0));

// Q23
const inputs2 = ['name', 'email', 'password'];
console.log("Q23:", inputs2.every(i => i !== ''));

// Q24
const a2 = [1], b2 = [2], c2 = [3];
console.log("Q24:", [...a2, ...b2, ...c2]);

// Q25
const marks2 = [55, 48, 35, 70];
console.log("Q25:", marks2.find(m => m < 40));

// Q26
const marks3 = [30, 45, 60, 80];
const passed = marks3.filter(m => m >= 40);
console.log("Q26:", passed.reduce((s, m) => s + m, 0) / passed.length);

// Q27
const nums5 = [1, 2, 3, 4, 5];
console.log("Q27:", nums5.filter(n => n % 2 !== 0).map(n => n * n));

// Q28
const values2 = [200, 500, 1500];
console.log("Q28:", values2.some(v => v > 1000));

// Q29
const nums6 = [10, 20, 30, 40];
const [first, ...rest] = nums6;
console.log("Q29:", first, rest);

// Q30
const hours2 = [6, 8, 9, 7];
console.log("Q30:", hours2.filter(h => h >= 8).reduce((s, h) => s + h, 0));

// Q31
const words = ['hi', 'hello', 'world'];
console.log("Q31:", words.find(w => w.length > 4));

// Q32
const nums7 = [2, 4, 6, 8];
console.log("Q32:", nums7.every(n => n % 2 === 0));

// Q33
const a3 = [1, -2];
const b3 = [3, -4];
console.log("Q33:", [...a3, ...b3].filter(n => n > 0));

// Q34
const prices3 = [200, 400];
console.log("Q34:", prices3.reduce((s, p) => s + p * 1.05, 0));

// Q35
const temps2 = [20, 30, 40];
const avgTemp = temps2.reduce((s, t) => s + t, 0) / temps2.length;
console.log("Q35:", temps2.find(t => t > avgTemp));

// Q36
const a4 = [1, 2, 3];
const b4 = [4, 5, 6];
console.log("Q36:", [...a4, ...b4].filter(n => n % 2 === 0).reduce((s, n) => s + n, 0));

// Q37
const scores3 = [60, 70, 80];
const avg2 = scores3.reduce((s, n) => s + n, 0) / scores3.length;
console.log("Q37:", scores3.every(s => s > avg2));

// Q38
const tx = [100, 500, 900];
const avgTx = tx.reduce((s, n) => s + n, 0) / tx.length;
console.log("Q38:", tx.find(t => t > avgTx));

// Q39
const nums8 = [1, 2, 3, 4, 5];
console.log("Q39:", nums8.filter(n => n % 2 === 0).map(n => n * n).reduce((s, n) => s + n, 0));

// Q40
const a5 = [-1, 2];
const b5 = [3, -4];
console.log("Q40:", [...a5, ...b5].filter(n => n > 0).reduce((s, n) => s + n, 0));

// Q41
const nums9 = [4, 6, 9, 11];
const isPrime = n => n > 1 && [...Array(n).keys()].slice(2).every(i => n % i !== 0);
console.log("Q41:", nums9.some(isPrime));

// Q42
const values3 = [30, 60, 80];
console.log("Q42:", values3.map(v => v > 50 ? v * 2 : v).reduce((s, v) => s + v, 0));

// Q43
const nums10 = [10, 20, 50];
let sum = 0;
console.log("Q43:", nums10.find(n => (sum += n) < n));

// Q44
const salaries3 = [20000, 30000];
console.log("Q44:", salaries3.map(s => s + 2000).map(s => s * 0.9).reduce((t, s) => t + s, 0));

// Q45
const prices4 = [400, 800, 1200];
console.log("Q45:", prices4.every(p => p <= 1000));

// Q46
const a6 = [10, 40];
const b6 = [30, 20];
console.log("Q46:", Math.max(...a6, ...b6));

// Q47
const nums11 = [10, 20, 60];
const avg3 = nums11.reduce((s, n) => s + n, 0) / nums11.length;
console.log("Q47:", nums11.find(n => n > 2 * avg3));

// Q48
const km = [3, 6, 10];
console.log("Q48:", km.filter(k => k > 5).map(k => k + 2).reduce((s, k) => s + k, 0));

// Q49
const nums12 = [1, 2, 3, 2];
console.log("Q49:", new Set(nums12).size === nums12.length);

// Q50 FINAL
const a7 = [1, 2, 3];
const b7 = [4, 5, 6];
const all = [...a7, ...b7];
const avgFinal = all.reduce((s, n) => s + n, 0) / all.length;
console.log(
  "Q50:",
  all.filter(n => n > avgFinal).map(n => n * n).reduce((s, n) => s + n, 0)
);
