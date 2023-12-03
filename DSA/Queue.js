let queue = []
let len = queue.length
let maxSize = 5


//add element in queue
let enqueue = (val) => {
    if (len === maxSize) {
        console.log("Queue is full");
    } else {
        queue[len] = val
        len++
    }
}

//remove element in queue 
// logic is switch the element 
let dequeue = () => {

    for (let i = 0; i < queue.length; i++) {
        queue[i] = queue[i + 1]
    }
    len--
    queue.length = len
    console.log(queue);
}


let front = () => {
    console.log(`Front Element is: ${queue[0]}`);
}

let rear = () => {
    console.log(`Rear element is: ${queue[queue.length - 1]}`);
}


enqueue(10)
enqueue(20)
enqueue(30)
enqueue(40)
enqueue(50)
console.log(queue);

front()
rear()

dequeue()
dequeue()
dequeue()
dequeue()
dequeue()