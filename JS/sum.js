let arr = [1,3,4,5,6];

function sumArr(numbers){
    let sum = 0;
    for(let i=0 ; i< numbers.length; i++){
        sum = sum + numbers[i];
    }
    return sum 
}

let grade = sumArr(arr);
console.log(grade);