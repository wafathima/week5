
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


test();
console.log(t)

let item="book"
function outer(){
  let item="pen";{
console.log(item)
}
outer();
}
console.log(item)

  
//   -------type Coercion------------""

  console.log(45+"8");
  console.log(56-"7");
  console.log("56"*"3");
  console.log("hello "+6);
  console.log(9+"world")
  
// -------cnvt myself-----

console.log(Number("123"));
console.log(String(345));
console.log(Boolean(0));
console.log(Boolean("hello"));

// -----memory leak-----

let arr=[]

function leakfixed(){
  let temp=new Array(1000000).fill("data")
  console.log(clear[0]);
temp=null;
}

leakfixed();

function example(){
  let temp=["a","b","c","d"]
  console.log(temp[2]);
  temp=null
}
example();

function add(){
  x="don't"
  console.log(x)
}add();

function closure(){
  let small="data";
  return()=>console.log(small);
}
closure();


function add(){
  let x= "do it"
  console.log(x)
}add();

let tym= setInterval(()=>console.log("run"),10000);
clearInterval(tym);

function click(){
console.log("clicked")
}
document.addEventListener("click here",click);
document.removeEventListener("click here",click)
;
