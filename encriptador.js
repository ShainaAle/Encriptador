function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function acentos(){
    textoX = document.getElementById('mensaje').value;
    return textoX;
}

function convertirTexto() {
    // Convertir cada letra según las reglas especificadas
    let textoX = "" + acentos();
    //console.log(textoX);
    textoX = textoX.replace(/e/g, "enter");
    textoX = textoX.replace(/i/g, "imes");
    textoX = textoX.replace(/a/g, "ai");
    textoX = textoX.replace(/o/g, "ober");
    textoX = textoX.replace(/u/g, "ufat");
    asignarTextoElemento('#cambio', textoX)
    return;
}

function desconvertirTexto() {
    let textoX = "" + acentos();
    textoX = textoX.replace(/enter/g, "e");
    textoX = textoX.replace(/imes/g, "i");
    textoX = textoX.replace(/ai/g, "a");
    textoX = textoX.replace(/ober/g, "o");
    textoX = textoX.replace(/ufat/g, "u");
    console.log(textoX);
    asignarTextoElemento('#cambio', textoX)
    return;
}

function limpiarCaja(caja) {
    document.querySelector(caja).value = '';
}

