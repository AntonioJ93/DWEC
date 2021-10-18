// obtener 100 primeros números primos
const max=100;

function esPrimo(numero){
    if(numero===1){
        return true;
    }
    let primo=false;
    for (let index = numero; index > 2 ; index--) {
        if((numero % (index-1))===0){
          return false;
        }else{
            primo=true;
        }
    }
    return primo;
}

function obtenerNPrimos(nPrimos){
    let primos=[] ;
    for (let index = 0; primos.length < nPrimos; index++) {
            if (esPrimo(index)) {
                primos.push(index);
         }
    }
    return primos;
}

document.write(obtenerNPrimos(max));
console.log(obtenerNPrimos(max));
