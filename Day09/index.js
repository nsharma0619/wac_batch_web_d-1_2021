// function oddeven(n){
//     if(n%2==0){
//         return "even";
//     }else{
//         return "odd";
//     }
// }

// var a=10, b=11, c=15;

// var result_a, result_b, result_c;

// result_a = oddeven(a);
// result_b = oddeven(b);
// result_c = oddeven(c);
 
// console.log(result_a);
// console.log(result_b);
// console.log(result_c);

// const a = 10;


// let b = 10;
// var

// document.onreadystatechange = function(){
//     document.getElementById("para").innerHTML = 'hello world!!';
// }

// selecting an element

// document.getElementById('para').innerHTML = 'hello world again!!';
// document.getElementsByTagName('p')[1].innerHTML = "sldjflasdjflaksdjfljodi";
// document.getElementsByClassName('paragraph')[2].innerHTML = "kasfklasdjflkielksd";


// changing elements

// document.getElementById('para').innerHTML = 'hello world again!!';



// function zoomin(){
//     document.getElementById('earth').height = document.getElementById('earth').height + 10;
// }

// function zoomout(){
//     document.getElementById('earth').height = document.getElementById('earth').height - 10;
// }


let li = document.createElement('li');
// li.innerHTML = "this is list item tag";
let text = document.createTextNode('aksdflasdfkj')
li.appendChild(text);

document.getElementById('list').appendChild(li);
