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
const uploadBtn = document.querySelector(".btn1");

// File input select karo
const fileInput = document.getElementById("filebtn1");

// Button par click event add karo
uploadBtn.addEventListener("click", function () {
    fileInput.click();   // Aa line file upload window open karse
});

// Optional: File select thay pachi name console ma dekhaadva
fileInput.addEventListener("change", function () {
    if (fileInput.files.length > 0) {
        console.log("Selected File:", fileInput.files[0].name);
        alert("File Selected: " + fileInput.files[0].name);
    }
});

// Box select karo
const box = document.getElementById("box-1");

// Color input select karo
const colorPicker = document.getElementById("colorPicker");

// bordert color input select karo
const bColorPicker = document.getElementById("b-colorPicker");
// Jyare color change thay tyare box no background change karo
colorPicker.addEventListener("input", function () {
    box.style.backgroundColor = colorPicker.value;
});

// Jyare border color change thay tyare box no border color change karo
bColorPicker.addEventListener("input", function () {
    box.style.borderColor = bColorPicker.value;
});

// submit
let form = document.querySelector("form");

form.addEventListener("submit", ()=>{
document.body.style.backgroundColor= "black";
})


let card = document.querySelector(".card");

card.addEventListener("mousemove",(dets)=>{
    card.classList.add("card-hover");
    console.log(dets);
});

card.addEventListener("mouseout",(dets)=>{
    card.classList.remove("card-hover");
    console.log(dets);
}); 




// mousemove effect

// keyup self