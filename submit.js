// select
let inp = document.querySelectorAll("input");
let form = document.querySelector("form");

form.addEventListener("submit", (dets)=>{
    dets.preventDefault();
    console.log(inp[0].value,inp[1].value,inp[2].value,inp[3].value,inp[4].value);

    let card = document.createElement("div");
    let dp_img = document.createElement("div");
    let img = document.createElement("img");
    // let card_info = document.createElement("div");
    let h3 = document.createElement("h3");
    let h4 = document.createElement("h4");
    let h5= document.createElement("h5");
    let h6 = document.createElement("h6");


    // add class
    card.classList.add("card");
    dp_img.classList.add("dp-img");

    // add html - append
    document.body.append(card);


    // chile add
    card.appendChild(dp_img);
    dp_img.appendChild(img);
    card.appendChild(h3);
    card.appendChild(h4);
    card.appendChild(h5);
    card.appendChild(h6);
    console.log(dp_img);


    // add datas
    img.setAttribute("src",inp[0].value ? inp[0].value : "https://cdn-icons-png.flaticon.com/512/149/149071.png");
    h3.textContent =  inp[1].value ? inp[1].value : "User Name";
    h4.textContent =  inp[2].value ? inp[2].value : "Bio";
    h5.textContent =  inp[3].value ? inp[3].value : "email@email.com";
    h6.textContent =  inp[4].value ? inp[4].value : "+91-1234567890";


    inp.forEach((inp)=>{
        if(inp.value !== "submit") {
           inp.value = "";
        }
    });



});
