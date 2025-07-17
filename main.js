const icone1 = document.querySelector("#icone1")
const menu = document.querySelector("#menu")
const icone2 = document.querySelector("#icone2")
const count = document.querySelector("#count")
const increament = document.querySelector("#increament")
const reset = document.querySelector("#reset")

// console.log(icone1,menu)



icone1.addEventListener("click", () =>{
    menu.style.display = "block"
    icone1.style.display = "none"
    icone2.style.display = "block"
})

icone2.addEventListener("click", () =>{
    menu.style.display = "none"
    icone1.style.display = "block"
    icone2.style.display = "none"
})


let startvalue = 0;
increament.addEventListener("click", ()=>{
    startvalue ++
    count.innerHTML = startvalue
})

let start = 0;
reset.addEventListener("click", () =>{
    start
    count.innerHTML = start
})

