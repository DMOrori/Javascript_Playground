"use strict"
function Test()
{
    var num = 100
    console.log("value of num in test(): " + num)
    {
console.log("inner block begins")
let num = 200
console.log("value of num: " + num)
    }
}
Test()