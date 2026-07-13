const id = document.querySelector('#first');
id.innerHTML = "hello ";
const id2 = document.querySelector('.header2');
id2.style.backgroundColor = 'Pink';

// How to iterate over node list
//  const obj = document.querySelectorAll('.header2)  ---> This help to select multiple elements


//1 :  obj.forEach((val))=>{
    //  console.log(val)
    // })

// for(let val of obj)
//  console.log(val)

// using simple for loop 
// for(let i=0; i<obj.length; i++){
//   obj[i].style.color = "red";

// Convert Nodelist into array
//  Array.from(obj)

// --------------------------------------------------------------------


// const te = document.getElementsByTagName('li');

// How to iterate over it 
// for(let i=0; i<te.length; i++)
// te[i].style.color="black";

//  -------------------------------------------------------------------------

// const list = document.querySelector('li')
// console.log(list.parentElement);
// console.log(list.parentNode);

// const par = document.querySelector('ul')
// console.log(par.childNodes);
// console.log(par.children);
// console.log(par.FirstChild);
