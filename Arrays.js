// // array------

// const myArr = [1, 2, 3, 4, 5, 6, "hitesh", true]

// console.log(myArr[0])

// myArr.push(10) //pushes the argument into the array

// console.log(myArr)

// myArr.pop() //pops an element from the array from the end

// console.log(myArr)

// myArr.unshift(8) //pushes the argument from the beginning

// console.log(myArr)

// myArr.shift() //pops from the beginning of the array

// console.log(myArr)

// console.log(myArr.includes(100)) //returns false
// console.log(myArr.includes(1)) //returns true

// let newArr = myArr.join()

// console.log(newArr) //typeof: string, joins the array and forms a string

// //slice and splice

// // console.log('A ', myArr)

// console.log(myArr.slice(0, 5)) //0 being inclusive and 5 being exclusive

// // array-------

// let myArray = [true, 234, false, 'nishant', 23, 78]

// console.log('myArray: ', myArray)

// myArray.slice(0, 3) //doesn't change the original array, only returns the sliced version


// // console.log(myArray) //returns the original array

// myArray.splice(1, 3) //both the arguments being inclusive

// console.log('spliced myArray: ', myArray)

// //array--------------

let marvel_heros = ['thor', 'ironman', 'spiderman']
let dc_heros = ['batman', 'superman', 'heman', 'flash']

// marvel_heros.push(dc_heros)

console.log(marvel_heros)
// console.log(marvel_heros[3][2])

let newArray = marvel_heros.concat(dc_heros)

console.log(newArray)

let arrNewHeros = [...marvel_heros, ...dc_heros] //spread operator

console.log(arrNewHeros)

let anotherArray = [1, 2, 3, [4, 5, 6, 7], 8, [-1, -2, [-8, -7]]]

let realAnotherArray = anotherArray.flat(Infinity)

console.log(realAnotherArray)

console.log(Array.isArray('nishant'))
console.log(Array.from('nishant'))
console.log(Array.from({name: 'nishant'})) //interesting situation

let s1 = 100
let s2 = 200
let s3 = 300

console.log(Array.of(s1, s2, s3))