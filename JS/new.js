// Create an array containing types of teas;
let tea =["Green tea","lemon tea","Black tea", "oolong tea", "White tea","herbal Tea"]
console.log(tea);

// Problem : Add "Chamomile tea " to the existing list of teas
tea.push("Chamomile Tea");

// Problem : Remove "OOlong tea" from the list of teas 
const index = tea.indexOf("oolong tea");
if(index > -1){ 
    tea.splice(index,1);   // (index,1) means remove no of one item from the index we get from the array
}
console.log(tea)

// Problem : Filter the list to only include teas that are caffeinated
const caffinatedTeas = tea.filter((tea) => tea !== "herbal Tea");
console.log(caffinatedTeas);

// Problem : Sort the list of teas in alphabetical order.
console.log(tea.sort());

// Problem : Use a for loop to print each type of tea in the array
for(let i=0; i<tea.length; i++){
    console.log(tea[i]);
}

// Problem : Use a for loop to count how many teas are caffenitated (excluding herbal tea)
let count = 0;
for(let i=0; i<tea.length; i++){
    if(tea[i]=="herbal tea"){
        continue;
    }
    else 
        count ++ ;
}
console.log(count);

// Problem : Use a for loop to create a  new array with all tea names in uppercase
const uppercaseTeas = []
for(let i=0; i<tea.length; i++){
    uppercaseTeas[i]= tea[i].toUpperCase();
    console.log(uppercaseTeas[i]);
}
// Problem : USe a for loop to find the tea  name with the most character
let number = ""
for(let i=0; i<tea.length; i++){
    if(tea[i].length>number.length){
        longestTea = tea[i]
    }
}
