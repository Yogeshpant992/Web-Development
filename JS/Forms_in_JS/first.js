const form = document.querySelector('form');

// form.addEventListener('input',(event)=>{
//     console.log(event.target.value);
// })


// form.addEventListener('change',(event)=>{
//     console.log(event.target.value);
// })

// form.addEventListener('focusout',(event)=>{
//     console.log(event.target.value);
// })


// form.addEventListener('focusout',(event)=>{
//     console.log(event.target.value);
// })

// Whenever there is change in forms

// form.addEventListener('submit',(event)=>{
//     console.log("form Submitted");
// })

// form.addEventListener('reset',(event)=>{
//     console.log("form reset");
// })


// form.addEventListener('submit',(event)=>{
//     event.preventDefault(); //   it help to prevent page from getting refreshed fully or prevent current or default behaviour.
//     const first = document.getElementById("first");
//     console.log(first.value);

//     const second = document.getElementById("second");
//     console.log(second.value);

//     const third = document.getElementById("third");
//     console.log(third.value);

//     const result = document.getElementById('result');
//     result.innerText = `${first.value} ${second.value} is a good Boy`;
//     document.body.append(result);
// })

form.addEventListener('submit',(event)=>{
 const data = new FormData(form);
    event.preventDefault();
    for(let [key,value] of data.entries())
        console.log(key ,value);

    // console.log(Array.from(data.keys()));
    // console.log(Array.from(data.values()));
})