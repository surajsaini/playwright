"use strict";
function pyramid() {
    let k = 1;
    for (let i = 0; i < 5; i++) {
        for (let j = 1; j <= k; j += 2) {
            console.log(j);
            k++;
        }
    }
}
pyramid();
