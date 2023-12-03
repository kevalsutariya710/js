let fun = (val) => {

    for (let i = 1; i <= val; i++) {

        if (i % 5 === 0 && i % 3 === 0) {
            console.log("FizzBuzz");
            i++
        }
        if (i % 5 === 0) {
            console.log("Fizz");
            i++
        }
        if (i % 3 === 0) {
            console.log("Buzz");
            i++
        }
        if (i > val) {
            break;
        }
        else {
            console.log(i);
        }
    }

}

// console.log(fun(10));
fun(15)