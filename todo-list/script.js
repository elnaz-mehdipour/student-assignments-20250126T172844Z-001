function populateTodoList(todos) {
  let list = document.getElementById('todo-list');
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: 'Wash the dishes', completed: false },
  { task: 'Do the shopping', completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!

 const input = document.querySelector('#todoInput');
  const ul = document.querySelector('#todo-list');
  const li = document.createElement('li');
  const span = document.createElement('span');
  const check = document.createElement('i');
  const trash = document.createElement('i');
  
  
  li.textContent = input.value;

  li.className = "list-group-item d-flex justify-content-between align-items-center";
  span.className = "badge bg-primary rounded-pill";
  check.className = "fa fa-check";
  trash.className = "fa fa-trash";
  check.ariaHidden = "true";
  trash.ariaHidden = "true";


  span.style.display = "flex";
  span.style.gap = "3px"

  if (!input.value) {
    alert("your input is empty.");
  }else{
    ul.append(li);
  }
  
  li.append(span);
  span.append(check,trash);
  
  check.addEventListener('click',()=>{
    if (li.style.textDecorationLine === "none") {
      li.style.textDecoration = "line-through";
    }else{
      li.style.textDecoration = "none";
    };
  })


  trash.addEventListener('click',()=>{
      li.remove();
  })
  input.value = "";
}
// addNewTodo();
// OPTIONAL
// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
