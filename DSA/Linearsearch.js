let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
let search = 20;
let position = undefined;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === search) {
        position = i;
        break;
    }
}

(position === undefined) ? console.log("Element not found") : console.log(position)
