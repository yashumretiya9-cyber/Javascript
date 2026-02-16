// // DOM -- Document Object Model
// // All Website Code -- > DOM
// // Website Output -- > DOM
// // DOM -- HTML body

// // DOM Tree Structure:
// // Node -- > Element (ex. h1, p, b, i), text (ex. lorem), comment, Tags

// // DOM Manipulation - change body or website using
// // select element from html
// // chagne text
// // change html
// // change css
// // change attributes
// // even listeners

// // Selecting Elements
// // getElementById
// let a = document.getElementById("abc");
// console. log(a);
// // console.dir(a);

// // // getElementsByClassName
// let b = document.getElementsByClassName("abc");
// console.dir(b);

// // // getElementsByTagName
// let temp_c = document.getElementsByTagName("h1");
// console.dir(temp_c);

// // // querySelector and querySelectorAll
// // // most used in project and used by company
// let c = document.querySelector("h1") // -- only
// // select first element that find in your html
// console.dir(c);

// let d = document. querySelectorAll("h1") // select all elements in you r html
// console. log(d);

// // // Text/Content access: innerText, textContent, innerHTML
// let e = document.querySelector("h1");

// console.dir(e);

// e.innerText = "First H1 Tag";

// // document.querySelector("h1").innerText = "first h1 tag"

// e.textContent = "h1 tag";
// e.innerHTML = "<i>first h1 tag</i>";


// // e.outerHTML = "<i>h1 with outertext</i>"
// // e.outerHTML = "h1 with outertext"

// // outer vs inner
// // innerText -- show text between tag -- ignore tag
// // outerText - show text between tag -- remove tag

// // innerHTML -- show text between too tag -- not tag
// // outerHTML -- show text with tag


// // ------------------------------------------------------------
// // Attributes Manipulation
// // getAttribute, setAttribute, removeAttribute
// let link = document.querySelector("a");
// console.dir(link);
// // console.log("get Attribute",info);

// // link.herf = "https://www.google.com"
// // element.setAttribute("Name", "Change")
// link.setAttribute("href", "https://www.google.com");
// let info = link.getAttribute("href");
// console.log("get Attribute", info);

// link.removeAttribute("href");
// link.removeAttribute("target");

// // ------------------------------------------------------------

// // Dynamic DOM Manipulation
// // createElement, appendChild, removeChild, prepend

// // create new element
// let pre_Tag = document.createElement("pre");
// console.dir(pre_Tag);
// pre_Tag.textContent = "Hello Bhailog";

// // apend / prepend
// // document.querySelector("body").append(pre_Tag); // and tag into last place in body

// document.querySelector("body").prepend(pre_Tag); // and tag into first place in body


// //remove element
//  let remove_h1 = document.querySelector("#abc");
//     remove_h1.remove();

// // appendChild 
//     let div_h1 = document.createElement("div");
//     div_h1.textContent = "innder Div tag Create With JS";
//     document.querySelector(".box").appendChild(div_h1);


// // Style Updates via .style and classList (add, remove, toggle)
// let h1 = document.querySelector("h1");
// h1. style. color = "red"; I
// h1. style.backgroundColor = "black";
// h1.style. fontFamily = "sherif";
// h1.style. textTransform = "capitalize";

// // ClassList -- add
// let box = document.querySelector(".box1");
// console.dir(box);
// box. classList.add("box-style");
// console.dir(box);

// // remove
// box. classList. remove("box1");

// // toggle -- class -- > available -- > remove it
// //           class -- > not available -- > add it
// box. classList.toggle("box1");



// // ********************************************************************************************


// // Tasks:
// /*

// 1. What is the DOM? How does it represent HTML?
// The DOM (Document Object Model) is a programming interface for web documents. 
// It represents the HTML structure as a tree of nodes where each element, attribute, 
// and text becomes an object that JavaScript can access and modify.

// 2. Types of Nodes in the DOM:
// - Document Node
// - Element Node
// - Text Node
// - Attribute Node
// - Comment Node

// 3. Difference between Element Node and Text Node:
// Element Node represents an HTML tag (e.g., <p>, <div>).
// Text Node represents the text inside an element.
// Element nodes can have attributes; text nodes cannot.

// 4. Identify Nodes in:
// <div>Hello<span>World</span></div>
// - <div> → Element Node
// - "Hello" → Text Node
// - <span> → Element Node
// - "World" → Text Node

// 5. Difference between getElementById and querySelector:
// getElementById selects element by ID only.
// querySelector selects the first matching CSS selector.

// 6. What does getElementsByClassName return?
// It returns an HTMLCollection (array-like, not a real array).

// 7. Select all buttons with class "buy-now":
// document.querySelectorAll(".buy-now");

// 8. T1: Change heading text:
// let heading = document.getElementById("heading");
// heading.textContent = "Welcome to JS DOM";

// 9. T2: Print all <li> text:
// let list = document.querySelectorAll("li");
// list.forEach((val)=>{
//    console.log(val.textContent);
// });

// 10. innerText vs textContent vs innerHTML:
// innerText → Visible text only.
// textContent → All text (including hidden).
// innerHTML → Text including HTML tags.

// 11. When to use textContent instead of innerHTML?
// Use textContent for security and when only text is needed.

// 12. T3: Replace paragraph content:
// let para = document.querySelector("p");
// para.innerHTML = "<b> Updated </b> by JavaScript";

// 13. Get image src:
// let img = document.querySelector("img");
// console.log(img.src);

// 14. setAttribute():
// Adds or updates an attribute on an element.

// 15. Add title attribute dynamically:
// let div = document.querySelector("div");
// div.setAttribute("title", "This is a div");

// 16. Remove disabled attribute:
// let btn = document.querySelector("button");
// btn.removeAttribute("disabled");

// 17. createElement():
// Creates a new HTML element and returns that element.

// 18. appendChild vs prepend:
// appendChild adds element at the end.
// prepend adds element at the beginning.

// 19. Remove element using removeChild():
// parent.removeChild(child);

// 20. Create new list item and add to <ul>:
// let li = document.createElement("li");
// li.textContent = "New Task";
// document.querySelector("ul").appendChild(li);

// 21. Create new image and add at top:
// let img = document.createElement("img");
// img.src = "https://via.placeholder.com/150";
// document.querySelector("div").prepend(img);

// 22. Delete first list item:
// document.querySelector("ul li").remove();

// 23. Change background color:
// element.style.backgroundColor = "yellow";

// 24. classList.add vs classList.toggle:
// add() always adds a class.
// toggle() adds if not present and removes if already present.

// 25. Add highlight class to even items:
// let li = document.querySelectorAll("ul li:nth-child(2n)");
// li.forEach((elem)=>{
//    elem.classList.add("highlight");
// });

// 26. Set font size of all <p> to 18px:
// document.querySelectorAll("p").forEach((p)=>{
//    p.style.fontSize = "18px";
// });


// */