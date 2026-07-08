const arr = [1, 2, 3, 4, 5, 6];

// Write a prototype for Error : .forEach function
// Real Signature ko samjhta h - No return, function input, value , index
// calls my fn for every value

// let ret = arr.forEach(function(value,index){
//     console.log(`Value at Index ${index} is ${value}`);
// });

// console.log(`Ret is`, ret);

if (!Array.prototype.myForEach) {
  Array.prototype.myForEach = function (userFn) {
    const originalArr = this;

    for (let i = 0; i < originalArr.length; i++) {
      userFn(originalArr[i], i);
    }
  };
}

const ret = arr.myForEach(function (value, index) {
  console.log(`My For each value at Index ${index} is ${value}`);
});

// Signature .map
// Return? - New Array, Each ele Iterate, userfxn

const n = arr.map((e) => e * 2);
console.log(n);
console.log(arr);

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (userFn) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      const value = userFn(this[i], i);
      result.push(value);
    }
    return result;
  };
}

if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function (userFn) {
    const newArr = [];
    for(let i=0; i<this.length; i++){
       if( userFn(this[i]))
        newArr.push(this[i]);
    }
    return newArr;
  };
}

if(!Array.prototype.myreduce){
   Array.prototype.myreduce = function (userFn){
    const value;
    for(let i=0; i<this.length; i++){
        value = value + this[i] ;
    }
   }
}

const n1 = arr.myMap((e) => e * 3);
console.log(n1);

// Filter
//Signature:  Return - new array | input: userFn,
// agr user ka function True return krta hai toh current value ko new array mai include kr deta h

const n3 = arr.filter((e) => e % 2 == 0);
console.log(n3);

const n4 = arr.myFilter((e) => e%2 == 0);
console.log(n4);


// myFilter
//reduce
// flat 
// blind
// call
// apply
//slugify 
// deepclone
