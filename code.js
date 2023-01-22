

function encriptar (){
    var texto = document.querySelector(".ingreseMensaje").value;
    var textoCifrado = texto.replace(/e/gim, "enter")
                            .replace(/i/gim, "imes")
                            .replace(/a/gim, "ai")
                            .replace(/o/gim, "ober")
                            .replace(/u/gim, "ufat");
    document.querySelector(".mensajeFinal").value = textoCifrado;
    document.querySelector(".ingreseMensaje").value = '';
    document.querySelector(".mensajeFinal").style.background = 'none';
    
}


function desencriptar (){ 
    var texto = document.querySelector(".ingreseMensaje").value;
    var textoCifrado = texto.replace(/enter/gim, "e")
                            .replace(/imes/gim, "i")
                            .replace(/ai/gim, "a")
                            .replace(/ober/gim, "o")
                            .replace(/ufat/gim, "u");
    document.querySelector(".mensajeFinal").value = textoCifrado;
    document.querySelector(".ingreseMensaje").value = ''
    document.querySelector(".mensajeFinal").style.background = 'none'; 
}


function copiar() {
    var textoACopiar = document.querySelector('.mensajeFinal').value;
    navigator.clipboard.writeText(textoACopiar);
    document.querySelector(".mensajeFinal").value = '';
    document.querySelector(".mensajeFinal").style.background = '';
    alert("Mensaje copiado correctamente");
}



