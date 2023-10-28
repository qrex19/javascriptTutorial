// primitive dataTypes

// 7 types: string, number, boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false

const outSideTemp = null

let userEmail = undefined;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId)

const bigNumber = 23355664432234567432n //putting n in the end automatically gets it saved as a BigNunmber

console.log(bigNumber)

// ReferenceType(NON primitive)

// Array, Objects, Functions

const heros = ['nishant', 'harishit', 'hitesh']

let myObj = {
    name: 'nishant',
    age: 23

}

console.log(myObj)

const myFunction = function() {
    console.log('hello world')
}

console.log(typeof bigNumber)