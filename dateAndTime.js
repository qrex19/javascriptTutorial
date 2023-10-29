// Dates

let myDate = new Date()
console.log(typeof myDate)

// let myCreateDate = new Date(2023, 0, 23)//(Year, month, date) Months are zero indexed

let myCreateDate = new Date('10-29-2023') //in this case the months are 1 indexed

console.log(myCreateDate.toDateString())