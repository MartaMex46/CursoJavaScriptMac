>>-- CLONAR ELEMENTOS

let objetivoAClonar = document.querySelector("selector"); ->> Establece el elemento a clonar
let clon = objetivoAClonar.cloneNode(true); ->> Clona el elemento y lo asigna a variable
document.nodoPadre.appendChild(clon); ->> Agrega el elemento clonado al DOM

>>-- CAMBIAR CLASES DE ELEMENTOS
>>-- FORMULARIOS
document.forms[indice];
document.forms[indice].elements[indice];
document.forms[indice].elements['nombreId'];
document.forms[indice].elements['nombreId'].value;



