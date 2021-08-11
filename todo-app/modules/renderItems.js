const ul = document.querySelector("ul");
const todoInput = document.getElementById("todo-input");

const renderItems = (store) => {
  ul.innerHTML = "";
  store.map((todo) => {
    const list = document.createElement("li");
    const span = document.createElement("span");
    //   Adding thrash and check icon to li
    span.innerHTML = `<i class="fas fa-check-square ${
      todo.completed ? "todo-finish" : ""
    }"></i> <i class="fas fa-trash del-item-btn" ></i>`;
    const value = document.createElement("p");
    value.innerText = todo.name;
    list.classList = todo.completed ? "list todo-completed" : "list";
    list.id = todo.id;
    list.appendChild(value);
    list.appendChild(span);
    ul.appendChild(list);
    todoInput.value = "";
  });
};

export default renderItems;
