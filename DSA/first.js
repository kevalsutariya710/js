const fun = (array) => {
    for (let num of array) {
        for (let j = 0; j < array.length; j++) {
            if (num + array[j] === 0) {
                return [num, array[j]]
            }
        }
    }
}

const res = fun([-5, -3, -1, 0, 3, 8, 9])
console.log(res);