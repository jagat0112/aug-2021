// Creating Objects in JS

// Method 1: Object Literal

const object = {
  key: "values",
};

// Method 2: Constructor method

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(this.name);
  };
}

const jagat = new Person("Jagat Pradhan", 25);
const john = new Person("John Doe", 52);

// console.log(jagat, john);

//  Method 3 creating by instance of an object

const address = {
  city: "kathmandu",
  state: "BG",
  country: "Nepal",
  get showAddress() {
    console.log(this.city, this.state, this.country);
  },
  set setCity(newCity) {
    this.city = newCity;
  },
};

address.setCity = "Pokhara";
// console.log(address.showAddress);
