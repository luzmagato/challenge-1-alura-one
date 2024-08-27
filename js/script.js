const textArea = document.querySelector(".text-area");
const textArea1 = document.querySelector(".text-area1");

const btnCopiar = document.querySelector(".btn-copiar");

var matrizcodigo = [
    ["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"],
];

function validar() {
    mensaje.innerHTML = "";
    let listaValida = "abcdefghijklmnopqrstuvwxyz ";
    textoInicial = textArea.value;
    if (textoInicial != "") {
        for (let letra of textoInicial) {
            if (!listaValida.includes(letra)) {
                mensaje.innerHTML = " Sólo minúsculas, sin acento ni carácters especiales";
                return false;
            }
        }
        return true;
    } else {
        mensaje.innerHTML = "Introduzca mensaje";
    }
}

function btnEncriptar() {
    if (validar()) {
        const textoEncriptado = encriptar(textArea.value);
        textArea1.value = textoEncriptado;
        textArea.value = "";
        textArea1.style.backgroundImage = "none";
        btnCopiar.style.visibility = "visible"
    }
}

function encriptar(stringencriptada) {
    stringencriptada = stringencriptada.toLowerCase();
    for (let i = 0; i < matrizcodigo.length; i++) {
        if (stringencriptada.includes(matrizcodigo[i][0])) {
            stringencriptada = stringencriptada.replaceAll(
                matrizcodigo[i][0],matrizcodigo[i][1]);
        }
    }
    return stringencriptada;
}

function btnDesencriptar() {
    if (validar()) {
        const textoEncriptado = desencriptar(textArea.value);
        textArea1.value = textoEncriptado;
        textArea.value = "";
    }
}

function desencriptar(stringdesencriptada) {
    stringdesencriptada = stringdesencriptada.toLowerCase();
    for (let i = 0; i < matrizcodigo.length; i++) {
        if (stringdesencriptada.includes(matrizcodigo[i][1])) {
            stringdesencriptada = stringdesencriptada.replaceAll(
                matrizcodigo[i][1],matrizcodigo[i][0]);
        }
    }
    return stringdesencriptada;
}

function copiar() {
    let textoCopiar = document.querySelector(".text-area1").value;
    navigator.clipboard.writeText(textoCopiar);
    textArea1.value = "";
    textArea.value=textoCopiar;
}