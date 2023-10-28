let primero = document.querySelector("form input");
primero.focus();
let reg_correo = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;


function validarDatos() {
  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var mensaje = document.getElementById("comentarios").value;
  var mensajeError = document.getElementById("mensajeError");
  var mensajeSuceso = document.getElementById("mensajeExito");
  var clonarMensaje = document.getElementById("retornoMensaje");

  mensajeSuceso.innerHTML = "";
  mensajeError.innerHTML = ""; // Limpiar mensajes de error anteriores


  // validar nombre
  if (nombre === "") {
    mensajeError.innerHTML += "Por favor, ingrese su nombre.<br>";
  }
  // validar mail
  if (email === "" || !reg_correo.test(email)) {
    mensajeError.innerHTML += "Por favor, ingrese un correo electrónico válido.<br>";
  }

  // validar mensaje
  if (mensaje === "" || mensaje === null) {
    mensajeError.innerHTML += "Por favor, ingrese su mensaje.<br>";
  } else if (mensaje.trim().length < 10) {
    mensajeError.innerHTML += "El mensaje debe tener al menos 10 caracteres.<br>";
  }

  if (mensajeError.innerHTML === "") {
    mensajeSuceso.innerHTML += "Mensaje enviado satisfactoriamente."
    mensajeSuceso.className = "mensajeExito";
    //error = true;
    if (clonarMensaje.innerHTML === "") {
      clonarMensaje.className = "mensajon";
      clonarMensaje.innerHTML = nombre + " ha escrito:<br>" + mensaje;
    }
    return false;
  } else {
    return false;
  }
}

document.addEventListener("DOMContentLoaded", function () {

  var textarea = document.getElementById("comentarios");
  var contadorCaracteres = document.getElementById("contadorCaracteres");


  var limiteCaracteres = parseInt(textarea.getAttribute("maxlength"));


  contadorCaracteres.textContent = "Caracteres restantes: " + limiteCaracteres;


  textarea.addEventListener("input", function () {

    var longitudTexto = textarea.value.length;


    var caracteresRestantes = limiteCaracteres - longitudTexto;
    contadorCaracteres.textContent = "Caracteres restantes: " + caracteresRestantes;
  });
});