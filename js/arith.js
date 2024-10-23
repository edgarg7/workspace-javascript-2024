// get the element 
let spanE1 = document.getElementById('num1');
let spanE2 = document.getElementById('num2');
console.log("spanE1  -" + spanE1);
console.log("spanE2 -" + spanE2);
// element --- property
let n1 = parseInt(spanE1.textContent);
let n2 = parseInt(spanE2.textContent);
console.log(typeof n1);
console.log(typeof n2);
//var num1 = parseInt(document.getElementById('n1').textContent); 

//let n1 = parseInt(document.getElementById('n1').textContent);
//let n2 = parseInt(document.getElementById('n2').textContent);


//process
var c = n1 + n2;

//display
document.write(c);