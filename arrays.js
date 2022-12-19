const usuario1 = {
    nombre:"Juan",
    id:32,
    edad: 54
}

const usuario2 = {
    nombre:"Juan",
    id: 23,
    edad: 20
}

let usuarios = [usuario1, usuario2, {nombre:"Pedro", id:1, edad:10}];

console.log(usuarios);
console.log(usuarios[0]);

//Para modificar un arreglo

usuarios[0] = {nombre: "Maria", id: 2, edad: 25};

console.log(usuarios);

//Propiedad lenght

function miFuncion(){
    console.log("Mi funcion")
}

let lista = ["Manzana", 20, true, undefined, null, [1,2,3], miFuncion]

console.log(lista);
console.log(lista.length);              //Con este método se puede conocer la longitud del array
console.log(lista[0]);                  //Para acceder al primer elemento del array
console.log(lista[lista.length -1]);    //Para acceder al ùltimo elemento del array
