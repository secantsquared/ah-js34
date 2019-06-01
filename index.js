// const kitty = {
//   name: 'fluffy',
//   age: 4,
//   speak: function() {
//     console.log(`Meow`)
//     console.log(this)
//   }
// }

// let x = 'not random'
// function addOneYear() {
//   x = 'random'
//   this.age += 1
//   console.log(this)
// }

// addOneYear()

// //function expression
// const funcA = function() {
//   console.log('funcA ran!!!', this)
// }

// //function declaration
// function funcB() {
//   console.log('funcB ran!!!', this)
// }

// const arrowFuncC = () => console.log('funcC', this)

// function returnAnArrow() {
//   return () => console.log('funcD ran', this)
// }

// funcA()
// funcB()
// arrowFuncC()
// returnAnArrow()

//object literal

// const objA = {
//   name: 'John',
//   age: 43,
//   speak: function() {
//     console.log(`Hey, I am ${this.name} and I am ${this.age}!!!!!`)
//   }
// }

// //function - makes objects ---> constructor function

// function ObjectMaker() {
//   this.name = 'John'
//   this.age = 64
//   this.speak = function() {
//     console.log(`${this.name}${this.age}`)
//   }
// }

// function Person(name, age) {
//   this.name = name
//   this.age = age
//   this.speak = function() {
//     console.log(`${this.name}${this.age}`)
//   }
// }

// const john = new ObjectMaker()

// const abba = new Person('Abba', 43)

class Shape {
  constructor(length, width) {
    this.length = length
    this.width = width
  }
  computeArea() {
    return `${this.length} * ${this.width}`
  }
}

// const rectangle = new Shape(10, 20)

// console.log('rectangle', rectangle)

// console.log('rectangle.length', rectangle.length)

// console.log('area of rectangle', rectangle.computeArea())

// console.log(abba)

class Rectangle extends Shape {
  constructor(length, width, newProp) {
    super(length, width)
    this.newProp = newProp
  }
}

class Square extends Rectangle {
  constructor(length, width, anotherProp) {
    super(length, width, anotherProp)
    this.anotherProp = anotherProp
  }
}

const square = new Square(20, 20, 'im a square')

console.log(square)
// const rect = new Rectangle(10, 40)
// console.log(rect)

class User {
  constructor(list) {
    this.list = list
  }
}
