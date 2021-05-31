/*string -> "neeraj"
int float -> numbers -> 5, 5.6
boolean -> true false
objects 
functions
*/
// this is single line comment

// var x = 7;
// console.log(typeof(x));

// var x = "7";
// var name = "Neeraj Sharma";
// console.log(typeof(x));
// console.log(name);

// var bool = true;
// console.log(bool);

// var a = 5, b = 6;
// console.log(a+b);
// console.log(a-b);
// console.log(b%a);
// console.log(a**b);

// var num = 16;
// if(num%2==0){
//     console.log("even");
// }else{
//     console.log("odd");
// }

// var a=5, b=3, c=100;
// if(a>b){
//     if(a>c){
//         console.log("a is the greatest");
//     }
//     else{
//         console.log("c is the greatest");
//     }
// }
// else if(b>a){
//     if(b>c){
//         console.log("b is the greatest");
//     }else{
//         console.log("c is the greatest");
//     }
// }
// else{
//     console.log("c is the greatest");
// }

// var i = 1;
// while(i<=100){
//     console.log(i);
//     i++; // i = i + 1
// }

// for(var i=0;i<=10000;i++){
//     console.log(i);
// }

// function myfunc(n){
//     var i = 1;
//     while(i<=n){
//         console.log(i);
//         i++; // i = i + 1
//     }
// }

// myfunc(100);
// myfunc(50);


// function oddeven(n){
//     if(n%2==0){
//         return "even"
//     }
//     else{
//         return "odd"
//     }
// }

// var ans = oddeven(6);
// console.log(ans);

var person = {
    firstname : "neeraj",
    lastname : "sharma",
    monthly_salary : 10000,
    address : "h no. 123 @street",
    calculate_anual_salary : function(){
        return this.monthly_salary*12;
    }
}

console.log(person.calculate_anual_salary())