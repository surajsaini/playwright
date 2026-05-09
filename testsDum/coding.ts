

function pyramid() {

    let str1: String = "listen";
    let str2: String = "silernt";
    let b: boolean = true;


    if (str1.length != str2.length) {
        console.log("false");

        return;
    }
    else {
        for (let i = 0; i < str1.length; i++) {

            if (str2.indexOf(str1.charAt(i)) != -1) {

                b = true;
            }

            else {
                b = false;
                break;
            }
        }

    }
    console.log(b)

}

pyramid();