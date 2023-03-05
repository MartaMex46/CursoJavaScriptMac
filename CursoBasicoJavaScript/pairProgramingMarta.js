// Ejercicios a Resolver:

 /*
1- Realizar un programa que calcule la suma de los divisores de n distintos de n
*/

function sumaDivisores(n){
  let suma = 0;

  for(let i = 1; i < n; i++){

      if(n % i == 0){
          suma = suma + i;
      }
  }

  return suma;

}

console.log(sumaDivisores(6));
console.log(sumaDivisores(6));


/*
2- Dos números son amigos, si cada uno de ellos es igual a la suma de los divisores del otro.
Por ejemplo. 220 y 284 son amigos, ya que:
Suma de divisores de 284 : 1+2 + 4 + 71 + 142 = 220
Suma de divisores de 220: 1 + 2 + 4 + 5 + 10 + 11 +20 + 22 + 44 + 55 + 110 = 284
Diseñe un algoritmo que muestre todas las parejas de números amigos menores o iguales que m, siendo m un número introducido por teclado.

m = numero limite para busqueda         // 500
i = numero iterado en la busqueda       // 220
a = sumaDivisores(i)	                  // 284
b = sumaDivisores(a)                    // 220
Son amigos si i === b && i !== a && i < a
*/

/* Primero declaramos una función que calcule la sumatoria de los divisores de un número
cualquiera, pasado por parámetro
*/

function sumaDivisores(n){
    let suma = 0;

    for(let i = 1; i < n; i++){

        if(n % i == 0){
            suma = suma + i;
        }
    }

    return suma;

}

/*
Luego implementamos una función que encuentre hasta el límite de la búsqueda,
los pares de números amigos
*/
const numerosAmigos = [];

function buscaAmigos(m){

  for(let i = 0; i <= m; i++){
    
    let a = sumaDivisores(i);
    let b = sumaDivisores(a);

    sumaDivisores(i);
    sumaDivisores(b);

    if(i === b && i !== a && i < a){
        numerosAmigos.push({Amigo1: i, Amigo2: a});
    }

  }

return numerosAmigos;

}

//Testeando código

console.log(buscaAmigos(3000));