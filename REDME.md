<<<<<<< HEAD
# 💫 About Me:
🎓 I’m a Computer IT Student<br><br>💻 Currently learning HTML, CSS, JavaScript, React, php, AI<br><br>🌱 Exploring Frontend Animations & Backend Basics<br><br>🧠 Interested in Web Development & Open Source<br><br>💬 Ask me about HTML, CSS, JavaScript, React,AI<br><br>📫 Reach me at: yashumretiya9@email.com<br><br>⚡ Fun fact: I Use AI For Slove Problem


## 🌐 Socials:
[![Instagram](https://img.shields.io/badge/Instagram-%23E4405F.svg?logo=Instagram&logoColor=white)](https://instagram.com/yash.umretiya2912) [![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://linkedin.com/in/yash umretiya) [![Pinterest](https://img.shields.io/badge/Pinterest-%23E60023.svg?logo=Pinterest&logoColor=white)](https://pinterest.com/Yash umretiya) [![email](https://img.shields.io/badge/Email-D14836?logo=gmail&logoColor=white)](mailto:ghanshyambhaiumretia@gmail.com) 

# 💻 Tech Stack:
![C](https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white) ![C++](https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white) ![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![PHP](https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white) ![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![.Net](https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white) ![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white) ![Apache](https://img.shields.io/badge/apache-%23D42029.svg?style=for-the-badge&logo=apache&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white) ![Canva](https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white) ![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
# 📊 GitHub Stats:
![](https://github-readme-stats.vercel.app/api?username=yashumretiya9-cyber&theme=dark&hide_border=false&include_all_commits=false&count_private=false)<br/>
![](https://nirzak-streak-stats.vercel.app/?user=yashumretiya9-cyber&theme=dark&hide_border=false)<br/>
![](https://github-readme-stats.vercel.app/api/top-langs/?username=yashumretiya9-cyber&theme=dark&hide_border=false&include_all_commits=false&count_private=false&layout=compact)

---
[![](https://visitcount.itsvg.in/api?id=yashumretiya9-cyber&icon=0&color=0)](https://visitcount.itsvg.in)

<!-- Proudly created with GPRM ( https://gprm.itsvg.in ) -->





// # JavaScript Datatypes

// This README explains **JavaScript Datatypes** with all examples written in **one single JavaScript file** format.

// ---

// ## JavaScript Datatype Example (Single File)

// ```js
// // ===============================
// // JavaScript Datatypes
// // ===============================

// // -------------------------------
// // 1. Primitive Datatypes
// // -------------------------------

// // Number
// let a = 10;
// let b = a;
// a = a + 5;

// let e = 12;
// e = 14.5;

// // String
// let d = "name";
// d = "new name";
// d = `name`;

// // Boolean
// let f = true;
// f = false;

// // Null
// let g = null;

// // Undefined
// let h;

// // Symbol
// let u1 = Symbol("id");
// let u2 = Symbol("id"); // u1 !== u2

// let user = {
//   uid: 1,
//   name: "gautam",
//   age: 24,
//   email: "test@test.com"
// };

// let u3 = Symbol("uid");
// user[u3] = "111";

// // BigInt
// let number = BigInt(123456789090);
// number = number + 4n;

// let number2 = 123456789090n;
// number2 = number2 + 4n;

// console.log(number);
// console.log(number2);

// // -------------------------------
// // 2. Non-Primitive Datatypes
// // -------------------------------

// // Array
// let v1 = [1, 2, 3];
// let v2 = v1;
// v1.pop(); // removes last element

// let arr = ["name", "age", "email"];

// // Object
// let obj = {
//   uid: 1,
//   name: "gautam",
//   age: 24,
//   email: "gotu@gmail.com"
// };

// // Function
// function name(params) {
//   // function body
// }


# JavaScript Logical & Increment Operators - Complete Demo

```javascript
// === EXAMPLE 1: AND (&&) - Both conditions true ===
let x = 10, y = 20;
x > 5 && y > 5 ? console.log("Both > 5") : console.log("One/both ≤ 5");

// === EXAMPLE 2: OR (||) - Either condition true ===
let isAdmin = true, isLoggedIn = false;
isAdmin || isLoggedIn ? console.log("Access granted") : console.log("Access denied");

// === EXAMPLE 3: NOT (!) - Negation ===
let temp = 35;
!(temp > 30) ? console.log("Hot day") : console.log("Pleasant day");

// === EXAMPLE 4: Truthy/Falsy check ===
let a = 0;
a ? console.log("Truthy value") : console.log("Falsy value");

// === EXAMPLE 5: Nested Ternary - Grade system ===
let score = 78;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";
console.log("Grade:", grade);

// === EXAMPLE 6: Nested Ternary - Status levels ===
let points = 120;
let status = points >= 100 ? "Gold" : points >= 50 ? "Silver" : "Bronze";
console.log("Status:", status);

// === EXAMPLE 7: Combined condition Ternary ===
let loggedIn = true, hasToken = false;
let access = loggedIn && hasToken ? "Allow" : "Deny";
console.log("Access:", access);

// === EXAMPLE 8: Post-increment (a++) ===
let a1 = 5;
a1++;
console.log("Ex8 Post++:", a1); // Returns original, then increments

// === EXAMPLE 9: Pre-increment (++a) ===
let a2 = 8;
++a2;
console.log("Ex9 Pre++:", a2); // Increments first, then returns

// === EXAMPLE 10: Post-increment assignment ===
let b = 4, c = b++;
console.log("Ex10 Post b,c:", b, c); // b=5, c=4 (old value)

// === EXAMPLE 11: Pre-increment assignment ===
let d = 4, e = ++d;
console.log("Ex11 Pre d,e:", d, e);  // d=5, e=5 (new value)

// === EXAMPLE 12: Post-decrement logging ===
let m = 10;
console.log("Ex12 m--:", m--); // Logs 10 first
console.log("Ex12 m after:", m); // Then m becomes 9

// === EXAMPLE 13: Complex increment expression ===
let n = 5;
let result = n++ + ++n; // 5 + 7 = 12 (avoid in production!)
console.log("Ex13 result:", result);

// === EXAMPLE 14: Function with global variable ===
let likes = 100;
function likePost() {
    result += likes; // 'result' undefined - causes NaN!
}
console.log("Ex14 likePost():", likePost()); // NaN
console.log("Ex14 likes:", likes); // Still 100

// === EXAMPLE 15: Condition with post-decrement ===
let count = 5;
count-- === 5 ? console.log("Ex15: Matched") : console.log("Ex15: Not Matched");
console.log("Ex15 count now:", count); // 4
