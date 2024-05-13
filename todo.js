let todoTitle = document.getElementById('todo-title');
let dueDate = document.getElementById('dueDate');
let todoCont = document.getElementById('todo-cont');



function Today() {
    let time = document.getElementById('time');
    time.innerText = new Date().toLocaleString();
   }
   Today()

 function addTodoToList(){

     if (todoTitle.value === '' || dueDate.value === '') {  
        document.getElementById('warn').style.display = 'block'    
    } else {
        div = document.createElement('div')
        div.classList.add('cont');
        div.innerHTML = `<div class="left"> 
        <i class="fa-solid fa-book"></i>
        <div class="cont2">
        <div class="design"></div>
        <p>${todoTitle.value}</p>
        <p class="due">${dueDate.value}</p>
        </div>
    </div>
   </div>`
        todoCont.appendChild(div)

// ADD DELETE ICON
 dele = document.createElement('i')
 dele.classList.add('fa-solid')
 dele.classList.add('fa-xmark')
 dele.id = 'del'
 div.appendChild(dele);
 
// RESET INPUT FIELD
      todoTitle.value = '';
     dueDate.value = '';
       document.getElementById('warn').style.display = 'none';
   }

   saveTodos();
 }


 todoCont.addEventListener('click', function (Event) {
    if (Event.target.tagName === 'DIV') {
     Event.target.classList.toggle('checked');
     saveTodos();
    } 
    else if(Event.target.tagName === 'I'){
        Event.target.parentElement.remove()
        saveTodos();
   } },false)



window.addEventListener('DOMContentLoaded', () =>{
    const loader = document.querySelector('.design4')
    const cont2 = document.querySelector('.ccc')
    setTimeout(() => {
        loader.style.display ='none',
        cont2.style.display ='flex'
    },2000);
})



function saveTodos() {
    localStorage.setItem("List", todoCont.innerHTML)
}

function displayTodo() {
    todoCont.innerHTML = localStorage.getItem("List")
}
displayTodo();