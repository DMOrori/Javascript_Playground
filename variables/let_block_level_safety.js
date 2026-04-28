//declaring a let variable twice within the same block it will throw an error. This is because let variables are block scoped and cannot be redeclared within the same block.

    let balance = 5000  //number type
    console.log(typeof balance);
    
    balance = {message:"hello"} //changing number to object type
    console.log(typeof balance);



    /*
    use of separate block scopes,,also works with var but it is not recommended to use var as it is function scoped and can lead to unexpected behavior.
{
    let balance = 5000;
    console.log(typeof balance);
}

{
    let balance = { message: "hello" };
    console.log(typeof balance);
}

        */
