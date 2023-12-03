let arr = [5, 2, 8, 90, 1, 0]

let Quick = (arr) => {

    if (arr.length < 2) {
        return arr
    }
    let pivot = arr[arr.length - 1]
    let left = []
    let right = []

    for (let i = 0; i < arr.length - 1; i++) {

        (arr[i] < pivot) ? left.push(arr[i]) : right.push(arr[i])
    }

    return [...Quick(left), pivot, ...Quick(right)];
}

console.log(Quick(arr));