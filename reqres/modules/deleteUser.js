const deleteUser = (id) => {
  console.log(id);
  fetch(`https://reqres.in/api/users/${id}`, { method: "DELETE" })
    .then((res) => JSON.stringify(res))
    .then((res) => console.log(res));
};

export default deleteUser;
