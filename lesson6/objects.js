// створити 3 обʼєкти через {}
function Teacher(name, age, salary) {
  this.name = name, 
  this.age = age, 
  this.salary = salary;

  this.infoByTeacher = function () {
    console.log(`Name: ${this.name}, age: ${this.age}, salary: ${this.salary}`);
  };
}

let teacher1 = new Teacher("Olena", 45, 20000)
let teacher2 = new Teacher("Denis", 38, 17200)

teacher1.infoByTeacher()
teacher2.infoByTeacher()

function Car(car_name, year, mileage) {
  this.car_name = car_name, 
  this.year = year, 
  this.mileage = mileage;

  this.infoByCar = function () {
    console.log(
      `Car make: ${car_name}, year of issue: ${year}, mileage: ${mileage}`
    )
  }
}

let car1 = new Car("Toyota", 2017, 1000);

car1.infoByCar();

function User(first_name, last_name) {
  this.first_name = first_name, 
  this.last_name = last_name;

  this.userInfo = function () {
    console.log(
      `User first name is: ${first_name}, user last name is: ${last_name}`
    )
  }
}

let user1 = new User("Maria", "Palvova")

user1.userInfo()

// створити 3 обʼєкти через Object()
let person1 = new Object()
person1.gender = "male", 
person1.occupation = "Project Manager"

let person2 = new Object()
person2.gender = "female", 
person2.occupation = "QA"

let person3 = new Object()
person3.gender = "female", 
person3.occupation = "Doctor"

console.log(person1)
console.log(person2)
console.log(person3)

//  створити обʼєкт на базі протиту іншого обʼєку (Object.create(інший_оʼєкт)
let persProto = {
  persProtoName: "Oleh",
  persProtoAge: 49,
  infoByPersProto: function() {
    console.log(`Person name: ${this.persProtoName}, person age: ${this.persProtoAge}`)
  }
}

let newPerson = Object.create(persProto)

console.log("Details for person:")
newPerson.infoByPersProto()

// через __prototype__
let persPr = {
  prName: "Dima",
  prAge: 38,

  infoByPersPr: function() {
    console.log(`Person name% ${this.prName}, person age: ${this.prAge}`)
  }
}

let newPersonPr = {}
newPersonPr.__proto__=persPr

console.log("Details for person:")
newPersonPr.infoByPersPr()

//створити обʼєкт engineer, від нього унаслідувати QA_engineer, вивести деталі по всім полям (engineer, QA_engineer) 
// унаслідувати ваш існуючий engineer від person. вивести значення всіх 3х обʼєктів
let person = {
  persName: "Ivan",
  persAge: 38,

infoByPerson: function() {
    console.log(`Person name: ${this.persName}, person age: ${this.persAge}`)
  }
}

let engineer = Object.create(person)
engineer.occupation = "QA"
engineer.salary = 2000

let QA_engineer = Object.create(person)
QA_engineer.type = "Manual"

console.log("Details for person:")
person.infoByPerson()
console.log("Occupation: " + engineer.occupation)
console.log("Salary: " + engineer.salary)
console.log("Type: " + QA_engineer.type)