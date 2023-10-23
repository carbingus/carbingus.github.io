//script que permite mostrar contenidos segun id por boton apretado para /articulo.html
function mostrarContenido(id) {
    const contents = document.querySelectorAll('div[id^="testCambiarTexto"]');
    for (let i = 0; i < contents.length; i++) {
        if (contents[i].id === id) {
        contents[i].style.display = "block";
    } else {
     contents[i].style.display = "none";
     }
    }
}

function cambiarContenido(botonId) {

  const elementoContenido = document.querySelector('#contenido');

  elementoContenido.textContent = recibirContenidoPorBoton(botonId);
}

function recibirContenidoPorBoton(botonId) {

  const contenido = {
    'cambiarContenido' : 'Este es el contenido para el primer boton. Salút.',
    'cambiarContenido1': 'Este es el contenido para el segundo boton. Dankeschön.',
    'cambiarContenido2': 'Este es el contenido para el tercer boton. Grazie',
    'cambiarContenido3': 'Bienvenido a un mini-test de contenido "dinamico" guardado en js que cambia el html de la pagina segun el boton seleccionado, en forma simplistsa retornando un nodo.'
  };

  return contenido[botonId];
}

// TODO: script para carrousel

function carrusito(){
    let arrayLoco = [];
    arrayLoco.push(['img/3b1.jpg', 'Gato blin', '720px', '720px']);
    arrayLoco.push(['img/media wuna.png', 'Quaso', '720px', '720px']);
    arrayLoco.push(['img/mistakes.png', 'Errores', '720px', '720px']);

    
}

let primero = document.querySelector("form input");
primero.focus();
let reg_correo = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;


function validarDatos() {
  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var mensaje = document.getElementById("comentarios").value; // Cambiado de "mensaje" a "comentarios"
  var mensajeError = document.getElementById("mensajeError");
  mensajeError.innerHTML = ""; // Limpiar mensajes de error anteriores

  // Regex para validar el correo electrónico (reemplaza "tu_regex_de_correo" con tu regex actual)

  if (nombre === "") {
      mensajeError.innerHTML += "Por favor, ingrese su nombre.<br>";
  }

  if (email === "" || !reg_correo.test(email)) {
      mensajeError.innerHTML += "Por favor, ingrese un correo electrónico válido.<br>";
  }

   // Validar mensaje
   if (mensaje === "" || mensaje === null) {
    mensajeError.innerHTML += "Por favor, ingrese su mensaje.<br>";
} else if (mensaje.trim().length < 10) {
    mensajeError.innerHTML += "El mensaje debe tener al menos 10 caracteres.<br>";
}

if (mensajeError.innerHTML === "") {
    // Si no hay errores, el formulario se enviará
    return true;
} else {
    // Si hay errores, el formulario no se enviará
    return false;
}
}

document.addEventListener("DOMContentLoaded", function() {

  var textarea = document.getElementById("comentarios");
  var contadorCaracteres = document.getElementById("contadorCaracteres");


  var limiteCaracteres = parseInt(textarea.getAttribute("maxlength"));
  

  contadorCaracteres.textContent = "Caracteres restantes: " + limiteCaracteres;


  textarea.addEventListener("input", function() {

      var longitudTexto = textarea.value.length;
      

      var caracteresRestantes = limiteCaracteres - longitudTexto;
      contadorCaracteres.textContent = "Caracteres restantes: " + caracteresRestantes;
  });
});