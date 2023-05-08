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

function carrousel(id) {
    
}