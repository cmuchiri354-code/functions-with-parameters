// arrow functions withparameters 
// example1 
const greeting =(name) =>{
    console.log("hello" + name);
}
// call the function 
greeting("Mike")
greeting("Sasha")
greeting("Bella")

const county =(county) =>{
    console.log("i come from" + county);
}
// call the function 
county("Nairobi")
county("Nakuru")
county("Kisumu")

// example 3
const addition =(num1,num2) => {
    let answer = num1 +num2
    console.log("the sum is " +answer);
}
// call the function 
addition(50,100)


// example 4 
const subtraction =(num1,num2) =>{
    let answer =num1 - num2
    console.log("the difference is" + answer);
}
// call the function 
subtraction(100,50)


// example 5 
const modulus =(num1,num2) =>{
    let answer = num1%num2
    console.log("the answer is" + answer);
}
// call the function 
modulus(50,10)


const checktrafficlight = (lightcolor) =>{

    if (lightcolor=== "red") { 
        console.log("STOP");
    }
    else if (lightcolor=== "yellow") { 
        console.log("GET READY");
    }
    else if (lightcolor=== "green") { 
        console.log("GO");
    }
    else{
        console.log("invalid traffic light");
    }
};

// call the function 
checktrafficlight("red")
checktrafficlight("yellow")
checktrafficlight("green")
checktrafficlight("purple") 