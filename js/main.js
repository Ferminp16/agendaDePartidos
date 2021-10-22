class Partidos{
    constructor(equipos, fecha, hora){
        this.equipos = equipos;
        this.fecha = fecha;
        this.hora = hora;
    }
}

const URL = "https://jsonplaceholder.typicode.com";

//desplgar menu login
// $("#botonRegistrarse").click(registrarse)
// $("#botonInicioSesion").click(logIn)

$(() => {
    $("#botonRegistrarse").click( function () {
        $("#formRegistro").slideToggle("slow")
    })
})

// $(() => {
//     $("#botonInicioSesion").click( function () {
//         $("#formLogIn").slideToggle("slow")
//     })
// })

$(() => {
    $("#mostrarMenu").click( function () {
        $("#formularioPartidos").slideToggle("slow")
    })
})

//boton eliminar

// Mostrar formulario
// let mostrarMenu = document.getElementById("mostrarMenu");
// mostrarMenu.addEventListener("click", mostrarFormulario);

// $("#mostrarMenu").click(mostrarFormulario)
// Guardar formuario

// let formulario = document.getElementById("formularioPartidos");
// formulario.addEventListener("submit", guardarPartido);

$("#formularioPartidos").submit(guardarPartido)
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

// Mostrar resgistrarse
// function registrarse() {
//     document.getElementById("menuRegistro").classList.toggle("oculto");
// }
// //Mostrar log in
// function logIn () {
//     document.getElementById("menuLogIn").classList.toggle("oculto");
// }
// // Mostrar menu partidos
// function mostrarFormulario() {
//     document.getElementById("menuAgregar").classList.toggle("oculto");
// }

// Armar una tarjeta
function armarTarjeta(elemento) {
    
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");
    
    $(".tarjeta").append(`<h3>Partido: ${elemento.equipos}</h3>
    <div>Fecha: ${elemento.fecha}</div>
    <div>Hora: ${elemento.hora}</div>
    <button id="eliminar">Eliminar</button>                   
    `)
    
    //    const partido = document.createElement("h3");
    //    partido.textContent = `Partido: ${elemento.equipos}`;
    //    tarjeta.appendChild(partido);
    
    //    const fecha = document.createElement("div");
    //   fecha.textContent = `fecha: ${elemento.fecha}`;
    //    tarjeta.appendChild(fecha);
    
    //    const hora = document.createElement("div");
    //    hora.textContent = `hora: ${elemento.hora}`;
    //    tarjeta.appendChild(hora);
    return tarjeta;
}

$(() => {
    $("#eliminar").click(function() {
    $("#eliminar").parent().remove();
  });
})

function mostrarListado(listadoPartidos) {
    let listado = document.getElementById("listado");
    listado.textContent = "";
    listadoPartidos.map(elemento => {
        listado.appendChild(armarTarjeta(elemento));
    });
    
}



mostrarListado(cargarListado());

const infoPost = {
	nombre: "Fermin",
	equipo: "Racing Club",
};



$("#botonInicioSesion").click(() => {
	$.post(`${URL}/posts`, infoPost, ({ nombre, equipo }, state) => {
		if (state === "success") {
			$(".botonesLogIn").append(
				`<div>
                <h3>Bienvenido:
                                 Nombre: ${nombre}
                                 Hincha de ${equipo}
                                               </h3>
                                                </div>`
			);
		}
	});
});