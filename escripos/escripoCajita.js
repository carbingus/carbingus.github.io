function validarDatos() {
  limpiarErrores();

  let primero = document.querySelector("form input");
  primero.focus();
  let reg_correo = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
  //let edad_verif = (1[89]|[2-9][0-9]);
  var nombre = document.getElementById("nombre").value.trim();
  var email = document.getElementById("email").value.trim();
  var mensaje = document.getElementById("comentarios").value.trim();

  if (nombre === '' || mensaje === '') {
    agregarError('Complete todos los campos obligatorios.');
    return false;
  }

  // validar mail
  if (!reg_correo.test(email)) {
    agregarError('Por favor, ingrese un correo electrónico válido');
    return false;
  }

  // validar mensaje
  if (mensaje === "" || mensaje === null) {
    agregarError('Ingrese su mensaje.')
    return false;
    //mensajeError.innerHTML += "Por favor, ingrese su mensaje.<br>";
  }

  mostrarDatosEnviados(nombre, email, mensaje);
  return false;
}

function agregarError(mensaje) {
  var listaErrores = document.getElementById('listaErrores');
  var errorItem = document.createElement('li');
  errorItem.className = 'error';
  errorItem.textContent = mensaje;
  listaErrores.appendChild(errorItem);
}

function limpiarErrores() {
  var listaErrores = document.getElementById('listaErrores');
  listaErrores.innerHTML = '';
}

function mostrarDatosEnviados(nombre, email, mensaje) {
  var datosEnviadosDiv = document.getElementById('mensajeExito');
  datosEnviadosDiv.innerHTML = '';

  var suceso = document.createElement('p');
  suceso.textContent = "Mensaje Enviado.";
  datosEnviadosDiv.appendChild(suceso);

  var nombreParrafo = document.createElement('p');
  nombreParrafo.textContent = 'Nombre: ' + nombre;
  datosEnviadosDiv.appendChild(nombreParrafo);

  var emailP = document.createElement('p');
  emailP.textContent = 'Email: ' + email;
  datosEnviadosDiv.appendChild(emailP);

  var mensajeParrafo = document.createElement('p');
  mensajeParrafo.textContent = 'Mensaje: ' + mensaje;
  datosEnviadosDiv.appendChild(mensajeParrafo);
}

window.onload = function () {
  document.getElementById('nombre').focus();
};

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