// shaligram coding qu

// qu 1
let fibonacci = (num) => {

    let a1 = 0;
    let b1 = 1;
    let next;
    let arr = [];
    let reverseArr = [];

    for (let i = 0; i < num; i++) {

        arr.push(a1)
        next = a1 + b1;
        a1 = b1;
        b1 = next
    }

    for (let j = arr.length - 1; j >= 0; j--) {
        reverseArr.push(arr[j]);
    }

    return reverseArr
}

let num = 10;

console.log(fibonacci(num))




// qu 2

let n = 5;
let string = "";

//? External loop
for (let i = 1; i <= n; i++) {
    //? printing spaces
    for (let j = 1; j <= n - i; j++) {
        string += " ";
    }
    //? printing star
    for (let k = 0; k < 2 * i - 1; k++) {
        if (i === 1 || i === n) {
            string += "*";
        }
        else {
            if (k === 0 || k === 2 * i - 2) {
                string += "*";
            }
            else {
                string += " ";
            }
        }
    }
    string += "\n";
}
console.log(string);




let a = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];


for (let i = 0; i < a.length; i++) {

    for (let j = 0; j < a.length; j++) {

        if (a[j] > a[j + 1]) {
            let temp = a[j]
            a[j] = a[j + 1]
            a[j + 1] = temp
        }
    }
}
console.log(a);

