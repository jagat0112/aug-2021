import { addTodos, markComplete } from "./modules/actions.js";
import { deleteTodo } from "./modules/store.js";
import renderItems from "./modules/renderItems.js";

const todoInput = document.getElementById("todo-input");
const addTodo = document.querySelector(".addTodo");
const ul = document.querySelector("ul");
const clearAll = document.querySelector(".clear-all");

let todo = "";

renderItems();

// Assigning value to todo
todoInput.addEventListener("input", (e) => {
  todo = e.target.value;
});

addTodo.addEventListener("click", (e) => {
  e.preventDefault();
  addTodos(todo);
});

// Delete and Set Complete Item
ul.addEventListener("click", (e) => {
  deleteTodo(e);
  markComplete(e);
});

// Clear All todos
clearAll.addEventListener("click", () => {
  ul.innerHTML = "";
});
