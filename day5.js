let promise = new Promise((resolve,reject)=>{
  let success=true;
  if (resolve) resolve("✅success!");
  else reject ("❌error!");
});
promise
.then(result=>console.log(result))
.catch(error=>console.log(error));

let promise=new Promise((resolve,reject)=>{
  console.log("number one;")
  let success=false;
  
  if (success){
    resolve("success✅");
  }else{
    reject("error❌");
  }
});
promise
.then(result=> console.log("number two;",result))
.catch(err=> console.log("number three;",err));

let promise= new Promise((resolve,reject)=>{
  let status = true;
  if (status){
    resolve("success✅")
  }else reject ("error❌")
});
promise
.then(result=>console.log(result))
.catch(err=>console.log(err));




-----async&awaite------

******async*****
async function test(){
  return "Hello";
}
test().then(msg=>console.log(msg));

*****await*******
function delay(){
return new Promise(resolve=>setTimeout(()=>resolve("done"),3000));
}
async function test(){                
  console.log("start")
  let result=await delay();
  console.log(result);
console.log("end")
 
}
test();

async function orderpizza(){
  return new Promise((success,fail)=>{
    let shopopen =false;
  if(shopopen){
    success("pizzza ready!");
  }else{
    fail("shop closed!");
  }
});
}
orderpizza()
.then(result=>console.log(result))
.catch(err=>console.log(err));

const orderpizzaresult=await orderpizza();
console.log(orderpizzaresult)