class Partidos{
    constructor(equipos, fecha, hora){
        this.equipos = equipos;
        this.fecha = fecha;
        this.hora = hora;
    }
}

const URL = "https://jsonplaceholder.typicode.com";

//desplgar menu login


$(() => {
    $("#botonRegistrarse").click( function () {
        $("#formRegistro").slideToggle("slow")
    })
})



$(() => {
    $("#mostrarMenu").click( function () {
        $("#formularioPartidos").slideToggle("slow")
    })
})

//boton eliminar
$(() => {
    $("#eliminar").click(function() {
    $("#eliminar").parent().remove();
  });
})


// Guardar formuario



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


// Armar una tarjeta
function armarTarjeta(elemento) {
    
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");
    
    $(".tarjeta").append(`<h3>Partido: ${elemento.equipos}</h3>
    <div>Fecha: ${elemento.fecha}</div>
    <div>Hora: ${elemento.hora}</div>
    <button id="eliminar">Eliminar</button>                   
    `)
    
   
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

const infoPost = {
	nombre: "Fermin",
	equipo: "Racing Club",
};



$("#botonInicioSesion").click(() => {
	$.post(`${URL}/posts`, infoPost, ({ nombre, equipo }, state) => {
		if (state === "success") {
			$(".botonesLogIn").append(
				`<div>
                <h3>Bienvenido:</h3>
                                 <h4>Nombre: ${nombre}</h4>
                                 <h4>Hincha de ${equipo}</h4>
                </div>`
                                               
			);
		}
	});
});