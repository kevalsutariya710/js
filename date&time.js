let date = new Date()
console.log(date);


console.log(Date());


console.log(new Date().toLocaleString());


// live time show  //setinterval is a function for shown live time 
setInterval(() => {
    console.log(new Date().toLocaleTimeString());
}, 1000)

console.log(new Date().toLocaleDateString());