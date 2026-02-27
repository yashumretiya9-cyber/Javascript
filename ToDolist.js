// let AddTask =document.querySelector(".add_task");
// let inp = document.querySelector("#add_task");
// let ul = document.querySelector(".task_list");

// let tasks=JSON.parse(localStorage.getItem("tasks")) || [];

// AddTask.addEventListener('click',() =>
// {
//     console.log(inp.value);
//     let task = inp.value.trim();

//     tasks.push({text:task, Done:false})

//     // sils(tasks);
//     // RenderUI();

// });

// function sils(tasks){
//     localStorage.setItem("tasks",JSON.stringify(tasks));
    
// }

// function RenderUI(){
//     ul.innerHTML = "";
//     console.log(tasks);

//     tasks.forEach((task) => {
//         const li = document.createElement("li");
//         // li.textContent = task.text;
//         li.innerHTML = `${task.text} <button class="Dbtn">Delete</button>`;
//         ul.appendChild(li);
//     });
// }

// ul.addEventListener('click',(e) => {
//     console.log(e.target);

//     const li = e.target.closest("li"); 
//     const index = [...ul.children].indexOf(li);
//     console.log(index);  

//     // delete task

//     if(e.target.classList.contains("Dbtn")){
//         tasks.splice(index,0);
//         console.log(tasks.splice(index,0));
//     }

//     sils(tasks);
//     RenderUI();
// });

// RenderUI();






let AddTask = document.querySelector(".add_task");
let inp = document.querySelector("#add_task");
let ul = document.querySelector(".task_list");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

console.log("Initial Tasks:", tasks);

// ================= ADD TASK =================
AddTask.addEventListener("click", () => {

    let task = inp.value.trim();
    console.log("Input Value:", task);

    if (task === "") {
        console.log("Empty task not allowed ❌");
        return;
    }

    tasks.push({ text: task, Done: false });

    console.log("Task Added ✅");
    console.log("Updated Tasks:", tasks);

    sils();
    RenderUI();

    inp.value = "";
});

// ================= SAVE TO LOCAL STORAGE =================
function sils() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log("Saved To LocalStorage 💾");
}

// ================= RENDER UI =================
function RenderUI() {

    ul.innerHTML = "";

    console.log("Rendering UI 🔄");
    console.log("Current Tasks:", tasks);

    tasks.forEach((task, index) => {

        const li = document.createElement("li");

        li.innerHTML = `
            <input type="checkbox" 
                class="checkBox" 
                data-index="${index}" 
                ${task.Done ? "checked" : ""}>

            <span style="
                flex:1;
                margin-left:8px;
                ${task.Done ? "text-decoration: line-through; opacity:0.6;" : ""}
            ">
                ${task.text}
            </span>

            <button 
                class="Dbtn" 
                data-index="${index}">
                Delete
            </button>
        `;

        li.style.display = "flex";
        li.style.alignItems = "center";
        li.style.justifyContent = "space-between";
        li.style.marginTop = "10px";

        ul.appendChild(li);
    });

    console.log("UI Render Complete ✅");
}

// ================= DELETE + CHECKBOX =================
ul.addEventListener("click", (e) => {

    // DELETE
    if (e.target.classList.contains("Dbtn")) {

        const index = e.target.dataset.index;

        console.log("Deleting Task:", tasks[index]);

        tasks.splice(index, 1);

        sils();
        RenderUI();
    }

    // CHECKBOX TOGGLE
    if (e.target.classList.contains("checkBox")) {

        const index = e.target.dataset.index;

        tasks[index].Done = e.target.checked;

        console.log("Checkbox Changed:", tasks[index]);

        sils();
        RenderUI();
    }
});

// ================= INITIAL LOAD =================
RenderUI();