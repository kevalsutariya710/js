let str = "keval";

for (let i = 0; i < str.length; i++) {
    console.log(`${str[i].toUpperCase()}`);
}

// search
console.log(str.search("e"));



// first upper second lower create chaining
let st = "mahesh"

let ar = st.split("");
console.log(ar);

for (let i = 0; i < ar.length - 1; i++) {
    if (i % 4 == 0) {
        console.log(ar[i].toLowerCase());
    }
    else {
        console.log(ar[i].toUpperCase());
    }
}




// charAt
console.log(str.charAt(0));

//charCodeAt   // used for unicode
console.log(str.charCodeAt(0));


// find last char unicode
let last = str.length - 1;
console.log(last);
console.log(str.charCodeAt(last));


// space remover 
let s = "           hi                 "
console.log(s.trim());

//spit method // is used when we convert str to array
let str1 = "hello"
let d = str1.split("");
console.log(d);


// reverse the string
let str2 = "hello"

let v1 = []

let v = str2.split("");

for (let i = v.length - 1; i >= 0; i--) {
    v1.push(v[i]);
}

console.log(v1.join(''));