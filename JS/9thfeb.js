// Problem : Create an object representing a type of tea with properties for name, type, and caffeine content.
const teas = {
    name: "Lemon Tea",
    type: "Green",
    caffine:"Low",
}

// Problem : Access and Print the name and type properties of the tea object.

console.log(teas.name);
console.log(teas.type);

// Problem : Add a new property origin to the tea object.
teas.origin = "China"
console.log(teas.origin);

// Problem: Change the caffeine level of the tea object to "Medium".
teas.caffine="Medium";
console.log(teas.caffine);

// Problem : Remove the type of property from the tea object.
delete teas.type;

// Problem : Check if the tea object has a property of origin.
console.log(teas.type);

// Problem : Use a for..in loop to print all properties of the tea objects.
for(let key in teas){
    console.log(key = ":" + teas[key])
}
 // PRoblem : Create a copy of the tea object.
 const teaCopy ={...teas}  // shallow copy ? ---> its keys only first level keys so it is known as shallow copy.
 const anotherCopy = teas  // not a copy its just a refernce passing 

 // ---> if the value of the nested objects changes so it is known as the deep copy or if the value does not changes it is known as shallow copy.
 

