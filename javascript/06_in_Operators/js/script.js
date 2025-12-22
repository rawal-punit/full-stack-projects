
const myArray = [1,2,3,4,5,7,8,9]

console.log("exist or not: ", '4' in myArray)
console.log("exist or not: ", myArray.includes("4"))





//  identiry


let obj1 = { name: "john"}
let obj2 = { name: "john"}
let obj3 = { ...obj1}

console.log(obj1);
console.log(obj3);