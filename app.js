const todoInput = document.getElementById("todo-input");
const addTodo = document.querySelector(".addTodo");
const item = document.getElementsByClassName("list");
const ul = document.querySelector("ul");
const clearAll = document.querySelector(".clear-all");

let todo = "";

// Assigning value to todo
todoInput.addEventListener("input", (e) => {
  todo = e.target.value;
});

const addTodos = (item) => {
  const list = document.createElement("li");
  const span = document.createElement("span");
  //   Checking if the value of input is empty
  if (todoInput.value === "") {
    return alert("Empty Input");
  }
  //   Adding thrash and check button to li
  span.innerHTML = `<i class="fas fa-check-square"></i> <i class="fas fa-trash del-item-btn" ></i>`;
  const value = document.createElement("p");
  value.innerText = item;
  list.classList = "list";

  list.appendChild(value);
  list.appendChild(span);
  ul.appendChild(list);
  todoInput.value = "";
};

addTodo.addEventListener("click", (e) => {
  e.preventDefault();
  addTodos(todo);
});

ul.addEventListener("click", (e) => {
  if (e.target.classList[1] === "fa-trash") {
    e.target.parentElement.parentElement.remove();
  }
  if (e.target.classList[1] === "fa-check-square") {
    const value = e.target.parentElement.previousSibling;
    if (!e.target.classList[2]) {
      e.target.classList.add("todo-finish");
      value.classList = "todo-completed";
    } else {
      e.target.classList.remove("todo-finish");
      value.classList.remove("todo-completed");
    }
  }
});

clearAll.addEventListener("click", () => {
  ul.innerHTML = "";
});
