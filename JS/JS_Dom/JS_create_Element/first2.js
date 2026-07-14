// <li>TS<li>
// created an element
// function attach(content){  
// const element = document.createElement('li');
// element.innerHTML = content;

// const element2 = document.createElement('li');
// element2.innerHTML=content+"V2.0";
// const parent = document.getElementById("root");
// // parent.appendChild(element);
// parent.append(element,element2);
// };

// attach("TS");
// attach("React");
// attach("Node");

//  ----------->   Text Node
// const element = document.createTextNode("Hello Coder Army");
// const parent = document.getElementById("root");
// parent.append(element);



//  ----------->   Attribute Nodes

// const element = document.createAttribute('id');
// element.value = "first";

// Acesss to first list 
// const current_list = document.querySelector('li');
// current_list.setAttributeNode(element);

// Access to second list
// const parent = document.getElementById("root");
// parent.children[1].setAttributeNode(element);

// Accessing the attributes of a element :

// const element = document.getElementById("root");
// console.log(element.getAttribute("class"));
// element.setAttribute("custome","20");
// element.setAttribute("class","root2");
// element.removeAttribute("custome");



// ***********Add nodes to DOM ******** 

const parent = document.getElementById("root");
// array
const element = document.createElement('li');
element.innerHTML = "TS";
// data
// parent.prepend(element);
// parent.append(element);

const child2 = parent.children[1];
// parent.insertBefore(element,child2);

// parent.replaceChild(element,child2);

const element = document.createElement("div");
element.innerHTML= "Hello Coder Army";

parent.insertAdjacentElement("beforebegin",element);

// Delete node or element 
const element = document.querySelector('li');

