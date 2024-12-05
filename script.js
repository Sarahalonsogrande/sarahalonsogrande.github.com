/*
let xCoche1 = 0;
let xCoche2 = 0;

document.querySelector("body").addEventListener("keydown",(event) => {
    if (event.code == 'KeyP') {
        xCoche1 = xCoche1 + 15;
        document.querySelector("#coche1").style.marginLeft = xCoche1 + "px";
    } else if (event.code == "KeyQ") {
        xCoche2 = xCoche2 + 15;
        document.querySelector("#coche2").style.marginLeft = xCoche2 + "px";
    }
});
*/

let xCoche1 = 0;
let xCoche2 = 0;

document.querySelector("body").addEventListener("keydown", (event) => {
    if (event.code == 'KeyP') {
        xCoche1 = xCoche1 + 15;
        // Usamos 'style' en vez de 'computedStyleMap'
        document.querySelector("#coche1").style.marginLeft = xCoche1 + "px";
    } else if (event.code == "KeyQ") {
        xCoche2 = xCoche2 + 15;
        // Igualmente, usamos 'style' para modificar la propiedad CSS
        document.querySelector("#coche2").style.marginLeft = xCoche2 + "px";
    }
});

