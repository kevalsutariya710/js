//! reverse str preserving all spaces

let fun = (str) => {

    let mainStr = str.split("")
    let start = 0
    let end = str.length - 1

    while (start < end) {

        if (mainStr[start] === " ") {
            start++
            continue
        }
        else if (mainStr[end] === " ") {
            end--
            continue
        }

        else {
            let temp = mainStr[start]
            mainStr[start] = mainStr[end]
            mainStr[end] = temp
            start++
            end--
        }
    }

    return mainStr.join("")

}

console.log(fun("a bc df"));