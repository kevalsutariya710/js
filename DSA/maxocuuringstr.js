let fun = (str, obj, maxStr) => {

    for (let i = 0; i < str.length; i++) {
        // console.log(str[i]);
        let key = str[i]
        if (!obj[key]) {
            obj[key] = 0
        }

        obj[key]++

        if (maxStr == '' || obj[key] > obj[maxStr]) {
            maxStr = key
        }
    }

    console.log(obj);
    (obj[maxStr] >= 2) ? console.log(`The Maximum Occurring Str is: ${maxStr}`) :
        console.log(`There is no maximum str `)
}


let str = "hello$$$$^^^^^"
let obj = {}
let maxStr = ''

fun(str, obj, maxStr);