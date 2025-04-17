// Variables And Constant

// var - function scoped
console.log(`\n var - function scoped\n`);
var num = 10;
console.log(`Before block : ${num}`);

{
    num = 20;
    console.log(`Inside block : ${num}`);
}

console.log(`After block : ${num}\n`);


// let - braces scoped

console.log(`\nlet - braces scoped\n`);
let value = 45;
console.log(`Before block : ${ value }`);

{
    let value = 20;
    console.log(`Inside block : ${ value }`);
}

console.log(`After block : ${ value }\n`);
    
// constant

const Realnum = 5;
console.log(Realnum);

Realnum = 90;   // Error!!!!  - constant can't be changed
console.log(Realnum); 

// Note - Always initialize a constant During declaration