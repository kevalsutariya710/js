// print  
//    *
//   ***
//  *****
// *******

let str = ""
let inc = 1
let a = 5
let inc2 = (a * 2) - 1

for (let i = 1; i <= a; i++) {

    for (let k = 1; k <= a - i; k++) {
        str += " ";
    }
    for (let j = 1; j <= inc; j++) {
        str += "*"
    }

    str += "\n"
    inc += 2
}

for (let i = a; i >= 1; i--) {

    for (let k = 1; k <= a - i; k++) {
        str += " "
    }
    for (let j = 1; j <= inc2; j++) {
        str += '*'
    }

    str += '\n'
    inc2 -= 2
}

console.log(str);