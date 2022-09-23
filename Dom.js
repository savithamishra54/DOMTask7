// Traversing the DOM
// var itemList = document.querySelector('#items');
//parentNode
// console.log(itemList.parentNode.parentNode.parentNode);
// itemList.parentNode.style.backgroundColor='#f4f4f4';


//parentElement
// console.log(itemList.parentElement.parentElement.parentElement);
// itemList.parentElement.style.backgroundColor='#f4f4f4';

//childNode
//console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor='yellow';
//firstchild
// console.log(itemList.firstChild);

// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';

//nextSibling
// console.log(itemList.nextSibling);
// //nextElementSibling
// console.log(itemList.nextElementSibling);

//previousSibling
// console.log(itemList.previousSibling);
// //previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color='green'


// //createElement

// //create a div
// var newDiv= document.createElement('div');
// //add class
// newDiv.className = 'hello';
// //add id
// newDiv.id='hello1'; 
// //add attr
// newDiv.setAttribute('title','Hello Div');
// //create text node
// var newDivText = document.createTextNode('hello world');

// //add text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');
  
// console.log(newDiv);

// newDiv.style.fontSize = '30px';
// container.insertBefore(newDiv, h1);

node = document.getElementById('items');

node.innerHtml = '<li>Hello world</li>' + node.innerHtml;

console.log(ssnode.innerHtml);
