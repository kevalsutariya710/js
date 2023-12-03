// STACK

let arr = [];
let len = arr.length;

let maxSize = 5;


//PUSH
let push = (val) => {
    arr[len] = val;
    len++
}

// POP 
let pop = () => {
    len -= 1
    arr.length = len
}

let a = [10,20,30,40,50,60]
push(a);
push(6);
push(6);
pop();
// pop();
console.log(arr);



// reverse the str using stack
let str = "keval"
let st = str.split("")
let ar = []
let le = ar.length;

let pu = (val) => {
    ar[le] = val
    le++
}

let po = (val) => {
    le--
    ar.length = le
}

for (let i = 0; i < st.length; i++) {
    pu(st[i])
}
console.log(ar);

for (let i = 0; i < st.length; i++) {
    po(st[i])
}
console.log(ar);