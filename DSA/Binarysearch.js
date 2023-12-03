// in this find the mid value and search 
// this is applicable only sorted array

// There are two type 1. Iterative and 2. Recursive

let arr = [10, 20, 30, 40, 50, 60, 70, 80]
let find = 80
let start = 0
let end = arr.length - 1
let position = null


// 1 Iterative
while (start <= end) {

    let mid = Math.floor((start + end) / 2)

    if (arr[mid] === find) {
        position = mid
        break;
    }
    else if (arr[mid] < find) {
        start = mid + 1
    }
    else {
        end = mid - 1
    }
}

if (position == null) {
    console.log("Element Not Available");
} else {
    console.log(`The position is using Iterative: ${position}`);
}



//2. Recursive
let recFun = (arr, find, end, start) => {

    let mid = Math.floor((start + end) / 2);

    if (arr[mid] == find) {
        return position = mid;
    }
    else if (arr[mid] < find) {
        return recFun(arr, find, end, (mid + 1))
    }
    else {
        return recFun(arr, find, (mid - 1), start)
    }

}

recFun(arr, find, end, start)

if (position == null) {
    console.log("Element Not Available");
} else {
    console.log(`The position is using Recursive: ${position}`);
}