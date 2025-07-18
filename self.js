const ul = document.querySelector("#ul")
const icone1 = document.querySelector("#icone1")
const icone2 = document.querySelector("#icone2")
const increament = document.querySelector("#increament")
const count = document.querySelector("#count")
const reset = document.querySelector("#reset")


icone1.addEventListener("click", () =>{
    ul.style.display = "block"
    icone1.style.display = "none"
    icone2.style.display = "block"
})
icone2.addEventListener("click", () =>{
    ul.style.display = "none"
    icone1.style.display = "block"
    icone2.style.display = "none"
})

let startvalue = 0
increament.addEventListener("click", () =>{
startvalue ++
count.innerHTML = startvalue
})

reset.addEventListener("click", () =>{
    startvalue = 0
    count.innerHTML = startvalue

})