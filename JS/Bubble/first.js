// const red = document.getElementById('red')
// const orange = document.getElementById('orange')
// const blue = document.getElementById('blue')
// const green= document.getElementById('green')
// const purple = document.getElementById('purple')
// const body = document.body;

// red.addEventListener('click',()=>{
//     body.style.backgroundColor = 'red';

// })
// blue.addEventListener('click',()=>{
//     body.style.backgroundColor = 'blue';

// })
// green.addEventListener('click',()=>{
//     body.style.backgroundColor = 'green';

// })
// orange.addEventListener('click',()=>{
//     body.style.backgroundColor = 'orange';

// })
// purple.addEventListener('click',()=>{
//     body.style.backgroundColor = 'purple';

// }) 

// const body = document.body;  
// const button = document.querySelectorAll('button')
// console.log(button);

// button.forEach((button)=>{
//     button.addEventListener('click',()=>{
//         body.style.backgroundColor =  button.id;
//     })
// })

const root = document.getElementById('root');

root.addEventListener('click',(event)=>{
     if(event.target.tagName === 'BUTTON')
        document.body.style.backgroundColor = event.target.id;
    }) 


// event.stopPropagation