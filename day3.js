console.log("hello")
----overflow----
function hello(){
  hello();
}
hello();

function test(){
  test();
}
test();

function count(n){
  if(n===0)return
  console.log(n)
  count(n-1)
}
count(8);

function count(n){
  console.log(n)
  count(n-1)
}
count(6)

-----underflow----
let stack=[];
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

let stack=[]
console.log(stack.pop());


let stack=[1,2,3,4,5,];
if(stack===0){
  console.log("cannot pop up")
}else{
  console.log(stack.pop());
}

---------obect-----------
let person={
  name:"wafa",
  age:17,
  grade:"A",
  city:"califonia",
  greet:function(){
    console.log("Hello My Name is "+this.name+ " am "+this.age+" years old")
  }
};
person.greet();
console.log(person.grade);
console.log(person.city);

------------class-----------
class person{
  constructor(name,city){
    this.name=name;
    this.city=city
  }
  greet(){
    console.log("Hello myself "+this.name+" i am from "+this.city)
  }
}
let person1=new person("wafa","calicut");
let person2=new person("shenna","kollam");
person1.greet();
person2.greet();

class city{
  constructor(city,speciality){
    this.city=city;
    this.speciality=speciality;
  }
  add(){
    console.log(this.city+ " is "+ this.speciality)
  }
}
let city1=new city("swizerland","beautiful");
let city2=new city("lakshadeep","peacefull")
city1.add();
city2.add();

class car{
  constructor(name,year){
    this.name=name;
    this.year=year;
  }
add(){
  console.log(this.name + " "+ this.year)
}
  }
let car1= new car("BMW",1999);
let car2=new car("porsche",2007);
let car3=new car("rollsroyce",1980);

console.log(car1.year)
console.log(car3.name);
car1.add();
car2.add();
car3.add();

class car{
  constructor(name,year){
    this.car=name;
    this.year=year;
  }
  drive(){
    console.log(this.car+" is driving");
  }
}
let car1=new car("toyota",2003);
console.log(car1.year)
car1.drive();

--------shallow copy-------

let phone=["iphone","redme","realme"];
let shallowCopy=phone;
shallowCopy.push("oppo");
shallowCopy[2]="samsung";
console.log("original : ",phone);
console.log("shallowCopy : ",shallowCopy);

let car1={name:"BMW"}
// let car2=car1
let car2=Object.assign({},car1);
car2.name='volvo'
console.log(car1);
console.log(car2);

let worker={
  name:"alice",
  age:"34",
  place:"new york"
}
console.log("worker=>",worker);
let newemployee=worker;
newemployee.name="sia"
  newemployee.age=30;
  newemployee.place="landon"
console.log("newemployee=>",newemployee)


------deep copy-------
const Original={a:4,b:{c:2}};
const deepCopy=(JSON.parse(JSON.stringify(Original)));
deepCopy.b.c=6;
console.log(Original.b.c);

let car=["bmw","benz"];
let deepCopy=[...car];
deepCopy.push("porsche");
deepCopy[1]="mini";
deepCopy.splice(0,2,"toyota","GTR");
deepCopy.pop();
console.log("original",car);
console.log("deepCopy",deepCopy);


-------frst prprty------
let obj={name:"wafa",age:17,city:"vadakara"}

console.log(Object.values(obj));
console.log(Object.keys(obj));
console.log(Object.entries(obj));

-----instence------
class car{
  constructor(name){
    this.name=name;
  }
} 
let car1=new car ("vallksvagon");
let car2=new car("lamborgini");
console.log(car1.name);
console.log(car2.name);

--------memorized------

function memoizedSquare(){
  let stored={};
  return function(n){
    if (stored[n]){
      console.log("from stored")
      return stored[n];
      }else{
      console.log("calculating");
      let result=n*n;
      stored[n]=result;
      return result;
    }
  };
  }
let square= memoizedSquare();
console.log(square(56))
console.log(square(34))
console.log(square(86))
console.log(square(56))

function memoizedReverse(){
  let stored={};
  return function(str){
    if (stored[str]){
      console.log("from stored.");
      return stored[str];
    }else{
      console.log("reversed...")
      let result=str.split("").reverse().join("")
      stored[str]=result;
      return result;
    }
  }
}
let reverse=memoizedReverse();
console.log(reverse("hello"));
console.log(reverse("hello"));
console.log(reverse("world"));

function add(a,b){
  return a+b
}
console.log(add(34,64))
add();