// A --> 90 +
// B --> 80
// c --> 70
// D -- > 60
// Fail else

function grade(num) {
    if(num >= 90){
        return "A" ;
    }
    else if (num >=80){
        return "B";
    }
    else if(num >= 70){
        return "C";
    }
    else if(num >= 60){
        return "D";
    }
    else 
    return "Fail";

}

console.log(grade(50));