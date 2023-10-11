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
    'cambiarContenido': 'Contenido pal boton "london".',
    'cambiarContenido1': 'Contenido pal boton Paris .',
    'cambiarContenido2': 'Contenido pal botonTokyo .',
    'cambiarContenido3': 'Contenido original aca .',
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
    let nombreValid = document.querySelector("nombre");
    let emailValid = document.querySelector("email");
    let mensajeValid = document.querySelector("mensaje");
    
  
    // $( "<p id='error_div'>Test</p>" ).appendTo( ".inner" ); / append
    // $( "#error_div" ).remove(); / remover
    if (nombreValid == "" || nombreValid == null) {
      //mostrar error en html
    }
  
    if (emailValid != "" && !reg_correo.test(emailValid.value)) {
    
      //mostrar error en html

    }
  
    if (mensajeValid == "" || mensajeValid == null) {
      
      //mostrar error en html
      
    } else if (mensajeValid.length < 10) {
      
      //mostrar error en html
      
    }

    if (terror){
      errores.style.display = "initial";
      return false;
    } else{
      let p = document.createElement("p");
      if (emailValid.value != ""){
        p.innerHTML =
        nombreValid.value + "(" + emailValid.value + ")"+ " ha escrito \n" +
        mensajeValid.value + ".";
      } else{
        p.innerHTML =
        nombreValid.value + " ha escrito; \n" +
        mensajeValid.value + ".";
      }
      mensajes.appendChild(p);
      document.forms["contacting"].reset();
      let primero = document.querySelector("form input");
      primero.focus();
    }
    return false;
  }

