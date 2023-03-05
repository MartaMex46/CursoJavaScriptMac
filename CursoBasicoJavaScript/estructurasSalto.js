//ESTRUCTURAS DE SALTO

function saludar(){
    console.log("Hola a todos");
  }
  
  saludar();
  
// Return. Tiene una doble función:
// 1. Retorna un valor
// 2. Corta la ejecución del código en la función en la que se encuentra

function saludar(){
    return "Hola a todos";
    console.log("Código inalcanzable")
  }
  
  const texto = saludar();
  
  console.log(texto);

