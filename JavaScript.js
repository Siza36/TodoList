const input = document.querySelector("#input");
const addBtn = document.querySelector(".add-button");
const ul = document.querySelector(".ul");
const dropDown = document.querySelector("#dropdownlist")
dropDown.addEventListener("click",dropDownfunc);

addBtn.addEventListener("click" , addTask);




function addTask(){
    const eachTask = document.createElement("div");
    eachTask.classList.add("eachTask");

    const li = document.createElement("li");
    li.innerText = input.value;

    const checkAndTrashDiv = document.createElement("div");
    checkAndTrashDiv.classList.add("checkandtrash");

    const checkBtn = document.createElement("button");
    checkBtn.classList.add("check");


    const trashBtn = document.createElement("button");
    trashBtn.classList.add("trash");

    
    const checkIcon = document.createElement("i");
    checkIcon.classList.add("fas","fa-check");
    checkBtn.append(checkIcon);
    checkIcon.addEventListener("click",completeTask)
    
    const trashIcon = document.createElement("i");
    trashIcon.classList.add("fas","fa-trash");
    trashBtn.append(trashIcon)
    trashIcon.addEventListener("click",deleteTask)

    checkAndTrashDiv.append(checkBtn,trashBtn);
    eachTask.append(li,checkAndTrashDiv);
    ul.append(eachTask);
    console.log(ul);
    input.value = "";
}

function dropDownfunc(eve) {
    tasks = ul.children;
    console.log(tasks)
    for (let item of tasks) {
        switch (eve.target.value)
        {
       case "All":
           item.style.display = "flex"
           break;
       case "Completed":
            if(item.classList.contains("complete")){
               item.style.display = "flex";
            }else{
               item.style.display = "none";
            }
           break;
       case "Notcompleted":
        if(item.classList.contains("complete")){
           item.style.display = "none";
        }else{
           item.style.display = "flex";
        }
           break;
    }}}
    function deleteTask(eve){
        const trashBtn = eve.target;
        const parent = trashBtn.parentElement.parentElement.parentElement;
        parent.remove();
}
function completeTask(eve) {
    const completeBtn = eve.target;
    const parent = completeBtn.parentElement.parentElement.parentElement;
    parent.classList.toggle("complete")
}