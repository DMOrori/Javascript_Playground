let count = 100
for (let count = 1; count < 5; count++){
    //inside for loop bracketscount values starts frrom  1
    console.log("count value inside loop is: " + count);
}
//outside for loop brackets ,count value is 100
console.log("count value after loop is : " + count);
if(count == 100){
    //inside if brackets,count value is 50
    let count = 50;
    console.log("count inside if block" + count);
}
console.log(count);
