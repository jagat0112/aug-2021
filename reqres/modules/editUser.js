// EDIT USER

import { firstName, lastName, email, form } from "./addUser.js";
import fetchApi from "./fetchApi.js";
import deleteUser from "./deleteUser.js";

const table1 = document.querySelector("table");
table1.addEventListener("click", (e) => {
  if (e.target.classList[0] === "edit-btn") {
    const id = e.target.parentElement.parentElement.getAttribute("userid");
    editUser(id);
  } else if (e.target.classList[0] === "delete-btn") {
    const id = e.target.parentElement.parentElement.getAttribute("userid");
    deleteUser(id);
  }
});

const editUser = (id) => {
  fetch(`https://reqres.in/api/users/${id}`)
    .then((res) => res.json())
    .then(({ data }) => {
      firstName.value = data.first_name;
      lastName.value = data.last_name;
      email.value = data.email;
      form.setAttribute("submit-type", "edit-user");
    });
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newUser = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
    };
    if (form.getAttribute("submit-type") === "edit-user") {
      fetchApi(`https://reqres.in/api/users/${id}`, "PUT", newUser);
    }
  });
};
