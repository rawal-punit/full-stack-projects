
let a = 20;
let b = 20;


if (a > b){
    console.log('a: ${a} is greater then b: ${b}');
}

else if (b > a){
    console.log('b: ${b} is greater then a: ${a}');
}

else{
    console.log('a: ${a} and b: ${b} are equale');
}


let c = 50;
let d = 60;
let e = 70;

if (c > d){
    {
        console.log('c: ${c} is greater then both'); 
    }
    if( d > e){
         console.log('c: ${c} is greater then both');
    }
}



let x = 30;
let y = 40;
let z = 50;


if(x > y , x > z){
     console.log('y: ${y} is greater then both');

}

else if(y > x , y > z){
     console.log('y: ${y} is greater then x : ${x}');
}

else {
    console.log('z: ${z} is greater then both');
}