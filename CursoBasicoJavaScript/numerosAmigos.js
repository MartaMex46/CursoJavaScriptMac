// Buscando parajas de números amigos menores a m

function buscandoAmigos(m){

    let numerosAmigos = [{}];

    for(let i = 1; i <= m; i++){

        let suma1 = 0;
        let suma2 = 0;

        for(let j = 1; j < i; j++){

            if(i % j == 0){
                suma1 = suma1 + j;
            }

            for(let k = 1; k < suma1; k++){
                if(suma1 % k == 0){
                    suma2 = suma2 + k;
                }  
            }   

        }

        if(suma1 = suma2){
            numerosAmigos.push({
                numero1: suma1,
                numero2: suma2
           } )
        }

    }

    return numerosAmigos;
}

console.log(buscandoAmigos(284));
