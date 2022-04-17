const numbers = [1, 2, 3, 4, 5, 6];

function sum(acc,currval){
    return acc+currval
}

let sumOfNum=numbers.reduce(sum,0)
console.log(sumOfNum)



// using custom function....

let totalSum=numbers.reduce((acc,curr)=> acc+curr)

console.log(totalSum)