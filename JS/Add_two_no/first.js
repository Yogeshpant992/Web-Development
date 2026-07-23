const button = document.querySelector('button');
button.addEventListener('click',()=>{
    // Read the data
    const first_number = document.getElementById('first');
    const number1 = Number(first_number.value);

    const second_number = document.getElementById('second');
    const number2 = Number(second_number.value);
    
    if(isNaN(number1)|| isNaN(number2)){
        return ;
    }
    // output the result

    const result = number1+number2;
    const re = document.getElementById('result');
    re.textContent = "Result:"+ result;

})

//BMI calculator
//Dowry calculator 