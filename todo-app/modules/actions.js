import renderItems from "./renderItems.js";
import CreateTodo from "./createTodo.js";
import { addTodos as addTodo } from "./store.js";

const date = document.querySelector("#date");
const time = document.querySelector("#time");

export const markComplete = (e) => {
  const store = JSON.parse(localStorage.getItem("todos"));

  if (e.target.classList[1] === "fa-check-square") {
    let item = e.target.parentElement.parentElement.id;
    store.forEach((i) => {
      if (i.id == item) {
        return i.completed ? (i.completed = false) : (i.completed = true);
      }
    });
    localStorage.setItem("todos", JSON.stringify(store));
    renderItems(store);
  }
};

export const addTodos = (item) => {
  const dueDate = `${date.value}T${time.value}+05:45`;
  if (item === "") {
    return alert("Empty Input");
  }
  const newTodo = new CreateTodo(item, dueDate);
  addTodo(newTodo);
};
