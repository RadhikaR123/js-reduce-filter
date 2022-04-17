// subtract from the first elemnt....

const numbers = [1800, 50, 300, 20, 100];
const salary=15000

let subtaction=numbers.reduce((accu,curr)=> accu-curr)
console.log(subtaction)



// subtract from salary...

let difference=numbers.reduce((acc,curr)=> acc-curr,salary)

console.log(difference)