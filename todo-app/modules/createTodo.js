let count = 1;

const CreateTodo = function (name, date) {
  this.id = count++;
  this.name = name;
  this.dueDate = date;
  this.completed = false;
  this.completedDate = null;
};

export default CreateTodo;
