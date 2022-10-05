const resultDec = document.getElementById("resultDec");
const resultBin = document.getElementById("resultBin");
const resultOct = document.getElementById("resultOct");
const resultHex = document.getElementById("resultHex");
const dato = document.getElementById("dato");

let base = 10;
let regex = /[^0-9]/g;

document.getElementById("decimal").onclick = () => {
    dato.value = validar(parseInt(dato.value, base), base = 10);
    regex = /[^0-9]/g;
};
document.getElementById("binario").onclick = () => {
    dato.value = validar(parseInt(dato.value, base), base = 2);
    regex = /[^01]/g;
};
document.getElementById("octal").onclick = () => {
    dato.value = validar(parseInt(dato.value, base), base = 8);
    regex = /[^0-7]/g;
};
document.getElementById("hexadecimal").onclick = () => {
    dato.value = validar(parseInt(dato.value, base), base = 16);
    regex = /[^0-9a-fA-F]/g;
};

dato.oninput = () => {
    dato.value = dato.value.replace(regex, "");
    actualizarContenido();
}
/*dato.onkeydown = e => {
    if (regex.test(e.key)) {
        e.preventDefault();
    }
};*/

function actualizarContenido() {
    let numeroActual = parseInt(dato.value, base);
    
    resultDec.value = validar(numeroActual, 10);
    resultBin.value = validar(numeroActual, 2);
    resultOct.value = validar(numeroActual, 8);
    resultHex.value  = validar(numeroActual, 16);
}

function validar(n, b) {
    return isNaN(n) ? "" : n.toString(b);
}