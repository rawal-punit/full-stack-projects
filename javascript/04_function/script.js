// function defi

function funcName(v1, v2, v3 = 0) { // params (v1, v2 ,v3)

    console.log(`v1: ${v1}`)
     console.log(`v2: ${v2}`)
      console.log(`v3: ${v3}`)

      return v1 + v2 + v3
}

let result = funcName(20, 10 , 30) // arguments

console.log(`result :${result}`)