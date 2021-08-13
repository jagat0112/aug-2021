import renderItems from "./renderItems.js";
import CreateTodo from "./createTodo.js";
import storeTodos from "./store.js";

const date = document.querySelector("#date");
const time = document.querySelector("#time");

let store = [];

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
  const dueDate = `${date.value}T${time.value}+05:45`;
  if (item === "") {
    return alert("Empty Input");
  }
  const newTodo = new CreateTodo(item, dueDate);
  store = storeTodos(newTodo);
  renderItems(store);
};
