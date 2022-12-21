

const inputdiv = document.getElementById("input-bar");
const addTaskbtn = document.getElementById("add-btn");


const todolistul = document.querySelector(".todoitems");

const donelistul = document.querySelector(".doneitems");



addTaskbtn.onclick = () => {

    const task = inputdiv.innerHTML;
    inputdiv.innerText = "";

    todolistul.innerHTML += `<li class="doneitem">${task}</li>`
};