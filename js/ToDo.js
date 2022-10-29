

const todoInput = document.querySelector(".text")
const todoIcon = document.querySelector(".icon")
const todoResult = document.querySelector('.todo-result')

function addToDo(e){
    e.preventDefault();
    console.log('clicked')

    // add todo-list div

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("list")

    // add h3, data h3
    const newTodo = document.createElement("h3")
    newTodo.innerText = todoInput.value ;
    newTodo.classList.add('li1')
    // creat btn
    const todoBtn = document.createElement("div")
    todoDiv.appendChild(todoBtn)

    // add complete , delete buttons
    const completeBtn = document.createElement('icon1')
    completeBtn.innerText = <i class="fa-regular fa-check"></i>
    todoBtn.appendChild(completeBtn)

    const removeBtn = document.createElement('icon1')
    completeBtn.innerText = <i class="fa-solid fa-trash"></i>
    todoBtn.appendChild(removeBtn)
    todoResult.appendChild(todoDiv);

}

todoIcon.addEventListener('click',addToDo)