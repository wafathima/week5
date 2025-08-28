function sync(){
  console.log(`start`);
  console.log(`middle`);
  console.log(`end`)
}
sync();
function sync(a,b){
  console.log(a+b);
  console.log(a-b);
  console.log(a*b);
  console.log(a/b);
}sync(38,26);


console.log(1);
setTimeout(()=>{
  console.log(2)
},3000);
console.log(3);

console.log("which is the world biggest contry?")
setTimeout(()=>{
  console.log("A:Rassia")
},4000);
console.log("USA , Rassia , China , Euroup")

console.log("Hello");
setTimeout(()=>{
  console.log("WELCOME!")
},2000);
console.log("log in");

"use strict";
z=30;
console.log(z);

function add(a,a,b){
  return a+b
}
console.log(add(1,2,3));

function showThis(){
  console.log(this)
}
showThis();

let a=100;
delete a;
