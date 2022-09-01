const inputTextoEncriptar = document.getElementById("input_text");
const encriptarButton = document.getElementById("encryptButton");
const desencriptarButton = document.getElementById('decryptButton');
const copiarButton = document.getElementById('copiarButton')
const munecoSvg = document.getElementById('muneco');
const desaparecer = document.getElementById('desaparecer');
const textoEncriptado = document.getElementById('textoEncriptado');
const textoRestriccionDeuso = document.getElementById('useRestrictionText');
const notificacionCopiado = document.getElementById('copiado');
let textoEncriptar = inputTextoEncriptar.value;
let textoDesencriptar = inputTextoEncriptar.value;

copiarButton.style.visibility = 'hidden';
encriptarButton.onclick = btnEncriptar;
desencriptarButton.onclick = btnDesencriptar;
copiarButton.onclick = btnCopiar;
inputTextoEncriptar.focus();
inputTextoEncriptar.oninput = verificar;

function verificar (texto)
  {
    const verificacion = inputTextoEncriptar.value;
    const regex = /^[a-z0-9\s]*$/;
    const regexVerificado = !regex.test(verificacion);

      regexVerificado ? (useRestrictionText.style.color = 'red',
      encriptarButton.disabled = true,
      desencriptarButton.disabled = true):(useRestrictionText.style.color = '#495057',
      encriptarButton.disabled = false,
      desencriptarButton.disabled = false);

  }


function btnEncriptar()
  {
    textoEncriptar = encriptar(inputTextoEncriptar.value);
    textoEncriptado.value = textoEncriptar;
    inputTextoEncriptar.value = "";
    copiarButton.style.visibility = "visible";
    desaparecer.style.visibility = 'hidden';
    munecoSvg.style.visibility = 'hidden';
  }

function btnDesencriptar()
  {
    textoDesencriptar = desencriptar(inputTextoEncriptar.value);
    textoEncriptado.value = textoDesencriptar;
    inputTextoEncriptar.value = "";
    copiarButton.style.visibility = "visible";
    desaparecer.style.visibility = 'hidden';
    munecoSvg.style.visibility = 'hidden';
  }

function btnCopiar()
  {
    textoEncriptado.select();
    navigator.clipboard.writeText(textoEncriptado.value)
    copiado.classList.add('copiado');
    copiado.textContent = 'Copiado';
    copiarButton.style.visibility = 'hidden';

    setTimeout(() =>
      {
        copiado.classList.remove('copiado');
        copiado.textContent = '';
        textoEncriptado.value = '';
        desaparecer.style.visibility = 'visible';
        munecoSvg.style.visibility = 'visible';
      }, 2000);
  }

function encriptar(textoEncriptar)
  {
    let matrizEncriptado = [["e","enter"], ["i","imes"], ["a", "ai"], ["o","ober"], ["u","ufat"], ["0","mr"], ["1","bn"], ["2","rj"], ["3","wq"], ["4","pl"], ["5","qd"], ["6","tg"], ["7","yh"], ["8","zx"], ["9","kv"]];

    for (let i = 0; i < matrizEncriptado.length; i++) {
      if (textoEncriptar.includes(matrizEncriptado[i][0])) {
        textoEncriptar = textoEncriptar.replaceAll(matrizEncriptado[i][0], matrizEncriptado[i][1]);
      }
    }
    return textoEncriptar;
  }

function desencriptar(textoDesencriptar)
  {
    let matrizDesencriptado = [["enter","e"], ["imes","i"], ["ai", "a"], ["ober","o"], ["ufat","u"], ["mr","0"], ["bn","1"], ["rj","2"], ["wq","3"], ["pl","4"], ["qd","5"], ["tg","6"], ["yh","7"], ["zx","8"], ["kv","9"]];

    for (let i = 0; i < matrizDesencriptado.length; i++) {
      if (textoDesencriptar.includes(matrizDesencriptado[i][0])) {
        textoDesencriptar = textoDesencriptar.replaceAll(matrizDesencriptado[i][0], matrizDesencriptado[i][1]);
      }
    }
    return textoDesencriptar;
  }
