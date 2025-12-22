let result = ""

for(let row=1; row<=5; row++){
    for(let col=1; col<=5; col++){
     result = result + "*"
    }
    result = result + "\n"
}

console.log(result)



let output = ""

for(let row=1; row<=5; row++){
    for(let col=1; col<=row; col++){
     output = output + "*"
    }
    output = output + "\n"
}

console.log(output)



let b = ""

for(let row=5; row<=1; row++){
    for(let col=1; col<=row; col++){
     b = b + "*"
    }
    b = b+ "\n"
}

console.log(b)









// let a = ""

// for(let row=1; row<=5; row++){
//     for(let col=1; col<=row; col++){
//      a = a + `${col}`
//     }
//     a = a + "\n"
// }

// console.log(a)
