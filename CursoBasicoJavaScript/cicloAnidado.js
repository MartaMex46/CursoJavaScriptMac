// CICLO ANIDADO

let estudiantes = [
    {nombre: "Juan", 
      materias: [{nombre: "matematicas", nota:16}, 
                {nombre: "lenguaje", nota:12},
                {nombre: "biología", nota:19}]},
    {nombre: "Maria",
      materias: [{nombre: "matematicas", nota:17}, 
                {nombre: "lenguaje", nota:10},
                {nombre: "biología", nota:20}] },
    {nombre: "Daniel",
      materias: [{nombre: "matematicas", nota:18}, 
                {nombre: "lenguaje", nota:9},
                {nombre: "biología", nota:15}] }
  ]
  
  // Para recorrerlo y alterar algunas notas
  
  for(let estudiante of estudiantes){
    for(let materia of estudiante.materias){
      if(materia.nombre === "matematicas"){
        materia.nota = materia.nota + 1;
      }
      if(materia.nombre === "lenguaje"){
        materia.nota = materia.nota + 1;
      }
    }
  }
  
  console.log(JSON.stringify(estudiantes));