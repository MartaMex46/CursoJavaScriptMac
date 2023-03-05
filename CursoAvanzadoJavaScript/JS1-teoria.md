JS_1

>> ----- CóMO INSERTAR JAVASCRIPT

Se puede insertar:
    * en el <head> pero esto da problemas con la renderización,
    * en el <body> justo antes del final (recomendable), o
    * en un archivo con extensión .js, vinculando dentro de la etiqueta <script src="script.js"
      en el documento html. 

>>------ DOM y BOM

DOM (Document Object Model). El modelo de objeto de documento, es una interfaz de programación para los documentos HTML y XML. Facilita una representación estructurada del documento y define de qué manera los programas pueden acceder, al fin de modificar, tanto su estructura, estilo y contenido.

Se utiliza el objeto "document" en JavaScript para representar los objetos de HTML (DOM).

BOM (Browser Object Model). Incluye acceso a todas las áreas del navegador conocido como Window. Contiene al "document".

>>------ ENCONTRANDO ELEMENTOS (getElementBy o querySelector)

Para manipular elementos HTML con JavaScript, se debe acceder a ellos, para ello, hay varias maneras de "encontrarlos" utilizando los selectores simples o complejos de CSS como parámetros de dos métodos de "document":

    * document.getElementBy("Id", "ClassName", "TagName", etc.) //Usando selectores simples
        ej: document.getElementById("importante");              
    * document.querySelector("selector complejo");
        ej: document.querySelectorAll("p.importante")

Estas sentencias devuelven (excepto getElementById) un arreglo de elementos, según existan en el documento HTML. Así, se puede ser más específico en la búsqeuda, a través del arreglo.

        ej: document.querySelector("p.importante")[0];  //Selecciona del arreglo de parrafos con la 
                                                        clase "importante", el de la posición "0".

>>------ CAMBIANDO PROPIEDADES DE ELEMENTOS (variable.propiedad = nuevoValor)

El elemento a cambiar se asigna a una variable, y a esta variable se le asigna el nuevo valor de la propiedad, con el método innerHTML. (ej. en JS1)

elementoAnidado.innerHTML = "Texto modificado";
anchor.href = "http://www.googl.com";
anchor.style.color = "red";
anchor.sytle['margin-left']= "20px";

>>------ AGREGAR Y ELIMINAR PROPIEDADES (variable.setAttribute("valor propiedad"))

Se asigna a una variable el elemento a agregar propiedades, se le pasan las propiedades y su valor, por parámetro del método "setAttribute". 

ej. button.setAttribute("disabled",true); 

>>------ ELIMINAR PROPIEDADES (variable.removeAttribute("valor propiedad"))

Se asigna a una variable el elemento a eliminar propiedades, se le pasan las propiedades a elminar por parámetro del método "removeAttribute". 

ej. button.removeAttribute("disabled"); 

>>------ VALIDAR PROPIEDADES

hasAttribute -->> Para verificar si existe la propiedad en el elemento indicado
getAttribute -->> Para conocer el valor que tiene la propiedad indicada en el elemento

>>------ AGREGAR ELEMENTOS

document.createElement("nombreElemento");
document.body.appendChild(elemento);

Primero se crea el elemento(createElement) y luego se agrega al documento HTML (appendChild);

>>----- INSERTAR ELEMENTO (se llama desde el elemento padre)

document.elementoPadre.insertBefore(elementoAInsertar, elementoNodoReferencia);

>>----- REMOVER ELEMENTO (se llama desde el nodoPadre)

nodoPadre.removeChild(nodoHijoAEliminar);

>>----- REEMPLAZAR ELEMENTO (se llama desde el nodoPadre)

NodoPadre.replaceChild(nodoNuevo, nodoAReemplazar);

>>----- REFERNCIAR ELEMENTOS CERCANOS
    * children
    * nextElementSibling
    * previousElementSibling