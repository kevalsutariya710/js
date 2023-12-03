let arr = [5, 1, 90, 52, 80]

const selection = (arr) => {

    for (let i = 0; i < arr.length; i++) {
        let MinVal = i

        for (let j = i + 1; j < arr.length; j++) {

            if (arr[j] < arr[MinVal]) {
                MinVal = j
            }
        }

        let temp = arr[MinVal]
        arr[MinVal] = arr[i]
        arr[i] = temp

    }
}

selection(arr)
console.log(arr);