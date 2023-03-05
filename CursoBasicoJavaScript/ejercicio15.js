/*
Ejercicio #15
Crear un algoritmo que imprima en pantalla un cuadrado  utilizando unicamente el digito *
El algoritmo  recibe como input un numero N, el cual representa
el numero de digitos que tendra el lado

Por ejemplo:
Input
N = 5

Output

*****
*****
*****
*****
*****
*/

const N = 9;

for(let i = 0; i < N; i++){

  let fila = '';

  for(let j = 0; j < N; j++){
    fila = fila + '*';
  }
  
  console.log(fila);
}