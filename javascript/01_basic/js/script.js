console.log("js connected")

const btn = document.getElementById("btn")
const title = document.getElementById("title")
const originalText = title.innerHTML
let flag = false;
btn.addEventListener("click" , () => {
    if (!flag){
        title.innerHTML = "Hello Punit"
    }
})