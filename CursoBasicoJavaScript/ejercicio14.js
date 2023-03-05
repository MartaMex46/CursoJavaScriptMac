/*
La raiz digital de un numero n se obtiene calculando la suma digital de n,
luego la suma digital del numero obtenido, y asi sucesivamente hasta llegar 
a un numero con un solo digito (cuya suma es igual al propio numero). 
Por ejemplo, la raiz digital de 492 es 6, ya que la suma digital de 492 es 15 y 
la suma digital de 15 es 6. Cree un programa que dado un numero n de 10 digitos maximo, 
devuelva como resultado la raiz digital de n.

Tip: utiliza el metodo toString() en el numero n para obtener los digitos de n 
*/

function sumaDigital(n){
    let sumatoria = 0;
    let numeroTransformado = n.toString();
    for(let digito of numeroTransformado){
      sumatoria = sumatoria + parseInt(digito);
    }
    return sumatoria;
  }
  
  function raizDigital(n){
    let raizDigital = 0;
    let numeroTransformado = n.toString();
    
    if(n.length === 1){
      raizDigital = n;
      return raizDigital;
    }
  
    let ultimaSumaDigital = sumaDigital(n);
  
    while(ultimaSumaDigital.toString().length > 1){
      ultimaSumaDigital = sumaDigital(ultimaSumaDigital);
    }
  
    return ultimaSumaDigital;
  }
    
  //Testeando código  
  console.log(raizDigital(492));