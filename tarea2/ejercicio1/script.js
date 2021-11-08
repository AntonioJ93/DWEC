
let temporizador;
let ventana;
const milisegundos=3000;

function nuevaVentana() {
    ventana=open("ventana.html","nueva","height=200,width=200");
    ventana.document.write("Ventana moviendose");
    temporizador=setInterval(function(){
        mover();
    }, milisegundos);
}

function mover() {
    let rangoMin=0;
    let rangoMax=1024;
    let posX=Math.random()*(rangoMax-rangoMin)+rangoMin;
    let posY=Math.random()*(rangoMax-rangoMin)+rangoMin;
    ventana.moveTo(posX,posY);
    ventana.blur();
}

function parar() {
    clearInterval(temporizador);
    ventana.document.write("Ventana Parada");
    ventana.blur();
}