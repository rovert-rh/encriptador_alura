//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"


const mesage = document.querySelector(".mesage");
const mensaje = document.querySelector(".mensaje");
let imagenAnterior = URL("Images/seg.png");

function btnencriptar(){
    const textEncriptado = encriptar(mesage.value)
    mensaje.value=textEncriptado
    mesage.value="";
    mensaje.style.backgroundImage="none";
}
function btdesnencriptar(){
    const textEncriptado = desencriptar(mesage.value)
    mensaje.value=textEncriptado
    mesage.value="";
    mensaje.style.backgroundImage="none";
}

function encriptar(stringEncriptado){
    let matriz = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()
    stringEncriptado = stringEncriptado.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    
    for(let i = 0; i < matriz.length; i++ ){
        if(stringEncriptado.includes(matriz[i][0])){
            stringEncriptado=stringEncriptado.replaceAll(matriz[i][0],matriz[i][1])
        }
    }
    return stringEncriptado
}
function desencriptar(stringDesencriptado){
    let matriz = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()
    stringDesencriptado = stringDesencriptado.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    
    for(let i = 0; i < matriz.length; i++ ){
        if(stringDesencriptado.includes(matriz[i][0])){
            stringDesencriptado=stringDesencriptado.replaceAll(matriz[i][1],matriz[i][0])
        }
    }
    return stringDesencriptado
}
    function copiarContenido() {
        var textarea = document.querySelector('.mensaje');
        textarea.select();
        document.execCommand('copy');
        mensaje.value = "";
    }
    var botonCopiar = document.querySelector('.copiar');
    botonCopiar.addEventListener('click', copiarContenido); 
    imagenAnterior = mensaje.style.backgroundImage;



