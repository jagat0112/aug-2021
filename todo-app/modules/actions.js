const ul = document.querySelector("ul");
const todoInput = document.getElementById("todo-input");

const store = [];
let count = 1;

export const createTodo = (item) => {
  const CreateTodo = function (item) {
    this.id = count++;
    this.name = item;
    this.dueDate = null;
    this.completed = false;
    this.completedDate = null;
  };
  const newTodo = new CreateTodo(item);
  store.push(newTodo);
};

export const deleteTodo = (e) => {
  if (e.target.classList[1] === "fa-trash") {
    e.target.parentElement.parentElement.remove();
  }
};

export const markComplete = (e) => {
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
};

export const addTodos = (item) => {
  createTodo(item);
  ul.innerHTML = "";
  store.map((todo) => {
    const list = document.createElement("li");
    const span = document.createElement("span");
    //   Checking if the value of input is empty
    if (item === "") {
      return alert("Empty Input");
    }
    //   Adding thrash and check button to li
    span.innerHTML = `<i class="fas fa-check-square"></i> <i class="fas fa-trash del-item-btn" ></i>`;
    const value = document.createElement("p");
    value.innerText = todo.name;
    list.classList = "list";
    list.appendChild(value);
    list.appendChild(span);
    ul.appendChild(list);
    todoInput.value = "";
  });
};
