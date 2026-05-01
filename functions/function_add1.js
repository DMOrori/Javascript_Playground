let DEFAULT_VAL = 30 
function addTwoNumbers(first,second=DEFAULT_VAL){ 
console.log('first parameter is :',first) 
console.log('second parameter is :',second) 
return first+second; 
} 
console.log("case 1 sum",addTwoNumbers(1)) 
console.log("case 2 sum",addTwoNumbers(3,undefined))