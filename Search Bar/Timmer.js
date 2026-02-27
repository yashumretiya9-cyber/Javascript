// SetTimeout, ClearTimeout
// Settimeout -- run only one time
// Timeout -- in ms

let timmer = setTimeout(() => {
    console.log("Hello");
}, 2000);

clearTimeout(timmer);


// SetInterval, ClearInterval
// SetInterval -- run into loop(infine times)
let timmer1 = setInterval(() => {
    console.log("Hello");
}, 2000);

// clear interval
clearInterval(timmer1);


// counter
let number = 0;
let counter = setInterval(() => {
    if (number <= 10) {
        console.log(number);    
        number++;
    } else {
        clearInterval(counter); // stop after 10
    }
}, 1000);


// popup windows
let card = document.querySelector(".offer-card");
let btn = document.querySelector(".close-btn"); // fixed selector

// setTimeout -- run only one time after 5 sec
if (card) {
    setTimeout(() => {
        card.style.display = "block";
    }, 5000);
}

// close button
if (btn && card) {
    btn.addEventListener("click", () => {
        card.style.display = "none";
    });
}


// Real use

// Downloading card
let count = 0;
let bar = document.querySelector(".progress-bar");
let percent = document.querySelector(".percent"); // fixed selector

let download = setInterval(() => {
    if (count <= 100) {
        console.log(count);
        bar.style.width = `${count}%`;
        percent.textContent = count + "%";
        count++;
    } else {
        clearInterval(download); // stop at 100%
    }
}, 50);