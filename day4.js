-----allo&deallo-----
let x=18;
console.log(x);

let person={name:"wafa",grade:"degree"};
person:null;

-------cnstrctr&this-----
****cnstrctr*****
class person{
  constructor(name,age){
    this.name=name;
    this.age=age;
  }
  greet(){
    console.log("heyyy iam "+this.name+" am "+this.age+" year old");
  }
}
let p1=new person ("wafa",17);
let p2=new person ("isha",19)
let p3=new person ("rasha",12)
let p4=new person ("Sara",29)
let p5=new person ("ayisha",15)
p1.greet();
p2.greet();
p3.greet();
p4.greet();
p5.greet();

***obj mthd*****/


let user={
  name:"wafa",
  greet:function(){
    console.log("heyy "+this.name)
  }
}
user.greet();

***arrw fnu mthd****

const obj={
name:"wafa",
show:()=>console.log(this.name)
};
obj.show();

function greet(name,callback){
  console.log("Hello "+name);
  callback();
}
function bye(){
  console.log("goodbye")
}
greet("wafa",bye)

-----generator fun-----

function* countForever(){
  let i=1
  while(true){
    yield i++;
  }
}
let counter=countForever();
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);

function* genfun(){
  yield "iphone";
  yield "samsung";
  yield "redme";
}
let g=genfun();
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());

function* arraygen(arr){
  for (let item of arr){
    yield item;
  }
}
let frt=arraygen(["apple","kiwi","lemon","orange"]);
console.log(frt.next());
console.log(frt.next());
console.log(frt.next());
console.log(frt.next());
console.log(frt.next());

function* number(arr){
  for(i=1; i<=4; i++){
    yield i;
  }
}
let count=number();
console.log(count.next());
console.log(count.next());
console.log(count.next());
console.log(count.next());
console.log(count.next());

function* genfun(g){
  let i=1;
  while(i<=6){
    yield i++
  }
}
let count=genfun();
console.log(count.next());
console.log(count.next());
console.log(count.next());
console.log(count.next());
console.log(count.next());
console.log(count.next());
console.log(count.next());

-----currying fnctn-----

function add(a){
  return function(b) {
    return function(c) {
      return a+b+c;
    };
  };
};
console.log(add(14)(24)(56));

const add=a=>b=>c=>a+b+c;
console.log(add(23)(67)(73));

function multiply(a){
  return function(b){
    return a*b
  }
}
const double=multiply(2);
const trible=multiply(3);
const quadruple=multiply(4)

console.log(double(99452542));
console.log(trible(99999999));
console.log(quadruple(9090009090909));
console.log(double(1234567890));
console.log(quadruple(54754489));
console.log(trible(25435636));

-----callback-----

function greet(name,callback){
  console.log("good morning "+name)
  callback();
}
function say(){
  console.log("have a good day")
}
greet("jiya ",say);
greet("lia",say);

function greet(name,callback){
  console.log("HEY! "+name);
  callback();
}
greet("wafa",()=>console.log("How are you?"))
greet("sana",()=>console.log("what's up?"))

function display(){
  console.log("it will take 4sec")
}
setTimeout(display,4000)

setTimeout(()=>{
  console.log("hey.. pizza ready!🍕")
},4000);
console.log("order placed!✅")

setTimeout(()=>{
  console.log("you are passed💯")
},4000);
console.log("resul coming soon...")

