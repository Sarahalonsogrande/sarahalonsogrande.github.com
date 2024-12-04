/* <script>
    document.querySelector('#btnDobles').addEventListener('click', () => {
    console.log('PULSADO')
    document.querySelectorAll('.roomDoble').forEach((room) => {
        room.style.backgroundColor = 'lightgreen';
    });
});

document.querySelector('#btnSingles').addEventListener('click', () => {
    console.log('PULSADO SINGLE')
    document.querySelectorAll('.roomSingle').forEach((room) => {
        room.style.backgroundColor = 'lightblue';
    });
});

</script>
<!-- <script>
    document.querySelector('#btnDoble).addEventListener('click', ()=> {
        console.log('PULSADO')
        document.querySelectorAll('.roomDoble).forEach((room)=>{
            room.style.backgroundColor = 'fuchsia';
        });
    });
</script> 

function ocultarPeliculas() {
    //1. Hacer desaparecer todas las películas
    document.querySelectorAll(".pelicula").forEach((pelicula) => {
        pelicula.style.display = "None";
    });
}

document.querySelector("#boton-drama").addEventListener("click", () => {
    //1. Hacer desaparecer todas las películas
    ocultarPeliculas();
    //2. Mostrar la seleccionada
    document.querySelectorAll(".drama").forEach((pelicula) => {
        pelicula.style.display = "Block";
    });
});
document.querySelector("#boton-terror").addEventListener("click", () => {
    //1. Hacer desaparecer todas las películas
    ocultarPeliculas();
    //2. Mostrar la seleccionada
    document.querySelectorAll(".terror").forEach((pelicula) => {
        pelicula.style.display = "Block";
    });
});
document.querySelector("#boton-comedia").addEventListener("click", () => {
    //1. Hacer desaparecer todas las películas
    ocultarPeliculas();
    //2. Mostrar la seleccionada
    document.querySelectorAll(".comedia").forEach((pelicula) => {
        pelicula.style.display = "Block";
    });
});
document.querySelector("#boton-todas").addEventListener("click", () => {
    document.querySelectorAll(".pelicula").forEach((pelicula) => {
        pelicula.style.display = "Block";
    });
});


*/

function ocultarPeliculas() {
    //1. Hacer desaparecer todas las películas
    document.querySelectorAll(".pelicula").forEach((pelicula) => {
        pelicula.style.display = "None";
    });
}

document.querySelector("#boton-drama").addEventListener("click", () => {
    //1. Hacer desaparecer todas las películas
    ocultarPeliculas();
    //2. Mostrar la seleccionada
    document.querySelectorAll(".drama").forEach((pelicula) => {
        pelicula.style.display = "Block";
    });
});