//                                             //Topic: var
var  age = 25;

if(true){

 console.log(age);

}
   
function solve(){

    var age = 25;
    console.log(age);        // this will run because it is inside the bracket
}
// console.log(age)          this line of code will not run because it is out of function bracket
solve();

//                                           // Topic:let
{
    let a = 20;
    console.log(a);       // it run
}
console.log(a);        // it will also not run because it out of block      


let a = 20;
 a= "dev";
 console.log(a);
a = true;


                                           // Topic:const

const a = 28;
console.log(a);

a = 20;               // we can't update value 
const a = 22;         // it also not run 
