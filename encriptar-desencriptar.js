const text = document.querySelector(".texto"); 
const copiar = document.getElementById("btn-copiar")

function encriptar(){
    const texto = encriptacion(text.value);
    document.getElementById("mostrar").innerHTML=texto;
    text.value = "";
    document.getElementById("btn-copiar").style.display = "inline";
}

function encriptacion(textoEncriptado){
    let convertirTexto = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoEncriptado = textoEncriptado.toLowerCase();

    for(let i = 0; i < convertirTexto.length; i++){
        if(textoEncriptado.includes(convertirTexto[i][0])){
            textoEncriptado = textoEncriptado.replaceAll(convertirTexto[i][0], convertirTexto[i][1]);
        }
    }
    return textoEncriptado;
}

function desencriptar(){
    const texto = desencriptacion(text.value);
    document.getElementById("mostrar").innerHTML=texto;
    text.value = "";
    document.getElementById("btn-copiar").style.display = "inline";
}

function desencriptacion(textoDesencriptado){
    let convertirTexto = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoDesencriptado = textoDesencriptado.toLowerCase();

    for(let i = 0; i < convertirTexto.length; i++){
        if(textoDesencriptado.includes(convertirTexto[i][1])){
            textoDesencriptado = textoDesencriptado.replaceAll(convertirTexto[i][1], convertirTexto[i][0]);
        }
    }
    return textoDesencriptado;
}

function copyText(){
    var textoCopiado = document.getElementById("mostrar").innerHTML;
    // textoCopiado.select();
    // textoCopiado.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(textoCopiado);

    var info = document.getElementById("btn-copy-text");
    info.innerHTML = "Copiado";
}

function infoBtnCopy(){
    var info = document.getElementById("btn-copy-text");
    info.innerHTML = "Botón de Copiar";
}