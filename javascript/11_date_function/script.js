const user = {
  firstName: "Jaimin",
  lastName: "Patel",
  username: "mrjemmy",
  birthDayDate: new Date(1999, 11, 14),

  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },

  getAge: () => {
    const today = new Date();
    let age = today.getFullYear() - user.birthDayDate.getFullYear();
    return age;
  },

  usingNormalFunction: function () {
    console.log(this);
  },

  usingArrowFunction: () => {
    console.log(this);
  }
};

// console.log(user.firstName)
// console.log(user["lastName"])

console.log(user.getFullName());
// console.log(user.getFullName().toUpperCase())

// console.log(firstName.toUpperCase())
// console.log(firstName.toLowerCase())

console.log(user.getAge());
console.log(user.usingNormalFunction());
console.log(user.usingArrowFunction());


