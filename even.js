// function to check even number...


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function even(num){
    if(num%2==0){
        return num
    }
}

let evenNumber=numbers.filter(even);
console.log(evenNumber)



let even_number=numbers.filter((x)=> x%2==0);
console.log(even_number)