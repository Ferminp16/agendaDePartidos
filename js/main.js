class Partidos{
    constructor(equipos, fecha, hora){
        this.equipos = equipos;
        this.fecha = fecha;
        this.hora = hora;
    }
}

// Mostrar formulario
let mostrarMenu = document.getElementById("mostrarMenu");
mostrarMenu.addEventListener("click", mostrarFormulario);

// Guardar formuario

let formulario = document.getElementById("formularioPartidos");
formulario.addEventListener("submit", guardarPartido);

// Cargar listado al localStorage o iniciarlo
function cargarListado() {
    let listadoPartidos = JSON.parse(localStorage.getItem("listadoPartidos"));
    if(listadoPartidos == null) {
        return [];
    }
    return listadoPartidos;
}

// Guardar en locaStorage
function guardarListado(listadoPartidos) {
    localStorage.setItem("listadoPartidos", JSON.stringify(listadoPartidos));
    mostrarListado(listadoPartidos);
}

// Guardar partido
function guardarPartido(e){
    e.preventDefault();
    let equipos = document.querySelector("#equipos").value;
    let fecha = document.querySelector("#fecha").value;
    let hora = document.querySelector("#hora").value;

    let listadoPartidos = cargarListado();

    listadoPartidos.push(new Partidos(equipos, fecha, hora));

    guardarListado(listadoPartidos);

    document.getElementById("formularioPartidos").reset();
}

// Mostrar menu partidos
function mostrarFormulario() {
    document.getElementById("menuAgregar").classList.toggle("oculto");
}

// Armar una tarjeta
function armarTarjeta(elemento) {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");

    const partido = document.createElement("h3");
    partido.textContent = `Partido: ${elemento.equipos}`;
    tarjeta.appendChild(partido);

    const fecha = document.createElement("div");
    fecha.textContent = `fecha: ${elemento.fecha}`;
    tarjeta.appendChild(fecha);

    const hora = document.createElement("div");
    hora.textContent = `hora: ${elemento.hora}`;
    tarjeta.appendChild(hora);
    return tarjeta;
}

function mostrarListado(listadoPartidos) {
    let listado = document.getElementById("listado");
    listado.textContent = "";
    listadoPartidos.map(elemento => {
        listado.appendChild(armarTarjeta(elemento));
    });
}



mostrarListado(cargarListado());
































