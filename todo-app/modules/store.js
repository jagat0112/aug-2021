import renderItems from "./renderItems.js";

export let store = JSON.parse(localStorage.getItem("todos")) || [];

export const addTodos = (todo) => {
  store.push(todo);
  localStorage.setItem("todos", JSON.stringify(store));
  renderItems(store);

  return store;
};

export const deleteTodo = (e) => {
  let itemId = e.target.parentElement.parentElement.id;

  if (e.target.classList[1] === "fa-trash") {
    store = store.filter((todo) => todo.id !== parseInt(itemId));
    localStorage.setItem("todos", JSON.stringify(store));
    renderItems(store);
  }
};
