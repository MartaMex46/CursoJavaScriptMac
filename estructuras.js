/*

FLUJO DE UN PROGRAMA.- Orden en el que se ejecutan las sentencias de un programa

SECUENCIAL. Si no se especifica otra cosa, se ejecutaràn las sentencias una despuès de la otra, desde arriba, hacia abajo.
CONDICIONAL. 

*/

//SELECCION SIMPLE (IF)

if(true){
    console.log("Me ejecuto si la condiciòn es verdadera")
}

if(false){
    console.log("Esta linea jamas sera leida por ser falsa")
}

let usuario = {
    nombre: "Juan",
    edad: 25,
    saldoInicial: 850
}

if(usuario.edad > 18 && usuario.saldoInicial > 1000){
    console.log("Puedes aperturar una cuenta")
}

//SELECCION DOBLE (IF, ELSE)

if (true) {
    console.log("Me voy a ejecutar")
}

else {
    //Si la condiciòn no se cumple, se ejecutarà este código
    console.log("Me ejecuto si la condicion no se ha cumplido")
}

let ciudadano = {
    nombre:"Antonio",
    edad: 25
}

if (ciudadano.edad >= 18){
    console.log("Puedes votar")
}

else{
    console.log("No tienes edad suficiente para votar")
}

console.log("Codigo posterior a la condiciòn, que se ejecutarà aunque la condiciòn no se cumple")