

function pyramid() {

    let str: string = "my name is mohit";
    const arr: string = str.split(" ")
        .map(w => w[0].toUpperCase() + w.slice(1))
        .join(" ");



    console.log(arr);
}


pyramid();