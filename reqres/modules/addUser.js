// AddUser
import fetchApi from "./fetchApi.js";
const form = document.querySelector("form");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
// console.log(inputs)
form.addEventListener("submit", (e) => {
  if (form.getAttribute("submit-type") === "new-user") {
    e.preventDefault();
    if (firstName.value === "" || lastName.value === "" || email.value === "")
      alert("Please input all fields");
    const newUser = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
    };

    fetchApi("https://reqres.in/api/users", "POST", newUser);
  }
});

export { firstName, lastName, email, form };
