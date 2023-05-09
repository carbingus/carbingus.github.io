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

//script para carrousel

function validarDatos() {
    let nombreValid = document.forms["contacting"]["nombre"].value;
    let emailValid = document.forms["contacting"]["email"].value;
    let mensajeValid = document.forms["contacting"]["mensaje"].value;

    if (nombreValid == "" || nombreValid == null){
        alert("Usted debe ingresar su nombre.")
        return false;
    }
    if (emailValid == "" || emailValid == null){
        alert("Usted debe ingresar su correo.")
        return false;
    }
    if (mensajeValid == "" || mensajeValid == null){
        alert("Usted no ha escrito ningun mensaje para enviar.")
        return false;
    } else if (mensajeValidñ.length<6){
        alert("Su mensaje no puede ser menor que 6 caracteres.")
    }

}