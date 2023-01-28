const textAria = document.querySelector(".text-area");
const contenedor = document.querySelector(".salida");

function btnEncriptar(){
    const textoEncriptado = encriptar(textAria.value);

    contenedor.value = textoEncriptado;
    textAria.value = "";
    contenedor.innerText = textoEncriptado;

    document.getElementById("copiar").style.display ="block";
}

function encriptar(stringEncriptado){
    let pedido = [["e","enter"], ["i","imes"], ["a","ai"],["o","ober"],["u","ufat"]];
    let resultado ="";

    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < pedido.length; i++){
        if(stringEncriptado.includes(pedido[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(pedido[i][0],pedido[i][1]);
        } 
    }

    return stringEncriptado;
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textAria.value);

    contenedor.value = textoEncriptado;
    textAria.value = "";
    contenedor.innerText = textoEncriptado;  
}

function desencriptar(stringDesencriptado){
    let pedido = [["e","enter"], ["i","imes"], ["a","ai"],["o","ober"],["u","ufat"]];
    let resultado = "";
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for( let i = 0; i < pedido.length; i++){
        if(stringDesencriptado.includes(pedido [i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(pedido[i][1],pedido[i][0]);
        }  
    }

    return stringDesencriptado;
}

function copiar() {
  const texto = document.querySelector(".salida").innerHTML;
  navigator.clipboard.writeText(texto);
  console.log("El mensaje fue copiado", texto);
}
