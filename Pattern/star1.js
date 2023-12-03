// print
// *
// **
// ***
// ****
// *****


let string = "";

for (let i = 1; i <= 5; i++) {

    for (let j = 1; j <= i; j++) {

        string += "*";
    }

    string += "\n";
}

console.log(string);



let str = "";
for (let i = 0; i < 5; i++) {

    for (let j = 0; j < 5 - i; j++) {

        str += "*";

    }

    str += "\n";
}

console.log(str);


