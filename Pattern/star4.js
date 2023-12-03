// print  
// *********
//  *******
//   *****
//    ***
//     *

let str = ""
let a = 5
let inc = (a * 2) - 1

for (let i = a; i >= 1; i--) {

    for (let k = 1; k <= a - i; k++) {
        str += " ";
    }
    for (let j = 1; j <= inc; j++) {
        str += "*"
    }

    str += "\n"
    inc -= 2
}

console.log(str);