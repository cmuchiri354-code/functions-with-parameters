// using functuions with parameters, create a function to chec k the gender of a person 
// NB: male or female or others 
function checkgender(gender){
    if(gender==="male"){
        console.log("the person's gender is male");
    }
    else if(gender==="female"){
        console.log("the person's gender is female");
    }
    else{
        console.log("the person's gender is others");
    }
}
// call the function 
checkgender("female")
checkgender("male")
checkgender("others")