
  console.log("start")
  setTimeout(()=>{
    console.log("finished")
  },4000)

console.log("middle")

fetch("https://jsonplaceholder.typicode.com/todos")
.then(response => response.json())
.then(json => console.log(json))