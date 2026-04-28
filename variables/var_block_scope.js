//hoisted to the top;var i = undefined
for(var i = 0; i < 5; i++){
    console.log(i);
}
console.log("after the loop i value is: " + i); //5; var is function scoped, not block scoped; i is accessible outside the loop