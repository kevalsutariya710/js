
let num = 9
let str = ""

for (let i = 1; i <= num; i++) {

    for (let j = 1; j <= num; j++) {

        (i == 1 || j == 1 || i == num || j == num || i == j || j == num - i + 1) ? str += '*' : str += " "

    }

    str += '\n'

}

console.log(str);