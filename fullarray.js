let arr = ["ramesh", 'mahesh', 'arjun', 'pandit', 'suresh'];

// print array 
console.log(arr[1]);

// find length of array
console.log(`length of array = ${arr.length}`);

// print last element in array
console.log(`print last element = ${arr[arr.length - 1]}`);

// for loop
for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i]}`);
}

// for in loop  
for (let elements in arr) {
    console.log(elements);  // this is print index number when  we print elements, for printing element pass arr[elements]
}

// for of loop
for (let elements of arr) {
    console.log(`${elements}`); // this is print array elements in array when we print elements
}

// for each loop    
// all in once 
arr.forEach((element, index, array) => {
    console.log(`this is forEach loop = ${element} ${index} `)
})

// index of 
console.log(arr.indexOf('ramesh'));


// push method   // it store ele at the last
const newarr = arr.push("hypush");
console.log(arr);
console.log(newarr);


// unshift method   // it store element at the first position 
const un = arr.unshift("hyunshift")
console.log(arr);
console.log(un);





// splice method
let arr1 = ['mahesh', 'suresh', 'raju', 'kaju', 'taju'];

// used to print values
console.log(arr1.slice(0, 5));

// add ele at the last but we have no idea about index number 
arr1.splice(arr1.length, 0, "maju1");
console.log(arr1);

// update suresh to Suresh
arr1.splice(arr1.indexOf('suresh'), 1, "Suresh")
console.log(arr1);

// delete Suresh to raju
arr1.splice(arr1.indexOf('Suresh'), 2)
console.log(arr1);



// map method
// find sqrt of array
let ar = [4, 9, 16, 25, 36];
let a1 = ar.map((ele) => {
    return Math.sqrt(ele);
})
console.log(a1);

// mul * 2 and print >10 ele
let a = a1.map(ele => ele * 2).filter((ele) => ele > 10)
console.log(a);




// filter method
let fil = ar.filter((ele) => {
    return ele === 16
});
console.log(fil);



// reducer

let newar = [1, 2, 3, 4, 5, 6];

let ans = newar.reduce((previousvalue, curEle) => {
    return previousvalue += curEle;
})
console.log(ans);



// using map & filter & reducer 
// find sqr of ele and print <10 and print sum

let an = newar.map((ele) => ele ** 2).filter((ele) => ele < 10).reduce((previousvalue, ele) => previousvalue += ele)
console.log(an);





let data = [5, 8, 6, 2, 1, 4, 2, 9]

data.sort((x, y) => x - y);

let res = 0;
for (let i = data.length - 1; i >= 0; i--) {

    if (data[i] !== data[data.length - 1]) {
        res = data[i];
        break;
    }
}
console.log("The second Largest is = " + res);