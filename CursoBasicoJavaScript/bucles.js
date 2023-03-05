

/* Esto ejemplifica un bucle infinito, puesto que no hay una declaración que lo rompa
while(true){
    console.log("Hola Mundo");   
}
*/

// Bucle While. Se ejecuta mientras la condición sea cierta, la cual evaluará cada iteración. 
// Se utiliza se desconoce la cantidad de veces que tendrá que ejecutarse

let contador = 0;

while(contador < 5){
    console.log("Hola Mundo");
    contador++;
}

let respuesta = '';

while(respuesta !== 'A'){
    respuesta = prompt("Escribe una letra")
}

//Ciclo for. Para ejecutar múltiples veces un mismo código. Se utiliza cuando se conoce el número de iteraciones que se requieren.

for(let i = 10; i >= 0; i--){
    console.log(`El número actual es: ${i}`);
}

// Iterando arreglos

const NOMBRES = ["Juan", "Pedro", "Maria", "Daniel"];

for(let i = 0; i < NOMBRES.length; i++){
    console.log(NOMBRES[i]);
}

// Ciclo for of. Permite iterar sobre los valores de un objeto iterable (arreglo, string, maps, nodelist)
// Solo lectura, no modificación
// Sirve para iterar en arreglos y cadenas de texto

let numeros = [45, 67, 89, 54, 34];

for(let numero of numeros){
    console.log(numero);
}


let frase = "La casa es bonita";

for(letra of frase){
    console.log(letra);
}

// Ciclo for in. Itera sobre las propiedades de un objeto.
// No sirve entonces para iterar arreglos

let usuario = {nombre: "Pedro", edad: 26, sexo:"masculino"};

for(let propiedad in usuario){
    console.log(`La propiedad ${propiedad} tiene el valor ${usuario[propiedad]}`);
}


