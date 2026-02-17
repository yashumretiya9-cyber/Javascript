// Event - page par koi pan action karo tene ek event rise karshe, page par click, hover, typing all are events
// Event Listener - event nu reaction -- give reaction when click, dbclick, hover, typing

// Add Event Listener
// select -- > event -- > function -- > what you change
// element.addEventListener("event_name", function()
// {})


// cpmmon events: click,dbclick,input,change,submit,mouseover,keyup

// Click
// let btn = document.querySelector("button");
// console.dir(btn);

// btn.addEventListener("click", function() {      
//     document.body.classList.toggle("bg-body");

//     if(document.body.classList.contains("bg-body") === true) {      
//         btn.textContent = "Now Go Your Present ";     
//     } else {
//         btn.textContent = "Enter Yoor Future";  
//     }
// });


// input event

// change -- when you chagne elements state
// let sel = document. querySelector("select");

// sel.addEventListener("change", (dets)=>{
// console. log(dets. target.value);
// document. body. style. backgroundColor = dets. target.value;
// })


// Button select karo
// const uploadBtn = document.querySelector(".btn1");

// File input select karo
// const fileInput = document.getElementById("filebtn1");

// Button par click event add karo
// uploadBtn.addEventListener("click", function () {
//     fileInput.click();   // Aa line file upload window open karse
// });

// // Optional: File select thay pachi name console ma dekhaadva
// fileInput.addEventListener("change", function () {
//     if (fileInput.files.length > 0) {
//         console.log("Selected File:", fileInput.files[0].name);
//         alert("File Selected: " + fileInput.files[0].name);
//     }
// });

// Box select karo
// const box = document.getElementById("box-1");

// // Color input select karo
// const colorPicker = document.getElementById("colorPicker");

// // bordert color input select karo
// const bColorPicker = document.getElementById("b-colorPicker");
// // Jyare color change thay tyare box no background change karo
// colorPicker.addEventListener("input", function () {
//     box.style.backgroundColor = colorPicker.value;
// });

// // Jyare border color change thay tyare box no border color change karo
// bColorPicker.addEventListener("input", function () {
//     box.style.borderColor = bColorPicker.value;
// });

// submit
// let form = document.querySelector("form");

// form.addEventListener("submit", ()=>{
// document.body.style.backgroundColor= "black";
// })


// let card = document.querySelector(".card");

// card.addEventListener("mousemove",(dets)=>{
//     card.classList.add("card-hover");
//     console.log(dets);
// });

// card.addEventListener("mouseout",(dets)=>{
//     card.classList.remove("card-hover");
//     console.log(dets);
// }); 




// mousemove effect

// keyup self








// Event Object:
// sel. addEventListener("change", (dets) => {
// console. log(dets); == > dets - that called event object
// });

// target, type, preventDefault
// target -- > that show element
// type -- >show Event Type
// preventDefault -- > use for html-form -- > prevent form to refresh and clean details


// ======================================


// event delegation == > darek child par event listener na lagavata only parent par event listner lagavvu
// Event Bubbling and Capturing
// Event Bubbling -- > jena par event aave tena par listener na hoy to aapdu event tena parent par listener gotase ane aavu karta 
// karta upar traf move karshe
// let inner_box = document.querySelector(".inner_box");
// let outer_box = document. querySelector(".outer_box");
// let btn2 = document.querySelector(".btn2")

// btn2.addEventListener("click", ()=>{
// console. log("Button Clicked");

// })

// inner_box.addEventListener("click", ()=>{
// console. log("inner Div Clicked");
// outer_box.style.backgroundColor = "red";

// })

// outer_box.addEventListener("click", ()=>{
// console. log("Outer Div Clicked");
// outer_box.style.backgroundColor = "green";
// })


//use case: make it to do list thing
// when you click on text that show strike using bubbuling
// crete list that show shopping things -- use css (text decoration -> line-through)

// make it reverve too

// Issue: if you child have event listener that can run and also run your parent event lister beacuse of event bubbling
// show it with examples

// let list = document.querySelector(".list");
// let check = document.querySelectorAll(".check");
// let sub_list = document.querySelectorAll("li");
// list.addEventListener("click", (dets) => {
// console.dir(dets.target);
// check. forEach((e) => {
// if (e === dets. target) {
// console. log(dets.target);
// console. log (dets.target. checked);
// if (dets. target. checked) {
// e.parentElement.classList.add("line");
// console. log(sub_list);
// }else{
// e.parentElement.classList.remove("line");
// }
// }
// });
// });


// ==========================================

// btn2.addEventListener("click", ()=>{
// console. log("Button Clicked");

// })

// inner_box.addEventListener("click", ()=>{
// console. log("inner Div Clicked");
// outer_box.style.backgroundColor = "red";

// },true) -// true -- event capture karva mate

// outer_box.addEventListener("click", ()=>{
// console. log("Outer Div Clicked");
// outer_box.style.backgroundColor = "green";
// })


// use case :
// 1. security layer
// 2. check when event bubbling is fail

// event and event lister and lister
// capture vs bubbling


// live character counter

let counter = document. querySelector("#counter");
let count = document.querySelector("#count");

counter.addEventListener("input", (dets) => {
console. log(dets. target.value. length);
let cl = dets. target. value. length;
let limit = count. textContent = 10 - cl;
if (limit < 1) {
alert("Limit Reached");
counter.disabled=true;
}
});