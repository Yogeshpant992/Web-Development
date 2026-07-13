DOM - Stands for document object model. It is the way to represent a web page so that program (like Javascript) can interact with it.
--> document is use to store full HTML page. refernce of this document is inside global window then document.
---> We can change using this document module. Javascript can be maipulated using this dom element.
-->  HTML pages are automatically convert to object as by JS. 
Window ===>  Global Object 
  |
  |
Document ===> HTML file   ------> Inside JavaScript every element is   treated as like DOM.   
HTML file consist of ===> Head (Meta tag, Meta name , title ) , body (Text node , div tag (h1 , h2 heading and unordered list)) 
--> A browser takes your HTML document and turns it into DOM.

                         
HOW to acess the element :- 
 console.dir(document)  --> This is used to get the full directory of the document.
 console.document --> it is used to return the only html document.
 class refered in HTML through JAVASCript is done through classname.
 class keyword is already reserved in JS.


a) Accessing By ID :
   Method : document.getElementById(id)
   Description : Retreive a single element with the specific id attribute

b) Accessing by className
 MEthod : document.getElementsByClassName(className)

c: Accessing by CSS selectors: 
 i : Single element 
---> We can manipulate CSS using DOM :
     
 ii : Accessing by tag name 
---> Method : document.getElementByTagName()
     return a live HTML collection with the same tag 
    
 iii. : Accessing using relationship 
    element.firstChild , element.lastElementChild
    element.lastChild , element.firstElementChild
  
 iv. Sibling nodes :
    MEthod : element.nextSibling , element.previousSibling
