// print 
//     *
//    **
//   ***
//  **** 
// *****

let str = ""
let a = 6

for (let i = 1; i <= a; i++) {

    for (let k = 1; k <= a - i; k++) {
        str += " "
    }

    for (let j = 1; j <= i; j++) {
        str += "*"
    }
    str += "\n"
}

console.log(str);