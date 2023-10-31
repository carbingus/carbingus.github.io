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
  const contenido = recibirContenidoPorBoton(botonId);
  elementoContenido.textContent = contenido.texto;

  
  const imagen = document.createElement('img');
  imagen.src = contenido.imagen;

  elementoContenido.appendChild(imagen);
}

function recibirContenidoPorBoton(botonId) {

  const contenido = {
    'cambiarContenido': {
      texto: 'Este es el contenido para el primer botón. Salút.',
      imagen: 'img/angy.png'
    },
    'cambiarContenido1': {
      texto: 'Este es el contenido para el segundo botón. Dankeschön.',
      imagen: 'img/angier.png'
    },
    'cambiarContenido2': {
      texto: 'Este es el contenido para el tercer botón. Grazie.',
      imagen: 'img/perritoLoco.png'
    },
    'cambiarContenido3': {
      texto: 'Bienvenido a un mini-test de contenido "dinámico" guardado en JS que cambia el HTML de la página según el botón seleccionado, en forma simplista retornando un nodo.',
      imagen: 'img/carbingus.png'
    }
  };

  return contenido[botonId];
}

const arrayLoco = [
  'img/3b1.jpg',
  'img/gordonFreeman.png',
  'img/media wuna.png',
  'img/mistakes.png',
  'img/Gman.png',
];

let indiceActual = 0;
let intervalo;

const intervaloCambio = 3000;
const imagenActual = document.getElementById('carru');
const botonAtras = document.getElementById('boton-atras');
const botonAdelante = document.getElementById('boton-adelante');

function carrusito(indice) {
  if (indice < 0) {
    indiceActual = arrayLoco.length - 1;
  } else if (indice >= arrayLoco.length) {
    indiceActual = 0;
  } else {
    indiceActual = indice;
  }
  imagenActual.src = arrayLoco[indiceActual];
  reiniciarIntervalo();
}

function mostrarSiguiente() {
  indiceActual++;
  carrusito(indiceActual);
}

function mostrarAnterior() {
  indiceActual--;
  carrusito(indiceActual);
}

function reiniciarIntervalo() {
  clearInterval(intervalo);
  intervalo = setInterval(mostrarSiguiente, intervaloCambio);
}

botonAtras.addEventListener('click', () => {
  mostrarAnterior();
  reiniciarIntervalo();
});

botonAdelante.addEventListener('click', () => {
  mostrarSiguiente();
  reiniciarIntervalo();
});

carrusito(indiceActual);