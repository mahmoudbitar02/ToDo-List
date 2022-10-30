

const todoInput = document.querySelector(".text")
const todoIcon = document.querySelector(".icon")
const todoResult = document.querySelector('.todo-result')
const todoLst = document.querySelector('.icon1') 
const todoLst1 = document.querySelector('.icon2') 
function addToDo(e){
    e.preventDefault();
    console.log('clicked')

    // add todo-list div

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("list")

    // add h3, data h3
    const newTodo = document.createElement("h3")
    newTodo.innerHTML = todoInput.value ;
    newTodo.classList.add('li1')
    todoDiv.appendChild(newTodo)

    todoInput.value='' 
    // creat btn
    const todoBtn = document.createElement("div")
    todoDiv.appendChild(todoBtn)

    // add complete , delete buttons
    const completeBtn = document.createElement('icon1')
    completeBtn.innerHTML = `<i class="fa-regular fa-check"></i>`
    todoBtn.appendChild(completeBtn)

    const removeBtn = document.createElement('icon1')
    removeBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`
    todoBtn.appendChild(removeBtn)
    todoResult.appendChild(todoDiv);

}


function toggleToDo(e){
    const item = e.target
    if (item.classList[1] == 'fa-check'){
        const but_div = item.parentElement.parentElement.parentElement
        but_div.classList.add('completed-todo')

    }
    
    if (item.classList[1] == 'fa-trash'){
        const but_div = item.parentElement.parentElement.parentElement
        but_div.classList.add('remove-todo')


    }


}

todoIcon.addEventListener('click',addToDo)
todoLst.addEventListener('click' ,toggleToDo)
todoLst1.addEventListener('click' ,toggleToDo)