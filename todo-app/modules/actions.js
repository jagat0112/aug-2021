import renderItems from "./renderItems.js";
import CreateTodo from "./createTodo.js";

const date = document.querySelector("#date");
const time = document.querySelector("#time");
let store = [];

export const createTodo = ({ name, dueDate }) => {
  const newTodo = new CreateTodo(name, dueDate);
  store.push(newTodo);
};

export const deleteTodo = (e) => {
  let itemId = e.target.parentElement.parentElement.id;

  if (e.target.classList[1] === "fa-trash") {
    store = store.filter((todo) => todo.id !== parseInt(itemId));
  }
};

export const markComplete = (e) => {
  if (e.target.classList[1] === "fa-check-square") {
    let item = e.target.parentElement.parentElement.id;

    store.forEach((i) => {
      if (i.id == item) {
        return i.completed ? (i.completed = false) : (i.completed = true);
      }
    });
  }
  renderItems(store);
};

export const addTodos = (item) => {
  const dueDate = new Date(`${date.value} ${time.value}`);
  if (item === "") {
    return alert("Empty Input");
  }
  console.log(dueDate.getFullYear());
  const todo = { name: item, dueDate };
  createTodo(todo);
  renderItems(store);
};
