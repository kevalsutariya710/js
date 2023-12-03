let arr = [10, 2, 80, 5, 6]

let Insertion = (arr) => {

    let j, CurrentVal

    for (let i = 1; i < arr.length; i++) {

        CurrentVal = arr[i]
        j = i - 1

        while (j >= 0 && arr[j] > CurrentVal) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = CurrentVal
    }
}

Insertion(arr)
console.log(arr);