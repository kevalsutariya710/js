// create a table

let a = 5;
for (let i = 1; i <= 10; i++) {
    console.log(a + " * " + i + " = " + (a * i));
}



// deafault argument


let sum = (a, b = 5) => {
    return a * b;
}

console.log(sum(2));