const encriptador = document.querySelector(".encriptador__textarea__texto");
const mensaje = document.querySelector(".mensaje__textarea__texto");
const botonCopiar = document.getElementById("copiar");


// --------------- Botones ----------------


function botonEncriptar() {
  const textoEncriptado = encriptar(encriptador.value);
  mensaje.value = textoEncriptado;
  encriptador.value = "";
  document.querySelector(".mensaje__textarea__texto").style.zIndex = 1;
  document.querySelector(".mensaje__boton").style.display = "block";
}

function botonDesencriptar() {
  const textoDesencriptado = desencriptar(encriptador.value);
  mensaje.value = textoDesencriptado;
  encriptador.value = "";
  document.querySelector(".mensaje__textarea__texto").style.zIndex = 1;
  document.querySelector(".mensaje__boton").style.display = "block";
  
}

botonCopiar.addEventListener("click", () => {
  const textoACopiar = mensaje.value;
  copiarTexto(textoACopiar);
  encriptador.value = textoACopiar;
  mensaje.value = "";
  document.querySelector(".mensaje__textarea__texto").style.zIndex = -1;
  document.querySelector(".mensaje__boton").style.display = "none";
  
});

// --------------- Funciones ----------------


function encriptar(stringEncriptado) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringEncriptado = stringEncriptado.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptado.includes(matrizCodigo[i][0])) {
      stringEncriptado = stringEncriptado.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return stringEncriptado;
}

function desencriptar(stringDesencriptado) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringDesencriptado = stringDesencriptado.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptado.includes(matrizCodigo[i][1])) {
      stringDesencriptado = stringDesencriptado.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      );
    }
  }
  return stringDesencriptado;
}

function copiarTexto(texto) {
  navigator.clipboard.writeText(texto);

}