let Palindrome = (str) => {

    let st = str.toLowerCase();

    let start = 0
    let end = st.length - 1
    let result = true;

    while (end > start) {

        if (st[start] !== st[end]) {
            result = false;
        }
        start++
        end--
    }
    return (result) ? `${str} = its palindrome` : `${str} = its not palindrome`
}

let str = 'Madam'

console.log(Palindrome(str));



//! another method
let fun = (str) => {

    let st = str.toLowerCase().split('').reverse().join('');
    (str.toLowerCase() === st) ? console.log("Palindrome") : console.log("Not");
}

fun(str)