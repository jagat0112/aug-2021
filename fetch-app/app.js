fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE",
})
  .then((res) => res.json())
  .then((res) => console.log(res));

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((res) => JSON.stringify(res))
  .then((res) => sessionStorage.setItem("users", res));

const users = JSON.parse(sessionStorage.getItem("users"));
let usersDom = document.querySelector("ul");
const renderDom = () => {
  users.map((user) => {
    const link = `https://jsonplaceholder.typicode.com/posts/${user.id}`;

    const list = document.createElement("li");
    list.innerHTML = `<a href=${link}>${user.id}</a><p>${user.title}</p>`;
    list.setAttribute("item-id", user.id);

    usersDom.append(list);
  });
};
renderDom();
const fetchInput = document.querySelector(".fetch-input");
const fetchBtn = document.querySelector(".fetch-btn");

fetchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  usersDom.innerHTML = "";
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      userId: 1,
      title: fetchInput.value,
      body: "test",
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      users.push(json);
      renderDom();
    })
    .catch((err) => console.log(err));
});
