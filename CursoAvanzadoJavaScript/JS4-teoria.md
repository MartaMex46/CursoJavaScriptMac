>>-- EVENTOS
Son sucesos específicos que les ocurren a los elementos de HTML.

Estos se pueden introducir directamente como propiedad en las etiquetas que contienen ese evento, o desde el script a través de eventos.

>>-- EVENT LISTENER o EVENT HANDLER

Para que un evento ocurra, debe llamarse al handler desde algún sitio. Esto se puede hacer:

    * Desde la etiqueta del elemento, o 
    <tag onclick="evento"/> 

    * Desde el script
    elemento.addEventListener("typeEvent", nombreEvento);

>>-- FLUJO DEL EVENTO
Se refiere al orden en el cual los eventos son recibidos en la página y cómo se propagan en todo el árbol del DOM.

Fase event-capturing.   Provee la oportunidad de interceptar el evento, empezando desde
                        "document" > HTML > body > elementPatern > elementChild (elemento clickeado) 
                        Esto notifica a los demás elementos que un evento está ocurriendo.

Fase event-bubling.     Permite dar respuesta final al evento. Recorre de regreso el árbol
                        elementChild > elementPatern > body > HTML > document
                        Ahora regresa con información relevante para los otros elementos del DOM

>>-- PREVENT DEFAULT Y STOP PROPAGATION

>>-- REMOVIENDO EVENT LISTENER

Es importante remover del eventListener los eventos que no se utilicen, para evitar el "memory leaks" que es una pérdida de memoria, ya que se pierde memoria ejecutando eventos que ya no se requieren.

>>-- MOUSE EVENTS
    * onmouseover   * onmousedown
    * onmouseout    * onmouseup

>>-- KEYBOARD EVENTS