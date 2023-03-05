
/* 

Ejercicio #11
Escriba un programa que resuelva el siguiente problema.

La politica de la compañia ¨Telefonica¨ es ¨Chismea mas por menos¨

Cuando se realiza una llamada, el cobro es por el tiempo que esta dura,
de tal forma que los primeros cinco minutos cuestan $ 1.00 c/u, los siguientes tres, 80￠c/u,
los siguientes dos minutos, 70￠c/u, y a partir del décimo minuto, 50￠c/u.

Además, se carga un impuesto de 3 % cuando es domingo, y si es dia hábil, en turno matutino, 15 %, y en turno vespertino, 10 %.

Realice un algoritmo para determinar cuanto debe pagar por cada concepto una persona que realiza una llamada

El algoritmo recibe como entrada el numero de minutos de la llamada
y el turno que puede ser domingo, dia habil matutino o dia habil vespertino

Nota: Utiliza prompt para preguntarle dichos datos de entrada al usuario

*/

/* 

    <= 5        1.00 cada minuto
    >5 && <=8   0.80 cada minuto
    >8 && <=10  0.70 cada minuto
    >10         0.50 cada minuto

    += 3%       Domingo
    +=15%       Turno matutino, no Domingo
    +=10%       Turno verpertino, no Domingo

*/


//Segunda soluciòn al ejercicio 11

const minutos = parseInt(prompt("Indique el numero de minutos de duracion de la llamada"),10)

const turno =parseInt(prompt("Indique el horario en el que realizo la llamada: 1:Domingo 2:Dia habil matutino 3:Dia habil verpertino"),10) 

function calcularIncremento(saldo, turno){
    let saldoFinal;

    switch (turno) {
        case 1:
            saldoFinal = saldo + (saldo * 0.03)
            break;
    
        case 2:
            saldoFinal = saldo + (saldo * 0.15)
            break;

        case 3:
            saldoFinal = saldo + (saldo * 0.10)
            break;

        default:
            saldoFinal = saldo
            break;
    }

    return saldoFinal
}

const PRIMER_BREAKPOINT = 5;
const SEGUNDO_BREAKPOINT = 8;
const TERCER_BREAKPOINT = 10;

const PRIMER_TARIFA= 1;
const SEGUNDA_TARIFA= 0.8;
const TERCER_TARIFA= 0.70;
const CUARTA_TARIFA= 0.50;

function calcularSaldoAcumulado(breakpoint){

    let saldoAcumulado = 0;

    switch (breakpoint) {
        case PRIMER_BREAKPOINT:
            saldoAcumulado = PRIMER_BREAKPOINT * PRIMER_TARIFA
            break;
        
        case SEGUNDO_BREAKPOINT:
            saldoAcumulado = (PRIMER_BREAKPOINT * PRIMER_TARIFA) + ((SEGUNDO_BREAKPOINT - PRIMER_BREAKPOINT) * SEGUNDA_TARIFA)
            break;

        case TERCER_BREAKPOINT:
            saldoAcumulado = (PRIMER_BREAKPOINT * PRIMER_TARIFA) + ((SEGUNDO_BREAKPOINT - PRIMER_BREAKPOINT) * SEGUNDA_TARIFA) + ((TERCER_BREAKPOINT - SEGUNDO_BREAKPOINT) * TERCER_TARIFA)
            break;

        default:
            break;
    }

    return saldoAcumulado;
}




function calcularDeuda(minutos, turno){

    let saldo = 0;

if (minutos <= PRIMER_BREAKPOINT){

    // Un dolar por minuto
    saldo = PRIMER_TARIFA * minutos
}

else if (minutos > PRIMER_BREAKPOINT && minutos <= SEGUNDO_BREAKPOINT){

    // 5 dolares por los primeros 5 minutos + resto * 0.80
    saldo = calcularSaldoAcumulado(PRIMER_BREAKPOINT) + ((minutos - PRIMER_BREAKPOINT) * SEGUNDA_TARIFA)
}

else if (minutos > SEGUNDO_BREAKPOINT && minutos <= TERCER_BREAKPOINT){

    // 5 dolares por los primeros 5 minutos
    // 3 minutos a 0.80 ===> 2.40 $
    // resto * 0.70
    saldo = calcularSaldoAcumulado(SEGUNDO_BREAKPOINT) + ((minutos - SEGUNDO_BREAKPOINT) * TERCER_TARIFA)
}

else if (minutos > TERCER_BREAKPOINT){

    // 5 dolares por los primeros 5 minutos
    // 3 minutos a 0.80 ==> 2.40 $
    // 2 minutos a 0.70 ==> 1.40 $
    // resto * 0.5 $
    saldo = calcularSaldoAcumulado(TERCER_BREAKPOINT) + ((minutos - TERCER_BREAKPOINT) * CUARTA_TARIFA)
}

const saldoFinal = calcularIncremento(saldo, turno)

return saldoFinal;

}


