class User {
  constructor(firstName, lastName, age, birthMonth, color, siblings) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.birthMonth = birthMonth;
    this.color = color;
    this.siblings = siblings;
  }

  retirement() {
    return this.age % 2 === 0 ? 10 : 15;
  }

  transportation() {
    const table = {
      red: "Mustang",
      orange: "Bicycle",
      yellow: "Horse and Buggy",
      green: "Corvette",
      blue: "Walking",
      indigo: "Motorcycle",
      violet: "Tesla",
    };
    // return table["red"];
    return table[this.color.toLowerCase()];
  }

  location() {
    switch (true) {
      case this.siblings < 0:
        return "Pittsburg";
      case this.siblings < 0:
        return "Columbus";
      case this.siblings === 1:
        return "Cleveland";
      case this.siblings === 2:
        return "Cincinnati";
      case this.sibling === 3:
        return "Youngstown";
      default:
        return "Boston";
    }
  }

  bankBalance() {
    switch (this.birthMonth) {
      case '1':
      case '2':
      case '3':
      case '4':
        return "$1,000,000";
      case '5':
      case '6':
      case '7':
      case '8':
        return "$3,500,000";
      case '9':
      case '10':
      case '11':
      case '12':
        return "$85.00";
      default:
        return "$0.00";
    }
  }

  fortune() {
    return `${this.firstName} ${
      this.lastName
    } will retire in ${this.retirement()} years, with ${this.bankBalance()} in the bank,
a vacation home in ${this.location()}, and travel by ${this.transportation()}.`;
  }
}

export default User;
