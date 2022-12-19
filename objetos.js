// Object

let automovil1 = {
    //propiedades
      marca:"Nissan",
      modelo:"Sentra",
      color: "Negro",
      velocidadMaxima:150
  }
  
  let automovil2 = {
    //propiedades
      marca:"Ford",
      modelo:"Mustang",
      color: "Blanco",
      velocidadMaxima:150
  }
  
  //Para imprimir en pantalla cada objeto
  console.log(automovil1);
  console.log(automovil2);
  
  console.log(typeof automovil1); //Se imprime el tipo de dato 
  
  
  /*Hay 2 formas de reasignar valor a las propiedades del objeto
    1.- objeto.propiedad = valor
    2.- objeto[propiedad] = valor  Esta permite dentro de los corchetes,
        indicar varias propiedades
  */
  
  //Forma 1
  automovil1.color = "Rojo";
  
  //Forma 2
  automovil1["color"]="Rojo";
  
  console.log(automovil1);