const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function deleteToTo(event) {
  const li = event.target.parentElement;
  li.remove();
}
function paintTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const btn = document.createElement("button");
  btn.innerText = "❌";
  btn.addEventListener("click", deleteToTo);
  li.appendChild(span);
  li.appendChild(btn);
  toDoList.append(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  paintTodo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
