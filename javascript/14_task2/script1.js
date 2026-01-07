document.getElementById("subform").addEventListener("submit" , function (e){
    e.preventDefault()

    let a = (document.getElementById("name1").value)
     let b =(document.getElementById("name2").value)

     let sum = a +" " + b

      document.getElementById("result").innerText = sum
})