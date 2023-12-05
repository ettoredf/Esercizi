class User {
  constructor (firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
  confrontAge(otherUser) {
    if (this.age < otherUser.age) {
      return `${this.firstName} è più giovane di ${otherUser.firstName}`;
    } else if (this.age > otherUser.age) {
      return `${this.firstName} è più vecchio di ${otherUser.firstName}`;
    } else {
      return `${this.firstName} ha la stessa età di ${otherUser.firstName}`;
    }
  }
}
const user1 = new User("Giusepe", "Verdi", 45, "Palermo");
const user2 = new User("Antonio", "Vivaldi", 45, "Firenze")

const confrontAge = user1.confrontAge(user2);
console.log(confrontAge);