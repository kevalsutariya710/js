// codeforce problem A.Team
let fu = (ar) => {

    let count = 0
    if ((ar[0] + ar[1] + ar[2]) >= 2) {
        count++
    }
    return count

}

let ar = [1, 1, 1]

console.log(fu(ar));

//drink problem in Codeforce

const arr = [5, 100, 10, 1, 19, 90, 4, 3]

let fun = (arr) => {

    let a = arr[1] * arr[2];
    let b = Math.floor(a / arr[6])
    let c = Math.floor(arr[3] * arr[4])
    let d = Math.floor(arr[5] / arr[7])
    let res = Math.min(b, c, d) / arr[0]

    return Math.floor(res)
}

console.log(fun(arr))