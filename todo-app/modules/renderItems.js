const ul = document.querySelector("ul");
const todoInput = document.getElementById("todo-input");

const renderItems = (store) => {
  ul.innerHTML = "";
  store.map((todo) => {
    const lessThanAday =
      Date.parse(todo.dueDate) - Date.now() < 1000 * 60 * 60 * 24
        ? Date.parse(todo.dueDate) - Date.now()
        : null;

    const lessThanAnHour =
      Date.parse(todo.dueDate) - Date.now() < 1000 * 60 * 60
        ? Date.parse(todo.dueDate) - Date.now()
        : null;

    const timeAndDate = moment(todo.dueDate).format("lll");
    const list = document.createElement("li");
    const span = document.createElement("span");
    const date = document.createElement("p");
    const value = document.createElement("p");

    //   Adding thrash and check icon to li
    span.innerHTML = `<i class="fas fa-check-square ${
      todo.completed ? "todo-finish" : ""
    }"></i> <i class="fas fa-trash del-item-btn" ></i>`;
    date.innerText = timeAndDate;
    value.innerText = todo.name;
    list.classList = todo.completed ? "list todo-completed" : "list";
    lessThanAday && list.classList.add("warning");
    lessThanAnHour && list.classList.add("hour-alert");
    list.id = todo.id;
    list.appendChild(value);
    list.appendChild(date);

    list.appendChild(span);
    ul.appendChild(list);
    todoInput.value = "";
  });
};

export default renderItems;
