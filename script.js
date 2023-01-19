function imprimir(texto) {
  var salida = document.getElementById("texto_resultado");
  var salidaED = texto;
  salida.value = salidaED;
  document.getElementById("texto_resultado").style.backgroundImage = 'none';
  document.getElementById("texto_resultado").style.backgroundColor = 'white';
}

function encriptar() {
  var texto = document.getElementById("texto").value;
  texto = texto.toLocaleLowerCase();

  if (!(texto.includes('á') || texto.includes('é') || texto.includes('í') || texto.includes('ó') || texto.includes('ú')
    || texto.includes('@'))) {
    if (texto != "") {
      var caract_texto = Array.from(texto);
      for (var i = 0; i < caract_texto.length; i++) {
        switch (caract_texto[i]) {
          case 'a':
            caract_texto[i] = 'ai';
            break;
          case 'e':
            caract_texto[i] = 'enter';
            break;
          case 'i':
            caract_texto[i] = 'imes';
            break;
          case 'o':
            caract_texto[i] = 'ober';
            break;
          case 'u':
            caract_texto[i] = 'ufat';
            break;
        }
      }
      var textoEncrip = caract_texto.join('');
      imprimir(textoEncrip);

    } else {
      alert("El campo de texto esta vacio");
    }
  } else {
    alert("Contiene acentuacion y/o algun caracter especial");
  }
}

const caractDesencriptar = texto => {
  return texto
    .replace(/ai/g, 'a')
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u')
}
function desencriptar() {
  var texto = document.getElementById("texto").value;
  if (texto != "") {
    imprimir(caractDesencriptar(texto));
  } else {
    alert("El campo de texto esta vacio");
  }
}

function copiarResultado() {
  var contenido = document.getElementById("texto_resultado").value;
  navigator.clipboard.writeText(contenido);
  document.getElementById("texto_resultado").value = '';
  alert("Mensaje copiado");
  document.getElementById("texto").value = '';
} 
