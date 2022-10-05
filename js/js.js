const resultDec = document.getElementById("resultDec");
const resultBin = document.getElementById("resultBin");
const resultOct = document.getElementById("resultOct");
const resultHex = document.getElementById("resultHex");
const dato = document.getElementById("dato");

let base = 10;
let regex = /[^0-9]/g;

document.getElementById("decimal").onclick = () => {
    dato.value = parseInt(dato.value, base).toString(base = 10);
    if (isNaN(dato.value)) dato.value = "";
    regex = /[^0-9]/g;
};
document.getElementById("binario").onclick = () => {
    dato.value = parseInt(dato.value, base).toString(base = 2);
    if (isNaN(dato.value)) dato.value = "";
    regex = /[^01]/g;
};
document.getElementById("octal").onclick = () => {
    dato.value = parseInt(dato.value, base).toString(base = 8);
    if (isNaN(dato.value)) dato.value = "";
    regex = /[^0-7]/g;
};
document.getElementById("hexadecimal").onclick = () => {
    dato.value = parseInt(dato.value, base).toString(base = 16);
    if (isNaN(dato.value)) dato.value = "";
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
    let nan = isNaN(numeroActual);
    
    resultDec.value = nan ? "" : numeroActual.toString(10);
    resultBin.value = nan ? "" : numeroActual.toString(2);
    resultOct.value = nan ? "" : numeroActual.toString(8);
    resultHex.value = nan ? "" : numeroActual.toString(16);
}