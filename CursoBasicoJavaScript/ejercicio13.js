/*
Ejercicio #13
Dado un entero positivo n diga si dicho entero es perfecto. Un numero perfecto es un entero que es igual a la suma de los divisores propios menores que el mismo. Esto incluye al 1 pero no incluye a n.

Ejemplo: 6 es un numero perfecto pues es igual a la suma de sus divisores propios. Es decir 6 = 1 + 2 + 3. El programa devuelve un booleano si n es perfecto
*/

// Enteros positivos (1,2,3... infinito)
// n > 0 (entonces un entero positivo es mayor a 0)
// n es perfecto ? ==> Los números perfectos son aquellos iguales a la suma de sus divisores
// divisores impropios son 1 y n
// divisor propio ==> Se denomina factor o divisor propio de un número entero n, a otro número también entero que es divisor de n, pero diferente de 1 y de n. 


function esPerfecto(n){
    let suma = 0;

    for(let i = 1; i < n; i++){

        //este condicional nos encuentra los los divisores propios
        if(n % i == 0){
            suma = suma + i;
        }
    }

    return suma === n;
}

console.log(esPerfecto(6));
console.log(esPerfecto(8));

