// input: arr[] = {1, 4, 20, 3, 10, 5}, sum = 33
// Output: Sum found between indexes 2 and 4
// Explanation: Sum of elements between indices 2 and 4 is 20 + 3 + 10 = 33

let fun1 = (ar, sum) => {

    for (let i = 0; i < ar.length; i++) {

        let a = ar[i];

        if (a == sum) {
            return "The Index is" + i
        }
        else {

            for (let j = i + 1; j < ar.length; j++) {

                a += ar[j]

                if (a == sum) {
                    return "The Index between" + " " + i + " "+"to" + " " + j
                }
            }
        }
    }

    return "No Index Found"

}

let ar = [1, 4, 20, 3, 10, 5]
let sum = 33

console.log(fun1(ar, sum));