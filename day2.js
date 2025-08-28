
// -----day2 TDE---------
console.log(a)
let a=134;

console.log(x)
const p=20;

console.log(y)
var y=(40);

// ------(try…catch)------
try{
  let sum=unknown+29;
  console.log(sum)
}
catch(error){
  console.log(error.message)
}

try{
  let user=null
  console.log(user.name)
}
catch(error){
  console.log(error.message)
}

try{
  let data=JSON.parse("{hello}");
}
catch(error){
  console.log(error.message)
}

// ------Shadowing & Illegal Shadowing-----

let x=45;
function test(){
  let x=55;{
    console.log(x)
  }
}
test();
console.log(x);

let t=90;
function test(){
  var t=67
  ;{
    console.log(t);
  }
}
test();
console.log(t)

