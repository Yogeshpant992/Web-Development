const obj1 = {
    fname: 'Piyush',
    lname: 'Garg',
    getFullname : function () {
        if(this.lname !== undefined) return `${this.fname} ${this.lname}`;
        return this.fname;
    },
   __proto__ : Object,
};

const obj2 = {
    fname: 'Nriudh',
    lname: 'Jawala',
};
obj2.__proto__ = obj1;
obj1.__proto__ = null;

// DRY - Don not repeat yourself 

console.log(obj1.fname);
console.log(obj2);
console.log(obj2.getFullname);