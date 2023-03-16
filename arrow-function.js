/* 
function add(num1, num2){ 
    return num1 + num2;
} */

/* 
const add2 = function add(num1, num2){ 
    return num1 + num2;
}
 */


/* 
const add3 = function (num1, num2){ 
    return num1 + num2;
} */

//arrow function:
/* 
const add4 = (num1, num2)=>{ 
    return num1 + num2;
    //num1 + num2;
}

const sum = add4(15,30);
console.log(sum); */


const doMath =(x,y)=>{
    const sum =x+y;
    const dif =x-y;
    const multi = sum * dif;
    return multi;
}
const result = doMath(10,3);
console.log(result);