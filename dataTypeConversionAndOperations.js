let score = '33'


// console.log(typeof score) //returns number

let valueInNumber = Number(score);
// console.log(typeof valueInNumber) //typeof can be used in both the ways
// console.log(valueInNumber) //prints NaN(Not a Number)

//"33" => 33
// "33abd" => NaN
// true => 1
//false => 0

let isLoggedIn = "nishant"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(isLoggedIn);
// console.log(booleanIsLoggedIn)

//1 => ture
// 0 => false
// "" => false
// "nishant" => true

let someNumber = 23

let stringNumber = String(someNumber)

console.log(typeof stringNumber)

// ************************* Operationd ***********************************

let value = 3
let negValue = -value

// console.log(negValue)

// console.log(2 + 2)
// console.log(2**2) //power

let str1 = 'hello'
let str2 = ' hello'

let str3 = str1 + str2

// console.log(str3)

// console.log("1" + 2) //string + number => string
// console.log(1 + '2')
// console.log("1" + "2")

// console.log('1' + 2 + 2)
// console.log(1 + 2 + '2') // number + number => number + string => string
// console.log((2 + 4) / 5)

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

console.log(num1)
console.log(num2)
console.log(num3)

let gameCounter = 100;

// gameCounter++;
// ++gameCounter

console.log(++gameCounter)