// Object

let automovil1 = {
  //propiedades
    marca:"Nissan",
    modelo:"Sentra",
    color: "Negro",
    velocidadMaxima:150,
    encender:function () {
      console.log("El auto fue encendido")
    },
    apagar:function(){
      console.log("El auto fue apagado")
    },
    acelerar: function(){
      console.log(`El auto acelera a velocidad maxima de ${this.velocidadMaxima}`)
    },
    pintar: function(){
      this.color="Azul"
    },
}

let automovil2 = {
  //propiedades
    marca:"Ford",
    modelo:"Mustang",
    color: "Blanco",
    velocidadMaxima:230,
    encender:function () {
      console.log("El auto fue encendido")
    },
    apagar:function(){
      console.log("El auto fue apagado")
    },
    acelerar: function(){
      console.log(`El auto acelera a velocidad maxima de ${this.velocidadMaxima}`)
    },
    pintar: function(){
      this.color="Azul"
    },
}

//Para imprimir en pantalla cada objeto
console.log(automovil1);
console.log(automovil2);

console.log(typeof automovil1); //Se imprime el tipo de dato 


/*Hay 2 formas de reasignar valor a las propiedades del objeto
  1.- objeto.propiedad = valor
  2.- objeto[propiedad] = valor 
      Esta forma permite indicar más de una propiedad dentro de los corchetes
*/

//Forma 1
automovil1.color = "Rojo";

//Forma 2
automovil2["color"]="Gris"; 

console.log(automovil1);
console.log(automovil2);

//Llamada al método

automovil1.encender();
automovil1.apagar();
automovil1.acelerar();
automovil1.pintar();  //Despuès de esta línea, el color del automóvil 1 cambiarà

console.log(automovil1);