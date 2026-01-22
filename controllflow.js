// control flow statements in JavaScript

// if...else statement
// if(condition){}

if (12 < 13) {
    console.log(True);
}

if (15 < 12) {
    console.log(True);
}   // condition is false that why if statement not run






// if...else
if (12 < 13) {
    console.log("TRUE");
} else {
    console.log("FALSE");
}


if (12 < 13) {
    console.log(True);
}

// condition is false that why if statement not run

else {
    console.log(false);
}   


if (!12) {
    console.log("NUMBER");
} else {
    console.log("NOT A NUMBER");
}


// if else if else statement
/*
if(logggedIn && Admin){
    console.log("show admin ");
} else if (loggedIn){
    console.log("show user ");
} else {
    console.log("show login page");
}
// */ 


// if (12 > 13) {
//     console.log("12 is greater");
// } else if (12 === 13) {
//     console.log("12 is equal to 13");
// } else {
//     console.log("13 is greater");
// }



// switch statement

/*
switch ('First50') { // value --> Case value sathe match karshe
    case 'First50':
        console.log("50% Off on First Order")
        break;

    case 'BOGO':
        console.log("Buy one get one")
        break;

    case 'BlackFriday':
        console.log("It's Black Friday Sale - get at Rs. 50")
        break;

    default:
        console.log("Offer Not Vaild")
        break;
}*/ 


switch ('Event') {
    case 'Event':
        console.log("AD Create Event");
         break;
    case 'Puzzel':
        console.log("Puzzel solved Event");
        break;
    case 'Wed Fight':
        console.log("Wed Fighting Event");
        break;
    default:
        console.log("You can not choice any event");
}


// early return pattern 



function score(value) {
    if (value < 90) {
        return "A grade";
    } else if (value < 80) {
        return "B grade";
    } else if (value < 70) {
        return "C grade";
    } else if (value < 60) {
        return "D grade";
    }else {
    return "Fail";
}
}
score(100);
// console.log(score(100));


function score1(value) {
    if (value < 90)  return "A grade";
     else if (value < 80) return "B grade";
     else if (value < 70) return "C grade";
     else if (value < 60) return "D grade";
    else return "F grade";
}


function score2(value) {
    if (value < 60)  return "F grade";
     else if (value < 70) return "D grade";
     else if (value < 80) return "C grade";
     else if (value < 90) return "B grade";
    else return "A grade";
}


function score3(value) {
    if (value < 90 && value >= 80)  return "A grade";
     else if (value < 80 && value >= 70) return "B grade";
     else if (value < 70 && value >= 60) return "C grade";
     else if (value < 60 && value >= 50) return "D grade";
    else return "F grade";
}


// function rps(user, computer){ 
//     if(user === "rock" && computer === "scissor") return "user wins";
//     if(user === "scissor" && computer === "paper") return "user wins";
//     if(user === "paper" && computer === "rock") return "user wins";
//     if (user === "scissor" && computer === "rock") return "computer wins";
//     if (user === "paper" && computer === "scissor") return "computer wins";
//     if (user === "rock" && computer === "paper") return "computer wins";
//     return "tie";
// }

function rps(user, computer) {
    if (user === "rock" && computer === "scissor") return "user wins";
    if (user === "scissor" && computer === "paper") return "user wins";
    if (user === "paper" && computer === "rock") return "user wins";

    if (user === "scissor" && computer === "rock") return "computer wins";
    if (user === "rock" && computer === "paper") return "computer wins";
    if (user === "paper" && computer === "scissor") return "computer wins";

    return "it's a tie";
}


function rps1(user, computer){
    if(user === computer) return "it's a tie";
      if  (user === "rock" && computer === "scissor") return "user wins"; 
      if  (user === "scissor" && computer === "paper") return "user wins";
      if  (user === "paper" && computer === "rock") return "user wins";
    return "computer wins";
}