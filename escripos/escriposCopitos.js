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
    'cambiarContenido': 'Este es el contenido para el primer boton. Salút.',
    'cambiarContenido1': 'Este es el contenido para el segundo boton. Dankeschön.',
    'cambiarContenido2': 'Este es el contenido para el tercer boton. Grazie',
    'cambiarContenido3': 'Bienvenido a un mini-test de contenido "dinamico" guardado en js que cambia el html de la pagina segun el boton seleccionado, en forma simplistsa retornando un nodo.'
  };

  return contenido[botonId];
}

const arrayLoco = [
  'img/3b1.jpg',
  'img/media wuna.png',
  'img/mistakes.png',
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