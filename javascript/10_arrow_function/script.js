function funcName(v1, v2, v3) {
    return v1 + v2 + v3;
}

let varFun = function (v1, v2, v3) {
    return v1 + v2 + v3;
};

// let arrFun = (v1, v2, v3) => {
//     return v1 + v2 + v3;   // With {} → Must use explicit return
// };

// If you remove {} arrow function uses implicit return
let arrFun = (v1, v2, v3) => v1 + v2 + v3;

// OR simple arrow function example
// let arrFun = v1 => v1 * v1;

let result1 = funcName(10, 20, 30);
let result2 = varFun(10, 20, 30);
let result3 = arrFun(10, 20, 30);

console.log(`result1 : ${result1}`);
console.log(`result2 : ${result2}`);
console.log(`result3 : ${result3}`);