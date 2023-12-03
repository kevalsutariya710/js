class LinkedList {
    constructor(data) {
        this.head = {
            value: data,
            next: null,
        }
        this.tail = this.head;
        this.count = 1;
    }

    newData(NewData) {

        let newNode = {
            value: NewData,
            next: null,
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.count++
    }
}

const list = new LinkedList(50)
list.newData(100)
list.newData(150)
list.newData(200)
list.newData(250)

console.log(list);