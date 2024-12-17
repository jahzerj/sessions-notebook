const name = "Max Blub";

const isStudent = true;

const age = 24;

const person = {
  name: "Max Blub",
  age: 24,
  isStudent: true,
  address: {
    street: "Ritterstrass",
    "house-number": 21,
    city: "Berlin",
  },
};

console.log("person name", person.name);
console.log("person age", person.age);

// console.log("person name", person[name])
console.log("person name", person["name"]);

const houseNumber = person.address["house-number"];
person.address["house-number"] = 23;

// nested objects work too
