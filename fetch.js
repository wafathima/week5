fetchwithTimeout("https://jsonplaceholder.typicode.com/todos",3000)
.then(Response => Response.json())
.then(data => console.log(data))
.catch(err => console.error("error :",err.message))