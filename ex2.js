// find given year is a leap year or not (366 days)
let a = 2000


if (((a % 4 === 0) && (a % 100 !== 0)) || (a % 400 === 0)) {
    console.log(a + " is a leap year");
}
else {
    console.log(a + " is not a leap year");
}


// ternary Operator

(((a % 4 === 0) && (a % 100 !== 0)) || (a % 400 === 0)) ? console.log(`${a}is a leap year`) : console.log("is not a leap year")