const stringAdd = 'hello' + ' ' + 'world'

// console.log(stringAdd)

const name = 'nmishan'
const count = 200

console.log(`Hello my name is ${name}, and my count is ${count}`)

const newName = new String('NISHANT KUMAR JHA')

// console.log(newName)

// console.log(newName[1])

// console.log(newName.__proto__)

console.log(newName.length)
console.log(newName.toLowerCase())

console.log(newName.charAt(3))

const anotherName = newName.substring(0, newName.length - 1)

console.log(anotherName)

let stringWithSpaces = "nishant jha"

stringWithSpaces = stringWithSpaces.replace(' ', 'S')

let checkName = stringWithSpaces.includes('nishant')

console.log(checkName)

let str = 'nishant shivam hitesh arsh hita hiya'

console.log(str.split(' ')) //uses ' ' as a marker and turns the string into the array

