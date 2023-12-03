let a = () => {

    console.log("start timer");
    setTimeout(() => {
        let data = [1, 2, 3, 4];
        console.log(data);

        setTimeout((data) => {
            const studata = {
                name: "mahesh",
                age: 10
            }
            console.log(`Roll no is ${data} name is ${studata.name} `);

            setTimeout(() => {
                console.log(`name is => ${studata.name} age is => ${studata.age}`);
            }, 2000)

        }, 2000, data[0])

    }, 2000)

}

a()