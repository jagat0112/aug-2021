let store = [];

const storeTodos = (todo) => {
  store.push(todo);
  localStorage.setItem("todos", JSON.stringify(store));
  return store;
};

export default storeTodos;
