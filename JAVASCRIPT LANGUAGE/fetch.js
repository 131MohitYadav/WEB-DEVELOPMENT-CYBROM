async function Demo(){

// fetch () -> it used for get the data from the server on api
// async -> it allowing it to run without blocking other code.
// it always return promise 
// await ->  javascript wait for promise to resolve before moving on
 let apidata = await
 fetch("https://jsonplaceholder.typicode.com/comments")
    let fdata = await apidata.json() // convert to json object
    let api = document.querySelector('#apidata')
    let dt = fdata.map((e) => {
        return e.name + e.id + e.email + "\n"
    })
    //console.log(fdata)
    api.innerHTML = dt;

}
Demo();