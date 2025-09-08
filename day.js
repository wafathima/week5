
async function greet(){
  console.log("start")

// setTimeout(()=>resolve("finished"),1000)
let result= await new Promise (resolve => {
  // setTimeout(()"finish")
  setTimeout(()=>{
    resolve("finished")
  },4000)
// ("finish")
})
console.log("middle")
console.log(result)
}
greet()