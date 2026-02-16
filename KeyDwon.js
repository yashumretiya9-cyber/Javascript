 let btn = document.querySelector("button");
console.dir(btn);

btn.addEventListener("click", function() {      
    document.body.classList.toggle("bg-body");

    if(document.body.classList.contains("bg-body") === true) {      
        btn.textContent = "Now Go Your Present ";     
    } else {
        btn.textContent = "Enter Yoor Future";  
    }
});



let h1 = document.querySelector("h1");

window.addEventListener("keydown", (dets) => {
if (dets.key === " ") {
h1.textContent = "Space Bar";
} else {
h1.textContent = dets.key;
}
console.log(dets);

});