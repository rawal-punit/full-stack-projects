document.getElementById("subform").addEventListener("submit", function(e) {
    e.preventDefault();

    let a = parseFloat(document.getElementById("num1").value)
    let b = parseFloat(document.getElementById("num2").value)

    let sum = a + b 

    document.getElementById("num3").value = sum
})

